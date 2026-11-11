import { MouseEvent } from "react";
import { Icon } from "./icon";
import { CONTACT } from "../lib/contact";
import { Language, Translations } from "../lib/i18n";
import { openCookieSettings } from "../lib/analytics";
import { getLocalizedPath } from "../lib/i18nRouting";

interface FooterProps {
  t: Translations["footer"];
  navT: Translations["nav"];
  servicesT: Translations["services"];
  language?: Language;
  onNavigate?: (path: string) => void;
}

export function Footer({ t, navT, servicesT, language = "de", onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNav = (e: MouseEvent<HTMLAnchorElement>, path: string, sectionId?: string) => {
    e.preventDefault();
    if (sectionId) {
      const isHome = window.location.pathname === "/" || window.location.pathname === "/en";
      const hash = `#${sectionId}`;
      if (isHome) {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", hash);
        }
      } else {
        const targetHome = language === "en" ? `/en${hash}` : `/${hash}`;
        if (onNavigate) {
          onNavigate(targetHome);
        } else {
          window.location.href = targetHome;
        }
      }
    } else {
      const target = getLocalizedPath(path, language);
      if (onNavigate) {
        onNavigate(target);
      } else {
        window.location.href = target;
      }
    }
  };

  return (
    <footer className="bg-[#0a0a0b] text-white pt-16 pb-12 border-t border-white/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 4-Column Navigation, Services, Regional Hubs & Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10 items-start">
          {/* Column 1: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-widest text-zinc-300">
              {t.quickLinksTitle}
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href={getLocalizedPath("/about", language)} onClick={(e) => handleNav(e, "/about")} className="hover:text-white transition-colors">{navT.about}</a></li>
              <li><a href={language === "en" ? "/en#services" : "/#services"} onClick={(e) => handleNav(e, "/services", "services")} className="hover:text-white transition-colors">{navT.services}</a></li>
              <li><a href={getLocalizedPath("/projects", language)} onClick={(e) => handleNav(e, "/projects")} className="hover:text-white transition-colors">{navT.projects}</a></li>
              <li><a href={getLocalizedPath("/bautraeger-investoren", language)} onClick={(e) => handleNav(e, "/bautraeger-investoren")} className="hover:text-white text-[#DC2626] font-semibold transition-colors">{language === "en" ? "B2B Developers & Investors" : "B2B Bauträger & Investoren"}</a></li>
              <li><a href={getLocalizedPath("/vergleich", language)} onClick={(e) => handleNav(e, "/vergleich")} className="hover:text-white text-[#DC2626] font-semibold transition-colors">Entscheidungshilfe & Vergleiche</a></li>
              <li><a href={getLocalizedPath("/research", language)} onClick={(e) => handleNav(e, "/research")} className="hover:text-white transition-colors">Frankfurt UAS · Forschung & Thesen</a></li>
              <li><a href={getLocalizedPath("/blog", language)} onClick={(e) => handleNav(e, "/blog")} className="hover:text-white transition-colors">{navT.blog}</a></li>
              <li><a href={language === "en" ? "/en#contact" : "/#contact"} onClick={(e) => handleNav(e, "/contact", "contact")} className="hover:text-white transition-colors">{navT.contact}</a></li>
              <li><a href={getLocalizedPath("/card", language)} onClick={(e) => handleNav(e, "/card")} className="hover:text-white transition-colors">{t.vCardLink}</a></li>
              <li><a href={getLocalizedPath("/founder-portal", language)} rel="nofollow" onClick={(e) => handleNav(e, "/founder-portal")} className="hover:text-white text-zinc-500 font-mono text-[11px] transition-colors">🔒 {language === "en" ? "Founder Portal (Internal)" : "Gründer-Portal (Intern)"}</a></li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-widest text-zinc-300">
              {t.servicesTitle}
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              {servicesT.items.map((svc, idx) => (
                <li key={idx}>
                  <a href="/services" onClick={(e) => handleNav(e, "/services", "services")} className="hover:text-white transition-colors">
                    {svc.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Regionale Schwerpunkte */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-widest text-zinc-300">
              Standorte & Regionen
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href={getLocalizedPath("/architektur-frankfurt", language)} onClick={(e) => handleNav(e, "/architektur-frankfurt")} className="hover:text-white transition-colors">Architektur Frankfurt</a></li>
              <li><a href={getLocalizedPath("/architektur-bad-homburg", language)} onClick={(e) => handleNav(e, "/architektur-bad-homburg")} className="hover:text-white transition-colors">Architektur Bad Homburg & Taunus</a></li>
              <li><a href={getLocalizedPath("/architektur-wiesbaden", language)} onClick={(e) => handleNav(e, "/architektur-wiesbaden")} className="hover:text-white transition-colors">Architektur Wiesbaden</a></li>
              <li><a href={getLocalizedPath("/architektur-darmstadt", language)} onClick={(e) => handleNav(e, "/architektur-darmstadt")} className="hover:text-white transition-colors">Architektur Darmstadt & Südhessen</a></li>
              <li><a href={getLocalizedPath("/architektur-hanau", language)} onClick={(e) => handleNav(e, "/architektur-hanau")} className="hover:text-white transition-colors">Architektur Hanau & Main-Kinzig</a></li>
              <li><a href={getLocalizedPath("/architektur-roedermark", language)} onClick={(e) => handleNav(e, "/architektur-roedermark")} className="hover:text-white transition-colors">Architektur Rödermark & Offenbach</a></li>
              <li><a href={getLocalizedPath("/architektur-dreieich", language)} onClick={(e) => handleNav(e, "/architektur-dreieich")} className="hover:text-white transition-colors">Architektur Dreieich</a></li>
              <li><a href={getLocalizedPath("/stadtplanung-hessen", language)} onClick={(e) => handleNav(e, "/stadtplanung-hessen")} className="hover:text-white transition-colors">Bebauungsplan & Stadtplanung</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Connect */}
          <div className="space-y-4">
            <h4 className="font-bold text-xs uppercase tracking-widest text-zinc-300">
              {t.contactTitle}
            </h4>
            <div className="space-y-3">
              <div>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sm font-semibold text-zinc-200 hover:text-white transition-colors block"
                >
                  {CONTACT.email}
                </a>
              </div>

              <div>
                <a
                  href={getLocalizedPath("/card", language)}
                  onClick={(e) => handleNav(e, "/card")}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/40 text-xs text-zinc-300 hover:text-white transition-all group"
                >
                  <Icon name="address-card" className="text-[#DC2626] group-hover:scale-110 transition-transform" />
                  <span className="font-medium">{t.vCardLink}</span>
                  <span className="text-[10px] text-zinc-500 group-hover:text-zinc-300">→</span>
                </a>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new CustomEvent("open-brochure-modal"))}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/40 text-xs text-zinc-300 hover:text-white transition-all group cursor-pointer text-left"
                >
                  <Icon name="file-text" className="text-[#DC2626] group-hover:scale-110 transition-transform" />
                  <span className="font-medium">
                    {language === "en" ? "Portfolio Brochure (PDF)" : "Portfolio-Broschüre (PDF)"}
                  </span>
                  <span className="text-[10px] text-zinc-500 group-hover:text-zinc-300">↓</span>
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center text-xs text-zinc-300 hover:text-white hover:border-[#DC2626] hover:bg-[#DC2626]/10 transition-colors"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <Icon name="linkedin-in" />
                </a>
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center text-xs text-zinc-300 hover:text-white hover:border-[#DC2626] hover:bg-[#DC2626]/10 transition-colors"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <Icon name="instagram" />
                </a>
                <a
                  href={CONTACT.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center text-xs text-zinc-300 hover:text-white hover:border-[#DC2626] hover:bg-[#DC2626]/10 transition-colors"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <Icon name="facebook" />
                </a>
                <a
                  href={CONTACT.xing}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center text-xs text-zinc-300 hover:text-white hover:border-[#DC2626] hover:bg-[#DC2626]/10 transition-colors"
                  aria-label="Xing"
                  title="Xing"
                >
                  <Icon name="xing" />
                </a>
                <a
                  href={CONTACT.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center text-xs text-zinc-300 hover:text-white hover:border-[#FF0000] hover:bg-[#FF0000]/10 transition-colors"
                  aria-label="YouTube"
                  title="YouTube"
                >
                  <Icon name="youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {currentYear} Shams Consult. {t.rights}</p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <a
              href={getLocalizedPath("/impressum", language)}
              onClick={(e) => handleNav(e, "/impressum")}
              className="hover:text-white underline transition-colors"
            >
              {t.legalImpressum}
            </a>
            <span>•</span>
            <a
              href={getLocalizedPath("/datenschutz", language)}
              onClick={(e) => handleNav(e, "/datenschutz")}
              className="hover:text-white underline transition-colors"
            >
              {t.legalDatenschutz}
            </a>
            <span>•</span>
            <a
              href={getLocalizedPath("/barrierefreiheit", language)}
              onClick={(e) => handleNav(e, "/barrierefreiheit")}
              className="hover:text-white underline transition-colors"
            >
              {t.legalBarrierefreiheit}
            </a>
            <span>•</span>
            <a
              href={getLocalizedPath("/widerruf", language)}
              onClick={(e) => handleNav(e, "/widerruf")}
              className="hover:text-white underline transition-colors"
            >
              {t.legalWiderruf}
            </a>
            <span>•</span>
            <button
              type="button"
              onClick={openCookieSettings}
              className="hover:text-white underline transition-colors cursor-pointer"
            >
              {t.cookieSettings}
            </button>
          </div>
        </div>
      </div>

      {/* Monumental Architectural Brand Footer with Official Logo */}
      <div className="w-full pt-12 sm:pt-16 pb-6 overflow-hidden select-none border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <a
            href={language === "en" ? "/en" : "/"}
            onClick={(e) => handleNav(e, "/")}
            className="group block transition-all duration-300 hover:scale-[1.015] focus:outline-none"
            aria-label="Shams Consult Startseite"
          >
            <img
              src="/logo-white.png"
              alt="Shams Consult — Architektur & Stadtplanung"
              className="w-full max-w-[280px] sm:max-w-[420px] md:max-w-[560px] lg:max-w-[700px] xl:max-w-[800px] h-auto object-contain mx-auto opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-2xl"
              width="800"
              height="355"
              loading="lazy"
            />
          </a>
        </div>
      </div>

      {/* Developed with Love in Germany Credit (Centered at very bottom) */}
      <div className="w-full pb-8 pt-2 flex items-center justify-center text-center px-4">
        <p className="inline-flex flex-wrap items-center justify-center gap-1.5 text-[11px] font-mono text-zinc-500">
          <span>{t.developedBy}</span>
          <span className="inline-flex items-center gap-1.5 text-zinc-400">
            {/* Crisp German Flag SVG for universal rendering on Windows, Mac, iOS & Android */}
            <span
              role="img"
              className="inline-flex items-center justify-center w-4 h-2.5 rounded-2xs overflow-hidden shadow-2xs border border-white/20 shrink-0"
              title="Deutschland"
              aria-label="Deutschland"
            >
              <svg viewBox="0 0 5 3" className="w-full h-full" aria-hidden="true">
                <rect width="5" height="1" y="0" fill="#000000" />
                <rect width="5" height="1" y="1" fill="#DD0000" />
                <rect width="5" height="1" y="2" fill="#FFCE00" />
              </svg>
            </span>
            <a
              href="https://nordible.co"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-zinc-300 hover:text-white underline decoration-zinc-600 hover:decoration-white transition-colors cursor-pointer"
            >
              nordible.co ↗
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
