import { useState, useEffect, useCallback } from "react";
import { Language, Translations } from "../lib/i18n";
import { CONTACT } from "../lib/contact";
import { Icon } from "./icon";
import { AkhLogo } from "./AkhLogo";

interface VCardPageProps {
  t: Translations["vCard"];
  language: Language;
  onBack: () => void;
  onBookConsultation: () => void;
}

export function VCardPage({
  t,
  onBack,
  onBookConsultation,
}: VCardPageProps) {
  const [showQrModal, setShowQrModal] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  // Directly trigger the .vcf download
  const handleDownloadVCard = useCallback(() => {
    const link = document.createElement("a");
    link.href = "/majeed-shams.vcf";
    link.download = "Majeed-Shams-Architekt.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 4000);
  }, []);

  // Support deep-link auto-download: /card?download=1
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get("download") === "1" || params.get("download") === "true") {
        handleDownloadVCard();
      }
    } catch {
      // Ignore if searchParams fails in sandbox
    }
  }, [handleDownloadVCard]);

  return (
    <article className="min-h-screen bg-[#F8F9FA] text-zinc-900 pt-24 pb-32 sm:pb-24 relative selection:bg-[#DC2626] selection:text-white">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-zinc-900 to-[#F8F9FA] pointer-events-none -z-10 opacity-[0.06]" />

      <div className="mx-auto max-w-xl px-4 sm:px-6 space-y-6">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between border-b border-zinc-200/80 pb-4">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-600 hover:text-[#DC2626] transition-colors cursor-pointer py-1"
          >
            <span>←</span>
            <span>{t.backToHome}</span>
          </button>

          <button
            type="button"
            onClick={() => setShowQrModal(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-zinc-100 text-zinc-800 text-xs font-semibold border border-zinc-200 shadow-2xs hover:shadow-xs transition-all cursor-pointer"
            title={t.showQrCode}
          >
            <Icon name="qrcode" className="text-sm text-zinc-700" />
            <span>{t.showQrCode}</span>
          </button>
        </div>

        {/* Digital Business Card Main Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-zinc-200/80 overflow-hidden">
          {/* Top Brand Banner */}
          <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 px-6 pt-6 pb-16 text-white relative">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono tracking-widest uppercase text-red-400 font-semibold">
                {CONTACT.companyName} · {t.pageSubtitle}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-medium text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {t.verified}
              </span>
            </div>
          </div>

          {/* Profile Header Overlapping Banner */}
          <div className="px-6 pb-6 pt-0 relative">
            <div className="flex flex-col items-center text-center -mt-14 relative mb-2">
              {/* Founder Avatar */}
              <div className="relative group shrink-0 mb-3">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden ring-4 ring-white shadow-xl bg-zinc-100 border border-zinc-200">
                  <img
                    src="/images/team/Image.jpg"
                    alt={CONTACT.founder}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div
                  className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center shadow-md ring-2 ring-white"
                  title="AKH Hessen verifiziert"
                >
                  <Icon name="check" className="text-xs text-white" />
                </div>
              </div>

              {/* Title & Organization */}
              <div className="space-y-1 max-w-md">
                <h1 className="text-xl sm:text-2xl font-extrabold text-zinc-950 tracking-tight leading-snug">
                  {CONTACT.founder}
                </h1>
                <p className="text-xs sm:text-sm font-semibold text-[#DC2626]">
                  {t.roleSubtitle}
                </p>
                <p className="text-[11px] sm:text-xs text-zinc-500 font-medium">
                  {CONTACT.legalName} · {t.subTitleDetail}
                </p>
              </div>
            </div>

            {/* Statutory Chamber Accreditation Tag */}
            <div className="mt-4 p-3 rounded-xl bg-zinc-50 border border-zinc-200/90 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white border border-zinc-200 shrink-0">
                <AkhLogo className="h-5 w-auto" />
              </div>
              <div className="text-[11px] text-zinc-700 leading-tight">
                <strong className="text-zinc-900 block font-semibold">
                  {t.chamberTitle}
                </strong>
                <span className="text-zinc-500">{CONTACT.chamber}</span>
              </div>
            </div>

            {/* Primary Thumb-Zone Action: Save to Contacts (.vcf) */}
            <div className="mt-6 space-y-2">
              <button
                type="button"
                onClick={handleDownloadVCard}
                className="w-full py-4 px-6 rounded-2xl bg-zinc-950 hover:bg-[#DC2626] active:scale-[0.98] text-white font-bold text-sm sm:text-base shadow-xl shadow-zinc-900/10 hover:shadow-red-900/20 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group"
                aria-label={t.saveButtonText}
              >
                <div className="p-1.5 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                  <Icon name="address-card" className="text-base sm:text-lg" />
                </div>
                <div className="text-left">
                  <span className="block leading-tight">
                    {t.saveButtonText}
                  </span>
                  <span className="text-[10px] font-normal text-zinc-300 block">
                    {t.saveButtonSubtext}
                  </span>
                </div>
                <Icon name="download" className="ml-auto text-sm opacity-60 group-hover:opacity-100 group-hover:translate-y-0.5 transition-all" />
              </button>

              {downloadSuccess && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs text-center flex items-center justify-center gap-2 animate-fadeIn">
                  <span>✓</span>
                  <span>{t.downloadSuccessNotice}</span>
                </div>
              )}
            </div>

            {/* Direct Scannable QR Code Section */}
            <div className="mt-6 p-5 rounded-2xl bg-zinc-50 border border-zinc-200/90 text-center space-y-3">
              <div className="flex items-center justify-center gap-2 text-zinc-700 text-xs font-bold uppercase tracking-wider">
                <Icon name="qrcode" className="text-[#DC2626]" />
                <span>{t.qrSectionTitle}</span>
              </div>
              <button
                type="button"
                onClick={() => setShowQrModal(true)}
                className="mx-auto block p-3 bg-white rounded-2xl border border-zinc-200 shadow-2xs hover:shadow-md hover:border-red-300 transition-all cursor-pointer group"
                title={t.showQrCode}
              >
                <img
                  src="/images/qr-card.svg"
                  alt="QR-Code Digitale Visitenkarte"
                  className="w-44 h-44 sm:w-48 sm:h-48 object-contain transition-transform group-hover:scale-[1.02]"
                  loading="eager"
                  width="192"
                  height="192"
                />
              </button>
              <p className="text-[11px] text-zinc-500 max-w-xs mx-auto leading-relaxed">
                {t.qrSectionSubtitle}
              </p>
            </div>

            {/* Quick Action Matrix (1-Tap Direct Touch) */}
            <div className="mt-6 space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-zinc-400 block px-1">
                {t.quickActionsHeading}
              </span>

              <div className="grid grid-cols-2 gap-2.5">
                {/* Frankfurt Call */}
                <a
                  href={CONTACT.phoneFrankfurtHref}
                  className="p-3 rounded-2xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/90 transition-all flex items-center gap-3 group active:scale-95"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-800 group-hover:text-[#DC2626] group-hover:border-red-200 transition-colors shrink-0 shadow-2xs">
                    <Icon name="phone" className="text-sm" />
                  </div>
                  <div className="text-left min-w-0">
                    <span className="text-[11px] font-bold text-zinc-900 block truncate">
                      {t.frankfurtOffice}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-mono truncate block">
                      {CONTACT.phoneFrankfurt}
                    </span>
                  </div>
                </a>

                {/* Rödermark Call */}
                <a
                  href={CONTACT.phoneRoedermarkHref}
                  className="p-3 rounded-2xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/90 transition-all flex items-center gap-3 group active:scale-95"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-800 group-hover:text-[#DC2626] group-hover:border-red-200 transition-colors shrink-0 shadow-2xs">
                    <Icon name="phone-volume" className="text-sm" />
                  </div>
                  <div className="text-left min-w-0">
                    <span className="text-[11px] font-bold text-zinc-900 block truncate">
                      {t.roedermarkOffice}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-mono truncate block">
                      {CONTACT.phoneRoedermark}
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-emerald-50/70 hover:bg-emerald-100/70 border border-emerald-200/80 transition-all flex items-center gap-3 group active:scale-95"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Icon name="whatsapp" className="text-base" />
                  </div>
                  <div className="text-left min-w-0">
                    <span className="text-[11px] font-bold text-zinc-900 block truncate">
                      {t.whatsappTitle}
                    </span>
                    <span className="text-[10px] text-emerald-700 font-medium truncate block">
                      {t.whatsappSubtitle}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="p-3 rounded-2xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/90 transition-all flex items-center gap-3 group active:scale-95"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-800 group-hover:text-[#DC2626] group-hover:border-red-200 transition-colors shrink-0 shadow-2xs">
                    <Icon name="envelope" className="text-sm" />
                  </div>
                  <div className="text-left min-w-0">
                    <span className="text-[11px] font-bold text-zinc-900 block truncate">
                      {t.emailTitle}
                    </span>
                    <span className="text-[10px] text-zinc-500 truncate block">
                      {CONTACT.email}
                    </span>
                  </div>
                </a>
              </div>

              {/* Consultation Booking CTA */}
              <button
                type="button"
                onClick={onBookConsultation}
                className="w-full p-3.5 rounded-2xl bg-[#DC2626]/10 hover:bg-[#DC2626]/15 border border-[#DC2626]/30 text-zinc-900 transition-all flex items-center justify-between group active:scale-98 cursor-pointer mt-2"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#DC2626] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Icon name="calendar-check" className="text-sm" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-bold text-zinc-950 block">
                      {t.bookConsultationTitle}
                    </span>
                    <span className="text-[10px] text-zinc-600 block">
                      {t.bookConsultationSubtitle}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#DC2626] group-hover:translate-x-1 transition-transform pr-2">
                  →
                </span>
              </button>
            </div>

            {/* Office Locations */}
            <div className="mt-8 space-y-3">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-zinc-400 block px-1">
                {t.locationsHeading}
              </span>

              <div className="space-y-2">
                {/* Frankfurt */}
                <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/90 flex items-start justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-zinc-950 block">
                      {t.hqTitle}
                    </span>
                    <p className="text-[11px] text-zinc-600">
                      {CONTACT.primaryAddress.street}, {CONTACT.primaryAddress.city}
                    </p>
                  </div>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT.primaryAddress.full)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-white border border-zinc-200 hover:border-zinc-300 text-[11px] font-semibold text-zinc-700 shadow-2xs hover:shadow-xs transition-all shrink-0 flex items-center gap-1.5"
                  >
                    <Icon name="location-dot" className="text-xs text-[#DC2626]" />
                    <span>{t.routeButton}</span>
                  </a>
                </div>

                {/* Rödermark */}
                <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/90 flex items-start justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-zinc-950 block">
                      {t.branchTitle}
                    </span>
                    <p className="text-[11px] text-zinc-600">
                      {CONTACT.branchAddress.street}, {CONTACT.branchAddress.city}
                    </p>
                  </div>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT.branchAddress.full)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-white border border-zinc-200 hover:border-zinc-300 text-[11px] font-semibold text-zinc-700 shadow-2xs hover:shadow-xs transition-all shrink-0 flex items-center gap-1.5"
                  >
                    <Icon name="location-dot" className="text-xs text-[#DC2626]" />
                    <span>{t.routeButton}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links & Web */}
            <div className="mt-8 pt-6 border-t border-zinc-200/80 flex items-center justify-between">
              <a
                href="/"
                className="text-xs font-bold text-zinc-900 hover:text-[#DC2626] transition-colors flex items-center gap-1.5"
              >
                <Icon name="globe" className="text-zinc-400" />
                <span>{t.websiteText}</span>
              </a>

              <div className="flex items-center gap-3">
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-[#0A66C2] hover:text-white text-zinc-600 flex items-center justify-center transition-colors text-xs"
                  title="LinkedIn"
                  aria-label="LinkedIn Profile"
                >
                  <Icon name="linkedin-in" />
                </a>
                <a
                  href={CONTACT.xing}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-[#006567] hover:text-white text-zinc-600 flex items-center justify-center transition-colors text-xs"
                  title="XING"
                  aria-label="XING Profile"
                >
                  <Icon name="xing" />
                </a>
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-[#E4405F] hover:text-white text-zinc-600 flex items-center justify-center transition-colors text-xs"
                  title="Instagram"
                  aria-label="Instagram Profile"
                >
                  <Icon name="instagram" />
                </a>
                <a
                  href={CONTACT.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-[#FF0000] hover:text-white text-zinc-600 flex items-center justify-center transition-colors text-xs"
                  title="YouTube"
                  aria-label="YouTube Channel"
                >
                  <Icon name="youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conference Presenter Mode Modal */}
      {showQrModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="qr-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn"
          onClick={() => setShowQrModal(false)}
        >
          <div
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full text-center space-y-4 shadow-2xl border border-zinc-200 relative animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-900 text-lg w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center transition-colors cursor-pointer"
              aria-label={t.closeModal}
            >
              ✕
            </button>

            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-red-600 font-bold">
                {t.conferenceModalTag}
              </span>
              <h2 id="qr-modal-title" className="text-lg font-extrabold text-zinc-950">
                {CONTACT.founder}
              </h2>
              <p className="text-xs text-zinc-500">
                {t.conferenceModalSubtitle}
              </p>
            </div>

            {/* High-Contrast Crisp QR Code Container */}
            <div className="p-4 bg-white rounded-2xl border-2 border-zinc-900 shadow-inner flex items-center justify-center">
              <img
                src="/images/qr-card.svg"
                alt="QR-Code Digitale Visitenkarte"
                className="w-56 h-56 object-contain"
              />
            </div>

            <div className="pt-1 flex flex-col gap-2">
              <a
                href="/majeed-shams.vcf"
                download="Majeed-Shams-Architekt.vcf"
                className="w-full py-2.5 px-4 rounded-xl bg-zinc-900 hover:bg-[#DC2626] text-white text-xs font-bold transition-colors flex items-center justify-center gap-2"
              >
                <Icon name="download" />
                <span>{t.directDownloadButton}</span>
              </a>
              <span className="text-[10px] font-mono text-zinc-400">
                shams-consult.de/majeed-shams.vcf
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Ergonomic Mobile Sticky Action Bar (Science-Backed Thumb Zone) */}
      <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-2xl">
        <div className="flex items-center gap-2 max-w-md mx-auto">
          <button
            type="button"
            onClick={handleDownloadVCard}
            className="flex-1 py-3 px-4 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] active:scale-95 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-red-950/50 transition-all cursor-pointer"
          >
            <Icon name="address-card" className="text-sm" />
            <span>{t.stickySaveText}</span>
          </button>

          <a
            href={CONTACT.phoneFrankfurtHref}
            className="w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center transition-all shrink-0"
            aria-label={t.callButton}
          >
            <Icon name="phone" className="text-sm" />
          </a>

          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-xl bg-[#25D366] active:scale-95 text-white flex items-center justify-center transition-all shrink-0 shadow-xs"
            aria-label="WhatsApp"
          >
            <Icon name="whatsapp" className="text-base" />
          </a>
        </div>
      </div>
    </article>
  );
}
