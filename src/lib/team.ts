export interface TeamMember {
  name: string;
  role: {
    de: string;
    en: string;
  };
  image?: string;
  highlightBadge?: {
    de: string;
    en: string;
  };
  lines: {
    de: string[];
    en: string[];
  };
}

export const teamMembers: TeamMember[] = [
  {
    name: "Dipl.-Ing. (FH) Majeed Shams M.Eng.",
    role: {
      de: "Büroinhaber · Architekt & Stadtplaner",
      en: "Practice Principal · Architect & Urban Planner",
    },
    image: "/images/team/Majeed-Shams.jpg",
    highlightBadge: {
      de: "Büroleitung",
      en: "Leadership",
    },
    lines: {
      de: [
        "Architekturstudium Hochschule Karlsruhe (HsKA) — Diplom mit Auszeichnung 2008",
        "Masterstudium Stadtplanung HfT Stuttgart — Master of Engineering 2011",
        "Lehrbeauftragter / Dozent seit 2020 — Frankfurt UAS, Fachbereich Architektur & Bauingenieurwesen",
        "Über 5 Jahre behördlicher Prüfer im Bauamt (Karlsruhe, Weinstadt, Dieburg)",
        "Gastdozent BTU Cottbus & ehem. CIM-Experte für GiZ / BMZ / Auswärtiges Amt",
      ],
      en: [
        "Architecture degree Karlsruhe University of Applied Sciences (HsKA) — Diploma with Honors 2008",
        "Master's degree in Urban Planning HfT Stuttgart — Master of Engineering 2011",
        "Lecturer since 2020 — Frankfurt UAS, Faculty of Architecture & Civil Engineering",
        "Over 5 years as official municipal building officer (Karlsruhe, Weinstadt, Dieburg)",
        "Visiting lecturer BTU Cottbus & former CIM expert for GIZ / BMZ / Federal Foreign Office",
      ],
    },
  },
  {
    name: "Hatice Erol Yeniyapan",
    role: {
      de: "Dipl.-Ing. (FH) Architektin, M.A.",
      en: "Architect, Dipl.-Ing. (FH), M.A.",
    },
    image: "/images/team/Hatice-Erol-Yeniyapan.jpg",
    highlightBadge: {
      de: "Entwurf & Planung",
      en: "Design & Planning",
    },
    lines: {
      de: [
        "Architekturstudium Hochschule Karlsruhe (HsKA) — Diplom mit Auszeichnung 2009/10",
        "Masterstudium Architektur Hochschule Karlsruhe (HsKA) — Master of Arts (M.A.)",
        "Schwerpunkte: Hochbauentwurf, nachhaltige Wohnkonzepte & Genehmigungsplanung",
      ],
      en: [
        "Architecture degree Karlsruhe University of Applied Sciences (HsKA) — Diploma with Honors 2009/10",
        "Master's in Architecture Karlsruhe University of Applied Sciences (HsKA) — Master of Arts (M.A.)",
        "Key areas: Structural design, sustainable housing concepts & permit application planning",
      ],
    },
  },
  {
    name: "Samuel Allaw (B.Eng.)",
    role: {
      de: "Bauleitung & Projektsteuerung",
      en: "Site Supervision & Project Management",
    },
    image: "/images/team/Samuel-Allaw.png",
    highlightBadge: {
      de: "Bauüberwachung",
      en: "Site Management",
    },
    lines: {
      de: [
        "Bachelor of Engineering — Bauingenieurwesen, Hochschule Darmstadt",
        "Spezialist für Kostencontrolling, Bauzeitenpläne & Baustellenkoordination vor Ort",
        "Realisierung komplexer Mehrfamilienhaus- & Mischnutzungsprojekte",
      ],
      en: [
        "Bachelor of Engineering — Civil Engineering, Darmstadt University of Applied Sciences",
        "Specialist in cost controlling, construction scheduling & on-site trade coordination",
        "Delivery of complex multi-family housing & mixed-use urban developments",
      ],
    },
  },
  {
    name: "Ronak Namdari (M.A.)",
    role: {
      de: "Master of Arts in Architecture",
      en: "Master of Arts in Architecture",
    },
    image: "/images/team/Ronak-Namdari.png",
    highlightBadge: {
      de: "Konzeptdesign",
      en: "Concept Design",
    },
    lines: {
      de: [
        "Städelschule, Frankfurt am Main — Master of Arts (M.A.)",
        "Kreativkonzepte, räumliche Transformationen & innovative Typologien",
      ],
      en: [
        "Staedelschule, Frankfurt am Main — Master of Arts (M.A.)",
        "Creative design concepts, spatial transformations & innovative typologies",
      ],
    },
  },
  {
    name: "Farhad Minaei (B.Arch.)",
    role: {
      de: "3D-Visualisierung & Modellierung",
      en: "3D Visualization & Computational Modeling",
    },
    image: "/images/team/Farhad-Minaei.png",
    highlightBadge: {
      de: "BIM & 3D",
      en: "BIM & 3D",
    },
    lines: {
      de: [
        "Bachelor of Architecture",
        "Fotorealistische 3D-Renderings, BIM-Modellierung & Lichtsimulationen für Bauherren & Behörden",
      ],
      en: [
        "Bachelor of Architecture",
        "Photorealistic 3D renderings, BIM building modeling & lighting simulations for clients & planning authorities",
      ],
    },
  },
];

export const networkStats = {
  expertsCount: "16+",
  expertsDesc: {
    de: "Fester Verbund aus erfahrenen Architekt:innen, Fachplaner:innen, Statiker:innen & Energieberater:innen",
    en: "Integrated alliance of seasoned architects, structural engineers, MEP planners & certified energy consultants",
  },
  projectsCompleted: "100+",
  budgetRange: "10.000 € – 13,5 Mio. €",
  yearsExperience: {
    de: "17+ Jahre",
    en: "17+ Years",
  },
};
