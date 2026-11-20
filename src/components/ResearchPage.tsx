import { useState } from "react";
import { Language, Translations } from "../lib/i18n";
import { thesesAndResearch, ThesisItem } from "../lib/theses";
import { FrankfurtUasLogo } from "./FrankfurtUasLogo";
import { Icon } from "./icon";
import { openThesesData } from "../lib/openTheses";

interface ResearchPageProps {
  t: Translations["research"];
  language: Language;
  onBack: () => void;
  onBookConsultation: () => void;
  onNavigateTopic?: (slug: string) => void;
}

type FilterType = "all" | "Fachpublikation" | "Masterarbeit" | "Bachelorarbeit";

export function ResearchPage({
  t,
  language,
  onBack,
  onBookConsultation,
  onNavigateTopic,
}: ResearchPageProps) {
  const isDe = language === "de";
  const openTopics = openThesesData[language] || openThesesData.de;
  const [selectedType, setSelectedType] = useState<FilterType>("all");
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  // Extract all unique topics
  const allTopics = Array.from(
    new Set(thesesAndResearch.flatMap((item) => item.topics))
  );

  const filteredTheses = thesesAndResearch.filter((item: ThesisItem) => {
    const matchesType = selectedType === "all" || item.type === selectedType;
    const matchesTopic = !selectedTopic || item.topics.includes(selectedTopic);
    return matchesType && matchesTopic;
  });

  return (
    <article className="min-h-screen bg-[#FFFFFF] text-zinc-900 pt-28 pb-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12">
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

          <div className="flex items-center gap-2">
            <FrankfurtUasLogo className="h-6 w-auto" variant="dark" />
          </div>
        </div>

        {/* Page Header */}
        <div className="space-y-4">
          <div className="inline-block">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#DC2626]">
              {t.badge}
            </span>
          </div>

          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-[1.12]">
            {t.thesesTitle}
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 font-light leading-relaxed max-w-3xl">
            {t.thesesSubtitle}
          </p>
        </div>

        {/* Institutional Authority Hero Card */}
        <div className="bg-[#111112] text-white rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden space-y-6">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#DC2626]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-white/10 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                {t.institution}
              </span>
              <h2 className="font-sans text-2xl font-bold text-white">
                Fachbereich 1 · Architektur, Bauingenieurwesen, Geomatik
              </h2>
            </div>
            <div className="p-3.5 bg-white/95 rounded-xl border border-white/40 shadow-sm shrink-0">
              <FrankfurtUasLogo className="h-9 w-auto" variant="dark" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-2xl font-bold text-white block">{t.statTheses}</span>
              <span className="text-xs text-zinc-300">{t.statThesesLabel}</span>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-2xl font-bold text-white block">{t.statFields}</span>
              <span className="text-xs text-zinc-300">{t.statFieldsLabel}</span>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-2xl font-bold text-white block">{t.statPractice}</span>
              <span className="text-xs text-zinc-300">{t.statPracticeLabel}</span>
            </div>
          </div>
        </div>

        {/* Aktuelle Ausschreibungen für Studierende (Open Theses) */}
        <section className="space-y-6 pt-4 border-t border-zinc-200">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#DC2626] text-xs font-mono font-bold tracking-wider">
              <span>●</span>
              <span>{t.openThesesBadge}</span>
            </div>
            <h2 className="font-sans text-2xl sm:text-3xl font-bold text-zinc-950">
              {t.openThesesTitle}
            </h2>
            <div className="space-y-3 max-w-3xl">
              <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                {t.openThesesSubtitle}
              </p>
              {t.openThesesParagraph2 && (
                <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                  {t.openThesesParagraph2}
                </p>
              )}
              {t.openThesesApplyHint && (
                <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-700 leading-relaxed font-light">
                  <span className="font-semibold text-zinc-950">✉️ {t.openThesesApplyHint}</span>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {openTopics.map((item) => (
              <div
                key={item.id}
                role="button"
                tabIndex={0}
                onClick={() => {
                  if (onNavigateTopic) onNavigateTopic(item.slug);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    if (onNavigateTopic) onNavigateTopic(item.slug);
                  }
                }}
                className="bg-white rounded-2xl border border-zinc-200 hover:border-[#DC2626] transition-all duration-300 shadow-xs hover:shadow-xl p-6 flex flex-col justify-between group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#DC2626]/30"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-extrabold uppercase px-2 py-0.5 bg-red-100 text-[#DC2626] rounded">
                      {item.number}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500">
                      {item.degrees}
                    </span>
                  </div>

                  <h3 className="font-sans text-lg font-bold text-zinc-950 group-hover:text-[#DC2626] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-zinc-600 line-clamp-3 font-light leading-relaxed">
                    {item.teaser}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.disciplines.map((d) => (
                      <span key={d} className="px-2 py-0.5 rounded bg-zinc-100 text-[10px] font-mono text-zinc-700">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-100 mt-4 flex items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-900 group-hover:text-[#DC2626] transition-colors">
                    <span>{t.viewDetails}</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>

                  <a
                    href={item.pdfDownloadUrl}
                    download={item.pdfFileName}
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-lg hover:bg-zinc-100 text-zinc-500 hover:text-[#DC2626] transition-colors"
                    title={t.downloadFlyerTitle}
                  >
                    <Icon name="file-pdf" className="text-base" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section Divider & Past Archive Heading */}
        <div className="pt-8 border-t border-zinc-200 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 block">
            {t.archiveBadge}
          </span>
          <h2 className="font-sans text-xl sm:text-2xl font-bold text-zinc-950">
            {t.archiveTitle}
          </h2>
        </div>

        {/* Filter Controls Bar */}
        <div className="space-y-4 pt-2">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedType("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedType === "all"
                  ? "bg-zinc-950 text-white shadow-sm"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
              }`}
            >
              {t.filterAll}
            </button>
            <button
              type="button"
              onClick={() => setSelectedType("Fachpublikation")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedType === "Fachpublikation"
                  ? "bg-zinc-950 text-white shadow-sm"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
              }`}
            >
              {t.filterPub}
            </button>
            <button
              type="button"
              onClick={() => setSelectedType("Masterarbeit")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedType === "Masterarbeit"
                  ? "bg-zinc-950 text-white shadow-sm"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
              }`}
            >
              {t.filterMaster}
            </button>
            <button
              type="button"
              onClick={() => setSelectedType("Bachelorarbeit")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedType === "Bachelorarbeit"
                  ? "bg-zinc-950 text-white shadow-sm"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
              }`}
            >
              {t.filterBachelor}
            </button>
            <span className="text-xs text-zinc-400 font-mono ml-auto">
              {filteredTheses.length} / {thesesAndResearch.length}
            </span>
          </div>

          {/* Topic Pills */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-xs font-semibold text-zinc-500 mr-1">
              {t.topicsLabel}
            </span>
            {allTopics.map((topic, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() =>
                  setSelectedTopic(selectedTopic === topic ? null : topic)
                }
                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-colors cursor-pointer ${
                  selectedTopic === topic
                    ? "bg-[#DC2626] text-white"
                    : "bg-zinc-100 hover:bg-zinc-200 text-zinc-700"
                }`}
              >
                #{topic}
              </button>
            ))}
            {selectedTopic && (
              <button
                type="button"
                onClick={() => setSelectedTopic(null)}
                className="text-[11px] font-bold text-[#DC2626] hover:underline ml-2 cursor-pointer"
              >
                ✕ Reset
              </button>
            )}
          </div>
        </div>

        {/* Theses & Publications List */}
        <div className="space-y-6">
          {filteredTheses.map((item: ThesisItem) => {
            const isPublication = item.type === "Fachpublikation";

            return (
              <article
                key={item.id}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200 shadow-xs hover:shadow-xl transition-all duration-300 space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-md ${
                          isPublication
                            ? "bg-amber-100 text-amber-900 border border-amber-200"
                            : "bg-sky-100 text-sky-900 border border-sky-200"
                        }`}
                      >
                        {item.type}
                      </span>
                      <span className="text-xs font-mono text-zinc-400">
                        {item.term}
                      </span>
                      <span className="text-xs font-medium text-zinc-500">
                        · {item.institution}
                      </span>
                    </div>

                    <h2 className="font-sans text-xl sm:text-2xl font-bold text-zinc-950 leading-snug">
                      {item.title}
                    </h2>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                  {item.summary}
                </p>

                {/* Meta details: Author & Supervisor */}
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 space-y-1.5 text-xs text-zinc-700">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <div>
                      <strong className="font-semibold text-zinc-900">
                        {isPublication
                          ? isDe
                            ? "Autor:"
                            : "Author:"
                          : isDe
                          ? "Absolvent / Verfasser:"
                          : "Author / Graduate:"}
                      </strong>{" "}
                      {item.author}
                    </div>
                    <div>
                      <strong className="font-semibold text-zinc-900">
                        {t.supervisionLabel}
                      </strong>{" "}
                      {item.supervisors}
                    </div>
                  </div>

                  {item.keyTakeaway && (
                    <div className="pt-1.5 text-[11px] text-zinc-600 border-t border-zinc-200/60 font-light">
                      <strong className="font-semibold text-zinc-800">
                        {t.academicFocus}
                      </strong>{" "}
                      {item.keyTakeaway}
                    </div>
                  )}
                </div>

                  {/* Topics Tag List & Actions */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {item.topics.map((tItem, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-md bg-zinc-100 text-zinc-600 font-mono text-[10px]"
                        >
                          #{tItem}
                        </span>
                      ))}
                    </div>

                    {item.pdfDownloadUrl && (
                      <a
                        href={item.pdfDownloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        download={item.pdfFileName}
                        className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-950 hover:bg-[#DC2626] text-white text-xs font-semibold tracking-wide transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer shrink-0 min-h-[40px] touch-manipulation group"
                        title={t.downloadPdf}
                      >
                        <Icon name="file-pdf" className="text-sm text-red-400 group-hover:text-white transition-colors" />
                        <span>{t.downloadPdf}</span>
                        <span className="text-[11px] text-zinc-400 group-hover:text-white transition-colors">↓</span>
                      </a>
                    )}
                  </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA Block */}
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
    </article>
  );
}
