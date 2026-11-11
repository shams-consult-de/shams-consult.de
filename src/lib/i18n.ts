export type Language = "de" | "en";

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    projects: string;
    siteVisits: string;
    akhBadge: string;
    caseStudies: string;
    process: string;
    blog: string;
    contact: string;
    bookConsultation: string;
    research: string;
    founder: string;
    aboutOffice: string;
  };
  hero: {
    eyebrow: string;
    titlePart1: string;
    titleHighlight: string;
    subtitle: string;
    philosophyStatement: string;
    bookConsultation: string;
    viewProjects: string;
    founderName: string;
    founderTitle: string;
    founderRole: string;
    founderCompany: string;
    founderStoryCta: string;
    trustBadges?: Array<{
      label: string;
      detail: string;
    }>;
  };
  team: {
    badge: string;
    title: string;
    description: string;
    expertCountBadge: string;
    ctaButton: string;
  };
  metrics: {
    yearsExp: { value: string; label: string };
    completedProjects: { value: string; label: string };
    largestProject: { value: string; label: string };
    dinVob: { value: string; label: string };
  };
  akhRegistration: {
    badge: string;
    title: string;
    description: string;
    statutoryNotice: string;
  };
  clients: {
    badge: string;
    heading: string;
    subtitle: string;
    viewAll: string;
    backToHome: string;
    pageTag: string;
    visitWebsite: string;
    viewCaseStudy: string;
    ctaHeading: string;
    ctaSubtitle: string;
    ctaButton: string;
    networkBadge: string;
    networkTitle: string;
    networkCount: string;
    networkDesc: string;
    disciplines: {
      structural: string;
      mep: string;
      energy: string;
      fireSafety: string;
      tendering: string;
      landscape: string;
    };
    siteVisitsBadge: string;
    siteVisitsTitle: string;
    siteVisitsSubtitle: string;
    siteVisit1Title: string;
    siteVisit1Desc: string;
    siteVisit2Title: string;
    siteVisit2Desc: string;
    viewAllSiteVisits: string;
    pressBadge: string;
  };
  services: {
    badge: string;
    title: string;
    viewAll: string;
    items: Array<{
      title: string;
      desc: string;
    }>;
  };
  process: {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    subtitle: string;
    steps: Array<{
      num: string;
      name: string;
      desc: string;
      norm?: string;
    }>;
  };
  videoGuide: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    takeaways: string[];
    ctaConsultation: string;
    ctaChannel: string;
    privacyNote: string;
  };
  vob: {
    badge: string;
    title: string;
    subtitle: string;
    guaranteeBadge: string;
    pillars: Array<{
      part: string;
      title: string;
      desc: string;
    }>;
  };
  caseStudies: {
    badge: string;
    title: string;
    subtitle: string;
    googleRating: string;
    reviewsCount: string;
    allReviews: string;
    viewCaseStudy: string;
  };
  projects: {
    badge: string;
    viewAll: string;
    items: Array<{
      title: string;
      location: string;
      image: string;
    }>;
  };
  projectsPage: {
    backToHome: string;
    badge: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterUrban: string;
    filterResidential: string;
    filterCommercial: string;
    filterEducation: string;
    filterSustainability: string;
    viewDetails: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
  };
  projectDetail: {
    backToProjects: string;
    clientLabel: string;
    locationLabel: string;
    legalBasisLabel: string;
    yearLabel: string;
    scopeLabel: string;
    highlightsTitle: string;
    challengeTitle: string;
    objectiveTitle: string;
    conceptTitle: string;
    outcomeTitle: string;
    officialDocsTitle: string;
    bindingNotice: string;
    inquiryHeading: string;
    inquirySub: string;
    inquiryButton: string;
    allProjectsButton: string;
  };
  research: {
    badge: string;
    title: string;
    subtitle: string;
    academicRole: string;
    institution: string;
    viewTheses: string;
    backToHome: string;
    thesesTitle: string;
    thesesSubtitle: string;
    statTheses: string;
    statThesesLabel: string;
    statFields: string;
    statFieldsLabel: string;
    statPractice: string;
    statPracticeLabel: string;
    filterAll: string;
    filterPub: string;
    filterMaster: string;
    filterBachelor: string;
    topicsLabel: string;
    academicFocus: string;
    downloadPdf: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
    openThesesBadge: string;
    openThesesTitle: string;
    openThesesSubtitle: string;
    openThesesParagraph2: string;
    openThesesApplyHint: string;
    viewDetails: string;
    downloadFlyerTitle: string;
    archiveBadge: string;
    archiveTitle: string;
    supervisionLabel: string;
    announcementBadge: string;
  };
  founder: {
    badge: string;
    name: string;
    roles: string;
    bio: string;
    button: string;
    stats: Array<{
      title: string;
      desc: string;
    }>;
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    backToHome: string;
    profileBadge: string;
    profileTitle: string;
    profileText1: string;
    profileText2: string;
    qualificationsBadge: string;
    qualificationsTitle: string;
    akhRegistrationTitle: string;
    akhRegistrationDesc: string;
    qngTitle: string;
    qngDesc: string;
    academiaTitle: string;
    academiaDesc: string;
    teamBadge: string;
    teamTitle: string;
    teamSubtitle: string;
    siteVisitsCtaBadge: string;
    siteVisitsCtaTitle: string;
    siteVisitsCtaDesc: string;
    siteVisitsCtaButton: string;
    founderStoryBadge: string;
    founderStoryTitle: string;
    founderStoryDesc: string;
    founderStoryButton: string;
    viewResearchContributions: string;
  };
  siteVisitsPage: {
    backToHome: string;
    badge: string;
    title: string;
    subtitle: string;
    proofNotice: string;
    viewHighRes: string;
    viewAlbum: string;
    closeLightbox: string;
    photoRecordLabel: string;
    prev: string;
    next: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
    items: Array<{
      id: string;
      image: string;
      tag: string;
      phase: string;
      title: string;
      desc: string;
    }>;
  };
  blog: {
    badge: string;
    title: string;
    subtitle: string;
    viewAll: string;
    readMore: string;
    allTopics: string;
    searchPlaceholder: string;
    noResults: string;
    resetFilters: string;
    backToHome: string;
    backToBlog: string;
    availableArticles: string;
    authorName: string;
    authorRole: string;
    moreArticles: string;
    relatedTopics: string;
    ctaHeading: string;
    ctaSubheading: string;
    ctaButton: string;
    prev: string;
    next: string;
    pauseScroll: string;
    startScroll: string;
  };
  contact: {
    badge: string;
    headlinePart1: string;
    headlineHighlight: string;
    subtitle: string;
    calendarCardTitle: string;
    calendarCardHeading: string;
    calendarCardDesc: string;
    calendarCardButton: string;
    calendarCardBenefits: string[];
    emailCardTitle: string;
    emailCardDesc: string;
    emailCardButton: string;
    whatsappTitle: string;
    whatsappDesc: string;
    whatsappButton: string;
    whatsappMessage: string;
    phoneCardTitle: string;
    phoneCardDesc: string;
    liveCalendar: string;
    onlineStatus: string;
    getDirections: string;
    mapTabLabel: string;
    directPhone: string;
    officesTitle: string;
    officesSubtitle: string;
    insuranceReassurance: string;
  };
  mobileActionBar: {
    call: string;
    whatsapp: string;
    email: string;
    book: string;
  };
  legal: {
    backToHome: string;
    impressumTitle: string;
    datenschutzTitle: string;
    barrierefreiheitTitle: string;
    widerrufTitle: string;
    close: string;
    informationProvider: string;
    owner: string;
    contact: string;
    chamber: string;
    insurance: string;
    responsibleAuthority: string;
  };
  footer: {
    description: string;
    quickLinksTitle: string;
    servicesTitle: string;
    contactTitle: string;
    followTitle: string;
    brandTagline: string;
    legalImpressum: string;
    legalDatenschutz: string;
    legalBarrierefreiheit: string;
    legalWiderruf: string;
    cookieSettings: string;
    developedBy: string;
    rights: string;
    vCardLink: string;
  };
  notFound: {
    badge: string;
    title: string;
    message: string;
    requestedPathLabel: string;
    backHome: string;
    exploreProjects: string;
    aboutUs: string;
    contactUs: string;
    needAssistance: string;
  };
  regionalLandingPage: {
    homeBreadcrumb: string;
    akhRegistrationBadge: string;
    experienceBadge: string;
    requestConsultation: string;
    callDirectly: string;
    regionalExpertiseBadge: string;
    realReferencesBadge: string;
    realizedProjectsHeading: string;
    realizedProjectsSubtitle: string;
    viewProjectDetails: string;
    structuredWorkflowBadge: string;
    hoaiPhasesHeading: string;
    hoaiPhasesSubtitle: string;
    deliverablesLabel: string;
    officeAvailableBadge: string;
    addressLabel: string;
    phoneLabel: string;
    scheduleOfficeAppointment: string;
    startProjectBadge: string;
    ctaSubtitle: string;
    districtsBadge: string;
    districtsHeading: string;
    districtsSubtitle: string;
    selectDistrictAria: string;
    coveredMicroLocationsLabel: string;
    inquireProjectButton: string;
    callOfficeButton: string;
    architecturalFocusHeading: string;
    zoningRequirementsHeading: string;
    districtActionPrompt: string;
    inquireDistrictAction: string;
    readyForProjectPrefix: string;
    faqBadge: string;
    faqHeading: string;
    faqSubtitle: string;
    faqActionPrompt: string;
    faqActionCta: string;
    serviceTriadBadge: string;
    serviceTriadHeading: string;
    serviceTriadSubtitlePrefix: string;
    serviceTriadSubtitleSuffix: string;
    pillar1Tag: string;
    pillar1Title: string;
    pillar1Subtitle: string;
    pillar1Desc: string;
    pillar1Bullets: string[];
    pillar2Tag: string;
    pillar2Title: string;
    pillar2Subtitle: string;
    pillar2Desc: string;
    pillar2Bullets: string[];
    pillar3Tag: string;
    pillar3Title: string;
    pillar3Subtitle: string;
    pillar3Desc: string;
    pillar3Bullets: string[];
    learnMore: string;
    referencesBadge: string;
    referencesHeading: string;
    referencesSubtitlePrefix: string;
    referencesSubtitleSuffix: string;
  };
  faqSection: {
    badge: string;
    heading: string;
    subtitle: string;
    actionPrompt: string;
    actionCta: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  vCard: {
    backToHome: string;
    showQrCode: string;
    pageSubtitle: string;
    verified: string;
    roleSubtitle: string;
    subTitleDetail: string;
    chamberTitle: string;
    saveButtonText: string;
    saveButtonSubtext: string;
    downloadSuccessNotice: string;
    quickActionsHeading: string;
    frankfurtOffice: string;
    roedermarkOffice: string;
    whatsappTitle: string;
    whatsappSubtitle: string;
    emailTitle: string;
    bookConsultationTitle: string;
    bookConsultationSubtitle: string;
    locationsHeading: string;
    hqTitle: string;
    branchTitle: string;
    routeButton: string;
    websiteText: string;
    conferenceModalTag: string;
    conferenceModalSubtitle: string;
    directDownloadButton: string;
    closeModal: string;
    stickySaveText: string;
    callButton: string;
    qrSectionTitle: string;
    qrSectionSubtitle: string;
  };
  founderPage: {
    backToHome: string;
    founderPortal: string;
    portalTooltip: string;
    pageSubtitle: string;
    storyBadge: string;
    storyTitle: string;
    storySubtitle: string;
    founderRole: string;
    academicCredentials: string;
    degree1: string;
    degree2: string;
    chamberMembership: string;
    lecturerRole: string;
    gratitudeBadge: string;
    gratitudeTitle: string;
    gratitudeQuote: string;
    lecturerTag: string;
    pressBadge: string;
    pressTitle: string;
    pressCaptionPrefix: string;
    pressCaption: string;
    consultationHeading: string;
    consultationDesc: string;
    consultationCta: string;
  };
  researchTopicPage: {
    backToHub: string;
    departmentLabel: string;
    overviewLabel: string;
    caseStudyBadge: string;
    factsHeading: string;
    problemHeading: string;
    objectivesHeading: string;
    researchQuestionsHeading: string;
    frameworkBadge: string;
    frameworkHeading: string;
    sourcesHeading: string;
    faqBadge: string;
    faqHeading: string;
    faqSubtitle: string;
    ctaBadge: string;
    ctaTitle: string;
    ctaDescription: string;
    trustMentor: string;
    trustData: string;
    trustCredit: string;
    pdfFlyerButton: string;
    applyEmailButton: string;
    otherTopicsHeading: string;
    mobileApplyButton: string;
    emailGreeting: string;
    emailBodyInterest: string;
    emailBodyAttachment: string;
    emailBodyMeeting: string;
    emailClosing: string;
    faqs: Array<{
      question: string;
      answer: string;
    }>;
  };
  cookieBanner: {
    ariaLabel: string;
    badge: string;
    title: string;
    closeModal: string;
    description: string;
    essentialTitle: string;
    alwaysActive: string;
    essentialAria: string;
    essentialDesc: string;
    analyticsTitle: string;
    analyticsDesc: string;
    lessDetails: string;
    customizeSettings: string;
    privacy: string;
    imprint: string;
    saveSelection: string;
    acceptAll: string;
    acceptEssential: string;
  };
}

export const content: Record<Language, Translations> = {
  de: {
    nav: {
      home: "Start",
      about: "Über uns",
      services: "Leistungen",
      projects: "Projekte",
      siteVisits: "Praxis-Einblicke",
      akhBadge: "AKH Hessen #21886 · Frankfurt UAS",
      caseStudies: "Kundenstimmen",
      process: "Prozess",
      blog: "Magazin",
      contact: "Kontakt",
      bookConsultation: "Erstgespräch anfragen",
      research: "Forschung & Lehre",
      founder: "Gründer",
      aboutOffice: "Über das Büro",
    },
    hero: {
      eyebrow: "Architekturbüro für Architektur, Stadtplanung & Projektentwicklung",
      titlePart1: "Die Beziehungen, die wir aufbauen, sind genauso wichtig",
      titleHighlight: "wie die Gebäude, die wir entwerfen.",
      subtitle:
        "Architektur, Stadtplanung und Projektentwicklung für öffentliche Auftraggeber, Investoren und private Bauherren in Frankfurt am Main, Rödermark & Rhein-Main.",
      philosophyStatement:
        "Die Beziehungen, die wir aufbauen, sind genauso wichtig wie die Gebäude, die wir entwerfen.",
      bookConsultation: "Erstgespräch anfragen",
      viewProjects: "Projekte ansehen",
      founderName: "Dipl.-Ing. Majeed Shams",
      founderTitle: "Architekt · Stadtplaner",
      founderRole: "Dozent · Gründer",
      founderCompany: "Shams Consult",
      founderStoryCta: "Persönliche Geschichte & Werdegang lesen →",
      trustBadges: [
        { label: "AKH Hessen", detail: "Eingetragener Architekt & Stadtplaner" },
        { label: "HOAI 1–9 & VOB", detail: "Amtliche Honorar- & Vergabeordnung" },
        { label: "DIN 276 Kostenkontrolle", detail: "Garantierte Kostensicherheit" },
        { label: "Frankfurt UAS", detail: "Dozent & Bauforschung" },
      ],
    },
    team: {
      badge: "UNSER EXPERTENTEAM",
      title: "Team aus 16 Architekten & Fachplanern",
      description:
        "Planungs- & Baumanagement-Team unter Leitung von Dipl.-Ing. Majeed Shams.",
      expertCountBadge: "+12",
      ctaButton: "Team kennenlernen",
    },
    metrics: {
      yearsExp: { value: "17+", label: "Jahre Erfahrung" },
      completedProjects: { value: "100+", label: "Realisierte Projekte" },
      largestProject: { value: "€13,5 Mio.", label: "Größtes Projektvolumen" },
      dinVob: { value: "100% DIN & VOB", label: "Deutsche Planungs- & Qualitätsstandards" },
    },
    akhRegistration: {
      badge: "AKH HESSEN · KDÖR",
      title: "Eingetragener Architekt & Stadtplaner (AKH Hessen · KdöR)",
      description:
        "Staatlich geschützte Berufsbezeichnung mit uneingeschränkter Bauvorlageberechtigung in allen Bundesländern · Gesetzlich vollumfänglich berufshaftpflichtversichert (§ 16 HASG).",
      statutoryNotice: "Eingetragenes Mitglied der Architekten- und Stadtplanerkammer Hessen (AKH Nr. 21886).",
    },
    clients: {
      badge: "Ausgewählte Kunden & Partner",
      heading: "Vertrauen aus Wirtschaft, Kommunen & Wissenschaft.",
      subtitle:
        "Ausgewählte institutionelle Auftraggeber, Projektentwickler und Partner, mit denen wir gemeinsam anspruchsvolle Bau- und Planungsprojekte realisieren.",
      viewAll: "Alle Kunden ansehen",
      backToHome: "Zurück zur Startseite",
      pageTag: "Kunden & Partner",
      visitWebsite: "Offizielle Website besuchen",
      viewCaseStudy: "Projektdetails ansehen",
      ctaHeading: "Planen Sie ein gemeinsames Projekt?",
      ctaSubtitle: "Lassen Sie uns unverbindlich über Ihr Bauvorhaben, Machbarkeiten und Planungsrecht sprechen.",
      ctaButton: "Termin vereinbaren →",
      networkBadge: "16+ EXPERTEN IM FESTEN PLANERVERBUND",
      networkTitle: "Kernteam & erweitertes interdisziplinäres Ingenieurnetzwerk",
      networkCount: "16+ Fachkräfte gesamt",
      networkDesc:
        "Unser 6-köpfiges Leitungs- und Planungsteam wird bei komplexen Bauvorhaben durch 10+ fest assoziierte Statiker, TGA-Fachplaner, Energieberater und Bauphysiker nahtlos verstärkt. So garantieren wir maximale Fachkompetenz und termintreue Abwicklung für Projekte jeder Größenordnung (bis 13,5 Mio. €).",
      disciplines: {
        structural: "Tragwerksplanung & Statik",
        mep: "TGA & Gebäudetechnik",
        energy: "Energieeffizienz & QNG/LCA",
        fireSafety: "Brandschutz & Bauphysik",
        tendering: "VOB-Massenermittlung & Ausschreibung",
        landscape: "Freianlagen & Landschaftsplanung",
      },
      siteVisitsBadge: "VOR-ORT-PRÄSENZ & PARTNERSCHAFT",
      siteVisitsTitle: "Persönliche Bauherrenberatung & Bestandsaufnahmen vor Ort",
      siteVisitsSubtitle:
        "Architektur entsteht nicht nur am Schreibtisch. Dipl.-Ing. Majeed Shams begleitet Bauherren persönlich vor Ort – von der millimetergenauen Bestandsaufnahme bis zur fundierten baurechtlichen Erstberatung.",
      siteVisit1Title: "Persönliche Beratung & Vertrauensaufbau",
      siteVisit1Desc:
        "Direkter Dialog auf Augenhöhe: Verständnis für individuelle Bauwünsche, Kostenrahmen und baurechtliche Spielräume.",
      siteVisit2Title: "Präzises Bauaufmaß & Technische Vermessung",
      siteVisit2Desc:
        "Exakte digitale und manuelle Erfassung der Bausubstanz als rechtssichere Planungsgrundlage für HOAI Phasen 1–4.",
      viewAllSiteVisits: "Vollständige Vor-Ort-Fotodokumentation & Baustelleneinblicke ansehen",
      pressBadge: "Pressebericht",
    },
    services: {
      badge: "Unsere Leistungen",
      title: "Architektur, Stadtplanung & Projektentwicklung",
      viewAll: "Alle Leistungen ansehen",
      items: [
        {
          title: "Architektur & Hochbau",
          desc: "Funktionale, ästhetische und nachhaltige Gebäudeplanung über alle Leistungsphasen.",
        },
        {
          title: "Stadt- & Bauleitplanung",
          desc: "Rechtssichere Bebauungspläne und städtebauliche Konzepte, in denen Zukunft wächst.",
        },
        {
          title: "Projektentwicklung",
          desc: "Minimierung von Investitionsrisiken durch strategische Baurechts- und Kostensteuerung.",
        },
        {
          title: "Baurecht & Nutzungsänderung",
          desc: "Rechtssichere Bauanträge, Nutzungsänderungen (Gewerbe zu Wohnen) und bauordnungsrechtliche Due Diligence nach HBO.",
        },
      ],
    },
    process: {
      badge: "HOAI-Leistungsphasen 1–9",
      titlePart1: "Strukturierte Planung nach",
      titlePart2: "HOAI-Leistungsphasen.",
      subtitle: "Vom ersten Konzept bis zur schlüsselfertigen Übergabe — planungssicher nach amtlicher Honorarordnung für Architekten.",
      steps: [
        { num: "01", name: "Grundlagenermittlung", desc: "Bedarfsanalyse, Standortprüfung & HOAI-Zieldefinition", norm: "HOAI § 34" },
        { num: "02", name: "Vorplanung", desc: "Erste Entwurfsskizzen, Machbarkeit & Kostenschätzung (DIN 276)", norm: "DIN 276" },
        { num: "03", name: "Entwurfsplanung", desc: "Durchgearbeitetes architektonisches Gesamtkonzept & Kostenberechnung", norm: "DIN 276" },
        { num: "04", name: "Genehmigungsplanung", desc: "Rechtssicherer Bauantrag nach HBO/LBO & direkte Behördenabstimmung", norm: "HBO / LBO" },
        { num: "05", name: "Ausführungsplanung", desc: "Detaillierte Werkpläne 1:50 bis 1:1 & Statik-/TGA-Koordination", norm: "DIN / VDI" },
        { num: "06", name: "Vorbereitung der Vergabe", desc: "VOB-konforme Massenermittlung & rechtssichere Leistungsverzeichnisse", norm: "VOB/A" },
        { num: "07", name: "Mitwirkung bei der Vergabe", desc: "Neutrale Angebotsprüfung, Preisspiegel & Vergabeverhandlungen", norm: "VOB" },
        { num: "08", name: "Objektüberwachung", desc: "Qualifizierte Bauleitung vor Ort, Qualitätskontrolle & Terminüberwachung", norm: "LBO / VOB/B" },
        { num: "09", name: "Objektbetreuung", desc: "Förmliche Bauabnahme, Mängelbeseitigung & Gewährleistungsdokumentation", norm: "BGB / VOB" },
      ],
    },
    videoGuide: {
      badge: "Video-Leitfaden · Baurecht & Genehmigung",
      title: "Ist Ihr Bauvorhaben überhaupt genehmigungsfähig?",
      subtitle: "Praxiswissen direkt vom Architekten & Stadtplaner",
      description: "Erfahren Sie von Dipl.-Ing. Majeed Shams, wie Sie bereits vor Grundstückskauf oder Bauantrag baurechtliche Risiken ausschließen und die Genehmigungsfähigkeit nach § 34 BauGB oder Bebauungsplan sichern.",
      takeaways: [
        "Baurechtliche Vorprüfung (§ 34 BauGB / Bebauungsplan)",
        "Vorbescheid & Risikominimierung vor dem Grundstückskauf",
        "Schneller zum genehmigten Bauantrag ohne Behördenstau",
      ],
      ctaConsultation: "Erstgespräch vereinbaren",
      ctaChannel: "YouTube-Kanal besuchen",
      privacyNote: "Datenschutz-Hinweis: Video wird im erweiterten Datenschutzmodus (youtube-nocookie.com) geladen.",
    },
    vob: {
      badge: "DE Norm",
      title: "VOB-Konformität",
      subtitle: "Vergabe- & Bauvertragsordnung",
      guaranteeBadge: "100% Rechtssicher & Mängelfrei",
      pillars: [
        {
          part: "VOB/A",
          title: "Ausschreibung & Vergabe",
          desc: "Transparente Preisvergleiche ohne verdeckte Kosten",
        },
        {
          part: "VOB/B",
          title: "Vertragsrecht & Fristen",
          desc: "Rechtssichere Bauverträge und verbindliche Termintreue",
        },
        {
          part: "VOB/C",
          title: "Technische Baunormen",
          desc: "Strikte DIN-Konformität und aktive Mängelprävention",
        },
      ],
    },
    caseStudies: {
      badge: "GOOGLE-BEWERTUNGEN IM DETAIL",
      title: "5.0 Sterne Google-Bewertungen",
      subtitle: "Echte Erfahrungsberichte von Bauherren & die Geschichten hinter den Bewertungen.",
      googleRating: "5.0",
      reviewsCount: "100% Empfehlungsrate",
      allReviews: "Alle Rezensionen ansehen",
      viewCaseStudy: "Erfahrungsbericht lesen",
    },
    projects: {
      badge: "Ausgewählte Projekte",
      viewAll: "Alle Projekte ansehen",
      items: [
        {
          title: "Büro- & Gewerbekomplex",
          location: "Frankfurt am Main, Deutschland",
          image: "/images/architektenleistung-leistungsphasen-1-9-hoai-.jpg",
        },
        {
          title: "Wohnbebauung & Mehrfamilienhaus",
          location: "Wiesbaden, Deutschland",
          image: "/images/dreist-ckiges-mehrfamilienhaus-mit-gro-en-fenstern-a8b20c.png",
        },
        {
          title: "Bildungs- & Forschungscampus",
          location: "Darmstadt, Deutschland",
          image: "/images/architektenleistung-leistungsphasen-1-8-hoai-.jpg",
        },
      ],
    },
    projectsPage: {
      backToHome: "Zurück zur Startseite",
      badge: "PROJEKTÜBERSICHT",
      title: "Ausgewählte Architektur- & Stadtplanungsprojekte.",
      subtitle: "Von städtebaulichen Bebauungsplänen über großvolumige Mischnutzungen bis zu prämierten Wohn- und Gewerbebauten.",
      filterAll: "Alle Projekte",
      filterUrban: "Stadt- & Bauleitplanung",
      filterResidential: "Wohnungsbau",
      filterCommercial: "Gewerbebau & Mischnutzung",
      filterEducation: "Bildungsbau",
      filterSustainability: "Nachhaltigkeit & QNG",
      viewDetails: "Projektdetails ansehen",
      ctaTitle: "Haben Sie ein Bauvorhaben in Planung?",
      ctaSubtitle: "Sichern Sie sich fundierte baurechtliche Klarheit und planungssichere HOAI-Begleitung für Ihr Vorhaben.",
      ctaButton: "Erstgespräch vereinbaren →",
    },
    projectDetail: {
      backToProjects: "Zurück zur Projektübersicht",
      clientLabel: "Auftraggeber & Partner",
      locationLabel: "Standort",
      legalBasisLabel: "Rechtsgrundlage / Verfahren",
      yearLabel: "Jahr / Status",
      scopeLabel: "Planungsleistung",
      highlightsTitle: "PROJEKT-HIGHLIGHTS",
      challengeTitle: "1. Ausgangslage & städtebauliche Herausforderung",
      objectiveTitle: "2. Zielsetzung & Planungsrechtliche Einordnung",
      conceptTitle: "3. Städtebauliches & Architektonisches Konzept",
      outcomeTitle: "4. Ergebnis & Mehrwert für Bauherr und Kommune",
      officialDocsTitle: "AMTLICHE PLANUNGSUNTERLAGEN",
      bindingNotice: "Rechtskräftige Satzungen und amtliche Begründungen gemäß BauGB/LBO.",
      inquiryHeading: "Planen Sie ein ähnliches Vorhaben?",
      inquirySub: "Lassen Sie uns baurechtliche Möglichkeiten und städtebauliche Potenziale Ihres Grundstücks fundiert prüfen.",
      inquiryButton: "Projekt-Erstberatung vereinbaren →",
      allProjectsButton: "Alle Projekte anzeigen",
    },
    research: {
      badge: "WISSENSCHAFT & FORSCHUNG",
      title: "Forschung, Lehre & Wissenschaft",
      subtitle: "Akademischer Lehrauftrag an der Frankfurt University of Applied Sciences (Frankfurt UAS) am Fachbereich 1.",
      academicRole: "Dozent & Wissenschaftlicher Betreuer",
      institution: "Frankfurt University of Applied Sciences",
      viewTheses: "Forschungsarbeiten & Abschlussarbeiten einsehen →",
      backToHome: "Zurück zur Startseite",
      thesesTitle: "Wissenschaftliche Arbeiten & Fachpublikationen",
      thesesSubtitle: "Praxisorientierte Spitzenforschung und Betreuung von Master- und Bachelorabschlussarbeiten an der Frankfurt University of Applied Sciences.",
      statTheses: "7+",
      statThesesLabel: "Publikationen & Thesen",
      statFields: "5+",
      statFieldsLabel: "Forschungsbereiche",
      statPractice: "100%",
      statPracticeLabel: "Praxistransfer",
      filterAll: "Alle Arbeiten",
      filterPub: "Fachpublikationen",
      filterMaster: "Masterarbeiten",
      filterBachelor: "Bachelorarbeiten",
      topicsLabel: "Themen:",
      academicFocus: "Akademischer Schwerpunkt:",
      downloadPdf: "Dokumentation / Abstract ansehen",
      ctaTitle: "Interesse an einer wissenschaftlichen Kooperation?",
      ctaSubtitle: "Wir vergeben praxisnahe Forschungsthemen und begleiten anspruchsvolle Abschlussarbeiten in Kooperation mit der Frankfurt UAS.",
      ctaButton: "Kontakt für Forschungskooperationen →",
      openThesesBadge: "AKTUELLE AUSSCHREIBUNGEN (ABSCHLUSSARBEITEN)",
      openThesesTitle: "Praxis trifft Wissenschaft: Jetzt Abschlussarbeit schreiben",
      openThesesSubtitle: "Shams Consult arbeitet seit Jahren mit Hochschulen zusammen und betreut Bachelor- und Masterarbeiten als Zweitbetreuer. Mit unseren aktuellen Forschungsthemen möchten wir Fragen aus der täglichen Planungspraxis wissenschaftlich vertiefen – Fragen, die für Gesellschaft, Architektur und Bauwesen heute besonders relevant sind: der Umgang mit Regenwasser in der klimaangepassten Stadt, das Bauen im Kreislauf und die Schaffung von bezahlbarem Wohnraum.",
      openThesesParagraph2: "Studierende bearbeiten ihre Abschlussarbeit an realen Projekten unseres Büros, erhalten Einblick in Planung, Genehmigung und Ausführung und werden fachlich von uns begleitet. Die Erstbetreuung übernimmt die jeweilige Hochschule. So entsteht eine Win-win-Situation: Die Studierenden sammeln praxisnahe Erfahrung in einem gefragten Berufsfeld, und das gewonnene Grundlagenwissen fließt zurück in die Praxis – und über veröffentlichte Ergebnisse auch an die Allgemeinheit.",
      openThesesApplyHint: "Bewerbung: Senden Sie ein kurzes Anschreiben, Ihren Lebenslauf und einen aktuellen Notenspiegel per E-Mail an office@shams-consult.de (Betreff: z. B. „Abschlussarbeit Thema 01 – Schwammstadt“).",
      viewDetails: "Details ansehen",
      downloadFlyerTitle: "PDF Flyer herunterladen",
      archiveBadge: "Abgeschlossene Arbeiten & Referenzen",
      archiveTitle: "Wissenschaftliches Archiv & Fachpublikationen",
      supervisionLabel: "Akademische Betreuung:",
      announcementBadge: "3 Offene Abschlussarbeiten (Ausschreibungen)",
    },
    founder: {
      badge: "Büroinhaber",
      name: "Dipl.-Ing. (FH) Majeed Shams M.Eng.",
      roles: "Architekt · Stadtplaner · Dozent Frankfurt UAS",
      bio: "Mit über 17 Jahren Erfahrung in Planung und behördlicher Bauamtsprüfung begleitet Majeed Shams private Bauherren, Bauträger und Kommunen bei der rechtssicheren und termintreuen Umsetzung anspruchsvoller Bauvorhaben.",
      button: "Mehr über den Gründer erfahren",
      stats: [
        { title: "17+ Jahre", desc: "Praxiserfahrung" },
        { title: "100+ Projekte", desc: "Erfolgreich realisiert" },
        { title: "Forschung & Lehre", desc: "Frankfurt UAS Dozent" },
        { title: "Kommunal & Privat", desc: "Behördlicher Experte" },
      ],
    },
    about: {
      badge: "BÜROPROFIL & UNTERNEHMENSWERTE",
      title: "Architektur, Städtebau & Baumanagement aus Leidenschaft.",
      subtitle: "Wir schaffen nachhaltige Lebensräume und planungssichere Baurechte mit technischer Präzision und Verlässlichkeit.",
      backToHome: "Zurück zur Startseite",
      profileBadge: "ÜBER DAS BÜRO",
      profileTitle: "Ganzheitliche Planungs- und Baukompetenz seit über 17 Jahren",
      profileText1: "Das Architekturbüro Shams Consult steht für integrale Architektur, vorausschauende Stadtplanung und qualitätsgesicherte Bauausführung. Seit über 17 Jahren realisieren wir anspruchsvolle Vorhaben von modernen Wohnbauten über innerstädtische Nahversorgungszentren bis hin zu komplexen kommunalen Bebauungsplänen.",
      profileText2: "Unser Ansatz verbindet fundiertes baurechtliches Wissen mit moderner Entwurfsästhetik und strikter Kostenkontrolle nach DIN 276. Als eingetragenes Büro in der Architekten- und Stadtplanerkammer Hessen (AKH) bieten wir volle Bauvorlageberechtigung in allen 16 Bundesländern.",
      qualificationsBadge: "QUALIFIKATIONEN & BEHÖRDLICHE ANERKENNUNG",
      qualificationsTitle: "Behördliche Expertise & Bundesweite Zertifizierungen",
      akhRegistrationTitle: "AKH Kammerzulassung",
      akhRegistrationDesc: "Eingetragenes Mitglied der Architekten- und Stadtplanerkammer Hessen (AKH Nr. 21886) für Hochbau und Stadtplanung.",
      qngTitle: "QNG & dena Energieeffizienz",
      qngDesc: "Gelistet in der Energieeffizienz-Expertenliste des Bundes für „Klimafreundlicher Neubau – Lebenszyklusanalyse (LCA) für Wohngebäude & QNG-Zertifizierung“.",
      academiaTitle: "Forschung & Lehre",
      academiaDesc: "Lehrauftrag an der Frankfurt University of Applied Sciences (Frankfurt UAS) im Fachbereich Architektur, Bauingenieurwesen und Geomatik.",
      teamBadge: "UNSER EXPERTENTEAM",
      teamTitle: "Lernen Sie unser Team kennen",
      teamSubtitle: "Unser Büro vereint erfahrene Architekten, Stadtplaner, Bauingenieure und Visualisierungsspezialisten für integrale Projekterfolge.",
      siteVisitsCtaBadge: "PRAXIS-EINBLICKE & VOR-ORT-DOKUMENTATION",
      siteVisitsCtaTitle: "Echte Vor-Ort-Präsenz & Baustellennachweise",
      siteVisitsCtaDesc:
        "Sehen Sie ungestellte fotografische Dokumentationen aus der Praxis: von präzisen Bauaufmaßen und millimetergenauer Lasermessung bis zur persönlichen Vor-Ort-Bauleitung nach HOAI.",
      siteVisitsCtaButton: "Vor-Ort-Dokumentation ansehen →",
      founderStoryBadge: "DIE PERSÖNLICHE GESCHICHTE DES GRÜNDERS",
      founderStoryTitle: "Möchten Sie den persönlichen Lebensweg von Majeed Shams erfahren?",
      founderStoryDesc: "Vom Geflüchteten zum erfolgreichen Architekten, Stadtplaner und Hochschuldozenten in Deutschland.",
      founderStoryButton: "Gründer-Biografie lesen →",
      viewResearchContributions: "Forschungsbeiträge ansehen →",
    },
    siteVisitsPage: {
      backToHome: "Zurück zur Startseite",
      badge: "BAUSTELLENEINBLICKE",
      title: "Baustelleneinblicke",
      subtitle:
        "Architektur erfordert echte Vor-Ort-Präsenz. Sehen Sie hier ungestellte Eindrücke aus der täglichen Planungspraxis: von der Bestandsaufnahme bis zur Bauüberwachung nach HOAI.",
      proofNotice: "Unbearbeitete Originalaufnahmen aus laufenden Projekten und Ortsterminen.",
      viewHighRes: "Originalbild vergrößern",
      viewAlbum: "Album ansehen",
      closeLightbox: "Schließen",
      photoRecordLabel: "Foto-Nachweis",
      prev: "← Vorheriges",
      next: "Nächstes →",
      ctaTitle: "Planen Sie ein Bauvorhaben vor Ort?",
      ctaSubtitle:
        "Gerne besichtigen wir Ihr Grundstück oder Bestandsgebäude persönlich für ein fundiertes Aufmaß und die baurechtliche Ersteinschätzung.",
      ctaButton: "Vor-Ort-Termin vereinbaren →",
      items: [
        {
          id: "datacenter-bebra-ecology",
          image: "/images/partners/site-visits/shams-fachgespraech-rechenzentrum-bebra-artenschutz.webp",
          tag: "Rechenzentrum & Ökologie",
          phase: "HOAI Phase 1–3: Nachhaltigkeitskonzept & Artenschutz",
          title: "Fachabstimmung Rechenzentrum Bebra: Artenschutz & Abwärmenutzung",
          desc: "Gemeinsame Detailabstimmung in den Räumen von Shams Consult mit Dipl.-Ing. Eigenbrodt (Betreiber-/Kundenseite): Architektonische Detailplanung, Abwärmenutzung für Gewächshäuser und Schutz der lokalen Tierwelt.",
        },
        {
          id: "residential-excavation",
          image: "/images/partners/site-visits/shams-vor-ort-aussenanlagen-bauleitung-wohnungsbau.webp",
          tag: "Wohnungsbau",
          phase: "HOAI Phase 8: Objektüberwachung & Außenanlagen",
          title: "Außenanlagen & Objektüberwachung im Wohnungsbau",
          desc: "Vor-Ort-Koordination der Erdarbeiten und Pflasterflächen vor dem Mehrfamilienhaus: Direkte Abstimmung mit den ausführenden Gewerken und Baumaschinenführern.",
        },
        {
          id: "client-dialogue",
          image: "/images/partners/site-visits/shams-vor-ort-bauherrenberatung.webp",
          tag: "Vor-Ort-Beratung",
          phase: "HOAI Phase 1",
          title: "Persönliche Bauherrenberatung & Vertrauensaufbau",
          desc: "Direkter Dialog auf Augenhöhe während einer Objektbegehung im Treppenhaus: Klärung erster Bauabsichten und baurechtlicher Möglichkeiten.",
        },
        {
          id: "industrial-safety",
          image: "/images/partners/site-visits/shams-vor-ort-gewerbehalle-begutachtung-helm.webp",
          tag: "Gewerbebau",
          phase: "HOAI Phase 8: Bauüberwachung & Bestandsanalyse",
          title: "Gewerbehalle: Technische Bestandsanalyse & Arbeitssicherheit",
          desc: "Dipl.-Ing. Majeed Shams bei der Begutachtung von Hallentoren, baulichen Zugängen und Bestandsstrukturen vor Ort mit Schutzhelm und Warnweste.",
        },
        {
          id: "building-survey",
          image: "/images/partners/site-visits/shams-vor-ort-bestandsaufnahme-messung.webp",
          tag: "Bestandsaufnahme",
          phase: "HOAI Phase 1: Grundlagenermittlung",
          title: "Technisches Bauaufmaß & Laser-Vermessung",
          desc: "Präzise manuelle und lasergestützte Erfassung der Raumgeometrie und Bausubstanz vor Ort zur Erstellung verlässlicher Bestandspläne.",
        },
        {
          id: "project-strategy",
          image: "/images/partners/site-visits/shams-vor-ort-projektbesprechung-plaene.webp",
          tag: "Strategiegespräch",
          phase: "HOAI Phase 2 & 3: Entwurfsplanung",
          title: "Projektbesprechung & Planprüfung im Team",
          desc: "Gemeinsame Durchsprache der Entwurfs- und Bauleitpläne mit Bauherren und Investoren bei einer persönlichen Besprechung.",
        },
        {
          id: "commercial-handshake",
          image: "/images/partners/site-visits/shams-vor-ort-handschlag-gewerbebau.webp",
          tag: "Gewerbebau",
          phase: "HOAI Phase 1 & 8",
          title: "Vertrauensvoller Handschlag vor Gewerbeliegenschaft",
          desc: "Dipl.-Ing. Majeed Shams bei der erfolgreichen Abstimmung und Objektbegehung mit dem Geschäftsführer vor der Logistikhalle.",
        },
        {
          id: "site-supervision",
          image: "/images/partners/site-visits/shams-vor-ort-baustellenbegehung-sicherheitsweste.webp",
          tag: "Objektüberwachung",
          phase: "HOAI Phase 8: Bauüberwachung & VOB",
          title: "Baustellenbegehung mit Sicherheitsausrüstung",
          desc: "Qualitäts- und Sicherheitskontrolle vor Ort mit Warnweste und Schutzhelm: Bautechnische Prüfung der Hallenzugänge und Lagerräume.",
        },
        {
          id: "ground-measurement",
          image: "/images/partners/site-visits/shams-vor-ort-asphaltierung-hoehung-messung.webp",
          tag: "Außenanlagen & Erdarbeiten",
          phase: "HOAI Phase 8: Bauüberwachung",
          title: "Präzise Höhenkontrolle & Vermessung der Hofflächen",
          desc: "Dipl.-Ing. Majeed Shams bei der lasergenauen Gefälle- und Höhenprüfung neu asphaltierter Hof- und Garagenzufahrten direkt vor Ort mit dem Ausführenden.",
        },
        {
          id: "site-coordination-residential",
          image: "/images/partners/site-visits/shams-vor-ort-baustellenkoordination-wohnungsbau.webp",
          tag: "Wohnungsbau & Koordination",
          phase: "HOAI Phase 8: Objektüberwachung",
          title: "Baustellenkoordination & Bauherrenabstimmung im Wohnungsbau",
          desc: "Direkte Abstimmung der Ausführungsdetails und Erdbaumaßnahmen vor dem Mehrfamilienhaus mit dem Bauherrn und den Erdbau-Teams vor Ort.",
        },
        {
          id: "courtyard-inspection",
          image: "/images/partners/site-visits/shams-vor-ort-bestandsbegehung-innenhof.webp",
          tag: "Bestandsbegutachtung",
          phase: "HOAI Phase 1–2: Vor-Ort-Analyse & Bauherrenabstimmung",
          title: "Vor-Ort-Bestandsaufnahme & Fachabstimmung im Innenhof",
          desc: "Persönliche Begehung vor Ort durch Dipl.-Ing. Majeed Shams: Direkte Fachabstimmung zur Gebäudestruktur, Fassade und Sanierungs- bzw. Umnutzungspotenzialen im direkten Dialog mit den Beteiligten.",
        },
        {
          id: "expert-dialogue-network",
          image: "/images/partners/site-visits/shams-fachdialog-netzwerk.jpg",
          tag: "Fachdialog & Netzwerk",
          phase: "B2B-Kooperation & Projektstrategie",
          title: "Fachlicher Diskurs & Netzwerkdialog auf Augenhöhe",
          desc: "Dipl.-Ing. Majeed Shams im intensiven Fachaustausch mit Kooperationspartnern über zukunftsfähige Planungsansätze und Bauinnovationen.",
        },
      ],
    },
    blog: {
      badge: "MAGAZIN & FACHARTIKEL",
      title: "Aktuelles aus Architektur, Baurecht & Stadtplanung",
      subtitle: "Fundierte Fachanalysen, rechtliche Leitfäden und praxisnahe Einblicke aus unserem Planungsalltag.",
      viewAll: "Alle Fachartikel ansehen",
      readMore: "Vollständigen Artikel lesen",
      allTopics: "Alle Themen",
      searchPlaceholder: "Fachartikel nach Stichwort durchsuchen...",
      noResults: "Keine Artikel für diesen Suchbegriff gefunden.",
      resetFilters: "Filter zurücksetzen",
      backToHome: "Zurück zur Startseite",
      backToBlog: "Zurück zum Magazin",
      availableArticles: "Fachartikel verfügbar",
      authorName: "Dipl.-Ing. Majeed Shams",
      authorRole: "Büroinhaber · Architekt · Stadtplaner · Dozent Frankfurt UAS",
      moreArticles: "Weitere Fachbeiträge",
      relatedTopics: "Themengebiete",
      ctaHeading: "Haben Sie Fragen zu einem baurechtlichen Thema?",
      ctaSubheading: "Lassen Sie uns Ihre Fragestellung in einem persönlichen Erstgespräch strukturiert besprechen.",
      ctaButton: "Beratung anfragen →",
      prev: "Zurück",
      next: "Weiter",
      pauseScroll: "Scrollen anhalten",
      startScroll: "Scrollen fortsetzen",
    },
    contact: {
      badge: "Fachberatung · 100% Verrechnung auf Projektauftrag",
      headlinePart1: "Starten Sie Ihr Projekt mit ",
      headlineHighlight: "Klarheit",
      subtitle: "Buchen Sie Ihre persönliche 30–60 minütige Bau- und Planungsberatung mit unserem Gründer & Büroinhaber. Die Aufwandsentschädigung von 185,- € zzgl. MwSt. wird bei Projekterteilung zu 100% als Guthaben angerechnet.",
      calendarCardTitle: "ONLINE-TERMINBUCHUNG",
      calendarCardHeading: "Direkt Wunschtermin im Kalender wählen",
      calendarCardDesc: "Wählen Sie in unserem Microsoft 365 Kalender bequem Ihren freien Zeitslot für eine 30–60 Min. Besprechung mit unserem Büroinhaber (telefonisch oder per Teams). Die Aufwandsentschädigung von 185 € zzgl. MwSt. wird voll auf Ihren Projektauftrag angerechnet.",
      calendarCardButton: "Freien Termin im Kalender auswählen →",
      calendarCardBenefits: [
        "30–60 Minuten fundierte Fachberatung mit dem Büroinhaber",
        "Prüfung baurechtlicher Grundlagen (B-Plan / § 34 BauGB / QNG)",
        "100% Anrechnung der Aufwandsentschädigung (185 € zzgl. MwSt.) auf Folgeauftrag",
      ],
      emailCardTitle: "E-Mail an das Architekturbüro",
      emailCardDesc: "Senden Sie uns Ihre Projektunterlagen, Pläne oder Fragen direkt per E-Mail.",
      emailCardButton: "E-Mail schreiben an office@shams-consult.de →",
      whatsappTitle: "Schnelle Frage per WhatsApp?",
      whatsappDesc: "Schreiben Sie uns direkt eine Nachricht mit ersten Eckdaten oder Fotos Ihres Grundstücks.",
      whatsappButton: "WhatsApp Chat starten →",
      whatsappMessage: "Hallo Herr Shams, ich möchte ein unverbindliches Erstgespräch für mein Bauvorhaben anfragen.",
      phoneCardTitle: "Telefonische Beratung",
      phoneCardDesc: "Rufen Sie uns während der Bürozeiten direkt in Frankfurt oder Rödermark an.",
      liveCalendar: "Live Kalender",
      onlineStatus: "Online",
      getDirections: "Route in Google Maps öffnen ↗",
      mapTabLabel: "Standorte",
      directPhone: "069 74 223 777",
      officesTitle: "Unsere Bürostandorte",
      officesSubtitle: "Frankfurt am Main & Rödermark",
      insuranceReassurance: "Berufshaftpflichtversichert (§ 16 HASG) · 100% Planungssicherheit",
    },
    mobileActionBar: {
      call: "Anrufen",
      whatsapp: "WhatsApp",
      email: "E-Mail",
      book: "Termin buchen",
    },
    legal: {
      backToHome: "Zurück zur Startseite",
      impressumTitle: "Impressum",
      datenschutzTitle: "Datenschutzerklärung",
      barrierefreiheitTitle: "Erklärung zur Barrierefreiheit",
      widerrufTitle: "Widerrufsbelehrung & Muster-Widerrufsformular",
      close: "Schließen",
      informationProvider: "Angaben gemäß § 5 TMG / § 18 MStV",
      owner: "Inhaber",
      contact: "Kontakt",
      chamber: "Zuständige Kammer & Berufsrecht",
      insurance: "Berufshaftpflichtversicherung",
      responsibleAuthority: "Zuständige Aufsichtsbehörde",
    },
    footer: {
      description:
        "Shams Consult ist Ihr verlässliches Architekturbüro für Hochbau, Stadtplanung und Projektentwicklung im Rhein-Main-Gebiet und bundesweit.",
      quickLinksTitle: "Navigation",
      servicesTitle: "Leistungen",
      contactTitle: "Kontakt",
      followTitle: "Netzwerke",
      brandTagline: "Architektur · Stadtplanung · Projektentwicklung",
      legalImpressum: "Impressum",
      legalDatenschutz: "Datenschutz",
      legalBarrierefreiheit: "Barrierefreiheit",
      legalWiderruf: "Widerruf",
      cookieSettings: "Cookie-Einstellungen",
      developedBy: "Mit ❤️ in Deutschland entwickelt von",
      rights: "Alle Rechte vorbehalten.",
      vCardLink: "Digitale Visitenkarte (.vcf)",
    },
    notFound: {
      badge: "404 Fehler",
      title: "Seite nicht gefunden",
      message:
        "Die von Ihnen aufgerufene Seite existiert leider nicht oder wurde im Rahmen unserer Neugestaltung verschoben.",
      requestedPathLabel: "Aufgerufener Pfad:",
      backHome: "Zur Startseite",
      exploreProjects: "Projekte ansehen",
      aboutUs: "Über Shams Consult",
      contactUs: "Kontakt & Beratung",
      needAssistance: "Haben Sie Fragen oder suchen Sie ein bestimmtes Projekt? Wir helfen Ihnen gerne weiter.",
    },
    regionalLandingPage: {
      homeBreadcrumb: "Home",
      akhRegistrationBadge: "AKH Hessen Nr. 21886",
      experienceBadge: "17+ Jahre Erfahrung",
      requestConsultation: "Erstgespräch anfragen",
      callDirectly: "Direkt anrufen:",
      regionalExpertiseBadge: "Regionale Expertise & Baurecht",
      realReferencesBadge: "Reale Referenzen",
      realizedProjectsHeading: "Realisierte Projekte im regionalen Umfeld",
      realizedProjectsSubtitle: "Ausgewählte Bau- und Planungsprojekte mit konkreten Kennzahlen, Bauvolumina und architektonischen Spezifikationen.",
      viewProjectDetails: "Projektdetails ansehen",
      structuredWorkflowBadge: "Strukturierter Projektablauf",
      hoaiPhasesHeading: "HOAI Leistungsphasen 1–9 im Detail",
      hoaiPhasesSubtitle: "Transparenz von der ersten Skizze bis zur finalen Bauabnahme. Wir übernehmen die vollumfängliche Koordination aller Fachplaner und Behörden.",
      deliverablesLabel: "Ergebnisse & Deliverables:",
      officeAvailableBadge: "Vor Ort für Sie erreichbar",
      addressLabel: "Adresse",
      phoneLabel: "Telefonkontakt",
      scheduleOfficeAppointment: "Termin im Büro anfragen",
      startProjectBadge: "Starten Sie Ihr Projekt",
      ctaSubtitle: "Sichern Sie sich fundierte Beratung, absolute Kostendisziplin und reibungslose Baugenehmigungsverfahren mit Dipl.-Ing. Majeed Shams.",
      districtsBadge: "Stadtteile & Mikrolagen",
      districtsHeading: "Architektur & Baugenehmigungen nach Stadtteilen in",
      districtsSubtitle: "Jeder Stadtteil hat spezifische baurechtliche Herausforderungen — von Milieuschutz und Denkmalschutz bis hin zu B-Plan-Vorgaben und Nachverdichtung. Wählen Sie Ihre Lage:",
      selectDistrictAria: "Stadtteile auswählen",
      coveredMicroLocationsLabel: "Erfasste Lagen & Quartiere:",
      inquireProjectButton: "Projekt anfragen",
      callOfficeButton: "Anrufen:",
      architecturalFocusHeading: "Architektonische Schwerpunkte",
      zoningRequirementsHeading: "Baurecht & Behördliche Auflagen",
      districtActionPrompt: "Sie planen ein Bauvorhaben in diesem Stadtteil? Wir prüfen die Machbarkeit und Baurechtslage vorab.",
      inquireDistrictAction: "Erstgespräch anfragen",
      readyForProjectPrefix: "Bereit für Ihr Bauvorhaben in",
      faqBadge: "Häufige Fragen & Baurecht",
      faqHeading: "Wichtige Fragen zu Kosten, Genehmigung & Ablauf",
      faqSubtitle: "Transparente Orientierung für Bauherren zu HOAI-Honoraren, Behördenfristen und Genehmigungsschritten.",
      faqActionPrompt: "Haben Sie eine spezifische Frage zu Ihrem Grundstück oder Bauvorhaben?",
      faqActionCta: "Jetzt Erstgespräch mit dem Architekten vereinbaren",
      serviceTriadBadge: "Ganzheitliche Fachkompetenz",
      serviceTriadHeading: "Architektur, Stadtplanung & Baurecht aus einer Hand",
      serviceTriadSubtitlePrefix: "Wir bieten Ihnen in",
      serviceTriadSubtitleSuffix: "das vollständige Leistungsspektrum: von der städtebaulichen Machbarkeit über rechtssichere Bauanträge bis zur schlüsselfertigen Bauleitung (HOAI 1–9).",
      pillar1Tag: "01 // HOAI 1–9",
      pillar1Title: "Architektur & Hochbau",
      pillar1Subtitle: "Neubau · Sanierung · Bauüberwachung",
      pillar1Desc: "Vom ersten Konzept über detaillierte Werkpläne (1:50) bis zur Qualitätsbauleitung vor Ort. Anspruchsvolle Wohn- und Gewerbeimmobilien mit strikter Kostendisziplin nach DIN 276.",
      pillar1Bullets: [
        "Individuelle Entwurfs- & Ausführungsplanung",
        "Ausschreibungen & Vergabe nach VOB",
        "Präsenz auf der Baustelle (LPH 8)",
      ],
      pillar2Tag: "02 // Urbanistik",
      pillar2Title: "Stadtplanung & Baurecht",
      pillar2Subtitle: "Bebauungspläne · Nachverdichtung · Quartiere",
      pillar2Desc: "Eingetragene Stadtplaner in der AKH Hessen. Wir entwickeln städtebauliche Rahmenpläne, prüfen Nachverdichtungspotenziale und begleiten vorhabenbezogene Bebauungspläne nach BauGB.",
      pillar2Bullets: [
        "Städtebauliche Machbarkeitsstudien",
        "Nachverdichtung & Konversion",
        "Bebauungspläne (§ 12 & § 30 BauGB)",
      ],
      pillar3Tag: "03 // Genehmigung",
      pillar3Title: "Bauantrag & Baurecht",
      pillar3Subtitle: "HBO · Bauaufsicht · Voranfragen",
      pillar3Desc: "Uneingeschränkte Bauvorlageberechtigung (AKH Hessen Nr. 21886). Wir erstellen prüffähige Bauanträge, Bauvoranfragen zur Absicherung von Baurecht und erwirken Befreiungen bei der Bauaufsicht.",
      pillar3Bullets: [
        "Rechtskonforme Bauanträge nach HBO",
        "Nutzungsänderungen (Gewerbe zu Wohnen)",
        "Bauvoranfragen (§ 34 BauGB Einfügung)",
        "Abstimmung Denkmalamt & Umweltamt",
      ],
      learnMore: "Mehr erfahren",
      referencesBadge: "Referenzen & Einzugsgebiet",
      referencesHeading: "Ausgewählte Referenzen aus der Metropolregion Frankfurt / Rhein-Main",
      referencesSubtitlePrefix: "Repräsentative Bauten und Planungen aus unserem Portfolio. Wir planen für Bauherren in",
      referencesSubtitleSuffix: "und im gesamten Rhein-Main-Gebiet mit derselben bewährten Sorgfalt und Genehmigungssicherheit.",
    },
    faqSection: {
      badge: "Häufige Fragen & Antworten",
      heading: "Wichtige Fragen zu Architektenleistungen, Kosten & Genehmigungen",
      subtitle: "Fundierte Antworten zu HOAI-Honoraren, Genehmigungsfristen der Bauaufsicht, KfW-Förderungen und dem Planungsablauf.",
      actionPrompt: "Haben Sie eine konkrete Frage zu Ihrem Grundstück oder Projekt?",
      actionCta: "Erstgespräch mit dem Architekten vereinbaren",
      items: [
        {
          question: "Wie berechnen sich die Honorare für Architektenleistungen nach der HOAI?",
          answer: "Die Architektenhonorare richten sich nach den offiziellen Leistungsphasen (1 bis 9) der Honorarordnung für Architekten und Ingenieure (HOAI). Die Berechnung basiert auf den anrechenbaren Baukosten und der Einstufung des Gebäudes in eine Honorarzone (z.B. Honorarzone III oder IV bei anspruchsvollem Wohnungs- oder Gewerbebau). Shams Consult erstellt für Sie vor Projektbeginn eine transparente, nach Einzelschritten aufgeschlüsselte Honorarvereinbarung.",
        },
        {
          question: "Wie lange dauert ein Baugenehmigungsverfahren in Hessen (HBO)?",
          answer: "Im vereinfachten Genehmigungsverfahren nach § 65 HBO (üblich für Ein- und Mehrfamilienhäuser) liegt die Bearbeitungszeit bei den hessischen Bauaufsichtsämtern (z.B. Frankfurt, Offenbach, Wiesbaden, Darmstadt) meist zwischen 3 und 5 Monaten. Durch lückenlose, prüffähige Bauanträge mit vollständigen Fachnachweisen (Standsicherheit, Brandschutz, Entwässerung) verhindern wir Rückfragen und beschleunigen die Genehmigung.",
        },
        {
          question: "Übernimmt Shams Consult die vollständige Betreuung von Entwurf bis Bauüberwachung?",
          answer: "Ja, wir begleiten Bauvorhaben ganzheitlich durch alle 9 HOAI-Leistungsphasen: von der ersten Grundlagenermittlung und Vorplanung (LPH 1–2) über die Entwurfs- und Genehmigungsplanung (LPH 3–4) bis hin zur detaillierten Werk- und Ausführungsplanung (LPH 5), Ausschreibung (LPH 6–7) und der täglichen Bauleitung vor Ort bis zur Endabnahme (LPH 8–9).",
        },
        {
          question: "Welche Fördermittel stehen für KfW-Effizienzhäuser und QNG-Nachhaltigkeitszertifikate bereit?",
          answer: "Über die Bundesförderung für effiziente Gebäude (BEG) und das KfW-Programm 'Klimafreundlicher Neubau' (KFN / Programme 297/298) können Bauherren zinsverbilligte Förderkredite von bis zu 150.000 € pro Wohneinheit sowie attraktive Tilgungszuschüsse beantragen. Bei Erreichung des staatlichen QNG-Siegels (Qualitätssiegel Nachhaltiges Gebäude) steigen die Förderquoten signifikant. Wir integrieren diese Standards von Beginn an in die Gebäudeplanung.",
        },
        {
          question: "Was geschieht in einem ersten Beratungsgespräch mit dem Architekten?",
          answer: "Im Erstgespräch analysieren wir Ihre Projektziele, die baurechtlichen Rahmenbedingungen Ihres Grundstücks (Bebauungsplan oder § 34 BauGB) sowie den baulichen Bestand. Sie erhalten eine erste realistische Einschätzung zu Machbarkeit, Genehmigungschancen, Kostenrahmen und Zeitplan für die Realisierung.",
        },
        {
          question: "Was ist der Unterschied zwischen einem Bebauungsplan (B-Plan) und § 34 BauGB (Innenbereich)?",
          answer: "Liegt ein qualifizierter Bebauungsplan (B-Plan) vor, regelt dieser detailliert Geschossflächenzahl (GFZ), Grundflächenzahl (GRZ), Dachformen und Bauhöhen. Gibt es keinen B-Plan, greift § 34 BauGB: Das Bauvorhaben muss sich nach Art und Maß der baulichen Nutzung, der Bauweise und der Grundstücksfläche harmonisch in die Eigenart der näheren Umgebung einfügen. Wir klären das Baurecht vorab verlässlich mit der zuständigen Bauaufsicht.",
        },
        {
          question: "Benötige ich für eine Nutzungsänderung in Hessen einen bauvorlageberechtigten Architekten?",
          answer: "Ja. Nach der Hessischen Bauordnung (HBO) ist eine Nutzungsänderung (z.B. Umwandlung von Gewerbeflächen in Wohnungen oder Büros) genehmigungspflichtig, sobald brandschutz-, stellplatz- oder baurechtliche Anforderungen berührt werden. Als eingetragene Architekten (AKH Hessen Nr. 21886) erstellen wir den prüffähigen Bauantrag auf Nutzungsänderung und begleiten die zügige Genehmigung durch die Bauaufsicht.",
        },
      ],
    },
    vCard: {
      backToHome: "Zurück zur Startseite",
      showQrCode: "QR-Code vorzeigen",
      pageSubtitle: "Digitale Visitenkarte",
      verified: "Verifiziert",
      roleSubtitle: "Architekt & Stadtplaner · Büroinhaber & Geschäftsführer",
      subTitleDetail: "Frankfurt am Main & Rödermark",
      chamberTitle: "Staatlich anerkannt & kammereingetragen",
      saveButtonText: "Visitenkarte speichern (.vcf)",
      saveButtonSubtext: "Direkt in Apple & Google Kontakte öffnen",
      downloadSuccessNotice: "Download gestartet! Tippen Sie auf die Datei, um den Kontakt im Adressbuch zu sichern.",
      quickActionsHeading: "SCHNELLKONTAKT",
      frankfurtOffice: "Zentrale Frankfurt",
      roedermarkOffice: "Büro Rödermark",
      whatsappTitle: "WhatsApp Chat",
      whatsappSubtitle: "Direktnachricht",
      emailTitle: "E-Mail",
      bookConsultationTitle: "Erstgespräch buchen",
      bookConsultationSubtitle: "Kostenfreie 30-Minuten Bau- & Planungsberatung",
      locationsHeading: "STANDORTE & ANFAHRT",
      hqTitle: "Hauptsitz Frankfurt am Main",
      branchTitle: "Zweigstelle Rödermark",
      routeButton: "Route",
      websiteText: "shams-consult.de",
      conferenceModalTag: "KONFERENZ- & EVENT-MODUS",
      conferenceModalSubtitle: "Mit dem Smartphone scannen, um die Visitenkarte direkt im Adressbuch zu sichern.",
      directDownloadButton: "vCard direkt herunterladen",
      closeModal: "Schließen",
      stickySaveText: "Kontakt speichern",
      callButton: "Anrufen",
      qrSectionTitle: "QR-Code zum Scannen",
      qrSectionSubtitle: "Mit der Smartphone-Kamera scannen, um die Visitenkarte direkt im Adressbuch zu sichern.",
    },
    founderPage: {
      backToHome: "Zurück zur Startseite",
      founderPortal: "Gründer-Portal",
      portalTooltip: "Geschütztes Gründerportal für Unterlagen",
      pageSubtitle: "Über den Gründer",
      storyBadge: "DIE GESCHICHTE DES GRÜNDERS",
      storyTitle: "Vom Traum zur Wirklichkeit: Die Reise unseres Gründers",
      storySubtitle: "Vertrauen, Hingabe und die Leidenschaft, durch Architektur und Städtebau bleibende Werte für Menschen und Städte zu schaffen.",
      founderRole: "Architekt · Stadtplaner · Dozent · Gründer",
      academicCredentials: "Akademische Qualifikationen",
      degree1: "Dipl.-Ing. (FH) Architektur — Hochschule Karlsruhe",
      degree2: "Master of Science (M.Sc.) Stadtplanung — HFT Stuttgart",
      chamberMembership: "Mitglied der Architektenkammer (AKH Hessen & AKBW)",
      lecturerRole: "Lehrbeauftragter / Dozent für Baukonstruktion & Entwurf",
      gratitudeBadge: "DANKBARKEIT & DEUTSCHES INGENIEURVERSPRECHEN",
      gratitudeTitle: "Deutschland – Eine Heimat des Vertrauens und der neuen Lebenschancen",
      gratitudeQuote: "„Als ich 2005 mit nichts als der Hoffnung auf Bildung nach Deutschland kam, schenkte mir diese Gesellschaft ihr Vertrauen. Heute ist es mein größtes Lebensanliegen, dieses Vertrauen durch redliche deutsche Planungsdisziplin, kompromisslose Zuverlässigkeit nach DIN & VOB und den Bau nachhaltiger Werte für Menschen und Städte von Herzen zurückzugeben.“",
      lecturerTag: "Dozent Frankfurt UAS · Gründer Shams Consult",
      pressBadge: "HISTORISCHE DOKUMENTATION",
      pressTitle: "Rheinische Post, Ausgabe vom 30. August 2005",
      pressCaptionPrefix: "Historisches Zeitdokument:",
      pressCaption: "Rheinische Post, 30.08.2005 — Bericht über Majeed Shams' Ankunft am Düsseldorfer Flughafen und seine Vision: „From nobody to somebody, to help and share experiences with everybody.“",
      consultationHeading: "Möchten Sie Ihr Projekt persönlich mit Majeed Shams besprechen?",
      consultationDesc: "Ob Wohnungsbau, städtebaulicher Bebauungsplan oder anspruchsvolles Genehmigungsverfahren — wir stehen Ihnen mit Erfahrung und vollem Engagement zur Seite.",
      consultationCta: "Persönliches Erstgespräch anfragen →",
    },
    researchTopicPage: {
      backToHub: "Zurück zur Übersicht",
      departmentLabel: "Frankfurt UAS · Fachbereich 1",
      overviewLabel: "Kurzübersicht:",
      caseStudyBadge: "Reales Praxisprojekt als Fallstudie",
      factsHeading: "Zahlen & Daten zum Thema",
      problemHeading: "Ausgangslage & Problemstellung",
      objectivesHeading: "Ziele der Abschlussarbeit",
      researchQuestionsHeading: "Zentrale Leitfragen der Arbeit",
      frameworkBadge: "Rahmenbedingungen",
      frameworkHeading: "Wissenschaft trifft Praxis: So läuft die Betreuung",
      sourcesHeading: "Quellen & Grundlagen",
      faqBadge: "Häufige Fragen (FAQ)",
      faqHeading: "Fragen zur Bewerbung & Betreuung",
      faqSubtitle: "Die wichtigsten Antworten für Studierende der Architektur, des Bauingenieurwesens und der Stadtplanung.",
      ctaBadge: "Interesse an diesem Thema?",
      ctaTitle: "Jetzt für dieses Thema bewerben",
      ctaDescription: "Senden Sie uns ein kurzes Anschreiben, Ihren Lebenslauf und Notenspiegel direkt per E-Mail an office@shams-consult.de.",
      trustMentor: "1:1 Dozenten-Mentoring",
      trustData: "Reale Projektdaten",
      trustCredit: "Zweitbetreuung anerkannt",
      pdfFlyerButton: "PDF Flyer",
      applyEmailButton: "Per E-Mail bewerben",
      otherTopicsHeading: "Weitere offene Forschungsthemen",
      mobileApplyButton: "Jetzt bewerben",
      emailGreeting: "Sehr geehrter Herr Shams,",
      emailBodyInterest: "ich interessiere mich für die ausgeschriebene Abschlussarbeit",
      emailBodyAttachment: "Im Anhang finden Sie mein kurzes Anschreiben, meinen Lebenslauf sowie meinen aktuellen Notenspiegel.",
      emailBodyMeeting: "Ich freue mich über ein kurzes Kennenlerngespräch.",
      emailClosing: "Mit freundlichen Grüßen,",
      faqs: [
        {
          question: "Wer kann sich für diese Abschlussarbeit bewerben?",
          answer: "Studierende der Fachrichtungen Architektur, Bauingenieurwesen, Stadtplanung oder verwandter Studiengänge (Bachelor- oder Masterstudium) an jeder staatlichen oder staatlich anerkannten Hochschule.",
        },
        {
          question: "Wie läuft die Betreuung durch Shams Consult ab?",
          answer: "Sie profitieren von kontinuierlichem 1:1-Mentoring durch Dipl.-Ing. Majeed Shams (Lehrbeauftragter an der Frankfurt UAS), uneingeschränktem Einblick in reale Ausführungs- und Genehmigungsplanungen unseres Büros sowie gezielter Begleitung bei wissenschaftlicher Methodik, BIM und KI-gestützten Analysewerkzeugen.",
        },
        {
          question: "Wird die externe Betreuung von meiner Hochschule anerkannt?",
          answer: "Ja, absolut. Die akademische Erstbetreuung und offizielle Themenanmeldung erfolgt regulär über Ihre Professur. Shams Consult fungiert als fachlicher Praxisbetreuer und übernimmt auf Wunsch gern die offizielle Zweitkorrektur (Zweitprüfer) in Abstimmung mit Ihrer Hochschule.",
        },
        {
          question: "Wann ist ein Einstieg möglich und wie flexibel sind die Fristen?",
          answer: "Der Beginn ist ganzjährig und flexibel möglich. Der Zeitplan richtet sich vollständig nach Ihrer individuellen Studien- und Prüfungsordnung (in der Regel 3 bis 6 Monate Bearbeitungszeit).",
        },
        {
          question: "Welche Unterlagen werden für die Bewerbung benötigt?",
          answer: "Der Prozess ist unkompliziert: Senden Sie ein kurzes Motivationsschreiben mit Angabe des gewünschten Starttermins, Ihren Lebenslauf und einen aktuellen Notenspiegel direkt per E-Mail an office@shams-consult.de. Wir melden uns innerhalb weniger Tage für ein unverbindliches Kennenlernen.",
        },
      ],
    },
    cookieBanner: {
      ariaLabel: "Cookie-Einwilligung",
      badge: "Datenschutz & Transparenz",
      title: "Cookie- und Datenschutzeinstellungen",
      closeModal: "Schließen",
      description: "Wir nutzen Cookies und ähnliche Technologien, um Ihnen eine optimale Nutzererfahrung auf unserer Website zu bieten, Funktionen bereitzustellen und Zugriffe anonymisiert auszuwerten.",
      essentialTitle: "1. Technisch essenziell",
      alwaysActive: "Immer aktiv",
      essentialAria: "Technisch essenziell (aktiv)",
      essentialDesc: "Erforderlich für grundlegende Website-Funktionen, Navigation, Sicherheit und Formularübermittlung.",
      analyticsTitle: "2. Google Analytics 4 (Statistik & Analyse)",
      analyticsDesc: "Hilft uns zu verstehen, wie Besucher mit unserer Website interagieren, um Inhalte und Performance kontinuierlich zu verbessern. Daten werden anonymisiert verarbeitet.",
      lessDetails: "Weniger Details",
      customizeSettings: "Einstellungen anpassen",
      privacy: "Datenschutz",
      imprint: "Impressum",
      saveSelection: "Auswahl speichern",
      acceptAll: "Alle akzeptieren",
      acceptEssential: "Nur essenzielle",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      projects: "Projects",
      siteVisits: "On-Site Proof",
      akhBadge: "AKH Hessen #21886 · Frankfurt UAS",
      caseStudies: "Client Reviews",
      process: "Process",
      blog: "Magazine",
      contact: "Contact",
      bookConsultation: "Book Consultation",
      research: "Research & Teaching",
      founder: "Founder",
      aboutOffice: "About the Practice",
    },
    hero: {
      eyebrow: "Architectural Practice for Architecture, Urban Planning & Project Development",
      titlePart1: "The relationships we build are just as important",
      titleHighlight: "as the buildings we design.",
      subtitle:
        "Architecture, urban planning, and project development for public authorities, investors, and private clients in Frankfurt am Main, Rödermark, and Rhine-Main.",
      philosophyStatement:
        "The relationships we build are just as important as the buildings we design.",
      bookConsultation: "Book Consultation",
      viewProjects: "View Projects",
      founderName: "Dipl.-Ing. Majeed Shams",
      founderTitle: "Architect · Urban Planner",
      founderRole: "Lecturer · Founder",
      founderCompany: "Shams Consult",
      founderStoryCta: "Read Personal Story & Journey →",
      trustBadges: [
        { label: "AKH Hessen", detail: "Registered German Architect & Planner" },
        { label: "HOAI 1–9 & VOB", detail: "Statutory Honorarium & Procurement" },
        { label: "DIN 276 Cost Control", detail: "Guaranteed Financial Certainty" },
        { label: "Frankfurt UAS", detail: "Lecturer & Building Research" },
      ],
    },
    team: {
      badge: "OUR EXPERT TEAM",
      title: "Team of 16 Architecture Experts",
      description:
        "Planning and construction management team led by Dipl.-Ing. Majeed Shams.",
      expertCountBadge: "+12",
      ctaButton: "Meet Team",
    },
    metrics: {
      yearsExp: { value: "17+", label: "Years of Experience" },
      completedProjects: { value: "100+", label: "Completed Projects" },
      largestProject: { value: "€13.5M", label: "Largest Project Volume" },
      dinVob: { value: "100% DIN & VOB", label: "German Engineering & Quality Standards" },
    },
    akhRegistration: {
      badge: "AKH HESSEN · PUBLIC LAW BODY",
      title: "Registered German Architect & Urban Planner (AKH Hessen)",
      description:
        "Protected statutory title under German law with full building permit authority across all federal states · Fully insured under statutory professional indemnity (§ 16 HASG).",
      statutoryNotice: "Officially registered member of the Hessian Chamber of Architects and Urban Planners (AKH #21886).",
    },
    clients: {
      badge: "Selected Clients & Partners",
      heading: "Trusted by Industry Leaders, Municipalities & Academia.",
      subtitle:
        "Selected institutional clients, developers, and partners with whom we deliver high-standard architectural and urban planning projects.",
      viewAll: "View All Clients",
      backToHome: "Back to Home",
      pageTag: "Clients & Partners",
      visitWebsite: "Visit Official Website",
      viewCaseStudy: "View Project Case Study",
      ctaHeading: "Planning a joint project or development?",
      ctaSubtitle: "Let's discuss your building project, feasibility, and statutory permitting in a confidential consultation.",
      ctaButton: "Book Consultation →",
      networkBadge: "16+ EXPERTS IN COLLABORATIVE NETWORK",
      networkTitle: "Core Practice & Extended Multi-Disciplinary Engineering Network",
      networkCount: "16+ Total Specialists",
      networkDesc:
        "Our 6-person core leadership is seamlessly augmented on complex commissions by 10+ permanently associated structural engineers, MEP consultants, certified energy auditors, and fire safety specialists — ensuring seamless full-service delivery for projects up to €13.5M.",
      disciplines: {
        structural: "Structural Engineering",
        mep: "MEP Engineering",
        energy: "Energy & Sustainability",
        fireSafety: "Fire Safety & Building Physics",
        tendering: "VOB Cost & Tendering",
        landscape: "Landscape Architecture",
      },
      siteVisitsBadge: "ON-SITE COMMITMENT & PARTNERSHIP",
      siteVisitsTitle: "Hands-On Client Consultation & Technical Building Surveys",
      siteVisitsSubtitle:
        "Architecture is not crafted solely behind desks. Dipl.-Ing. Majeed Shams personally attends to clients on site—from millimeter-precise building surveys to strategic zoning consultations.",
      siteVisit1Title: "Personal Client Dialogue & Trust",
      siteVisit1Desc:
        "Direct eye-level collaboration: in-depth understanding of your building ambitions, budget parameters, and statutory options.",
      siteVisit2Title: "Accurate Building Survey & On-Site Measurement",
      siteVisit2Desc:
        "Exact digital and manual survey of existing structures, establishing a reliable technical foundation for HOAI phases 1–4.",
      viewAllSiteVisits: "View Full On-Site Photo Documentation & Project Records",
      pressBadge: "Press Article",
    },
    services: {
      badge: "Our Services",
      title: "Architecture, Urban Planning & Project Development",
      viewAll: "View All Services",
      items: [
        {
          title: "Architecture & Structural Design",
          desc: "Functional, aesthetic, and sustainable building design across all project phases.",
        },
        {
          title: "Urban Planning & Master Zoning",
          desc: "Legally compliant zoning plans and urban strategies shaping sustainable growth.",
        },
        {
          title: "Project Development",
          desc: "Minimizing investment risk through strategic statutory planning and cost management.",
        },
        {
          title: "Permits, Zoning & Change of Use",
          desc: "Code-compliant building applications, statutory change of use (commercial to residential), and architectural due diligence.",
        },
      ],
    },
    process: {
      badge: "HOAI Service Phases 1–9",
      titlePart1: "Structured delivery through the",
      titlePart2: "9 HOAI phases.",
      subtitle: "From initial concept to turnkey handover — legally secure according to the official German fee schedule for architects.",
      steps: [
        { num: "01", name: "Inception & Briefing", desc: "Requirements analysis, site assessment & project definition", norm: "HOAI § 34" },
        { num: "02", name: "Preliminary Design", desc: "Concept sketches, statutory feasibility & initial cost estimate", norm: "DIN 276" },
        { num: "03", name: "Developed Design", desc: "Coordinated architectural schemes & detailed cost calculation", norm: "DIN 276" },
        { num: "04", name: "Statutory Approvals", desc: "Permit applications & direct negotiation with building authorities", norm: "HBO / LBO" },
        { num: "05", name: "Technical Design", desc: "Working drawings 1:50 to 1:1, structural & MEP integration", norm: "DIN / VDI" },
        { num: "06", name: "Procurement Preparation", desc: "VOB-compliant bills of quantities & tender specifications", norm: "VOB/A" },
        { num: "07", name: "Tendering & Award", desc: "Objective bid evaluation, price comparison & contractor negotiations", norm: "VOB" },
        { num: "08", name: "Site Supervision", desc: "On-site quality assurance, schedule adherence & defect control", norm: "LBO / VOB/B" },
        { num: "09", name: "Handover & Closeout", desc: "Formal commissioning, defect remediation & warranty management", norm: "BGB / VOB" },
      ],
    },
    videoGuide: {
      badge: "Video Guide · Planning Law & Approvals",
      title: "Is your construction project eligible for planning approval?",
      subtitle: "Practical insights directly from the architect & urban planner",
      description: "Learn from Dipl.-Ing. Majeed Shams how to evaluate building permit eligibility under German planning law (§ 34 BauGB, local zoning plans) and eliminate costly approval risks early.",
      takeaways: [
        "Preliminary zoning & building law assessment (§ 34 BauGB / B-Plan)",
        "Preliminary permit enquiry (Vorbescheid) before land purchase",
        "Accelerate building permit approvals without bureaucratic delays",
      ],
      ctaConsultation: "Book Consultation",
      ctaChannel: "Visit YouTube Channel",
      privacyNote: "Privacy Notice: Video is served in privacy-enhanced mode (youtube-nocookie.com).",
    },
    vob: {
      badge: "DE Standard",
      title: "German VOB Compliance",
      subtitle: "Construction Contract Procedures",
      guaranteeBadge: "100% Defect & Legal Protection",
      pillars: [
        {
          part: "VOB/A",
          title: "Tendering & Awarding",
          desc: "Transparent contractor pricing without hidden fees",
        },
        {
          part: "VOB/B",
          title: "Contract Execution",
          desc: "Binding milestone schedules and dispute prevention",
        },
        {
          part: "VOB/C",
          title: "Technical Standards",
          desc: "Strict DIN compliance and active defect prevention",
        },
      ],
    },
    caseStudies: {
      badge: "GOOGLE REVIEWS IN DETAIL",
      title: "5.0 Stars Google Reviews",
      subtitle: "Real client testimonials and the project stories behind each review.",
      googleRating: "5.0",
      reviewsCount: "100% Recommendation Rate",
      allReviews: "View All Reviews",
      viewCaseStudy: "Read Story",
    },
    projects: {
      badge: "Featured Projects",
      viewAll: "View All Projects",
      items: [
        {
          title: "Commercial & Office Complex",
          location: "Frankfurt am Main, Germany",
          image: "/images/architektenleistung-leistungsphasen-1-9-hoai-.jpg",
        },
        {
          title: "Residential Development",
          location: "Wiesbaden, Germany",
          image: "/images/dreist-ckiges-mehrfamilienhaus-mit-gro-en-fenstern-a8b20c.png",
        },
        {
          title: "Educational Campus",
          location: "Darmstadt, Germany",
          image: "/images/architektenleistung-leistungsphasen-1-8-hoai-.jpg",
        },
      ],
    },
    projectsPage: {
      backToHome: "Back to Home",
      badge: "PROJECT PORTFOLIO",
      title: "Selected Architecture & Urban Planning Projects.",
      subtitle: "From statutory master zoning and mixed-use commercial hubs to bespoke residential and civic developments.",
      filterAll: "All Projects",
      filterUrban: "Urban & Master Planning",
      filterResidential: "Residential",
      filterCommercial: "Commercial & Mixed-Use",
      filterEducation: "Civic & Education",
      filterSustainability: "Sustainability & QNG",
      viewDetails: "View Project Details",
      ctaTitle: "Planning a New Building Project?",
      ctaSubtitle: "Gain immediate statutory clarity and full-lifecycle HOAI architecture execution.",
      ctaButton: "Book Consultation →",
    },
    projectDetail: {
      backToProjects: "Back to Projects Overview",
      clientLabel: "Client & Project Partner",
      locationLabel: "Location",
      legalBasisLabel: "Statutory Legal Basis",
      yearLabel: "Year / Status",
      scopeLabel: "Scope of Architecture",
      highlightsTitle: "PROJECT HIGHLIGHTS",
      challengeTitle: "1. Initial Situation & Urban Planning Challenge",
      objectiveTitle: "2. Objectives & Statutory Classification",
      conceptTitle: "3. Architectural & Spatial Concept",
      outcomeTitle: "4. Result & Value for Client and Municipality",
      officialDocsTitle: "OFFICIAL STATUTORY DOCUMENTS",
      bindingNotice: "Legally binding statutes and statutory justifications according to German BauGB/LBO.",
      inquiryHeading: "Planning a Similar Development?",
      inquirySub: "Let us review statutory feasibility and urban planning potential for your site.",
      inquiryButton: "Schedule Initial Consultation →",
      allProjectsButton: "View All Projects",
    },
    research: {
      badge: "ACADEMIA & RESEARCH",
      title: "Research, Teaching & Academia",
      subtitle: "Official academic lectureship at Frankfurt University of Applied Sciences (Frankfurt UAS) in Architecture & Urban Planning.",
      academicRole: "Academic Lecturer & Thesis Supervisor",
      institution: "Frankfurt University of Applied Sciences",
      viewTheses: "View Research Papers & Supervised Theses →",
      backToHome: "Back to Home",
      thesesTitle: "Academic Research & Publications",
      thesesSubtitle: "Applied cutting-edge research and supervision of Master and Bachelor theses at Frankfurt University of Applied Sciences.",
      statTheses: "7+",
      statThesesLabel: "Publications & Theses",
      statFields: "5+",
      statFieldsLabel: "Research Fields",
      statPractice: "100%",
      statPracticeLabel: "Practice Transfer",
      filterAll: "All Works",
      filterPub: "Publications",
      filterMaster: "Master Theses",
      filterBachelor: "Bachelor Theses",
      topicsLabel: "Topics:",
      academicFocus: "Academic Focus:",
      downloadPdf: "View Documentation / Abstract",
      ctaTitle: "Interested in Academic Research Cooperation?",
      ctaSubtitle: "We supervise practical research topics and thesis projects in partnership with Frankfurt UAS.",
      ctaButton: "Contact for Research Cooperation →",
      openThesesBadge: "OPEN THESIS VACANCIES",
      openThesesTitle: "Science Meets Practice: Write Your Thesis With Us",
      openThesesSubtitle: "Shams Consult has collaborated with universities for years, supervising Bachelor's and Master's theses as secondary advisor. With our current research topics, we scientifically examine urgent questions from architectural practice: climate-resilient sponge city concepts, circular construction, and affordable housing.",
      openThesesParagraph2: "Students write their thesis on real projects from our practice, gaining hands-on insight into planning, approvals, and construction oversight. Primary academic supervision is provided by your university. This fosters a true win-win: students gain practical career experience while research insights feed back into practice and public knowledge.",
      openThesesApplyHint: "Application: Please send a brief cover letter, your CV, and transcript of records by email to office@shams-consult.de (Subject: e.g. 'Thesis Application Topic 01 – Sponge City').",
      viewDetails: "View Details",
      downloadFlyerTitle: "Download PDF Flyer",
      archiveBadge: "Completed Theses & Archive",
      archiveTitle: "Academic Archive & Publications",
      supervisionLabel: "Supervision:",
      announcementBadge: "3 Open Thesis Topics (Applications Open)",
    },
    founder: {
      badge: "Practice Principal",
      name: "Dipl.-Ing. (FH) Majeed Shams M.Eng.",
      roles: "Architect · Urban Planner · Frankfurt UAS Lecturer",
      bio: "With over 17 years of experience in architectural design, statutory permitting, and municipal building authority reviews, Majeed Shams steers complex building commissions with rigorous cost control and legal certainty.",
      button: "Read More About the Founder",
      stats: [
        { title: "17+ Years", desc: "Practical Experience" },
        { title: "100+ Projects", desc: "Successfully Built" },
        { title: "Research & Teaching", desc: "Frankfurt UAS Lecturer" },
        { title: "Municipal & Private", desc: "Statutory Expert" },
      ],
    },
    about: {
      badge: "PRACTICE PROFILE & VALUES",
      title: "Architecture, Urbanism & Construction Management with Passion.",
      subtitle: "We create sustainable living environments and legally binding building permits with precision and reliability.",
      backToHome: "Back to Home",
      profileBadge: "ABOUT THE PRACTICE",
      profileTitle: "Integrated Architectural & Planning Excellence for over 17 Years",
      profileText1: "Shams Consult stands for integrated architecture, forward-thinking urban planning, and rigorous quality-controlled construction delivery. For more than 17 years, we have delivered complex projects ranging from residential buildings to retail centers and municipal zoning plans.",
      profileText2: "Our methodology combines deep statutory building law knowledge with modern design aesthetics and strict cost control under DIN 276. As a registered practice with the Hessian Chamber of Architects (AKH), we hold full building permit authority across all 16 German federal states.",
      qualificationsBadge: "QUALIFICATIONS & REGULATORY ACCREDITATIONS",
      qualificationsTitle: "Regulatory Authority & Federal Certifications",
      akhRegistrationTitle: "Chamber Registration",
      akhRegistrationDesc: "Officially registered member of the Hessian Chamber of Architects and Urban Planners (AKH #21886) for architecture and urban planning.",
      qngTitle: "QNG & Federal LCA Expert",
      qngDesc: "Listed in the official Federal Energy Efficiency Expert Registry for Life Cycle Assessment (LCA) and QNG green building certification.",
      academiaTitle: "Academia & Teaching",
      academiaDesc: "Official academic lectureship at Frankfurt University of Applied Sciences in Architecture and Urban Planning.",
      teamBadge: "OUR EXPERT TEAM",
      teamTitle: "Meet Our Team of Professionals",
      teamSubtitle: "Our practice unifies experienced architects, urban planners, civil engineers, and computational specialists for integrated project delivery.",
      siteVisitsCtaBadge: "ON-SITE PRACTICE & FIELD EVIDENCE",
      siteVisitsCtaTitle: "Genuine On-Site Presence & Field Documentation",
      siteVisitsCtaDesc:
        "View authentic photographic proof of our practice: from millimeter-precise laser building surveys to hands-on site supervision under HOAI.",
      siteVisitsCtaButton: "View Field Documentation Album →",
      founderStoryBadge: "THE FOUNDER'S PERSONAL JOURNEY",
      founderStoryTitle: "Would you like to read Majeed Shams' personal story?",
      founderStoryDesc: "From refugee to successful architect, urban planner, and university lecturer in Germany.",
      founderStoryButton: "Read Founder Biography →",
      viewResearchContributions: "View Research Contributions →",
    },
    siteVisitsPage: {
      backToHome: "Back to Home",
      badge: "FIELD VISITS",
      title: "Authentic Site Visits",
      subtitle:
        "Architecture requires true on-site presence. Explore unedited photographic records from our daily practice—from initial building surveys to HOAI site supervision.",
      proofNotice: "Unedited original field photographs from ongoing building sites and client walkthroughs.",
      viewHighRes: "View Full Resolution",
      viewAlbum: "View Album",
      closeLightbox: "Close",
      photoRecordLabel: "Photo Record",
      prev: "← Previous",
      next: "Next →",
      ctaTitle: "Planning an On-Site Project or Development?",
      ctaSubtitle:
        "We are pleased to survey your plot or building in person for accurate measurements and early zoning appraisals.",
      ctaButton: "Schedule On-Site Consultation →",
      items: [
        {
          id: "datacenter-bebra-ecology",
          image: "/images/partners/site-visits/shams-fachgespraech-rechenzentrum-bebra-artenschutz.webp",
          tag: "Data Center & Ecology",
          phase: "HOAI Phase 1–3: Sustainability & Wildlife Protection",
          title: "Data Center Bebra Consultation: Wildlife Protection & Heat Recovery",
          desc: "In-depth technical consultation at Shams Consult offices with Dipl.-Ing. Eigenbrodt (client & operator representative): Architectural detailing, greenhouse waste-heat recovery, and local wildlife conservation.",
        },
        {
          id: "residential-excavation",
          image: "/images/partners/site-visits/shams-vor-ort-aussenanlagen-bauleitung-wohnungsbau.webp",
          tag: "Residential Complex",
          phase: "HOAI Phase 8: Site Supervision & Landscape",
          title: "Site Supervision & Landscape Works for Housing Complex",
          desc: "On-site coordination of earthworks and paving for a multi-family housing development: direct technical alignment with contractors.",
        },
        {
          id: "client-dialogue",
          image: "/images/partners/site-visits/shams-vor-ort-bauherrenberatung.webp",
          tag: "On-Site Consultation",
          phase: "HOAI Phase 1",
          title: "Personal Client Dialogue & Trust Building",
          desc: "Direct eye-level dialogue during an on-site property walkthrough: reviewing building intentions and zoning potential.",
        },
        {
          id: "industrial-safety",
          image: "/images/partners/site-visits/shams-vor-ort-gewerbehalle-begutachtung-helm.webp",
          tag: "Commercial Project",
          phase: "HOAI Phase 8: Site Supervision & Structural Survey",
          title: "Commercial Facility: Technical Survey & Safety Inspection",
          desc: "Dipl.-Ing. Majeed Shams surveying industrial facility doors, structural access, and building condition with helmet and high-vis vest.",
        },
        {
          id: "building-survey",
          image: "/images/partners/site-visits/shams-vor-ort-bestandsaufnahme-messung.webp",
          tag: "Building Survey",
          phase: "HOAI Phase 1: Inception & Briefing",
          title: "Technical Building Survey & Laser Measurement",
          desc: "Accurate manual and laser measurement of room geometry and existing structures to generate reliable as-built drawings.",
        },
        {
          id: "project-strategy",
          image: "/images/partners/site-visits/shams-vor-ort-projektbesprechung-plaene.webp",
          tag: "Project Strategy",
          phase: "HOAI Phase 2 & 3: Developed Design",
          title: "Project Consultation & Plan Review",
          desc: "In-depth review of architectural and zoning drawings with clients and investors in a dedicated planning meeting.",
        },
        {
          id: "commercial-handshake",
          image: "/images/partners/site-visits/shams-vor-ort-handschlag-gewerbebau.webp",
          tag: "Commercial Project",
          phase: "HOAI Phase 1 & 8",
          title: "Trusted Handshake at Commercial Facility",
          desc: "Dipl.-Ing. Majeed Shams concluding an on-site inspection and strategic alignment outside the logistics facility.",
        },
        {
          id: "site-supervision",
          image: "/images/partners/site-visits/shams-vor-ort-baustellenbegehung-sicherheitsweste.webp",
          tag: "Site Supervision",
          phase: "HOAI Phase 8: Site Supervision & VOB",
          title: "On-Site Inspection with Safety Equipment",
          desc: "On-site quality and safety control with high-vis vest and helmet: technical inspection of facility access and storage areas.",
        },
        {
          id: "ground-measurement",
          image: "/images/partners/site-visits/shams-vor-ort-asphaltierung-hoehung-messung.webp",
          tag: "Site Works & Paving",
          phase: "HOAI Phase 8: Site Supervision",
          title: "Precision Level Inspection & Courtyard Paving Survey",
          desc: "Dipl.-Ing. Majeed Shams conducting on-site elevation and slope checks for newly asphalted access ways with the site contractor.",
        },
        {
          id: "site-coordination-residential",
          image: "/images/partners/site-visits/shams-vor-ort-baustellenkoordination-wohnungsbau.webp",
          tag: "Residential Coordination",
          phase: "HOAI Phase 8: Site Supervision",
          title: "On-Site Construction Coordination for Housing Complex",
          desc: "Direct technical coordination of construction sequencing and earthworks on-site in front of the multi-family apartment building.",
        },
        {
          id: "courtyard-inspection",
          image: "/images/partners/site-visits/shams-vor-ort-bestandsbegehung-innenhof.webp",
          tag: "Existing Building Survey",
          phase: "HOAI Phase 1–2: Site Assessment & Client Coordination",
          title: "On-Site Structural Inspection & Courtyard Consultation",
          desc: "Direct on-site inspection by Dipl.-Ing. Majeed Shams: Direct technical consultation on building structure, façade condition, and refurbishment or conversion potentials.",
        },
        {
          id: "expert-dialogue-network",
          image: "/images/partners/site-visits/shams-fachdialog-netzwerk.jpg",
          tag: "Expert Exchange & Network",
          phase: "B2B Collaboration & Project Strategy",
          title: "High-Level Technical Exchange & Strategic Network Dialogue",
          desc: "Dipl.-Ing. Majeed Shams in focused technical dialogue with project partners on progressive architectural planning and construction innovation.",
        },
      ],
    },
    blog: {
      badge: "MAGAZINE & ARTICLES",
      title: "Latest Insights in Architecture, Building Law & Urbanism",
      subtitle: "In-depth expert analyses, statutory guidelines, and practical insights from our daily planning practice.",
      viewAll: "View All Articles",
      readMore: "Read Full Article",
      allTopics: "All Topics",
      searchPlaceholder: "Search articles by keyword...",
      noResults: "No articles found matching this term.",
      resetFilters: "Reset filters",
      backToHome: "Back to Home",
      backToBlog: "Back to Magazine",
      availableArticles: "Articles available",
      authorName: "Dipl.-Ing. Majeed Shams",
      authorRole: "Practice Principal · Architect · Urban Planner · Frankfurt UAS Lecturer",
      moreArticles: "More Articles",
      relatedTopics: "Related Topics",
      ctaHeading: "Have a Question on Building Law or Planning?",
      ctaSubheading: "Let's discuss your project parameters in a structured consultation.",
      ctaButton: "Request Consultation →",
      prev: "Previous",
      next: "Next",
      pauseScroll: "Pause Scroll",
      startScroll: "Resume Scroll",
    },
    contact: {
      badge: "Expert Consultation · 100% Credited Towards Project Order",
      headlinePart1: "Start Your Project with ",
      headlineHighlight: "Clarity",
      subtitle: "Book your personal 30–60 minute architectural and planning consultation with our founder & principal. The fee of €185 (+ VAT) is 100% credited towards your project contract.",
      calendarCardTitle: "ONLINE APPOINTMENT BOOKING",
      calendarCardHeading: "Select Your Preferred Time Slot in the Calendar",
      calendarCardDesc: "Choose your preferred time slot in our Microsoft 365 calendar for a 30–60 minute direct consultation with our principal (by phone or Microsoft Teams). The consultation fee is fully credited to your subsequent project commission.",
      calendarCardButton: "Select Time Slot in Calendar →",
      calendarCardBenefits: [
        "30–60 minutes in-depth technical consultation with the practice principal",
        "Statutory planning review (Zoning / § 34 BauGB / QNG sustainability)",
        "100% credit of the fee (€185 + VAT) against your subsequent contract",
      ],
      emailCardTitle: "Email the Architecture Practice",
      emailCardDesc: "Send us your project documents, drawings, or initial questions directly by email.",
      emailCardButton: "Email office@shams-consult.de →",
      whatsappTitle: "Quick Question via WhatsApp?",
      whatsappDesc: "Message us directly with preliminary property details or photos of your building plot.",
      whatsappButton: "Start WhatsApp Chat →",
      whatsappMessage: "Hello Mr. Shams, I would like to request an initial consultation for my building project.",
      phoneCardTitle: "Direct Telephone Consultation",
      phoneCardDesc: "Call us directly during office hours at our Frankfurt or Rödermark offices.",
      liveCalendar: "Live Calendar",
      onlineStatus: "Online",
      getDirections: "Open Route in Google Maps ↗",
      mapTabLabel: "Locations",
      directPhone: "+49 69 74 223 777",
      officesTitle: "Our Practice Offices",
      officesSubtitle: "Frankfurt am Main & Rödermark",
      insuranceReassurance: "Statutory Professional Indemnity (§ 16 HASG) · Full Safety",
    },
    mobileActionBar: {
      call: "Call",
      whatsapp: "WhatsApp",
      email: "Email",
      book: "Book Consultation",
    },
    legal: {
      backToHome: "Back to Home",
      impressumTitle: "Legal Notice (Impressum)",
      datenschutzTitle: "Privacy Policy (Datenschutz)",
      barrierefreiheitTitle: "Accessibility Statement",
      widerrufTitle: "Right of Withdrawal & Model Form",
      close: "Close",
      informationProvider: "Information Pursuant to § 5 TMG / § 18 MStV",
      owner: "Principal & Owner",
      contact: "Contact Information",
      chamber: "Competent Chamber & Professional Regulations",
      insurance: "Professional Indemnity Insurance",
      responsibleAuthority: "Competent Supervisory Authority",
    },
    footer: {
      description:
        "Shams Consult is your trusted architectural practice for structural design, urban planning, and project development in the Rhine-Main region and nationwide.",
      quickLinksTitle: "Navigation",
      servicesTitle: "Services",
      contactTitle: "Contact",
      followTitle: "Networks",
      brandTagline: "Architecture · Urban Planning · Project Development",
      legalImpressum: "Legal Notice",
      legalDatenschutz: "Privacy Policy",
      legalBarrierefreiheit: "Accessibility",
      legalWiderruf: "Withdrawal",
      cookieSettings: "Cookie Settings",
      developedBy: "Developed with ❤️ in Germany by",
      rights: "All rights reserved.",
      vCardLink: "Digital Business Card (.vcf)",
    },
    notFound: {
      badge: "404 Error",
      title: "Page Not Found",
      message:
        "The page you requested does not exist or may have been moved as part of our recent website update.",
      requestedPathLabel: "Requested URL path:",
      backHome: "Back to Home",
      exploreProjects: "Explore Projects",
      aboutUs: "About Shams Consult",
      contactUs: "Contact & Consultation",
      needAssistance: "Have questions or looking for a specific project? We are happy to assist you.",
    },
    regionalLandingPage: {
      homeBreadcrumb: "Home",
      akhRegistrationBadge: "AKH Hesse No. 21886",
      experienceBadge: "17+ Years Experience",
      requestConsultation: "Request Consultation",
      callDirectly: "Call directly:",
      regionalExpertiseBadge: "Regional Expertise & Building Law",
      realReferencesBadge: "Real References",
      realizedProjectsHeading: "Realized Projects in the Regional Area",
      realizedProjectsSubtitle: "Selected construction and planning projects with concrete metrics, construction volumes, and architectural specifications.",
      viewProjectDetails: "View project details",
      structuredWorkflowBadge: "Structured Project Workflow",
      hoaiPhasesHeading: "HOAI Work Phases 1–9 in Detail",
      hoaiPhasesSubtitle: "Transparency from the initial sketch to final building acceptance. We oversee end-to-end coordination of all specialist engineers and municipal authorities.",
      deliverablesLabel: "Deliverables & Outcomes:",
      officeAvailableBadge: "Locally Accessible for You",
      addressLabel: "Address",
      phoneLabel: "Telephone Contact",
      scheduleOfficeAppointment: "Schedule Office Appointment",
      startProjectBadge: "Start Your Project",
      ctaSubtitle: "Secure expert architectural guidance, rigorous cost discipline, and streamlined building permit approvals with Dipl.-Ing. Majeed Shams.",
      districtsBadge: "Districts & Micro-Locations",
      districtsHeading: "Architecture & Permits by District in",
      districtsSubtitle: "Every quarter brings distinct regulatory hurdles — from historic conservation and social preservation to master plan mandates and infill. Select your area:",
      selectDistrictAria: "Select district",
      coveredMicroLocationsLabel: "Covered micro-locations:",
      inquireProjectButton: "Inquire Project",
      callOfficeButton: "Call:",
      architecturalFocusHeading: "Architectural Focus Areas",
      zoningRequirementsHeading: "Zoning & Statutory Requirements",
      districtActionPrompt: "Planning a project in this district? We review feasibility and planning laws in advance.",
      inquireDistrictAction: "Request Consultation",
      readyForProjectPrefix: "Ready for Your Architecture Project in",
      faqBadge: "FAQ & Planning Regulations",
      faqHeading: "Key Questions on Costs, Permits & Timeline",
      faqSubtitle: "Transparent orientation for developers and homeowners regarding HOAI fees, authority milestones, and approvals.",
      faqActionPrompt: "Have a specific question regarding your building site or project?",
      faqActionCta: "Schedule a Consultation with the Architect",
      serviceTriadBadge: "Integrated Disciplines",
      serviceTriadHeading: "Architecture, Urban Planning & Permitting from One Source",
      serviceTriadSubtitlePrefix: "We provide property owners and developers in",
      serviceTriadSubtitleSuffix: "with comprehensive planning: from urban feasibility and HBO permits to turnkey construction supervision (HOAI 1–9).",
      pillar1Tag: "01 // HOAI 1–9",
      pillar1Title: "Building Architecture",
      pillar1Subtitle: "New Builds · Retrofits · Supervision",
      pillar1Desc: "From initial concept to detailed working drawings (1:50) and on-site construction supervision. High-standard residential and commercial architecture with strict DIN 276 budget control.",
      pillar1Bullets: [
        "Bespoke design & working drawings",
        "Tenders & BoQs under VOB",
        "Daily site clerk of works (HOAI 8)",
      ],
      pillar2Tag: "02 // Urbanistik",
      pillar2Title: "Urban Planning & Zoning",
      pillar2Subtitle: "Master Planning · Infill · Districts",
      pillar2Desc: "Officially registered urban planners with AKH Hesse. We develop urban master plans, evaluate infill potentials, and draft project-based zoning plans under German BauGB.",
      pillar2Bullets: [
        "Urban feasibility studies",
        "Densification & brownfield conversion",
        "Zoning bylaws (§ 12 & § 30 BauGB)",
      ],
      pillar3Tag: "03 // Genehmigung",
      pillar3Title: "Permits & Building Law",
      pillar3Subtitle: "HBO Code · Building Dept · Variances",
      pillar3Desc: "Full unrestricted building permit filing privileges (AKH Hesse No. 21886). We prepare bulletproof applications, preliminary permit queries, and negotiate statutory variances.",
      pillar3Bullets: [
        "Legally compliant HBO applications",
        "Change-of-use permits (commercial to residential)",
        "Preliminary permit inquiries (§ 34 BauGB)",
        "Heritage & environmental clearance",
      ],
      learnMore: "Learn more",
      referencesBadge: "References & Catchment",
      referencesHeading: "Selected References across Frankfurt & Rhine-Main Region",
      referencesSubtitlePrefix: "Representative completed buildings and planning projects from our portfolio. We plan for clients in",
      referencesSubtitleSuffix: "and the wider Rhine-Main area with the same dedication and regulatory rigor.",
    },
    faqSection: {
      badge: "Frequently Asked Questions",
      heading: "Key Questions on Architectural Services, Costs & Building Permits",
      subtitle: "Authoritative answers regarding HOAI fee structures, municipal permit durations across Hesse, KfW subsidies, and workflow milestones.",
      actionPrompt: "Do you have a specific inquiry regarding your property or upcoming project?",
      actionCta: "Schedule a Consultation with the Architect",
      items: [
        {
          question: "How are architectural fees calculated under the German HOAI?",
          answer: "Architectural fees in Germany are structured per official Work Phases (1 through 9) under the statutory HOAI framework. The fee calculation is based on verified net construction expenditures and the building's complexity zone (typically Zone III or IV for custom residential or commercial builds). Shams Consult provides itemized, transparent phase proposals before contract commencement.",
        },
        {
          question: "How long does a building permit procedure take in Hesse (HBO)?",
          answer: "Under simplified permit procedures (§ 65 HBO), review times across Hessian building authorities (Frankfurt, Offenbach, Wiesbaden, Darmstadt) typically take between 3 and 5 months. As state-registered architects with unlimited submission authority, we submit meticulous, verified documentation covering structural, fire safety, and civil drainage engineering to eliminate administrative delays.",
        },
        {
          question: "Does Shams Consult manage full architectural delivery from design through site supervision?",
          answer: "Yes, we direct projects holistically across all 9 HOAI phases: from site assessment and preliminary designs (Phases 1–2), detailed design and permit submission (Phases 3–4), to precision working drawings (Phase 5), contractor tendering (Phases 6–7), and rigorous daily on-site supervision through final building handover (Phases 8–9).",
        },
        {
          question: "What federal subsidies are available for KfW efficiency homes and QNG green certifications?",
          answer: "Under federal energy-efficiency programs (BEG) and KfW Climate-Friendly New Construction guidelines (KFN 297/298), developers can access low-interest loans of up to €150,000 per dwelling unit with repayment subsidies. Achieving the federal QNG (Quality Seal for Sustainable Buildings) unlocks maximum subsidy caps. We engineer these standards directly into our architectural concepts.",
        },
        {
          question: "What can I expect during an initial architectural consultation?",
          answer: "During our consultation, we review your project vision, property zoning parameters (municipal master plan or § 34 BauGB infill context), and any existing structures. You receive an initial expert appraisal regarding legal feasibility, municipal approval probability, realistic budgets, and project milestones.",
        },
        {
          question: "What is the difference between a municipal master plan (B-Plan) and § 34 BauGB infill?",
          answer: "Where an active master plan (B-Plan) exists, it strictly defines site occupancy (GRZ), floor area ratios (GFZ), eaves heights, and roof geometries. In areas without a B-Plan, Section 34 BauGB applies: new construction must blend harmoniously into the character of the immediate neighborhood. We clarify statutory zoning with local planning authorities.",
        },
        {
          question: "Do I need a licensed architect for a change of use (e.g., commercial to residential)?",
          answer: "Yes. Under German building law (HBO), a change of use (Nutzungsänderung) requires a formal building permit whenever statutory requirements such as fire safety, parking ratios, emergency egress, or acoustic standards are impacted. With unlimited filing authorization (AKH Hesse No. 21886), we prepare compliant change-of-use permit applications and coordinate swift approvals with municipal building authorities.",
        },
      ],
    },
    vCard: {
      backToHome: "Back to Home",
      showQrCode: "Show QR Code",
      pageSubtitle: "Digital Business Card",
      verified: "Verified",
      roleSubtitle: "Architect & Urban Planner · Founder & Managing Director",
      subTitleDetail: "Frankfurt am Main & Rödermark",
      chamberTitle: "Officially Licensed & Registered",
      saveButtonText: "Save Contact to Phone (.vcf)",
      saveButtonSubtext: "Opens native Apple & Google Contacts",
      downloadSuccessNotice: "Download started! Tap the downloaded file to save the contact in your address book.",
      quickActionsHeading: "QUICK ACTIONS",
      frankfurtOffice: "Frankfurt Office",
      roedermarkOffice: "Rödermark Office",
      whatsappTitle: "WhatsApp Chat",
      whatsappSubtitle: "Direct Message",
      emailTitle: "Email",
      bookConsultationTitle: "Book Consultation",
      bookConsultationSubtitle: "Free 30-min architectural consultation",
      locationsHeading: "OFFICE LOCATIONS",
      hqTitle: "Headquarters Frankfurt am Main",
      branchTitle: "Branch Office Rödermark",
      routeButton: "Directions",
      websiteText: "shams-consult.de",
      conferenceModalTag: "CONFERENCE & EVENT MODE",
      conferenceModalSubtitle: "Scan with your phone camera to instantly save contact to address book.",
      directDownloadButton: "Download vCard directly",
      closeModal: "Close",
      stickySaveText: "Save Contact",
      callButton: "Call",
      qrSectionTitle: "QR Code to Scan",
      qrSectionSubtitle: "Scan with your smartphone camera to save the contact directly to your address book.",
    },
    founderPage: {
      backToHome: "Back to Home",
      founderPortal: "Founder Portal",
      portalTooltip: "Protected Founder Portal for Collateral",
      pageSubtitle: "About the Founder",
      storyBadge: "THE FOUNDER'S STORY",
      storyTitle: "From a Dream to Reality: The Journey of Our Founder",
      storySubtitle: "Trust, dedication, and the passion to create enduring value for people and communities through architecture and urban planning.",
      founderRole: "Architect · Urban Planner · Researcher · Founder",
      academicCredentials: "Academic Credentials",
      degree1: "Dipl.-Ing. (FH) Architecture — Karlsruhe University of Applied Sciences",
      degree2: "Master of Science (M.Sc.) Urban Planning — HFT Stuttgart",
      chamberMembership: "Member of the Chamber of Architects (AKH Hessen & AKBW)",
      lecturerRole: "Lecturer for Building Construction & Architectural Design",
      gratitudeBadge: "GRATITUDE & GERMAN ENGINEERING CALLING",
      gratitudeTitle: "Germany – A Homeland of Trust, Education, and Life-Changing Opportunity",
      gratitudeQuote: "“When I arrived in Germany in 2005 with nothing but the hope for education, this society placed its unconditional trust in me. Today, my highest life’s calling is to repay that trust through honest German planning discipline, uncompromising reliability under DIN & VOB, and building enduring architectural value for people and communities.”",
      lecturerTag: "Lecturer Frankfurt UAS · Founder Shams Consult",
      pressBadge: "HISTORICAL DOCUMENTATION",
      pressTitle: "Rheinische Post Newspaper, Edition August 30, 2005",
      pressCaptionPrefix: "Historical Press Record:",
      pressCaption: "Rheinische Post, August 30, 2005 — Article documenting Majeed Shams' arrival at Düsseldorf Airport and his guiding vision: 'From nobody to somebody, to help and share experiences with everybody.'",
      consultationHeading: "Would You Like to Discuss Your Project with Majeed Shams?",
      consultationDesc: "Whether residential construction, urban master planning, or complex permit proceedings — we stand by your side with dedication and proven expertise.",
      consultationCta: "Request Consultation →",
    },
    researchTopicPage: {
      backToHub: "Back to Research Hub",
      departmentLabel: "Frankfurt UAS · Faculty 1",
      overviewLabel: "Overview:",
      caseStudyBadge: "Built Case Study",
      factsHeading: "Key Facts & Data",
      problemHeading: "Context & Problem Statement",
      objectivesHeading: "Thesis Objectives",
      researchQuestionsHeading: "Key Research Questions",
      frameworkBadge: "Framework & Mentorship",
      frameworkHeading: "Science Meets Practice: Supervision Details",
      sourcesHeading: "Key Sources & Literature",
      faqBadge: "Frequently Asked Questions",
      faqHeading: "Questions on Application & Mentorship",
      faqSubtitle: "Key answers for students of architecture, civil engineering, and urban planning.",
      ctaBadge: "Interested in this Topic?",
      ctaTitle: "Apply for this Thesis Topic",
      ctaDescription: "Send a brief cover letter, your CV, and your transcript of records directly to office@shams-consult.de.",
      trustMentor: "1:1 Faculty Mentoring",
      trustData: "Built Project Data",
      trustCredit: "Co-Supervision Recognized",
      pdfFlyerButton: "PDF Flyer",
      applyEmailButton: "Apply via Email",
      otherTopicsHeading: "Other Open Research Topics",
      mobileApplyButton: "Apply Now",
      emailGreeting: "Dear Mr. Shams,",
      emailBodyInterest: "I am writing to express my interest in the thesis topic",
      emailBodyAttachment: "Please find attached my brief cover letter, CV, and current transcript of records.",
      emailBodyMeeting: "I look forward to discussing the potential collaboration.",
      emailClosing: "Best regards,",
      faqs: [
        {
          question: "Who can apply for this thesis topic?",
          answer: "Students enrolled in Architecture, Civil Engineering, Urban Planning, or related degree programs (Bachelor's or Master's) at any recognized university or university of applied sciences.",
        },
        {
          question: "What does thesis supervision at Shams Consult look like?",
          answer: "You benefit from continuous 1:1 mentoring by Dipl.-Ing. Majeed Shams (Lecturer at Frankfurt UAS), full access to real-world built projects and permit files, and support with academic methodology, BIM, and AI analysis tools.",
        },
        {
          question: "Is external supervision recognized by my university?",
          answer: "Yes, absolutely. Primary academic evaluation remains with your university professor. Shams Consult serves as your industry practice mentor and gladly acts as official secondary examiner upon departmental agreement.",
        },
        {
          question: "When can I start and how flexible are the deadlines?",
          answer: "Start dates are flexible year-round. The timeline adapts completely to your academic schedule and examination regulations (typically 3 to 6 months).",
        },
        {
          question: "What application documents do I need to submit?",
          answer: "The process is straightforward: email a brief letter of motivation with your intended start date, your CV, and your current transcript of records to office@shams-consult.de. We will reply promptly for an informal conversation.",
        },
      ],
    },
    cookieBanner: {
      ariaLabel: "Cookie Consent",
      badge: "Privacy & Transparency",
      title: "Cookie & Privacy Settings",
      closeModal: "Close",
      description: "We use cookies and similar technologies to ensure optimal performance, provide key functionality, and analyze anonymous site traffic.",
      essentialTitle: "1. Strictly Necessary",
      alwaysActive: "Always active",
      essentialAria: "Strictly necessary (active)",
      essentialDesc: "Required for basic website functions, page navigation, security, and contact form submission.",
      analyticsTitle: "2. Google Analytics 4 (Analytics)",
      analyticsDesc: "Helps us understand how visitors interact with our practice website to continuously improve content and user experience. Data is processed anonymously.",
      lessDetails: "Fewer details",
      customizeSettings: "Customize settings",
      privacy: "Privacy Policy",
      imprint: "Legal Notice",
      saveSelection: "Save selection",
      acceptAll: "Accept all",
      acceptEssential: "Essential only",
    },
  },
};
