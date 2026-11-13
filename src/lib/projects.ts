export interface Project {
  slug: string;
  title: string;
  location: string;
  year: string;
  category: "Wohnungsbau" | "Gewerbe & Mischnutzung" | "Stadt- & Bauleitplanung" | "Nachhaltigkeit";
  scope: string;
  image: string;
  imageAlt: string;
  highlight?: string;
  description: string;
  stats?: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    slug: "netto-supermarkt-muenster-hessen",
    title: "„Netto“-Nahversorgungszentrum & 22 Wohnungen",
    location: "Münster (Hessen)",
    year: "2023–2024",
    category: "Gewerbe & Mischnutzung",
    scope: "Ausführungs- & Werkplanung (LPH 5) · Tiefgarage",
    highlight: "Großprojekt Mischnutzung",
    image: "/images/image-37e42d.jpg",
    imageAlt: "Ausführungsplanung Netto Supermarkt, 22 Wohnungen und Tiefgarage",
    description:
      "Umfassende Ausführungs- und Detailplanung für ein urbanes Mischquartier: Erdgeschossiger Lebensmittelmarkt mit Bäckerei sowie 22 modernen Wohneinheiten im 1. OG mit grünem Innenhof und Tiefgarage.",
    stats: [
      { label: "Wohnungen", value: "22 Einheiten" },
      { label: "Gewerbe", value: "Netto Supermarkt + Bäckerei" },
      { label: "Infrastruktur", value: "Grüner Innenhof + TG" },
    ],
  },
  {
    slug: "lagerhalle-feinkost-fleischverarbeitung",
    title: "Produktions- & Logistikhalle Lebensmittel",
    location: "Süddeutschland",
    year: "2019–2021",
    category: "Gewerbe & Mischnutzung",
    scope: "LPH 1–8 HOAI · Gewerbebau & Hygieneauflagen",
    highlight: "Industrie- & Gewerbebau",
    image: "/images/image-35c767.jpg",
    imageAlt: "Lagerhalle für Feinkost und Fleischverarbeitung",
    description:
      "Planung und Überwachung einer modernen Produktions- und Lagerhalle für Feinkostverarbeitung mit strengsten Hygiene-, Kühlketten- und Brandschutzanforderungen.",
    stats: [
      { label: "Branche", value: "Lebensmittelindustrie" },
      { label: "Anforderung", value: "HACCP & Kühltechnik" },
      { label: "Typ", value: "Industrie & Logistik" },
    ],
  },
  {
    slug: "bebauungsplan-toepfenmuehle-gersfeld",
    title: "Bebauungsplan „Töpfenmühle“ Gersfeld (Rhön)",
    location: "Gersfeld (Rhön)",
    year: "2023–2024",
    category: "Stadt- & Bauleitplanung",
    scope: "Qualifizierter Bebauungsplan gem. § 30 Abs. 1 BauGB",
    highlight: "Kommunale Bauleitplanung",
    image: "/images/image-f22e9f.jpg",
    imageAlt: "Begründung Bebauungsplan Töpfenmühle Gersfeld (Rhön)",
    description:
      "Zweistufiges Bauleitplanverfahren mit Artenschutzprüfung und Umweltbericht nach § 2 Abs. 4 BauGB. Rechtssichere Baurechtschaffung bei gleichzeitigem Schutz dörflicher historischer Bausubstanz.",
    stats: [
      { label: "Verfahren", value: "§ 30 Abs. 1 BauGB" },
      { label: "Umwelt", value: "Umweltbericht & Artenschutz" },
      { label: "Auftraggeber", value: "Kommune / Träger" },
    ],
  },
  {
    slug: "kindergarten-schemmerhofen",
    title: "Kindergarten Schemmerhofen bei Ulm",
    location: "Schemmerhofen",
    year: "2024",
    category: "Gewerbe & Mischnutzung",
    scope: "LPH 1–4 HOAI · Entwurf & Genehmigung",
    highlight: "Öffentlicher Träger",
    image: "/images/image-f36e2e.png",
    imageAlt: "Kindergarten in Schemmerhofen bei Ulm",
    description:
      "Kindgerechter Neubau mit Fokus auf natürliche Belichtung, schadstofffreie Baumaterialien und flexible Gruppenraumkonzepte. In Kooperation mit Obermeier + Traub.",
    stats: [
      { label: "Typ", value: "Kindertagesstätte" },
      { label: "Fokus", value: "Pädagogische Raumkonzepte" },
      { label: "Phase", value: "Entwurf & Baugenehmigung" },
    ],
  },
  {
    slug: "vep-maienweg-ulm",
    title: "Vorhabenbezogener B-Plan Maienweg 2, Ulm",
    location: "Ulm",
    year: "2023",
    category: "Stadt- & Bauleitplanung",
    scope: "Vorhabenbezogener Bebauungsplan (VEP) gem. § 12 BauGB",
    highlight: "Innerstädtische Nachverdichtung",
    image: "/images/image-0996f8.jpg",
    imageAlt: "Vorhabenbezogener Bebauungsplan Maienweg 2 Ulm",
    description:
      "Ausarbeitung des vorhabenbezogenen Bebauungsplans inklusive Vorhaben- und Erschließungsplan, textlicher Festsetzungen, Schnitte und Begründung zur Realisierung eines anspruchsvollen innerstädtischen Wohnprojekts.",
    stats: [
      { label: "Rechtsgrundlage", value: "§ 12 BauGB (VEP)" },
      { label: "Ziel", value: "Innerstädtisches Wohnen" },
      { label: "Dokumente", value: "Satzung & Begründung" },
    ],
  },
  {
    slug: "mehrfamilienhaus-dreieich-goetzenhain",
    title: "Mehrfamilienhaus Dreieich-Götzenhain",
    location: "Dreieich (Rhein-Main)",
    year: "2021–2024",
    category: "Wohnungsbau",
    scope: "LPH 1–8 HOAI · Neubau & Tiefgarage",
    highlight: "Effizienz & Baugenehmigung",
    image: "/images/image-3a7a9c.jpg",
    imageAlt: "Neubau Mehrfamilienhaus in Dreieich Götzenhain",
    description:
      "Neubau eines dreistöckigen Mehrfamilienhauses mit barrierefreien Wohneinheiten, großzügigen Balkonen und integrierter Tiefgarage. Erfolgreiche Genehmigung trotz anspruchsvoller Geländetopografie und strenger Baumschutzauflagen.",
    stats: [
      { label: "Einheiten", value: "Mehrfamilienhaus" },
      { label: "Besonderheit", value: "Tiefgarage & Baumbestand" },
      { label: "Region", value: "Kreis Offenbach / FFM" },
    ],
  },
  {
    slug: "qs-nachhaltiges-gebaeude-goetzenhain",
    title: "Qualitätssiegel Nachhaltiges Gebäude (QNG)",
    location: "Dreieich-Götzenhain",
    year: "2024–2025",
    category: "Nachhaltigkeit",
    scope: "QNG-Zertifizierungsbegleitung & Ökobilanzierung",
    highlight: "KfW-Förderung & ESG",
    image: "/images/dreist-ckiges-mehrfamilienhaus-mit-gro-en-fenstern-a8b20c.png",
    imageAlt: "Mehrfamilienhaus mit QNG Siegel",
    description:
      "Ganzheitliche Begleitung und Nachweisführung für das Qualitätssiegel Nachhaltiges Gebäude (QNG-Plus/Premium). Ermöglicht maximale Förderkredite und höchste Zukunftssicherheit.",
    stats: [
      { label: "Zertifikat", value: "QNG Bundesförderung" },
      { label: "Nutzen", value: "Zinsvergünstigung & ESG" },
      { label: "Lebenszyklus", value: "Geringer CO2-Fußabdruck" },
    ],
  },
  {
    slug: "einfamilienhaus-lingen-ems",
    title: "Exklusive Stadtvilla / Einfamilienhaus",
    location: "Lingen (Ems)",
    year: "2021",
    category: "Wohnungsbau",
    scope: "LPH 1–8 HOAI · Vollständige Bauleitung",
    highlight: "Privater Bauherr",
    image: "/images/image-09c215.jpg",
    imageAlt: "Realisierung Einfamilienhaus Lingen",
    description:
      "Individuelle architektonische Maßanfertigung von den ersten Entwurfsskizzen über den Bauantrag bis zur Schlüsselübergabe. Bodentiefe Glasfronten, offene Raumzonierung und hocheffiziente Haustechnik.",
    stats: [
      { label: "Typ", value: "Individuelles Einfamilienhaus" },
      { label: "Leistung", value: "LPH 1–8 HOAI schlüsselfertig" },
      { label: "Bauweise", value: "Energieeffizienter Massivbau" },
    ],
  },
];
