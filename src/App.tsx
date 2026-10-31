import { useState, useEffect, useCallback } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MetricsBar } from "./components/MetricsBar";
import { ServicesSection } from "./components/ServicesSection";
import { CaseStudiesSection } from "./components/CaseStudiesSection";
import { FeaturedProjectsSection } from "./components/FeaturedProjectsSection";
import { ProjectsPage } from "./components/ProjectsPage";
import { ProjectDetail } from "./components/ProjectDetail";
import { FounderPage } from "./components/FounderPage";
import { FounderPortalPage } from "./components/FounderPortalPage";
import { VCardPage } from "./components/VCardPage";
import { AboutPage } from "./components/AboutPage";
import { CaseStudyDetail } from "./components/CaseStudyDetail";
import { BlogSection } from "./components/BlogSection";
import { BlogPage } from "./components/BlogPage";
import { BlogDetail } from "./components/BlogDetail";
import { ResearchSection } from "./components/ResearchSection";
import { ResearchPage } from "./components/ResearchPage";
import { ResearchTopicPage } from "./components/ResearchTopicPage";
import { openThesesData, OpenThesisTopic } from "./lib/openTheses";
import { AkhRegistrationSection } from "./components/AkhRegistrationSection";
import { TeamSection } from "./components/TeamSection";
import { VobSection } from "./components/VobSection";
import { VideoSection } from "./components/VideoSection";
import { ClientsMovingSection } from "./components/ClientsMovingSection";
import { ClientsPage } from "./components/ClientsPage";
import { SiteVisitsMovingSection } from "./components/SiteVisitsMovingSection";
import { SiteVisitsPage } from "./components/SiteVisitsPage";
import { B2BPartnersPage } from "./components/B2BPartnersPage";
import { FaqSection } from "./components/FaqSection";
import { MobileStickyActionBar } from "./components/MobileStickyActionBar";
import { DesktopStickyActionBar } from "./components/DesktopStickyActionBar";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { LegalModal, LegalModalType } from "./components/LegalModal";
import { LegalPage, LegalPageType } from "./components/LegalPage";
import { NotFoundPage } from "./components/NotFoundPage";
import { CookieBanner } from "./components/CookieBanner";
import { Language, content } from "./lib/i18n";
import { caseStudies, CaseStudy } from "./data/caseStudies";
import { projects, Project } from "./data/projects";
import { BlogPost, getBlogPostBySlug } from "./data/blog";
import { RegionalLandingPage } from "./components/RegionalLandingPage";
import { regionalLandingPages, RegionalLandingPageData } from "./data/regionalLandingPages";
import { ComparisonPage } from "./components/ComparisonPage";
import { comparisonTopics } from "./data/comparisons";
import { trackPageView } from "./lib/analytics";
import { updatePageSeo, getProjectSeo, getBlogPostSeo, getCaseStudySeo } from "./lib/seo";
import { parsePathLocale, getLocalizedPath } from "./lib/i18nRouting";

export function App() {
  const [language, setLanguage] = useState<Language>("de");
  const t = content[language];
  const [legalModal, setLegalModal] = useState<LegalModalType>(null);
  const [activeLegalPage, setActiveLegalPage] = useState<LegalPageType | null>(null);
  const [activeRegionalPage, setActiveRegionalPage] = useState<RegionalLandingPageData | null>(null);
  const [leadMessage] = useState<string>("");
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeBlogPost, setActiveBlogPost] = useState<BlogPost | null>(null);
  const [isProjectsPage, setIsProjectsPage] = useState<boolean>(false);
  const [isFounderPage, setIsFounderPage] = useState<boolean>(false);
  const [isFounderPortalPage, setIsFounderPortalPage] = useState<boolean>(false);
  const [isVCardPage, setIsVCardPage] = useState<boolean>(false);
  const [isAboutPage, setIsAboutPage] = useState<boolean>(false);
  const [isClientsPage, setIsClientsPage] = useState<boolean>(false);
  const [isSiteVisitsPage, setIsSiteVisitsPage] = useState<boolean>(false);
  const [isBlogPage, setIsBlogPage] = useState<boolean>(false);
  const [isResearchPage, setIsResearchPage] = useState<boolean>(false);
  const [activeResearchTopic, setActiveResearchTopic] = useState<OpenThesisTopic | null>(null);
  const [isB2BPage, setIsB2BPage] = useState<boolean>(false);
  const [isComparisonPage, setIsComparisonPage] = useState<boolean>(false);
  const [activeComparisonTopicId, setActiveComparisonTopicId] = useState<string>("boutique-vs-grossbuero");
  const [isNotFound, setIsNotFound] = useState<boolean>(false);
  const [requestedPath, setRequestedPath] = useState<string>("");

  // Synchronize state with standard HTML5 URL paths safely handling encodings, legacy German aliases, and broken links
  const syncRoute = useCallback(() => {
    const rawPath = window.location.pathname;
    const { lang: detectedLang, cleanPath } = parsePathLocale(rawPath);
    const path = cleanPath;

    setLanguage(detectedLang);
    document.documentElement.lang = detectedLang;
    setRequestedPath(rawPath);
    trackPageView(rawPath);
    setActiveRegionalPage(null);
    setIsB2BPage(false);
    setIsFounderPortalPage(false);
    setActiveResearchTopic(null);

    // 0. Regional Hub-and-Spoke Landing Pages (/architektur-frankfurt, /architektur-roedermark, /architektur-dreieich, /stadtplanung-hessen)
    const regionalKey = path.replace(/^\//, "");
    if (regionalLandingPages[regionalKey]) {
      const pageData = regionalLandingPages[regionalKey];
      setActiveRegionalPage(pageData);
      setIsComparisonPage(false);
      setIsSiteVisitsPage(false);
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsProjectsPage(false);
      setIsClientsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setIsNotFound(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      setActiveLegalPage(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 0.1 Comparison & Decision Guide Pages (/vergleich, /boutique-vs-grossbuero, /architekt-oder-bautraeger, /vollarchitektur-vs-entwurf)
    if (
      path === "/vergleich" ||
      path === "/vergleiche" ||
      path === "/comparison" ||
      path === "/comparisons" ||
      path.startsWith("/vergleich/") ||
      path === "/boutique-vs-grossbuero" ||
      path === "/architekt-oder-bautraeger" ||
      path === "/architekt-vs-bautraeger" ||
      path === "/vollarchitektur-vs-entwurf" ||
      path === "/vollarchitektur-vs-reiner-entwurf"
    ) {
      let topicId = "boutique-vs-grossbuero";
      if (path.includes("bautraeger")) topicId = "architekt-vs-bautraeger";
      else if (path.includes("entwurf")) topicId = "vollarchitektur-vs-reiner-entwurf";
      else if (path.startsWith("/vergleich/")) {
        const sub = path.replace(/^\/vergleich\//, "").trim();
        if (sub) topicId = sub;
      }
      setIsComparisonPage(true);
      setActiveComparisonTopicId(topicId);
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsProjectsPage(false);
      setIsClientsPage(false);
      setIsSiteVisitsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setIsNotFound(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      setActiveLegalPage(null);
      setActiveRegionalPage(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 0.2 B2B Bauträger, Investoren & FCN Kundentag
    if (
      path === "/bautraeger-investoren" ||
      path === "/bautraeger" ||
      path === "/bauträger" ||
      path === "/investoren" ||
      path === "/investors" ||
      path === "/b2b" ||
      path === "/developers" ||
      path === "/developers-investors" ||
      path === "/b2b-partner"
    ) {
      setIsB2BPage(true);
      setIsComparisonPage(false);
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsProjectsPage(false);
      setIsClientsPage(false);
      setIsSiteVisitsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setIsNotFound(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      setActiveLegalPage(null);
      setActiveRegionalPage(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 1. Site visits / Album / Baustelleneinblicke
    if (
      path === "/site-visits" ||
      path === "/album" ||
      path === "/einblicke" ||
      path === "/vor-ort" ||
      path === "/baustellen"
    ) {
      setIsSiteVisitsPage(true);
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsProjectsPage(false);
      setIsClientsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setIsNotFound(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      setActiveLegalPage(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 2. Clients / Partner / Referenzen
    if (
      path === "/clients" ||
      path === "/kunden" ||
      path === "/partners" ||
      path === "/partner" ||
      path === "/referenzen" ||
      path === "/auftraggeber"
    ) {
      setIsClientsPage(true);
      setIsSiteVisitsPage(false);
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsProjectsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setIsNotFound(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      setActiveLegalPage(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 2.9 Dedicated Open Thesis Topic (/forschung/schwammstadt, /forschung/cradle-to-cradle, /forschung/gebaeudetyp-e)
    const researchTopicMatch = path.match(/^\/(?:forschung|research)\/([a-z0-9-]+)$/);
    if (researchTopicMatch) {
      const slug = researchTopicMatch[1];
      const foundTopic =
        openThesesData[detectedLang]?.find((t) => t.slug === slug || t.id === slug) ||
        openThesesData.de.find((t) => t.slug === slug || t.id === slug);
      if (foundTopic) {
        setActiveResearchTopic(foundTopic);
        setIsResearchPage(true);
        setIsAboutPage(false);
        setIsFounderPage(false);
        setIsProjectsPage(false);
        setIsClientsPage(false);
        setIsBlogPage(false);
        setIsNotFound(false);
        setActiveProject(null);
        setActiveCaseStudy(null);
        setActiveBlogPost(null);
        setActiveLegalPage(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
    }

    // 3. Research / Forschung & Lehre
    if (
      path === "/research" ||
      path === "/forschung" ||
      path === "/lehre" ||
      path === "/thesen" ||
      path === "/publikationen"
    ) {
      setIsResearchPage(true);
      setActiveResearchTopic(null);
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsProjectsPage(false);
      setIsClientsPage(false);
      setIsBlogPage(false);
      setIsNotFound(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      setActiveLegalPage(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 4. About / Team / Über uns / Büro
    if (
      path === "/about" ||
      path === "/team" ||
      path === "/über-uns" ||
      path === "/ueber-uns" ||
      path === "/uber-uns" ||
      path === "/wir-ueber-uns" ||
      path === "/buero" ||
      path === "/büro" ||
      path === "/profil" ||
      path === "/agentur"
    ) {
      setIsAboutPage(true);
      setIsFounderPage(false);
      setIsProjectsPage(false);
      setIsClientsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setIsNotFound(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      setActiveLegalPage(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 5. Founder / Inhaber / Vita
    if (
      path === "/founder" ||
      path === "/gruender" ||
      path === "/gründer" ||
      path === "/inhaber" ||
      path === "/vita" ||
      path === "/architekt"
    ) {
      setIsFounderPage(true);
      setIsFounderPortalPage(false);
    setActiveResearchTopic(null);
      setIsAboutPage(false);
      setIsProjectsPage(false);
      setIsClientsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setIsNotFound(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      setActiveLegalPage(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 5b. Founder Portal / Locked Flyers (/founder-portal, /gruender-portal, /portal, /intern, /flyers)
    if (
      path === "/founder-portal" ||
      path === "/gruender-portal" ||
      path === "/portal" ||
      path === "/intern" ||
      path === "/flyers" ||
      path === "/flyer"
    ) {
      setIsFounderPortalPage(true);
      setIsFounderPage(false);
      setIsAboutPage(false);
      setIsProjectsPage(false);
      setIsClientsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setIsNotFound(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      setActiveLegalPage(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 5c. Digital Business Card & vCard (/card, /vcard, /visitenkarte, /kontaktkarte, /contact-card)
    if (
      path === "/card" ||
      path === "/vcard" ||
      path === "/visitenkarte" ||
      path === "/kontaktkarte" ||
      path === "/contact-card"
    ) {
      setIsVCardPage(true);
      setIsFounderPortalPage(false);
    setActiveResearchTopic(null);
      setIsFounderPage(false);
      setIsAboutPage(false);
      setIsProjectsPage(false);
      setIsClientsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setIsComparisonPage(false);
      setIsB2BPage(false);
      setIsSiteVisitsPage(false);
      setIsNotFound(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      setActiveLegalPage(null);
      setActiveRegionalPage(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 6. Projects Overview
    if (
      path === "/projects" ||
      path === "/projekte" ||
      path === "/portfolio" ||
      path === "/bauten" ||
      path === "/arbeiten"
    ) {
      setIsProjectsPage(true);
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsClientsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setIsNotFound(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      setActiveLegalPage(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 7. Blog Overview
    if (
      path === "/blog" ||
      path === "/magazin" ||
      path === "/news" ||
      path === "/aktuelles" ||
      path === "/artikel" ||
      path === "/beitraege"
    ) {
      setIsBlogPage(true);
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsProjectsPage(false);
      setIsClientsPage(false);
      setIsResearchPage(false);
      setIsNotFound(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      setActiveLegalPage(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 8. Blog Detail
    if (
      path.startsWith("/blog/") ||
      path.startsWith("/magazin/") ||
      path.startsWith("/news/") ||
      path.startsWith("/artikel/")
    ) {
      const slug = path.replace(/^\/(blog|magazin|news|artikel)\//, "").replace(/\/$/, "");
      const found = getBlogPostBySlug(slug);
      if (found) {
        setActiveBlogPost(found);
        setIsBlogPage(false);
        setIsProjectsPage(false);
        setIsAboutPage(false);
        setIsFounderPage(false);
        setIsClientsPage(false);
        setIsResearchPage(false);
        setIsNotFound(false);
        setActiveCaseStudy(null);
        setActiveProject(null);
        setActiveLegalPage(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
    }

    // 9. Project Detail
    if (
      path.startsWith("/project/") ||
      path.startsWith("/projekt/") ||
      path.startsWith("/projekte/")
    ) {
      const id = path.replace(/^\/(project|projekt|projekte)\//, "").replace(/\/$/, "");
      const found = projects.find((p) => p.id === id || p.slug === id);
      if (found) {
        setActiveProject(found);
        setIsProjectsPage(false);
        setIsAboutPage(false);
        setIsFounderPage(false);
        setIsClientsPage(false);
        setIsBlogPage(false);
        setIsResearchPage(false);
        setIsNotFound(false);
        setActiveCaseStudy(null);
        setActiveBlogPost(null);
        setActiveLegalPage(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
    }

    // 10. Case Study Detail
    if (
      path.startsWith("/case-study/") ||
      path.startsWith("/fallstudie/") ||
      path.startsWith("/referenz/")
    ) {
      const id = path.replace(/^\/(case-study|fallstudie|referenz)\//, "").replace(/\/$/, "");
      const found = caseStudies.find((c) => c.id === id);
      if (found) {
        setActiveCaseStudy(found);
        setIsProjectsPage(false);
        setIsAboutPage(false);
        setIsFounderPage(false);
        setIsClientsPage(false);
        setIsBlogPage(false);
        setIsResearchPage(false);
        setIsNotFound(false);
        setActiveProject(null);
        setActiveBlogPost(null);
        setActiveLegalPage(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
    }

    // 11. Legal Pages
    if (path === "/impressum" || path === "/imprint") {
      setActiveLegalPage("impressum");
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsProjectsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setIsClientsPage(false);
      setIsSiteVisitsPage(false);
      setIsNotFound(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (
      path === "/datenschutz" ||
      path === "/privacy" ||
      path === "/datenschutzerklaerung" ||
      path === "/datenschutzerklärung"
    ) {
      setActiveLegalPage("datenschutz");
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsProjectsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setIsClientsPage(false);
      setIsSiteVisitsPage(false);
      setIsNotFound(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (path === "/barrierefreiheit" || path === "/accessibility") {
      setActiveLegalPage("barrierefreiheit");
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsProjectsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setIsClientsPage(false);
      setIsSiteVisitsPage(false);
      setIsNotFound(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (path === "/widerruf" || path === "/widerrufsbelehrung") {
      setActiveLegalPage("widerruf");
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsProjectsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setIsClientsPage(false);
      setIsSiteVisitsPage(false);
      setIsNotFound(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 12. Direct Home Shortcuts & Scroll Targets
    if (path === "/kontakt" || path === "/contact" || path === "/beratung" || path === "/termin") {
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsProjectsPage(false);
      setIsClientsPage(false);
      setIsSiteVisitsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setIsNotFound(false);
      setActiveProject(null);
      setActiveBlogPost(null);
      setActiveCaseStudy(null);
      setActiveLegalPage(null);
      setTimeout(() => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return;
    }

    if (path === "/services" || path === "/leistungen" || path === "/hoai") {
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsProjectsPage(false);
      setIsClientsPage(false);
      setIsSiteVisitsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setIsNotFound(false);
      setActiveProject(null);
      setActiveBlogPost(null);
      setActiveCaseStudy(null);
      setActiveLegalPage(null);
      setTimeout(() => {
        const el = document.getElementById("services");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return;
    }

    // 13. Default Home view
    if (path === "" || path === "/" || path === "/home" || path === "/index.html" || path === "/start") {
      setIsComparisonPage(false);
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsFounderPortalPage(false);
    setActiveResearchTopic(null);
      setIsVCardPage(false);
      setIsProjectsPage(false);
      setIsClientsPage(false);
      setIsSiteVisitsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setIsNotFound(false);
      setActiveProject(null);
      setActiveBlogPost(null);
      setActiveCaseStudy(null);
      setActiveLegalPage(null);
      if (window.location.hash) {
        const hashId = window.location.hash.replace(/^#/, "");
        setTimeout(() => {
          const el = document.getElementById(hashId);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 120);
      }
      return;
    }

    // 14. Unknown Path -> Graceful 404
    setIsNotFound(true);
    setIsComparisonPage(false);
    setIsAboutPage(false);
    setIsFounderPage(false);
    setIsFounderPortalPage(false);
    setActiveResearchTopic(null);
    setIsVCardPage(false);
    setIsProjectsPage(false);
    setIsClientsPage(false);
    setIsSiteVisitsPage(false);
    setIsBlogPage(false);
    setIsResearchPage(false);
    setActiveProject(null);
    setActiveBlogPost(null);
    setActiveCaseStudy(null);
    setActiveLegalPage(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    syncRoute();
    window.addEventListener("popstate", syncRoute);
    const handleHashChange = () => {
      if (window.location.hash) {
        const hashId = window.location.hash.replace(/^#/, "");
        const el = document.getElementById(hashId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("popstate", syncRoute);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [syncRoute]);

  // Dynamic SEO meta tags and JSON-LD schema update on route or language change
  useEffect(() => {
    if (activeRegionalPage) {
      const regCity = activeRegionalPage.office.city[language] ?? activeRegionalPage.office.city.de;
      const graph: Record<string, unknown>[] = [
        {
          "@type": ["LocalBusiness", "ProfessionalService", "ArchitecturalService"],
          name: `Shams Consult — ${activeRegionalPage.h1[language] ?? activeRegionalPage.h1.de}`,
          description: activeRegionalPage.metaDescription[language] ?? activeRegionalPage.metaDescription.de,
          url: `https://shams-consult.de${activeRegionalPage.path}`,
          telephone: activeRegionalPage.office.phoneHref.replace("tel:", ""),
          address: {
            "@type": "PostalAddress",
            streetAddress: activeRegionalPage.office.street,
            addressLocality: regCity.replace(/^\d+\s*/, "").replace(/\(.*?\)/, "").trim(),
            postalCode: regCity.match(/\d{5}/)?.[0] || "60596",
            addressCountry: "DE",
          },
        },
      ];

      if (activeRegionalPage.faqs && activeRegionalPage.faqs.length > 0) {
        graph.push({
          "@type": "FAQPage",
          mainEntity: activeRegionalPage.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question[language] ?? faq.question.de,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer[language] ?? faq.answer.de,
            },
          })),
        });
      }

      updatePageSeo({
        title: activeRegionalPage.metaTitle[language] ?? activeRegionalPage.metaTitle.de,
        description: activeRegionalPage.metaDescription[language] ?? activeRegionalPage.metaDescription.de,
        canonicalUrl: `https://shams-consult.de${language === "en" ? "/en" : ""}${activeRegionalPage.path}`,
        breadcrumbs: [
          { name: language === "en" ? "Home" : "Start", item: language === "en" ? "/en" : "/" },
          { name: activeRegionalPage.eyebrow[language] ?? activeRegionalPage.eyebrow.de, item: `${language === "en" ? "/en" : ""}${activeRegionalPage.path}` },
        ],
        alternateLanguages: [
          { lang: "de", href: `https://shams-consult.de${activeRegionalPage.path}` },
          { lang: "en", href: `https://shams-consult.de/en${activeRegionalPage.path}` },
          { lang: "x-default", href: `https://shams-consult.de${activeRegionalPage.path}` },
        ],
        customJsonLd: {
          "@context": "https://schema.org",
          "@graph": graph,
        },
      });
    } else if (activeProject) {
      updatePageSeo(getProjectSeo(activeProject, language));
    } else if (activeBlogPost) {
      updatePageSeo(getBlogPostSeo(activeBlogPost, language));
    } else if (activeCaseStudy) {
      updatePageSeo(getCaseStudySeo(activeCaseStudy, language));
    } else if (isProjectsPage) {
      updatePageSeo({
        title:
          language === "en"
            ? "Realized Projects & Architecture Portfolio | Shams Consult"
            : "Realisierte Projekte & Bauten — Portfolio | Shams Consult",
        description:
          language === "en"
            ? "Explore our architectural references: residential complexes, commercial developments, and urban master plans in Frankfurt & Rhine-Main."
            : "Entdecken Sie unsere Referenzen: Wohnungsbau, Gewerbeimmobilien, Baugenehmigungen und Stadtplanung in Frankfurt am Main & Rhein-Main.",
        canonicalUrl: `https://shams-consult.de${language === "en" ? "/en/projects" : "/projects"}`,
        breadcrumbs: [
          { name: language === "en" ? "Home" : "Start", item: language === "en" ? "/en" : "/" },
          { name: language === "en" ? "Projects" : "Projekte", item: language === "en" ? "/en/projects" : "/projects" },
        ],
        alternateLanguages: [
          { lang: "de", href: "https://shams-consult.de/projects" },
          { lang: "en", href: "https://shams-consult.de/en/projects" },
          { lang: "x-default", href: "https://shams-consult.de/projects" },
        ],
      });
    } else if (isBlogPage) {
      updatePageSeo({
        title:
          language === "en"
            ? "Architecture Journal & Insights | Shams Consult Frankfurt"
            : "Fachmagazin für Architektur & Baurecht | Shams Consult",
        description:
          language === "en"
            ? "Expert articles on German building codes (HBO), sustainability, and urban planning by Dipl.-Ing. Majeed Shams."
            : "Fachartikel zu Architektur, Bauordnungsrecht Hessen, HBO, nachhaltigem Bauen und Städtebau von Architekt Dipl.-Ing. Majeed Shams.",
        canonicalUrl: `https://shams-consult.de${language === "en" ? "/en/blog" : "/blog"}`,
        breadcrumbs: [
          { name: language === "en" ? "Home" : "Start", item: language === "en" ? "/en" : "/" },
          { name: language === "en" ? "Journal" : "Magazin", item: language === "en" ? "/en/blog" : "/blog" },
        ],
        alternateLanguages: [
          { lang: "de", href: "https://shams-consult.de/blog" },
          { lang: "en", href: "https://shams-consult.de/en/blog" },
          { lang: "x-default", href: "https://shams-consult.de/blog" },
        ],
      });
    } else if (isAboutPage) {
      updatePageSeo({
        title:
          language === "en"
            ? "About the Practice — Shams Consult Architecture"
            : "Über uns — Architekturbüro Shams Consult | Frankfurt & Rhein-Main",
        description:
          language === "en"
            ? "Learn about Shams Consult: Licensed architectural practice & urban planning consultancy (AKH Hessen No. 21886) in Frankfurt am Main."
            : "Erfahren Sie mehr über Shams Consult: Staatlich anerkanntes Planungsbüro für Architektur & Stadtplanung (AKH Hessen Nr. 21886) in Frankfurt am Main.",
        canonicalUrl: `https://shams-consult.de${language === "en" ? "/en/about" : "/about"}`,
        breadcrumbs: [
          { name: language === "en" ? "Home" : "Start", item: language === "en" ? "/en" : "/" },
          { name: language === "en" ? "About Us" : "Über uns", item: language === "en" ? "/en/about" : "/about" },
        ],
        alternateLanguages: [
          { lang: "de", href: "https://shams-consult.de/about" },
          { lang: "en", href: "https://shams-consult.de/en/about" },
          { lang: "x-default", href: "https://shams-consult.de/about" },
        ],
      });
    } else if (isFounderPortalPage) {
      updatePageSeo({
        title:
          language === "en"
            ? "Founder Portal — Official Marketing & B2B Assets | Shams Consult"
            : "Gründer-Portal — Offizielle Flyer & B2B-Unterlagen | Shams Consult",
        description:
          language === "en"
            ? "Restricted Founder Portal for Dipl.-Ing. Majeed Shams. Access high-resolution brochures, LinkedIn PDFs, and partnership whitepapers."
            : "Geschützter Inhaber-Bereich für Dipl.-Ing. Majeed Shams. Download hochauflösender Flyer, LinkedIn-Dokumente und B2B-Kooperationsunterlagen.",
        canonicalUrl: `https://shams-consult.de${language === "en" ? "/en/founder-portal" : "/founder-portal"}`,
        noIndex: true,
        breadcrumbs: [
          { name: language === "en" ? "Home" : "Start", item: language === "en" ? "/en" : "/" },
          { name: language === "en" ? "Founder Portal" : "Gründer-Portal", item: language === "en" ? "/en/founder-portal" : "/founder-portal" },
        ],
        alternateLanguages: [
          { lang: "de", href: "https://shams-consult.de/founder-portal" },
          { lang: "en", href: "https://shams-consult.de/en/founder-portal" },
          { lang: "x-default", href: "https://shams-consult.de/founder-portal" },
        ],
      });
    } else if (isFounderPage) {
      updatePageSeo({
        title:
          language === "en"
            ? "Dipl.-Ing. Majeed Shams — Architect & Urban Planner"
            : "Dipl.-Ing. Majeed Shams — Architekt & Stadtplaner | Shams Consult",
        description:
          language === "en"
            ? "Professional profile of Dipl.-Ing. (FH) Majeed Shams M.Eng.: Licensed German Architect & Urban Planner, AKH Hesse Member No. 21886."
            : "Profil von Dipl.-Ing. (FH) Majeed Shams M.Eng.: Architekt & Stadtplaner, AKH Hessen Mitglied (Nr. 21886), 15+ Jahre Planungserfahrung.",
        canonicalUrl: `https://shams-consult.de${language === "en" ? "/en/founder" : "/founder"}`,
        breadcrumbs: [
          { name: language === "en" ? "Home" : "Start", item: language === "en" ? "/en" : "/" },
          { name: language === "en" ? "Founder" : "Gründer", item: language === "en" ? "/en/founder" : "/founder" },
        ],
        alternateLanguages: [
          { lang: "de", href: "https://shams-consult.de/founder" },
          { lang: "en", href: "https://shams-consult.de/en/founder" },
          { lang: "x-default", href: "https://shams-consult.de/founder" },
        ],
      });
    } else if (isVCardPage) {
      updatePageSeo({
        title:
          language === "en"
            ? "Dipl.-Ing. Majeed Shams — Digital Business Card & Contact (vCard)"
            : "Dipl.-Ing. Majeed Shams — Digitale Visitenkarte & Kontakt (vCard) | Shams Consult",
        description:
          language === "en"
            ? "Digital business card of Dipl.-Ing. (FH) Majeed Shams M.Eng. (AKH Hesse No. 21886). Save contact details directly to your phone address book."
            : "Digitale Visitenkarte von Dipl.-Ing. (FH) Majeed Shams M.Eng. (AKH Hessen Nr. 21886). Kontaktdaten direkt als vCard im Smartphone-Adressbuch speichern.",
        canonicalUrl: `https://shams-consult.de${language === "en" ? "/en/card" : "/card"}`,
        breadcrumbs: [
          { name: language === "en" ? "Home" : "Start", item: language === "en" ? "/en" : "/" },
          { name: language === "en" ? "Business Card" : "Visitenkarte", item: language === "en" ? "/en/card" : "/card" },
        ],
        alternateLanguages: [
          { lang: "de", href: "https://shams-consult.de/card" },
          { lang: "en", href: "https://shams-consult.de/en/card" },
          { lang: "x-default", href: "https://shams-consult.de/card" },
        ],
      });
    } else if (isB2BPage) {
      updatePageSeo({
        title:
          language === "en"
            ? "B2B Property Developers & Investors — Architecture & Master Planning | Shams Consult"
            : "B2B Bauträger & Investoren — Architektur & Stadtplanung aus einer Hand | Shams Consult",
        description:
          language === "en"
            ? "Specialized architectural and statutory zoning services for commercial developers and investors in Frankfurt & Rhine-Main. Maximized floor area, zero interface lag, and complete HOAI phases 1–8."
            : "Spezialisierte Architektur- und Bauleitplanung für Bauträger und institutionelle Investoren in Frankfurt und Rhein-Main. BGF-Maximierung, B-Plan-Sicherheit und HOAI-Phasen 1–8 aus einer Hand.",
        canonicalUrl: `https://shams-consult.de${language === "en" ? "/en/bautraeger-investoren" : "/bautraeger-investoren"}`,
        breadcrumbs: [
          { name: language === "en" ? "Home" : "Start", item: language === "en" ? "/en" : "/" },
          {
            name: language === "en" ? "Developers & Investors" : "Bauträger & Investoren",
            item: language === "en" ? "/en/bautraeger-investoren" : "/bautraeger-investoren",
          },
        ],
        alternateLanguages: [
          { lang: "de", href: "https://shams-consult.de/bautraeger-investoren" },
          { lang: "en", href: "https://shams-consult.de/en/bautraeger-investoren" },
          { lang: "x-default", href: "https://shams-consult.de/bautraeger-investoren" },
        ],
      });
    } else if (isResearchPage) {
      updatePageSeo({
        title:
          language === "en"
            ? "Research, Academic Theses & Teaching | Shams Consult"
            : "Forschung, Thesen & Lehre | Shams Consult Architektur",
        description:
          language === "en"
            ? "Scientific theses and urban planning research by Shams Consult at the intersection of architecture and urbanism."
            : "Wissenschaftliche Thesen und städtebauliche Forschungsschwerpunkte von Shams Consult an der Schnittstelle von Architektur und Urbanistik.",
        canonicalUrl: `https://shams-consult.de${language === "en" ? "/en/research" : "/research"}`,
        breadcrumbs: [
          { name: language === "en" ? "Home" : "Start", item: language === "en" ? "/en" : "/" },
          { name: language === "en" ? "Research" : "Forschung", item: language === "en" ? "/en/research" : "/research" },
        ],
        alternateLanguages: [
          { lang: "de", href: "https://shams-consult.de/research" },
          { lang: "en", href: "https://shams-consult.de/en/research" },
          { lang: "x-default", href: "https://shams-consult.de/research" },
        ],
      });
    } else if (isClientsPage) {
      updatePageSeo({
        title:
          language === "en"
            ? "Clients, Partners & References | Shams Consult"
            : "Auftraggeber, Partner & Referenzen | Shams Consult",
        description:
          language === "en"
            ? "Successful collaborations with institutional clients, developers, municipalities, and private builders in Germany."
            : "Erfolgreiche Zusammenarbeiten mit institutionellen Bauherren, Bauträgern, Kommunen und privaten Auftraggebern in Hessen.",
        canonicalUrl: `https://shams-consult.de${language === "en" ? "/en/clients" : "/clients"}`,
        breadcrumbs: [
          { name: language === "en" ? "Home" : "Start", item: language === "en" ? "/en" : "/" },
          { name: language === "en" ? "Partners" : "Partner", item: language === "en" ? "/en/clients" : "/clients" },
        ],
        alternateLanguages: [
          { lang: "de", href: "https://shams-consult.de/clients" },
          { lang: "en", href: "https://shams-consult.de/en/clients" },
          { lang: "x-default", href: "https://shams-consult.de/clients" },
        ],
      });
    } else if (isSiteVisitsPage) {
      updatePageSeo({
        title:
          language === "en"
            ? "Site Visits & Construction Insights | Shams Consult"
            : "Baustelleneinblicke & Vor-Ort-Impressionen | Shams Consult",
        description:
          language === "en"
            ? "On-site construction supervision, German VOB compliance, and progress updates from projects across Rhine-Main."
            : "Direkte Einblicke von der Baustelle: Qualitätskontrolle, VOB-konforme Bauüberwachung und Baufortschritte in Frankfurt und Rhein-Main.",
        canonicalUrl: `https://shams-consult.de${language === "en" ? "/en/site-visits" : "/site-visits"}`,
        breadcrumbs: [
          { name: language === "en" ? "Home" : "Start", item: language === "en" ? "/en" : "/" },
          { name: language === "en" ? "Site Visits" : "Baustelleneinblicke", item: language === "en" ? "/en/site-visits" : "/site-visits" },
        ],
        alternateLanguages: [
          { lang: "de", href: "https://shams-consult.de/site-visits" },
          { lang: "en", href: "https://shams-consult.de/en/site-visits" },
          { lang: "x-default", href: "https://shams-consult.de/site-visits" },
        ],
      });
    } else if (activeLegalPage === "impressum") {
      updatePageSeo({
        title: language === "en" ? "Legal Notice & Regulatory Details | Shams Consult" : "Impressum & Rechtliche Angaben | Shams Consult",
        description: "Impressum und berufsrechtliche Angaben des Architekturbüros Shams Consult in Frankfurt am Main.",
        canonicalUrl: `https://shams-consult.de${language === "en" ? "/en/impressum" : "/impressum"}`,
        breadcrumbs: [
          { name: language === "en" ? "Home" : "Start", item: language === "en" ? "/en" : "/" },
          { name: language === "en" ? "Legal Notice" : "Impressum", item: language === "en" ? "/en/impressum" : "/impressum" },
        ],
        alternateLanguages: [
          { lang: "de", href: "https://shams-consult.de/impressum" },
          { lang: "en", href: "https://shams-consult.de/en/impressum" },
          { lang: "x-default", href: "https://shams-consult.de/impressum" },
        ],
      });
    } else if (activeLegalPage === "datenschutz") {
      updatePageSeo({
        title: language === "en" ? "Privacy Policy | Shams Consult" : "Datenschutzerklärung | Shams Consult",
        description: "Datenschutzerklärung der Shams Consult gemäß DSGVO.",
        canonicalUrl: `https://shams-consult.de${language === "en" ? "/en/datenschutz" : "/datenschutz"}`,
        breadcrumbs: [
          { name: language === "en" ? "Home" : "Start", item: language === "en" ? "/en" : "/" },
          { name: language === "en" ? "Privacy Policy" : "Datenschutz", item: language === "en" ? "/en/datenschutz" : "/datenschutz" },
        ],
        alternateLanguages: [
          { lang: "de", href: "https://shams-consult.de/datenschutz" },
          { lang: "en", href: "https://shams-consult.de/en/datenschutz" },
          { lang: "x-default", href: "https://shams-consult.de/datenschutz" },
        ],
      });
    } else if (activeLegalPage === "widerruf") {
      updatePageSeo({
        title: language === "en" ? "Right of Withdrawal | Shams Consult" : "Widerrufsbelehrung | Shams Consult",
        description: "Widerrufsbelehrung für Verbraucher gemäß Fernabsatzrecht.",
        canonicalUrl: `https://shams-consult.de${language === "en" ? "/en/widerruf" : "/widerruf"}`,
        breadcrumbs: [
          { name: language === "en" ? "Home" : "Start", item: language === "en" ? "/en" : "/" },
          { name: language === "en" ? "Right of Withdrawal" : "Widerruf", item: language === "en" ? "/en/widerruf" : "/widerruf" },
        ],
        alternateLanguages: [
          { lang: "de", href: "https://shams-consult.de/widerruf" },
          { lang: "en", href: "https://shams-consult.de/en/widerruf" },
          { lang: "x-default", href: "https://shams-consult.de/widerruf" },
        ],
      });
    } else if (activeLegalPage === "barrierefreiheit") {
      updatePageSeo({
        title: language === "en" ? "Accessibility Statement | Shams Consult" : "Erklärung zur Barrierefreiheit | Shams Consult",
        description: "Erklärung zur digitalen Barrierefreiheit gemäß BITV 2.0 und WCAG 2.1 AA.",
        canonicalUrl: `https://shams-consult.de${language === "en" ? "/en/barrierefreiheit" : "/barrierefreiheit"}`,
        breadcrumbs: [
          { name: language === "en" ? "Home" : "Start", item: language === "en" ? "/en" : "/" },
          { name: language === "en" ? "Accessibility" : "Barrierefreiheit", item: language === "en" ? "/en/barrierefreiheit" : "/barrierefreiheit" },
        ],
        alternateLanguages: [
          { lang: "de", href: "https://shams-consult.de/barrierefreiheit" },
          { lang: "en", href: "https://shams-consult.de/en/barrierefreiheit" },
          { lang: "x-default", href: "https://shams-consult.de/barrierefreiheit" },
        ],
      });
    } else if (isComparisonPage) {
      const topic =
        comparisonTopics.find((t) => t.id === activeComparisonTopicId || t.slug === activeComparisonTopicId) ||
        comparisonTopics[0];
      const topicTitle = topic.metaTitle[language] ?? topic.metaTitle.de;
      const topicDesc = topic.metaDescription[language] ?? topic.metaDescription.de;
      updatePageSeo({
        title: topicTitle,
        description: topicDesc,
        canonicalUrl: `https://shams-consult.de${language === "en" ? "/en" : ""}/vergleich/${topic.slug}`,
        breadcrumbs: [
          { name: language === "en" ? "Home" : "Start", item: language === "en" ? "/en" : "/" },
          { name: language === "en" ? "Comparisons" : "Vergleiche", item: language === "en" ? "/en/vergleich" : "/vergleich" },
          { name: topic.badge[language] ?? topic.badge.de, item: `${language === "en" ? "/en" : ""}/vergleich/${topic.slug}` },
        ],
        alternateLanguages: [
          { lang: "de", href: `https://shams-consult.de/vergleich/${topic.slug}` },
          { lang: "en", href: `https://shams-consult.de/en/vergleich/${topic.slug}` },
          { lang: "x-default", href: `https://shams-consult.de/vergleich/${topic.slug}` },
        ],
      });
    } else if (isNotFound) {
      updatePageSeo({
        title: language === "en" ? "Page Not Found (404) | Shams Consult" : "Seite nicht gefunden (404) | Shams Consult",
        description: language === "en" ? "The requested page could not be found." : "Die angeforderte Seite konnte leider nicht gefunden werden.",
        canonicalUrl: `https://shams-consult.de${requestedPath}`,
        noIndex: true,
      });
    } else {
      updatePageSeo({
        title:
          language === "en"
            ? "Shams Consult — Architecture, Urban Planning & Project Development | Frankfurt & Rödermark"
            : "Shams Consult — Architekturbüro für Architektur, Stadtplanung & Projektentwicklung | Frankfurt & Rödermark",
        description:
          language === "en"
            ? "Shams Consult — Architectural practice for architecture, urban planning & project development in Frankfurt & Rödermark (Rhine-Main). AKH Hessen Member (No. 21886). 15+ years experience."
            : "Shams Consult — Architekturbüro für Architektur, Stadtplanung und Projektentwicklung in Frankfurt am Main & Rödermark (Rhein-Main). AKH Hessen Mitglied (Nr. 21886). 15+ Jahre Erfahrung. Jetzt Erstgespräch vereinbaren.",
        canonicalUrl: `https://shams-consult.de${language === "en" ? "/en" : "/"}`,
        breadcrumbs: [
          { name: language === "en" ? "Home" : "Start", item: language === "en" ? "/en" : "/" },
        ],
        alternateLanguages: [
          { lang: "de", href: "https://shams-consult.de/" },
          { lang: "en", href: "https://shams-consult.de/en" },
          { lang: "x-default", href: "https://shams-consult.de/" },
        ],
        customJsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: t.faqSection.items.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        },
      });
    }
  }, [
    language,
    requestedPath,
    activeProject,
    activeBlogPost,
    activeCaseStudy,
    isProjectsPage,
    isBlogPage,
    isAboutPage,
    isFounderPage,
    isFounderPortalPage,
    isVCardPage,
    isResearchPage,
    isB2BPage,
    isClientsPage,
    isSiteVisitsPage,
    isComparisonPage,
    activeComparisonTopicId,
    activeRegionalPage,
    activeLegalPage,
    isNotFound,
    t.faqSection.items,
  ]);

  const navigateTo = (path: string) => {
    const localizedTarget = getLocalizedPath(path, language);
    const [targetPathname, targetHash] = localizedTarget.split("#");
    const currentPathname = window.location.pathname;

    if (targetHash) {
      if (currentPathname !== targetPathname.split("?")[0]) {
        window.history.pushState(null, "", localizedTarget);
        syncRoute();
      } else {
        window.history.pushState(null, "", `#${targetHash}`);
      }
      setTimeout(() => {
        const el = document.getElementById(targetHash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 120);
      return;
    }

    const currentFull = window.location.pathname + window.location.search;
    if (currentFull !== localizedTarget) {
      window.history.pushState(null, "", localizedTarget);
      syncRoute();
      window.dispatchEvent(new Event("routechange"));
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLanguageChange = (newLang: Language) => {
    if (newLang === language) return;
    const currentPath = window.location.pathname + window.location.search + window.location.hash;
    const targetPath = getLocalizedPath(currentPath, newLang);
    window.history.pushState(null, "", targetPath);
    syncRoute();
  };

  const handleSelectCaseStudy = (cs: CaseStudy) => {
    navigateTo(`/case-study/${cs.id}`);
  };

  const handleSelectProject = (proj: Project) => {
    navigateTo(`/project/${proj.id}`);
  };

  const handleSelectProjectById = (projectId: string) => {
    navigateTo(`/project/${projectId}`);
  };

  const handleSelectBlogPost = (post: BlogPost) => {
    navigateTo(`/blog/${post.slug}`);
  };

  const handleViewAllBlog = () => {
    navigateTo("/blog");
  };

  const handleBackToBlog = () => {
    navigateTo("/blog");
  };

  const handleBackToProjects = () => {
    navigateTo("/projects");
  };

  const handleNavigateFounder = () => {
    navigateTo("/founder");
  };

  const handleNavigateResearch = () => {
    navigateTo("/research");
  };

  const handleBackToHome = () => {
    navigateTo("/");
  };

  const handleBookConsultation = () => {
    const isHome = window.location.pathname === "/" || window.location.pathname === "/en";
    if (!isHome) {
      navigateTo(language === "en" ? "/en#contact" : "/#contact");
    } else {
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", "#contact");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900 font-sans pb-16 md:pb-0">
      {/* 1. Header Navigation */}
      <Header
        t={t.nav}
        language={language}
        onLanguageChange={handleLanguageChange}
        onNavigateHome={handleBackToHome}
        onNavigate={navigateTo}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeLegalPage ? (
          /* Dedicated Standalone Legal Notice Page */
          <LegalPage
            type={activeLegalPage}
            language={language}
            onNavigateHome={handleBackToHome}
          />
        ) : activeRegionalPage ? (
          /* Dedicated Regional Hub-and-Spoke Landing Page */
          <RegionalLandingPage
            data={activeRegionalPage}
            language={language}
            t={t.regionalLandingPage}
            onBookConsultation={handleBookConsultation}
            onNavigateHome={handleBackToHome}
            onNavigateProject={handleSelectProjectById}
          />
        ) : isComparisonPage ? (
          /* Dedicated Comparison & Decision Guide Page */
          <ComparisonPage
            initialTopicId={activeComparisonTopicId}
            language={language}
            onNavigateHome={handleBackToHome}
            onBookConsultation={handleBookConsultation}
            onNavigateTopic={(slug) => navigateTo(`/vergleich/${slug}`)}
          />
        ) : isClientsPage ? (
          /* Dedicated Clients & Project Partners Page */
          <ClientsPage
            t={t.clients}
            language={language}
            onBack={handleBackToHome}
            onNavigateSiteVisits={() => navigateTo("/site-visits")}
            onBookConsultation={handleBookConsultation}
          />
        ) : isSiteVisitsPage ? (
          /* Dedicated On-Site Visits & Field Proof Album Page */
          <SiteVisitsPage
            t={t.siteVisitsPage}
            onBack={handleBackToHome}
            onBookConsultation={handleBookConsultation}
          />
        ) : isAboutPage ? (
          /* Dedicated Company About Page (Business & Practice) */
          <AboutPage
            t={t.about}
            clientsT={t.clients}
            language={language}
            onBack={handleBackToHome}
            onNavigateFounder={handleNavigateFounder}
            onNavigateSiteVisits={() => navigateTo("/site-visits")}
            onNavigateResearch={handleNavigateResearch}
            onBookConsultation={handleBookConsultation}
          />
        ) : isB2BPage ? (
          /* Dedicated B2B Partners, Developers & Kundentag Page */
          <B2BPartnersPage
            language={language}
            onBack={handleBackToHome}
            onBookConsultation={handleBookConsultation}
            onSelectProject={handleSelectProjectById}
          />
        ) : isFounderPortalPage ? (
          /* Dedicated Locked Founder Portal Page */
          <FounderPortalPage
            language={language}
            onBack={handleBackToHome}
            onBookConsultation={handleBookConsultation}
          />
        ) : isFounderPage ? (
          /* Dedicated Founder Story Page */
          <FounderPage
            t={t.founderPage}
            language={language}
            onBack={handleBackToHome}
            onBookConsultation={handleBookConsultation}
          />
        ) : isVCardPage ? (
          /* Dedicated Digital Business Card & vCard Page */
          <VCardPage
            t={t.vCard}
            language={language}
            onBack={handleBackToHome}
            onBookConsultation={handleBookConsultation}
          />
        ) : isResearchPage && activeResearchTopic ? (
          /* Dedicated Open Thesis Topic Landing Page */
          <ResearchTopicPage
            topic={activeResearchTopic}
            t={t.researchTopicPage}
            language={language}
            onBack={() => navigateTo(language === "en" ? "/en/research" : "/forschung")}
            onNavigateTopic={(slug) => navigateTo(language === "en" ? `/en/research/${slug}` : `/forschung/${slug}`)}
          />
        ) : isResearchPage ? (
          /* Dedicated Research & Theses Page */
          <ResearchPage
            t={t.research}
            language={language}
            onBack={handleBackToHome}
            onNavigateTopic={(slug) => navigateTo(language === "en" ? `/en/research/${slug}` : `/forschung/${slug}`)}
            onBookConsultation={handleBookConsultation}
          />
        ) : activeBlogPost ? (
          /* Dedicated Blog Post Detail Page */
          <BlogDetail
            post={activeBlogPost}
            t={t.blog}
            language={language}
            onBack={handleBackToBlog}
            onSelectPost={handleSelectBlogPost}
            onBookConsultation={handleBookConsultation}
          />
        ) : isBlogPage ? (
          /* Dedicated Full Blog Overview Page */
          <BlogPage
            t={t.blog}
            language={language}
            onSelectPost={handleSelectBlogPost}
            onBack={handleBackToHome}
            onBookConsultation={handleBookConsultation}
          />
        ) : activeProject ? (
          /* Dedicated Single Project Detail Page */
          <ProjectDetail
            project={activeProject}
            t={t.projectDetail}
            language={language}
            onBack={handleBackToProjects}
            onBookConsultation={handleBookConsultation}
          />
        ) : isProjectsPage ? (
          /* Dedicated Projects Hub Landing Page */
          <ProjectsPage
            t={t.projectsPage}
            language={language}
            onSelectProject={handleSelectProject}
            onBack={handleBackToHome}
            onBookConsultation={handleBookConsultation}
          />
        ) : activeCaseStudy ? (
          /* Dedicated Case Study Detail Page */
          <CaseStudyDetail
            caseStudy={activeCaseStudy}
            language={language}
            onBack={handleBackToHome}
            onBookConsultation={handleBookConsultation}
          />
        ) : isNotFound ? (
          /* Graceful 404 Not Found Fallback */
          <NotFoundPage
            t={t.notFound}
            requestedPath={requestedPath}
            onNavigateHome={handleBackToHome}
            onNavigateProjects={() => navigateTo("/projects")}
            onNavigateAbout={() => navigateTo("/about")}
            onBookConsultation={handleBookConsultation}
          />
        ) : (
          /* Full Homepage */
          <>
            {/* 1. Hero Section */}
            <div id="hero">
              <Hero
                t={t.hero}
                onBookConsultation={handleBookConsultation}
                onNavigateProjects={() => navigateTo("/projects")}
                onNavigateFounder={() => navigateTo("/founder")}
              />
            </div>

            {/* 2. On-Site Visits & Field Proof Moving Photo Carousel */}
            <div id="site-visits" className="scroll-mt-24">
              <SiteVisitsMovingSection
                t={t.siteVisitsPage}
                language={language}
                onNavigateSiteVisits={() => navigateTo("/site-visits")}
                onNavigate={navigateTo}
              />
            </div>

            {/* 3. Metrics Strip */}
            <div id="metrics" className="scroll-mt-24">
              <MetricsBar t={t.metrics} />
            </div>

            {/* 4. Official AKH Hessen Chamber Registration Authority (Registered German Architect & Planner) */}
            <div id="akh" className="scroll-mt-24">
              <AkhRegistrationSection t={t.akhRegistration} />
            </div>

            {/* 5. Selected Clients & Partners Moving Logos Track (Positioned above HOAI phases) */}
            <div id="clients" className="scroll-mt-24">
              <ClientsMovingSection
                t={t.clients}
                language={language}
                onNavigateClients={() => navigateTo("/clients")}
              />
            </div>

            {/* 6. Unified Services & 9 HOAI Leistungsphasen Section */}
            <div id="services" className="scroll-mt-24">
              <ServicesSection t={t.services} processT={t.process} />
            </div>

            {/* 6b. Architecture & Planning Law Video Guide */}
            <div id="video-guide" className="scroll-mt-24">
              <VideoSection
                t={t.videoGuide}
                language={language}
                onBookConsultation={handleBookConsultation}
              />
            </div>

            {/* 7. Dedicated Subtle VOB Compliance Section */}
            <div id="vob" className="scroll-mt-24">
              <VobSection t={t.vob} />
            </div>

            {/* 8. Team of 16 Architecture Experts (Subtle Authority Section before case studies) */}
            <div id="team" className="scroll-mt-24">
              <TeamSection
                t={t.team}
                onNavigateAbout={() => navigateTo("/about")}
              />
            </div>

            {/* 9. Verified 5-Star Google Reviews & Moving Track */}
            <div id="case-studies" className="scroll-mt-24">
              <CaseStudiesSection
                language={language}
                onSelectCaseStudy={handleSelectCaseStudy}
              />
            </div>

            {/* 10. Featured Projects Section (Moving Track) */}
            <div id="projects" className="scroll-mt-24">
              <FeaturedProjectsSection
                t={t.projects}
                language={language}
                onSelectProject={handleSelectProject}
                onViewAllProjects={() => navigateTo("/projects")}
              />
            </div>

            {/* 11. Academic Research & Teaching (Frankfurt UAS Lecturer in Urban Architecture) */}
            <div id="research" className="scroll-mt-24">
              <ResearchSection
                t={t.research}
                language={language}
                onNavigateResearch={handleNavigateResearch}
              />
            </div>

            {/* 12. From The Blog / Magazin */}
            <div id="blog" className="scroll-mt-24">
              <BlogSection
                t={t.blog}
                language={language}
                onSelectPost={handleSelectBlogPost}
                onViewAll={handleViewAllBlog}
              />
            </div>

            {/* 13. Science-Backed FAQ Accordion Section with FAQPage Schema */}
            <div id="faq" className="scroll-mt-24">
              <FaqSection
                t={t.faqSection}
                onBookConsultation={handleBookConsultation}
              />
            </div>

            {/* 14. Contact & Consultation Booking Section */}
            <div id="contact" className="bg-[#121316] scroll-mt-24">
              <ContactSection t={t.contact} language={language} initialMessage={leadMessage} />
            </div>
          </>
        )}
      </main>

      {/* 8. Comprehensive Dark Footer */}
      <Footer
        t={t.footer}
        navT={t.nav}
        servicesT={t.services}
        language={language}
        onNavigate={navigateTo}
      />

      {/* 9. Frictionless Legal Modals */}
      <LegalModal type={legalModal} language={language} onClose={() => setLegalModal(null)} />

      {/* 10. Science-Backed Mobile Sticky Quick-Action Bar (Thumb Zone) */}
      {!isVCardPage && (
        <MobileStickyActionBar
          t={t.mobileActionBar}
          contactT={t.contact}
          language={language}
          onBookConsultation={handleBookConsultation}
          onNavigate={navigateTo}
        />
      )}

      {/* 11. Subtle Desktop Floating Quick-Action Dock (Zero Clutter, 1-Click Access) */}
      {!isVCardPage && (
        <DesktopStickyActionBar
          t={t.mobileActionBar}
          contactT={t.contact}
          onBookConsultation={handleBookConsultation}
        />
      )}

      {/* 12. GDPR & TDDDG Compliant Cookie Banner */}
      <CookieBanner
        t={t.cookieBanner}
        language={language}
        onOpenPrivacy={() => navigateTo("/datenschutz")}
        onOpenImpressum={() => navigateTo("/impressum")}
      />
    </div>
  );
}

export default App;
