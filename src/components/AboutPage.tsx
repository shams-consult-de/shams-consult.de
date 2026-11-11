import { Language, Translations } from "../lib/i18n";

interface AboutPageProps {
  t: Translations["about"];
  clientsT: Translations["clients"];
  language: Language;
  onBack: () => void;
  onNavigateFounder: () => void;
  onNavigateSiteVisits?: () => void;
  onNavigateResearch?: () => void;
  onBookConsultation: () => void;
}

export function AboutPage({
  t,
  clientsT,
  language,
  onBack,
  onNavigateFounder,
  onNavigateSiteVisits,
  onNavigateResearch,
  onBookConsultation,
}: AboutPageProps) {
  const isDe = language === "de";

  const teamMembers = [
    {
      name: "Dipl.-Ing. (FH) Majeed Shams M.Eng.",
      role: isDe ? "Büroinhaber · Architekt & Stadtplaner" : "Managing Principal · Architect & Urban Planner",
      image: "/images/team/Majeed-Shams.jpg",
      credentials: isDe
        ? "Mitglied AKH Nr. 21886 · HsKA Diplom m. Auszeichnung 2008 · HfT Stuttgart M.Eng. 2011 · Dozent Frankfurt UAS"
        : "Chamber Member AKH #21886 · HsKA with Honors 2008 · HfT Stuttgart M.Eng. 2011 · Lecturer Frankfurt UAS",
    },
    {
      name: "Hatice Erol Yeniyapan (Dipl.-Ing. FH, M.A.)",
      role: isDe ? "Architektin" : "Architect",
      image: "/images/team/Hatice-Erol-Yeniyapan.jpg",
      credentials: isDe
        ? "Hochschule Karlsruhe (HsKA) Diplom mit Auszeichnung 2009/10 · Master of Arts (M.A.)"
        : "Karlsruhe University of Applied Sciences (HsKA) with Honors 2009/10 · Master of Arts (M.A.)",
    },
    {
      name: "Samuel Allaw (B.Eng.)",
      role: isDe ? "Bauleitung & Projektsteuerung" : "Site Supervision & Project Management",
      image: "/images/team/Samuel-Allaw.png",
      credentials: isDe
        ? "Bachelor of Engineering · Bauingenieurwesen Hochschule Darmstadt"
        : "Bachelor of Engineering · Civil Engineering Darmstadt University of Applied Sciences",
    },
    {
      name: "Ronak Namdari (M.A.)",
      role: isDe ? "Architektur & Konzeptentwurf" : "Architecture & Conceptual Design",
      image: "/images/team/Ronak-Namdari.png",
      credentials: isDe
        ? "Master of Arts in Architecture · Staatliche Hochschule für Bildende Künste (Städelschule) Frankfurt am Main"
        : "Master of Arts in Architecture · Staedelschule Frankfurt am Main",
    },
    {
      name: "Farhad Minaei (B.Arch.)",
      role: isDe ? "3D-Visualisierung & Modellierung" : "3D Visualization & Computational Modeling",
      image: "/images/team/Farhad-Minaei.png",
      credentials: isDe
        ? "Bachelor of Architecture · Spezialist für digitale Gebäudemodelle, Renderings & BIM"
        : "Bachelor of Architecture · Specialist for Digital Building Models, Renderings & BIM",
    },
  ];

  return (
    <article className="min-h-screen bg-[#FFFFFF] text-zinc-900 pt-28 pb-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-16">
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

        {/* Header Block: Firm Profile */}
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

        {/* 1. Core Practice Profile & Values */}
        <section className="p-8 sm:p-10 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block">
              {t.profileBadge}
            </span>
            <h2 className="font-sans text-xl sm:text-2xl font-bold text-zinc-950">
              {t.profileTitle}
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-zinc-700 font-light leading-relaxed">
            <p>{t.profileText1}</p>
            <p>{t.profileText2}</p>
          </div>

          {/* Quick Facts Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-zinc-200/80">
            <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-2xs">
              <span className="font-sans text-xl sm:text-2xl font-bold text-zinc-950 block">
                17+
              </span>
              <span className="text-[11px] text-zinc-500 font-medium">
                {isDe ? "Jahre Büroerfahrung" : "Years Experience"}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-2xs">
              <span className="font-sans text-xl sm:text-2xl font-bold text-zinc-950 block">
                100+
              </span>
              <span className="text-[11px] text-zinc-500 font-medium">
                {isDe ? "Realisierte Projekte" : "Built Projects"}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-2xs">
              <span className="font-sans text-xl sm:text-2xl font-bold text-zinc-950 block">
                13,5 M€
              </span>
              <span className="text-[11px] text-zinc-500 font-medium">
                {isDe ? "Größtes Einzelprojekt" : "Largest Project"}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-2xs">
              <span className="font-sans text-xl sm:text-2xl font-bold text-zinc-950 block">
                AKH
              </span>
              <span className="text-[11px] text-zinc-500 font-medium">
                {isDe ? "Mitglied Nr. 21886" : "Member #21886"}
              </span>
            </div>
          </div>

          {/* Link to Dedicated Site Visits & Field Proof Album */}
          <div className="pt-4 border-t border-zinc-200/80">
            <div className="p-5 sm:p-6 rounded-xl bg-white border border-zinc-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group">
              <div className="space-y-1 text-left">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#DC2626]">
                  <span>📷</span>
                  <span>{t.siteVisitsCtaBadge}</span>
                </div>
                <h3 className="font-sans text-base font-bold text-zinc-950">
                  {t.siteVisitsCtaTitle}
                </h3>
                <p className="text-xs text-zinc-600 font-light max-w-xl">
                  {t.siteVisitsCtaDesc}
                </p>
              </div>

              <a
                href="/site-visits"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigateSiteVisits) onNavigateSiteVisits();
                  else window.location.href = "/site-visits";
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-xs shrink-0 cursor-pointer"
              >
                <span>{t.siteVisitsCtaButton}</span>
              </a>
            </div>
          </div>
        </section>

        {/* 2. Official Chamber Registration & Qualifications */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block">
              {t.qualificationsBadge}
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl font-bold text-zinc-950">
              {t.qualificationsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white border border-zinc-200 shadow-xs space-y-2.5">
              <h3 className="font-sans text-base font-bold text-zinc-950">
                {t.akhRegistrationTitle}
              </h3>
              <p className="text-xs text-zinc-600 font-light leading-relaxed">
                {t.akhRegistrationDesc}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-zinc-200 shadow-xs space-y-2.5">
              <h3 className="font-sans text-base font-bold text-zinc-950">
                {t.qngTitle}
              </h3>
              <p className="text-xs text-zinc-600 font-light leading-relaxed">
                {t.qngDesc}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-zinc-200 shadow-xs space-y-3 flex flex-col justify-between">
              <div className="space-y-2.5">
                <h3 className="font-sans text-base font-bold text-zinc-950">
                  {t.academiaTitle}
                </h3>
                <p className="text-xs text-zinc-600 font-light leading-relaxed">
                  {t.academiaDesc}
                </p>
              </div>

              <div className="pt-2 border-t border-zinc-100">
                <a
                  href={language === "en" ? "/en/research" : "/research"}
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigateResearch) onNavigateResearch();
                    else window.location.href = language === "en" ? "/en/research" : "/research";
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#DC2626] hover:text-[#B91C1C] transition-colors group cursor-pointer"
                >
                  <span>{t.viewResearchContributions}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The Interdisciplinary Team with Real Portrait Photos */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block">
              {t.teamBadge}
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl font-bold text-zinc-950">
              {t.teamTitle}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 font-light max-w-2xl">
              {t.teamSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, idx) => (
              <article
                key={idx}
                className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Team Portrait Image Container (Portrait 3:4 for full body/torso framing) */}
                <div className="relative aspect-[3/4] bg-zinc-100 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <h3 className="font-sans text-base font-bold text-zinc-950 leading-snug group-hover:text-[#DC2626] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#DC2626]">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-[11px] text-zinc-600 font-light leading-relaxed pt-2.5 border-t border-zinc-100">
                    {member.credentials}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* 16+ Interdisciplinary Specialist Network Indicator */}
          <div className="p-6 sm:p-8 rounded-2xl bg-zinc-50 border border-zinc-200/90 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200/80 pb-4">
              <div className="space-y-1 text-left">
                <div className="inline-block">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#DC2626]">
                    {clientsT.networkBadge}
                  </span>
                </div>
                <h3 className="font-sans text-lg font-bold text-zinc-950">
                  {clientsT.networkTitle}
                </h3>
              </div>

              <div className="px-3.5 py-1.5 rounded-lg bg-zinc-950 text-white font-mono text-xs font-bold shrink-0 self-start sm:self-auto">
                {clientsT.networkCount}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed max-w-3xl">
              {clientsT.networkDesc}
            </p>

            {/* Specialist Discipline Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-3 py-1 rounded-md bg-white border border-zinc-200 text-[11px] font-mono text-zinc-700">
                🏗️ {clientsT.disciplines.structural}
              </span>
              <span className="px-3 py-1 rounded-md bg-white border border-zinc-200 text-[11px] font-mono text-zinc-700">
                ⚡ {clientsT.disciplines.mep}
              </span>
              <span className="px-3 py-1 rounded-md bg-white border border-zinc-200 text-[11px] font-mono text-zinc-700">
                🌿 {clientsT.disciplines.energy}
              </span>
              <span className="px-3 py-1 rounded-md bg-white border border-zinc-200 text-[11px] font-mono text-zinc-700">
                🛡️ {clientsT.disciplines.fireSafety}
              </span>
              <span className="px-3 py-1 rounded-md bg-white border border-zinc-200 text-[11px] font-mono text-zinc-700">
                📋 {clientsT.disciplines.tendering}
              </span>
              <span className="px-3 py-1 rounded-md bg-white border border-zinc-200 text-[11px] font-mono text-zinc-700">
                🌳 {clientsT.disciplines.landscape}
              </span>
            </div>
          </div>
        </section>

        {/* 4. Cross-link to Founder's Personal Story */}
        <section className="p-8 rounded-2xl bg-zinc-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-zinc-800">
          <div className="space-y-2 text-left">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DC2626] block">
              {t.founderStoryBadge}
            </span>
            <h3 className="font-sans text-xl font-bold text-white">
              {t.founderStoryTitle}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-xl">
              {t.founderStoryDesc}
            </p>
          </div>

          <button
            type="button"
            onClick={onNavigateFounder}
            className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-md cursor-pointer shrink-0"
          >
            <span>{t.founderStoryButton}</span>
          </button>
        </section>

        {/* 5. Bottom Consultation CTA */}
        <section className="p-8 sm:p-10 rounded-2xl bg-zinc-950 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl border border-white/10">
          <div className="space-y-2 text-left">
            <h3 className="font-sans text-xl sm:text-2xl font-bold text-white">
              {isDe
                ? "Möchten Sie ein konkretes Bauvorhaben besprechen?"
                : "Would you like to discuss your building project?"}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-xl">
              {isDe
                ? "Vereinbaren Sie eine verbindliche Fachberatung mit unserem Büroinhaber für fundierte Planungssicherheit."
                : "Book a consultation with our principal for clear statutory direction and planning safety."}
            </p>
          </div>

          <button
            type="button"
            onClick={onBookConsultation}
            className="bg-[#DC2626] hover:bg-[#B91C1C] text-white px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-lg cursor-pointer shrink-0"
          >
            {isDe ? "Erstgespräch anfragen →" : "Book Consultation →"}
          </button>
        </section>
      </div>
    </article>
  );
}
