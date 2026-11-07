import { useState, useEffect, useId, useMemo } from "react";
import { Language } from "../lib/i18n";
import { portalClients, PortalClient, PortalFile } from "../data/flyers";
import { FlyerViewerModal } from "./flyers";
import { envConfig } from "../config/env";

interface FounderPortalPageProps {
  language: Language;
  onBack: () => void;
  onBookConsultation: () => void;
}

export function FounderPortalPage({
  language,
  onBack,
}: FounderPortalPageProps) {
  const isDe = language === "de";
  const passwordInputId = useId();

  // Password read strictly from centralized env config (zero hardcoded fallback)
  const configuredPassword = envConfig.founderPortalPassword;

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Scalable Master-Detail State
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedClientId, setSelectedClientId] = useState<string>(
    portalClients[0]?.id || ""
  );
  const [mobileView, setMobileView] = useState<"clients" | "files">("clients");

  // React Flyer Viewer Modal State
  const [activeFlyerFile, setActiveFlyerFile] = useState<PortalFile | null>(null);
  const [flyerAutoPrint, setFlyerAutoPrint] = useState<boolean>(false);

  // Restore session from sessionStorage if already authenticated
  useEffect(() => {
    try {
      const stored = sessionStorage.getItem("shams_founder_portal_auth");
      if (stored === "true") {
        setIsAuthenticated(true);
      }
    } catch {
      // sessionStorage unavailable/sandboxed
    }
  }, []);

  // Deep-link support for flyer preview: ?flyer=<id>&print=true
  useEffect(() => {
    if (!isAuthenticated) return;
    const params = new URLSearchParams(window.location.search);
    const flyerId = params.get("flyer");
    const autoPrintParam = params.get("print") === "true";
    if (flyerId) {
      for (const client of portalClients) {
        const match = client.files.find((f) => f.id === flyerId);
        if (match) {
          setSelectedClientId(client.id);
          setActiveFlyerFile(match);
          setFlyerAutoPrint(autoPrintParam);
          break;
        }
      }
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput.trim() === configuredPassword) {
      setIsAuthenticated(true);
      setErrorMsg("");
      try {
        sessionStorage.setItem("shams_founder_portal_auth", "true");
      } catch {
        // sessionStorage unavailable
      }
    } else {
      setErrorMsg(
        isDe
          ? "Das eingegebene Passwort ist nicht korrekt. Bitte prüfen Sie Ihre Eingabe."
          : "The entered password is incorrect. Please check your input."
      );
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPasswordInput("");
    setErrorMsg("");
    try {
      sessionStorage.removeItem("shams_founder_portal_auth");
    } catch {
      // ignore
    }
  };

  const handleCopyLink = async (file: PortalFile) => {
    const fullUrl = `${window.location.origin}${file.documentUrl}`;
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopiedId(file.id);
      setTimeout(() => setCopiedId(null), 2500);
    } catch {
      setCopiedId(file.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  // Filter clients and documents based on real-time search query
  const filteredClients = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return portalClients;

    return portalClients.filter((client) => {
      const nameMatch = client.name.toLowerCase().includes(q);
      const shortNameMatch = client.shortName.toLowerCase().includes(q);
      const locationMatch = client.location.toLowerCase().includes(q);
      const industryMatch = (
        isDe ? client.industry.de : client.industry.en
      ).toLowerCase().includes(q);
      const fileMatch = client.files.some((f) => {
        const title = (isDe ? f.title.de : f.title.en).toLowerCase();
        const desc = (isDe ? f.description.de : f.description.en).toLowerCase();
        return title.includes(q) || desc.includes(q);
      });

      return (
        nameMatch || shortNameMatch || locationMatch || industryMatch || fileMatch
      );
    });
  }, [searchQuery, isDe]);

  // Current active client in detail pane
  const activeClient: PortalClient | undefined = useMemo(() => {
    return (
      filteredClients.find((c) => c.id === selectedClientId) ||
      filteredClients[0] ||
      portalClients[0]
    );
  }, [filteredClients, selectedClientId]);

  // Total stats for the vault
  const totalFilesCount = useMemo(() => {
    return portalClients.reduce((acc, client) => acc + client.files.length, 0);
  }, []);

  return (
    <article className="min-h-screen bg-[#090D14] text-zinc-100 pt-24 pb-20 relative overflow-hidden selection:bg-red-900 selection:text-white">
      {/* Discreet Atmospheric Glow Accents */}
      <div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-red-600/10 blur-[120px] pointer-events-none select-none z-0"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-red-800/10 blur-[100px] pointer-events-none select-none z-0"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        {/* Top Header & Breadcrumb Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800/80 pb-4">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-[#DC2626] transition-colors cursor-pointer"
          >
            <span>←</span>
            <span>{isDe ? "Zurück zur Studio-Hauptseite" : "Back to Main Site"}</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-700/60 text-xs font-mono text-zinc-300">
              <span
                className={`h-2 w-2 rounded-full ${
                  isAuthenticated
                    ? "bg-emerald-400 shadow-sm shadow-emerald-400/50"
                    : "bg-[#DC2626] animate-pulse"
                }`}
              />
              {isAuthenticated
                ? isDe
                  ? "Gründer-Tresor entsperrt"
                  : "Founder Vault Unlocked"
                : isDe
                ? "Geschützter Bereich"
                : "Restricted Vault"}
            </span>

            {isAuthenticated && (
              <button
                type="button"
                onClick={handleLogout}
                className="text-xs font-bold text-zinc-400 hover:text-white px-3.5 py-1.5 rounded-full border border-zinc-800 hover:border-red-500/50 bg-zinc-900 hover:bg-zinc-800 transition-all cursor-pointer"
              >
                {isDe ? "Tresor sperren" : "Lock Vault"}
              </button>
            )}
          </div>
        </div>

        {/* ===================================================================
            1. LOCKED SCREEN STATE
            =================================================================== */}
        {!isAuthenticated ? (
          <div className="max-w-xl mx-auto py-12 sm:py-16">
            <div className="bg-zinc-900/90 backdrop-blur-xl rounded-3xl border border-zinc-800 shadow-2xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-[#DC2626] to-red-800" />

              <div className="mx-auto w-16 h-16 rounded-2xl bg-red-950/50 border border-red-800/40 flex items-center justify-center text-[#DC2626] shadow-inner">
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>

              <div className="space-y-2">
                <div className="inline-block text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#DC2626]">
                  {isDe
                    ? "STRENG VERTRAULICHER INHABER-BEREICH"
                    : "STRICTLY CONFIDENTIAL FOUNDER ACCESS"}
                </div>
                <h1 className="font-sans text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {isDe ? "Gründer- & Management-Portal" : "Founder & Management Portal"}
                </h1>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed max-w-md mx-auto">
                  {isDe
                    ? "Geschützter Dokumenten-Tresor für Dipl.-Ing. Majeed Shams mit unveröffentlichten B2B-Flyern, Partner-Profilen und direktem PDF-Generator."
                    : "Protected document vault for Dipl.-Ing. Majeed Shams with unpublished B2B collateral, client files, and on-demand PDF generation."}
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4 pt-2">
                <div className="space-y-1 text-left">
                  <label
                    htmlFor={passwordInputId}
                    className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400"
                  >
                    {isDe ? "Tresor-Passwort eingeben" : "Enter Vault Password"}
                  </label>
                  <div className="relative">
                    <input
                      id={passwordInputId}
                      type={showPassword ? "text" : "password"}
                      value={passwordInput}
                      onChange={(e) => {
                        setPasswordInput(e.target.value);
                        if (errorMsg) setErrorMsg("");
                      }}
                      placeholder={isDe ? "Passwort..." : "Password..."}
                      autoFocus
                      required
                      className="w-full px-4 py-3 text-sm rounded-xl border border-zinc-700 bg-zinc-950/80 focus:border-[#DC2626] focus:ring-1 focus:ring-red-500 outline-none transition-all pr-12 text-zinc-100 placeholder:text-zinc-600"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-200 p-1 text-xs font-semibold cursor-pointer"
                      title={showPassword ? "Hide" : "Show"}
                    >
                      {showPassword ? "✕" : "👁"}
                    </button>
                  </div>
                </div>

                {errorMsg && (
                  <div className="text-left text-xs font-semibold text-red-400 bg-red-950/40 border border-red-800/60 px-3.5 py-2.5 rounded-xl flex items-center gap-2">
                    <span className="font-bold">⚠️</span>
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-lg shadow-red-900/30 active:translate-y-0 cursor-pointer"
                >
                  {isDe ? "Tresor öffnen →" : "Unlock Vault →"}
                </button>
              </form>

              <div className="pt-2 border-t border-zinc-800 text-[11px] text-zinc-500">
                {isDe ? "Konfiguration: " : "Configuration: "}
                <code className="text-zinc-400 font-mono font-semibold">
                  VITE_FOUNDER_PORTAL_PASSWORD
                </code>
              </div>
            </div>
          </div>
        ) : (
          /* ===================================================================
              2. UNLOCKED DASHBOARD STATE (SCALABLE FOR 100+ CLIENTS)
              =================================================================== */
          <div className="space-y-6">
            {/* Executive Welcome & Secret Messaging Banner */}
            <div className="bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#DC2626]" />
              
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="inline-block text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#DC2626]">
                    <span>
                      {isDe
                        ? "VERTRAULICHE DATEIEN · INHABER-ZUGANG"
                        : "CONFIDENTIAL REPOSITORY · FOUNDER VAULT"}
                    </span>
                  </div>

                  <h1 className="font-sans text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {isDe
                      ? "Willkommen, Dipl.-Ing. Majeed Shams"
                      : "Welcome, Dipl.-Ing. Majeed Shams"}
                  </h1>

                  <p className="text-xs sm:text-sm text-zinc-400 max-w-3xl leading-relaxed">
                    {isDe
                      ? "Ihr exklusiver Dokumenten-Tresor: Verwalten und generieren Sie B2B-Flyer, Whitepaper und Präsentationen für alle Partner und Kunden on-the-fly als PDF. Keine statischen PDF-Dateilasten auf dem Server."
                      : "Your executive document vault: Access and generate B2B sales collateral, whitepapers, and presentation decks for clients on-demand as PDFs. Zero binary PDF server footprint."}
                  </p>
                </div>

                {/* Vault Metrics Indicator */}
                <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-2 text-xs">
                  <span className="px-3 py-1.5 rounded-full bg-red-950/60 text-red-300 font-mono font-bold border border-red-800/40">
                    🔒 {isDe ? "STRENG VERTRAULICH" : "STRICTLY CONFIDENTIAL"}
                  </span>
                  <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono">
                    <span>
                      {portalClients.length} {isDe ? "Partner" : "Clients"}
                    </span>
                    <span>·</span>
                    <span>
                      {totalFilesCount} {isDe ? "Dokumente" : "Files"}
                    </span>
                    <span>·</span>
                    <span className="text-emerald-400">0 MB Server-PDF</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Instant Search Bar for 100+ Clients */}
            <div className="relative">
              <div className="relative flex items-center">
                <span className="absolute left-4 text-zinc-500 text-base" aria-hidden="true">
                  🔍
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    isDe
                      ? "Suchen nach Partner, Stadt, Schlagwort oder Dokument..."
                      : "Search by client name, location, keyword, or document..."
                  }
                  className="w-full pl-11 pr-10 py-3.5 bg-zinc-900/90 border border-zinc-800 rounded-2xl text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-[#DC2626] focus:ring-1 focus:ring-red-600 transition-all shadow-inner"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 text-zinc-400 hover:text-white text-xs px-2 py-1 bg-zinc-800 rounded-lg cursor-pointer"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Mobile View Toggle (Fitts's Law: Thumb-friendly) */}
            <div className="lg:hidden flex items-center bg-zinc-900 p-1 rounded-xl border border-zinc-800 text-xs font-bold">
              <button
                type="button"
                onClick={() => setMobileView("clients")}
                className={`flex-1 py-2 text-center rounded-lg transition-all ${
                  mobileView === "clients"
                    ? "bg-[#DC2626] text-white shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {isDe ? "1. Partner auswählen" : "1. Select Client"} (
                {filteredClients.length})
              </button>
              <button
                type="button"
                onClick={() => setMobileView("files")}
                className={`flex-1 py-2 text-center rounded-lg transition-all ${
                  mobileView === "files"
                    ? "bg-[#DC2626] text-white shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {isDe ? "2. Dokumente & PDF" : "2. Files & PDF"} (
                {activeClient?.files.length || 0})
              </button>
            </div>

            {/* Master-Detail Scalable Workspace */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* ==============================================================
                  LEFT COLUMN: CLIENT DIRECTORY (MASTER LIST)
                  ============================================================== */}
              <div
                className={`lg:col-span-4 bg-zinc-900/80 border border-zinc-800/90 rounded-3xl p-4 sm:p-5 space-y-3 ${
                  mobileView === "files" ? "hidden lg:block" : "block"
                }`}
              >
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800 px-1">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-zinc-400">
                    {isDe ? "Partner-Verzeichnis" : "Client Directory"}
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500 bg-zinc-950 px-2 py-0.5 rounded-full border border-zinc-800">
                    {filteredClients.length}{" "}
                    {filteredClients.length === 1
                      ? isDe
                        ? "Eintrag"
                        : "Entry"
                      : isDe
                      ? "Einträge"
                      : "Entries"}
                  </span>
                </div>

                {filteredClients.length === 0 ? (
                  <div className="text-center py-10 px-4 space-y-3">
                    <p className="text-xs text-zinc-400">
                      {isDe
                        ? "Kein Partner mit diesem Suchbegriff gefunden."
                        : "No client matches your search."}
                    </p>
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="text-xs font-bold text-[#DC2626] hover:underline cursor-pointer"
                    >
                      {isDe ? "Suche zurücksetzen" : "Reset Search"}
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2 max-h-[580px] overflow-y-auto pr-1">
                    {filteredClients.map((client) => {
                      const isSelected = activeClient?.id === client.id;
                      const industry = isDe
                        ? client.industry.de
                        : client.industry.en;

                      return (
                        <button
                          key={client.id}
                          type="button"
                          onClick={() => {
                            setSelectedClientId(client.id);
                            setMobileView("files");
                          }}
                          className={`w-full text-left p-3.5 rounded-2xl transition-all flex items-center justify-between gap-3 border cursor-pointer ${
                            isSelected
                              ? "bg-zinc-800/90 border-[#DC2626] shadow-md shadow-red-950/20"
                              : "bg-zinc-950/50 border-zinc-800/60 hover:bg-zinc-800/50 hover:border-zinc-700"
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            {/* Logo Thumbnail */}
                            <div className="h-10 w-12 bg-white rounded-xl flex items-center justify-center p-1 shrink-0 border border-zinc-700/50 shadow-inner">
                              <img
                                src={client.logo}
                                alt={client.name}
                                className="max-h-7 max-w-full object-contain"
                              />
                            </div>

                            <div className="min-w-0">
                              <div className="text-xs font-bold text-white truncate">
                                {client.shortName}
                              </div>
                              <div className="text-[11px] text-zinc-400 truncate">
                                {industry}
                              </div>
                              <div className="text-[10px] text-zinc-500 font-mono">
                                {client.location}
                              </div>
                            </div>
                          </div>

                          {/* File Count Badge */}
                          <div className="flex items-center gap-2 shrink-0">
                            <span
                              className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                                isSelected
                                  ? "bg-[#DC2626] text-white"
                                  : "bg-zinc-800 text-zinc-400"
                              }`}
                            >
                              {client.files.length}
                            </span>
                            <span className="text-zinc-600 text-xs">→</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* ==============================================================
                  RIGHT COLUMN: DETAIL PANE & COMPACT FILE LIST
                  ============================================================== */}
              <div
                className={`lg:col-span-8 space-y-4 ${
                  mobileView === "clients" ? "hidden lg:block" : "block"
                }`}
              >
                {activeClient ? (
                  <div className="bg-zinc-900/80 border border-zinc-800/90 rounded-3xl p-6 sm:p-8 space-y-6">
                    {/* Selected Client Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-zinc-800">
                      <div className="flex items-center gap-4">
                        <div className="h-14 w-28 bg-white rounded-2xl flex items-center justify-center p-2 shrink-0 shadow-md">
                          <img
                            src={activeClient.logo}
                            alt={activeClient.name}
                            className="max-h-10 max-w-full object-contain"
                          />
                        </div>
                        <div>
                          <div className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#DC2626]">
                            <span>●</span> {isDe ? "AUSGEWÄHLTER PARTNER" : "ACTIVE CLIENT"}
                          </div>
                          <h2 className="font-sans text-lg sm:text-xl font-extrabold text-white tracking-tight">
                            {activeClient.name}
                          </h2>
                          <p className="text-xs text-zinc-400 font-light mt-0.5">
                            {isDe ? activeClient.description.de : activeClient.description.en}
                          </p>
                        </div>
                      </div>

                      <div className="shrink-0 flex items-center gap-2">
                        <span className="px-3 py-1.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300">
                          {activeClient.files.length} {isDe ? "Dateien" : "Files"}
                        </span>
                      </div>
                    </div>

                    {/* Compact High-Density Files List */}
                    <div className="space-y-3">
                      <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 px-1">
                        {isDe ? "Verfügbare Dokumente & Druckvorlagen" : "Available Documents & Print Templates"}
                      </div>

                      <div className="space-y-3">
                        {activeClient.files.map((file) => {
                          const title = isDe ? file.title.de : file.title.en;
                          const desc = isDe ? file.description.de : file.description.en;
                          const badge = file.badge
                            ? isDe
                              ? file.badge.de
                              : file.badge.en
                            : null;

                          return (
                            <div
                              key={file.id}
                              className="bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-700 rounded-2xl p-4 sm:p-5 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                            >
                              {/* File Meta */}
                              <div className="space-y-1.5 flex-1 min-w-0">
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-red-950/80 text-red-400 border border-red-800/40">
                                    {file.classification || "VERTRAULICH"}
                                  </span>

                                  {badge && (
                                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-300">
                                      {badge}
                                    </span>
                                  )}

                                  <span className="text-[10px] font-mono text-zinc-500">
                                    {file.format}
                                  </span>
                                </div>

                                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
                                  {title}
                                </h3>

                                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                                  {desc}
                                </p>
                              </div>

                              {/* Actions: Generate PDF & Preview */}
                              <div className="flex flex-wrap items-center gap-2 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-zinc-800/60">
                                {/* Direct PDF Generator Button */}
                                <button
                                  type="button"
                                  onClick={() => {
                                    setActiveFlyerFile(file);
                                    setFlyerAutoPrint(true);
                                  }}
                                  className="inline-flex items-center gap-2 py-2 px-3.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-red-950/30 cursor-pointer"
                                  title={isDe ? "PDF direkt generieren & drucken" : "Generate & print PDF"}
                                >
                                  <svg
                                    className="w-3.5 h-3.5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                                    <path d="M6 14h12v8H6z" />
                                  </svg>
                                  <span>{isDe ? "PDF generieren" : "Generate PDF"}</span>
                                </button>

                                {/* Preview Button */}
                                <button
                                  type="button"
                                  onClick={() => {
                                    setActiveFlyerFile(file);
                                    setFlyerAutoPrint(false);
                                  }}
                                  className="inline-flex items-center gap-1.5 py-2 px-3 rounded-xl border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 hover:border-zinc-500 text-zinc-200 text-xs font-semibold transition-colors cursor-pointer"
                                  title={isDe ? "Vorschau im Studio Viewer" : "Preview in Studio Viewer"}
                                >
                                  <span>👁</span>
                                  <span>{isDe ? "Vorschau" : "Preview"}</span>
                                </button>

                                {/* Copy Link */}
                                <button
                                  type="button"
                                  onClick={() => handleCopyLink(file)}
                                  className={`inline-flex items-center gap-1 py-2 px-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                                    copiedId === file.id
                                      ? "bg-emerald-950 border-emerald-500 text-emerald-300"
                                      : "bg-zinc-900 border-zinc-700 text-zinc-400 hover:text-zinc-200 hover:border-zinc-600"
                                  }`}
                                  title={isDe ? "Link kopieren" : "Copy Link"}
                                >
                                  {copiedId === file.id ? (
                                    <>
                                      <span>✓</span>
                                      <span className="text-[11px]">{isDe ? "Kopiert" : "Copied"}</span>
                                    </>
                                  ) : (
                                    <>
                                      <span>🔗</span>
                                    </>
                                  )}
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-12 text-center text-zinc-400 text-sm">
                    {isDe
                      ? "Wählen Sie links einen Partner aus, um die zugehörigen Dokumente anzuzeigen."
                      : "Select a client from the left directory to view associated documents."}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* React Flyer Viewer & Print Studio Modal */}
      <FlyerViewerModal
        file={activeFlyerFile}
        isOpen={!!activeFlyerFile}
        onClose={() => setActiveFlyerFile(null)}
        autoPrint={flyerAutoPrint}
        initialLanguage={language}
      />
    </article>
  );
}
