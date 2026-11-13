export interface ProjectDocument {
  title: string;
  url: string;
  size?: string;
}

export interface Project {
  id: string;
  slug: string;
  publishedDate: string;
  category: "urban-planning" | "architecture" | "residential" | "commercial" | "education" | "sustainability";
  categoryLabel: {
    de: string;
    en: string;
  };
  title: {
    de: string;
    en: string;
  };
  subtitle: {
    de: string;
    en: string;
  };
  location: {
    de: string;
    en: string;
  };
  client: {
    de: string;
    en: string;
  };
  legalBasis?: string;
  year: string;
  image: string;
  imageAlt: string;
  overview: {
    de: string;
    en: string;
  };
  challenge: {
    de: string;
    en: string;
  };
  concept: {
    de: string;
    en: string;
  };
  outcome: {
    de: string;
    en: string;
  };
  keyFacts: {
    de: string[];
    en: string[];
  };
  partnerLogo?: string;
  partnerUrl?: string;
  documents?: ProjectDocument[];
  externalReferenceUrl?: string;
  externalReferenceTitle?: {
    de: string;
    en: string;
  };
  blogSlug?: string;
  gallery?: Array<{
    image: string;
    title: {
      de: string;
      en: string;
    };
    desc: {
      de: string;
      en: string;
    };
  }>;
}

export const rawProjects: Project[] = [
  {
    id: "rechenzentrum-bebra",
    slug: "rechenzentrum-bebra",
    publishedDate: "2026-10-15",
    category: "urban-planning",
    categoryLabel: {
      de: "Bauleitplanung & Infrastruktur",
      en: "Urban Master Planning & Infrastructure",
    },
    title: {
      de: "Rechenzentrum Bebra (>50 MW) — Bauleitplanung & B-Plan",
      en: "Data Center Bebra (>50 MW) — Master Plan & Zoning",
    },
    subtitle: {
      de: "Städtebauliches Konzept für ein nachhaltiges Tier 3/4 Rechenzentrum (>50 MW) mit Gewächshaus-Abwärmenutzung & Kreislaufkühlung in Kooperation mit F&P Immobau",
      en: "Urban master plan for a sustainable Tier 3/4 data center (>50 MW) with greenhouse waste heat recovery & circular water cooling in cooperation with F&P Immobau",
    },
    location: {
      de: "Bebra (Industriegebiet West), Hessen",
      en: "Bebra (Industrial Area West), Hesse",
    },
    client: {
      de: "F&P Immobau & Stadt Bebra (in Kooperation mit Shams Consult)",
      en: "F&P Immobau & City of Bebra (in cooperation with Shams Consult)",
    },
    legalBasis: "Bebauungsplan Nr. 18.1 gem. § 2 Abs. 1 & § 3 Abs. 1 BauGB (Stand: Mai 2026)",
    year: "2026",
    image: "/images/projects/rechenzentrum-bebra.jpg",
    imageAlt: "Bebauungsplan Rechenzentrum Robert-Bunsen-Straße Bebra, Luftbild Shams Consult und F&P Immobau",
    overview: {
      de: "Entwicklung eines modernen, hochleistungsfähigen und nachhaltigen Industrie- und Infrastrukturstandorts auf rund 56.000 m² im Industriegebiet West der Stadt Bebra. Das Plangebiet schließt Teilflächen des Bebauungsplans Nr. 18 von 1969 sowie unbeplante Erweiterungsflächen ein. Das städtebauliche Konzept verbindet digitale Spitzeninfrastruktur (Tier 3 bis Tier 4, >50 MW IT-Last), eine vorgelagerte Energieinfrastruktur (110 kV / 380 kV Umspannwerk mit 10.000 m² Batteriespeichern) sowie eine kreislaufwirtschaftliche Abwärme- und Brauchwassernutzung in enger Zusammenarbeit mit F&P Immobau und der Stadt Bebra.",
      en: "Development of a modern, high-performance, and sustainable industrial infrastructure hub spanning approximately 56,000 m² in the West Industrial Area of Bebra. The site consolidates portions of the 1969 zoning plan No. 18 with previously unzoned industrial expansion parcels. The master plan integrates mission-critical digital infrastructure (Tier 3 to Tier 4, >50 MW IT load), dedicated power infrastructure (110 kV / 380 kV substation with 10,000 m² battery storage), and a circular waste-heat and reclaimed water cooling system in close collaboration with F&P Immobau and the City of Bebra.",
    },
    challenge: {
      de: "Funktionale Neuordnung und Erweiterung eines bestehenden Industriegebiets zur Aufnahme einer extrem energieintensiven kritischen Infrastruktur mit über 50 MW IT-Last. Sicherstellung eines leistungsfähigen Anschlusses an das Hoch- und Höchstspannungsnetz (110 kV / 380 kV) bei gleichzeitiger Einhaltung strengster Immissionsschutz-, Lärm-, Wasserrechts- und Artenschutzanforderungen.",
      en: "Functional restructuring and expansion of an existing industrial estate to accommodate high-density critical infrastructure with over 50 MW IT load. Securing high- and extra-high-voltage grid connectivity (110 kV / 380 kV) while strictly satisfying stringent noise abatement, immission, water-right, and species protection bylaws.",
    },
    concept: {
      de: "Kompakte, funktional gegliederte Campusstruktur: 20.000 m² Rechenzentrum im Zentrum, 10.000 m² Umspannwerk und 10.000 m² Batteriespeicher räumlich vorgelagert für kurze Leitungswege und minimale Energieverluste. Konsequente Ausrichtung auf das Energieeffizienzgesetz: 100%ige Nutzung der entstehenden Abwärme zur ganzjährigen Beheizung von 20.000 m² angeschlossenen Gewächshausflächen sowie zur potenziellen Einspeisung in ein kommunales Nahwärmenetz. Ressourcenschonende Kühlung über gereinigtes Brauchwasser aus der städtischen Kläranlage, Photovoltaik-Dachanlagen und extensive Fassadenbegrünung.",
      en: "Compact, functionally zoned campus master plan: 20,000 m² data center at the core, with an upfront 10,000 m² substation and 10,000 m² battery storage for minimal line transmission loss. Fully aligned with Germany's Energy Efficiency Act: 100% waste-heat recovery feeding 20,000 m² of year-round agricultural greenhouses and potential municipal district heating. Sustainable cooling via treated effluent from the municipal wastewater plant, rooftop solar PV, and living green facades.",
    },
    outcome: {
      de: "Rechtssichere städtebauliche Baurechtschaffung gemäß § 2 Abs. 1 und § 3 Abs. 1 BauGB. Bebra positioniert sich als zukunftsfähiger Technologiestandort mit regionaler Wertschöpfung, stabiler Gewerbesteuerbasis, neuen Arbeitsplätzen und einem ökologischen Vorzeigeprojekt für die Kopplung von digitaler Infrastruktur, Agrarwirtschaft und erneuerbaren Energien.",
      en: "Legally sound zoning enacted under BauGB § 2 (1) and § 3 (1). Positions Bebra as an innovative technological hub delivering regional economic value, robust commercial tax base, local jobs, and an ecological flagship combining digital infrastructure, agriculture, and renewable energy.",
    },
    keyFacts: {
      de: [
        "56.000 m² Gesamtareal (Bebauungsplan Nr. 18.1)",
        "20.000 m² Rechenzentrum (Tier 3 / Tier 4, 99,99% Verfügbarkeit)",
        ">50 MW IT-Last mit 110 kV / 380 kV Netzanbindung",
        "10.000 m² Umspannwerk & 10.000 m² Batteriespeicher",
        "20.000 m² Gewächshäuser mit 100% Abwärmenutzung",
        "Wasserschonende Kühlung mit städtischem Kläranlagen-Brauchwasser",
        "Photovoltaik-Dachflächen, Fassadenbegrünung & Lärmschutz",
        "In Kooperation mit F&P Immobau (fup-immobau.de) & Stadt Bebra",
      ],
      en: [
        "56,000 m² Master Site (Zoning Plan No. 18.1)",
        "20,000 m² Data Center (Tier 3 / Tier 4, 99.99% Availability)",
        ">50 MW IT Load with 110 kV / 380 kV Grid Integration",
        "10,000 m² Substation & 10,000 m² Battery Storage Facility",
        "20,000 m² Greenhouses with 100% Waste Heat Recovery",
        "Water-Conserving Cooling via Treated Municipal Effluent",
        "Rooftop Solar PV, Living Green Facades & Noise Abatement",
        "In Collaboration with F&P Immobau (fup-immobau.de) & City of Bebra",
      ],
    },
    externalReferenceUrl: "https://fup-immobau.de/",
    externalReferenceTitle: {
      de: "Projektpartner: F&P Immobau (fup-immobau.de)",
      en: "Project Partner: F&P Immobau (fup-immobau.de)",
    },
  },
  {
    id: "netto-supermarkt-muenster-hessen",
    slug: "netto-supermarkt-muenster-hessen",
    publishedDate: "2023-03-20",
    category: "commercial",
    categoryLabel: {
      de: "Mischnutzung & Ausführungsplanung",
      en: "Mixed-Use & Working Drawings",
    },
    title: {
      de: "„Netto“ Supermarkt & 22 Wohnungen, Münster (Hessen)",
      en: "'Netto' Supermarket & 22 Apartments, Muenster (Hesse)",
    },
    subtitle: {
      de: "Ausführungsplanung (LPH 5) für Nahversorgungszentrum, 22 Wohnungen, Tiefgarage und grünen Innenhof",
      en: "Execution Planning (Phase 5) for Commercial Center, 22 Apartments, Underground Parking and Green Courtyard",
    },
    location: {
      de: "Münster (Hessen)",
      en: "Muenster (Hesse)",
    },
    client: {
      de: "Gewerblicher Projektentwickler",
      en: "Commercial Real Estate Developer",
    },
    legalBasis: "HBO / Baugenehmigung (LPH 5 Ausführungsplanung)",
    year: "2023",
    image: "/images/image-37e42d.jpg",
    imageAlt: "Ausführungsplanung und Realisierung Netto Supermarkt, 22 Wohnungen und einer Tiefgarage",
    overview: {
      de: "Umfassende Ausführungsplanung und bauliche Realisierung eines modernen Nahversorgungszentrums mit „Netto“-Supermarkt im Erdgeschoss, 22 Wohneinheiten in den Obergeschossen, Tiefgarage und einem begrünten Dachinnenhof.",
      en: "Detailed working drawings (LPH 5) and construction management for a mixed-use retail hub featuring a ground-floor Netto supermarket, 22 residential units above, underground parking, and a landscaped rooftop courtyard.",
    },
    challenge: {
      de: "Komplexe statische und schallschutztechnische Entkopplung zwischen gewerblicher Supermarktnutzung (Lieferverkehr, Kundenfrequenz) und den darüberliegenden ruhigen Wohnungen.",
      en: "Complex acoustic and structural decoupling between the high-traffic ground-floor supermarket and the quiet residential units on upper floors.",
    },
    concept: {
      de: "Präzise Werk- und Detailplanung aller Bauteile, integrale Haustechnikkoordination, optimierte Tiefgaragenlogistik und ein geschützter grüner Innenhof als privater Aufenthaltsbereich für Bewohner.",
      en: "Precision technical working drawings, integrated MEP coordination, optimized parking logistics, and a secluded green courtyard for residents.",
    },
    outcome: {
      de: "Erfolgreiche termingerechte Realisierung und nahtlose Inbetriebnahme des Nahversorgungszentrums.",
      en: "Successful on-time construction and seamless handover of the retail and residential center.",
    },
    keyFacts: {
      de: [
        "Ausführungsplanung (LPH 5 HOAI)",
        "Nahversorgungszentrum mit Supermarkt",
        "22 moderne Wohneinheiten",
        "Tiefgarage & begrünter Innenhof",
      ],
      en: [
        "Working Drawings (Phase 5 HOAI)",
        "Retail Center with Supermarket",
        "22 Modern Residential Units",
        "Underground Parking & Green Courtyard",
      ],
    },
  },
  {
    id: "neubau-buerogebaeude-adler-seeheim-jugenheim",
    slug: "neubau-buerogebaeude-adler-seeheim-jugenheim",
    publishedDate: "2026-09-12",
    category: "commercial",
    categoryLabel: {
      de: "Gewerbebau & Fertigteilplanung",
      en: "Commercial & Precast Engineering",
    },
    title: {
      de: "Neubau Bürogebäude Adler in Seeheim-Jugenheim",
      en: "New Adler Office Building in Seeheim-Jugenheim",
    },
    subtitle: {
      de: "Integrale Vorplanung und serielle Betonfertigteile in enger Zusammenarbeit mit F.C. Nüdling Fertigteiltechnik",
      en: "Integrated advance planning and serial precast concrete elements in close collaboration with F.C. Nüdling Fertigteiltechnik",
    },
    location: {
      de: "Seeheim-Jugenheim, Hessen (Rhein-Main)",
      en: "Seeheim-Jugenheim, Hesse (Rhine-Main)",
    },
    client: {
      de: "Gewerblicher Bauherr in Kooperation mit F.C. Nüdling Fertigteiltechnik",
      en: "Commercial Developer in Cooperation with F.C. Nüdling Fertigteiltechnik",
    },
    legalBasis: "HOAI LPH 1–5, DIN EN 13369 & serielle Werkplanung",
    year: "2023–2024",
    image: "/images/b2b/Image.jpg",
    imageAlt: "Neubau Bürogebäude Adler in Seeheim-Jugenheim, Shams Consult mit F.C. Nüdling Fertigteiltechnik",
    overview: {
      de: "Beim Neubau des Bürogebäudes Adler in Seeheim-Jugenheim wurde die Ausführungsplanung, Statik und Baustellenlogistik eng mit dem Fertigteilwerk von F.C. Nüdling verzahnt. Durch den gezielten Einsatz industriell vorgefertigter Wand- und Deckenelemente konnte der Rohbau in Rekordzeit und mit höchster Maßhaltigkeit realisiert werden. Für dieses Projekt wurden Fertigteil-Komponenten der [F. C. Nüdling Fertigteiltechnik GmbH + Co. KG](https://www.fcn-systemrohbau.de) eingesetzt.",
      en: "For the new construction of the Adler office building in Seeheim-Jugenheim, execution planning, structural engineering, and site logistics were tightly coordinated with the F.C. Nüdling precast plant. Systematic deployment of prefabricated wall and floor elements enabled rapid, millimeter-precise shell assembly. Precast components manufactured by [F. C. Nüdling Fertigteiltechnik GmbH + Co. KG](https://www.fcn-systemrohbau.de) were deployed for this project.",
    },
    challenge: {
      de: "Verkürzung der Rohbauphase zur Minimierung witterungsbedingter Verzögerungen sowie Vermeidung von Schnittstellenverlusten und Planungskollisionen zwischen Architektur, Statik und Vorfertigung.",
      en: "Shortening the structural shell phase to minimize weather-induced delays while eliminating interface friction and clashes between design, structural analysis, and factory production.",
    },
    concept: {
      de: "Frühzeitige Jour-Fixe-Abstimmung aller Sockel- und Anschlussdetails, statische Vorbemessung für industrielle Wand- und Deckenfertigteile sowie Just-in-Time-Baustellenlogistik.",
      en: "Early regular coordination meetings for all foundation and connection details, pre-dimensioning for industrial precast walls and slabs, and just-in-time on-site delivery logistics.",
    },
    outcome: {
      de: "Drastisch verkürzte Rohbauzeit durch sofortige Montage nach Baubeginn, fehlerfreie Schnittstellen ohne teure Nachträge sowie vollständige Kosten- und Terminsicherheit für die Bauherrschaft.",
      en: "Drastically reduced structural build time via immediate post-groundbreaking assembly, zero costly change orders, and total cost and schedule certainty for the client.",
    },
    keyFacts: {
      de: [
        "Industriell vorgefertigte Wand- & Deckenelemente",
        "Enge Kooperation mit F.C. Nüdling Fertigteiltechnik",
        "Verkürzte Rohbauzeit & witterungsunabhängige Fertigung",
        "Seeheim-Jugenheim (Rhein-Main)",
      ],
      en: [
        "Industrial Precast Wall & Slab Elements",
        "Close Partnership with F.C. Nüdling Fertigteiltechnik",
        "Accelerated Shell Construction & Weatherproof Prefabrication",
        "Seeheim-Jugenheim (Rhine-Main)",
      ],
    },
    partnerLogo: "/images/partners/fcn-systemrohbau.jpg",
    partnerUrl: "https://www.fcn-systemrohbau.de",
    blogSlug: "wirtschaftliche-umsetzung-nachhaltiger-projekte",
  },
  {
    id: "lagerhalle-feinkost-fleischverarbeitung",
    slug: "lagerhalle-feinkost-fleischverarbeitung",
    publishedDate: "2019-10-30",
    category: "commercial",
    categoryLabel: {
      de: "Gewerbebau & Logistik",
      en: "Industrial & Logistics",
    },
    title: {
      de: "Lagerhalle Feinkost & Fleischverarbeitung",
      en: "Logistics & Processing Facility Fine Food",
    },
    subtitle: {
      de: "Neubau einer modernen Lager-, Kühl- und Produktionshalle für Lebensmittelverarbeitung",
      en: "New Construction of a Cold Storage and Processing Facility for Fine Food Logistics",
    },
    location: {
      de: "Süddeutschland",
      en: "Southern Germany",
    },
    client: {
      de: "Lebensmittelproduzent & Großhandel",
      en: "Food Producer & Wholesaler",
    },
    legalBasis: "Gewerbebau / Baugenehmigung",
    year: "2019",
    image: "/images/image-35c767.jpg",
    imageAlt: "Lagerhalle für Feinkost und Fleischverarbeitung",
    overview: {
      de: "Planung und Realisierung einer funktionalen Lager- und Produktionshalle mit speziellen Kühl- und Verarbeitungsbereichen unter Einhaltung strengster Lebensmittel- und Hygienevorschriften.",
      en: "Design and delivery of a specialized warehouse and processing plant featuring custom refrigeration and cold chain logistics adhering to strict food safety standards.",
    },
    challenge: {
      de: "Optimierung von internen Logistikabläufen und Einhaltung kontinuierlicher Kühlketten bei hoher Energieeffizienz.",
      en: "Optimizing internal workflow logistics and uninterrupted cold chains with high thermal efficiency.",
    },
    concept: {
      de: "Effiziente Stahlrahmenkonstruktion, hochgedämmte Paneele, moderne Kältetechnik mit Wärmerückgewinnung und durchdachte Andockstationen für LKW.",
      en: "Efficient steel portal frame, insulated sandwich panels, heat recovery refrigeration, and organized loading docks.",
    },
    outcome: {
      de: "Erfolgreiche Inbetriebnahme und signifikante Steigerung der betrieblichen Verarbeitungskapazität.",
      en: "Successful operational launch and substantial increase in food processing throughput.",
    },
    keyFacts: {
      de: [
        "Gewerblicher Hallenbau",
        "Kühl- & Verarbeitungslogistik",
        "Hygienekonforme Bauausführung",
        "Süddeutschland",
      ],
      en: [
        "Commercial Industrial Facility",
        "Refrigerated Food Logistics",
        "HACCP-Compliant Construction",
        "Southern Germany",
      ],
    },
  },
  {
    id: "vep-alten-und-pflegeheim-guenzburg",
    slug: "vep-alten-und-pflegeheim-guenzburg",
    publishedDate: "2020-08-14",
    category: "urban-planning",
    categoryLabel: {
      de: "Vorhabenbezogener Bebauungsplan",
      en: "Project-Based Master Plan",
    },
    title: {
      de: "VEP Alten- und Pflegeheim Spital, Günzburg",
      en: "VEP Nursing & Care Home Spital, Guenzburg",
    },
    subtitle: {
      de: "Vorhabenbezogener Bebauungsplan für eine moderne Pflege- und Sozialeinrichtung",
      en: "Project-Based Master Plan for a Modern Senior Care and Community Facility",
    },
    location: {
      de: "Günzburg, Bayern",
      en: "Guenzburg, Bavaria",
    },
    client: {
      de: "Sozialträger / Obermeier + Traub",
      en: "Healthcare Provider / Obermeier + Traub",
    },
    legalBasis: "§ 12 BauGB (Vorhaben- und Erschließungsplan)",
    year: "2020",
    image: "/images/image-067b12.jpg",
    imageAlt: "Vorhabenbezogener Bebauungsplan Alten- und Pflegeheim Spital Günzburg",
    overview: {
      de: "Planungsrechtliche Vorbereitung und Aufstellung des vorhabenbezogenen Bebauungsplans für den Neubau eines zukunftsfähigen Alten- und Pflegeheims in Günzburg.",
      en: "Regulatory planning and drafting of a project-based master plan for a state-of-the-art senior healthcare and assisted living residence in Guenzburg.",
    },
    challenge: {
      de: "Einbettung einer großvolumigen Pflegeeinrichtung in das städtische Umfeld unter Berücksichtigung barrierefreier Wege und Notfallzufahrten.",
      en: "Integrating a large-scale senior care complex into the municipal fabric with seamless barrier-free access and emergency routing.",
    },
    concept: {
      de: "Modulares Gebäudekonzept mit geschützten Gartenhöfen, direkter Anbindung an den öffentlichen Nahverkehr und bedarfsgerechter Erschließung.",
      en: "Modular building design with sensory garden courtyards, direct public transit links, and customized logistics.",
    },
    outcome: {
      de: "Baurechtliche Genehmigungsgrundlage und erfolgreiche Einleitung des Satzungsverfahrens.",
      en: "Legal foundation approved, enabling municipal ratification and construction.",
    },
    keyFacts: {
      de: [
        "Vorhabenbezogener B-Plan (§ 12 BauGB)",
        "Pflege- & Seniorenwohnen",
        "Barrierefreies Erschließungskonzept",
        "Günzburg",
      ],
      en: [
        "Project-Based Plan (§ 12 BauGB)",
        "Senior Living & Nursing Care",
        "Barrier-Free Infrastructure",
        "Guenzburg",
      ],
    },
  },
  {
    id: "vep-dillingerstrasse-guenzburg",
    slug: "vep-dillingerstrasse-guenzburg",
    publishedDate: "2020-05-10",
    category: "urban-planning",
    categoryLabel: {
      de: "Vorhabenbezogener Bebauungsplan",
      en: "Project-Based Master Plan",
    },
    title: {
      de: "VEP Dillingerstraße, Günzburg",
      en: "VEP Dillingerstrasse, Guenzburg",
    },
    subtitle: {
      de: "Vorhabenbezogener Bebauungsplan für eine gemischt genutzte Innenentwicklung",
      en: "Project-Based Zoning Plan for Mixed-Use Infill Development",
    },
    location: {
      de: "Günzburg, Bayern",
      en: "Guenzburg, Bavaria",
    },
    client: {
      de: "Stadt Günzburg / Obermeier + Traub",
      en: "City of Guenzburg / Obermeier + Traub",
    },
    legalBasis: "§ 12 BauGB i.V.m. § 13a BauGB",
    year: "2020",
    image: "/images/image-1109bb.jpg",
    imageAlt: "Vorhabenbezogener Bebauungsplan Dillingerstr. Günzburg, für Obermeier u. Traub",
    overview: {
      de: "Erarbeitung des vorhabenbezogenen Bebauungsplans Dillingerstraße zur Revitalisierung und Umnutzung einer innerstädtischen Gewerbebrache in ein gemischtes Quartier.",
      en: "Formulation of the Dillingerstrasse project-based zoning plan to remediate and repurpose an urban brownfield into a vibrant mixed-use quarter.",
    },
    challenge: {
      de: "Umnutzung ehemals rein gewerblich genutzter Flächen mit Immissionsschutzauflagen für neue Wohnnutzungen.",
      en: "Repurposing former commercial industrial parcels while meeting acoustic and environmental health standards for residential living.",
    },
    concept: {
      de: "Kombination aus Nahversorgung im Erdgeschoss und hochwertigen Wohnungen in den Obergeschossen mit begrünter Dachlandschaft.",
      en: "Ground-floor local amenities combined with upper-level residences and green roof scapes.",
    },
    outcome: {
      de: "Planungsrechtlich abgesicherte Realisierung für den Bauherren.",
      en: "Legally secured planning permission for developer implementation.",
    },
    keyFacts: {
      de: [
        "VEP gem. § 12 BauGB",
        "Innenentwicklung & Konversion",
        "Gewerbe- & Wohnmischung",
        "Günzburg",
      ],
      en: [
        "VEP under § 12 BauGB",
        "Infill & Brownfield Conversion",
        "Mixed Commercial & Residential",
        "Guenzburg",
      ],
    },
  },
  {
    id: "bebauungsplan-neu-ulm-baufeld-5-ost",
    slug: "bebauungsplan-neu-ulm-baufeld-5-ost",
    publishedDate: "2020-11-25",
    category: "urban-planning",
    categoryLabel: {
      de: "Bauleitplanung & Städtebau",
      en: "Zoning & Master Planning",
    },
    title: {
      de: "Bebauungsplan M 115 „Baufeld 5 – OST“, Neu-Ulm",
      en: "Zoning Plan M 115 'Baufeld 5 – OST', Neu-Ulm",
    },
    subtitle: {
      de: "Städtebauliche Bebauungsplanung für ein innerstädtisches Entwicklungsfeld im Auftrag von Obermeier + Traub",
      en: "Urban Master Planning for an Inner-City Development Parcel on Behalf of Obermeier + Traub",
    },
    location: {
      de: "Neu-Ulm, Bayern",
      en: "Neu-Ulm, Bavaria",
    },
    client: {
      de: "Stadt Neu-Ulm / Obermeier + Traub",
      en: "City of Neu-Ulm / Obermeier + Traub",
    },
    legalBasis: "BauGB / BayBO",
    year: "2020",
    image: "/images/image-f9659f.jpg",
    imageAlt: "Bebauungsplan M 115 „Baufeld 5 – OST“ Stadt Neu-Ulm, für Obermeier u. Traub",
    overview: {
      de: "Erarbeitung der städtebaulichen Festsetzungen und Planzeichnung für das innerstädtische Baufeld M 115 in Neu-Ulm zur Schaffung von Baurecht für hochwertige Wohn- und Gewerbenutzung.",
      en: "Formulation of urban planning regulations and statutory plan drawings for inner-city parcel M 115 in Neu-Ulm to secure building rights for high-density residential and commercial use.",
    },
    challenge: {
      de: "Verbindung hoher städtebaulicher Dichte mit optimaler Verkehrserschließung und Lärmschutz an zentralen Erschließungsachsen.",
      en: "Balancing high urban density with optimized traffic infrastructure and acoustic shielding along major urban corridors.",
    },
    concept: {
      de: "Kompakte Blockrandstrukturen, grüne Innenhöfe und klare Abgrenzung von Wohn- und Gewerbebereichen.",
      en: "Compact perimeter block typology with green inner courts and structured zoning separation.",
    },
    outcome: {
      de: "Rechtssicherer Bebauungsplan als Grundlage für die nachhaltige innerstädtische Transformation.",
      en: "Legally ratified zoning plan laying the foundation for sustainable urban redevelopment.",
    },
    keyFacts: {
      de: [
        "Bebauungsplan M 115 Neu-Ulm",
        "Innerstädtische Nachverdichtung",
        "Wohn- und Gewerbenutzung",
        "Kooperation mit Obermeier + Traub",
      ],
      en: [
        "Zoning Statute M 115 Neu-Ulm",
        "Inner-City Infill Development",
        "Mixed Residential & Commercial",
        "Cooperation with Obermeier + Traub",
      ],
    },
  },
  {
    id: "bebauungsplan-toepfenmuehle-gersfeld",
    slug: "bebauungsplan-toepfenmuehle-gersfeld",
    publishedDate: "2023-08-15",
    category: "urban-planning",
    categoryLabel: {
      de: "Bauleitplanung",
      en: "Urban Master Planning",
    },
    title: {
      de: "Bebauungsplan „Töpfenmühle“, Gersfeld (Rhön)",
      en: "Zoning Plan 'Toepfenmuehle', Gersfeld (Rhoen)",
    },
    subtitle: {
      de: "Qualifizierter Bebauungsplan gem. § 30 Abs. 1 BauGB mit Umweltprüfung und Artenschutz",
      en: "Qualified Master Plan under § 30 (1) BauGB with Environmental and Species Impact Assessment",
    },
    location: {
      de: "Gersfeld (Rhön), Hessen",
      en: "Gersfeld (Rhoen), Hesse",
    },
    client: {
      de: "Stadt Gersfeld (Rhön)",
      en: "Municipality of Gersfeld (Rhoen)",
    },
    legalBasis: "§ 30 Abs. 1 BauGB i.V.m. § 2 Abs. 4 BauGB (Umweltbericht & Artenschutz)",
    year: "2023",
    image: "/images/image-f22e9f.jpg",
    imageAlt: "Begründung Bebauungsplan Töpfenmühle Gersfeld (Rhön), Verfahrensstand: Auslegung",
    overview: {
      de: "Aufstellung des qualifizierten Bebauungsplans „Töpfenmühle“ im Rahmen eines zweistufigen Verfahrens. Innerhalb des Geltungsbereiches wurden Art und Maß der baulichen Nutzung, überbaubare Grundstücksflächen und örtliche Verkehrsflächen verbindlich festgesetzt.",
      en: "Drafting of the qualified master plan 'Toepfenmuehle' via a formal two-tier procedure, establishing binding regulations for land use, building footprints, and local road infrastructure.",
    },
    challenge: {
      de: "Schaffung von rechtssicherem Baurecht unter gleichzeitigem Schutz und Erhalt der ländlich geprägten, historisch bedeutsamen dörflichen Siedlungsstruktur und strengen Naturschutzanforderungen.",
      en: "Establishing legal building rights while preserving the historical rural village fabric and meeting stringent environmental protection mandates.",
    },
    concept: {
      de: "Energetische Sanierung von Bestandsgebäuden, planungssichere Ermöglichung erforderlicher Ersatzbauten und Bewahrung unbebauter Flächen in ihrer natürlichen landschaftlichen Form.",
      en: "Enabling energy retrofits of existing buildings and replacement structures while strictly safeguarding natural green zones.",
    },
    outcome: {
      de: "Erfolgreiche öffentliche Auslegung und gesicherte städtebauliche Entwicklung bei vollständiger Erschließung.",
      en: "Successful public consultation phase and legally secured sustainable rural development.",
    },
    keyFacts: {
      de: [
        "Qualifizierter Bebauungsplan gem. § 30 Abs. 1 BauGB",
        "Vollständige Umweltprüfung nach § 2 Abs. 4 BauGB",
        "Erhalt der ländlichen Siedlungsstruktur",
        "Erschließung vollständig gesichert",
      ],
      en: [
        "Qualified Master Plan under § 30 (1) BauGB",
        "Complete Environmental Assessment (§ 2 (4) BauGB)",
        "Preservation of Historical Village Identity",
        "Full Infrastructure Access Secured",
      ],
    },
  },
  {
    id: "kindergarten-schemmerhofen",
    slug: "kindergarten-schemmerhofen",
    publishedDate: "2024-06-15",
    category: "education",
    categoryLabel: {
      de: "Bildungs- & Kommunalbau",
      en: "Educational & Public Architecture",
    },
    title: {
      de: "Kindergarten Schemmerhofen bei Ulm",
      en: "Kindergarten Schemmerhofen near Ulm",
    },
    subtitle: {
      de: "Kindgerechter Neubau einer Kindertagesstätte (LPH 1–4) im Auftrag von Obermeier + Traub Ulm",
      en: "Child-Centric Kindergarten New Build (Phases 1–4) for Obermeier + Traub Ulm",
    },
    location: {
      de: "Schemmerhofen, Baden-Württemberg",
      en: "Schemmerhofen, Baden-Wuerttemberg",
    },
    client: {
      de: "Gemeinde Schemmerhofen / Obermeier + Traub",
      en: "Municipality of Schemmerhofen / Obermeier + Traub",
    },
    legalBasis: "LBO Baden-Württemberg / Kommunaler Bildungsbau",
    year: "2024",
    image: "/images/image-f36e2e.png",
    imageAlt: "Kindergarten in Schemmerhofen bei Ulm",
    overview: {
      de: "Planung eines modernen, kindgerechten Kindergartens mit Gruppenräumen, Bewegungsflächen, Mehrzweckraum und kindersicherem Außenbereich im Auftrag von Obermeier + Traub Ulm (LPH 1–4).",
      en: "Architectural planning for a modern daycare center featuring group rooms, active play areas, multi-purpose hall, and secure outdoor gardens for Obermeier + Traub Ulm (Phases 1–4).",
    },
    challenge: {
      de: "Einhaltung strenger kommunaler Sicherheits-, Hygiene- und Akustikauflagen bei gleichzeitiger Schaffung einer warmen, anregenden Lernatmosphäre.",
      en: "Meeting strict municipal safety, acoustics, and hygiene regulations while crafting an inspiring, child-friendly atmosphere.",
    },
    concept: {
      de: "Klare Zonierung der Funktionsbereiche, schadstofffreie Baumaterialien, Akustikdecken zur Lärmminderung und ebenerdige Zugänge zu den Freispielflächen.",
      en: "Clear functional zoning, non-toxic materials, acoustic baffles for noise dampening, and step-free garden access.",
    },
    outcome: {
      de: "Genehmigter Entwurf und erfolgreiche Übergabe der Genehmigungsplanung an die Gemeinde.",
      en: "Permit approved and successfully handed over to municipal authorities.",
    },
    keyFacts: {
      de: [
        "Planungsphasen 1–4 HOAI",
        "Kindgerechte Architektur & Akustik",
        "Ökologische, schadstofffreie Baustoffe",
        "Kommunaler Bildungsbau",
      ],
      en: [
        "Planning Phases 1–4 HOAI",
        "Child-Centric Design & Acoustics",
        "Eco-Friendly Non-Toxic Materials",
        "Municipal Educational Building",
      ],
    },
  },
  {
    id: "machbarkeitsstudie-reutlingen",
    slug: "machbarkeitsstudie-reutlingen",
    publishedDate: "2020-02-05",
    category: "urban-planning",
    categoryLabel: {
      de: "Städtebauliche Machbarkeitsstudie",
      en: "Urban Feasibility Study",
    },
    title: {
      de: "Städtebauliche Machbarkeitsstudie Reutlingen",
      en: "Urban Feasibility Study Reutlingen",
    },
    subtitle: {
      de: "Städtebauliche Analyse, Rahmenplanung und Bauabschnittskonzeption für ein Konversionsareal",
      en: "Urban Analysis, Master Framework, and Phasing Concept for a Redevelopment Area",
    },
    location: {
      de: "Reutlingen, Baden-Württemberg",
      en: "Reutlingen, Baden-Wuerttemberg",
    },
    client: {
      de: "Kommunaler / Privater Entwicklungsträger",
      en: "Municipal / Private Development Entity",
    },
    legalBasis: "Städtebauliche Rahmenplanung",
    year: "2020",
    image: "/images/image-a8071d.jpg",
    imageAlt: "Städtebauliche Machbarkeitsstudien Reutlingen — Analyse und Konzeption",
    overview: {
      de: "Detaillierte städtebauliche Bestandsanalyse und Entwicklung von mehreren städtebaulichen Szenarien und Bauabschnitten zur Reaktivierung eines Entwicklungsgebiets in Reutlingen.",
      en: "Comprehensive urban site analysis and development of phased planning scenarios to revitalize a major growth corridor in Reutlingen.",
    },
    challenge: {
      de: "Ermittlung des optimalen Nutzungsmixes und der wirtschaftlichen Tragfähigkeit unter Berücksichtigung topographischer Gegebenheiten.",
      en: "Determining the optimal land-use mix and economic viability while navigating complex topography.",
    },
    concept: {
      de: "Stufenweises Erschließungskonzept, modulare Baufelder und Vernetzung mit dem bestehenden städtischen Grünzug.",
      en: "Staged infrastructure rollout, modular plot subdivisions, and integration into existing public green corridors.",
    },
    outcome: {
      de: "Fundierte Entscheidungsgrundlage für Verwaltung, Politik und Investoren zur weiteren B-Plan-Aufstellung.",
      en: "Authoritative decision-making foundation for city council, planners, and investors for zoning enactment.",
    },
    keyFacts: {
      de: [
        "Städtebauliche Machbarkeitsstudie",
        "Variantenuntersuchung & Bauabschnitte",
        "Flächen- & Wirtschaftlichkeitsanalyse",
        "Reutlingen",
      ],
      en: [
        "Urban Feasibility Study",
        "Scenario Analysis & Phasing",
        "Spatial & Financial Viability",
        "Reutlingen",
      ],
    },
  },
  {
    id: "mehrfamilienhaus-dreieich-goetzenhain",
    slug: "mehrfamilienhaus-dreieich-goetzenhain",
    publishedDate: "2021-09-12",
    category: "residential",
    categoryLabel: {
      de: "Wohnungsbau",
      en: "Residential Architecture",
    },
    title: {
      de: "Mehrfamilienhaus Dreieich-Götzenhain",
      en: "Multi-Family Residential Building Dreieich-Goetzenhain",
    },
    subtitle: {
      de: "Neubau eines dreistöckigen Mehrfamilienhauses mit großen Fenstern und Balkonen im Baumbestand",
      en: "New Construction of a Three-Story Residential Building with Large Glazing and Balconies",
    },
    location: {
      de: "Dreieich-Götzenhain, Hessen",
      en: "Dreieich-Goetzenhain, Hesse",
    },
    client: {
      de: "Privater Bauherr & Investor",
      en: "Private Client & Investor",
    },
    legalBasis: "§ 34 BauGB / HBO",
    year: "2021",
    image: "/images/image-3a7a9c.jpg",
    imageAlt: "Neubau Mehrfamilienhaus in Dreieich Götzenhain 2021",
    overview: {
      de: "Neubau eines dreistöckigen Wohngebäudes in gewachsener Wohnlage von Dreieich-Götzenhain. Das architektonische Konzept besticht durch großzügige Verglasungen, sonnige Balkone und eine harmonische Einbindung in den alten Baumbestand.",
      en: "New construction of a three-story residential building in Dreieich-Goetzenhain. The architectural concept highlights expansive window openings, spacious balconies, and sensitive integration among mature trees.",
    },
    challenge: {
      de: "Erhalt des geschützten Baumbestands auf dem Grundstück bei gleichzeitiger Maximierung von Wohnfläche und natürlicher Belichtung.",
      en: "Preserving protected mature trees on the plot while optimizing usable floor space and maximizing natural daylight.",
    },
    concept: {
      de: "Moderne, klare Fassadengliederung, lichtdurchflutete Grundrisse und hochwertige energetische Dämmung für langfristigen Wohnkomfort.",
      en: "Modern, clean facade articulation, light-flooded layouts, and high-performance insulation ensuring long-term living comfort.",
    },
    outcome: {
      de: "Vollständige Realisierung und hohe Wohnzufriedenheit aller Bewohner.",
      en: "Full construction completion with outstanding client and resident satisfaction.",
    },
    keyFacts: {
      de: [
        "Dreistöckiger Neubau",
        "Großzügige Balkone & bodentiefe Fenster",
        "Harmonische Einbettung in Baumbestand",
        "Hohe Energieeffizienz",
      ],
      en: [
        "Three-Story New Development",
        "Spacious Balconies & Floor-to-Ceiling Windows",
        "Seamless Tree Canopy Integration",
        "High Energy Performance",
      ],
    },
  },
  {
    id: "qs-nachhaltiges-gebaeude-goetzenhain",
    slug: "qs-nachhaltiges-gebaeude-goetzenhain",
    publishedDate: "2025-04-10",
    category: "sustainability",
    categoryLabel: {
      de: "Nachhaltigkeit & Zertifizierung",
      en: "Sustainability & Certification",
    },
    title: {
      de: "Qualitätssiegel Nachhaltiges Gebäude (QNG), Götzenhain",
      en: "Quality Seal Sustainable Building (QNG), Goetzenhain",
    },
    subtitle: {
      de: "Ökobilanzierung (LCA), Lebenszyklusanalyse und QNG-Qualifizierung für Wohnungsbau",
      en: "Life Cycle Assessment (LCA) and Official QNG Certification for Residential Architecture",
    },
    location: {
      de: "Dreieich-Götzenhain, Hessen",
      en: "Dreieich-Goetzenhain, Hesse",
    },
    client: {
      de: "Bauherr & Investor",
      en: "Property Developer & Investor",
    },
    legalBasis: "Bundesförderung für effiziente Gebäude (KFW / QNG)",
    year: "2025",
    image: "/images/dreist-ckiges-mehrfamilienhaus-mit-gro-en-fenstern-a8b20c.png",
    imageAlt: "Dreistöckiges Mehrfamilienhaus mit großen Fenstern in Dreieich-Götzenhain",
    overview: {
      de: "Ganzheitliche Begleitung und Erstellung der Ökobilanzierung (Life Cycle Assessment, LCA) zur Erlangung des offiziellen staatlichen Qualitätssiegels Nachhaltiges Gebäude (QNG) für ein Mehrfamilienhaus in Dreieich-Götzenhain.",
      en: "Comprehensive Life Cycle Assessment (LCA) and consulting to achieve the official federal Quality Seal for Sustainable Buildings (QNG) for a multi-family property in Dreieich-Goetzenhain.",
    },
    challenge: {
      de: "Nachweis strenger Treibhausgasgrenzwerte über den gesamten Lebenszyklus des Gebäudes (Herstellung, Betrieb, Rückbau) zur Sicherung staatlicher KfW-Fördermittel und Zinsvorteile.",
      en: "Verifying strict lifecycle carbon limits (manufacturing, operation, deconstruction) to secure low-interest KfW federal green subsidies.",
    },
    concept: {
      de: "Auswahl emissionsarmer Baustoffe, langlebiger Konstruktionen, Optimierung der Gebäudehülle und Zertifizierungsbegleitung durch Shams Consult.",
      en: "Low-carbon material selection, durable construction detailing, envelope optimization, and complete certification management by Shams Consult.",
    },
    outcome: {
      de: "Erfolgreiche Sicherung der Bundesförderung und messbare Reduktion des ökologischen CO2-Fußabdrucks.",
      en: "Federal funding secured and measurable reduction in embodied carbon footprint.",
    },
    keyFacts: {
      de: [
        "Qualitätssiegel Nachhaltiges Gebäude (QNG)",
        "Ökobilanzierung & Lebenszyklusanalyse (LCA)",
        "Sicherung von KfW-Zinsvergünstigungen",
        "Dreieich-Götzenhain",
      ],
      en: [
        "Quality Seal Sustainable Building (QNG)",
        "Life Cycle Carbon Assessment (LCA)",
        "Secured Low-Interest KfW Subsidies",
        "Dreieich-Goetzenhain",
      ],
    },
  },
  {
    id: "vep-maienweg-ulm",
    slug: "vep-maienweg-ulm",
    publishedDate: "2023-11-10",
    category: "urban-planning",
    categoryLabel: {
      de: "Vorhabenbezogener Bebauungsplan",
      en: "Project-Based Zoning Plan",
    },
    title: {
      de: "Vorhabenbezogener Bebauungsplan „Maienweg 2“, Ulm",
      en: "Project-Based Zoning Plan 'Maienweg 2', Ulm",
    },
    subtitle: {
      de: "Innerstädtische Nachverdichtung gem. § 12 / § 13a BauGB im Stadtteil Söflingen",
      en: "Urban Infill Development under § 12 / § 13a BauGB in Ulm-Söflingen",
    },
    location: {
      de: "Ulm (Söflingen), Baden-Württemberg",
      en: "Ulm (Soeflingen), Baden-Wuerttemberg",
    },
    client: {
      de: "Göttfried Projektbau GmbH (Neu-Ulm) in Kooperation mit Planungsbüro Obermeier+Traub",
      en: "Göttfried Projektbau GmbH in cooperation with Obermeier+Traub Planning Practice",
    },
    legalBasis: "§ 12 Abs. 2 BauGB i.V.m. § 13a BauGB (Bebauungsplan der Innenentwicklung)",
    year: "2023",
    image: "/images/image-0996f8.jpg",
    imageAlt: "Vorhabenbezogener Bebauungsplan Maienweg 2 Ulm, Architekturbüro Shams Consult",
    overview: {
      de: "Umfassende städtebauliche Neugestaltung eines Grundstücks im Ulmer Stadtteil Söflingen. Der bis dahin geltende Bebauungsplan „Harthauser Straße“ von 1971 war veraltet. Im Rahmen eines vorhabenbezogenen Bebauungsplans der Innenentwicklung (§ 13a BauGB) wurde das alte Einfamilienhaus abgerissen und durch ein harmonisches Ensemble aus Einzel- und Doppelhausbebauung ersetzt.",
      en: "Comprehensive urban redevelopment of a residential plot in Ulm-Söflingen. The outdated 1971 master plan was superseded by a project-based zoning plan for inner development (§ 13a BauGB), replacing an obsolete single-family home with a modern ensemble of a single-family house and a semi-detached house.",
    },
    challenge: {
      de: "Das Grundstück war zwischenzeitlich aufgeteilt worden und das bestehende zweigeschossige Einfamilienhaus entsprach nicht mehr den aktuellen Planungsrichtlinien. Erforderlich war die Aufstellung eines vorhabenbezogenen Bebauungsplans nach § 12 Abs. 2 BauGB zur geordneten städtebaulichen Nachverdichtung.",
      en: "The plot had been subdivided over time and the existing structure no longer met planning guidelines. A project-based zoning plan under § 12 (2) BauGB was required to legally steer orderly urban densification.",
    },
    concept: {
      de: "Abriss des Bestandsgebäudes und Errichtung von zwei unabhängigen, zweigeschossigen Wohngebäuden mit Dachgeschoss (ein Einzelhaus und ein Doppelhaus). Die Baukörper fügen sich maßstäblich in die gewachsene Umgebung ein. Ein integrales Erschließungs- und Stellplatzkonzept wahrt die Gebietseigenart.",
      en: "Demolition of the existing building and construction of two independent two-story residential buildings with attics (one detached house and one semi-detached house), harmoniously scaled into the neighborhood with integrated on-site parking.",
    },
    outcome: {
      de: "Rechtskräftiger Satzungsbeschluss des Bebauungsplans durch den Gemeinderat der Stadt Ulm. Vorbildhafte innerstädtische Nachverdichtung mit gesicherter Erschließung und Aufwertung des Ortsbildes.",
      en: "Legally enacted binding zoning statute by the City Council of Ulm, achieving exemplary urban infill with secure access and architectural enhancement.",
    },
    keyFacts: {
      de: [
        "Bebauungsplan der Innenentwicklung gem. § 13a BauGB",
        "Realisierung von 1 Einzelhaus + 1 Doppelhaus",
        "Aufwertung des Ortsbilds in Ulm-Söflingen",
        "Vollständiger Vorhaben- und Erschließungsplan (VEP)",
      ],
      en: [
        "Inner Development Plan under § 13a BauGB",
        "1 Detached House + 1 Semi-Detached House",
        "Townscape Enhancement in Ulm-Soeflingen",
        "Complete Project & Infrastructure Plan (VEP)",
      ],
    },
    documents: [
      {
        title: "Vorhabenbezogener Bebauungsplan 'Maienweg 2' — Textliche Festsetzungen (PDF)",
        url: "https://www.ulm.de/-/media/ulm/sub/sub-i/downloads/bplaene-rechtskraeftig/vorhabenbezogener-bebauungsplan-maienweg-2/bplantextlfests-anl23maienwegmitgd.pdf",
        size: "3.65 MB",
      },
      {
        title: "Begründung zum Bebauungsplan 'Maienweg 2' (PDF)",
        url: "https://www.ulm.de/-/media/ulm/sub/sub-i/downloads/bplaene-rechtskraeftig/vorhabenbezogener-bebauungsplan-maienweg-2/anlage-4-begrndung.pdf",
        size: "0.12 MB",
      },
      {
        title: "Vorhaben- und Erschließungsplan (VEP) 'Maienweg 2' (PDF)",
        url: "https://www.ulm.de/-/media/ulm/sub/sub-i/downloads/bplaene-rechtskraeftig/vorhabenbezogener-bebauungsplan-maienweg-2/anlage-5-vorhaben--und-erschlieungsplne.pdf",
        size: "6.34 MB",
      },
      {
        title: "Öffentliche Bekanntmachung Stadt Ulm (PDF)",
        url: "https://www.ulm.de/-/media/ulm/sub/sub-i/downloads/bplaene-rechtskraeftig/vorhabenbezogener-bebauungsplan-maienweg-2/verffentlichung-swp.pdf",
        size: "0.65 MB",
      },
    ],
    externalReferenceUrl:
      "https://www.ulm.de/leben-in-ulm/bauen-und-wohnen/rund-ums-bauen/bebauungsplan/rechtsverbindliche-bebauungsplaene",
  },
  {
    id: "regenwasser-rigole-wohnanlage",
    slug: "regenwasser-rigole-wohnanlage",
    publishedDate: "2025-01-20",
    category: "sustainability",
    categoryLabel: {
      de: "Nachhaltiges Bauen & Außenanlagen",
      en: "Sustainable Drainage & Landscape",
    },
    title: {
      de: "Modulare Versickerungsrigole & Außenanlagen für Wohnanlage",
      en: "Modular Stormwater Infiltration Rigole & Residential Infrastructure",
    },
    subtitle: {
      de: "Dezentrales Regenwassermanagement (Schwammstadt), Retentionsrigole & Hofneugestaltung gem. DIN 1986-100 & DWA-A 138",
      en: "Decentralized stormwater management (Sponge City), mineral infiltration rigole & courtyard redevelopment under DIN 1986-100 & DWA-A 138",
    },
    location: {
      de: "Rhein-Main-Gebiet (Hessen)",
      en: "Rhine-Main Region (Hesse)",
    },
    client: {
      de: "Wohnungsbaugesellschaft & Private Bauträgergesellschaft",
      en: "Residential Housing Developer & Property Management",
    },
    legalBasis: "DIN 1986-100, DWA-A 138 & HOAI LPH 1–8 (Objektüberwachung)",
    year: "2024–2025",
    image: "/images/projects/shams-versickerungsrigole-regenwasser-aushub.jpg",
    imageAlt: "Modulare Versickerungsrigole mit Retentionsblöcken im Wohnungsbau, Architekturbüro Shams Consult",
    gallery: [
      {
        image: "/images/projects/shams-versickerungsrigole-regenwasser-aushub.jpg",
        title: {
          de: "Erdaushub & Rigolen-Unterbau",
          en: "Excavation Pit & Sub-base Preparation",
        },
        desc: {
          de: "Präziser maschineller Aushub der Baugrube und Einbau der ersten Lage mineralischer Retentions- und Sickerblöcke.",
          en: "Precision mechanical excavation and placement of high-capacity modular mineral retention blocks.",
        },
      },
      {
        image: "/images/projects/shams-rigolenversickerung-anschluss-leitungen.jpg",
        title: {
          de: "Zulaufverrohrung & Kanalanschlüsse",
          en: "Inflow Conduits & Pipework Interconnection",
        },
        desc: {
          de: "Verlegung und luftdichter Anschluss der grünen KG-Zufluss- und Überlaufrohre an den Rigolenkörper für Starkregenereignisse.",
          en: "Installation and sealed connection of drainage and overflow pipes directly to the attenuation core.",
        },
      },
      {
        image: "/images/projects/shams-retentionsbloecke-mineralwolle-rigole.jpg",
        title: {
          de: "Modulare Retentionsblöcke vor Ort",
          en: "Modular Mineral Retention Blocks On-Site",
        },
        desc: {
          de: "Hochverdichtete Steinwolle-Rigolenkörper mit werkseitigen Rohrdurchführungen für maximale Wasserspeicherkapazität.",
          en: "Dense mineral-based infiltration blocks with pre-drilled conduit channels providing maximum water absorption.",
        },
      },
      {
        image: "/images/projects/shams-wohnanlage-aussenanlagen-pflasterbau.jpg",
        title: {
          de: "Baugrubensicherung & Oberflächenherstellung",
          en: "Site Safety & Surface Reinstatement",
        },
        desc: {
          de: "Bauzaunsicherung, Schottertragschichtverdichtung mit Baumaschinen und Vorbereitung der Pflaster- und Hofzufahrten.",
          en: "Perimeter safety fencing, mechanized gravel compaction, and subgrade preparation for residential paving.",
        },
      },
    ],
    overview: {
      de: "Planung, Dimensionierung und bauleitende Begleitung einer hochmodernen, modularen Rigolenversickerungsanlage für ein Mehrfamilienhaus-Ensemble im Rhein-Main-Gebiet. Ziel des Projekts war die vollständige dezentrale Versickerung des anfallenden Niederschlagswassers direkt auf dem Grundstück nach dem Schwammstadt-Prinzip, um das öffentliche Kanalnetz bei Starkregenereignissen zu 100 % zu entlasten und dauerhaft Niederschlagswassergebühren einzusparen.",
      en: "Planning, hydraulic sizing, and full on-site construction supervision for an advanced modular stormwater infiltration rigole serving a residential multi-family complex in the Rhine-Main region. Guided by the Sponge City principle, the system ensures 100% on-site rainwater infiltration, decoupling the property from municipal sewers during extreme weather and sustainably reducing stormwater fees.",
    },
    challenge: {
      de: "Begrenzter Raum im Innenhof- und Garagenbereich bei gleichzeitig hohen Spitzenabflussmengen durch großflächige Dach- und Zufahrtsflächen. Zudem erforderte der anstehende Boden eine exakte bodenmechanische und hydrogeologische Berechnung der Versickerungsleistung gem. DWA-A 138 sowie eine statisch hochbelastbare Überfahrbarkeit durch Pkw und Lieferverkehr.",
      en: "Tight spatial constraints between garages and courtyard access combined with high peak runoff from roof and paved surfaces. The site demanded precise hydrogeological percolation calculations under DWA-A 138 and a heavy-duty structural load capacity for vehicle traffic.",
    },
    concept: {
      de: "Einbau eines hocheffizienten, modularen Rigolensystems aus mineralischen Retentionsblöcken mit extrem hoher Hohlraumquote (> 95 %). Die vorkonfektionierten Blöcke nehmen Niederschlagswasser schlagartig auf und geben es zeitverzögert und gefiltert an das umliegende Erdreich ab. Ein mehrstufiges Filtersystem mit Schlammfängen verhindert das Zusetzen der Sickerporen.",
      en: "Installation of a modular mineral retention rigole offering over 95% void volume for instantaneous water uptake and controlled, filtered subsoil percolation. Upstream silt traps and multi-stage sediment filters prevent pore clogging and guarantee decades of maintenance-free operation.",
    },
    outcome: {
      de: "Erfolgreiche technische Abnahme und mängelfreie Inbetriebnahme der Anlage. Vollständige Abkopplung der Hofflächen vom Mischwasserkanal, nachhaltige Grundwasserneubildung vor Ort und deutliche Reduzierung der laufenden kommunalen Entwässerungsgebühren für die Eigentümergemeinschaft.",
      en: "Successful technical handover with zero defects. Complete decoupling of paved areas from the municipal combined sewer, on-site groundwater replenishment, and significant long-term municipal drainage fee savings for the owners.",
    },
    keyFacts: {
      de: [
        "100% dezentrale Regenwasserversickerung (Schwammstadt-Prinzip)",
        "Modulare mineralische Retentionsblöcke mit > 95% Hohlraumvolumen",
        "Vollständige Entlastung des kommunalen Kanalnetzes bei Starkregen",
        "HOAI Leistungsphasen 1–8 inkl. Vor-Ort-Bauüberwachung & Abnahme",
        "Dauerhafte Ersparnis bei kommunalen Niederschlagswassergebühren",
      ],
      en: [
        "100% decentralized on-site stormwater infiltration (Sponge City principle)",
        "Modular mineral infiltration blocks with > 95% void capacity",
        "Complete relief of municipal sewer infrastructure during heavy storms",
        "HOAI project phases 1–8 including full on-site supervision & certification",
        "Permanent operational savings on municipal rainwater drainage fees",
      ],
    },
    externalReferenceUrl:
      "https://www.hna.de/lokales/rotenburg-bebra/bebra-ort46578/bebra-it-rechenzentrum-bau-projekt-plan-konzept-idee-investition-news-94362529.html",
    externalReferenceTitle: {
      de: "HNA-Pressebericht: Rechenzentrum & Bau-Projekt Bebra",
      en: "HNA Press Article: Data Center & Construction Project Bebra",
    },
    blogSlug: "wirtschaftliche-umsetzung-nachhaltiger-projekte",
  },
  {
    id: "einfamilienhaus-lingen-ems",
    slug: "einfamilienhaus-lingen-ems",
    publishedDate: "2021-05-18",
    category: "residential",
    categoryLabel: {
      de: "Individueller Wohnungsbau",
      en: "Custom Residential",
    },
    title: {
      de: "Einfamilienhaus Lingen (Ems)",
      en: "Single-Family Residence Lingen (Ems)",
    },
    subtitle: {
      de: "Planung, Baugenehmigung und schlüsselfertige Realisierung von der Bodenplatte bis zum Innenausbau",
      en: "Planning, Permitting, and Turnkey Realization from Foundation to Interior Finishing",
    },
    location: {
      de: "Lingen (Ems), Niedersachsen",
      en: "Lingen (Ems), Lower Saxony",
    },
    client: {
      de: "Private Bauherrenfamilie",
      en: "Private Family Client",
    },
    legalBasis: "B-Plan / NBauO",
    year: "2021",
    image: "/images/image-09c215.jpg",
    imageAlt: "Realisierung 2021, Einfamilienhaus, Lingen (Ems)",
    overview: {
      de: "Ganzheitliche Betreuung eines modernen Einfamilienhauses über alle Leistungsphasen: Entwurf, Bauantrag, Ausführungsplanung, Bauüberwachung von der Bodenplatte über den Rohbau bis zu den bodentiefen Fenstern und dem Innenausbau.",
      en: "Full-service architectural delivery for a contemporary single-family home across all phases: concept, building permit, detailed drawings, and site supervision from foundation to finished interiors.",
    },
    challenge: {
      de: "Maßgeschneiderte Umsetzung individueller Bauherrenwünsche bei strikter Einhaltung des Budgets und des Terminplans.",
      en: "Delivering customized client requirements while strictly managing budget and project milestones.",
    },
    concept: {
      de: "Offenes Raumkonzept im Erdgeschoss mit direktem Gartenbezug, private Rückzugsbereiche im Obergeschoss und moderne Wärmepumpentechnik.",
      en: "Open ground-floor living connected to the garden, private upper-floor suites, and modern heat-pump mechanical systems.",
    },
    outcome: {
      de: "Erfolgreiche Übergabe des schlüsselfertigen Wohnhauses an die Bauherrenfamilie.",
      en: "Successful handover of the turnkey residence to the delighted family.",
    },
    keyFacts: {
      de: [
        "Leistungsphasen 1–8 HOAI",
        "Bodentiefe Fensterfronten",
        "Massivbauweise mit Wärmedämmverbund",
        "Vollständige Bauüberwachung",
      ],
      en: [
        "Phases 1–8 HOAI",
        "Floor-to-Ceiling Windows",
        "Solid Masonry with Thermal Insulation",
        "Complete Site Supervision",
      ],
    },
  },
];

export const projects: Project[] = [...rawProjects];
