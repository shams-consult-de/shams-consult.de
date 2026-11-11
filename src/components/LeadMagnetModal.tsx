import { useState, useEffect, useCallback } from "react";
import { Icon } from "./icon";
import { sendLeadNotification } from "../services/emailService";
import { Language } from "../lib/i18n";

interface LeadMagnetModalProps {
  language?: Language;
  isOpen?: boolean;
  onClose?: () => void;
}

export function LeadMagnetModal({
  language = "de",
  isOpen: controlledIsOpen,
  onClose: controlledOnClose,
}: LeadMagnetModalProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const isControlled = typeof controlledIsOpen === "boolean";
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const handleClose = useCallback(() => {
    setEmailError("");
    setPhoneError("");
    setErrorMessage("");
    if (isControlled && controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalIsOpen(false);
    }
  }, [isControlled, controlledOnClose]);

  // Timed reveal after 12 seconds for first-time visitors (if uncontrolled)
  useEffect(() => {
    if (isControlled) return;

    const timer = setTimeout(() => {
      try {
        const modalShown = localStorage.getItem("shams_brochure_modal_shown");
        if (!modalShown) {
          setInternalIsOpen(true);
          localStorage.setItem("shams_brochure_modal_shown", "true");
        }
      } catch {
        // Safe localStorage fallback
      }
    }, 12000);

    return () => clearTimeout(timer);
  }, [isControlled]);

  // Global custom event listener so any CTA or sticky bar can open the modal
  useEffect(() => {
    const handleOpenEvent = () => {
      if (isControlled && controlledOnClose) {
        // If controlled by parent, parent should listen or trigger
      } else {
        setInternalIsOpen(true);
      }
    };

    window.addEventListener("open-brochure-modal", handleOpenEvent);
    return () => window.removeEventListener("open-brochure-modal", handleOpenEvent);
  }, [isControlled, controlledOnClose]);

  // Prevent background scroll and support ESC key
  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleClose]);

  const triggerDirectDownload = () => {
    const link = document.createElement("a");
    link.href = "/shams-consult-architektur-portfolio.pdf";
    link.download = "Shams-Consult-Architektur-Portfolio-2026.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const validateEmail = (val: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(val.trim());
  };

  const validatePhone = (val: string) => {
    const trimmed = val.trim();
    if (!trimmed) return true; // Optional field: passes if blank

    // Allowed characters: leading '+' or '00', digits, spaces, hyphens, slashes, parentheses, dots
    const allowedCharsRegex = /^(\+|00)?[0-9\s/().-]+$/;
    if (!allowedCharsRegex.test(trimmed)) {
      return false;
    }

    // Extract raw digits
    const digitsOnly = trimmed.replace(/\D/g, "");

    // Must be between 6 digits (shortest valid landline) and 15 digits (ITU-T E.164 max)
    if (digitsOnly.length < 6 || digitsOnly.length > 15) {
      return false;
    }

    // Reject obvious dummy inputs (all identical digits like 0000000 or 1111111)
    if (/^(\d)\1+$/.test(digitsOnly)) {
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setEmailError("");
    setPhoneError("");

    let hasError = false;

    if (!email.trim() || !validateEmail(email)) {
      setEmailError(
        language === "en"
          ? "Please provide a valid email address."
          : "Bitte geben Sie eine gültige E-Mail-Adresse an."
      );
      hasError = true;
    }

    if (phone.trim() && !validatePhone(phone)) {
      setPhoneError(
        language === "en"
          ? "Please provide a valid phone number (e.g. +49 176 12345678 or 069 74223777)."
          : "Bitte geben Sie eine gültige Telefonnummer ein (z. B. 0176 12345678 oder +49 69 74223777)."
      );
      hasError = true;
    }

    if (hasError) {
      return;
    }

    setLoading(true);

    // 1. Immediately trigger direct PDF download for zero-friction gratification
    triggerDirectDownload();
    setSubmitted(true);

    // 2. Dispatch lead notification in non-blocking background task
    try {
      await sendLeadNotification({
        email: email.trim(),
        phone: phone.trim() || undefined,
        fullName: "Broschüren-Interessent",
        projectType: "Broschüren-Download 2026",
        honeypot: honeypot || undefined,
      });
    } catch {
      // Background catch - download is already active
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  const isDe = language === "de";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="brochure-modal-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-md transition-all animate-fadeIn"
    >
      {/* Mobile Drawer (Thumb Zone) / Desktop Centered Card */}
      <div className="relative w-full max-w-lg rounded-t-3xl sm:rounded-3xl bg-zinc-950/95 border-t sm:border border-white/15 p-6 sm:p-8 shadow-2xl text-center space-y-5 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label={isDe ? "Schließen" : "Close"}
          className="absolute top-4 right-4 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          <Icon name="x" className="w-5 h-5" />
        </button>

        {/* Visual Badge & Monograph Icon */}
        <div className="w-14 h-14 rounded-2xl bg-red-600/15 border border-red-500/30 text-red-400 mx-auto flex items-center justify-center shadow-lg shadow-red-600/10">
          <Icon name="file-text" className="w-7 h-7 text-red-500" />
        </div>

        <div>
          <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-red-400 font-bold px-2.5 py-1 rounded-full bg-red-950/40 border border-red-500/25">
            {isDe ? "Kostenlose Ausgabe 2026 · 12 Seiten" : "Free 2026 Edition · 12 Pages"}
          </span>
          <h3
            id="brochure-modal-title"
            className="font-sans text-xl sm:text-2xl font-extrabold text-white mt-2 leading-tight"
          >
            {isDe
              ? "Offizielles Architektur- & Planungs-Portfolio"
              : "Official Architecture & Planning Monograph PDF"}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 font-light mt-2 leading-relaxed max-w-md mx-auto">
            {isDe
              ? "Erhalten Sie unsere vollständige 12-seitige Broschüre mit gebauten Referenzen, HOAI-Leistungsphasen 1–9, VOB-Sicherheitsleitfaden und Einblicken in Baugenehmigungen."
              : "Download our complete 12-page monograph featuring delivered projects, HOAI phases 1–9, VOB compliance, and regional building permit insights."}
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-3.5 text-left pt-1">
            {/* Ghost input / Honeypot to trap automated bots & attackers (science-backed anti-spam) */}
            <div
              className="opacity-0 absolute top-0 left-0 h-0 w-0 -z-10 pointer-events-none overflow-hidden"
              aria-hidden="true"
              tabIndex={-1}
            >
              <label htmlFor="lead-website-ghost">Website URL (leave blank)</label>
              <input
                id="lead-website-ghost"
                type="text"
                name="website_url"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div>
              <label
                htmlFor="lead-email-input"
                className="block text-[11px] font-medium text-zinc-300 mb-1"
              >
                {isDe ? "E-Mail-Adresse *" : "Email Address *"}
              </label>
              <input
                id="lead-email-input"
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError("");
                }}
                aria-invalid={Boolean(emailError)}
                aria-describedby={emailError ? "lead-email-error" : undefined}
                placeholder={isDe ? "ihre.adresse@unternehmen.de" : "your.name@company.com"}
                className={`w-full px-3.5 py-3 rounded-xl bg-zinc-900/90 border ${
                  emailError ? "border-red-500" : "border-white/15 focus:border-red-500"
                } text-white text-xs sm:text-sm placeholder-zinc-500 focus:outline-none transition-colors`}
              />
              {emailError && (
                <p id="lead-email-error" className="text-[11px] text-red-400 mt-1">{emailError}</p>
              )}
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label
                  htmlFor="lead-phone-input"
                  className="block text-[11px] font-medium text-zinc-300"
                >
                  {isDe ? "Telefonnummer" : "Phone Number"}
                </label>
                <span className="text-[10px] text-zinc-400 font-light">
                  {isDe ? "(optional — für Rückfragen)" : "(optional)"}
                </span>
              </div>
              <input
                id="lead-phone-input"
                type="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (phoneError) setPhoneError("");
                }}
                aria-invalid={Boolean(phoneError)}
                aria-describedby={phoneError ? "lead-phone-error" : undefined}
                placeholder={isDe ? "z. B. 0176 12345678" : "+49 176 12345678"}
                className={`w-full px-3.5 py-3 rounded-xl bg-zinc-900/90 border ${
                  phoneError ? "border-red-500" : "border-white/15 focus:border-red-500"
                } text-white text-xs sm:text-sm placeholder-zinc-500 focus:outline-none transition-colors`}
              />
              {phoneError && (
                <p id="lead-phone-error" className="text-[11px] text-red-400 mt-1">{phoneError}</p>
              )}
            </div>

            {errorMessage && (
              <p className="text-xs text-red-400">{errorMessage}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] active:scale-[0.98] text-white font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all disabled:opacity-50 cursor-pointer min-h-[44px]"
            >
              <Icon name="download" className="w-4 h-4" />
              <span>
                {loading
                  ? isDe
                    ? "Wird vorbereitet..."
                    : "Preparing..."
                  : isDe
                  ? "Broschüre kostenlos herunterladen ↗"
                  : "Download Free Brochure PDF ↗"}
              </span>
            </button>

            <div className="flex items-center gap-2 text-[10px] text-zinc-400 pt-1">
              <Icon name="shield-check" className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>
                {isDe
                  ? "100% kostenlos & DSGVO-konform. Kein Spam, keine Weitergabe."
                  : "100% free & GDPR compliant. No spam, never shared."}
              </span>
            </div>
          </form>
        ) : (
          <div className="p-6 rounded-2xl bg-zinc-900/80 text-white text-xs space-y-4 border border-emerald-500/40 shadow-xl animate-fadeIn">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-xl font-bold">
              ✓
            </div>
            <div>
              <p className="font-sans font-bold text-white text-base sm:text-lg">
                {isDe ? "Download gestartet!" : "Download Started!"}
              </p>
              <p className="text-zinc-300 text-xs sm:text-sm mt-1 max-w-sm mx-auto">
                {isDe
                  ? "Ihre 12-seitige Shams Consult Portfolio-Broschüre wird heruntergeladen."
                  : "Your 12-page Shams Consult architectural monograph is downloading."}
              </p>
            </div>
            <a
              href="/shams-consult-architektur-portfolio.pdf"
              download="Shams-Consult-Architektur-Portfolio-2026.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white border border-white/20 text-xs font-semibold transition-all cursor-pointer"
            >
              <Icon name="download" className="w-4 h-4 text-red-400" />
              <span>
                {isDe
                  ? "Hier klicken, falls der Download nicht startete ↗"
                  : "Click here if download didn't start automatically ↗"}
              </span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
