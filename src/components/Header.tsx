import { useState, useEffect, useRef } from "react";
import { Icon } from "./icon";
import { Language, Translations } from "../lib/i18n";
import { getLocalizedPath } from "../lib/i18nRouting";
import { CONTACT, getWhatsappHref } from "../lib/contact";

interface HeaderProps {
  t: Translations["nav"];
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onNavigateHome?: () => void;
  onNavigate?: (path: string) => void;
}

export function Header({
  t,
  language,
  onLanguageChange,
  onNavigateHome,
  onNavigate,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const dropdownCloseTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setAboutDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleDropdownEnter = () => {
    if (dropdownCloseTimeoutRef.current) {
      clearTimeout(dropdownCloseTimeoutRef.current);
      dropdownCloseTimeoutRef.current = null;
    }
    setAboutDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownCloseTimeoutRef.current = window.setTimeout(() => {
      setAboutDropdownOpen(false);
    }, 150);
  };

  const aboutDropdownItems = [
    { label: t.aboutOffice, path: "/about" },
    { label: t.siteVisits, path: "/site-visits" },
    { label: t.research, path: "/research" },
    { label: t.blog, path: "/blog" },
    { label: t.founder, path: "/founder" },
  ];

  const navLinks = [
    { label: t.about, path: "/about", sectionId: undefined },
    { label: t.services, path: "/services", sectionId: "services" },
    { label: t.projects, path: "/projects", sectionId: undefined },
  ];

  const mobileNavLinks = [
    { label: t.about, path: "/about", sectionId: undefined },
    { label: t.siteVisits, path: "/site-visits", sectionId: undefined },
    { label: t.research, path: "/research", sectionId: undefined },
    { label: t.blog, path: "/blog", sectionId: undefined },
    { label: t.founder, path: "/founder", sectionId: undefined },
    { label: t.services, path: "/services", sectionId: "services" },
    { label: t.projects, path: "/projects", sectionId: undefined },
    { label: t.caseStudies, path: "/clients", sectionId: "case-studies" },
    { label: t.contact, path: "/contact", sectionId: "contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent, link: (typeof navLinks)[0]) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (link.sectionId) {
      const isHome = window.location.pathname === "/" || window.location.pathname === "/en";
      const hash = `#${link.sectionId}`;
      if (isHome) {
        const el = document.getElementById(link.sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", hash);
        }
      } else {
        const targetPath = language === "en" ? `/en${hash}` : `/${hash}`;
        if (onNavigate) {
          onNavigate(targetPath);
        } else {
          window.location.href = targetPath;
        }
      }
    } else {
      const targetPath = getLocalizedPath(link.path, language);
      if (link.path === "/" && onNavigateHome) {
        onNavigateHome();
      } else if (onNavigate) {
        onNavigate(targetPath);
      } else {
        window.location.href = targetPath;
      }
    }
  };

  const handleConsultationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const isHome = window.location.pathname === "/" || window.location.pathname === "/en";
    if (isHome) {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", "#contact");
      }
    } else if (onNavigate) {
      onNavigate(language === "en" ? "/en#contact" : "/#contact");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 text-zinc-900">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/75 backdrop-blur-xl border-b border-white/20 py-3.5 shadow-sm"
            : "bg-white/60 backdrop-blur-lg py-4 border-b border-white/15"
        }`}
      >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Official Brand Logo */}
        <a
          href={language === "en" ? "/en" : "/"}
          onClick={(e) => {
            e.preventDefault();
            if (onNavigateHome) onNavigateHome();
            else if (onNavigate) onNavigate(language === "en" ? "/en" : "/");
          }}
          className="flex items-center group focus:outline-none"
        >
          <img
            src="/logo.png"
            alt="Shams Consult - Architektur und Stadtplanung"
            className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            width="160"
            height="48"
            loading="eager"
          />
        </a>

        {/* Center Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-bold tracking-[0.12em] text-zinc-700">
          {/* Über uns with Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <a
              href={getLocalizedPath("/about", language)}
              onClick={(e) => handleLinkClick(e, { label: t.about, path: "/about", sectionId: undefined })}
              className="inline-flex items-center gap-1.5 hover:text-[#DC2626] transition-colors uppercase relative py-1 text-zinc-600 focus:outline-none"
              aria-expanded={aboutDropdownOpen}
              aria-haspopup="true"
            >
              <span>{t.about}</span>
              <Icon
                name="chevron-down"
                className={`text-[9px] transition-transform duration-200 text-zinc-400 ${
                  aboutDropdownOpen ? "rotate-180 text-[#DC2626]" : ""
                }`}
              />
            </a>

            {/* Minimalist Dropdown Menu */}
            <div
              className={`absolute top-full left-0 pt-2 w-56 transition-all duration-150 z-50 ${
                aboutDropdownOpen
                  ? "opacity-100 visible translate-y-0 pointer-events-auto"
                  : "opacity-0 invisible -translate-y-1 pointer-events-none"
              }`}
            >
              <div className="bg-white border border-zinc-200 rounded-lg shadow-lg py-1 px-1">
                {aboutDropdownItems.map((item) => (
                  <a
                    key={item.path}
                    href={getLocalizedPath(item.path, language)}
                    onClick={(e) => {
                      e.preventDefault();
                      setAboutDropdownOpen(false);
                      if (onNavigate) {
                        onNavigate(getLocalizedPath(item.path, language));
                      } else {
                        window.location.href = getLocalizedPath(item.path, language);
                      }
                    }}
                    className="block px-3.5 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-600 hover:text-[#DC2626] hover:bg-zinc-50 rounded transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Remaining Top-Level Links */}
          {navLinks.slice(1).map((link) => (
            <a
              key={link.label}
              href={link.sectionId ? (language === "en" ? `/en#${link.sectionId}` : `/#${link.sectionId}`) : getLocalizedPath(link.path, language)}
              onClick={(e) => handleLinkClick(e, link)}
              className="hover:text-[#DC2626] transition-colors uppercase relative py-1 text-zinc-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Section: Subtle Language Switcher & Action Button */}
        <div className="flex items-center gap-3.5">
          {/* Subtle Language Switcher (DE | EN) */}
          <div className="inline-flex items-center rounded-full bg-zinc-100 border border-zinc-200 p-0.5 text-[11px] font-bold tracking-wider text-zinc-600">
            <button
              type="button"
              onClick={() => onLanguageChange("de")}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                language === "de"
                  ? "bg-white text-zinc-950 shadow-xs font-extrabold"
                  : "text-zinc-500 hover:text-zinc-900"
              }`}
              aria-label="DE - Auf Deutsch umschalten"
            >
              DE
            </button>
            <span className="text-zinc-300">|</span>
            <button
              type="button"
              onClick={() => onLanguageChange("en")}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                language === "en"
                  ? "bg-white text-zinc-950 shadow-xs font-extrabold"
                  : "text-zinc-500 hover:text-zinc-900"
              }`}
              aria-label="EN - Switch to English"
            >
              EN
            </button>
          </div>

          {/* Direct Phone, WhatsApp & Email subtle icon links for desktop */}
          <div className="hidden md:flex items-center gap-0.5">
            <a
              href={CONTACT.primaryPhoneHref}
              className="p-2 rounded-full hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950 transition-colors"
              title={`Telefon: ${CONTACT.primaryPhone}`}
              aria-label="Telefon"
            >
              <Icon name="phone" className="text-base" />
            </a>
            <a
              href={getWhatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-zinc-100 text-[#25D366] transition-colors"
              title="WhatsApp"
              aria-label="WhatsApp"
            >
              <Icon name="whatsapp" className="text-xl" />
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="p-2 rounded-full hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950 transition-colors"
              title={`E-Mail: ${CONTACT.email}`}
              aria-label="E-Mail"
            >
              <Icon name="envelope" className="text-base" />
            </a>
          </div>

          <button
            type="button"
            onClick={handleConsultationClick}
            className="hidden sm:inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-[0.12em] transition-all transform hover:-translate-y-0.5 shadow-xs cursor-pointer"
          >
            <span>{t.bookConsultation}</span>
            <span>→</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded text-zinc-800 hover:text-[#DC2626] focus:outline-none"
            aria-label="Toggle Navigation"
          >
            <Icon name={mobileMenuOpen ? "xmark" : "bars"} className="text-xl" />
          </button>
        </div>
      </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-zinc-200 px-5 py-5 space-y-4 animate-fadeIn shadow-2xl">
          {/* Target Audience Quick Selector (3 Paths) in Mobile Drawer */}
          <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-3 space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-500 block">
              {language === "de" ? "Zielgruppe wählen (3 Wege)" : "Select Profile (3 Paths)"}
            </span>
            <div className="grid grid-cols-3 gap-2 text-center">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onNavigate) onNavigate("/projects?category=residential");
                }}
                className="py-2 px-1 rounded-lg bg-white border border-zinc-200 hover:border-[#DC2626] text-zinc-900 font-bold text-xs transition-all cursor-pointer shadow-2xs active:scale-95 flex flex-col items-center justify-center gap-1"
              >
                <Icon name="house" className="text-xs text-[#DC2626]" />
                <span className="text-[11px] leading-tight font-extrabold">{language === "de" ? "Privat" : "Residential"}</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onNavigate) onNavigate("/projects?category=commercial");
                }}
                className="py-2 px-1 rounded-lg bg-white border border-zinc-200 hover:border-[#DC2626] text-zinc-900 font-bold text-xs transition-all cursor-pointer shadow-2xs active:scale-95 flex flex-col items-center justify-center gap-1"
              >
                <Icon name="building" className="text-xs text-zinc-700" />
                <span className="text-[11px] leading-tight font-extrabold">{language === "de" ? "Gewerbe" : "Commercial"}</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onNavigate) onNavigate("/b2b");
                }}
                className="py-2 px-1 rounded-lg bg-white border border-zinc-200 hover:border-[#DC2626] text-zinc-900 font-bold text-xs transition-all cursor-pointer shadow-2xs active:scale-95 flex flex-col items-center justify-center gap-1"
              >
                <Icon name="handshake" className="text-xs text-zinc-700" />
                <span className="text-[11px] leading-tight font-extrabold">{language === "de" ? "Partner" : "Partners"}</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            {mobileNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.sectionId ? (language === "en" ? `/en#${link.sectionId}` : `/#${link.sectionId}`) : getLocalizedPath(link.path, language)}
                onClick={(e) => handleLinkClick(e, link)}
                className="text-zinc-900 hover:text-[#DC2626] font-bold text-sm tracking-wider uppercase py-3 border-b border-zinc-100 flex items-center justify-between min-h-[48px]"
              >
                <span>{link.label}</span>
                <span className="text-zinc-300 text-xs">→</span>
              </a>
            ))}
          </div>

          {/* Mobile Language Switcher */}
          <div className="pt-2 flex items-center justify-between border-t border-zinc-100">
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
              {language === "de" ? "Sprache wählen" : "Language"}
            </span>
            <div className="inline-flex items-center rounded-full bg-zinc-100 border border-zinc-200 p-0.5 text-xs font-bold text-zinc-700">
              <button
                type="button"
                onClick={() => {
                  onLanguageChange("de");
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                  language === "de"
                    ? "bg-white text-zinc-950 shadow-xs font-extrabold"
                    : "text-zinc-500"
                }`}
              >
                DE (Deutsch)
              </button>
              <span className="text-zinc-300">|</span>
              <button
                type="button"
                onClick={() => {
                  onLanguageChange("en");
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                  language === "en"
                    ? "bg-white text-zinc-950 shadow-xs font-extrabold"
                    : "text-zinc-500"
                }`}
              >
                EN (English)
              </button>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={handleConsultationClick}
              className="w-full text-center bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold py-3.5 px-4 rounded-sm text-xs uppercase tracking-wider block shadow-sm min-h-[48px] flex items-center justify-center cursor-pointer"
            >
              <span>{t.bookConsultation}</span>
              <span className="ml-1.5">→</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
