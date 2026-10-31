import { Translations, Language } from "../lib/i18n";
import { CONTACT } from "../lib/contact";
import { Icon } from "./icon";
import { SectionAnchorLink } from "./SectionAnchorLink";

interface VideoSectionProps {
  t: Translations["videoGuide"];
  language?: Language;
  onBookConsultation?: () => void;
}

export function VideoSection({ t, onBookConsultation }: VideoSectionProps) {
  return (
    <section id="video-guide" className="py-14 sm:py-20 bg-[#0B0C10] text-white border-b border-white/10 relative overflow-hidden">
      {/* Subtle ambient architectural grid & glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(220,38,38,0.12),rgba(255,255,255,0))] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Context, Value Proposition & Science-Backed CTAs */}
          <div className="lg:col-span-6 space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-950/40 border border-red-500/30 text-xs font-mono font-medium text-red-300">
              <Icon name="youtube" className="text-[#FF0000] text-sm" />
              <span>{t.badge}</span>
            </div>

            {/* Headline with Anchor */}
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight flex items-center">
                <span>{t.title}</span>
                <SectionAnchorLink sectionId="video-guide" />
              </h2>
              <p className="text-sm font-medium text-zinc-400">
                {t.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
              {t.description}
            </p>

            {/* Key Takeaways */}
            <div className="space-y-2.5 pt-2">
              {t.takeaways.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10 border border-red-500/30 text-[#DC2626] mt-0.5">
                    <Icon name="check" className="text-[10px]" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              {onBookConsultation && (
                <button
                  type="button"
                  onClick={onBookConsultation}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#DC2626] hover:bg-red-700 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-red-900/30 hover:shadow-red-900/50 transition-all duration-200 cursor-pointer"
                >
                  <Icon name="calendar-check" />
                  <span>{t.ctaConsultation}</span>
                </button>
              )}

              <a
                href={CONTACT.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/40 text-xs sm:text-sm font-medium text-zinc-200 hover:text-white transition-all duration-200 group"
              >
                <Icon name="youtube" className="text-[#FF0000] group-hover:scale-110 transition-transform" />
                <span>{t.ctaChannel}</span>
                <span className="text-zinc-500 group-hover:text-zinc-300 transition-colors">↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Responsive 16:9 Privacy-Enhanced YouTube Player */}
          <div className="lg:col-span-6">
            <div className="space-y-2.5">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black/80 border border-white/10 shadow-2xl ring-1 ring-white/10">
                <iframe
                  src={`${CONTACT.featuredVideo.embedUrl}?rel=0`}
                  title={t.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>

              {/* GDPR / Datenschutz & Source Caption */}
              <div className="flex items-center justify-between text-[11px] text-zinc-500 px-1">
                <span className="flex items-center gap-1.5">
                  <Icon name="shield-halved" className="text-emerald-500/80 text-[10px]" />
                  <span>{t.privacyNote}</span>
                </span>
                <a
                  href={CONTACT.featuredVideo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-300 underline underline-offset-2 transition-colors ml-2 shrink-0"
                >
                  YouTube ↗
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
