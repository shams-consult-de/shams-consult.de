export type Language = "de" | "en";

export type LocalizedString = Record<Language, string>;

export interface LocalProject {
  id: string;
  title: LocalizedString;
  category: LocalizedString;
  location: LocalizedString;
  year: string;
  image: string;
  imageAlt: LocalizedString;
  specs: { label: LocalizedString; value: LocalizedString }[];
  overview: LocalizedString;
  keyFacts: LocalizedString[];
}

export interface HoaiPhase {
  phase: string;
  title: LocalizedString;
  description: LocalizedString;
  deliverables: LocalizedString[];
}

export interface RegionalOffice {
  name: LocalizedString;
  street: string;
  city: LocalizedString;
  phone: string;
  phoneHref: string;
  mapEmbedUrl: string;
}

export interface DistrictGuideItem {
  id: string;
  name: LocalizedString;
  suburbs: LocalizedString;
  badge: LocalizedString;
  path?: string;
  summary: LocalizedString;
  focusAreas: LocalizedString[];
  zoningHighlights: LocalizedString[];
}

export interface RegionalFaqItem {
  question: LocalizedString;
  answer: LocalizedString;
}

export interface RegionalLandingPageData {
  slug: string;
  path: string;
  parentPath?: string;
  parentName?: LocalizedString;
  h1: LocalizedString;
  eyebrow: LocalizedString;
  subtitle: LocalizedString;
  targetKeywords: string[];
  metaTitle: LocalizedString;
  metaDescription: LocalizedString;
  heroHighlights: LocalizedString[];
  localFocusTitle: LocalizedString;
  localFocusDescription: LocalizedString;
  localProjects: LocalProject[];
  hoaiPhases: HoaiPhase[];
  office: RegionalOffice;
  localRegulations: { title: LocalizedString; description: LocalizedString }[];
  districts?: DistrictGuideItem[];
  faqs?: RegionalFaqItem[];
}

import { suburbLandingPages } from "./suburbLandingPages.ts";

const baseRegionalLandingPages: Record<string, RegionalLandingPageData> = {
  "architektur-frankfurt": {
    slug: "architektur-frankfurt",
    path: "/architektur-frankfurt",
    h1: {
      de: "Architekturbüro Frankfurt am Main — Architektur & Bauanträge",
      en: "Architectural Practice Frankfurt am Main — Design & Building Permits",
    },
    eyebrow: {
      de: "Architektur & Stadtplanung Frankfurt am Main",
      en: "Architecture & Urban Planning Frankfurt am Main",
    },
    subtitle: {
      de: "Staatlich anerkanntes Architekturbüro (AKH Hessen Nr. 21886) am Carl-von-Noorden-Platz. Wir planen und realisieren anspruchsvolle Wohnbauten, Gewerbeimmobilien und Nachverdichtungen in Frankfurt am Main und im Rhein-Main-Gebiet.",
      en: "State-recognized architectural studio (AKH Hesse No. 21886) at Carl-von-Noorden-Platz. We plan and deliver premier residential properties, commercial assets, and urban infill throughout Frankfurt and the Rhine-Main area.",
    },
    targetKeywords: [
      "Architekturbüro Frankfurt am Main",
      "Architekt Frankfurt",
      "Stadtplaner Frankfurt",
      "Nutzungsänderung Frankfurt",
      "Bauantrag Frankfurt",
      "HOAI Leistungsphasen Frankfurt",
      "Nachverdichtung Frankfurt",
      "Architekt Frankfurt Sachsenhausen",
      "Architekt Frankfurt Westend",
      "Architekt Frankfurt Nordend Bornheim",
      "Architekt Frankfurt Bockenheim",
      "Architekt Frankfurt Riedberg",
      "Baugenehmigung Frankfurt Stadtteile",
    ],
    metaTitle: {
      de: "Architekturbüro & Stadtplaner Frankfurt am Main | Shams Consult",
      en: "Architectural Practice Frankfurt am Main — Permits & Design | Shams Consult",
    },
    metaDescription: {
      de: "Architekt & Stadtplaner in Frankfurt am Main (AKH Nr. 21886): Ganzheitliche Hochbauplanung, Nutzungsänderungen & Bauanträge nach HBO (HOAI 1–9). Jetzt anfragen!",
      en: "State-recognized architecture studio in Frankfurt am Main (AKH No. 21886). Integrated building design, HBO building permits, and full HOAI phases 1–9. Book your consultation today.",
    },
    heroHighlights: [
      {
        de: "Hauptsitz: Carl-von-Noorden-Platz 5, 60596 Frankfurt am Main",
        en: "Headquarters: Carl-von-Noorden-Platz 5, 60596 Frankfurt am Main",
      },
      {
        de: "Uneingeschränkte Bauvorlageberechtigung (AKH Hessen Nr. 21886)",
        en: "Full building permit filing authorization (AKH Hesse No. 21886)",
      },
      {
        de: "17+ Jahre Planungserfahrung & über 100 geprüfte Bauanträge",
        en: "17+ years of design experience & over 100 approved building applications",
      },
      {
        de: "Komplettbetreuung von Machbarkeit bis Schlüsselübergabe (HOAI LPH 1–9)",
        en: "Full-service architectural delivery from feasibility to turnkey handover (HOAI 1–9)",
      },
    ],
    localFocusTitle: {
      de: "Rechtssicherheit & kurze Behördenwege in Frankfurt",
      en: "Legal Certainty & Streamlined Municipal Approvals in Frankfurt",
    },
    localFocusDescription: {
      de: "Das Bauen in Frankfurt am Main erfordert tiefes Verständnis lokaler Bauvorschriften, Gestaltungssatzungen und enge Abstimmung mit dem Bauaufsichtsamt Frankfurt. Ob innerstädtische Nachverdichtung in Sachsenhausen, Aufstockungen im Westend oder Wohn- und Gewerbeprojekte entlang der Ausfallachsen: Wir garantieren Genehmigungssicherheit und architektonische Qualität.",
      en: "Building in Frankfurt am Main requires in-depth mastery of local building codes, municipal design statutes, and close collaboration with the Frankfurt Building Authority. Whether urban densification in Sachsenhausen, rooftop extensions in Westend, or commercial complexes: we deliver permit security and architectural excellence.",
    },
    localProjects: [
      {
        id: "shams-versickerungsrigole-regenwasser",
        title: {
          de: "Modulare Retentionsanlage & Außenanlagen",
          en: "Modular Retention Rigole & Landscape Engineering",
        },
        category: {
          de: "Nachhaltiges Bauen & Wohnungsbau",
          en: "Sustainable Engineering & Housing",
        },
        location: {
          de: "Rhein-Main-Gebiet (Metropolregion Frankfurt)",
          en: "Rhine-Main Region (Frankfurt Metro Area)",
        },
        year: "2024–2025",
        image: "/images/projects/shams-versickerungsrigole-regenwasser-aushub.jpg",
        imageAlt: {
          de: "Rigolenversickerung Wohnanlage Rhein-Main Frankfurt",
          en: "Stormwater infiltration system for residential development near Frankfurt",
        },
        specs: [
          { label: { de: "Leistungsphasen", en: "Work Phases" }, value: { de: "HOAI LPH 1–8", en: "HOAI Phases 1–8" } },
          { label: { de: "Technik", en: "Technology" }, value: { de: "Mineralische Retentionsblöcke (>95% Hohlraum)", en: "Mineral retention cores (>95% void volume)" } },
          { label: { de: "Norm", en: "Standard" }, value: { de: "DIN 1986-100 & DWA-A 138", en: "DIN 1986-100 & DWA-A 138" } },
          { label: { de: "Nutzen", en: "Advantage" }, value: { de: "100% Regenwasserentlastung", en: "100% stormwater network decoupling" } },
        ],
        overview: {
          de: "Zukunftsweisendes Schwammstadt-Konzept für ein Mehrfamilienhaus-Ensemble im Frankfurter Einzugsgebiet. Vollständige Entkopplung vom städtischen Kanalnetz und nachhaltige Gebührensenkung.",
          en: "Pioneering Sponge City solution for a multi-family residential complex in the Frankfurt commuter belt, decoupling 100% of rainwater from the municipal sewer system.",
        },
        keyFacts: [
          { de: "Bodenmechanische Berechnung der Versickerungsleistung", en: "Geotechnical soil percolation and capacity calculations" },
          { de: "Überfahrbare Rigolensysteme für PKW- & Lieferverkehr", en: "Heavy-duty load-bearing capacity for car and service transit" },
          { de: "Mehrstufiges Filtersystem mit Schlammfängen", en: "Multi-stage silt filtration preserving long-term percolation" },
          { de: "Integrale Hof- und Außenanlagenneugestaltung", en: "Holistic courtyard, paving, and landscape redesign" },
        ],
      },
      {
        id: "netto-supermarkt-muenster-hessen",
        title: {
          de: "Nahversorgungszentrum & 22 Wohneinheiten",
          en: "Mixed-Use Retail Center & 22 Residential Apartments",
        },
        category: {
          de: "Gewerbe- & Geschosswohnungsbau",
          en: "Commercial & Multi-Family Housing",
        },
        location: {
          de: "Rhein-Main / Einzugsgebiet Frankfurt",
          en: "Rhine-Main / Greater Frankfurt Catchment",
        },
        year: "2023",
        image: "/images/image-37e42d.jpg",
        imageAlt: {
          de: "Nahversorgungszentrum und 22 Wohnungen Rhein-Main",
          en: "Retail center and 22 residential units in Rhine-Main",
        },
        specs: [
          { label: { de: "Leistungsphase", en: "Scope" }, value: { de: "HOAI LPH 5 (Ausführungsplanung)", en: "HOAI Phase 5 (Working Drawings)" } },
          { label: { de: "Volumen", en: "Scale" }, value: { de: "Supermarkt + 22 Wohnungen", en: "Supermarket + 22 Apartments" } },
          { label: { de: "Infrastruktur", en: "Amenities" }, value: { de: "Tiefgarage & begrünter Innenhof", en: "Underground Parking & Green Courtyard" } },
          { label: { de: "Recht", en: "Legal Basis" }, value: { de: "HBO Baugenehmigung", en: "HBO Building Permit Compliance" } },
        ],
        overview: {
          de: "Komplexe integrale Ausführungsplanung eines gemischt genutzten Nahversorgungszentrums mit Gewerbeeinheit im Erdgeschoss, barrierefreien Wohnungen in den Obergeschossen und Tiefgaragenanlage.",
          en: "Complex working drawings for a mixed-use retail development combining a ground-floor supermarket, modern accessible apartments above, and underground parking.",
        },
        keyFacts: [
          { de: "Akkurate statische und akustische Schalldämmung", en: "Rigorous structural and acoustic decoupling between retail and living" },
          { de: "Integrale MEP- und Haustechnikkoordination", en: "Seamless MEP and building services integration" },
          { de: "Optimierte Kunden- und Lieferlogistik", en: "Optimized logistics for customer parking and goods deliveries" },
          { de: "Schlüsselfertige, termingerechte Fertigstellung", en: "Turnkey delivery on schedule and within budget" },
        ],
      },
    ],
    hoaiPhases: [
      {
        phase: "LPH 1–2",
        title: {
          de: "Grundlagenermittlung & Vorplanung",
          en: "Feasibility & Preliminary Design",
        },
        description: {
          de: "Standortanalyse, baurechtliche Ersteinschätzung in Frankfurt, Klärung des Raumprogramms und Erarbeitung erster Entwurfsskizzen.",
          en: "Site assessment, initial regulatory evaluation in Frankfurt, program definition, and preliminary conceptual sketches.",
        },
        deliverables: [
          { de: "Machbarkeitsanalyse", en: "Feasibility study" },
          { de: "Vorentwurfskonzept", en: "Preliminary design concept" },
          { de: "Kostenschätzung DIN 276", en: "Cost estimation under DIN 276" },
        ],
      },
      {
        phase: "LPH 3–4",
        title: {
          de: "Entwurfs- & Genehmigungsplanung",
          en: "Design Development & Building Permit",
        },
        description: {
          de: "Detaillierte Durcharbeitung des Entwurfs und Einreichung des rechtssicheren Bauantrags beim Bauaufsichtsamt Frankfurt nach HBO.",
          en: "Comprehensive scheme design and statutory building permit application to the Frankfurt Building Authority under HBO.",
        },
        deliverables: [
          { de: "Genehmigungspläne 1:100", en: "Permit drawings 1:100" },
          { de: "Bauantragsunterlagen", en: "Official application dossier" },
          { de: "Behördenabstimmung", en: "Authority and neighbor coordination" },
        ],
      },
      {
        phase: "LPH 5–7",
        title: {
          de: "Ausführungsplanung & Ausschreibung",
          en: "Working Drawings & Procurement",
        },
        description: {
          de: "Präzise Werk- und Detailpläne für alle Gewerke, Erstellung detaillierter Leistungsverzeichnisse und Preisspiegel zur Vergabe.",
          en: "Detailed working and construction drawings across all trades, bills of quantities, and competitive tender evaluation.",
        },
        deliverables: [
          { de: "Werkpläne 1:50 / Details 1:10", en: "Working plans 1:50 / Details 1:10" },
          { de: "Leistungsverzeichnisse (LV)", en: "Detailed bills of quantities (BoQ)" },
          { de: "Vergabeverhandlungen", en: "Tender negotiations & cost auditing" },
        ],
      },
      {
        phase: "LPH 8–9",
        title: {
          de: "Bauüberwachung & Dokumentation",
          en: "Site Supervision & Final Handover",
        },
        description: {
          de: "Präsenz auf der Baustelle, Qualitätsprüfung aller Handwerksleistungen, Termin- und Budgetkontrolle bis zur fehlerfreien Abnahme.",
          en: "Full on-site architectural clerk of works, quality assurance, scheduling, cost control, and seamless handover.",
        },
        deliverables: [
          { de: "Bauleitung vor Ort", en: "On-site quality supervision" },
          { de: "Mängelprotokolle & Abnahme", en: "Snagging lists & official sign-off" },
          { de: "Rechnungsprüfung", en: "Invoice certification & warranty logs" },
        ],
      },
    ],
    office: {
      name: {
        de: "Hauptsitz Frankfurt am Main",
        en: "Headquarters Frankfurt am Main",
      },
      street: "Carl-von-Noorden-Platz 5",
      city: {
        de: "60596 Frankfurt am Main",
        en: "60596 Frankfurt am Main, Germany",
      },
      phone: "069 74 223 777",
      phoneHref: "tel:+496974223777",
      mapEmbedUrl:
        "https://maps.google.com/maps?q=Carl-von-Noorden-Platz+5,+60596+Frankfurt+am+Main&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },
    localRegulations: [
      {
        title: {
          de: "Hessische Bauordnung (HBO)",
          en: "Hesse Building Code (HBO)",
        },
        description: {
          de: "Uneingeschränkte Bauvorlageberechtigung für Sonderbauten, Mehrfamilienhäuser und Nachverdichtungen im Stadtgebiet Frankfurt.",
          en: "Unrestricted filing authority for special structures, apartment buildings, and infill projects in Frankfurt.",
        },
      },
      {
        title: {
          de: "Bauaufsichtsamt Frankfurt",
          en: "Frankfurt Building Department",
        },
        description: {
          de: "Erprobte Kommunikationswege und präzise Abstimmung für zügige Genehmigungsverfahren ohne monatelange Verzögerungen.",
          en: "Established channels and responsive coordination for swift permit issuance without administrative stagnation.",
        },
      },
      {
        title: {
          de: "Erhaltungs- & Milieuschutz",
          en: "Conservation & Heritage Zones",
        },
        description: {
          de: "Fachkundige Navigation durch Denkmalschutz, Baumschutzsatzungen und Milieuschutzgebiete in Frankfurt.",
          en: "Expert navigation through heritage listings, tree protection bylaws, and urban social preservation zones.",
        },
      },
    ],
    districts: [
      {
        id: "sachsenhausen-lerchesberg",
        path: "/architektur-frankfurt-sachsenhausen",
        name: {
          de: "Sachsenhausen & Lerchesberg",
          en: "Sachsenhausen & Lerchesberg",
        },
        suburbs: {
          de: "Schweizer Platz, Brückenviertel, Lerchesberg, Deutschherrnviertel",
          en: "Schweizer Platz, Brückenviertel, Lerchesberg, Deutschherrnviertel",
        },
        badge: {
          de: "Erhaltungssatzung & Hangvillen",
          en: "Conservation Bylaws & Hillside Villas",
        },
        summary: {
          de: "Prägende Gründerzeitbebauung, anspruchsvolle Hangvillen am Lerchesberg und beliebte Mehrfamilienhäuser. Wir navigieren die kommunale Erhaltungssatzung der Stadt Frankfurt und realisieren behutsame Dachaufstockungen sowie exklusive Modernisierungen.",
          en: "Distinguished by Wilhelminian architecture, prestigious hillside villas at Lerchesberg, and prime residential assets. We navigate municipal preservation bylaws, sensitive attic additions, and luxury modernizations.",
        },
        focusAreas: [
          {
            de: "Dachgeschossausbauten & Gaubengenehmigungen im Erhaltungsgebiet",
            en: "Attic conversions & dormer approvals in preservation zones",
          },
          {
            de: "Energetische Kernsanierung historischer Villen & Wohngebäude",
            en: "Deep energy retrofits of historic villas & residential buildings",
          },
          {
            de: "Schallschutz- & Stellplatznachweise nach Frankfurter Satzung",
            en: "Acoustic protection & local Frankfurt parking requirement proofs",
          },
        ],
        zoningHighlights: [
          {
            de: "Erhaltungssatzung Sachsenhausen (§ 172 BauGB)",
            en: "Preservation statute Sachsenhausen (§ 172 BauGB)",
          },
          {
            de: "Abstandsflächenprüfung nach HBO für dichte Quartiere",
            en: "Hesse building setback evaluations for dense quarters",
          },
          {
            de: "Direkte Bauantragseinreichung bei der Bauaufsicht Frankfurt",
            en: "Direct building permit filing with Frankfurt Building Authority",
          },
        ],
      },
      {
        id: "westend-holzhausen",
        path: "/architektur-frankfurt-westend",
        name: {
          de: "Westend & Holzhausenviertel",
          en: "Westend & Holzhausenviertel",
        },
        suburbs: {
          de: "Westend-Süd, Westend-Nord, Holzhausenviertel, Grüneburgpark",
          en: "Westend-South, Westend-North, Holzhausenviertel, Grüneburgpark",
        },
        badge: {
          de: "Denkmalschutz & Luxusvillen",
          en: "Heritage Protection & Luxury Villas",
        },
        summary: {
          de: "Frankfurts prestigeträchtigste Wohnlage mit denkmalgeschützten Gründerzeit- und Klassizismus-Villen. Höchste Anforderungen des Denkmalamts Frankfurt an Materialität, Fassadendetails und denkmalgerechte Sanierungskonzepte.",
          en: "Frankfurt's most prestigious residential enclave with heritage-listed villas. Demands strict adherence to Frankfurt Heritage Office standards for materials, facade integrity, and historic retrofit concepts.",
        },
        focusAreas: [
          {
            de: "Denkmalrechtliche Genehmigungen & enge Abstimmung mit dem Denkmalamt",
            en: "Heritage permits & close alignment with the Historic Preservation Office",
          },
          {
            de: "Hochwertige Innenarchitektur & behutsame Grundrissneuordnung",
            en: "High-end interior architecture & sensitive floor plan reconfigurations",
          },
          {
            de: "Thermische Gebäudeoptimierung im Einklang mit GEG-Ausnahmetatbeständen",
            en: "Thermal envelope upgrades under Building Energy Act (GEG) exemptions",
          },
        ],
        zoningHighlights: [
          {
            de: "Hessisches Denkmalschutzgesetz (HDSchG)",
            en: "Hesse Heritage Protection Act (HDSchG)",
          },
          {
            de: "Einfügungsgebot § 34 BauGB (Gestaltung, First- & Traufhöhen)",
            en: "Contextual insertion § 34 BauGB (design, ridge & eave heights)",
          },
          {
            de: "Baumschutzsatzung der Stadt Frankfurt am Main",
            en: "Frankfurt Municipal Tree Preservation Ordinance",
          },
        ],
      },
      {
        id: "nordend-bornheim",
        path: "/architektur-frankfurt-nordend",
        name: {
          de: "Nordend & Bornheim",
          en: "Nordend & Bornheim",
        },
        suburbs: {
          de: "Berger Straße, Friedberger Platz, Glauburgviertel, Günthersburgpark",
          en: "Berger Straße, Friedberger Platz, Glauburgviertel, Günthersburgpark",
        },
        badge: {
          de: "Nachverdichtung & Baulücken",
          en: "Urban Infill & Gap Closures",
        },
        summary: {
          de: "Lebendige, dicht bebaute Stadtquartiere mit hohem Nachverdichtungspotenzial im Bestand. Spezialisiert auf Hofbebauungen, Brandschutzsanierungen in Mehrfamilienhäusern und großzügige Maisonette-Dachausbauten.",
          en: "Vibrant, high-density urban districts with substantial infill and conversion potential. Specialized in courtyard infill, multi-family fire safety upgrades, and expansive duplex attic conversions.",
        },
        focusAreas: [
          {
            de: "Brandschutzkonzepte für Treppenräume & 2. Rettungsweg nach HBO",
            en: "Fire safety concepts for stairwells & secondary escape routes per HBO",
          },
          {
            de: "Schließung von Baulücken und hofseitige Anbauten",
            en: "Closing urban gap sites and inner courtyard extensions",
          },
          {
            de: "Aufzugsanbauten an Bestandsfassaden & barrierefreie Erschließung",
            en: "Facade elevator additions & accessible barrier-free circulation",
          },
        ],
        zoningHighlights: [
          {
            de: "Milieuschutzsatzungen Nordend-Ost, Nordend-West & Bornheim",
            en: "Milieuschutz social preservation statutes in Nordend & Bornheim",
          },
          {
            de: "HBO Gebäudeklasse 4 & 5 Brandschutzanforderungen",
            en: "HBO Building Class 4 & 5 fire safety requirements",
          },
          {
            de: "Abstandsflächenübernahme im engen Blockrand",
            en: "Setback distance agreements in dense perimeter urban blocks",
          },
        ],
      },
      {
        id: "bockenheim-gallus-europa",
        path: "/architektur-frankfurt-bockenheim",
        name: {
          de: "Bockenheim, Gallus & Europaviertel",
          en: "Bockenheim, Gallus & Europaviertel",
        },
        suburbs: {
          de: "Kulturcampus, Leipziger Straße, Europagarten, Messeviertel",
          en: "Kulturcampus, Leipziger Straße, Europagarten, Trade Fair area",
        },
        badge: {
          de: "Umnutzung & Mischnutzung",
          en: "Repurposing & Mixed-Use",
        },
        summary: {
          de: "Dynamische Transformationsgebiete zwischen moderner Blockrandbebauung und urbaner Konversion. Wir planen Gewerbe-zu-Wohnen-Umnutzungen, moderne Bürostrukturen und urbane Geschosswohnungsbauten.",
          en: "Dynamic transformation zones bridging contemporary perimeter blocks and urban conversions. We design commercial-to-residential conversions, modern office setups, and multi-family residential assets.",
        },
        focusAreas: [
          {
            de: "Umnutzungsanträge von Gewerbe- & Büroflächen in Wohnraum",
            en: "Change-of-use applications converting office/retail into apartments",
          },
          {
            de: "Schallschutzgutachten & Lärmkontingentierung (Gewerbe & Verkehr)",
            en: "Acoustic surveys & noise quota planning (commercial & transit)",
          },
          {
            de: "Bebauungsplankonforme Neubauentwürfe & Tiefgaragenplanung",
            en: "Zoning-compliant new construction designs & underground parking layouts",
          },
        ],
        zoningHighlights: [
          {
            de: "Bebauungspläne Kulturcampus & Europaviertel (B-Plan 800 ff.)",
            en: "B-Plan master plans for Kulturcampus & Europaviertel",
          },
          {
            de: "Gewerbeimmissionsschutz & TA Lärm Konformität",
            en: "Commercial noise emission control & TA Lärm compliance",
          },
          {
            de: "Nachhaltiges Bauen nach DGNB- & KfW-40-Standards",
            en: "Sustainable architecture meeting DGNB & KfW 40 criteria",
          },
        ],
      },
      {
        id: "riedberg-kalbach",
        path: "/architektur-frankfurt-riedberg",
        name: {
          de: "Riedberg, Kalbach & Niederursel",
          en: "Riedberg, Kalbach & Niederursel",
        },
        suburbs: {
          de: "Campus Riedberg, Bonifatiusbrunnen, Mertonviertel, Kalbach",
          en: "Campus Riedberg, Bonifatiusbrunnen, Mertonviertel, Kalbach",
        },
        badge: {
          de: "Neubauvillen & Effizienzhäuser",
          en: "New-Build Villas & Efficiency Homes",
        },
        summary: {
          de: "Frankfurts modernster Stadtteil für anspruchsvolle Einfamilienhäuser, moderne Bauhaus-Villen und zukunftsweisende Mehrfamilienhäuser unter exakter Beachtung des Bebauungsplans Riedberg.",
          en: "Frankfurt's modern master-planned district for upscale single-family residences, contemporary Bauhaus villas, and forward-thinking multi-family buildings.",
        },
        focusAreas: [
          {
            de: "Architektenvillen in moderner Bauhaus-Architektur mit Flachdach",
            en: "Bespoke architect villas in modern Bauhaus architecture with flat roofs",
          },
          {
            de: "KfW-Effizienzhaus 40 NH mit QNG-Nachhaltigkeitszertifizierung",
            en: "KfW Efficiency House 40 NH with QNG sustainability certification",
          },
          {
            de: "Intelligentes Regenwassermanagement & Gründach-Kombinationen",
            en: "Smart rainwater management & integrated green roof systems",
          },
        ],
        zoningHighlights: [
          {
            de: "Gestaltungssatzung & B-Plan 830 Riedberg",
            en: "Design statute & B-Plan 830 Riedberg",
          },
          {
            de: "Strenge Vorgaben zu Gebäudehöhen, Baufenstern & Dachformen",
            en: "Strict criteria on building heights, plot boundaries & roof geometries",
          },
          {
            de: "Geotechnische Abstimmungen zur Baugrubensicherung",
            en: "Geotechnical coordination for excavation pit stabilization",
          },
        ],
      },
      {
        id: "niederrad-oberrad",
        path: "/architektur-frankfurt-niederrad",
        name: {
          de: "Niederrad & Oberrad",
          en: "Niederrad & Oberrad",
        },
        suburbs: {
          de: "Lyoner Quartier, Wohnstadt Niederrad, Mainufer Oberrad",
          en: "Lyoner Quartier, Wohnstadt Niederrad, Main Riverbanks Oberrad",
        },
        badge: {
          de: "Büro-Konversion & Mainlagen",
          en: "Office Conversion & Riverfront",
        },
        summary: {
          de: "Vorzeigestadtteil für Konversionen von Leerstandsbüros zu lebendigen Wohnquartieren sowie hochwertige Mainufer-Wohnbauten in Oberrad. Wir beraten Investoren und private Bauherren kompetent.",
          en: "Showcase district for converting vacant office towers into thriving residential quarters, alongside prime riverfront properties in Oberrad. We guide developers and private builders.",
        },
        focusAreas: [
          {
            de: "Revitalisierung & Entkernung gewerblicher Bausubstanz",
            en: "Revitalization & core modernization of commercial building stock",
          },
          {
            de: "Erschließungsplanung, Feuerwehrzufahrten & Freiflächengestaltung",
            en: "Site access, fire brigade routing & courtyard landscape planning",
          },
          {
            de: "Hochbauplanung für mehrgeschossige Wohnanlagen",
            en: "Architectural planning for multi-story residential developments",
          },
        ],
        zoningHighlights: [
          {
            de: "Konversionsleitfaden Lyoner Quartier (Stadt Frankfurt)",
            en: "Lyoner Quartier conversion guidelines (City of Frankfurt)",
          },
          {
            de: "Hochwasserschutz am Mainufer (HQ-100-Nachweise)",
            en: "River Main flood mitigation verifications (HQ 100)",
          },
          {
            de: "Abstandsflächennachlässe bei Konversionsprojekten",
            en: "Setback reductions for adaptive reuse conversion projects",
          },
        ],
      },
      {
        id: "offenbach-mainufer",
        path: "/architektur-offenbach",
        name: {
          de: "Offenbach am Main, Kaiserlei & Hafen",
          en: "Offenbach am Main, Kaiserlei & Harbor",
        },
        suburbs: {
          de: "Kaiserlei, Hafen Offenbach, Westend, Senefelderquartier",
          en: "Kaiserlei, Offenbach Harbor, Westend, Senefelder Quarter",
        },
        badge: {
          de: "Hafenviertel & Kaiserlei-Transformation",
          en: "Harbor Quarter & Kaiserlei Regeneration",
        },
        summary: {
          de: "Direkt gegenüber unserem Büro am Frankfurter Südufer: Dynamischer Wandel von Gewerbebrachen zu modernen Mainufer-Quartieren und Gründerzeitmodernisierungen im Westend.",
          en: "Directly opposite our studio at Frankfurt South: Dynamic transition of industrial sites into riverside quarters and Wilhelminian restorations in the Westend.",
        },
        focusAreas: [
          {
            de: "Moderne Mainufer-Wohnbauten und gewerbliche Konversionen",
            en: "Modern riverside apartments and commercial conversions",
          },
          {
            de: "Sanierung denkmalgeschützter Altbauten im Offenbacher Westend",
            en: "Restoration of listed buildings in Offenbach Westend",
          },
          {
            de: "Bauanträge und Brandschutzkonzepte nach HBO",
            en: "HBO building permits and fire safety concepts",
          },
        ],
        zoningHighlights: [
          {
            de: "Bauaufsichtsamt der Stadt Offenbach am Main",
            en: "City of Offenbach Building Authority",
          },
          {
            de: "Bebauungspläne Hafen Offenbach & Kaiserlei",
            en: "Offenbach Harbor & Kaiserlei zoning master plans",
          },
          {
            de: "Erhaltungssatzungen im Westend und Senefelderquartier",
            en: "Preservation bylaws in Westend and Senefelder quarters",
          },
        ],
      },
      {
        id: "speckguertel-taunus",
        path: "/architektur-bad-homburg",
        name: {
          de: "Frankfurter Umland & Vordertaunus",
          en: "Frankfurt Suburbs & Vordertaunus",
        },
        suburbs: {
          de: "Bad Homburg, Oberursel, Kronberg, Königstein, Eschborn, Neu-Isenburg",
          en: "Bad Homburg, Oberursel, Kronberg, Königstein, Eschborn, Neu-Isenburg",
        },
        badge: {
          de: "Villenanwesen & Firmensitze",
          en: "Villa Estates & Corporate Sites",
        },
        summary: {
          de: "Exklusives Wohnen und repräsentative Gewerbestandorte im direkten Vordertaunus und Frankfurter Speckgürtel. Wir steuern Bauvorhaben vor den Bauaufsichten des Hochtaunuskreises, Main-Taunus-Kreises und Kreises Offenbach.",
          en: "Exclusive residential living and corporate headquarters in the Vordertaunus and Frankfurt commuter belt. We direct approvals with Hochtaunuskreis, Main-Taunus, and Offenbach building authorities.",
        },
        focusAreas: [
          {
            de: "Repräsentative Einfamilienhäuser & parkähnliche Villenanwesen",
            en: "Prestigious private residences & sprawling parkside villa estates",
          },
          {
            de: "Bauvoranfragen zur rechtssicheren Klärung von Baurecht (§ 34 / § 35 BauGB)",
            en: "Preliminary zoning inquiries for binding planning certainty (§ 34 / § 35 BauGB)",
          },
          {
            de: "Vollumfängliche Bauüberwachung & VOB-Ausschreibung für private Bauherren",
            en: "Comprehensive construction supervision & VOB tendering for private clients",
          },
        ],
        zoningHighlights: [
          {
            de: "Bauaufsichten Hochtaunuskreis, Main-Taunus-Kreis & Kreis Offenbach",
            en: "Building authorities Hochtaunuskreis, Main-Taunus-Kreis & District of Offenbach",
          },
          {
            de: "Bauen im Außenbereich (§ 35 BauGB) & Waldabstandssatzungen",
            en: "Outer-zone construction (§ 35 BauGB) & woodland buffer regulations",
          },
          {
            de: "Lokale kommunale Gestaltungssatzungen & Dachneigungsvorgaben",
            en: "Municipal design bylaws and strict roof pitch requirements",
          },
        ],
      },
    ],
    faqs: [
      {
        question: {
          de: "Was kostet ein Architekt in Frankfurt am Main nach der HOAI?",
          en: "What does an architect cost in Frankfurt am Main under HOAI?",
        },
        answer: {
          de: "Die Honorare für Architektenleistungen richten sich nach der Honorarordnung für Architekten und Ingenieure (HOAI). Die exakten Kosten hängen von den anrechenbaren Baukosten, der Honorarzone (Schwierigkeitsgrad des Bauwerks) und den beauftragten Leistungsphasen (1 bis 9) ab. Shams Consult bietet volle Kostentransparenz und schlüsselt vor Projektbeginn alle Leistungsphasen detailliert auf, sodass Sie verlässliche Budgetsicherheit haben.",
          en: "Architectural fees in Germany are calculated according to the Official Fee Structure for Architects and Engineers (HOAI). Exact costs depend on chargeable construction volume, fee zones, and the commissioned work phases (1 to 9). Shams Consult provides complete cost transparency with itemized phase pricing prior to contract signing.",
        },
      },
      {
        question: {
          de: "Wie lange dauert ein Bauantrag bei der Bauaufsicht Frankfurt am Main?",
          en: "How long does a building permit take at Bauaufsicht Frankfurt am Main?",
        },
        answer: {
          de: "Die reguläre Bearbeitungsdauer eines Bauantrags im vereinfachten oder regulären Baugenehmigungsverfahren bei der Bauaufsicht Frankfurt liegt erfahrungsgemäß zwischen 3 und 6 Monaten. Durch unsere langjährige Behördenpraxis und vollständige, prüffähige Bauvorlagen nach Hessischer Bauordnung (HBO) vermeiden wir zeitraubende Nachforderungen der Ämter.",
          en: "A building permit application processed by the Frankfurt Municipal Building Authority typically takes between 3 to 6 months. With our established municipal experience and verified, error-free application files per the Hesse Building Code (HBO), we eliminate unnecessary administrative delays.",
        },
      },
      {
        question: {
          de: "Wann greift in Frankfurt eine Erhaltungssatzung oder Milieuschutz?",
          en: "When do historic preservation or social protection bylaws apply in Frankfurt?",
        },
        answer: {
          de: "In beliebten Frankfurter Stadtteilen wie Sachsenhausen, Nordend, Bornheim oder Bockenheim existieren städtebauliche Erhaltungssatzungen (§ 172 BauGB) sowie Milieuschutzgebiete. Hier sind selbst sonst verfahrensfreie Vorhaben — wie z.B. Fassadenänderungen, Balkonanbauten, Dachgauben oder die Aufteilung von Wohnungen — genehmigungspflichtig. Shams Consult stimmt diese Vorhaben direkt mit dem Stadtplanungsamt und der Bauaufsicht ab.",
          en: "In prominent Frankfurt districts like Sachsenhausen, Nordend, Bornheim, and Bockenheim, urban preservation bylaws (§ 172 BauGB) and social protection ordinances apply. Even standard modifications—such as balcony additions, window reconfigurations, dormers, or residential subdivisions—require municipal consent. We coordinate directly with Frankfurt's municipal planning departments.",
        },
      },
      {
        question: {
          de: "Was ist der Unterschied zwischen Bauen nach § 34 BauGB und einem Bebauungsplan?",
          en: "What is the difference between building under Section 34 BauGB and a master plan?",
        },
        answer: {
          de: "Gibt es für ein Grundstück keinen Bebauungsplan (B-Plan), richtet sich die Zulässigkeit nach § 34 BauGB (unbeplanter Innenbereich). Ein Vorhaben ist zulässig, wenn es sich nach Art und Maß der baulichen Nutzung, Bauweise und Grundstücksüberbauung harmonisch in die Eigenart der näheren Umgebung einfügt. Wir sichern die maximale bauliche Ausnutzung durch fundierte Bauvoranfragen vorab rechtlich ab.",
          en: "When no qualified local master plan (Bebauungsplan) exists, development rights are governed by § 34 of the German Federal Building Code (BauGB). A project is permitted if it matches the contextual density, roof geometry, and character of the immediate neighborhood. We secure optimal plot utilization through binding preliminary zoning inquiries.",
        },
      },
      {
        question: {
          de: "Begleitet Shams Consult auch KfW-Effizienzhäuser und QNG-Nachhaltigkeitszertifizierungen?",
          en: "Does Shams Consult support KfW Efficiency Houses and QNG sustainability certifications?",
        },
        answer: {
          de: "Ja. Wir planen energieeffiziente Neubauten und Sanierungen nach den Standards KfW-Effizienzhaus 40 und 40 NH. In Kooperation mit zertifizierten Energieberatern und Auditoren führen wir die Nachweise für das Qualitätssiegel Nachhaltiges Gebäude (QNG) durch, wodurch Sie von maximalen staatlichen Förderkrediten und Tilgungszuschüssen profitieren.",
          en: "Yes. We design and coordinate low-energy new constructions and deep retrofits meeting KfW 40 and KfW 40 NH standards. In close collaboration with certified energy consultants, we guide your project to full QNG federal subsidies and low-interest financing.",
        },
      },
    ],
  },

  "architektur-roedermark": {
    slug: "architektur-roedermark",
    path: "/architektur-roedermark",
    h1: {
      de: "Architekt Rödermark — Planungsbüro Kreis Offenbach",
      en: "Architect Rödermark — Planning Studio District of Offenbach",
    },
    eyebrow: {
      de: "Planungs- & Architekturbüro Rödermark",
      en: "Architecture & Planning Studio Rödermark",
    },
    subtitle: {
      de: "Ihr lokaler Partner für anspruchsvolle Stadtvillen, Mehrfamilienhäuser, Sanierungen und Gewerbebauten in Rödermark, Ober-Roden, Urberach und im gesamten Kreis Offenbach.",
      en: "Your local architectural partner for prestigious villas, apartment buildings, refurbishments, and commercial properties in Rödermark, Ober-Roden, Urberach, and the Offenbach district.",
    },
    targetKeywords: [
      "Architekt Rödermark",
      "Planungsbüro Kreis Offenbach",
      "Architekturbüro Rödermark",
      "Baugenehmigung Kreis Offenbach",
      "Hausbau Rödermark Ober-Roden",
    ],
    metaTitle: {
      de: "Architekt Rödermark — Bauantrag & Bauamt Kreis Offenbach | Shams Consult",
      en: "Architect Rödermark — Planning Practice District of Offenbach | Shams Consult",
    },
    metaDescription: {
      de: "Architekturbüro vor Ort in Rödermark (Carl-Zeiss-Str. 43): Schnelle Bauanträge beim Bauamt Kreis Offenbach, Neubau & HOAI 1–9. AKH Hessen. Erstgespräch sichern!",
      en: "Architect in Rödermark (Carl-Zeiss-Str. 43) for new developments, residential buildings & commercial property. AKH Hesse member. Inquire today.",
    },
    heroHighlights: [
      {
        de: "Standort: Carl-Zeiss-Str. 43, 63322 Rödermark",
        en: "Studio: Carl-Zeiss-Str. 43, 63322 Rödermark",
      },
      {
        de: "Direkte Nähe zum Bauamt Kreis Offenbach in Dietzenbach",
        en: "Close proximity to the Offenbach District Building Authority in Dietzenbach",
      },
      {
        de: "Spezialisiert auf hochwertige Stadtvillen & Mehrfamilienhäuser",
        en: "Specialized in luxury villas and multi-family residential complexes",
      },
      {
        de: "Ganzheitliche Begleitung von Phase 1 bis Phase 9 (HOAI)",
        en: "Complete delivery across all 9 HOAI stages from concept to handover",
      },
    ],
    localFocusTitle: {
      de: "Ihr lokaler Planungspartner im Kreis Offenbach",
      en: "Your Local Architectural Partner in the Offenbach District",
    },
    localFocusDescription: {
      de: "Als etabliertes Planungsbüro mit eigenem Standort in der Carl-Zeiss-Straße 43 in Rödermark kennen wir die örtlichen Gegebenheiten im Kreis Offenbach im Detail. Ob Bebauungspläne in Ober-Roden, Bestandsumnutzungen in Urberach oder Projekte in Dietzenbach und Seligenstadt: Wir sichern Ihnen kurze Wege zum Bauamt und eine wirtschaftliche Planung.",
      en: "With our own design office at Carl-Zeiss-Str. 43 in Rödermark, we know the Offenbach district inside out. Whether municipal zoning in Ober-Roden, conversions in Urberach, or new schemes in Dietzenbach and Seligenstadt: we guarantee short approval times and cost efficiency.",
    },
    localProjects: [
      {
        id: "stadtvilla-mfa-roedermark",
        title: {
          de: "Exklusive Stadtvilla & Mehrfamilienhaus",
          en: "Exclusive City Villa & Residential Complex",
        },
        category: {
          de: "Individueller Wohnungsbau",
          en: "Bespoke Residential Architecture",
        },
        location: {
          de: "Rödermark / Kreis Offenbach",
          en: "Rödermark / Offenbach District",
        },
        year: "2022–2023",
        image: "/images/stadtvilla_mfa_roedermark.jpg",
        imageAlt: {
          de: "Exklusive Stadtvilla und Mehrfamilienhaus Rödermark",
          en: "Exclusive city villa and residential complex in Rödermark",
        },
        specs: [
          { label: { de: "Gebäudetyp", en: "Building Type" }, value: { de: "Moderne Stadtvilla / MFA", en: "Modern Villa / Multi-Family" } },
          { label: { de: "Leistungsphasen", en: "Phases" }, value: { de: "HOAI LPH 1–8", en: "HOAI Phases 1–8" } },
          { label: { de: "Energiestandard", en: "Energy Rating" }, value: { de: "KfW-Effizienzhaus", en: "KfW Efficiency House" } },
          { label: { de: "Bauweise", en: "Structure" }, value: { de: "Massivbau mit Staffelgeschoss", en: "Solid masonry with penthouse level" } },
        ],
        overview: {
          de: "Neubau einer repräsentativen Stadtvilla mit elegantem Staffelgeschoss, offenen Grundrissen, großzügigen Terrassen und integriertem Wärmepumpenkonzept in Rödermark.",
          en: "New construction of a prestigious urban villa featuring a set-back penthouse story, open-concept floor plans, expansive sun terraces, and heat-pump climate systems.",
        },
        keyFacts: [
          { de: "Optimale Ausnutzung von GRZ und GFZ", en: "Maximized site coverage and floor space index" },
          { de: "Helle, bodentiefe Fensterfronten mit Dreifachverglasung", en: "Triple-glazed floor-to-ceiling windows for natural daylight" },
          { de: "Barrierearme Grundrissgestaltung", en: "Accessible layout design with flexible room partitions" },
          { de: "Begleitung aller Abnahmen bis zum Einzug", en: "Full supervision through final inspection and occupancy" },
        ],
      },
      {
        id: "netto-supermarkt-muenster-hessen",
        title: {
          de: "Nahversorgungszentrum & 22 Wohnungen",
          en: "Retail Hub & 22 Apartments",
        },
        category: {
          de: "Gewerbe- & Geschosswohnungsbau",
          en: "Commercial & Residential Hub",
        },
        location: {
          de: "Münster (Hessen) / Kreis Offenbach Nachbarschaft",
          en: "Muenster (Hesse) / Offenbach District Neighborhood",
        },
        year: "2023",
        image: "/images/image-37e42d.jpg",
        imageAlt: {
          de: "Ausführungsplanung Nahversorgungszentrum Münster Hessen",
          en: "Detailed design retail center Muenster Hesse",
        },
        specs: [
          { label: { de: "Leistung", en: "Service" }, value: { de: "LPH 5 HOAI Ausführungsplanung", en: "HOAI Phase 5 Working Drawings" } },
          { label: { de: "Umfang", en: "Volume" }, value: { de: "Supermarkt + 22 Einheiten + TG", en: "Supermarket + 22 Units + Parking" } },
          { label: { de: "Bauordnung", en: "Building Code" }, value: { de: "HBO konform", en: "HBO Compliant" } },
          { label: { de: "Status", en: "Status" }, value: { de: "Erfolgreich realisiert", en: "Fully completed" } },
        ],
        overview: {
          de: "Vollständige Werk- und Detailplanung für ein Nahversorgungszentrum mit 22 Wohneinheiten und Tiefgarage im südhessischen Wirtschaftsraum.",
          en: "Comprehensive working drawings for a commercial grocery hub coupled with 22 residential units and subterranean parking in South Hesse.",
        },
        keyFacts: [
          { de: "Effiziente Tragwerks- und Brandschutzentkopplung", en: "Efficient acoustic and fire safety separation" },
          { de: "Integrale Werkplanung aller Schnittstellen", en: "Comprehensive technical interface coordination" },
          { de: "Wirtschaftliche Baukonstruktion", en: "Value-engineered structural construction" },
          { de: "Reibungslose Behördenfreigaben", en: "Seamless building inspector approvals" },
        ],
      },
    ],
    hoaiPhases: [
      {
        phase: "LPH 1–2",
        title: {
          de: "Grundlagen & Vorplanung Rödermark",
          en: "Inception & Preliminary Design",
        },
        description: {
          de: "Bebauungsplanprüfung (B-Plan) und Klärung von Baulasten im Kreis Offenbach. Erste Konzeptentwürfe und Kostenschätzung.",
          en: "Zoning review (B-Plan) and land charge checks in the Offenbach district. Early concept massing and cost calculations.",
        },
        deliverables: [
          { de: "B-Plan-Konformitätsprüfung", en: "Zoning compliance verification" },
          { de: "Vorentwurfsskizzen", en: "Schematic design drawings" },
          { de: "Kostenrahmen DIN 276", en: "Cost baseline DIN 276" },
        ],
      },
      {
        phase: "LPH 3–4",
        title: {
          de: "Entwurf & Bauantrag Kreis Offenbach",
          en: "Scheme Design & Planning Permission",
        },
        description: {
          de: "Erstellung der vollständigen Genehmigungsplanung nach HBO und direkte Einreichung beim Bauamt Kreis Offenbach in Dietzenbach.",
          en: "Compilation of official permit documentation under HBO and direct submission to the Offenbach District Authority in Dietzenbach.",
        },
        deliverables: [
          { de: "Bauantragsunterlagen", en: "Statutory permit submission" },
          { de: "Entwässerungsgesuch", en: "Drainage and civil engineering filings" },
          { de: "Brandschutznachweis", en: "Fire protection concept documentation" },
        ],
      },
      {
        phase: "LPH 5–7",
        title: {
          de: "Ausführungsplanung & Handwerkervergabe",
          en: "Detailed Design & Contractor Tendering",
        },
        description: {
          de: "Detaillierte Werkpläne und Leistungsverzeichnisse für regionale Handwerksbetriebe im Rhein-Main- und Offenbacher Raum.",
          en: "Working drawings and tender packages dispatched to verified regional contractors across the Rhine-Main and Offenbach region.",
        },
        deliverables: [
          { de: "Ausführungspläne 1:50", en: "Construction drawings 1:50" },
          { de: "Handwerker-Ausschreibungen", en: "Trade-by-trade tender packages" },
          { de: "Preisvergleich & Budgetprüfung", en: "Tender bid review & budget capping" },
        ],
      },
      {
        phase: "LPH 8–9",
        title: {
          de: "Örtliche Bauleitung & Endabnahme",
          en: "Construction Supervision & Handover",
        },
        description: {
          de: "Persönliche Bauleitung vor Ort in Rödermark und Umgebung. Qualitätssicherung, Rechnungsprüfung und finale Bauabnahme.",
          en: "Hands-on site supervision locally in Rödermark and surroundings. Quality control, contractor invoice audits, and final certification.",
        },
        deliverables: [
          { de: "Regelmäßige Baukontrollen", en: "Frequent on-site inspections" },
          { de: "Bautagebuch & Mängelmanagement", en: "Daily site logs & defect management" },
          { de: "Schlüsselfertige Übergabe", en: "Turnkey handover" },
        ],
      },
    ],
    office: {
      name: {
        de: "Planungsbüro Rödermark",
        en: "Planning Studio Rödermark",
      },
      street: "Carl-Zeiss-Str. 43",
      city: {
        de: "63322 Rödermark",
        en: "63322 Rödermark, Germany",
      },
      phone: "060 74 239 87 82",
      phoneHref: "tel:+4960742398782",
      mapEmbedUrl:
        "https://maps.google.com/maps?q=Carl-Zeiss-Str.+43,+63322+R%C3%B6dermark&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },
    localRegulations: [
      {
        title: {
          de: "Bauaufsicht Kreis Offenbach",
          en: "Offenbach District Building Department",
        },
        description: {
          de: "Zentrale Zuständigkeit in Dietzenbach. Wir kennen die behördlichen Anforderungen und stellen lückenlose Anträge.",
          en: "Central jurisdiction based in Dietzenbach. We know specific local requirements to ensure seamless approval workflows.",
        },
      },
      {
        title: {
          de: "Bebauungspläne in Rödermark",
          en: "Local Zoning Bylaws in Rödermark",
        },
        description: {
          de: "Rechtssichere Anwendung der Festsetzungen für Dachformen, Abstandsflächen und Nachverdichtung nach § 34 BauGB.",
          en: "Precise application of roof geometry statutes, setback distances, and Section 34 BauGB infill criteria.",
        },
      },
      {
        title: {
          de: "Kanal- & Entwässerungssatzungen",
          en: "Municipal Drainage By-laws",
        },
        description: {
          de: "Fachgerechte Dimensionierung von Retentions- und Zisternensystemen gem. kommunaler Vorgaben in Rödermark.",
          en: "Certified hydraulic sizing of rainwater cisterns and retention systems according to Rödermark standards.",
        },
      },
    ],
    districts: [
      {
        id: "roedermark-ober-roden",
        path: "/architektur-roedermark-ober-roden",
        name: {
          de: "Ober-Roden & Waldacker",
          en: "Ober-Roden & Waldacker",
        },
        suburbs: {
          de: "Ober-Roden Ortskern, Breidert, Waldacker, Messenhausen",
          en: "Ober-Roden Old Town, Breidert, Waldacker, Messenhausen",
        },
        badge: {
          de: "Stadtvillen & Nachverdichtung",
          en: "Urban Villas & Infill",
        },
        summary: {
          de: "Beliebte Wohnlagen in Rödermark mit bester Anbindung nach Frankfurt und Darmstadt. Wir planen hochwertige Stadtvillen, Doppelhäuser und energieeffiziente Nachverdichtungen.",
          en: "Sought-after residential enclaves in Rödermark with fast links to Frankfurt and Darmstadt. We design bespoke villas, duplexes, and sustainable infill.",
        },
        focusAreas: [
          {
            de: "Moderne Architektenvillen und energieeffiziente KfW-40-Häuser",
            en: "Modern bespoke architect villas and KfW 40 low-energy homes",
          },
          {
            de: "Wohnraumerweiterungen, Aufstockungen & barrierefreie Umbauten",
            en: "Storey extensions, vertical additions & accessible barrier-free redesigns",
          },
          {
            de: "Bebauungspläne Rödermark und Nachverdichtung nach § 34 BauGB",
            en: "Municipal master plans and residential infill under Section 34 BauGB",
          },
        ],
        zoningHighlights: [
          {
            de: "Bauaufsicht Kreis Offenbach (Kreishaus Dietzenbach)",
            en: "Offenbach District Building Authority in Dietzenbach",
          },
          {
            de: "Bebauungspläne Breidert & Ober-Roden West",
            en: "Breidert & Ober-Roden West statutory zoning bylaws",
          },
          {
            de: "Abstandsflächenberechnung nach HBO",
            en: "Hesse building code setback evaluations",
          },
        ],
      },
      {
        id: "roedermark-urberach",
        path: "/architektur-roedermark-urberach",
        name: {
          de: "Urberach & Messenhausen",
          en: "Urberach & Messenhausen",
        },
        suburbs: {
          de: "Urberach Ortskern, Traminerweg, Bienengarten, Messenhausen",
          en: "Urberach center, Traminerweg, Bienengarten, Messenhausen",
        },
        badge: {
          de: "Historischer Ortskern & Villenlagen",
          en: "Historic Center & Villa Enclaves",
        },
        summary: {
          de: "Reizvolle Kombination aus historischem Ortskern und ruhigen Wohngebieten im Grünen. Wir begleiten sensible Sanierungen, Neubauten und Baugenehmigungen.",
          en: "Charming blend of historic village core and tranquil green residential neighborhoods. We steer sensitive restorations, new builds, and permits.",
        },
        focusAreas: [
          {
            de: "Behutsame Kernsanierung & Denkmalschutz im Ortskern",
            en: "Sensitive restorations & heritage conservation in the town center",
          },
          {
            de: "Neubau von Mehrfamilienhäusern mit Tiefgaragen",
            en: "New multi-family residential complexes with underground parking",
          },
          {
            de: "Retentions- und Regenwassermanagement nach kommunalen Satzungen",
            en: "Rainwater retention engineering per municipal drainage statutes",
          },
        ],
        zoningHighlights: [
          {
            de: "Einfügungsgebot § 34 BauGB im gewachsenen Ortskern",
            en: "Contextual insertion requirement (§ 34 BauGB) in historical quarters",
          },
          {
            de: "HBO-konforme Brandschutz- & Stellplatznachweise",
            en: "HBO compliant fire protection & municipal parking verifications",
          },
          {
            de: "Kurze Wege zur Unteren Bauaufsichtsbehörde",
            en: "Direct access to the Lower Building Authority Dietzenbach",
          },
        ],
      },
      {
        id: "rodgau",
        path: "/architektur-rodgau",
        name: {
          de: "Rodgau (Jügesheim, Dudenhofen, Nieder-Roden)",
          en: "Rodgau (Jügesheim, Dudenhofen, Nieder-Roden)",
        },
        suburbs: {
          de: "Jügesheim, Dudenhofen, Nieder-Roden, Weiskirchen, Hainhausen",
          en: "Jügesheim, Dudenhofen, Nieder-Roden, Weiskirchen, Hainhausen",
        },
        badge: {
          de: "Wachstumsachse & Familienwohnen",
          en: "Growth Corridor & Family Living",
        },
        summary: {
          de: "Größte Stadt im Kreis Offenbach mit hoher Nachfrage nach Familienwohnraum und Gewerbeflächen. Wir planen moderne Wohnanlagen, Reihenhäuser und Gewerbebauten.",
          en: "Largest municipality in Offenbach district with strong demand for family housing and commercial space. We design modern apartments, townhouses, and corporate halls.",
        },
        focusAreas: [
          {
            de: "Geschosswohnungsbau und KfW-40-Wohnquartiere",
            en: "Multi-story apartment buildings and KfW 40 residential quarters",
          },
          {
            de: "Gewerbliche Hallen und Bürogebäude im Gewerbegebiet Rodgau",
            en: "Commercial warehouses and corporate offices in Rodgau business park",
          },
          {
            de: "Grundstücksteilungen und Baurechtsschaffung nach § 34 BauGB",
            en: "Parcel subdivision and formal building rights creation under § 34 BauGB",
          },
        ],
        zoningHighlights: [
          {
            de: "Bebauungspläne Stadt Rodgau & Kreis Offenbach",
            en: "City of Rodgau master plans & Offenbach district regulations",
          },
          {
            de: "Kanal- und Entwässerungssatzungen Rodgau",
            en: "Rodgau municipal drainage and stormwater bylaws",
          },
          {
            de: "Stellplatzsatzung der Stadt Rodgau",
            en: "Municipal parking requirement ordinance",
          },
        ],
      },
      {
        id: "dietzenbach",
        path: "/architektur-dietzenbach",
        name: {
          de: "Dietzenbach & Steinberg",
          en: "Dietzenbach & Steinberg",
        },
        suburbs: {
          de: "Steinberg, Hexenberg, Alt-Dietzenbach, Gewerbegebiet Nord",
          en: "Steinberg, Hexenberg, Old Town Dietzenbach, Commercial North",
        },
        badge: {
          de: "Kreisstadt & Behördennähe",
          en: "District Seat & Authority Proximity",
        },
        summary: {
          de: "Kreisstadt des Landkreises Offenbach. Kurze Wege zur Bauaufsicht im Kreishaus Dietzenbach für beschleunigte Baugenehmigungen von Wohn- und Gewerbeprojekten.",
          en: "Administrative capital of Offenbach district. Immediate proximity to the building department in the district hall for fast-track permit approvals.",
        },
        focusAreas: [
          {
            de: "Gewerbebauten, Logistikhallen und Handwerksbetriebe",
            en: "Commercial halls, logistics facilities, and trade company premises",
          },
          {
            de: "Neubau von Stadtvillen und Mehrfamilienhäusern am Steinberg",
            en: "New urban villas and multi-family residences at Steinberg",
          },
          {
            de: "Bauvoranfragen und rechtssichere Klärung von Baurecht",
            en: "Preliminary zoning inquiries and binding legal clarification",
          },
        ],
        zoningHighlights: [
          {
            de: "Untere Bauaufsichtsbehörde Kreis Offenbach im Kreishaus",
            en: "Offenbach District Lower Building Authority in Dietzenbach",
          },
          {
            de: "Gewerbegebietsfestsetzungen nach BauNVO",
            en: "Commercial zoning parameters per federal building ordinance",
          },
          {
            de: "Hessische Bauordnung (HBO) & Stellplatzsatzung",
            en: "Hesse building code (HBO) & municipal parking ordinance",
          },
        ],
      },
    ],
    faqs: [
      {
        question: {
          de: "Wer ist für Baugenehmigungen in Rödermark zuständig?",
          en: "Who is responsible for building permits in Rödermark?",
        },
        answer: {
          de: "Zuständige Genehmigungsbehörde für Rödermark (Ober-Roden und Urberach) ist die Untere Bauaufsichtsbehörde des Kreises Offenbach im Kreishaus Dietzenbach. Als lokal ansässiges Büro in der Carl-Zeiss-Straße 43 pflegen wir kurze Wege zu den zuständigen Prüfingenieuren und Ämtern.",
          en: "The responsible building permit authority for Rödermark is the Lower Building Authority of the District of Offenbach in Dietzenbach. As a local firm at Carl-Zeiss-Straße 43, we maintain direct communication with district planning officials.",
        },
      },
      {
        question: {
          de: "Welche Bauprojekte betreut Shams Consult im Kreis Offenbach?",
          en: "Which construction projects does Shams Consult handle in the Offenbach district?",
        },
        answer: {
          de: "Wir planen und realisieren Neubauten von modernen Stadtvillen, Ein- und Mehrfamilienhäusern, gewerblichen Betriebsstätten sowie energetische Kernsanierungen in Rödermark, Dietzenbach, Dreieich, Neu-Isenburg, Rodgau und Seligenstadt.",
          en: "We design and realize new contemporary urban villas, residential developments, commercial premises, and energy-efficient retrofits across Rödermark, Dietzenbach, Dreieich, Neu-Isenburg, Rodgau, and Seligenstadt.",
        },
      },
      {
        question: {
          de: "Übernimmt Shams Consult auch die Bauleitung (LPH 8) vor Ort?",
          en: "Does Shams Consult also oversee on-site construction management (Phase 8)?",
        },
        answer: {
          de: "Ja. Im Rahmen der HOAI-Leistungsphase 8 übernehmen wir die vollständige Objektüberwachung auf der Baustelle. Wir kontrollieren die handwerkliche Ausführung nach VOB und anerkannten Regeln der Technik, prüfen Abrechnungen und sichern Termine und Baukosten ab.",
          en: "Yes. Under HOAI Work Phase 8, we direct comprehensive on-site supervision. We inspect contractor craftsmanship per VOB standards, verify invoices, and safeguard delivery milestones and construction budgets.",
        },
      },
      {
        question: {
          de: "Was ist beim Bauamt Rödermark und den lokalen Bebauungsplänen zu beachten?",
          en: "What should be considered regarding the Rödermark Building Department and local zoning plans?",
        },
        answer: {
          de: "In Rödermark (Ober-Roden und Urberach) existieren teils detaillierte Bebauungspläne mit Festsetzungen zu Geschossflächenzahl (GFZ), Grundflächenzahl (GRZ), Dachneigung und Firsthöhen. Im historischen Ortskern greift oft das Einfügungsgebot (§ 34 BauGB). Wir prüfen vorab die Machbarkeit, klären Entwässerungs- und Retentionsnachweise und führen Bauanträge zügig durch die Untere Bauaufsichtsbehörde des Kreises Offenbach im Kreishaus Dietzenbach.",
          en: "In Rödermark (Ober-Roden and Urberach), specific master plans regulate floor-area ratios, site coverage, roof pitch, and ridge heights, while historical centers are governed by context insertion (§ 34 BauGB). We verify site feasibility in advance, calculate stormwater retention proofs, and submit streamlined building applications to the Offenbach District Building Authority in Dietzenbach.",
        },
      },
    ],
  },

  "architektur-dreieich": {
    slug: "architektur-dreieich",
    path: "/architektur-dreieich",
    h1: {
      de: "Architekt Dreieich — Baugenehmigungen & Mehrfamilienhäuser",
      en: "Architect Dreieich — Building Permits & Residential Complexes",
    },
    eyebrow: {
      de: "Architektur & Baurecht Dreieich",
      en: "Architecture & Building Regulations Dreieich",
    },
    subtitle: {
      de: "Realisierte Referenzen vor Ort: Neubau von Mehrfamilienhäusern, QNG-Zertifizierungen und anspruchsvolle Wohnbauarchitektur in Dreieich-Götzenhain, Sprendlingen und Dreieichenhain.",
      en: "Proven local references: multi-family residential developments, official QNG sustainability certification, and modern housing in Dreieich-Götzenhain, Sprendlingen, and Dreieichenhain.",
    },
    targetKeywords: [
      "Architekt Dreieich",
      "Baugenehmigung Dreieich",
      "Architekturbüro Dreieich Götzenhain",
      "Mehrfamilienhaus Neubau Dreieich",
      "Bauantrag Dreieich",
    ],
    metaTitle: {
      de: "Architekt Dreieich — Baugenehmigung & Mehrfamilienhaus | Shams Consult",
      en: "Architect Dreieich — Permits & Residential Projects | Shams Consult",
    },
    metaDescription: {
      de: "Architekt für Dreieich (Götzenhain, Sprendlingen). Reale Referenzen: Mehrfamilienhaus Neubau & QNG-Zertifizierung. HOAI 1–9. Jetzt Erstgespräch vereinbaren.",
      en: "Architect for Dreieich (Götzenhain, Sprendlingen). Real references: multi-family new build & QNG sustainability certification. Full HOAI 1–9. Inquire now.",
    },
    heroHighlights: [
      {
        de: "Reale Baureferenz: Dreistöckiges Mehrfamilienhaus in Dreieich-Götzenhain",
        en: "Built reference: Three-story multi-family residential building in Dreieich-Götzenhain",
      },
      {
        de: "Erfolgreiche QNG-Zertifizierung (Qualitätssiegel Nachhaltiges Gebäude)",
        en: "Verified federal QNG certification (Quality Seal for Sustainable Buildings)",
      },
      {
        de: "Rechtssichere Baugenehmigungen nach § 34 BauGB & HBO",
        en: "Legally compliant building permits under Section 34 BauGB & HBO",
      },
      {
        de: "Lokale Betreuung durch unser nahegelegenes Planungsbüro Rödermark",
        en: "Fast local assistance handled by our nearby studio in Rödermark",
      },
    ],
    localFocusTitle: {
      de: "Reale Bauerfahrung in Dreieich-Götzenhain",
      en: "Demonstrated Building Experience in Dreieich-Götzenhain",
    },
    localFocusDescription: {
      de: "Dreieich zeichnet sich durch begehrte Wohnlagen mit teils strengen Baumbestands- und Gestaltungsvorgaben aus. Mit unserem erfolgreich realisierten Mehrfamilienhaus in Dreieich-Götzenhain haben wir bewiesen, wie moderne Architektur, maximale Wohnflächenausnutzung und der Schutz von Altbaumbeständen perfekt harmonieren.",
      en: "Dreieich features sought-after residential neighborhoods with stringent tree preservation rules and architectural guidelines. With our completed multi-family development in Dreieich-Götzenhain, we demonstrated how contemporary design, maximized floor space, and environmental sensitivity unite.",
    },
    localProjects: [
      {
        id: "mehrfamilienhaus-dreieich-goetzenhain",
        title: {
          de: "Mehrfamilienhaus Dreieich-Götzenhain",
          en: "Multi-Family Residence Dreieich-Götzenhain",
        },
        category: {
          de: "Geschosswohnungsbau",
          en: "Multi-Family Residential",
        },
        location: {
          de: "Dreieich-Götzenhain, Hessen",
          en: "Dreieich-Goetzenhain, Hesse",
        },
        year: "2021",
        image: "/images/image-3a7a9c.jpg",
        imageAlt: {
          de: "Neubau Mehrfamilienhaus Dreieich Götzenhain",
          en: "Completed residential multi-family building in Dreieich",
        },
        specs: [
          { label: { de: "Gebäudetyp", en: "Building Type" }, value: { de: "Dreistöckiges Wohngebäude", en: "Three-story residential building" } },
          { label: { de: "Besonderheit", en: "Special Feature" }, value: { de: "Harmonische Baumbestand-Integration", en: "Sensitive mature tree integration" } },
          { label: { de: "Baurecht", en: "Permit Basis" }, value: { de: "§ 34 BauGB / HBO Baugenehmigung", en: "Section 34 BauGB & HBO Permit" } },
          { label: { de: "Bauherr", en: "Client" }, value: { de: "Privater Bauherr & Investor", en: "Private Client & Real Estate Investor" } },
        ],
        overview: {
          de: "Neubau eines dreigeschossigen Mehrfamilienhauses in gewachsener Wohnlage von Dreieich-Götzenhain mit großzügigen Verglasungen, sonnigen Balkonen und maximaler Tageslichtausbeute.",
          en: "Construction of a three-story residential apartment house in an established neighborhood of Dreieich-Götzenhain, highlighting expansive glazing, sunny balconies, and high natural light.",
        },
        keyFacts: [
          { de: "Vollständige Genehmigungs- und Ausführungsplanung", en: "Comprehensive scheme and technical working drawings" },
          { de: "Erhalt des geschützten Baumbestands auf dem Grundstück", en: "Protection and integration of mature preserved trees" },
          { de: "Moderne, klare Fassadengliederung", en: "Crisp, timeless facade articulation" },
          { de: "100% Bewohner- und Bauherrenzufriedenheit", en: "100% resident and client satisfaction rating" },
        ],
      },
      {
        id: "qs-nachhaltiges-gebaeude-goetzenhain",
        title: {
          de: "QNG Nachhaltigkeitszertifizierung & LCA",
          en: "QNG Sustainability Certification & LCA",
        },
        category: {
          de: "Nachhaltigkeitsberatung & Ökobilanz",
          en: "Sustainability & Life Cycle Assessment",
        },
        location: {
          de: "Dreieich-Götzenhain, Hessen",
          en: "Dreieich-Goetzenhain, Hesse",
        },
        year: "2022",
        image: "/images/dreist-ckiges-mehrfamilienhaus-mit-gro-en-fenstern-a8b20c.png",
        imageAlt: {
          de: "QNG Zertifizierung Mehrfamilienhaus Dreieich Götzenhain",
          en: "QNG sustainability certification Dreieich apartment building",
        },
        specs: [
          { label: { de: "Zertifikat", en: "Certificate" }, value: { de: "Qualitätssiegel Nachhaltiges Gebäude (QNG)", en: "Quality Seal for Sustainable Buildings (QNG)" } },
          { label: { de: "Berechnung", en: "Calculation" }, value: { de: "Life Cycle Assessment (LCA Ökobilanz)", en: "Full Life Cycle Assessment (LCA)" } },
          { label: { de: "Förderung", en: "Subsidies" }, value: { de: "KfW-Förderfähigkeit gesichert", en: "Federal KfW subsidy eligibility guaranteed" } },
          { label: { de: "Status", en: "Recognition" }, value: { de: "Staatlich anerkannt", en: "Officially certified" } },
        ],
        overview: {
          de: "Ganzheitliche Begleitung und Erstellung der Ökobilanzierung zur Erlangung des offiziellen staatlichen Qualitätssiegels Nachhaltiges Gebäude (QNG) für ein Mehrfamilienhaus in Dreieich.",
          en: "Integrated consulting and certified carbon footprint life cycle assessment enabling official QNG sustainability accreditation for a Dreieich residential property.",
        },
        keyFacts: [
          { de: "Treibhausgas- und Primärenergiebilanzierung", en: "Holistic carbon and primary energy modeling" },
          { de: "Prüfung schadstoffarmer Baustoffe", en: "Screening of eco-friendly, low-emission materials" },
          { de: "Maximale staatliche Förderoptimierung", en: "Maximized federal low-interest loan and grant capture" },
          { de: "Zukunftssicherer Werterhalt der Immobilie", en: "Long-term future-proof asset valuation" },
        ],
      },
    ],
    hoaiPhases: [
      {
        phase: "LPH 1–2",
        title: {
          de: "Grundlagenermittlung & Bebauungsanalyse Dreieich",
          en: "Site Feasibility & Urban Analysis Dreieich",
        },
        description: {
          de: "Prüfung der Einfügung nach § 34 BauGB in die Dreieicher Umgebungsbebauung sowie Klärung von Baumschutzauflagen.",
          en: "Assessment of urban contextual integration under Section 34 BauGB alongside tree preservation regulations in Dreieich.",
        },
        deliverables: [
          { de: "Boden- und Baumbestandsanalyse", en: "Soil and tree canopy assessment" },
          { de: "Städtebauliche Vorprüfung", en: "Preliminary urban feasibility dossier" },
          { de: "Kostenrahmen", en: "Initial cost framework" },
        ],
      },
      {
        phase: "LPH 3–4",
        title: {
          de: "Genehmigungsplanung & Bauantrag Dreieich",
          en: "Permit Applications & Approvals Dreieich",
        },
        description: {
          de: "Vollständige Erstellung des Bauantrags nach HBO inklusive aller Fachgutachten für die Genehmigung durch die Baubehörde.",
          en: "Complete statutory building permit dossier under HBO, integrating all required engineering and environmental statements.",
        },
        deliverables: [
          { de: "Bauantragspläne nach HBO", en: "Statutory permit blueprints under HBO" },
          { de: "Nachweis Abstandsflächen", en: "Setback and parking calculations" },
          { de: "Behördenmanagement", en: "Building inspectorate negotiations" },
        ],
      },
      {
        phase: "LPH 5–7",
        title: {
          de: "Ausführungsplanung & Tragwerkskoordination",
          en: "Working Plans & Structural Integration",
        },
        description: {
          de: "Detaillierte Werkpläne 1:50, Detailzeichnungen und Vorbereitung der Vergaben an zuverlässige Baupartner.",
          en: "Precision technical construction drawings (1:50 scale), structural coordination, and trade-by-trade contractor tender packs.",
        },
        deliverables: [
          { de: "Werkpläne & Bewehrungsabstimmung", en: "Working drawings & structural coordination" },
          { de: "Detaillierte Leistungsverzeichnisse", en: "Detailed bills of quantities" },
          { de: "Preisspiegel & Vergabevorschläge", en: "Contractor bid evaluation" },
        ],
      },
      {
        phase: "LPH 8–9",
        title: {
          de: "Objektüberwachung vor Ort in Dreieich",
          en: "On-Site Supervision & Final Sign-Off",
        },
        description: {
          de: "Präsenz auf der Baustelle in Dreieich: Terminüberwachung, Baukostenkontrolle und Qualitätssicherung bis zum schlüsselfertigen Einzug.",
          en: "Dedicated on-site attendance in Dreieich: construction scheduling, cost containment, and rigorous quality sign-off.",
        },
        deliverables: [
          { de: "Laufende Qualitätskontrolle", en: "Daily milestone quality checks" },
          { de: "Bautagebuch & Abnahmeprotokolle", en: "Site logbooks & formal acceptance notes" },
          { de: "Mängelfreie Bauübergabe", en: "Defect-free client handover" },
        ],
      },
    ],
    office: {
      name: {
        de: "Zuständiges Planungsbüro (Rödermark / Dreieich)",
        en: "Responsible Studio (Rödermark / Dreieich)",
      },
      street: "Carl-Zeiss-Str. 43",
      city: {
        de: "63322 Rödermark (nur 12 Min. nach Dreieich)",
        en: "63322 Rödermark (only 12 mins to Dreieich)",
      },
      phone: "060 74 239 87 82",
      phoneHref: "tel:+4960742398782",
      mapEmbedUrl:
        "https://maps.google.com/maps?q=Carl-Zeiss-Str.+43,+63322+R%C3%B6dermark&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },
    localRegulations: [
      {
        title: {
          de: "§ 34 BauGB Einfügungsgebot",
          en: "Section 34 BauGB Neighborhood Infill",
        },
        description: {
          de: "Erfolgreiche Nachweisführung bei Bauten im Dreieicher Bestand ohne Bebauungsplan für maximale Geschossflächenausnutzung.",
          en: "Proven track record justifying maximum gross floor area inside established Dreieich quarters lacking formal master plans.",
        },
      },
      {
        title: {
          de: "Baumschutzsatzung der Stadt Dreieich",
          en: "Dreieich Tree Preservation Statute",
        },
        description: {
          de: "Fachgerechte Baustellenlogistik und Schutz alter Baumbestände zur Vermeidung von Baustopps.",
          en: "Specialist tree root zone engineering and crane logistics avoiding municipal stop-work notices.",
        },
      },
      {
        title: {
          de: "Nachhaltigkeitszertifikate (QNG / KfW)",
          en: "QNG & Federal Green Subsidies",
        },
        description: {
          de: "Erstellung aller Nachweise für staatliche Tilgungszuschüsse und zinsvergünstigte Baudarlehen.",
          en: "Filing all audited sustainability proofs to unlock low-interest public financing and non-repayable grants.",
        },
      },
    ],
    districts: [
      {
        id: "dreieich-buchschlag",
        path: "/architektur-dreieich-buchschlag",
        name: {
          de: "Buchschlag & Dreieichenhain",
          en: "Buchschlag & Dreieichenhain",
        },
        suburbs: {
          de: "Villenkolonie Buchschlag, Burg Dreieichenhain, Altstadt",
          en: "Buchschlag Villa Colony, Dreieichenhain Castle, Historic Quarter",
        },
        badge: {
          de: "Jugendstil-Villen & Ensembleschutz",
          en: "Art Nouveau Villas & Ensemble Conservation",
        },
        summary: {
          de: "Buchschlag beherbergt eine der bedeutendsten Jugendstil-Villenkolonien Deutschlands, während Dreieichenhain durch historische Fachwerkarchitektur besticht. Strenge Denkmalschutzanforderungen.",
          en: "Buchschlag hosts one of Germany's most celebrated Art Nouveau villa colonies, while Dreieichenhain boasts timber-frame heritage. Demands rigorous preservation expertise.",
        },
        focusAreas: [
          {
            de: "Denkmalgerechte Sanierung von Jugendstil- & Historismus-Villen",
            en: "Heritage restoration of Art Nouveau & historicist mansions",
          },
          {
            de: "Enge Abstimmung mit der Denkmalbehörde & Erhaltungssatzung Buchschlag",
            en: "Close coordination with the conservation authority and Buchschlag bylaws",
          },
          {
            de: "Behutsame energetische Modernisierung im Bestand",
            en: "Sensitive energy retrofits within historic building fabric",
          },
        ],
        zoningHighlights: [
          {
            de: "Ensembleschutz nach Hessischem Denkmalschutzgesetz (HDSchG)",
            en: "Ensemble conservation under Hessian Heritage Act (HDSchG)",
          },
          {
            de: "Gestaltungssatzung der Villenkolonie Buchschlag",
            en: "Buchschlag Villa Colony aesthetic design statute",
          },
          {
            de: "Baumschutzsatzung der Stadt Dreieich",
            en: "City of Dreieich tree preservation statute",
          },
        ],
      },
      {
        id: "dreieich-sprendlingen",
        path: "/architektur-dreieich-sprendlingen",
        name: {
          de: "Sprendlingen, Götzenhain & Offenthal",
          en: "Sprendlingen, Götzenhain & Offenthal",
        },
        suburbs: {
          de: "Sprendlingen, Götzenhain, Philippseich, Offenthal",
          en: "Sprendlingen, Götzenhain, Philippseich, Offenthal",
        },
        badge: {
          de: "Geschosswohnungsbau & QNG-Nachhaltigkeit",
          en: "Multi-Family Housing & QNG Sustainability",
        },
        summary: {
          de: "Lebendige Stadtteile mit starker Wohnungsbaunachfrage. Shams Consult hat hier ein Mehrfamilienhaus mit 6 Wohneinheiten und QNG-Nachhaltigkeitszertifikat erfolgreich realisiert.",
          en: "Vibrant quarters with strong housing demand. Shams Consult successfully realized a 6-unit apartment complex with QNG green certification here.",
        },
        focusAreas: [
          {
            de: "Neubau von modernen Mehrfamilienhäusern und Eigentumswohnungen",
            en: "Construction of modern multi-family residences and condominiums",
          },
          {
            de: "QNG-Nachhaltigkeitszertifizierung für maximale KfW-Förderung",
            en: "QNG sustainability certification unlocking top KfW subsidies",
          },
          {
            de: "Nachverdichtung und Baulückenschließungen nach § 34 BauGB",
            en: "Urban infill and gap closures under Section 34 BauGB",
          },
        ],
        zoningHighlights: [
          {
            de: "Bebauungspläne Stadt Dreieich (Sprendlingen & Götzenhain)",
            en: "Dreieich master plans (Sprendlingen & Götzenhain)",
          },
          {
            de: "Bauaufsicht Kreis Offenbach",
            en: "Offenbach District Building Department",
          },
          {
            de: "DIN 276 Kosten- & Termingarantie",
            en: "DIN 276 cost discipline and schedule compliance",
          },
        ],
      },
      {
        id: "neu-isenburg",
        path: "/architektur-neu-isenburg",
        name: {
          de: "Neu-Isenburg & Gravenbruch",
          en: "Neu-Isenburg & Gravenbruch",
        },
        suburbs: {
          de: "Hugenottenallee, Buchenbusch, Gravenbruch, Gewerbegebiet Süd",
          en: "Hugenottenallee, Buchenbusch, Gravenbruch, Commercial South",
        },
        badge: {
          de: "Frankfurter Stadtrand & Gewerbestandort",
          en: "Frankfurt Border & Business Hub",
        },
        summary: {
          de: "Direkt an der Frankfurter Stadtgrenze: Höchste Nachfrage nach urbanem Wohnen, Gewerbe- und Bürokonversionen sowie exklusiven Stadtvillen im Buchenbusch.",
          en: "Directly on the Frankfurt municipal border: High demand for urban apartments, office-to-residential conversions, and bespoke villas in Buchenbusch.",
        },
        focusAreas: [
          {
            de: "Umnutzung von Büro- und Gewerbebauten zu modernen Wohnungen",
            en: "Adaptive reuse converting offices into contemporary apartments",
          },
          {
            de: "Exklusive Architektenvillen im Buchenbusch",
            en: "Exclusive bespoke architect villas in leafy Buchenbusch",
          },
          {
            de: "Bauanträge und Abstimmungen vor der Bauaufsicht Neu-Isenburg",
            en: "Permit applications with Neu-Isenburg Building Authority",
          },
        ],
        zoningHighlights: [
          {
            de: "Eigene Bauaufsichtsbehörde der Stadt Neu-Isenburg",
            en: "Independent municipal building authority of Neu-Isenburg",
          },
          {
            de: "Erhaltungssatzung für das Hugenottenviertel",
            en: "Conservation bylaws for the historic Huguenot Quarter",
          },
          {
            de: "Schallschutzgutachten für den Frankfurter Flughafenbereich",
            en: "Acoustic insulation assessments for Frankfurt Airport noise contours",
          },
        ],
      },
      {
        id: "langen",
        path: "/architektur-langen",
        name: {
          de: "Langen (Hessen) & Egelsbach",
          en: "Langen (Hesse) & Egelsbach",
        },
        suburbs: {
          de: "Langen Altstadt, Steinberg, Neurott, Egelsbach",
          en: "Langen Old Town, Steinberg, Neurott, Egelsbach",
        },
        badge: {
          de: "Wissenschaftsstandort & Familienwohnen",
          en: "Science Hub & Family Living",
        },
        summary: {
          de: "Zentral zwischen Frankfurt und Darmstadt. Standort von Paul-Ehrlich-Institut und Flugsicherung (DFS). Starker Bedarf an Wohn- und Gewerbebau.",
          en: "Centrally positioned between Frankfurt and Darmstadt. Home to the Paul Ehrlich Institute and DFS. Strong demand for housing and commercial builds.",
        },
        focusAreas: [
          {
            de: "Mehrfamilienhaus-Neubauten und KfW-40-Wohnquartiere",
            en: "New multi-family complexes and KfW 40 residential quarters",
          },
          {
            de: "Gewerbliche Praxis- und Laborbauten sowie Büroflächen",
            en: "Commercial medical clinics, laboratory spaces, and corporate suites",
          },
          {
            de: "Fachwerk- und Altbausanierungen im Langener Ortskern",
            en: "Historic timber-frame retrofits in Langen historic core",
          },
        ],
        zoningHighlights: [
          {
            de: "Bebauungspläne Stadt Langen & Gemeinde Egelsbach",
            en: "Langen city & Egelsbach municipal zoning master plans",
          },
          {
            de: "Bauaufsicht Kreis Offenbach",
            en: "Offenbach District Building Department",
          },
          {
            de: "Klimaschutz- und Regenwasserversickerungsauflagen",
            en: "Climate resilience and rainwater infiltration mandates",
          },
        ],
      },
    ],
    faqs: [
      {
        question: {
          de: "Welche baurechtlichen Besonderheiten gelten in Dreieich (Buchschlag & Götzenhain)?",
          en: "Which building regulations apply in Dreieich (e.g. Buchschlag & Götzenhain)?",
        },
        answer: {
          de: "In Dreieich-Buchschlag gilt strengster Ensembleschutz für die historische Jugendstil-Villenkolonie. In Götzenhain und Sprendlingen stehen dagegen oft moderne Geschosswohnungsbauten, KfW-40-Effizienzhäuser und Nachverdichtungen nach § 34 BauGB im Vordergrund. Wir kennen die spezifischen Anforderungen der Bauaufsicht Kreis Offenbach genau.",
          en: "In Dreieich-Buchschlag, strict historic ensemble conservation applies to the historic villa colony. In Götzenhain and Sprendlingen, focus is on modern multi-family residences, KfW 40 sustainability, and § 34 BauGB infill. We coordinate directly with the Offenbach district building authority.",
        },
      },
      {
        question: {
          de: "Hat Shams Consult reale gebaute Referenzen in Dreieich?",
          en: "Does Shams Consult have real completed project references in Dreieich?",
        },
        answer: {
          de: "Ja. Shams Consult hat in Dreieich-Götzenhain ein dreistöckiges Mehrfamilienhaus mit 6 großzügigen Wohneinheiten und 490 m² Wohnfläche inklusive anerkannter QNG-Nachhaltigkeitszertifizierung erfolgreich realisiert.",
          en: "Yes. Shams Consult successfully realized a three-story multi-family residential building with 6 units and 490 m² living area in Dreieich-Götzenhain, complete with recognized QNG sustainability certification.",
        },
      },
      {
        question: {
          de: "Was bedeutet die QNG-Zertifizierung für Bauherren in Dreieich?",
          en: "What does QNG certification mean for property developers in Dreieich?",
        },
        answer: {
          de: "Das Qualitätssiegel Nachhaltiges Gebäude (QNG) sichert den Zugang zu den maximalen KfW-Förderdarlehen für klimafreundlichen Neubau. Wir integrieren Lebenszyklusanalysen und nachhaltige Baustoffe von Leistungsphase 1 an.",
          en: "The QNG federal seal unlocks maximum subsidized low-interest loans from KfW. We embed lifecycle carbon analyses and sustainable materials directly from design inception.",
        },
      },
    ],
  },

  "stadtplanung-hessen": {
    slug: "stadtplanung-hessen",
    path: "/stadtplanung-hessen",
    h1: {
      de: "Stadtplanungsbüro & Stadtplanung Hessen — Bauleitplanung & B-Plan",
      en: "Urban Planning Practice Hesse — Master Planning, Zoning & Project Plans",
    },
    eyebrow: {
      de: "Stadtplanungsbüro & Stadtplanung Hessen",
      en: "Urban Planning Practice & Master Planning Hesse",
    },
    subtitle: {
      de: "Städtebauliche Expertise für Kommunen, Bauträger und institutionelle Investoren in Frankfurt und Hessen. Von städtebaulichen Machbarkeitsstudien über den Vorhaben- und Erschließungsplan (VEP) bis zum rechtskräftigen Bebauungsplan (B-Plan) nach BauGB.",
      en: "Urban planning expertise for municipalities, commercial property developers, and institutional investors across Frankfurt and Hesse. From spatial feasibility studies through project plans (VEP) to legally binding local zoning statutes (B-Plan).",
    },
    targetKeywords: [
      "Stadtplanung",
      "Stadtplaner",
      "Stadtplanungsbüro Frankfurt",
      "Stadtplanung Hessen",
      "Stadtplaner Frankfurt",
      "Stadtplanung Architektur",
      "Bebauungsplan erstellen Hessen",
      "Bauleitplanung Frankfurt",
      "Vorhaben- und Erschließungsplan Hessen",
      "Städtebauliche Machbarkeitsstudie Hessen",
    ],
    metaTitle: {
      de: "Stadtplanungsbüro Frankfurt & Hessen — Stadtplanung & B-Plan | Shams Consult",
      en: "Urban Planning Practice Frankfurt & Hesse — Master Plans | Shams Consult",
    },
    metaDescription: {
      de: "Staatlich anerkanntes Stadtplanungsbüro in Hessen (AKH Nr. 21886): Bebauungspläne (B-Plan), VEP, Nachverdichtung & städtebauliche Rahmenplanung. Jetzt anfragen!",
      en: "Licensed urban planning practice in Hesse (AKH No. 21886): Master plans, statutory zoning (B-Plan), urban infill & feasibility audits. Consult with Dipl.-Ing. Majeed Shams.",
    },
    heroHighlights: [
      {
        de: "Eingetragener Stadtplaner bei der AKH Hessen (Nr. 21886)",
        en: "Registered Urban Planner at the Chamber of Architects and Planners Hesse (AKH No. 21886)",
      },
      {
        de: "Erfahrung in kommunalen Stadtplanungs- und Bauämtern",
        en: "Professional tenure inside municipal urban planning and building departments",
      },
      {
        de: "Rechtssichere Begleitung kommunaler Gremien und Bürgerbeteiligungen",
        en: "Legally sound procedural steering for municipal councils and statutory public inquiries",
      },
      {
        de: "Schnittstelle zwischen Baurecht, Städtebau, Ökologie und Wirtschaftlichkeit",
        en: "Strategic synergy across building law, spatial design, ecology, and financial feasibility",
      },
    ],
    localFocusTitle: {
      de: "Verwaltungserfahrung trifft Marktverständnis",
      en: "Municipal Administrative Insight Meets Commercial Execution",
    },
    localFocusDescription: {
      de: "Bauleitplanung in Hessen erfordert präzise rechtliche Steuerung nach BauGB, HBO und ROG. Dipl.-Ing. Majeed Shams verbindet als freier Architekt und Stadtplaner fundierte kommunale Verwaltungspraxis mit marktorientierter Projektentwicklung. Wir führen Kommunen und private Vorhabenträger zügig und rechtssicher durch alle Verfahrensschritte.",
      en: "Statutory master planning in Hesse demands precise procedural control under the Federal Building Code (BauGB), State Building Code (HBO), and regional planning acts. Dipl.-Ing. Majeed Shams unites public sector administration experience with market-oriented development expertise.",
    },
    localProjects: [
      {
        id: "bebauungsplan-toepfenmuehle-gersfeld",
        title: {
          de: "Bebauungsplan „Töpfenmühle“ Gersfeld (Rhön)",
          en: "Statutory Master Plan “Töpfenmühle” Gersfeld (Rhön)",
        },
        category: {
          de: "Bauleitplanung & Bebauungsplan",
          en: "Master Planning & Zoning By-law",
        },
        location: {
          de: "Gersfeld (Rhön), Hessen",
          en: "Gersfeld (Rhön), Hesse",
        },
        year: "2023",
        image: "/images/image-f22e9f.jpg",
        imageAlt: {
          de: "Bebauungsplan Töpfenmühle Gersfeld Stadtplanung Hessen",
          en: "Zoning plan Töpfenmühle Gersfeld Hesse urban planning",
        },
        specs: [
          { label: { de: "Verfahren", en: "Procedure" }, value: { de: "Qualifizierter Bebauungsplan (§ 30 BauGB)", en: "Qualified Master Plan (§ 30 BauGB)" } },
          { label: { de: "Auftraggeber", en: "Client" }, value: { de: "Stadt Gersfeld (Rhön)", en: "City of Gersfeld (Rhön)" } },
          { label: { de: "Umfang", en: "Scope" }, value: { de: "Planzeichnung, Textteil & Begründung", en: "Statutory map, text by-laws & rationale" } },
          { label: { de: "Schwerpunkt", en: "Focus" }, value: { de: "Landschaftsbild & Tourismus", en: "Landscape conservation & tourism" } },
        ],
        overview: {
          de: "Aufstellung und rechtssichere Begleitung des Bebauungsplans „Töpfenmühle“ zur geordneten städtebaulichen Entwicklung eines touristischen Sondergebiets im Naturpark Hessische Rhön.",
          en: "Drafting and legal guidance for the “Töpfenmühle” master plan, securing orderly spatial development for a specialized tourism hub in the Bavarian-Hessian Rhön biosphere reserve.",
        },
        keyFacts: [
          { de: "Komplette Planzeichnung (Teil A) und Textliche Festsetzungen (Teil B)", en: "Full cartographic zoning map (Part A) and regulatory texts (Part B)" },
          { de: "Erstellung der ausführlichen städtebaulichen Begründung", en: "Comprehensive urban planning justification report" },
          { de: "Koordination von Umweltbericht und Fachbehördenbeteiligung", en: "Inter-agency coordination with environmental authorities" },
          { de: "Erfolgreicher Satzungsbeschluss durch das Stadtparlament", en: "Enacted into binding statutory municipal law by the city parliament" },
        ],
      },
      {
        id: "vep-maienweg-ulm",
        title: {
          de: "Vorhaben- und Erschließungsplan (VEP)",
          en: "Project & Infrastructure Plan (VEP)",
        },
        category: {
          de: "VEP & Nachverdichtung",
          en: "VEP & Urban Infill",
        },
        location: {
          de: "Maienweg / Süddeutschland",
          en: "Maienweg / South Germany",
        },
        year: "2023",
        image: "/images/image-0996f8.jpg",
        imageAlt: {
          de: "Vorhaben- und Erschließungsplan VEP",
          en: "Project and infrastructure development plan VEP",
        },
        specs: [
          { label: { de: "Verfahren", en: "Statutory Path" }, value: { de: "Vorhabenbezogener B-Plan (§ 12 BauGB)", en: "Project-based Master Plan (§ 12 BauGB)" } },
          { label: { de: "Nutzung", en: "Program" }, value: { de: "Wohnungsbau & Quartiersentwicklung", en: "Residential Housing & Urban Quarter" } },
          { label: { de: "Infrastruktur", en: "Infrastructure" }, value: { de: "Erschließungsvertrag & Stellplätze", en: "Public Infrastructure & Parking Covenant" } },
          { label: { de: "Status", en: "Status" }, value: { de: "Rechtskräftig abgeschlossen", en: "Formally enacted into law" } },
        ],
        overview: {
          de: "Städtebauliche Konzeption und verfahrensrechtliche Begleitung eines vorhabenbezogenen Bebauungsplans zur innerstädtischen Nachverdichtung mit hoher Wohnqualität.",
          en: "Urban design concept and procedural guidance for a project-based development plan facilitating inner-city residential densification with high living quality.",
        },
        keyFacts: [
          { de: "Verhandlung des Durchführungsvertrags mit Vorhabenträger", en: "Drafting the municipal development execution agreement" },
          { de: "Optimiertes Mobilitäts- und Erschließungskonzept", en: "Optimized mobility, road connection, and civil infrastructure" },
          { de: "Abstimmung mit Trägern öffentlicher Belange (TÖB)", en: "Stakeholder consensus across all statutory public bodies" },
          { de: "Zügige Rechtskraft ohne Normenkontrollrisiken", en: "Expedited judicial enactment minimizing legal challenges" },
        ],
      },
    ],
    hoaiPhases: [
      {
        phase: "Schritt 1",
        title: {
          de: "Städtebauliche Machbarkeit & Aufstellungsbeschluss",
          en: "Urban Feasibility & Formal Inception Resolution",
        },
        description: {
          de: "Analyse der Rahmenbedingungen, Abstimmung der städtebaulichen Ziele mit der Gemeinde und Vorbereitung des Aufstellungsbeschlusses (§ 2 Abs. 1 BauGB).",
          en: "Baseline spatial analysis, alignment of urban goals with the council, and preparation of the formal initiation resolution (§ 2 para. 1 BauGB).",
        },
        deliverables: [
          { de: "Städtebaulicher Vorentwurf", en: "Preliminary urban design scheme" },
          { de: "Flächen- und Kennzahlenbilanz", en: "Land use and density statistics" },
          { de: "Beschlussvorlage Gemeindevertretung", en: "Council resolution memorandum" },
        ],
      },
      {
        phase: "Schritt 2",
        title: {
          de: "Frühzeitige Beteiligung (Bürger & Behörden)",
          en: "Early Public & Inter-Agency Inquiries",
        },
        description: {
          de: "Erarbeitung des Planentwurfs und Durchführung der frühzeitigen Bürger- und Behördenbeteiligung gem. § 3 Abs. 1 und § 4 Abs. 1 BauGB.",
          en: "Drafting the zoning map and conducting early public exhibition and agency reviews under § 3 para. 1 and § 4 para. 1 BauGB.",
        },
        deliverables: [
          { de: "Entwurf Planzeichnung & Textteil", en: "Draft statutory plan & text regulations" },
          { de: "Beteiligungsdokumentation", en: "Consultation response records" },
          { de: "Abwägungsvorschläge", en: "Preliminary assessment recommendations" },
        ],
      },
      {
        phase: "Schritt 3",
        title: {
          de: "Förmliche Offenlage & Abwägungsprozess",
          en: "Statutory Public Exhibition & Judicial Balancing",
        },
        description: {
          de: "Einarbeitung der Stellungnahmen, Vorbereitung des Offenlagebeschlusses und rechtssichere Abwägung aller Belange.",
          en: "Integration of agency feedback, publication of the formal statutory exhibition, and legally sound interest balancing.",
        },
        deliverables: [
          { de: "Rechtssichere Abwägungstabelle", en: "Legally audited balancing matrix" },
          { de: "Aktualisierte Begründung", en: "Updated explanatory statement" },
          { de: "Umweltberichtkoordination", en: "Environmental report integration" },
        ],
      },
      {
        phase: "Schritt 4",
        title: {
          de: "Satzungsbeschluss & Rechtskraft",
          en: "Enactment into Law & Official Promulgation",
        },
        description: {
          de: "Finale Beschlussfassung durch das Stadtparlament (§ 10 BauGB), ortsübliche Bekanntmachung und Herbeiführung der Rechtskraft.",
          en: "Final adoption by the city assembly (§ 10 BauGB), public notice promulgation, and formal enactment into law.",
        },
        deliverables: [
          { de: "Fertige Satzungsexemplare", en: "Final sealed statutory copies" },
          { de: "Zusammenfassende Erklärung", en: "Summarizing statutory declaration" },
          { de: "Rechtswirksames Baurecht", en: "Enacted development rights" },
        ],
      },
    ],
    office: {
      name: {
        de: "Zentrale für Stadt- & Bauleitplanung",
        en: "Center for Urban Planning & Master Planning",
      },
      street: "Carl-von-Noorden-Platz 5",
      city: {
        de: "60596 Frankfurt am Main",
        en: "60596 Frankfurt am Main, Germany",
      },
      phone: "069 74 223 777",
      phoneHref: "tel:+496974223777",
      mapEmbedUrl:
        "https://maps.google.com/maps?q=Carl-von-Noorden-Platz+5,+60596+Frankfurt+am+Main&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },
    localRegulations: [
      {
        title: {
          de: "BauGB & Baunutzungsverordnung (BauNVO)",
          en: "Federal Building Code (BauGB) & Land Use (BauNVO)",
        },
        description: {
          de: "Rechtssichere Anwendung der Bundesbaugesetze für qualifizierte (§ 30 BauGB) und vorhabenbezogene (§ 12 BauGB) Bebauungspläne.",
          en: "Flawless legal application of federal statutory laws for standard (§ 30 BauGB) and project-based (§ 12 BauGB) master plans.",
        },
      },
      {
        title: {
          de: "Hessisches Landesplanungsgesetz (HLPG)",
          en: "Hesse State Planning Act (HLPG)",
        },
        description: {
          de: "Prüfung der Vereinbarkeit mit den Zielen des Regionalplans Südhessen und den Flächennutzungsplänen.",
          en: "Conformity assessment against the South Hesse Regional Development Plan and municipal land use plans.",
        },
      },
      {
        title: {
          de: "Kommunale Satzungshoheit",
          en: "Municipal Autonomy & Process Governance",
        },
        description: {
          de: "Entlastung kommunaler Bauämter durch termingerechte Verfahrenssteuerung von der ersten Skizze bis zur Rechtskraft.",
          en: "Relieving public planning departments by leading procedural steering from inception to binding enactment.",
        },
      },
    ],
    faqs: [
      {
        question: {
          de: "Wie lange dauert ein Bauleitplanverfahren (Bebauungsplan) in Hessen?",
          en: "How long does a statutory master planning process (Bebauungsplan) take in Hesse?",
        },
        answer: {
          de: "Ein qualifiziertes Bebauungsplanverfahren nach BauGB dauert in der Regel 12 bis 24 Monate. Es umfasst den Aufstellungsbeschluss, frühzeitige und förmliche Bürger- und Behördenbeteiligungen (§ 3 & § 4 BauGB), den Umweltbericht sowie den Satzungsbeschluss. Shams Consult steuert den Gesamtprozess terminsicher.",
          en: "A standard master plan process (Bebauungsplan) per the German Federal Building Code typically takes 12 to 24 months, encompassing initiation resolutions, stakeholder hearings, environmental audits, and council adoption. Shams Consult steers the timeline with proven diligence.",
        },
      },
      {
        question: {
          de: "Was unterscheidet einen vorhabenbezogenen B-Plan (§ 12 BauGB) vom Regelverfahren?",
          en: "What distinguishes a project-based B-Plan (§ 12 BauGB) from the standard procedure?",
        },
        answer: {
          de: "Beim vorhabenbezogenen Bebauungsplan verpflichtet sich der Vorhabenträger (Investor) über einen Durchführungsvertrag zur Bauausführung und Kostenübernahme der Erschließung. Das Verfahren ist in der Regel fokussierter und zügiger als herkömmliche kommunale Planungsverfahren.",
          en: "Under a project-based master plan (§ 12 BauGB), the developer commits through a statutory execution agreement to build within a set timeframe and finance civil infrastructure, substantially accelerating the approval process.",
        },
      },
      {
        question: {
          de: "Für welche Auftraggeber erstellt Shams Consult Bauleitplanungen in Hessen?",
          en: "Which clients does Shams Consult advise on urban master planning in Hesse?",
        },
        answer: {
          de: "Wir arbeiten sowohl für Städte und Gemeinden in Hessen als auch für private Projektentwickler, Industrieunternehmen und Bauträger, die Baurecht für neue Wohnquartiere oder Gewerbeareale schaffen möchten.",
          en: "We serve both municipalities across Hesse and private institutional developers, corporations, and builders seeking binding development rights for new residential quarters or industrial parks.",
        },
      },
      {
        question: {
          de: "Welche Aufgaben übernimmt ein Stadtplanungsbüro im Vergleich zum Architekturbüro?",
          en: "What does an urban planning practice handle compared to a pure architecture studio?",
        },
        answer: {
          de: "Während ein Architekturbüro einzelne Gebäude und Baukörper (HOAI LPH 1–9) plant, schafft ein Stadtplanungsbüro das übergeordnete Baurecht: städtebauliche Rahmenpläne, Flächennutzungs- und Bebauungspläne (B-Plan), Nachverdichtungskonzepte und Erschließungsplanungen. Bei Shams Consult profitieren Sie von beiden Disziplinen aus einer Hand: Dipl.-Ing. Majeed Shams ist sowohl als Architekt als auch als freier Stadtplaner bei der AKH Hessen eingetragen.",
          en: "While an architectural office designs individual buildings (HOAI phases 1–9), an urban planning practice creates the overarching legal framework: master plans, statutory zoning by-laws (B-Plan), urban infill strategies, and infrastructure planning. At Shams Consult, you benefit from both disciplines united under registered architect and urban planner Dipl.-Ing. Majeed Shams.",
        },
      },
    ],
  },

  "architektur-wiesbaden": {
    slug: "architektur-wiesbaden",
    path: "/architektur-wiesbaden",
    h1: {
      de: "Architekturbüro Wiesbaden — Architektur, Villen & Bauanträge",
      en: "Architectural Practice Wiesbaden — Design, Villas & Permits",
    },
    eyebrow: {
      de: "Architektur & Stadtplanung Landeshauptstadt Wiesbaden",
      en: "Architecture & Urban Planning State Capital Wiesbaden",
    },
    subtitle: {
      de: "Ihr Architekturbüro für die Landeshauptstadt Wiesbaden und den Rheingau. Anspruchsvoller Villenbau, denkmalgerechte Sanierungen, Mehrfamilienhäuser und rechtssichere Genehmigungsverfahren beim Bauaufsichtsamt Wiesbaden.",
      en: "Your architecture practice for Hesse's state capital Wiesbaden and the Rheingau. Exclusive villa design, historic spa architecture retrofits, multi-family housing, and streamlined approvals with the Wiesbaden Building Authority.",
    },
    targetKeywords: [
      "Architekt Wiesbaden",
      "Architekturbüro Wiesbaden",
      "Bauantrag Wiesbaden",
      "Denkmalschutz Architekt Wiesbaden",
      "Architekt Neroberg Sonnenberg",
      "Baugenehmigung Bauaufsicht Wiesbaden",
      "Mehrfamilienhaus Wiesbaden planen",
    ],
    metaTitle: {
      de: "Architekturbüro Wiesbaden — Villen, Bauantrag & Sanierung | Shams Consult",
      en: "Architectural Practice Wiesbaden — Luxury Villas & Permits | Shams Consult",
    },
    metaDescription: {
      de: "Architekturbüro in Wiesbaden (AKH Hessen Nr. 21886): Villenbau, Sanierungen, Bauantrag beim Bauaufsichtsamt & HOAI 1–9. Schnell & genehmigungssicher. Jetzt anfragen!",
      en: "Architectural practice in Wiesbaden (AKH Hesse No. 21886): Villa design, heritage retrofits, permit applications & HOAI 1–9. Fast & permit-secure. Contact us today!",
    },
    heroHighlights: [
      {
        de: "Persönliche Vor-Ort-Betreuung in der Landeshauptstadt Wiesbaden & im Rheingau",
        en: "Personal on-site client management in Wiesbaden and the Rheingau region",
      },
      {
        de: "Uneingeschränkte Bauvorlageberechtigung (AKH Hessen Nr. 21886)",
        en: "Full building permit filing authorization (AKH Hesse No. 21886)",
      },
      {
        de: "Spezialist für Denkmalschutz, Bäderarchitektur & anspruchsvolle Villen",
        en: "Specialized in historic preservation, spa architecture & exclusive villas",
      },
      {
        de: "Rechtssichere Genehmigungsverfahren beim Bauaufsichtsamt Wiesbaden",
        en: "Streamlined permit procedures with the Wiesbaden Municipal Building Authority",
      },
    ],
    localFocusTitle: {
      de: "Bauen & Sanieren in der hessischen Landeshauptstadt",
      en: "Building & Preserving in Hesse's State Capital",
    },
    localFocusDescription: {
      de: "Wiesbaden stellt durch seinen einzigartigen historischen Bestand an Gründerzeit- und Klassizismusbauten sowie exklusive Hanglagen am Neroberg und Sonnenberg hohe Anforderungen an Architekten. Wir beherrschen das Zusammenspiel aus städtischem Gestaltungssatzungsrecht, dem Hessischen Denkmalschutzgesetz (HDSchG) und moderner Energieeffizienz nach KfW-Standard.",
      en: "Wiesbaden's distinctive architectural heritage of historic spa mansions, Wilhelminian quarters, and hillside villas on Neroberg and Sonnenberg requires exacting architectural standards. We seamlessly balance municipal design bylaws, the Hesse Heritage Protection Act (HDSchG), and high-efficiency KfW energy performance.",
    },
    localProjects: [
      {
        id: "stadtvilla-roedermark",
        title: {
          de: "Moderne Stadtvilla mit skulpturaler Formensprache",
          en: "Contemporary Urban Villa with Sculptural Geometry",
        },
        category: {
          de: "Exklusiver Wohnungsbau & Villen",
          en: "Exclusive Residential & Luxury Villas",
        },
        location: {
          de: "Wiesbaden & Rhein-Main-Gebiet",
          en: "Wiesbaden & Rhine-Main Region",
        },
        year: "2023",
        image: "/images/stadtvilla_mfa_roedermark.jpg",
        imageAlt: {
          de: "Exklusive Stadtvilla mit lichtdurchfluteten Fassaden und Gartenbezug",
          en: "Exclusive urban villa with light-filled facade and garden access",
        },
        specs: [
          {
            label: { de: "Wohnfläche", en: "Living Area" },
            value: { de: "ca. 340 m²", en: "approx. 340 m²" },
          },
          {
            label: { de: "Energiestandard", en: "Energy Standard" },
            value: { de: "KfW-Effizienzhaus 40", en: "KfW Efficiency House 40" },
          },
          {
            label: { de: "Bauweise", en: "Construction" },
            value: { de: "Massivbau & Glasfassade", en: "Solid Masonry & Glazing" },
          },
          {
            label: { de: "Genehmigung", en: "Permit Procedure" },
            value: { de: "HBO Baugenehmigung", en: "HBO Building Permit" },
          },
        ],
        overview: {
          de: "Repräsentatives Wohnanwesen mit offenen Grundrissen, raumhohen Verglasungen und maßgeschneidertem Energiekonzept. Präzise Ausführungsplanung und nahtlose Abstimmung mit den Bauaufsichtsbehörden.",
          en: "Prestigious residence with open layouts, floor-to-ceiling glazing, and a tailored energy strategy. Meticulous working drawings and swift municipal approvals.",
        },
        keyFacts: [
          {
            de: "Individuelle Grundrissgestaltung mit doppelter Raumhöhe im Wohnbereich",
            en: "Bespoke spatial design with double-height ceiling in living areas",
          },
          {
            de: "Geothermie-Wärmepumpe & integrierte Photovoltaikanlage",
            en: "Geothermal heat pump & integrated rooftop solar photovoltaic system",
          },
          {
            de: "Vollständige Betreuung von Entwurf bis Endabnahme (HOAI LPH 1–9)",
            en: "Full architectural oversight from concept through final inspection (HOAI 1–9)",
          },
        ],
      },
      {
        id: "dreieich-mfh",
        title: {
          de: "Mehrfamilienhaus mit 6 Wohneinheiten & QNG",
          en: "Multi-Family Residential Building with 6 Units & QNG",
        },
        category: {
          de: "Wohnungsbau & KfW-Effizienzhaus",
          en: "Residential & KfW Efficiency House",
        },
        location: {
          de: "Wiesbaden & Rhein-Main-Umfeld",
          en: "Wiesbaden & Rhine-Main Vicinity",
        },
        year: "2024",
        image: "/images/dreieich_mfh_neu.jpg",
        imageAlt: {
          de: "Modernes Mehrfamilienhaus mit QNG-Nachhaltigkeitszertifizierung",
          en: "Modern multi-family residential building with QNG sustainability certificate",
        },
        specs: [
          {
            label: { de: "Wohneinheiten", en: "Residential Units" },
            value: { de: "6 Eigentumswohnungen", en: "6 Condominiums" },
          },
          {
            label: { de: "Gesamtwohnfläche", en: "Total Living Space" },
            value: { de: "ca. 490 m²", en: "approx. 490 m²" },
          },
          {
            label: { de: "Zertifizierung", en: "Certification" },
            value: { de: "QNG Nachhaltigkeitssiegel", en: "Official QNG Green Seal" },
          },
          {
            label: { de: "Bauvolumen", en: "Construction Volume" },
            value: { de: "3 Vollgeschosse + Staffel", en: "3 Storeys + Penthouse" },
          },
        ],
        overview: {
          de: "Wirtschaftlich optimierter Geschosswohnungsbau mit barrierefreien Zugängen, Aufzugsanlage und Tiefgarage. Höchste Renditesicherheit für Bauträger durch beschleunigte Genehmigung und maximale Förderzuschüsse.",
          en: "Economically optimized residential apartment building featuring step-free access, elevator, and underground parking. Maximum investment certainty through expedited permits and top-tier federal subsidies.",
        },
        keyFacts: [
          {
            de: "Rechtskonforme Genehmigung nach § 34 BauGB im Bestandsquartier",
            en: "Legally compliant permit under Section 34 BauGB in an established quarter",
          },
          {
            de: "Einsatz schadstoffarmer Baustoffe für das QNG-Nachhaltigkeitszertifikat",
            en: "Use of low-emission, eco-certified materials for federal green funding",
          },
          {
            de: "Termingerechte Fertigstellung innerhalb des garantierten Kostenrahmens",
            en: "On-schedule completion delivered strictly within the approved budget cap",
          },
        ],
      },
    ],
    hoaiPhases: [
      {
        phase: "LPH 1–2",
        title: {
          de: "Grundlagenermittlung & Vorplanung",
          en: "Site Assessment & Preliminary Design",
        },
        description: {
          de: "Prüfung des Baugrundstücks, Klärung der baurechtlichen Rahmenbedingungen beim Bauaufsichtsamt Wiesbaden und erste Entwurfsskizzen.",
          en: "Site evaluation, clarification of zoning parameters with the Wiesbaden Building Authority, and preliminary architectural sketches.",
        },
        deliverables: [
          { de: "Standort- & Baurechtsanalyse", en: "Zoning & site feasibility audit" },
          { de: "Städtebaulicher Vorentwurf", en: "Preliminary design drawings" },
          { de: "Erste Kostenschätzung nach DIN 276", en: "Initial cost estimate per DIN 276" },
        ],
      },
      {
        phase: "LPH 3–4",
        title: {
          de: "Entwurfs- & Genehmigungsplanung",
          en: "Detailed Design & Permit Filing",
        },
        description: {
          de: "Vollständige Ausarbeitung des Entwurfs und Erstellung aller baurechtlich vorgeschriebenen Bauvorlagen zur Genehmigungseingabe.",
          en: "Refinement of architectural blueprints and assembly of all statutory documentation for municipal permit submission.",
        },
        deliverables: [
          { de: "Prüffähiger Bauantrag nach HBO", en: "Verified building permit file per HBO" },
          { de: "Denkmal- & Abstandsflächennachweise", en: "Heritage & setback distance proofs" },
          { de: "Kostenberechnung nach DIN 276", en: "Accurate cost calculation per DIN 276" },
        ],
      },
      {
        phase: "LPH 5–7",
        title: {
          de: "Ausführungsplanung & Ausschreibung",
          en: "Working Drawings & Tendering",
        },
        description: {
          de: "Detailgenaue Werkpläne (M 1:50 bis 1:1), Erstellung präziser Leistungsverzeichnisse und Preisverhandlungen mit Fachhandwerkern.",
          en: "Detailed construction drawings (1:50 to 1:1), comprehensive bills of quantities, and procurement negotiations with contractors.",
        },
        deliverables: [
          { de: "Ausführungs- & Detailzeichnungen", en: "Full working drawings & joinery details" },
          { de: "VOB-konforme Leistungsverzeichnisse", en: "VOB-compliant tender packages" },
          { de: "Vergabevorschläge & Preisspiegel", en: "Bid comparison matrices & contract awards" },
        ],
      },
      {
        phase: "LPH 8–9",
        title: {
          de: "Bauüberwachung & Objektbetreuung",
          en: "Site Supervision & Final Acceptance",
        },
        description: {
          de: "Kontinuierliche Bauleitung auf der Baustelle, Qualitäts- und Terminkontrolle, Rechnungsprüfung und finale Bauabnahme.",
          en: "Continuous on-site management, stringent quality and milestone audits, invoice verification, and formal building handover.",
        },
        deliverables: [
          { de: "Laufende Baukontrolle & Baustellenprotokolle", en: "Daily site inspection reports" },
          { de: "Rechnungsprüfung & Kostenverfolgung", en: "Invoice audits & budget tracking" },
          { de: "Mängelfreie Abnahme & Übergabedokumentation", en: "Flawless handover documentation" },
        ],
      },
    ],
    office: {
      name: {
        de: "Projektbüro Wiesbaden & Rhein-Main",
        en: "Project Office Wiesbaden & Rhine-Main",
      },
      street: "Carl-von-Noorden-Platz 5 (Zentrale) & Vor-Ort-Termine Wiesbaden",
      city: {
        de: "65189 Wiesbaden & 60596 Frankfurt",
        en: "65189 Wiesbaden & 60596 Frankfurt",
      },
      phone: "069 74 223 777",
      phoneHref: "tel:+496974223777",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40995.38575027581!2d8.2045618!3d50.0820384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd99a8039c3629%3A0x422435029b0c600!2sWiesbaden!5e0!3m2!1sde!2sde!4v1710000000000!5m2!1sde!2sde",
    },
    localRegulations: [
      {
        title: {
          de: "Bauaufsichtsamt Wiesbaden",
          en: "Wiesbaden Building Authority",
        },
        description: {
          de: "Erprobte Abstimmungsprozesse mit den Behörden am Gustav-Stresemann-Ring für zügige Genehmigungen im Voll- und vereinfachten Verfahren.",
          en: "Established coordination workflows with municipal planners at Gustav-Stresemann-Ring for expedited building permits.",
        },
      },
      {
        title: {
          de: "Denkmalschutz & Bäderarchitektur",
          en: "Historic Preservation & Spa Mansions",
        },
        description: {
          de: "Fundierte Erfahrung bei der behutsamen Sanierung denkmalgeschützter Altbauten, Stuckfassaden und GEG-Ausnahmen.",
          en: "Deep expertise in sensitive restoration of listed heritage facades, ornate mouldings, and Building Energy Act exemptions.",
        },
      },
      {
        title: {
          de: "Hangbebauung & Baugrund (Neroberg)",
          en: "Hillside Plots & Geotechnics (Neroberg)",
        },
        description: {
          de: "Präzise geotechnische Planung und statische Nachweise für komplexe Hanglagen und hochwertige Tiefgaragenlösungen.",
          en: "Precise geotechnical pit design and structural engineering for demanding hillside properties and underground garages.",
        },
      },
    ],
    districts: [
      {
        id: "neroberg-sonnenberg",
        path: "/architektur-wiesbaden-sonnenberg",
        name: {
          de: "Neroberg, Sonnenberg & Dambachtal",
          en: "Neroberg, Sonnenberg & Dambachtal",
        },
        suburbs: {
          de: "Nerobergbahn, Kurpark-Nord, Sonnenberger Hanglagen, Dambachtal",
          en: "Neroberg Funicular, Kurpark North, Sonnenberg hillsides, Dambachtal",
        },
        badge: {
          de: "Exklusive Hangvillen & Denkmalschutz",
          en: "Hillside Villas & Heritage Conservation",
        },
        summary: {
          de: "Wiesbadens nobelste Wohnlagen. Repräsentative Villenanwesen, anspruchsvolle Hangstatik und strenge Gestaltungsauflagen.",
          en: "Wiesbaden's most prestigious enclaves. Sprawling estates, hillside structural engineering, and strict municipal aesthetic standards.",
        },
        focusAreas: [
          {
            de: "Individuelle Architektenvillen in Hanglage mit Panoramablick",
            en: "Custom architect-designed hillside villas with panoramic vistas",
          },
          {
            de: "Denkmalgerechte Sanierung historischer Jugendstil- & Historismus-Villen",
            en: "Heritage-compliant restoration of historic Art Nouveau & historicist mansions",
          },
          {
            de: "Geotechnische Sicherung, Stützwände und Tiefgaragenkonzepte",
            en: "Geotechnical pit stabilization, retaining walls, and underground parking",
          },
        ],
        zoningHighlights: [
          {
            de: "Einfügungsgebot § 34 BauGB (Großvolumige Villenbebauung)",
            en: "Contextual insertion § 34 BauGB (large-scale villa typology)",
          },
          {
            de: "Hessisches Denkmalschutzgesetz (HDSchG)",
            en: "Hesse Heritage Protection Act (HDSchG)",
          },
          {
            de: "Baumschutzsatzung der Landeshauptstadt Wiesbaden",
            en: "Wiesbaden Municipal Tree Protection Ordinance",
          },
        ],
      },
      {
        id: "kurviertel-city-ost",
        path: "/architektur-wiesbaden-kurviertel",
        name: {
          de: "Kurviertel, City-Ost & Nordost",
          en: "Kurviertel, City-Ost & Nordost",
        },
        suburbs: {
          de: "Wilhelmstraße, Kurhaus, Parkstraße, Dambachviertel, Kureck",
          en: "Wilhelmstraße, Kurhaus, Parkstraße, Dambachviertel, Kureck",
        },
        badge: {
          de: "Klassizismus & Bäderarchitektur",
          en: "Classicism & Spa Architecture",
        },
        summary: {
          de: "Das historische Kurviertel mit prächtigen Fassaden und denkmalgeschützten Ensembles. Höchste Anforderungen des Denkmalamts.",
          en: "The historic spa quarter featuring ornate facades and heritage ensembles. Demands close coordination with the historic preservation office.",
        },
        focusAreas: [
          {
            de: "Thermische Sanierung denkmalgeschützter Mehrfamilienhäuser",
            en: "Thermal retrofitting of listed historic apartment buildings",
          },
          {
            de: "Dachgeschossausbauten & Balkonanbauten im Ensemblebereich",
            en: "Attic conversions & balcony additions in conservation ensembles",
          },
          {
            de: "Umnutzungen von Gewerbe- und Kanzleiflächen zu Premium-Wohnraum",
            en: "Conversions of commercial offices/chambers into luxury apartments",
          },
        ],
        zoningHighlights: [
          {
            de: "Gestaltungssatzung Innenstadt & Kurviertel",
            en: "Downtown & Spa Quarter Design Statute",
          },
          {
            de: "Ensembleschutz nach § 2 HDSchG",
            en: "Ensemble conservation per § 2 HDSchG",
          },
          {
            de: "Stellplatzablösesatzung der Stadt Wiesbaden",
            en: "Wiesbaden parking requirement and compensation bylaws",
          },
        ],
      },
      {
        id: "biebrich-schierstein",
        path: "/architektur-wiesbaden-biebrich",
        name: {
          de: "Biebrich & Schierstein (Rheinufer)",
          en: "Biebrich & Schierstein (Rhine Waterfront)",
        },
        suburbs: {
          de: "Schloss Biebrich, Schiersteiner Hafen, Rheinuferpromenade",
          en: "Biebrich Palace, Schierstein Marina, Rhine Promenade",
        },
        badge: {
          de: "Wasserlagen & Nachverdichtung",
          en: "Waterfront & Urban Infill",
        },
        summary: {
          de: "Maritimes Flair am Rhein, historische Industriekultur und florierende Wohnquartiere mit Hochwasserschutzanforderungen.",
          en: "Rhine waterfront living, industrial conversion heritage, and thriving neighborhoods with flood management expertise.",
        },
        focusAreas: [
          {
            de: "Moderne Mehrfamilienhäuser & Eigentumswohnungen am Fluss",
            en: "Contemporary apartment buildings & waterfront condominiums",
          },
          {
            de: "Umnutzung und Sanierung historischer Gewerbebauten",
            en: "Adaptive reuse and modernization of historic commercial assets",
          },
          {
            de: "Hochwasserschutzgerechte Baukonstruktion (HQ 100 / HQ Extrem)",
            en: "Flood-resilient structural design meeting HQ 100 flood requirements",
          },
        ],
        zoningHighlights: [
          {
            de: "Hochwasserschutzverordnung Land Hessen (Rheinstrom)",
            en: "Hesse Rhine Flood Mitigation Directives",
          },
          {
            de: "Bebauungspläne Biebricher Rheinufer",
            en: "Biebrich waterfront B-Plan statutory regulations",
          },
          {
            de: "Brandschutzkonzepte für mehrgeschossigen Wohnungsbau",
            en: "Fire protection master plans for multi-story residential buildings",
          },
        ],
      },
      {
        id: "dotzheim-kohlheck",
        path: "/architektur-wiesbaden-dotzheim",
        name: {
          de: "Dotzheim, Kohlheck & Klarenthal",
          en: "Dotzheim, Kohlheck & Klarenthal",
        },
        suburbs: {
          de: "Kohlheck, Dotzheimer Ortskern, Freudenberg, Klarenthal",
          en: "Kohlheck, Dotzheim town center, Freudenberg, Klarenthal",
        },
        badge: {
          de: "Familienwohnen & Effizienzhäuser",
          en: "Family Residences & Energy Efficiency",
        },
        summary: {
          de: "Beliebte Wohnstadtteile am Taunusrand. Gefragt für Neubauten von Einfamilienhäusern, Doppelhäusern und energetische Sanierungen.",
          en: "Sought-after residential quarters on the Taunus fringe, ideal for new single-family homes, semi-detached residences, and deep retrofits.",
        },
        focusAreas: [
          {
            de: "KfW-40-Effizienzhäuser für private Familienbauherren",
            en: "KfW 40 low-energy residences for private homeowners",
          },
          {
            de: "Aufstockungen und Erweiterungsbauten an Bestandsgebäuden",
            en: "Storey extensions and spatial additions to existing homes",
          },
          {
            de: "Nachverdichtung großer Gartengrundstücke (§ 34 BauGB)",
            en: "Infill development of expansive garden parcels (§ 34 BauGB)",
          },
        ],
        zoningHighlights: [
          {
            de: "Bebauungspläne Kohlheck & Dotzheim",
            en: "Kohlheck & Dotzheim municipal B-Plan frameworks",
          },
          {
            de: "Abstandsflächenprüfung nach HBO",
            en: "Hesse building setback evaluations",
          },
          {
            de: "Versickerungs- und Retentionsnachweise",
            en: "Rainwater infiltration and retention engineering verifications",
          },
        ],
      },
    ],
    faqs: [
      {
        question: {
          de: "Was kostet ein Architekt in Wiesbaden nach der HOAI?",
          en: "What does an architect cost in Wiesbaden under HOAI?",
        },
        answer: {
          de: "Die Architektenhonorare richten sich nach den HOAI-Leistungsphasen (1 bis 9) und den anrechenbaren Baukosten. Bei anspruchsvollen Projekten in Wiesbaden (z.B. Villen oder Denkmalschutz) kalkulieren wir transparent nach Honorarzonen III bis IV. Vor Projektstart erhalten Sie eine detaillierte Honoraraufstellung.",
          en: "Architectural fees are structured per HOAI Work Phases (1 to 9) and verified construction expenditure. For demanding Wiesbaden projects (villas or listed buildings), we calculate transparently within fee zones III to IV with itemized phase pricing.",
        },
      },
      {
        question: {
          de: "Wie lange dauert eine Baugenehmigung beim Bauaufsichtsamt Wiesbaden?",
          en: "How long does a building permit take at the Wiesbaden Building Authority?",
        },
        answer: {
          de: "Im vereinfachten Genehmigungsverfahren nach § 65 HBO liegt die Bearbeitungszeit beim Bauaufsichtsamt Wiesbaden meist bei 3 bis 5 Monaten. Bei Denkmalschutzabstimmungen oder Befreiungen kann sich die Frist verlängern. Durch vollständige und prüffähige Bauanträge beschleunigen wir den Genehmigungsprozess.",
          en: "Under simplified permit procedures (§ 65 HBO), review times at the Wiesbaden Building Authority typically take 3 to 5 months. Heritage listings may require additional coordination. We minimize processing times through meticulously prepared applications.",
        },
      },
      {
        question: {
          de: "Welche Denkmalschutzauflagen gelten in Wiesbaden (Kurviertel & Villengebiete)?",
          en: "What historic preservation rules apply in Wiesbaden (Spa Quarter & Villas)?",
        },
        answer: {
          de: "In der Landeshauptstadt Wiesbaden stehen zahlreiche Straßenzüge unter Ensembleschutz nach dem Hessischen Denkmalschutzgesetz (HDSchG). Änderungen an Fenstern, Fassadenfarben, Dachformen oder Balkonen bedürfen einer denkmalrechtlichen Genehmigung. Wir stimmen diese frühzeitig mit der Unteren Denkmalschutzbehörde ab.",
          en: "Numerous historic streets in Wiesbaden are protected under statutory ensemble preservation laws. Any modifications to windows, facade pigments, roofs, or balconies require formal heritage approval, which we coordinate directly with preservation officers.",
        },
      },
      {
        question: {
          de: "Was muss bei Hangbaugrundstücken am Neroberg oder Sonnenberg beachtet werden?",
          en: "What must be considered for hillside plots on Neroberg or Sonnenberg?",
        },
        answer: {
          de: "Hanglagen erfordern frühzeitige Baugrundgutachten, statische Sicherungskonzepte (Spundwände, Bohrpfähle) und eine durchdachte Entwässerungs- und Hangwasserableitung. Shams Consult koordiniert erfahrene Geotechniker und Tragwerksplaner von Leistungsphase 1 an.",
          en: "Hillside plots require early soil surveys, structural retaining systems (bored piles, retaining walls), and certified hillside drainage planning. Shams Consult coordinates experienced geotechnical engineers from phase 1 onwards.",
        },
      },
    ],
  },

  "architektur-bad-homburg": {
    slug: "architektur-bad-homburg",
    path: "/architektur-bad-homburg",
    h1: {
      de: "Architekturbüro Bad Homburg — Villen, Neubau & Denkmalpflege",
      en: "Architectural Practice Bad Homburg — Villas, New Builds & Heritage",
    },
    eyebrow: {
      de: "Architektur & Stadtplanung Bad Homburg v. d. Höhe & Hochtaunus",
      en: "Architecture & Urban Planning Bad Homburg & Hochtaunus",
    },
    subtitle: {
      de: "Ihr renommiertes Architekturbüro für Bad Homburg vor der Höhe, Oberursel, Königstein und den gesamten Taunus. Exklusiver Villenbau, anspruchsvolle Sanierungen denkmalgeschützter Altbauten, Mehrfamilienhäuser und rechtssichere Genehmigungsverfahren beim Bauordnungsamt Bad Homburg und dem Hochtaunuskreis.",
      en: "Your premier architecture practice for Bad Homburg vor der Höhe, Oberursel, Königstein, and the Taunus region. Bespoke luxury villas, historic heritage restorations, multi-family residences, and streamlined permit procedures with Bad Homburg building authorities.",
    },
    targetKeywords: [
      "Architekt Bad Homburg",
      "Architekturbüro Bad Homburg",
      "Bauantrag Bad Homburg",
      "Architekt Taunus",
      "Architekt Oberursel",
      "Villenplanung Bad Homburg",
      "Denkmalschutz Bad Homburg Architekt",
      "Baugenehmigung Hochtaunuskreis",
    ],
    metaTitle: {
      de: "Architekturbüro Bad Homburg — Villen, Bauantrag & Taunus | Shams Consult",
      en: "Architectural Practice Bad Homburg — Villas & Permits | Shams Consult",
    },
    metaDescription: {
      de: "Architekt & Innenarchitektur in Bad Homburg & Hochtaunus (AKH Nr. 21886): Exklusive Villen, Sanierung & rechtssichere Bauanträge nach HBO (HOAI 1–9). Jetzt anfragen!",
      en: "Architecture & interior design in Bad Homburg & Hochtaunus (AKH No. 21886): Luxury villas, retrofits & statutory building permits per HBO (HOAI 1–9). Inquire now!",
    },
    heroHighlights: [
      {
        de: "Persönliche Vor-Ort-Betreuung in Bad Homburg v. d. Höhe, Oberursel, Königstein & Kronberg",
        en: "Personal on-site client management in Bad Homburg, Oberursel, Königstein & Kronberg",
      },
      {
        de: "Uneingeschränkte Bauvorlageberechtigung (AKH Hessen Nr. 21886)",
        en: "Full building permit filing authorization (AKH Hesse No. 21886)",
      },
      {
        de: "Spezialist für anspruchsvolle Villen, Kurviertel-Ensembles & § 34 BauGB",
        en: "Specialized in luxury bespoke villas, spa quarter ensembles & § 34 BauGB infill",
      },
      {
        de: "Rechtssichere Genehmigungsverfahren beim Bauordnungsamt Bad Homburg & Hochtaunuskreis",
        en: "Streamlined permit procedures with Bad Homburg & Hochtaunus Building Authorities",
      },
    ],
    localFocusTitle: {
      de: "Exklusives Bauen im Hochtaunus & Taunus-Südhängen",
      en: "Prestigious Architecture across Hochtaunus & Taunus Slopes",
    },
    localFocusDescription: {
      de: "Bad Homburg vor der Höhe und der Taunus zählen zu den anspruchsvollsten Wohn- und Investitionsstandorten Deutschlands. Von den denkmalgeschützten Villenkolonien im Hardtwald und Kaiser-Friedrich-Promenade bis hin zu skulpturalen Neubauten an den sonnigen Taunushängen: Shams Consult beherrscht das Zusammenspiel aus kommunalem Satzungsrecht, Denkmalschutz (HDSchG) und moderner Energieeffizienz nach KfW-40-Standard.",
      en: "Bad Homburg vor der Höhe and the Taunus foothills count among Germany's most demanding residential and investment locations. From listed heritage mansions in the Hardtwald quarter to sculptural contemporary villas along scenic Taunus slopes: Shams Consult balances municipal design bylaws, Hessian heritage law (HDSchG), and high-efficiency KfW 40 sustainability.",
    },
    localProjects: [
      {
        id: "stadtvilla-roedermark",
        title: {
          de: "Moderne Stadtvilla mit skulpturaler Formensprache",
          en: "Contemporary Urban Villa with Sculptural Geometry",
        },
        category: {
          de: "Exklusiver Wohnungsbau & Villen",
          en: "Exclusive Residential & Luxury Villas",
        },
        location: {
          de: "Bad Homburg / Taunus & Rhein-Main",
          en: "Bad Homburg / Taunus & Rhine-Main",
        },
        year: "2023",
        image: "/images/stadtvilla_mfa_roedermark.jpg",
        imageAlt: {
          de: "Exklusive Stadtvilla mit lichtdurchfluteten Fassaden und Gartenbezug",
          en: "Exclusive urban villa with light-filled facade and garden access",
        },
        specs: [
          {
            label: { de: "Wohnfläche", en: "Living Area" },
            value: { de: "ca. 360 m²", en: "approx. 360 m²" },
          },
          {
            label: { de: "Energiestandard", en: "Energy Standard" },
            value: { de: "KfW-Effizienzhaus 40 EE", en: "KfW Efficiency House 40 EE" },
          },
          {
            label: { de: "Bauweise", en: "Construction" },
            value: { de: "Massivbau & Natursteinfassade", en: "Solid Masonry & Natural Stone" },
          },
          {
            label: { de: "Genehmigung", en: "Permit Procedure" },
            value: { de: "HBO Baugenehmigung", en: "HBO Building Permit" },
          },
        ],
        overview: {
          de: "Repräsentatives Wohnanwesen im Taunus mit offenen Raumfolgen, raumhohen Panoramaverglasungen und maßgeschneidertem Geothermiekonzept. Perfekte architektonische Einpassung in die anspruchsvolle Umgebung.",
          en: "Prestigious Taunus residence featuring continuous fluid spaces, floor-to-ceiling panoramic glass, and a bespoke geothermal energy concept seamlessly integrated into the natural slope.",
        },
        keyFacts: [
          {
            de: "Individuelle Grundrissgestaltung mit doppelter Raumhöhe im Wohnbereich",
            en: "Bespoke spatial design with double-height ceiling in living areas",
          },
          {
            de: "Geothermie-Wärmepumpe & integrierte Photovoltaikanlage",
            en: "Geothermal heat pump & integrated rooftop solar photovoltaic system",
          },
          {
            de: "Vollständige Betreuung von Entwurf bis Endabnahme (HOAI LPH 1–9)",
            en: "Full architectural oversight from concept through final inspection (HOAI 1–9)",
          },
        ],
      },
      {
        id: "dreieich-mfh",
        title: {
          de: "Mehrfamilienhaus mit 6 Wohneinheiten & QNG",
          en: "Multi-Family Residential Building with 6 Units & QNG",
        },
        category: {
          de: "Wohnungsbau & KfW-Effizienzhaus",
          en: "Residential & KfW Efficiency House",
        },
        location: {
          de: "Hochtaunuskreis & Rhein-Main-Umfeld",
          en: "Hochtaunuskreis & Rhine-Main Vicinity",
        },
        year: "2024",
        image: "/images/dreieich_mfh_neu.jpg",
        imageAlt: {
          de: "Modernes Mehrfamilienhaus mit QNG-Nachhaltigkeitszertifizierung",
          en: "Modern multi-family residential building with QNG sustainability certificate",
        },
        specs: [
          {
            label: { de: "Wohneinheiten", en: "Residential Units" },
            value: { de: "6 Eigentumswohnungen", en: "6 Condominiums" },
          },
          {
            label: { de: "Gesamtwohnfläche", en: "Total Living Space" },
            value: { de: "ca. 490 m²", en: "approx. 490 m²" },
          },
          {
            label: { de: "Zertifizierung", en: "Certification" },
            value: { de: "QNG Nachhaltigkeitssiegel", en: "Official QNG Green Seal" },
          },
          {
            label: { de: "Bauvolumen", en: "Construction Volume" },
            value: { de: "3 Vollgeschosse + Staffel", en: "3 Storeys + Penthouse" },
          },
        ],
        overview: {
          de: "Wirtschaftlich optimierter Geschosswohnungsbau mit barrierefreien Zugängen, Aufzugsanlage und Tiefgarage. Höchste Renditesicherheit für Bauträger durch beschleunigte Genehmigung und maximale Förderzuschüsse.",
          en: "Economically optimized residential apartment building featuring step-free access, elevator, and underground parking. Maximum investment certainty through expedited permits and top-tier federal subsidies.",
        },
        keyFacts: [
          {
            de: "Rechtskonforme Genehmigung nach § 34 BauGB im Bestandsquartier",
            en: "Legally compliant permit under Section 34 BauGB in an established quarter",
          },
          {
            de: "Einsatz schadstoffarmer Baustoffe für das QNG-Nachhaltigkeitszertifikat",
            en: "Use of low-emission, eco-certified materials for federal green funding",
          },
          {
            de: "Termingerechte Fertigstellung innerhalb des garantierten Kostenrahmens",
            en: "On-schedule completion delivered strictly within the approved budget cap",
          },
        ],
      },
    ],
    hoaiPhases: [
      {
        phase: "LPH 1–2",
        title: {
          de: "Grundlagenermittlung & Vorplanung",
          en: "Site Assessment & Preliminary Design",
        },
        description: {
          de: "Prüfung des Baugrundstücks, Klärung der Satzungs- und Baurechtsvorgaben beim Bauordnungsamt Bad Homburg und erste Entwurfsskizzen.",
          en: "Site audit, assessment of zoning and preservation bylaws with Bad Homburg authorities, and preliminary architectural sketches.",
        },
        deliverables: [
          { de: "Standort- & Baurechtsanalyse", en: "Zoning & site feasibility audit" },
          { de: "Städtebaulicher Vorentwurf", en: "Preliminary design drawings" },
          { de: "Erste Kostenschätzung nach DIN 276", en: "Initial cost estimate per DIN 276" },
        ],
      },
      {
        phase: "LPH 3–4",
        title: {
          de: "Entwurfs- & Genehmigungsplanung",
          en: "Detailed Design & Permit Filing",
        },
        description: {
          de: "Vollständige Ausarbeitung des Entwurfs und Zusammenstellung aller vorgeschriebenen Bauvorlagen zur Genehmigungseingabe.",
          en: "Refinement of architectural designs and assembly of all statutory documentation for municipal permit submission.",
        },
        deliverables: [
          { de: "Prüffähiger Bauantrag nach HBO", en: "Verified building permit file per HBO" },
          { de: "Denkmal-, Satzungs- & Abstandsflächennachweise", en: "Heritage, bylaw & setback distance proofs" },
          { de: "Kostenberechnung nach DIN 276", en: "Accurate cost calculation per DIN 276" },
        ],
      },
      {
        phase: "LPH 5–7",
        title: {
          de: "Ausführungsplanung & Ausschreibung",
          en: "Working Drawings & Tendering",
        },
        description: {
          de: "Präzise Werk- und Detailpläne (M 1:50 bis 1:1), Erstellung exakter Leistungsverzeichnisse und Verhandlungsführung mit regionalen Handwerksbetrieben.",
          en: "Detailed working and joinery drawings (1:50 to 1:1), comprehensive bills of quantities, and procurement negotiations with regional contractors.",
        },
        deliverables: [
          { de: "Ausführungs- & Detailzeichnungen", en: "Full working drawings & joinery details" },
          { de: "VOB-konforme Leistungsverzeichnisse", en: "VOB-compliant tender packages" },
          { de: "Vergabevorschläge & Preisspiegel", en: "Bid comparison matrices & contract awards" },
        ],
      },
      {
        phase: "LPH 8–9",
        title: {
          de: "Bauüberwachung & Objektbetreuung",
          en: "Site Supervision & Final Acceptance",
        },
        description: {
          de: "Kontinuierliche Bauleitung vor Ort im Hochtaunus, strenge Qualitäts- und Terminkontrolle, Rechnungsprüfung und finale Bauabnahme.",
          en: "Dedicated on-site supervision in the Hochtaunus, rigorous quality and milestone control, invoice audits, and final building handover.",
        },
        deliverables: [
          { de: "Laufende Baukontrolle & Baustellenprotokolle", en: "Daily site inspection reports" },
          { de: "Rechnungsprüfung & Kostenverfolgung", en: "Invoice audits & budget tracking" },
          { de: "Mängelfreie Abnahme & Übergabedokumentation", en: "Flawless handover documentation" },
        ],
      },
    ],
    office: {
      name: {
        de: "Projektbüro Bad Homburg & Hochtaunus",
        en: "Project Office Bad Homburg & Hochtaunus",
      },
      street: "Carl-von-Noorden-Platz 5 (Zentrale) & Vor-Ort-Termine Bad Homburg",
      city: {
        de: "61348 Bad Homburg v. d. H. & 60596 Frankfurt",
        en: "61348 Bad Homburg v. d. H. & 60596 Frankfurt",
      },
      phone: "069 74 223 777",
      phoneHref: "tel:+496974223777",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40854.73307525357!2d8.5912448!3d50.2289656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd08c49e295a09%3A0x422435029b0c610!2sBad%20Homburg!5e0!3m2!1sde!2sde!4v1710000000000!5m2!1sde!2sde",
    },
    localRegulations: [
      {
        title: {
          de: "Bauordnungsamt Bad Homburg & Hochtaunuskreis",
          en: "Bad Homburg & Hochtaunus Building Authorities",
        },
        description: {
          de: "Eingespielte Abstimmung mit den Bauaufsichten der Stadt Bad Homburg am Rathausplatz sowie der Kreisbauaufsicht in Bad Homburg für zügige Genehmigungen.",
          en: "Established direct workflows with municipal planners at Rathausplatz and the district building authority for accelerated permit approvals.",
        },
      },
      {
        title: {
          de: "Gestaltungssatzungen & Ensembleschutz",
          en: "Design Bylaws & Ensemble Protection",
        },
        description: {
          de: "Souveräner Umgang mit den strengen kommunalen Gestaltungssatzungen und Ensembleschutzbestimmungen im Kurviertel und den Villenkolonien.",
          en: "Expert navigation of strict municipal aesthetic bylaws and ensemble conservation rules in the historic spa quarter and villa colonies.",
        },
      },
      {
        title: {
          de: "Hangstatik & Bodengutachten (Taunushänge)",
          en: "Taunus Hillside Statics & Geotechnics",
        },
        description: {
          de: "Fachgerechte Planung von Baugrubensicherungen, Stützmauern, Tiefgaragen und Quellwasserschutz an Taunus-Hanglagen.",
          en: "Certified engineering of pit retaining systems, slope drainage, underground garages, and spring water preservation on Taunus slopes.",
        },
      },
    ],
    districts: [
      {
        id: "hardtwald-kurviertel",
        path: "/architektur-bad-homburg-hardtwald",
        name: {
          de: "Hardtwald, Kurviertel & Tannenwaldallee",
          en: "Hardtwald, Kurviertel & Tannenwaldallee",
        },
        suburbs: {
          de: "Hardtwald, Kaiser-Friedrich-Promenade, Kurpark, Tannenwaldallee",
          en: "Hardtwald, Kaiser-Friedrich-Promenade, Kurpark, Tannenwaldallee",
        },
        badge: {
          de: "Historische Villenkolonie & Höchstpreislage",
          en: "Historic Villa Colony & Top-Tier Prestige",
        },
        summary: {
          de: "Bad Homburgs exklusivste Wohnadresse. Weitläufige Parkgrundstücke, großbürgerliche Villenarchitektur und strenge Erhaltungssatzungen.",
          en: "Bad Homburg's most prestigious residential address. Expansive parkland plots, majestic mansions, and strict preservation guidelines.",
        },
        focusAreas: [
          {
            de: "Individuelle Architektenvillen auf großzügigen Parkgrundstücken",
            en: "Custom luxury architect villas set within expansive park grounds",
          },
          {
            de: "Denkmalgerechte Sanierung historischer Jugendstil- & Historismus-Villen",
            en: "Heritage-compliant restoration of Art Nouveau & historicist villas",
          },
          {
            de: "Einhaltung lokaler Gestaltungssatzungen & Baumschutzsatzungen",
            en: "Compliance with municipal aesthetic design bylaws and tree conservation orders",
          },
        ],
        zoningHighlights: [
          {
            de: "Erhaltungssatzung der Stadt Bad Homburg",
            en: "Bad Homburg municipal preservation bylaws",
          },
          {
            de: "Ensembleschutz nach Hessischem Denkmalschutzgesetz (HDSchG)",
            en: "Ensemble conservation under Hessian Heritage Act (HDSchG)",
          },
          {
            de: "Festsetzungen historischer Fluchtlinien und Traufhöhen",
            en: "Historic building line and eaves height regulations",
          },
        ],
      },
      {
        id: "gonzenheim-kirdorf",
        path: "/architektur-bad-homburg-gonzenheim",
        name: {
          de: "Gonzenheim, Kirdorf & Dornholzhausen",
          en: "Gonzenheim, Kirdorf & Dornholzhausen",
        },
        suburbs: {
          de: "Gonzenheim, Kirdorf, Dornholzhausen, Ober-Erlenbach, Ober-Eschbach",
          en: "Gonzenheim, Kirdorf, Dornholzhausen, Ober-Erlenbach, Ober-Eschbach",
        },
        badge: {
          de: "Gehobener Wohnungsbau & Familienvillen",
          en: "Upscale Residential & Family Villas",
        },
        summary: {
          de: "Beliebte Wohnlagen mit bester Infrastruktur. Neubau moderner Einfamilienhäuser, Doppelhäuser und energieeffiziente Nachverdichtungen.",
          en: "Highly sought-after residential quarters with premier infrastructure. Modern family villas, duplexes, and energy-efficient infill homes.",
        },
        focusAreas: [
          {
            de: "Energieeffiziente Neubauten nach KfW-Effizienzhaus 40 Standard",
            en: "Energy-efficient new homes built to KfW 40 efficiency standards",
          },
          {
            de: "Wohnraumerweiterungen, Aufstockungen & moderne Anbauten",
            en: "Residential expansions, vertical storeys & contemporary extensions",
          },
          {
            de: "Nachverdichtung von Gartengrundstücken nach § 34 BauGB",
            en: "Infill development of suburban garden lots under § 34 BauGB",
          },
        ],
        zoningHighlights: [
          {
            de: "Bebauungspläne Bad Homburg Ost & Süd",
            en: "Bad Homburg East & South B-Plan zoning frameworks",
          },
          {
            de: "Abstandsflächenberechnung nach HBO",
            en: "Hesse building code setback calculations",
          },
          {
            de: "Versickerungs- & Regenwassernachweise",
            en: "Rainwater infiltration and retention engineering verifications",
          },
        ],
      },
      {
        id: "oberursel-taunus",
        path: "/architektur-oberursel",
        name: {
          de: "Oberursel (Taunus) & Vordertaunus",
          en: "Oberursel (Taunus) & Vordertaunus",
        },
        suburbs: {
          de: "Hohemark, Oberhöchstadt-Grenze, Stierstadt, Weißkirchen, Bommersheim",
          en: "Hohemark, Oberhöchstadt border, Stierstadt, Weißkirchen, Bommersheim",
        },
        badge: {
          de: "Taunushänge & Urbane Lebensqualität",
          en: "Taunus Slopes & Urban Commuter Hub",
        },
        summary: {
          de: "Direkter Frankfurter Nachbar am Fuße des Feldbergs. Hangbebauung, Mehrfamilienhäuser und anspruchsvolle Gewerbeobjekte.",
          en: "Direct Frankfurt neighbor at the foot of Mount Feldberg. Slope developments, modern apartments, and premium corporate offices.",
        },
        focusAreas: [
          {
            de: "Hangbebauung mit Panoramablick über das Rhein-Main-Gebiet",
            en: "Hillside designs commanding panoramic skyline vistas over Frankfurt",
          },
          {
            de: "Moderne Mehrfamilienhäuser mit barrierefreien Grundrissen",
            en: "Contemporary multi-family buildings with step-free floor plans",
          },
          {
            de: "Gewerbliche Büro- und Praxisräume mit flexiblen Raumkonzepten",
            en: "Commercial offices and medical practices with adaptable configurations",
          },
        ],
        zoningHighlights: [
          {
            de: "Bauaufsicht Hochtaunuskreis & Stadt Oberursel",
            en: "Hochtaunuskreis & Oberursel municipal planning offices",
          },
          {
            de: "Stellplatzsatzung und Mobilitätsnachweise",
            en: "Parking space bylaws and mobility concept approvals",
          },
          {
            de: "Baugrunduntersuchungen für Hangfundamente",
            en: "Geotechnical foundation audits for slope gradients",
          },
        ],
      },
      {
        id: "koenigstein-kronberg",
        path: "/architektur-koenigstein",
        name: {
          de: "Königstein im Taunus & Kronberg",
          en: "Königstein im Taunus & Kronberg",
        },
        suburbs: {
          de: "Falkenstein, Mammolshain, Kronberg-Schönberg, Kronberg-Altstadt",
          en: "Falkenstein, Mammolshain, Kronberg-Schönberg, Kronberg Old Town",
        },
        badge: {
          de: "Exklusive Taunus-Residenzen & Toplagen",
          en: "Exclusive Taunus Residences & Elite Locations",
        },
        summary: {
          de: "Führende Villenstandorte im Hochtaunuskreis. Höchste gestalterische Ansprüche, anspruchsvolle Topografien und diskrete Planung.",
          en: "Premier villa enclaves in Hochtaunuskreis. Highest architectural aspirations, demanding topography, and discreet execution.",
        },
        focusAreas: [
          {
            de: "Skulpturale Luxusvillen mit High-End-Ausstattung und Poolanlagen",
            en: "Sculptural luxury villas featuring high-end amenities and pool facilities",
          },
          {
            de: "Sanierung historischer Fachwerkhäuser und denkmalgeschützter Ensembles",
            en: "Restoration of historic timber-framed homes and listed monuments",
          },
          {
            de: "Statisch anspruchsvolle Fels- und Hanggründungen",
            en: "Complex rock and slope foundation structural engineering",
          },
        ],
        zoningHighlights: [
          {
            de: "Bauaufsicht Hochtaunuskreis in Bad Homburg",
            en: "Hochtaunuskreis District Building Department",
          },
          {
            de: "Natur- und Landschaftsschutzgebietsauflagen",
            en: "Nature and landscape protection statutory requirements",
          },
          {
            de: "Bebauungspläne Falkenstein & Kronberg-Süd",
            en: "Falkenstein & Kronberg South municipal zoning frameworks",
          },
        ],
      },
    ],
    faqs: [
      {
        question: {
          de: "Was kostet ein Architekt für einen Villenneubau oder eine Sanierung in Bad Homburg?",
          en: "What does an architect cost for a villa build or renovation in Bad Homburg?",
        },
        answer: {
          de: "Die Honorare richten sich transparent nach der HOAI und den anrechenbaren Baukosten. Bei anspruchsvollen Wohn- und Villenbauten in Bad Homburg und im Taunus kalkulieren wir in den Honorarzonen III bis IV. Sie erhalten vor Beginn ein klares, nach Leistungsphasen aufgeschlüsseltes Honorarangebot.",
          en: "Architectural fees are structured transparently per HOAI and construction expenditure. For luxury residential and villa projects in Bad Homburg and the Taunus, we calculate within fee zones III to IV with itemized phase pricing before kickoff.",
        },
      },
      {
        question: {
          de: "Wie läuft das Baugenehmigungsverfahren beim Bauordnungsamt Bad Homburg ab?",
          en: "How does the building permit procedure work at Bad Homburg Building Authority?",
        },
        answer: {
          de: "Je nach Projekt greift das vereinfachte Genehmigungsverfahren nach § 65 HBO oder das Vollverfahren. Die Bearbeitungszeit liegt in der Regel zwischen 3 und 5 Monaten. Als staatlich anerkannte Architekten (AKH Hessen Nr. 21886) mit uneingeschränkter Bauvorlageberechtigung reichen wir vollständige, prüffähige Bauanträge ein, um Rückfragen und Verzögerungen zu minimieren.",
          en: "Depending on scale, the simplified procedure under § 65 HBO or full procedure applies. Typical review takes 3 to 5 months. As state-registered architects (AKH Hesse No. 21886) with unlimited permit submission rights, we deliver complete, verified documentation to prevent bureaucratic delays.",
        },
      },
      {
        question: {
          de: "Welche Denkmalschutz- und Gestaltungsvorgaben gelten im Kurviertel & Hardtwald?",
          en: "What heritage and design regulations apply in the Kurviertel & Hardtwald?",
        },
        answer: {
          de: "Im Hardtwald und im Kurviertel gelten kommunale Erhaltungssatzungen sowie Ensembleschutz nach dem Hessischen Denkmalschutzgesetz (HDSchG). Änderungen an Kubatur, Fenstern, Dachlandschaften und Grundstückseinfriedungen erfordern besondere Abstimmungen. Wir stimmen alle Details im Vorfeld mit den Denkmalbehörden ab.",
          en: "The Hardtwald and Kurviertel are governed by municipal preservation bylaws and ensemble protection under Hessian law (HDSchG). Modifications to massing, windows, roofs, and boundary fences require specific approvals, which we coordinate directly with preservation officers.",
        },
      },
      {
        question: {
          de: "Was ist bei Hangbaugrundstücken und Bodengutachten im Taunus zu beachten?",
          en: "What must be considered for Taunus hillside plots and soil surveys?",
        },
        answer: {
          de: "Taunushanglagen zeichnen sich oft durch inhomogene Felsformationen und schichtweise auftretendes Schichtenwasser aus. Frühzeitige Baugrundgutachten, eine fundierte Tragwerksplanung für Stützwände und eine professionelle Hangentwässerung sind unverzichtbar, um spätere Bauschäden zu vermeiden.",
          en: "Taunus hillside plots frequently feature complex bedrock formations and strata groundwater. Early geotechnical soil investigations, structural retaining engineering, and dedicated slope drainage systems are essential to prevent structural defects.",
        },
      },
    ],
  },

  "architektur-darmstadt": {
    slug: "architektur-darmstadt",
    path: "/architektur-darmstadt",
    h1: {
      de: "Architekturbüro Darmstadt — Wissenschaftsstadt & Südhessen",
      en: "Architectural Practice Darmstadt — Science City & South Hesse",
    },
    eyebrow: {
      de: "Architektur & Stadtplanung Darmstadt & Kreis Darmstadt-Dieburg",
      en: "Architecture & Urban Planning Darmstadt & Darmstadt-Dieburg",
    },
    subtitle: {
      de: "Ihr Architekturbüro für Darmstadt, Weiterstadt, Griesheim, Pfungstadt und die hessische Bergstraße. Moderner Wohnungsbau, energieeffiziente KfW-40-Häuser, denkmalgerechte Sanierungen im Jugendstil-Umfeld und rechtssichere Bauanträge beim Bauaufsichtsamt Darmstadt.",
      en: "Your architecture practice for Darmstadt, Weiterstadt, Griesheim, Pfungstadt, and the Hessian Bergstraße. Modern residential builds, energy-efficient KfW 40 homes, heritage restorations, and streamlined building permits with Darmstadt municipal authorities.",
    },
    targetKeywords: [
      "Architekt Darmstadt",
      "Architekturbüro Darmstadt",
      "Bauantrag Darmstadt",
      "Architekt Südhessen",
      "Baugenehmigung Darmstadt",
      "KfW 40 Architekt Darmstadt",
      "Denkmalschutz Architekt Darmstadt",
      "Mehrfamilienhaus Darmstadt planen",
    ],
    metaTitle: {
      de: "Architekturbüro Darmstadt — Bauantrag, Baurecht & Neubau | Shams Consult",
      en: "Architectural Practice Darmstadt — Permits, Zoning & Design | Shams Consult",
    },
    metaDescription: {
      de: "Architekt in Darmstadt & Südhessen (AKH Hessen Nr. 21886): Rechtssichere Bauanträge, Bauvoranfragen beim Bauaufsichtsamt & KfW-40 Neubau. Jetzt beraten lassen!",
      en: "Registered architect for Darmstadt & South Hesse (AKH Hesse No. 21886): Streamlined building permits, zoning inquiries & KfW 40 housing. Book a consultation.",
    },
    heroHighlights: [
      {
        de: "Persönliche Projektbetreuung in Darmstadt, Weiterstadt, Griesheim & an der Bergstraße",
        en: "Personal on-site project management in Darmstadt, Weiterstadt, Griesheim & Bergstraße",
      },
      {
        de: "Uneingeschränkte Bauvorlageberechtigung (AKH Hessen Nr. 21886)",
        en: "Full building permit filing authorization (AKH Hesse No. 21886)",
      },
      {
        de: "Expertise in nachhaltigem Wohnungsbau, QNG & KfW-40-Effizienzhäusern",
        en: "Specialized in sustainable multi-family housing, QNG & KfW 40 efficiency standards",
      },
      {
        de: "Rechtssichere Genehmigungsverfahren beim Bauaufsichtsamt Darmstadt & Kreis Dieburg",
        en: "Streamlined permit procedures with Darmstadt & Darmstadt-Dieburg Building Authorities",
      },
    ],
    localFocusTitle: {
      de: "Bauen in der Wissenschaftsstadt Darmstadt & Südhessen",
      en: "Building in Science City Darmstadt & South Hesse",
    },
    localFocusDescription: {
      de: "Darmstadt verbindet das UNESCO-Welterbe der Mathildenhöhe mit dynamischer Innovationskraft rund um Forschung und Technologie. Ob Geschosswohnungsbau und Nachverdichtung nach § 34 BauGB in Bessungen und Eberstadt oder energieeffiziente Neubauten in Weiterstadt und Griesheim: Shams Consult garantiert architektonische Exzellenz, höchste Energieeffizienz und zügige Genehmigungsverfahren.",
      en: "Darmstadt blends the UNESCO World Heritage of Mathildenhöhe with dynamic innovation in research and technology. Whether multi-family housing and infill under § 34 BauGB in Bessungen and Eberstadt or energy-efficient family homes in Weiterstadt and Griesheim: Shams Consult guarantees design excellence, top energy performance, and expedited municipal permits.",
    },
    localProjects: [
      {
        id: "dreieich-mfh",
        title: {
          de: "Mehrfamilienhaus mit 6 Wohneinheiten & QNG",
          en: "Multi-Family Residential Building with 6 Units & QNG",
        },
        category: {
          de: "Wohnungsbau & KfW-Effizienzhaus",
          en: "Residential & KfW Efficiency House",
        },
        location: {
          de: "Darmstadt & Südhessen",
          en: "Darmstadt & South Hesse",
        },
        year: "2024",
        image: "/images/dreieich_mfh_neu.jpg",
        imageAlt: {
          de: "Modernes Mehrfamilienhaus mit QNG-Nachhaltigkeitszertifizierung",
          en: "Modern multi-family residential building with QNG sustainability certificate",
        },
        specs: [
          {
            label: { de: "Wohneinheiten", en: "Residential Units" },
            value: { de: "6 Eigentumswohnungen", en: "6 Condominiums" },
          },
          {
            label: { de: "Gesamtwohnfläche", en: "Total Living Space" },
            value: { de: "ca. 490 m²", en: "approx. 490 m²" },
          },
          {
            label: { de: "Zertifizierung", en: "Certification" },
            value: { de: "QNG Nachhaltigkeitssiegel", en: "Official QNG Green Seal" },
          },
          {
            label: { de: "Bauvolumen", en: "Construction Volume" },
            value: { de: "3 Vollgeschosse + Staffel", en: "3 Storeys + Penthouse" },
          },
        ],
        overview: {
          de: "Wirtschaftlich optimierter Geschosswohnungsbau mit barrierefreien Grundrissen, Aufzug und Tiefgarage. Schnelle Baugenehmigung nach § 34 BauGB und maximale Förderfähigkeit über KfW- und QNG-Standards.",
          en: "Economically optimized residential apartment scheme with barrier-free floor plans, elevator, and underground parking. Rapid permits under § 34 BauGB with maximum federal subsidies.",
        },
        keyFacts: [
          {
            de: "Rechtskonforme Genehmigung nach § 34 BauGB im Bestandsquartier",
            en: "Statutory permit under Section 34 BauGB in an established quarter",
          },
          {
            de: "Einsatz schadstoffarmer Baustoffe für das QNG-Nachhaltigkeitszertifikat",
            en: "Use of low-emission, eco-certified materials for federal green funding",
          },
          {
            de: "Termingerechte Fertigstellung innerhalb des garantierten Kostenrahmens",
            en: "On-schedule completion delivered strictly within the approved budget cap",
          },
        ],
      },
      {
        id: "stadtvilla-roedermark",
        title: {
          de: "Moderne Stadtvilla mit skulpturaler Formensprache",
          en: "Contemporary Urban Villa with Sculptural Geometry",
        },
        category: {
          de: "Exklusiver Wohnungsbau & Villen",
          en: "Exclusive Residential & Luxury Villas",
        },
        location: {
          de: "Darmstadt-Eberstadt & Bergstraße",
          en: "Darmstadt-Eberstadt & Bergstraße",
        },
        year: "2023",
        image: "/images/stadtvilla_mfa_roedermark.jpg",
        imageAlt: {
          de: "Exklusive Stadtvilla mit lichtdurchfluteten Fassaden und Gartenbezug",
          en: "Exclusive urban villa with light-filled facade and garden access",
        },
        specs: [
          {
            label: { de: "Wohnfläche", en: "Living Area" },
            value: { de: "ca. 340 m²", en: "approx. 340 m²" },
          },
          {
            label: { de: "Energiestandard", en: "Energy Standard" },
            value: { de: "KfW-Effizienzhaus 40", en: "KfW Efficiency House 40" },
          },
          {
            label: { de: "Bauweise", en: "Construction" },
            value: { de: "Massivbau & Glasfassade", en: "Solid Masonry & Glazing" },
          },
          {
            label: { de: "Genehmigung", en: "Permit Procedure" },
            value: { de: "HBO Baugenehmigung", en: "HBO Building Permit" },
          },
        ],
        overview: {
          de: "Repräsentatives Wohnanwesen im südhessischen Raum mit offenen Grundrissen, großflächigen Verglasungen und maßgeschneidertem Geothermie-Wärmepumpen-Konzept.",
          en: "Prestigious residence in South Hesse with open-plan layouts, expansive glazing, and a customized geothermal heat pump system.",
        },
        keyFacts: [
          {
            de: "Individuelle Grundrissgestaltung mit doppelter Raumhöhe im Wohnbereich",
            en: "Bespoke spatial design with double-height ceiling in living areas",
          },
          {
            de: "Geothermie-Wärmepumpe & integrierte Photovoltaikanlage",
            en: "Geothermal heat pump & integrated rooftop solar photovoltaic system",
          },
          {
            de: "Vollständige Betreuung von Entwurf bis Endabnahme (HOAI LPH 1–9)",
            en: "Full architectural oversight from concept through final inspection (HOAI 1–9)",
          },
        ],
      },
    ],
    hoaiPhases: [
      {
        phase: "LPH 1–2",
        title: {
          de: "Grundlagenermittlung & Vorplanung",
          en: "Site Assessment & Preliminary Design",
        },
        description: {
          de: "Standortprüfung in Darmstadt und Südhessen, Klärung des Baurechts beim Bauaufsichtsamt und erste Konzeptentwürfe.",
          en: "Site analysis in Darmstadt and South Hesse, zoning clarification with the building authority, and initial concept sketches.",
        },
        deliverables: [
          { de: "Standort- & Baurechtsanalyse", en: "Zoning & site feasibility audit" },
          { de: "Städtebaulicher Vorentwurf", en: "Preliminary design drawings" },
          { de: "Erste Kostenschätzung nach DIN 276", en: "Initial cost estimate per DIN 276" },
        ],
      },
      {
        phase: "LPH 3–4",
        title: {
          de: "Entwurfs- & Genehmigungsplanung",
          en: "Detailed Design & Permit Filing",
        },
        description: {
          de: "Detaillierte Entwurfsausarbeitung und Zusammenstellung aller prüffähigen Bauvorlagen zur Genehmigung nach HBO.",
          en: "Detailed design blueprints and compilation of complete permit documentation under Hessian building regulations.",
        },
        deliverables: [
          { de: "Prüffähiger Bauantrag nach HBO", en: "Verified building permit file per HBO" },
          { de: "Abstandsflächen- & Entwässerungsnachweise", en: "Setback & municipal drainage proofs" },
          { de: "Kostenberechnung nach DIN 276", en: "Accurate cost calculation per DIN 276" },
        ],
      },
      {
        phase: "LPH 5–7",
        title: {
          de: "Ausführungsplanung & Ausschreibung",
          en: "Working Drawings & Tendering",
        },
        description: {
          de: "Präzise Werk- und Detailzeichnungen, detaillierte Leistungsverzeichnisse und Preisverhandlungen mit regionalen Handwerksbetrieben.",
          en: "Detailed construction drawings, precise tender packages, and contractor negotiations across the Darmstadt region.",
        },
        deliverables: [
          { de: "Ausführungs- & Detailzeichnungen", en: "Full working drawings & joinery details" },
          { de: "VOB-konforme Leistungsverzeichnisse", en: "VOB-compliant tender packages" },
          { de: "Vergabevorschläge & Preisspiegel", en: "Bid comparison matrices & contract awards" },
        ],
      },
      {
        phase: "LPH 8–9",
        title: {
          de: "Bauüberwachung & Objektbetreuung",
          en: "Site Supervision & Final Acceptance",
        },
        description: {
          de: "Engmaschige Bauleitung vor Ort in Darmstadt und Umgebung, Qualitätsprüfung, Terminüberwachung und reibungslose Übergabe.",
          en: "Stringent on-site supervision across Darmstadt, milestone management, invoice audits, and final building handover.",
        },
        deliverables: [
          { de: "Laufende Baukontrolle & Baustellenprotokolle", en: "Daily site inspection reports" },
          { de: "Rechnungsprüfung & Kostenverfolgung", en: "Invoice audits & budget tracking" },
          { de: "Mängelfreie Abnahme & Übergabedokumentation", en: "Flawless handover documentation" },
        ],
      },
    ],
    office: {
      name: {
        de: "Projektbüro Darmstadt & Südhessen",
        en: "Project Office Darmstadt & South Hesse",
      },
      street: "Carl-Zeiss-Str. 43 (Standort Süd) & Vor-Ort-Termine Darmstadt",
      city: {
        de: "64283 Darmstadt & 63322 Rödermark",
        en: "64283 Darmstadt & 63322 Rödermark",
      },
      phone: "060 74 239 87 82",
      phoneHref: "tel:+4960742398782",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41112.51860086968!2d8.6186982!3d49.8728253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd7076615b3c29%3A0x422435029b0c5f0!2sDarmstadt!5e0!3m2!1sde!2sde!4v1710000000000!5m2!1sde!2sde",
    },
    localRegulations: [
      {
        title: {
          de: "Bauaufsichtsamt Wissenschaftsstadt Darmstadt",
          en: "Darmstadt Municipal Building Department",
        },
        description: {
          de: "Direkte Abstimmungsprozesse mit der Bauaufsicht am Bessunger Tor für zügige Genehmigungen im vereinfachten und regulären Verfahren.",
          en: "Direct workflows with municipal planners at Bessunger Tor for expedited permit approvals in full and simplified procedures.",
        },
      },
      {
        title: {
          de: "Denkmalschutz & Ensembleschutz (Mathildenhöhe / Paulusviertel)",
          en: "Heritage Conservation (Mathildenhöhe / Paulusviertel)",
        },
        description: {
          de: "Fundierte Expertise bei denkmalgeschützten Gebäuden, Jugendstil-Villen und der Einhaltung lokaler Gestaltungssatzungen.",
          en: "Deep expertise in heritage buildings, Art Nouveau villas, and adherence to municipal aesthetic guidelines.",
        },
      },
      {
        title: {
          de: "Nachhaltigkeitsstandards (KfW 40 / QNG)",
          en: "Sustainability Standards (KfW 40 / QNG)",
        },
        description: {
          de: "Optimierte energetische Fachplanung für zinsgünstige Förderdarlehen der KfW und das Qualitätssiegel Nachhaltiges Gebäude (QNG).",
          en: "Optimized technical planning for subsidized federal loans and QNG green building certification.",
        },
      },
    ],
    districts: [
      {
        id: "mathildenhoehe-paulusviertel",
        path: "/architektur-darmstadt-mathildenhoehe",
        name: {
          de: "Mathildenhöhe, Paulusviertel & Woogsviertel",
          en: "Mathildenhöhe, Paulusviertel & Woogsviertel",
        },
        suburbs: {
          de: "Mathildenhöhe, Paulusviertel, Woogsviertel, Steinberg",
          en: "Mathildenhöhe, Paulusviertel, Woogsviertel, Steinberg",
        },
        badge: {
          de: "Jugendstil-Erbe & Historische Villen",
          en: "Art Nouveau Heritage & Historic Villas",
        },
        summary: {
          de: "Darmstadts architektonisches Aushängeschild. Denkmalgeschützte Bausubstanz, großbürgerliche Villen und strenge Ensembleschutzauflagen.",
          en: "Darmstadt's architectural flagship. Listed heritage monuments, grand residential villas, and strict ensemble conservation bylaws.",
        },
        focusAreas: [
          {
            de: "Denkmalgerechte Sanierung historischer Jugendstil- und Gründerzeitvillen",
            en: "Heritage-compliant restoration of historic Art Nouveau and Wilhelminian villas",
          },
          {
            de: "Behutsame energetische Modernisierung mit GEG-Ausnahmeregelungen",
            en: "Sensitive energy retrofits with Building Energy Act heritage exemptions",
          },
          {
            de: "Exklusiver Innenausbau und Dachgeschossausbauten",
            en: "High-end interior architecture and attic space conversions",
          },
        ],
        zoningHighlights: [
          {
            de: "Ensembleschutz nach Hessischem Denkmalschutzgesetz (HDSchG)",
            en: "Ensemble conservation under Hessian Heritage Act (HDSchG)",
          },
          {
            de: "Gestaltungssatzung der Stadt Darmstadt",
            en: "City of Darmstadt aesthetic design bylaws",
          },
          {
            de: "Abstimmung mit der Unteren Denkmalschutzbehörde",
            en: "Direct alignment with municipal heritage preservation officers",
          },
        ],
      },
      {
        id: "bessungen-eberstadt",
        path: "/architektur-darmstadt-bessungen",
        name: {
          de: "Bessungen, Eberstadt & Heimstättensiedlung",
          en: "Bessungen, Eberstadt & Heimstättensiedlung",
        },
        suburbs: {
          de: "Bessungen, Eberstadt, Villengebiet Eberstadt-Süd, Heimstättensiedlung",
          en: "Bessungen, Eberstadt, Eberstadt South Villa Colony, Heimstättensiedlung",
        },
        badge: {
          de: "Urbane Lebensqualität & Villenlagen",
          en: "Urban Quality of Life & Villa Enclaves",
        },
        summary: {
          de: "Gefragte Wohnquartiere im Süden Darmstadts. Mischung aus urbanen Mehrfamilienhäusern, modernen Stadtvillen und idyllischen Waldrandlagen.",
          en: "Highly sought-after residential enclaves in southern Darmstadt. Mix of urban multi-family buildings, modern villas, and forest-edge properties.",
        },
        focusAreas: [
          {
            de: "Individuelle Architektenvillen und moderne Stadthäuser",
            en: "Custom architect villas and contemporary townhouses",
          },
          {
            de: "Mehrfamilienhaus-Neubauten und Nachverdichtungen nach § 34 BauGB",
            en: "Multi-family apartment builds and infill schemes under § 34 BauGB",
          },
          {
            de: "KfW-Effizienzhäuser mit modernen Geothermie- und PV-Systemen",
            en: "KfW efficiency homes featuring geothermal heat pumps and solar PV",
          },
        ],
        zoningHighlights: [
          {
            de: "Bebauungspläne Bessungen Süd & Eberstadt",
            en: "Bessungen South & Eberstadt B-Plan zoning frameworks",
          },
          {
            de: "Baumschutzsatzung der Wissenschaftsstadt Darmstadt",
            en: "Tree protection ordinance of the City of Darmstadt",
          },
          {
            de: "Abstandsflächenprüfung nach HBO",
            en: "Hesse building code setback evaluations",
          },
        ],
      },
      {
        id: "arheilgen-kranichstein",
        path: "/architektur-darmstadt-arheilgen",
        name: {
          de: "Arheilgen, Kranichstein & Martinsviertel",
          en: "Arheilgen, Kranichstein & Martinsviertel",
        },
        suburbs: {
          de: "Arheilgen, Kranichstein, Martinsviertel, Johannesviertel",
          en: "Arheilgen, Kranichstein, Martinsviertel, Johannesviertel",
        },
        badge: {
          de: "Familienwohnen & Urbane Nachverdichtung",
          en: "Family Living & Urban Infill",
        },
        summary: {
          de: "Lebendige Stadtteile mit starkem Zuzug. Neubau von Doppel- und Reihenhäusern, Aufstockungen und energieeffiziente Modernisierungen.",
          en: "Vibrant quarters experiencing steady growth. New semi-detached homes, vertical extensions, and energy-efficient retrofits.",
        },
        focusAreas: [
          {
            de: "Energieeffiziente Ein- und Zweifamilienhäuser nach KfW 40",
            en: "Energy-efficient single and two-family homes built to KfW 40",
          },
          {
            de: "Wohnraumerweiterungen durch Aufstockung und Anbauten",
            en: "Residential expansions via vertical storeys and extensions",
          },
          {
            de: "Barrierefreie Wohnkonzepte für Mehrgenerationenwohnen",
            en: "Barrier-free multi-generational living configurations",
          },
        ],
        zoningHighlights: [
          {
            de: "Bebauungspläne Arheilgen & Kranichstein",
            en: "Arheilgen & Kranichstein municipal master plans",
          },
          {
            de: "Einfügungsgebot (§ 34 BauGB) im Martinsviertel",
            en: "Contextual insertion requirement (§ 34 BauGB) in Martinsviertel",
          },
          {
            de: "Versickerungs- und Retentionsauflagen",
            en: "Rainwater infiltration and retention engineering verifications",
          },
        ],
      },
      {
        id: "weiterstadt-griesheim-bergstrasse",
        path: "/architektur-darmstadt-griesheim-weiterstadt",
        name: {
          de: "Weiterstadt, Griesheim & Bergstraße",
          en: "Weiterstadt, Griesheim & Bergstraße",
        },
        suburbs: {
          de: "Weiterstadt, Griesheim, Pfungstadt, Seeheim-Jugenheim, Bickenbach",
          en: "Weiterstadt, Griesheim, Pfungstadt, Seeheim-Jugenheim, Bickenbach",
        },
        badge: {
          de: "Südhessischer Wachstumsraum",
          en: "South Hesse Growth Corridor",
        },
        summary: {
          de: "Dynamische Kommunen entlang der A5/A67 und der Bergstraße. Attraktive Gewerbestandorte und hochwertige Wohnbauprojekte im Speckgürtel.",
          en: "Dynamic municipalities along highway corridors and the Bergstraße. Prime commercial logistics and upscale suburban residential schemes.",
        },
        focusAreas: [
          {
            de: "Neubau moderner Wohnanlagen und Eigentumswohnungen",
            en: "Construction of contemporary residential complexes and condominiums",
          },
          {
            de: "Gewerbliche Hallen, Bürogebäude und Praxisräume",
            en: "Commercial halls, corporate headquarters, and medical suites",
          },
          {
            de: "Bebauungsplanverfahren und städtebauliche Machbarkeitsprüfungen",
            en: "Zoning plan procedures and master planning feasibility studies",
          },
        ],
        zoningHighlights: [
          {
            de: "Bauaufsicht Landkreis Darmstadt-Dieburg in Dieburg",
            en: "Darmstadt-Dieburg District Building Authority in Dieburg",
          },
          {
            de: "Gewerbegebietsfestsetzungen und Lärmschutzgutachten",
            en: "Industrial zoning designations and acoustic engineering reports",
          },
          {
            de: "Klimaschutzkonzepte der Kommunen",
            en: "Municipal climate protection requirements and green roof policies",
          },
        ],
      },
    ],
    faqs: [
      {
        question: {
          de: "Was kostet ein Architekt in Darmstadt nach der HOAI?",
          en: "What does an architect cost in Darmstadt under HOAI?",
        },
        answer: {
          de: "Die Honorare richten sich transparent nach den HOAI-Leistungsphasen (1 bis 9) und den anrechenbaren Baukosten. Für Wohnungsbauten und Sanierungen in Darmstadt kalkulieren wir fair in den Honorarzonen III bis IV. Sie erhalten vor Projektbeginn ein aufgeschlüsseltes Angebot.",
          en: "Fees are structured transparently per HOAI Work Phases (1 to 9) and net construction costs. For residential developments and retrofits in Darmstadt, we calculate fairly within fee zones III to IV with itemized phase pricing.",
        },
      },
      {
        question: {
          de: "Wie lange dauert ein Bauantrag beim Bauaufsichtsamt Darmstadt?",
          en: "How long does a building permit take at Darmstadt Building Authority?",
        },
        answer: {
          de: "Im vereinfachten Genehmigungsverfahren nach § 65 HBO liegt die durchschnittliche Bearbeitungszeit beim Bauaufsichtsamt Darmstadt bei 3 bis 5 Monaten. Als bauvorlageberechtigte Architekten reichen wir lückenlose und prüffähige Unterlagen ein, um den Genehmigungsprozess zu beschleunigen.",
          en: "Under simplified permit procedures (§ 65 HBO), review times at the Darmstadt Building Department typically take 3 to 5 months. As registered architects, we submit comprehensive, verified files to eliminate delays.",
        },
      },
      {
        question: {
          de: "Welche Denkmalschutzauflagen gelten rund um die Mathildenhöhe & im Paulusviertel?",
          en: "What heritage rules apply around Mathildenhöhe & in Paulusviertel?",
        },
        answer: {
          de: "Das Paulusviertel und die Bereiche um die Mathildenhöhe unterliegen strengem Ensembleschutz. Alle sichtbaren Änderungen an Fassaden, Fenstern, Zäunen und Dächern erfordern eine denkmalrechtliche Genehmigung. Wir stimmen diese frühzeitig mit der Unteren Denkmalschutzbehörde Darmstadt ab.",
          en: "Paulusviertel and the Mathildenhöhe area are subject to strict ensemble protection. Any exterior modifications to facades, fenestration, fences, or roofs require formal heritage consent, which we negotiate directly with preservation officers.",
        },
      },
      {
        question: {
          de: "Welche Förderungen gibt es für KfW-40-Häuser und QNG-Gebäude in Südhessen?",
          en: "What subsidies are available for KfW 40 and QNG buildings in South Hesse?",
        },
        answer: {
          de: "Über das KfW-Programm 'Klimafreundlicher Neubau' (KFN) können Bauherren und Investoren zinsverbilligte Kredite von bis zu 150.000 € pro Wohneinheit erhalten, wenn das QNG-Siegel erreicht wird. Wir planen die Gebäude von Beginn an konform mit diesen Zertifizierungsanforderungen.",
          en: "Under the federal KfW 'Climate-Friendly New Construction' programme (KFN), developers can secure low-interest loans up to €150,000 per residential unit when certified with the QNG green seal, which we integrate from initial concept.",
        },
      },
      {
        question: {
          de: "Wie läuft eine Bauvoranfrage beim Bauaufsichtsamt Darmstadt ab und wann lohnt sie sich?",
          en: "How does a preliminary building inquiry work in Darmstadt and when is it worthwhile?",
        },
        answer: {
          de: "Eine Bauvoranfrage (Bauvorbescheid nach § 66 HBO) empfiehlt sich in Darmstadt besonders dann, wenn die Bebaubarkeit eines Grundstücks im Innenbereich nach § 34 BauGB unklar ist, Befreiungen von einem Bebauungsplan erforderlich sind oder eine Nutzungsänderung geprüft werden soll. Das Bauaufsichtsamt Darmstadt bindet sich mit dem Bauvorbescheid für drei Jahre an die getroffene Entscheidung. Shams Consult erstellt die erforderlichen planungsrechtlichen Unterlagen und stimmt diese vorab gezielt mit den Behördenvertretern ab.",
          en: "A preliminary building application (Bauvorbescheid per § 66 HBO) is highly recommended in Darmstadt whenever land development rights under § 34 BauGB are ambiguous, zoning exemptions are sought, or a change of use must be verified. The Darmstadt Building Authority's formal notice remains legally binding for three years. Shams Consult compiles all required planning documents and aligns directly with municipal officers.",
        },
      },
      {
        question: {
          de: "Unterstützt Shams Consult bei Nutzungsänderungen und Baurechtsprüfungen in Darmstadt?",
          en: "Does Shams Consult assist with changes of use and building code audits in Darmstadt?",
        },
        answer: {
          de: "Ja. Nutzungsänderungen (z. B. von Gewerbe- in Wohnraum, Praxisräume oder Gastronomie) erfordern nach der Hessischen Bauordnung (HBO) eine formelle Genehmigung. Wir führen die planungsrechtliche Prüfung durch, weisen Stellplätze sowie Brandschutz nach und begleiten Sie bis zur behördlichen Bauabnahme und Freigabe.",
          en: "Yes. Changes of use (e.g., converting commercial space to residential units, medical practices, or hospitality) require formal municipal approval under Hessian building regulations (HBO). We assess planning compliance, verify parking and fire safety requirements, and guide you through final building inspection and occupancy sign-off.",
        },
      },
    ],
  },

  "architektur-hanau": {
    slug: "architektur-hanau",
    path: "/architektur-hanau",
    h1: {
      de: "Architekturbüro Hanau — Brüder-Grimm-Stadt & Main-Kinzig",
      en: "Architectural Practice Hanau — Brothers Grimm City & Main-Kinzig",
    },
    eyebrow: {
      de: "Architektur & Stadtplanung Hanau & Main-Kinzig-Kreis",
      en: "Architecture & Urban Planning Hanau & Main-Kinzig District",
    },
    subtitle: {
      de: "Ihr erfahrenes Architekturbüro für Hanau, Maintal, Bruchköbel, Großauheim und den Main-Kinzig-Kreis. Zeitgemäßer Wohnungsbau, gewerbliche Projektentwicklung, Konversion ehemaliger Kasernen- und Gewerbeflächen sowie zügige Baugenehmigungen bei der Bauaufsicht Hanau.",
      en: "Your experienced architecture practice for Hanau, Maintal, Bruchköbel, Großauheim, and the Main-Kinzig district. Contemporary residential design, commercial schemes, brownfield conversions, and streamlined permits with Hanau Building Department.",
    },
    targetKeywords: [
      "Architekt Hanau",
      "Architekturbüro Hanau",
      "Bauantrag Hanau",
      "Architekt Main-Kinzig-Kreis",
      "Baugenehmigung Bauaufsicht Hanau",
      "Architekt Maintal Bruchköbel",
      "Mehrfamilienhaus Hanau planen",
      "Projektentwicklung Hanau",
    ],
    metaTitle: {
      de: "Architekturbüro Hanau — Baugenehmigung, Bauantrag & Neubau | Shams Consult",
      en: "Architectural Practice Hanau — Permits, Infill & Design | Shams Consult",
    },
    metaDescription: {
      de: "Staatlich anerkannter Architekt in Hanau (AKH Nr. 21886): Rechtssichere Bauanträge nach HBO, Neubau & Sanierung. Schnelle behördliche Abwicklung. Jetzt anfragen!",
      en: "State-recognized architect in Hanau (AKH Hesse No. 21886): Building permits per HBO, residential new builds & conversions. Accelerated municipal approvals. Inquire now!",
    },
    heroHighlights: [
      {
        de: "Direkte Betreuung vor Ort in Hanau, Maintal, Bruchköbel & Main-Kinzig-Kreis",
        en: "Direct on-site management in Hanau, Maintal, Bruchköbel & Main-Kinzig",
      },
      {
        de: "Uneingeschränkte Bauvorlageberechtigung (AKH Hessen Nr. 21886)",
        en: "Full building permit filing authorization (AKH Hesse No. 21886)",
      },
      {
        de: "Erfahrung in Konversionsflächen, Gewerbebau & städtebaulicher Planung",
        en: "Proven expertise in urban brownfield conversions, commercial and master planning",
      },
      {
        de: "Verlässliche Genehmigungsverfahren bei der Bauaufsicht Stadt Hanau",
        en: "Streamlined permit approvals with the City of Hanau Building Authority",
      },
    ],
    localFocusTitle: {
      de: "Stadtentwicklung & Wohnungsbau in Hessens jüngster Großstadt",
      en: "Urban Development & Housing in Hesse's Newest Metropolitan City",
    },
    localFocusDescription: {
      de: "Hanau hat sich als wachsende Großstadt und wirtschaftlicher Taktgeber im östlichen Rhein-Main-Gebiet etabliert. Von innovativen Konversionsprojekten (z.B. Pioneer Park) über urbane Wohnanlagen im Lamboyviertel bis hin zu exklusiven Villen in Wilhelmsbad: Shams Consult begleitet Bauherren, Bauträger und Unternehmen mit präziser architektonischer Planung und fundierter Kenntnis des hessischen Baurechts.",
      en: "Hanau has established itself as a rapidly expanding metropolitan city and economic powerhouse in eastern Rhine-Main. From landmark conversion schemes (Pioneer Park) to urban multi-family housing in Lamboy and bespoke villas in Wilhelmsbad: Shams Consult assists private clients, developers, and corporations with meticulous design and deep command of Hessian building law.",
    },
    localProjects: [
      {
        id: "dreieich-mfh",
        title: {
          de: "Mehrfamilienhaus mit 6 Wohneinheiten & QNG",
          en: "Multi-Family Residential Building with 6 Units & QNG",
        },
        category: {
          de: "Wohnungsbau & KfW-Effizienzhaus",
          en: "Residential & KfW Efficiency House",
        },
        location: {
          de: "Hanau & Main-Kinzig-Kreis",
          en: "Hanau & Main-Kinzig District",
        },
        year: "2024",
        image: "/images/dreieich_mfh_neu.jpg",
        imageAlt: {
          de: "Modernes Mehrfamilienhaus mit QNG-Nachhaltigkeitszertifizierung",
          en: "Modern multi-family residential building with QNG sustainability certificate",
        },
        specs: [
          {
            label: { de: "Wohneinheiten", en: "Residential Units" },
            value: { de: "6 Eigentumswohnungen", en: "6 Condominiums" },
          },
          {
            label: { de: "Gesamtwohnfläche", en: "Total Living Space" },
            value: { de: "ca. 490 m²", en: "approx. 490 m²" },
          },
          {
            label: { de: "Zertifizierung", en: "Certification" },
            value: { de: "QNG Nachhaltigkeitssiegel", en: "Official QNG Green Seal" },
          },
          {
            label: { de: "Bauvolumen", en: "Construction Volume" },
            value: { de: "3 Vollgeschosse + Staffel", en: "3 Storeys + Penthouse" },
          },
        ],
        overview: {
          de: "Wirtschaftlich optimierter Geschosswohnungsbau mit barrierefreien Zugängen, Aufzugsanlage und Tiefgarage. Höchste Renditesicherheit für Bauträger durch beschleunigte Genehmigung und maximale Förderzuschüsse.",
          en: "Economically optimized residential apartment building featuring step-free access, elevator, and underground parking. Maximum investment certainty through expedited permits and top-tier federal subsidies.",
        },
        keyFacts: [
          {
            de: "Rechtskonforme Genehmigung nach § 34 BauGB im Bestandsquartier",
            en: "Legally compliant permit under Section 34 BauGB in an established quarter",
          },
          {
            de: "Einsatz schadstoffarmer Baustoffe für das QNG-Nachhaltigkeitszertifikat",
            en: "Use of low-emission, eco-certified materials for federal green funding",
          },
          {
            de: "Termingerechte Fertigstellung innerhalb des garantierten Kostenrahmens",
            en: "On-schedule completion delivered strictly within the approved budget cap",
          },
        ],
      },
      {
        id: "stadtvilla-roedermark",
        title: {
          de: "Moderne Stadtvilla mit skulpturaler Formensprache",
          en: "Contemporary Urban Villa with Sculptural Geometry",
        },
        category: {
          de: "Exklusiver Wohnungsbau & Villen",
          en: "Exclusive Residential & Luxury Villas",
        },
        location: {
          de: "Hanau-Wilhelmsbad & Maintal",
          en: "Hanau-Wilhelmsbad & Maintal",
        },
        year: "2023",
        image: "/images/stadtvilla_mfa_roedermark.jpg",
        imageAlt: {
          de: "Exklusive Stadtvilla mit lichtdurchfluteten Fassaden und Gartenbezug",
          en: "Exclusive urban villa with light-filled facade and garden access",
        },
        specs: [
          {
            label: { de: "Wohnfläche", en: "Living Area" },
            value: { de: "ca. 340 m²", en: "approx. 340 m²" },
          },
          {
            label: { de: "Energiestandard", en: "Energy Standard" },
            value: { de: "KfW-Effizienzhaus 40", en: "KfW Efficiency House 40" },
          },
          {
            label: { de: "Bauweise", en: "Construction" },
            value: { de: "Massivbau & Glasfassade", en: "Solid Masonry & Glazing" },
          },
          {
            label: { de: "Genehmigung", en: "Permit Procedure" },
            value: { de: "HBO Baugenehmigung", en: "HBO Building Permit" },
          },
        ],
        overview: {
          de: "Repräsentatives Wohnanwesen im Raum Hanau mit lichtdurchfluteten Räumen, fließendem Übergang zum Garten und modernster Wärmepumpentechnologie.",
          en: "Prestigious residence in the Hanau area featuring light-filled spaces, seamless garden integration, and state-of-the-art heat pump engineering.",
        },
        keyFacts: [
          {
            de: "Individuelle Grundrissgestaltung mit doppelter Raumhöhe im Wohnbereich",
            en: "Bespoke spatial design with double-height ceiling in living areas",
          },
          {
            de: "Geothermie-Wärmepumpe & integrierte Photovoltaikanlage",
            en: "Geothermal heat pump & integrated rooftop solar photovoltaic system",
          },
          {
            de: "Vollständige Betreuung von Entwurf bis Endabnahme (HOAI LPH 1–9)",
            en: "Full architectural oversight from concept through final inspection (HOAI 1–9)",
          },
        ],
      },
    ],
    hoaiPhases: [
      {
        phase: "LPH 1–2",
        title: {
          de: "Grundlagenermittlung & Vorplanung",
          en: "Site Assessment & Preliminary Design",
        },
        description: {
          de: "Grundstücksanalyse in Hanau und Main-Kinzig, Vorabklärung mit der Bauaufsicht Hanau und städtebauliche Machbarkeitskonzepte.",
          en: "Site analysis in Hanau and Main-Kinzig, preliminary zoning audits with Hanau Building Department, and early massing concepts.",
        },
        deliverables: [
          { de: "Standort- & Baurechtsanalyse", en: "Zoning & site feasibility audit" },
          { de: "Städtebaulicher Vorentwurf", en: "Preliminary design drawings" },
          { de: "Erste Kostenschätzung nach DIN 276", en: "Initial cost estimate per DIN 276" },
        ],
      },
      {
        phase: "LPH 3–4",
        title: {
          de: "Entwurfs- & Genehmigungsplanung",
          en: "Detailed Design & Permit Filing",
        },
        description: {
          de: "Ausarbeitung prüffähiger Bauanträge nach Hessischer Bauordnung (HBO) für zügige Genehmigungsverfahren bei der Stadt Hanau.",
          en: "Compilation of verified building permit applications per HBO for accelerated reviews by the City of Hanau.",
        },
        deliverables: [
          { de: "Prüffähiger Bauantrag nach HBO", en: "Verified building permit file per HBO" },
          { de: "Abstandsflächen- & Erschließungsnachweise", en: "Setback & civil infrastructure proofs" },
          { de: "Kostenberechnung nach DIN 276", en: "Accurate cost calculation per DIN 276" },
        ],
      },
      {
        phase: "LPH 5–7",
        title: {
          de: "Ausführungsplanung & Ausschreibung",
          en: "Working Drawings & Tendering",
        },
        description: {
          de: "Präzise Werk- und Detailpläne für alle Gewerke, Ausschreibungserstellung und Vergabeberatung mit Fokus auf Kostensicherheit.",
          en: "Precision working drawings, detailed procurement specifications, and contractor tendering focusing on budget stability.",
        },
        deliverables: [
          { de: "Ausführungs- & Detailzeichnungen", en: "Full working drawings & joinery details" },
          { de: "VOB-konforme Leistungsverzeichnisse", en: "VOB-compliant tender packages" },
          { de: "Vergabevorschläge & Preisspiegel", en: "Bid comparison matrices & contract awards" },
        ],
      },
      {
        phase: "LPH 8–9",
        title: {
          de: "Bauüberwachung & Objektbetreuung",
          en: "Site Supervision & Final Acceptance",
        },
        description: {
          de: "Laufende Bauleitung vor Ort in Hanau und Main-Kinzig, Qualitätsüberwachung, Rechnungsprüfung und mängelfreie Übergabe.",
          en: "Continuous on-site management in Hanau and Main-Kinzig, strict quality audits, milestone tracking, and formal handover.",
        },
        deliverables: [
          { de: "Laufende Baukontrolle & Baustellenprotokolle", en: "Daily site inspection reports" },
          { de: "Rechnungsprüfung & Kostenverfolgung", en: "Invoice audits & budget tracking" },
          { de: "Mängelfreie Abnahme & Übergabedokumentation", en: "Flawless handover documentation" },
        ],
      },
    ],
    office: {
      name: {
        de: "Projektbüro Hanau & Main-Kinzig",
        en: "Project Office Hanau & Main-Kinzig",
      },
      street: "Carl-von-Noorden-Platz 5 (Zentrale) & Vor-Ort-Termine Hanau",
      city: {
        de: "63450 Hanau & 60596 Frankfurt",
        en: "63450 Hanau & 60596 Frankfurt",
      },
      phone: "069 74 223 777",
      phoneHref: "tel:+496974223777",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41031.54226180373!2d8.9056488!3d50.1328965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd134375b4f0b3%3A0x422435029b0c5e0!2sHanau!5e0!3m2!1sde!2sde!4v1710000000000!5m2!1sde!2sde",
    },
    localRegulations: [
      {
        title: {
          de: "Bauaufsicht Stadt Hanau (Hessen Harthaus)",
          en: "Hanau Municipal Building Department",
        },
        description: {
          de: "Etablierte Kommunikationswege mit der Bauaufsichtsbehörde Hanau am Hessen-Homburg-Platz für reibungslose Baugenehmigungsverfahren.",
          en: "Direct communication with the Hanau building department at Hessen-Homburg-Platz for seamless permit procedures.",
        },
      },
      {
        title: {
          de: "Konversion & Quartiersentwicklung",
          en: "Brownfield Conversion & Quarter Planning",
        },
        description: {
          de: "Umfassende Erfahrung bei der Umnutzung ehemaliger Konversionsflächen und der Erstellung städtebaulicher Rahmenpläne.",
          en: "Extensive experience in brownfield conversions and statutory urban framework development.",
        },
      },
      {
        title: {
          de: "Gestaltungssatzung & Denkmalschutz (Wilhelmsbad / Steinheim)",
          en: "Design Bylaws & Preservation (Wilhelmsbad / Steinheim)",
        },
        description: {
          de: "Sicherer Umgang mit den historischen Ensembleschutzbereichen in Wilhelmsbad und den denkmalgeschützten Fachwerkkernen in Steinheim.",
          en: "Confident management of historic ensemble preservation zones in Wilhelmsbad and timber-framed quarters in Steinheim.",
        },
      },
    ],
    districts: [
      {
        id: "wilhelmsbad-nordwest",
        path: "/architektur-hanau-wilhelmsbad",
        name: {
          de: "Wilhelmsbad, Kesselstadt & Rosenau",
          en: "Wilhelmsbad, Kesselstadt & Rosenau",
        },
        suburbs: {
          de: "Staatspark Wilhelmsbad, Kesselstadt, Schloss Philippsruhe, Rosenau",
          en: "Wilhelmsbad State Park, Kesselstadt, Philippsruhe Palace, Rosenau",
        },
        badge: {
          de: "Historische Villen & Kurpark-Lagen",
          en: "Historic Villas & Spa Parkland",
        },
        summary: {
          de: "Hanaus prestigeträchtigste Wohngegend. Weitläufige Grünzüge, denkmalgeschützte Bausubstanz rund um den Staatspark und herrschaftliche Stadtvillen.",
          en: "Hanau's most prestigious residential enclave. Expansive parkland, protected historic heritage around the State Park, and stately villas.",
        },
        focusAreas: [
          {
            de: "Individuelle Architektenvillen und hochwertige Neubauten",
            en: "Custom architectural villas and upscale new residential builds",
          },
          {
            de: "Denkmalgerechte Sanierung historischer Altbauten",
            en: "Heritage-compliant restoration of historic residential estates",
          },
          {
            de: "Abstimmung von Ensembleschutz und Gestaltungssatzungen",
            en: "Coordination of ensemble preservation and local aesthetic bylaws",
          },
        ],
        zoningHighlights: [
          {
            de: "Ensembleschutz nach Hessischem Denkmalschutzgesetz (HDSchG)",
            en: "Ensemble conservation under Hessian Heritage Act (HDSchG)",
          },
          {
            de: "Bebauungspläne Kesselstadt & Wilhelmsbad",
            en: "Kesselstadt & Wilhelmsbad municipal zoning frameworks",
          },
          {
            de: "Baumschutzsatzung der Stadt Hanau",
            en: "Tree protection ordinance of the City of Hanau",
          },
        ],
      },
      {
        id: "innenstadt-lamboy",
        path: "/architektur-hanau-innenstadt",
        name: {
          de: "Innenstadt, Lamboy & Pioneer Park",
          en: "City Center, Lamboy & Pioneer Park",
        },
        suburbs: {
          de: "Innenstadt, Lamboy, Pioneer Park, Campo Pond",
          en: "City Center, Lamboy, Pioneer Park, Campo Pond",
        },
        badge: {
          de: "Urbane Konversion & Geschosswohnungsbau",
          en: "Urban Conversion & Apartment Buildings",
        },
        summary: {
          de: "Hanaus Innovations- und Wachstumszentrum. Modernste Wohnquartiere auf ehemaligen Konversionsarealen, urbane Nachverdichtung und Gewerbebauten.",
          en: "Hanau's core for urban growth and regeneration. Innovative housing quarters on converted areas, urban infill, and commercial facilities.",
        },
        focusAreas: [
          {
            de: "Geschosswohnungsbauten mit KfW-40-Effizienzhaus-Standard",
            en: "Multi-family apartment buildings designed to KfW 40 standards",
          },
          {
            de: "Nachverdichtung und Baulückenschließungen nach § 34 BauGB",
            en: "Urban infill and plot redevelopment under Section 34 BauGB",
          },
          {
            de: "Gewerbebau, Ärztehäuser und gemischt genutzte Quartiere",
            en: "Commercial offices, medical centers, and mixed-use quarters",
          },
        ],
        zoningHighlights: [
          {
            de: "Bebauungspläne Pioneer Park & Lamboy",
            en: "Pioneer Park & Lamboy development plans",
          },
          {
            de: "Stellplatzsatzung und Mobilitätskonzepte der Stadt Hanau",
            en: "City of Hanau parking bylaws and mobility concepts",
          },
          {
            de: "Schallschutz- und Immissionsschutzgutachten",
            en: "Acoustic insulation and environmental noise impact assessments",
          },
        ],
      },
      {
        id: "grossauheim-kleinauheim-steinheim",
        path: "/architektur-hanau-steinheim",
        name: {
          de: "Großauheim, Klein-Auheim & Steinheim",
          en: "Großauheim, Klein-Auheim & Steinheim",
        },
        suburbs: {
          de: "Großauheim, Klein-Auheim, Alt-Steinheim, Mainufer-Quartiere",
          en: "Großauheim, Klein-Auheim, Old Town Steinheim, Main riverside quarters",
        },
        badge: {
          de: "Mainufer-Wohnen & Historische Altstädte",
          en: "Riverside Living & Historic Quarters",
        },
        summary: {
          de: "Idyllisches Wohnen am Mainufer und in historischen Altstadtkernen. Neubau von Einfamilienhäusern, Fachwerksanierungen und Umnutzungen.",
          en: "Scenic living along the River Main and within historic half-timbered town centers. Single-family homes, timber framing retrofits, and conversions.",
        },
        focusAreas: [
          {
            de: "Hochwertige Wohnhäuser in Mainufer-Lage mit Hochwasserschutz",
            en: "High-end residences along the Main river with certified flood defenses",
          },
          {
            de: "Fachwerksanierung und Umnutzung denkmalgeschützter Scheunen",
            en: "Restoration of timber-framed monuments and heritage barn conversions",
          },
          {
            de: "Energieeffiziente Doppel- und Reihenhäuser für Familien",
            en: "Energy-efficient semi-detached homes for families",
          },
        ],
        zoningHighlights: [
          {
            de: "Hochwasserschutzverordnungen entlang des Mains",
            en: "Statutory river flood defense regulations",
          },
          {
            de: "Erhaltungssatzung für die Altstadt Steinheim",
            en: "Conservation bylaws for historic Steinheim Old Town",
          },
          {
            de: "Abstandsflächenberechnung nach HBO",
            en: "Hesse building code setback calculations",
          },
        ],
      },
      {
        id: "maintal-bruchkoebel",
        path: "/architektur-maintal-bruchkoebel",
        name: {
          de: "Maintal, Bruchköbel & Main-Kinzig-West",
          en: "Maintal, Bruchköbel & Main-Kinzig West",
        },
        suburbs: {
          de: "Maintal (Dörnigheim, Bischofsheim), Bruchköbel, Erlensee, Schöneck",
          en: "Maintal (Dörnigheim, Bischofsheim), Bruchköbel, Erlensee, Schöneck",
        },
        badge: {
          de: "Frankfurter Nahbereich & Wachstumsachse",
          en: "Frankfurt Proximity & Commuter Growth Axis",
        },
        summary: {
          de: "Direkt an Frankfurt angrenzende Kommunen mit exzellenter Anbindung. Moderner Geschosswohnungsbau, Einfamilienhäuser und Gewerbeparks.",
          en: "Direct Frankfurt neighboring municipalities with outstanding transit links. Modern apartments, single-family homes, and business parks.",
        },
        focusAreas: [
          {
            de: "Moderne Mehrfamilienhäuser und Quartiersentwicklungen",
            en: "Contemporary multi-family buildings and quarter developments",
          },
          {
            de: "Gewerbebauten, Logistikhallen und Handwerksbetriebe",
            en: "Commercial facilities, logistics depots, and trade contractor hubs",
          },
          {
            de: "Bebauungsplanprüfung und Baurechtsschaffung",
            en: "Zoning review and formal master plan establishment",
          },
        ],
        zoningHighlights: [
          {
            de: "Bauaufsicht Main-Kinzig-Kreis in Gelnhausen",
            en: "Main-Kinzig-Kreis District Building Department in Gelnhausen",
          },
          {
            de: "Bauaufsicht Stadt Maintal",
            en: "City of Maintal Building Authority",
          },
          {
            de: "Entwässerungs- und Retentionsnachweise",
            en: "Civil drainage and rainwater retention engineering verifications",
          },
        ],
      },
    ],
    faqs: [
      {
        question: {
          de: "Was kostet ein Architekt in Hanau nach der HOAI?",
          en: "What does an architect cost in Hanau under HOAI?",
        },
        answer: {
          de: "Die Architektenhonorare richten sich transparent nach den HOAI-Leistungsphasen und den anrechenbaren Kosten des Bauvorhabens. Für Wohn- und Gewerbeprojekte in Hanau und im Main-Kinzig-Kreis kalkulieren wir leistungsgerecht nach Honorarzone III oder IV. Sie erhalten vor Beginn ein verbindliches Phasenangebot.",
          en: "Architectural fees are calculated transparently based on HOAI Work Phases and verifiable construction costs. For residential and commercial projects in Hanau and Main-Kinzig, we price according to fee zones III or IV with itemized phase pricing.",
        },
      },
      {
        question: {
          de: "Wie lange dauert ein Bauantrag bei der Bauaufsicht Hanau?",
          en: "How long does a building permit take at Hanau Building Department?",
        },
        answer: {
          de: "Im vereinfachten Baugenehmigungsverfahren nach § 65 HBO liegt die durchschnittliche Bearbeitungszeit bei der Stadt Hanau bei 3 bis 4 Monaten. Durch vollständige und prüffähige Bauanträge nach hessischem Baurecht vermeiden wir Nachforderungen und verkürzen die Genehmigungsdauer.",
          en: "Under simplified permit procedures (§ 65 HBO), review times at the City of Hanau typically take 3 to 4 months. By providing complete, verified permit files, we avoid bureaucratic delays and accelerate approvals.",
        },
      },
      {
        question: {
          de: "Welche Vorgaben gelten für historische Gebäude in Wilhelmsbad oder Steinheim?",
          en: "What regulations apply to historic properties in Wilhelmsbad or Steinheim?",
        },
        answer: {
          de: "In Wilhelmsbad und im historischen Ortskern von Steinheim gelten strenge Denkmalschutz- und Erhaltungssatzungen. Sanierungsmaßnahmen an Fassaden, Fenstern oder Dächern müssen mit der Denkmalbehörde abgestimmt werden. Wir begleiten Sie durch das gesamte Abstimmungs- und Genehmigungsverfahren.",
          en: "Wilhelmsbad and historic Steinheim are protected by strict conservation bylaws and heritage protection. Renovations of facades, fenestration, or roofs require prior approval. We guide you through the complete municipal negotiation workflow.",
        },
      },
      {
        question: {
          de: "Begleitet Shams Consult auch städtebauliche Konversions- und B-Plan-Projekte in Hanau?",
          en: "Does Shams Consult manage urban conversions and B-Plan zoning in Hanau?",
        },
        answer: {
          de: "Ja. Mit unserer Qualifikation als freie Stadtplaner (AKH Hessen) erstellen wir städtebauliche Rahmenpläne, Machbarkeitsstudien und vorhabenbezogene Bebauungspläne (§ 12 BauGB) für Investoren und Kommunen im gesamten Main-Kinzig-Kreis.",
          en: "Yes. With our official registration as licensed urban planners (AKH Hesse), we develop urban master plans, feasibility audits, and project-based zoning plans (§ 12 BauGB) for investors and municipalities across the Main-Kinzig district.",
        },
      },
      {
        question: {
          de: "Wann empfiehlt sich eine Bauvoranfrage bei der Bauaufsicht Stadt Hanau?",
          en: "When is a preliminary zoning inquiry advisable with Hanau Building Department?",
        },
        answer: {
          de: "Eine Bauvoranfrage ist in Hanau insbesondere bei schwierigen Grundstücken, Vorhaben im Geltungsbereich von Konversionssatzungen oder bei gewünschten Abweichungen vom Bebauungsplan sinnvoll. Der rechtsverbindliche Vorbescheid gibt Ihnen Planungssicherheit, bevor Sie in die vertiefte Ausführungsplanung investieren.",
          en: "A preliminary building inquiry is particularly advisable in Hanau for complex plots, projects governed by redevelopment statutes, or requested zoning variances. The binding preliminary notice gives full legal certainty before committing to detailed design investment.",
        },
      },
    ],
  },

  "architektur-offenbach": {
    slug: "architektur-offenbach",
    path: "/architektur-offenbach",
    h1: {
      de: "Architekturbüro Offenbach am Main — Architektur, Micro-Living & Bauantrag",
      en: "Architectural Practice Offenbach am Main — Design, Micro-Living & Permits",
    },
    eyebrow: {
      de: "Architektur & Stadtplanung Offenbach am Main",
      en: "Architecture & Urban Planning Offenbach am Main",
    },
    subtitle: {
      de: "Ihr staatlich anerkanntes Architekturbüro (AKH Hessen Nr. 21886) für Offenbach am Main, Kaiserlei, Hafen und Bieber. Neubau von Mehrfamilienhäusern, Micro-Apartments, Aufstockungen und rechtssichere Bauanträge beim Bauaufsichtsamt Offenbach.",
      en: "State-recognized architecture practice (AKH Hesse No. 21886) for Offenbach am Main, Kaiserlei, Hafen, and Bieber. Contemporary multi-family housing, micro-apartments, conversions, and permits with Offenbach municipal building authorities.",
    },
    targetKeywords: [
      "Architekturbüro Offenbach",
      "Architekt Offenbach",
      "Architektur Offenbach am Main",
      "Bauamt Offenbach",
      "Micro Apartments Offenbach",
      "Bauantrag Offenbach",
      "Nutzungsänderung Offenbach",
      "HOAI Leistungsphasen Offenbach",
      "Architekt Kaiserlei Offenbach",
      "Baugenehmigung Stadt Offenbach",
    ],
    metaTitle: {
      de: "Architekturbüro Offenbach am Main — Bauantrag & Micro-Living | Shams Consult",
      en: "Architectural Practice Offenbach am Main — Housing & Permits | Shams Consult",
    },
    metaDescription: {
      de: "Architekturbüro in Offenbach am Main (AKH Hessen Nr. 21886): Wohnungsbau, Micro-Apartments, Nachverdichtung & Bauanträge beim Bauaufsichtsamt Offenbach. Jetzt anfragen!",
      en: "Architectural practice for Offenbach am Main: Multi-family housing, micro-apartments, conversions & rapid HBO building permits. Book a consultation.",
    },
    heroHighlights: [
      {
        de: "Direkte Vor-Ort-Betreuung in Offenbach am Main, Kaiserlei, Hafen & Bieber",
        en: "Direct on-site management in Offenbach am Main, Kaiserlei, Hafen & Bieber",
      },
      {
        de: "Uneingeschränkte Bauvorlageberechtigung (AKH Hessen Nr. 21886)",
        en: "Full building permit filing authorization (AKH Hesse No. 21886)",
      },
      {
        de: "Expertise in modernem Wohnungsbau, Micro-Apartments & Nachverdichtung (§ 34 BauGB)",
        en: "Specialized in contemporary residential developments, micro-apartments & infill (§ 34 BauGB)",
      },
      {
        de: "Rechtssichere Genehmigungsverfahren beim Bauaufsichtsamt Stadt Offenbach",
        en: "Streamlined permit procedures with the City of Offenbach Building Authority",
      },
    ],
    localFocusTitle: {
      de: "Dynamische Stadtentwicklung & Nachverdichtung in Offenbach am Main",
      en: "Dynamic Urban Growth & Infill Housing in Offenbach am Main",
    },
    localFocusDescription: {
      de: "Offenbach am Main wandelt sich rasant vom Industriestandort zum gefragten Wohn- und Kreativknotenpunkt der Metropolregion Frankfurt Rhein-Main. Ob moderne Micro-Apartments, innovative Wohnkonzepte am Hafen, Sanierungen im Westend oder Nachverdichtungen in Bieber und Bürgel: Shams Consult sorgt für architektonische Exzellenz, optimale Raumausnutzung und reibungslose Genehmigungsverfahren beim Bauaufsichtsamt Offenbach.",
      en: "Offenbach am Main is rapidly transforming into a sought-after residential and creative hub within the Frankfurt Rhine-Main metropolitan region. Whether micro-apartments, harbour living schemes, heritage retrofits, or suburban infill: Shams Consult guarantees architectural excellence and streamlined municipal permit approvals.",
    },
    localProjects: [
      {
        id: "dreieich-mfh",
        title: {
          de: "Mehrfamilienhaus mit 6 Wohneinheiten & Micro-Living",
          en: "Multi-Family Residential Scheme with 6 Units & Micro-Living",
        },
        category: {
          de: "Wohnungsbau & Energieeffizienz",
          en: "Residential & Energy Efficiency",
        },
        location: {
          de: "Offenbach & Rhein-Main-Gebiet",
          en: "Offenbach & Rhine-Main Region",
        },
        year: "2024",
        image: "/images/dreieich_mfh_neu.jpg",
        imageAlt: {
          de: "Modernes Mehrfamilienhaus mit QNG-Nachhaltigkeitszertifizierung",
          en: "Modern multi-family residential building with QNG certification",
        },
        specs: [
          {
            label: { de: "Wohneinheiten", en: "Residential Units" },
            value: { de: "6 Wohneinheiten / Apartments", en: "6 Residential Units" },
          },
          {
            label: { de: "Wohnfläche", en: "Living Area" },
            value: { de: "ca. 490 m²", en: "approx. 490 m²" },
          },
          {
            label: { de: "Zertifizierung", en: "Certification" },
            value: { de: "QNG Nachhaltigkeitssiegel", en: "Official QNG Green Seal" },
          },
          {
            label: { de: "Bauweise", en: "Construction" },
            value: { de: "Massivbau & Gründach", en: "Solid Masonry & Green Roof" },
          },
        ],
        overview: {
          de: "Wirtschaftlicher Geschosswohnungsbau mit modernen Grundrissen, Aufzug und Gründach. Schnelle Baugenehmigung im verdichteten Siedlungsbereich und maximale Energieeffizienz nach KfW-40-Standard.",
          en: "Economically optimized apartment building with modern layouts, elevator, and green roof. Rapid municipal approval in densified residential districts with top KfW 40 energy performance.",
        },
        keyFacts: [
          {
            de: "Rechtskonforme Genehmigung nach § 34 BauGB im Innenbereich",
            en: "Permit compliance under Section 34 BauGB in urban infill zone",
          },
          {
            de: "Einsatz regenerativer Energien und Begrünungskonzept",
            en: "Integration of renewable energy systems and green roof design",
          },
          {
            de: "Zuverlässige Kosten- und Termintreue von LPH 1 bis 9",
            en: "Strict cost certainty and milestone adherence across HOAI phases 1–9",
          },
        ],
      },
      {
        id: "stadtvilla-roedermark",
        title: {
          de: "Moderne Stadtvilla & Exklusiver Wohnungsbau",
          en: "Contemporary Urban Villa & Premium Residential",
        },
        category: {
          de: "Exklusiver Wohnungsbau",
          en: "Exclusive Residential",
        },
        location: {
          de: "Offenbach-Waldheim & Rhein-Main",
          en: "Offenbach-Waldheim & Rhine-Main",
        },
        year: "2023",
        image: "/images/stadtvilla_mfa_roedermark.jpg",
        imageAlt: {
          de: "Moderne Stadtvilla mit skulpturaler Formensprache",
          en: "Modern urban villa with contemporary geometry",
        },
        specs: [
          {
            label: { de: "Wohnfläche", en: "Living Area" },
            value: { de: "ca. 340 m²", en: "approx. 340 m²" },
          },
          {
            label: { de: "Energiestandard", en: "Energy Standard" },
            value: { de: "KfW-Effizienzhaus 40", en: "KfW Efficiency House 40" },
          },
          {
            label: { de: "Bauweise", en: "Construction" },
            value: { de: "Massivbau & Glasfassade", en: "Solid Masonry & Glazing" },
          },
          {
            label: { de: "Genehmigung", en: "Permit Procedure" },
            value: { de: "HBO Baugenehmigung", en: "HBO Building Permit" },
          },
        ],
        overview: {
          de: "Repräsentativer Wohnungsbau im Rhein-Main-Raum mit lichtdurchfluteten Räumen, offener Grundrissgestaltung und moderner Wärmepumpentechnik.",
          en: "Prestigious residence in the Rhine-Main region with generous natural lighting, open-plan zoning, and contemporary heat pump engineering.",
        },
        keyFacts: [
          {
            de: "Individuelle Architektur mit fließenden Übergängen zum Außenraum",
            en: "Bespoke architectural design with seamless indoor-outdoor transitions",
          },
          {
            de: "Photovoltaik & nachhaltiges Wärmekonzept",
            en: "Rooftop solar PV & sustainable thermal heating system",
          },
          {
            de: "Komplettbetreuung von der Vorplanung bis zur Bauleitung (HOAI 1–9)",
            en: "Comprehensive management from preliminary concept to site supervision (HOAI 1–9)",
          },
        ],
      },
    ],
    hoaiPhases: [
      {
        phase: "LPH 1–2",
        title: {
          de: "Grundlagenermittlung & Vorplanung",
          en: "Site Assessment & Preliminary Design",
        },
        description: {
          de: "Standort- und Baurechtsanalyse in Offenbach, Abstimmung mit Bebauungsplänen und städtebauliche Vorentwürfe.",
          en: "Site and zoning analysis in Offenbach, alignment with local master plans and preliminary concept drawings.",
        },
        deliverables: [
          { de: "Standort- & Machbarkeitsanalyse", en: "Site & feasibility study" },
          { de: "Städtebaulicher Vorentwurf", en: "Preliminary design sketches" },
          { de: "Kostenschätzung nach DIN 276", en: "Cost estimate per DIN 276" },
        ],
      },
      {
        phase: "LPH 3–4",
        title: {
          de: "Entwurfs- & Genehmigungsplanung",
          en: "Detailed Design & Permit Filing",
        },
        description: {
          de: "Vollständige Ausarbeitung der Bauantragsunterlagen zur zügigen Genehmigung beim Bauaufsichtsamt Stadt Offenbach.",
          en: "Comprehensive preparation of permit drawings for fast-track approval with the Offenbach Building Authority.",
        },
        deliverables: [
          { de: "Prüffähiger Bauantrag nach HBO", en: "Verified building application per HBO" },
          { de: "Stellplatz- & Abstandsflächennachweise", en: "Parking & setback calculations" },
          { de: "Kostenberechnung nach DIN 276", en: "Itemized cost calculation per DIN 276" },
        ],
      },
      {
        phase: "LPH 5–7",
        title: {
          de: "Ausführungsplanung & Ausschreibung",
          en: "Working Drawings & Tendering",
        },
        description: {
          de: "Detaillierte Werkpläne (1:50 bis 1:1), VOB-konforme Leistungsverzeichnisse und Vergabeempfehlungen.",
          en: "Detailed construction drawings (1:50 to 1:1), VOB-compliant tender packages, and procurement recommendations.",
        },
        deliverables: [
          { de: "Werk- & Detailpläne", en: "Working & joinery details" },
          { de: "Leistungsverzeichnisse (VOB)", en: "VOB-compliant tender specifications" },
          { de: "Preisspiegel & Vergabevorschläge", en: "Bid evaluations & contract awards" },
        ],
      },
      {
        phase: "LPH 8–9",
        title: {
          de: "Bauüberwachung & Objektbetreuung",
          en: "Site Supervision & Final Handover",
        },
        description: {
          de: "Engmaschige Bauleitung vor Ort in Offenbach, Qualitätskontrolle, Rechnungsprüfung und schlüsselfertige Abnahme.",
          en: "Strict on-site management in Offenbach, quality inspections, invoice verification, and turnkey building handover.",
        },
        deliverables: [
          { de: "Laufende Baukontrolle & Protokolle", en: "Continuous site inspections & reports" },
          { de: "Rechnungs- & Nachtragsprüfung", en: "Invoice audits & change-order tracking" },
          { de: "Mängelfreie Bauabnahme", en: "Flawless handover sign-off" },
        ],
      },
    ],
    office: {
      name: {
        de: "Projektbüro Offenbach & Rhein-Main",
        en: "Project Office Offenbach & Rhine-Main",
      },
      street: "Carl-von-Noorden-Platz 5 (Direkt angebunden via Frankfurt-Süd) & Vor-Ort-Termine Offenbach",
      city: {
        de: "63065 Offenbach am Main & 60596 Frankfurt am Main",
        en: "63065 Offenbach am Main & 60596 Frankfurt am Main",
      },
      phone: "069 667 748 40",
      phoneHref: "tel:+496966774840",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41040.54714152865!2d8.7303038!3d50.1005831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0e6c27e02cc7%3A0x422435029b0c5f0!2sOffenbach%20am%20Main!5e0!3m2!1sde!2sde!4v1710000000000!5m2!1sde!2sde",
    },
    localRegulations: [
      {
        title: {
          de: "Bauaufsichtsamt Stadt Offenbach (Berliner Straße)",
          en: "City of Offenbach Building Authority (Berliner Straße)",
        },
        description: {
          de: "Direkte und strukturierte Kommunikation mit der Bauaufsicht Offenbach am Main für eine zügige Genehmigung im vereinfachten (§ 65 HBO) sowie im Vollverfahren.",
          en: "Direct and streamlined workflows with Offenbach municipal planning officers for accelerated approvals under simplified and full procedures.",
        },
      },
      {
        title: {
          de: "Nutzungsänderungen & Micro-Apartments im Innenbereich (§ 34 BauGB)",
          en: "Change of Use & Micro-Apartments in Urban Infill Zones (§ 34 BauGB)",
        },
        description: {
          de: "Rechtssichere Führung von Genehmigungsverfahren zur Umnutzung gewerblicher Flächen in Wohn- und Micro-Apartment-Konzepte unter Einhaltung aller brandschutztechnischen und bauordnungsrechtlichen Maßgaben.",
          en: "Legally robust management of conversion procedures from commercial assets into residential and micro-living schemes per fire and building safety codes.",
        },
      },
      {
        title: {
          de: "Klimaanpassung, Starkregenschutz & Begrünungssatzung",
          en: "Climate Resilience, Stormwater Defense & Green Roof Bylaws",
        },
        description: {
          de: "Fundierte Berücksichtigung der Offenbacher Leitlinien zur Klimaanpassung: Gründächer, Retentionsversickerung und nachhaltige Fassadenbegrünung.",
          en: "Systematic integration of municipal climate guidelines: extensive green roofs, infiltration systems, and living facade greening.",
        },
      },
    ],
    districts: [
      {
        id: "offenbach-hafen-kaiserlei",
        name: {
          de: "Kaiserlei, Hafen Offenbach & Nordend",
          en: "Kaiserlei, Hafen Offenbach & Nordend",
        },
        suburbs: {
          de: "Kaiserlei, Hafenviertel, Nordend, Bernard-Quartier",
          en: "Kaiserlei, Hafenviertel, Nordend, Bernard-Quartier",
        },
        badge: {
          de: "Wachstum, Waterfront & Urbane Verdichtung",
          en: "Growth, Waterfront & Urban Infill",
        },
        summary: {
          de: "Das dynamische Herz des Strukturwandels in Offenbach. Moderne Gewerbekomplexe, urbane Wohnquartiere am Wasser und anspruchsvolle Micro-Apartment-Projekte.",
          en: "The dynamic core of structural transformation in Offenbach. Contemporary commercial complexes, waterfront residential quarters, and micro-apartment projects.",
        },
        focusAreas: [
          {
            de: "Neubau von Micro-Apartments, Studentenwohnen und modernen Stadtwohnungen",
            en: "New builds of micro-apartments, student housing, and contemporary city residences",
          },
          {
            de: "Gewerbliche Umnutzung und Revitalisierung ehemaliger Industriequartiere",
            en: "Commercial conversion and regeneration of former industrial quarters",
          },
          {
            de: "Nachhaltige Energiekonzepte und Begrünungsvorgaben der Stadt Offenbach",
            en: "Sustainable energy systems and municipal greening regulations in Offenbach",
          },
        ],
        zoningHighlights: [
          {
            de: "Bebauungspläne Kaiserlei und Hafenviertel Offenbach",
            en: "Kaiserlei and harbour district master plans Offenbach",
          },
          {
            de: "Lärmschutzauflagen und Immissionsschutzgutachten",
            en: "Acoustic insulation requirements and emission audit compliance",
          },
          {
            de: "Retentions- und Versickerungsnachweise nach WHG",
            en: "Stormwater retention and drainage engineering proofs",
          },
        ],
      },
      {
        id: "offenbach-westend-zentrum",
        name: {
          de: "Westend, Stadtzentrum & Mathildenviertel",
          en: "Westend, City Center & Mathildenviertel",
        },
        suburbs: {
          de: "Westend, Zentrum, Senefelderquartier, Mathildenviertel",
          en: "Westend, City Center, Senefelderquartier, Mathildenviertel",
        },
        badge: {
          de: "Gründerzeit, Denkmalschutz & Sanierung",
          en: "Wilhelminian Era, Heritage & Retrofits",
        },
        summary: {
          de: "Traditionsreiche Quartiere mit hoher historischer Bausubstanz. Umfassende Kernsanierungen, Dachaufstockungen und behutsame Nachverdichtungen.",
          en: "Established quarters characterized by historic architecture. Comprehensive structural restorations, rooftop extensions, and delicate urban infill.",
        },
        focusAreas: [
          {
            de: "Denkmalgerechte Altbausanierung und behutsame energetische Optimierung",
            en: "Heritage-compliant restoration and sensitive thermal modernization",
          },
          {
            de: "Aufstockungen und Dachgeschossausbauten zur Schaffung neuen Wohnraums",
            en: "Vertical rooftop additions and attic conversions for additional living space",
          },
          {
            de: "Nutzungsänderungen von Büro- und Praxisflächen in hochwertigen Wohnraum",
            en: "Conversions of office and practice space into high-quality apartments",
          },
        ],
        zoningHighlights: [
          {
            de: "Erhaltungssatzungen und Ensembleschutz Stadt Offenbach",
            en: "Conservation statutes and ensemble protection in Offenbach",
          },
          {
            de: "Einfügungsgebot (§ 34 BauGB) im Innenbereich",
            en: "Contextual insertion requirement (§ 34 BauGB) in built-up areas",
          },
          {
            de: "Statische Nachweise für Holzbalkendecken und Brandwände",
            en: "Structural engineering verifications for timber joist ceilings and firewalls",
          },
        ],
      },
      {
        id: "offenbach-bieber-buergel-waldheim",
        name: {
          de: "Bieber, Bürgel, Rumpenheim & Waldheim",
          en: "Bieber, Bürgel, Rumpenheim & Waldheim",
        },
        suburbs: {
          de: "Bieber, Bürgel, Rumpenheim, Waldheim, Tempelsee",
          en: "Bieber, Bürgel, Rumpenheim, Waldheim, Tempelsee",
        },
        badge: {
          de: "Attraktives Wohnen im Grünen & Neubau",
          en: "Green Suburban Living & New Builds",
        },
        summary: {
          de: "Gefragte Wohnlagen für Familien und Projektentwickler im östlichen Offenbacher Raum. Freistehende Einfamilienhäuser, Doppelhäuser und gehobene Wohnanlagen.",
          en: "Popular residential locations for families and developers in eastern Offenbach. Detached homes, semi-detached houses, and upscale apartment communities.",
        },
        focusAreas: [
          {
            de: "Neubau moderner KfW-40-Effizienzhäuser und Stadtvillen",
            en: "Construction of contemporary KfW 40 efficiency homes and villas",
          },
          {
            de: "Geschosswohnungsbau und Mehrfamilienhäuser in gewachsenen Quartieren",
            en: "Multi-family residential schemes in established neighborhoods",
          },
          {
            de: "Gartenbezogene Architektur und generationengerechte Grundrisse",
            en: "Garden-oriented architectural design and multi-generational floor plans",
          },
        ],
        zoningHighlights: [
          {
            de: "Bebauungspläne Bieber-Waldhof und Bürgel Ost",
            en: "Master plans Bieber-Waldhof and Bürgel East",
          },
          {
            de: "Baumschutzsatzung der Stadt Offenbach am Main",
            en: "Tree protection ordinance of the City of Offenbach am Main",
          },
          {
            de: "Abstandsflächenrecht nach Hessischer Bauordnung (HBO)",
            en: "Setback regulations under Hessian Building Code (HBO)",
          },
        ],
      },
    ],
    faqs: [
      {
        question: {
          de: "Was kostet ein Architekt in Offenbach am Main nach der HOAI?",
          en: "What does an architect cost in Offenbach am Main under HOAI?",
        },
        answer: {
          de: "Die Architektenhonorare richten sich transparent nach den HOAI-Leistungsphasen (1 bis 9) und den anrechenbaren Kosten des Bauvorhabens. Für Wohnungsbau, Micro-Apartments und Sanierungen in Offenbach kalkulieren wir leistungsgerecht nach Honorarzone III oder IV. Sie erhalten vor Projektstart eine verbindliche und transparente Honoraraufstellung.",
          en: "Architectural fees are structured transparently per HOAI Work Phases (1 to 9) and net construction costs. For residential developments, micro-apartments, and retrofits in Offenbach, we calculate fairly within fee zones III or IV with itemized phase pricing.",
        },
      },
      {
        question: {
          de: "Wie lange dauert eine Baugenehmigung beim Bauamt Offenbach?",
          en: "How long does a building permit take at Offenbach Building Department?",
        },
        answer: {
          de: "Im vereinfachten Baugenehmigungsverfahren nach § 65 HBO liegt die durchschnittliche Bearbeitungszeit beim Bauaufsichtsamt Offenbach am Main bei circa 3 bis 4 Monaten. Durch lückenlose, prüffähige und vorab abgestimmte Bauvorlagen vermeiden wir Verzögerungen und Nachforderungen seitens der Behörde.",
          en: "Under simplified permit procedures (§ 65 HBO), review times at the Offenbach Building Department typically take 3 to 4 months. By providing complete, verified permit files, we avoid bureaucratic delays and accelerate approvals.",
        },
      },
      {
        question: {
          de: "Begleitet Shams Consult auch Nutzungsänderungen und Micro-Apartment-Projekte in Offenbach?",
          en: "Does Shams Consult manage changes of use and micro-apartment projects in Offenbach?",
        },
        answer: {
          de: "Ja. Die Umnutzung von Bestandsgebäuden in Micro-Apartments, Studentenwohnheime oder gemischte Wohn- und Gewerbeeinheiten ist einer unserer Schwerpunkte im Raum Offenbach und Frankfurt. Wir prüfen vorab das Planungsrecht (§ 34 BauGB), klären den Stellplatzbedarf und führen das Genehmigungsverfahren rechtssicher durch.",
          en: "Yes. Converting existing properties into micro-apartments, student housing, or mixed-use assets is a core focus in Offenbach and Frankfurt. We evaluate planning legality (§ 34 BauGB), solve parking quotas, and navigate permits securely.",
        },
      },
      {
        question: {
          de: "Welche Vorschriften gelten für Bauprojekte im Hafengebiet oder Kaiserlei?",
          en: "What regulations apply to construction schemes in the harbour area or Kaiserlei?",
        },
        answer: {
          de: "In Entwicklungsgebieten wie dem Hafen Offenbach oder dem Kaiserlei gelten spezifische Bebauungspläne mit detaillierten Festsetzungen zu Schallschutz, Hochwasserschutz, Gebäudehöhen und Außenanlagen. Wir stimmen Entwürfe frühzeitig mit den zuständigen Fachämtern ab, um eine reibungslose Realisierung sicherzustellen.",
          en: "Development areas like Offenbach Harbour or Kaiserlei are governed by specific zoning plans detailing acoustic insulation, flood prevention, building heights, and site landscaping. We coordinate designs early with municipal specialists to guarantee seamless execution.",
        },
      },
    ],
  },
};

export const regionalLandingPages: Record<string, RegionalLandingPageData> = {
  ...baseRegionalLandingPages,
  stadtplanung: {
    ...baseRegionalLandingPages["stadtplanung-hessen"],
    slug: "stadtplanung",
    path: "/stadtplanung",
  },
  ...suburbLandingPages,
};
