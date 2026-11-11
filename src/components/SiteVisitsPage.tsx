import { useState } from "react";
import { Translations } from "../lib/i18n";

interface SiteVisitsPageProps {
  t: Translations["siteVisitsPage"];
  onBack: () => void;
  onBookConsultation: () => void;
}

export function SiteVisitsPage({
  t,
  onBack,
  onBookConsultation,
}: SiteVisitsPageProps) {
  const [activePhotoIdx, setActivePhotoIdx] = useState<number | null>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (activePhotoIdx === null) return;
    if (e.key === "Escape") {
      setActivePhotoIdx(null);
    } else if (e.key === "ArrowRight") {
      setActivePhotoIdx((activePhotoIdx + 1) % t.items.length);
    } else if (e.key === "ArrowLeft") {
      setActivePhotoIdx((activePhotoIdx - 1 + t.items.length) % t.items.length);
    }
  };

  return (
    <article
      className="min-h-screen bg-[#FFFFFF] text-zinc-900 pt-28 pb-20"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Back Navigation */}
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-600 hover:text-[#DC2626] transition-colors cursor-pointer"
          >
            <span>←</span>
            <span>{t.backToHome}</span>
          </button>

          <span className="text-xs font-mono text-zinc-400">
            Shams Consult · {t.title}
          </span>
        </div>

        {/* Header Block */}
        <div className="space-y-4 max-w-3xl">
          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-[1.12]">
            {t.title}
          </h1>

          <p className="font-sans text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
            {t.subtitle}
          </p>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-100 border border-zinc-200 text-xs font-mono text-zinc-700">
            <span>📷</span>
            <span>{t.proofNotice}</span>
          </div>
        </div>

        {/* Authentic Photo Proof Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {t.items.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Photo Container */}
              <div
                className="relative aspect-[16/10] overflow-hidden bg-zinc-100 cursor-pointer"
                onClick={() => setActivePhotoIdx(idx)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Overlay Badge Top Left */}
                <div className="absolute top-3 left-3 flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-zinc-950/80 backdrop-blur-md text-white text-[11px] font-mono font-medium">
                    {item.tag}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-red-600/90 backdrop-blur-md text-white text-[11px] font-mono font-bold">
                    {item.phase}
                  </span>
                </div>

                {/* Hover Zoom Hint */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-md text-white text-xs font-medium flex items-center gap-1.5 shadow-lg">
                    <span>🔍</span>
                    <span>{t.viewHighRes}</span>
                  </span>
                </div>
              </div>

              {/* Caption & Description */}
              <div className="p-6 sm:p-7 space-y-2 bg-white flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <h2 className="font-sans text-lg sm:text-xl font-bold text-zinc-950 group-hover:text-[#DC2626] transition-colors leading-snug">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-400">
                    {t.photoRecordLabel} {String(idx + 1).padStart(2, "0")} / {String(t.items.length).padStart(2, "0")}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActivePhotoIdx(idx)}
                    className="text-xs font-bold text-[#DC2626] hover:text-[#B91C1C] transition-colors cursor-pointer"
                  >
                    {t.viewHighRes} ↗
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Consultation CTA */}
        <section className="p-8 sm:p-10 rounded-2xl bg-zinc-950 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl border border-white/10">
          <div className="space-y-2 text-left">
            <h3 className="font-sans text-xl sm:text-2xl font-bold text-white">
              {t.ctaTitle}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-xl">
              {t.ctaSubtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={onBookConsultation}
            className="bg-[#DC2626] hover:bg-[#B91C1C] text-white px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-lg cursor-pointer shrink-0"
          >
            {t.ctaButton}
          </button>
        </section>
      </div>

      {/* Lightbox Modal */}
      {activePhotoIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActivePhotoIdx(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="w-full flex items-center justify-between text-white">
              <span className="text-xs font-mono">
                {t.items[activePhotoIdx].tag} · {t.items[activePhotoIdx].phase} (
                {activePhotoIdx + 1}/{t.items.length})
              </span>
              <button
                type="button"
                onClick={() => setActivePhotoIdx(null)}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                ✕ {t.closeLightbox}
              </button>
            </div>

            {/* Main Image */}
            <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black">
              <img
                src={t.items[activePhotoIdx].image}
                alt={t.items[activePhotoIdx].title}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>

            {/* Bottom Caption & Nav Controls */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-white text-left">
              <div className="space-y-0.5 max-w-2xl">
                <h4 className="font-bold text-sm text-white">
                  {t.items[activePhotoIdx].title}
                </h4>
                <p className="text-xs text-zinc-400 font-light">
                  {t.items[activePhotoIdx].desc}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() =>
                    setActivePhotoIdx(
                      (activePhotoIdx - 1 + t.items.length) % t.items.length
                    )
                  }
                  className="px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  {t.prev}
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActivePhotoIdx((activePhotoIdx + 1) % t.items.length)
                  }
                  className="px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  {t.next}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
