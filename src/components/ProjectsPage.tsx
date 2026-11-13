import { useState, useEffect } from "react";
import { projects, Project } from "../data/projects";
import { Language, Translations } from "../lib/i18n";
import { Icon } from "./icon";

interface ProjectsPageProps {
  t: Translations["projectsPage"];
  language: Language;
  onSelectProject: (project: Project) => void;
  onBack: () => void;
  onBookConsultation: () => void;
  initialCategory?: string;
}

export function ProjectsPage({
  t,
  language,
  onSelectProject,
  onBack,
  onBookConsultation,
  initialCategory,
}: ProjectsPageProps) {
  const isDe = language === "de";

  const getCategoryFromUrl = () => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get("category");
      if (
        cat &&
        ["urban-planning", "residential", "commercial", "education", "sustainability"].includes(cat)
      ) {
        return cat;
      }
    }
    return initialCategory || "all";
  };

  const [activeCategory, setActiveCategory] = useState<string>(getCategoryFromUrl);

  useEffect(() => {
    const handlePopState = () => {
      setActiveCategory(getCategoryFromUrl());
    };
    window.addEventListener("popstate", handlePopState);
    window.addEventListener("routechange", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("routechange", handlePopState);
    };
  }, []);

  const categories = [
    { id: "all", label: t.filterAll },
    { id: "commercial", label: t.filterCommercial },
    { id: "urban-planning", label: t.filterUrban },
    { id: "residential", label: t.filterResidential },
    { id: "education", label: t.filterEducation },
    { id: "sustainability", label: t.filterSustainability },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <article className="min-h-screen bg-[#FFFFFF] text-zinc-900 pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
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
            Shams Consult · {t.badge}
          </span>
        </div>

        {/* Header Block */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-block">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#DC2626]">
              {t.badge}
            </span>
          </div>

          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-[1.12]">
            {t.title}
          </h1>

          <p className="font-sans text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 border-b border-zinc-200 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setActiveCategory(cat.id);
                if (typeof window !== "undefined") {
                  const url = new URL(window.location.href);
                  if (cat.id === "all") {
                    url.searchParams.delete("category");
                  } else {
                    url.searchParams.set("category", cat.id);
                  }
                  window.history.replaceState(null, "", url.toString());
                }
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-zinc-950 text-white shadow-xs"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
          <span className="ml-auto text-xs font-mono text-zinc-400">
            {filteredProjects.length} / {projects.length}
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p) => {
            const title = isDe ? p.title.de : p.title.en;
            const subtitle = isDe ? p.subtitle.de : p.subtitle.en;
            const location = isDe ? p.location.de : p.location.en;
            const categoryLabel = isDe ? p.categoryLabel.de : p.categoryLabel.en;

            return (
              <div
                key={p.id}
                onClick={() => onSelectProject(p)}
                className="group flex flex-col justify-between bg-white border border-zinc-200 hover:border-zinc-400 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] bg-zinc-100 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-zinc-900/80 backdrop-blur-md text-white text-[10px] font-mono px-2.5 py-1 rounded-md">
                      {categoryLabel}
                    </div>
                    {p.year && (
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-zinc-900 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md shadow-2xs">
                        {p.year}
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                      <Icon name="location-dot" className="text-sm text-[#DC2626]" />
                      <span>{location}</span>
                    </div>

                    <h2 className="font-sans text-lg font-bold text-zinc-950 group-hover:text-[#DC2626] transition-colors leading-snug">
                      {title}
                    </h2>

                    <p className="font-sans text-xs text-zinc-600 font-light line-clamp-2 leading-relaxed">
                      {subtitle}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 py-4 border-t border-zinc-100 bg-zinc-50/50 flex items-center justify-between">
                  <span className="text-xs font-bold text-zinc-900 group-hover:text-[#DC2626] transition-colors flex items-center gap-1">
                    <span>{t.viewDetails}</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                  {p.documents && p.documents.length > 0 && (
                    <span className="text-[10px] font-mono text-zinc-400 bg-zinc-200/60 px-2 py-0.5 rounded">
                      PDF ({p.documents.length})
                    </span>
                  )}
                </div>
              </div>
            );
          })}
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
    </article>
  );
}
