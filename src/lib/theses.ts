export interface ThesisItem {
  id: string;
  type: "Fachpublikation" | "Masterarbeit" | "Bachelorarbeit";
  title: string;
  subtitle: string;
  author: string;
  term: string;
  institution: string;
  supervisors: string;
  summary: string;
  keyTakeaway: string;
  topics: string[];
  pdfDownloadUrl?: string;
  pdfFileName?: string;
}

export const thesesAndResearch: ThesisItem[] = [
  {
    id: "stellplatzsatzung",
    type: "Fachpublikation",
    title: "Stellplatzsatzung im Fokus: Zeit für eine kritische Neubewertung!",
    subtitle: "Warum starre Vorgaben zeitgemäßer Mobilität und Wohnraumentwicklung im Weg stehen",
    author: "Majeed Shams & Leonie Ries",
    term: "Januar 2024",
    institution: "Shams Consult / Fachbeitrag Kommunale Baupolitik Hessen",
    supervisors: "Dipl.-Ing. Majeed Shams M.Eng.",
    summary:
      "Kritische Analyse der hessischen Stellplatzsatzungen aus der Perspektive eines ehem. Bauamtsprüfers. Zeigt auf, wie starre Stellplatzschlüssel bezahlbaren Wohnungsbau blockieren und schlägt flexible Quartiers- und Mobilitätskonzepte vor.",
    keyTakeaway:
      "Wirtschaftliche Entlastung für Bauherren durch qualifizierte Mobilitätskonzepte und Reduktion unnötiger Tiefgaragenkosten.",
    topics: ["Stellplatzsatzung", "Baugenehmigung", "Mobilitätskonzepte", "Wohnungsbau Hessen"],
    pdfDownloadUrl: "/documents/theses/Shams-Consult_Fachpublikation_Stellplatzsatzung-im-Fokus.pdf",
    pdfFileName: "Shams-Consult_Fachpublikation_Stellplatzsatzung-im-Fokus.pdf",
  },
  {
    id: "maengelmanagement",
    type: "Bachelorarbeit",
    title: "Analyse und Optimierung der Prozesse der Mängelvermeidung und Mängelbearbeitung bei Bauprojekten",
    subtitle: "Wirtschaftliche Aspekte im Fokus von Bauleitung & Ausführung",
    author: "B.Eng. Firat Y.",
    term: "Wintersemester 2023/24",
    institution: "Frankfurt University of Applied Sciences (Frankfurt UAS)",
    supervisors: "Prof. Dr.-Ing. Jörg Huth & Dipl.-Ing. Majeed Shams M.Eng.",
    summary:
      "Untersuchung systematischer Fehlerquellen auf Baustellen im Rhein-Main-Gebiet und Entwicklung eines praxiserprobten Leitfadens zur frühzeitigen Mängelprävention und Kostenminimierung.",
    keyTakeaway:
      "Strenge Qualitätskontrolle spart im Schnitt 8-15% der unvorhergesehenen Nachbesserungskosten auf der Baustelle.",
    topics: ["Mängelvermeidung", "Bauleitung", "Qualitätsmanagement", "Kostenoptimierung"],
  },
  {
    id: "baukostenmanagement",
    type: "Bachelorarbeit",
    title: "Baukostenmanagement während Krisen mit erheblicher Baupreiserhöhung",
    subtitle: "Fallbeispiel: Neubau eines Mehrfamilienhauses mit Tiefgarage in Dreieich",
    author: "B.Eng. Selina Ö.",
    term: "Sommersemester 2022",
    institution: "Frankfurt University of Applied Sciences (Frankfurt UAS)",
    supervisors: "Prof. Dr.-Ing. Mathias Rohde & Dipl.-Ing. Majeed Shams M.Eng.",
    summary:
      "Praxisanalyse des Kosten- und Risikomanagements bei extremen Materialpreisschwankungen am realen Mehrfamilienhaus-Projekt von Shams Consult in Dreieich.",
    keyTakeaway:
      "Vorausschauende Ausschreibung und dynamische Pufferplanung sichern Investoren vor unkontrollierten Nachträgen.",
    topics: ["Baukostenmanagement", "Mehrfamilienhaus", "Materialpreis-Controlling", "Dreieich"],
  },
  {
    id: "kernsanierung-gegenueberstellung",
    type: "Bachelorarbeit",
    title: "Gegenüberstellung von zwei kernsanierten Wohnobjekten unter verschiedenen Auftraggebern",
    subtitle: "Baukosten- und Effizienzvergleich während Marktvolatilität",
    author: "B.Eng. Aydan D.",
    term: "Wintersemester 2022/23",
    institution: "Frankfurt University of Applied Sciences (Frankfurt UAS)",
    supervisors: "Prof. Dr.-Ing. Mathias Rohde & Dipl.-Ing. Majeed Shams M.Eng.",
    summary:
      "Detaillierte Baukostenanalyse zweier Sanierungsobjekte zur Ermittlung optimaler Bauherren-Entscheidungskriterien zwischen Standard- und Effizienzhaus-Sanierung.",
    keyTakeaway:
      "Klare Kennzahlen für private und gewerbliche Bestandshalter bei energetischer Sanierung.",
    topics: ["Kernsanieurng", "Baukostenvergleich", "Effizienzhaus", "Bestandsumbau"],
  },
  {
    id: "bausubstanz-sanierung-vs-abriss",
    type: "Bachelorarbeit",
    title: "Auswertung der Bausubstanz und Entscheidungsfindung: Sanierung versus Abriss",
    subtitle: "Fallbeispiel: Zweifamilienhaus in Rödermark",
    author: "B.Eng. Zinat A.",
    term: "Wintersemester 2020/21",
    institution: "Frankfurt University of Applied Sciences (Frankfurt UAS)",
    supervisors: "Prof. Dr.-Ing. Mathias Rohde & Dipl.-Ing. Majeed Shams M.Eng.",
    summary:
      "Kriterienkatalog für Eigentümer zur wirtschaftlichen und ökologischen Abwägung: Lohnt sich die Sanierung oder ist ein gezielter Ersatzneubau rentabler?",
    keyTakeaway:
      "Verhindert Fehlinvestitionen durch neutrale Bausubstanz- und Restwertanalyse.",
    topics: ["Sanierung vs. Abriss", "Bausubstanzanalyse", "Zweifamilienhaus", "Rödermark"],
  },
  {
    id: "master-elsdorf",
    type: "Masterarbeit",
    title: "Fruchtbare Mullis Elsdorf – Quartiersentwicklung & Agro-urbanes Siedlungsmodell",
    subtitle: "Transformation eines dynamischen Masterplans",
    author: "M.Eng. Rebecca Granderath",
    term: "Sommersemester 2021",
    institution: "Frankfurt University of Applied Sciences (Frankfurt UAS)",
    supervisors: "Prof. Dipl.-Ing. Isabel Maria Finkenberger & Coaching: Dipl.-Ing. Majeed Shams M.Eng.",
    summary:
      "Entwicklung innovativer städtebaulicher Typologien für zukunftsfähige Quartiere mit Mischnutzung, nachhaltiger Energieversorgung und hoher Aufenthaltsqualität.",
    keyTakeaway:
      "Zukunftsfähige Masterplanung für Kommunen und Entwickler größerer Konversionsflächen.",
    topics: ["Quartiersentwicklung", "Masterplanung", "Agro-Urbanismus", "Stadterweiterung"],
  },
  {
    id: "master-stadtentwicklung-dieburg",
    type: "Masterarbeit",
    title: "Stadtentwicklungskonzept Dieburg – Innovative Ansätze für eine historische Stadt",
    subtitle: "Masterthesis Umweltmanagement & Stadtplanung in Ballungsräumen",
    author: "M.Eng. Nicol T. & M.Eng. Piera W.",
    term: "Sommersemester 2020",
    institution: "Frankfurt University of Applied Sciences (Frankfurt UAS)",
    supervisors: "Prof. Dr.-Ing. Michael Peterek & Dipl.-Ing. Majeed Shams M.Eng.",
    summary:
      "Städtebauliche Rahmenplanung für Dieburg unter Wahrung des historischen Erbes bei gleichzeitiger Aktivierung von Innenentwicklungspotenzialen.",
    keyTakeaway:
      "Ganzheitliche kommunale Beratung für Städte und Gemeinden im Rhein-Main-Gebiet.",
    topics: ["Stadtentwicklung", "Innenentwicklung", "Denkmalschutz", "Dieburg"],
  },
];
