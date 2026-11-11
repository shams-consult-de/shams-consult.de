import { Translations } from "../lib/i18n";

interface TeamSectionProps {
  t: Translations["team"];
  onNavigateAbout?: () => void;
}

export function TeamSection({ t, onNavigateAbout }: TeamSectionProps) {
  const handleTeamClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateAbout) {
      onNavigateAbout();
    } else {
      window.location.href = "/about";
    }
  };

  const teamAvatars = [
    { name: "Dipl.-Ing. Majeed Shams", img: "/images/team/Majeed-Shams.jpg" },
    { name: "Hatice Erol Yeniyapan", img: "/images/team/Hatice-Erol-Yeniyapan.jpg" },
    { name: "Samuel Allaw", img: "/images/team/Samuel-Allaw.png" },
    { name: "Ronak Namdari", img: "/images/team/Ronak-Namdari.png" },
    { name: "Farhad Minaei", img: "/images/team/Farhad-Minaei.png" },
  ];

  return (
    <section className="py-7 lg:py-9 bg-[#F8F9FA] text-zinc-900 border-b border-zinc-200 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-5 sm:p-7 rounded-2xl bg-white border border-zinc-200/90 hover:border-zinc-300 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 group">
          
          {/* Left: Avatar Stack & Authority Headline */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            {/* Overlapping Avatar Cluster with +12 Badge */}
            <div className="flex items-center -space-x-3 shrink-0 py-1">
              {teamAvatars.slice(0, 4).map((member, idx) => (
                <div
                  key={idx}
                  className="relative group/avatar"
                  title={member.name}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white ring-1 ring-zinc-200 shadow-xs transform hover:scale-110 hover:z-20 transition-transform duration-200"
                    loading="lazy"
                  />
                </div>
              ))}
              {/* +12 additional specialists badge (total 16+) */}
              <div
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs sm:text-sm border-2 border-white ring-1 ring-zinc-200 shadow-xs shrink-0 select-none"
                title={t.title}
              >
                {t.expertCountBadge}
              </div>
            </div>

            {/* Description & Core Details */}
            <div className="space-y-1 text-left max-w-2xl">
              <h3 className="text-base sm:text-lg font-extrabold text-zinc-950 tracking-tight">
                {t.title}
              </h3>

              <p className="text-xs text-zinc-600 font-light leading-relaxed">
                {t.description}
              </p>
            </div>
          </div>

          {/* Right: Direct CTA to Team Details Page */}
          <div className="w-full lg:w-auto shrink-0 flex flex-col items-start lg:items-end justify-center pt-2 lg:pt-0 border-t lg:border-t-0 border-zinc-200">
            <a
              href="/about"
              onClick={handleTeamClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-950 hover:bg-zinc-800 text-white px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md cursor-pointer text-center"
            >
              <span>{t.ctaButton}</span>
              <span className="text-sm">→</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
