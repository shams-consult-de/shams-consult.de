import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const publicDir = path.join(rootDir, "public");

const SITE_URL = "https://shams-consult.de";
const DEFAULT_IMAGE = `${SITE_URL}/images/stadtvilla_mfa_roedermark.jpg`;

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getHreflangs(dePath, enPath) {
  const deNormalized = dePath === "/" || dePath === "" ? "/" : (dePath.startsWith("/") ? dePath : `/${dePath}`);
  const enNormalized = enPath === "/en" || enPath === "/en/" ? "/en" : (enPath.startsWith("/") ? enPath : `/${enPath}`);
  return [
    { lang: "de", href: `${SITE_URL}${deNormalized}` },
    { lang: "en", href: `${SITE_URL}${enNormalized}` },
    { lang: "x-default", href: `${SITE_URL}${deNormalized}` },
  ];
}

function generateSsrBody(meta) {
  const isEn = meta.lang === "en" || meta.canonicalUrl.includes("/en");
  const lang = isEn ? "en" : "de";
  const h1 = meta.h1 || meta.title.split("|")[0].split("—")[0].trim();
  const desc = meta.description || "";
  const homeHref = isEn ? "/en" : "/";
  const servicesHref = isEn ? "/en/services" : "/services";
  const projectsHref = isEn ? "/en/projects" : "/projects";
  const aboutHref = isEn ? "/en/about" : "/about";
  const contactHref = isEn ? "/en/contact" : "/contact";

  let mainContent = "";

  if (meta.pageType === "404") {
    mainContent = `
      <section class="max-w-3xl mx-auto py-16 text-center">
        <span class="text-sm font-semibold tracking-wider uppercase text-red-600 bg-red-50 px-3 py-1 rounded-full">HTTP 404</span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-4">
          ${isEn ? "Page Not Found" : "Seite nicht gefunden"}
        </h1>
        <p class="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          ${isEn 
            ? "The page you are looking for does not exist, has been moved or renamed. Please use the navigation below to find what you are looking for."
            : "Die gewünschte Seite existiert leider nicht, wurde umbenannt oder verschoben. Bitte nutzen Sie unsere Übersicht, um fortzufahren."}
        </p>
        <div class="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a href="${homeHref}" class="inline-flex items-center px-6 py-3 rounded-xl bg-gray-900 text-white font-medium hover:bg-black transition-colors">
            ${isEn ? "Back to Homepage" : "Zur Startseite"}
          </a>
          <a href="${contactHref}" class="inline-flex items-center px-6 py-3 rounded-xl bg-white border border-gray-300 text-gray-800 font-medium hover:bg-gray-50 transition-colors">
            ${isEn ? "Contact Us" : "Kontakt aufnehmen"}
          </a>
        </div>
        <div class="border-t border-gray-200 pt-8 text-sm text-gray-500">
          <p>${isEn ? "Need immediate architectural guidance?" : "Benötigen Sie direkte Auskunft zu Ihrem Bauvorhaben?"}</p>
          <p class="mt-2 font-medium text-gray-800">
            Telefon: <a href="tel:+496974223777" class="text-blue-600 hover:underline">+49 69 74 223 777</a> · 
            E-Mail: <a href="mailto:office@shams-consult.de" class="text-blue-600 hover:underline">office@shams-consult.de</a>
          </p>
        </div>
      </section>
    `;
  } else if (meta.pageType === "regional" && meta.pageData) {
    const page = meta.pageData;
    const eyebrow = meta.eyebrow || (typeof page.eyebrow === "object" ? page.eyebrow[lang] : page.eyebrow) || "";
    const subtitle = meta.subtitle || (typeof page.subtitle === "object" ? page.subtitle[lang] : page.subtitle) || desc;
    const focusTitle = typeof page.localFocusTitle === "object" ? (page.localFocusTitle[lang] || page.localFocusTitle.de) : (page.localFocusTitle || "");
    const focusDesc = typeof page.localFocusDescription === "object" ? (page.localFocusDescription[lang] || page.localFocusDescription.de) : (page.localFocusDescription || "");

    let highlightsHtml = "";
    if (page.heroHighlights && page.heroHighlights.length > 0) {
      highlightsHtml = `
        <div class="my-8 bg-gray-50 rounded-2xl p-6 border border-gray-200/80">
          <h2 class="text-lg font-bold text-gray-900 mb-4">${isEn ? "Key Architectural Highlights & Credentials" : "Wichtigste Planungsfakten & Qualifikationen"}</h2>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
            ${page.heroHighlights.map(h => {
              const text = typeof h === "object" ? (h[lang] || h.de) : h;
              return `<li class="flex items-start gap-2"><span class="text-red-600 font-bold">✓</span><span>${escapeHtml(text)}</span></li>`;
            }).join("")}
          </ul>
        </div>
      `;
    }

    let regulationsHtml = "";
    if (page.localRegulations && page.localRegulations.length > 0) {
      regulationsHtml = `
        <section class="my-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-2">${isEn ? "Local Building Regulations & Statutory Requirements" : "Örtliche Bauvorschriften & Genehmigungspraxis"}</h2>
          <p class="text-gray-600 mb-6">${isEn ? "Key legal frameworks governing approvals and permitting in this area:" : "Wichtige baurechtliche Rahmenbedingungen für Ihr Projekt in diesem Planungsgebiet:"}</p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${page.localRegulations.map(reg => {
              const rTitle = typeof reg.title === "object" ? (reg.title[lang] || reg.title.de) : reg.title;
              const rDesc = typeof reg.description === "object" ? (reg.description[lang] || reg.description.de) : reg.description;
              return `
                <div class="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                  <h3 class="text-base font-bold text-gray-900 mb-2">${escapeHtml(rTitle)}</h3>
                  <p class="text-sm text-gray-600 leading-relaxed">${escapeHtml(rDesc)}</p>
                </div>
              `;
            }).join("")}
          </div>
        </section>
      `;
    }

    let faqsHtml = "";
    if (page.faqs && page.faqs.length > 0) {
      faqsHtml = `
        <section class="my-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">${isEn ? "Frequently Asked Questions" : "Häufig gestellte Fragen (FAQ)"}</h2>
          <div class="space-y-4">
            ${page.faqs.map(faq => {
              const q = typeof faq.question === "object" ? (faq.question[lang] || faq.question.de) : faq.question;
              const a = typeof faq.answer === "object" ? (faq.answer[lang] || faq.answer.de) : faq.answer;
              return `
                <div class="bg-white rounded-xl p-5 border border-gray-200">
                  <h3 class="text-base font-bold text-gray-900 mb-2">${escapeHtml(q)}</h3>
                  <p class="text-sm text-gray-700 leading-relaxed">${escapeHtml(a)}</p>
                </div>
              `;
            }).join("")}
          </div>
        </section>
      `;
    }

    const officeName = typeof page.office?.name === "object" ? (page.office.name[lang] || page.office.name.de) : (page.office?.name || "Shams Consult");
    const officeCity = typeof page.office?.city === "object" ? (page.office.city[lang] || page.office.city.de) : (page.office?.city || "");
    const officeHtml = `
      <section class="my-12 bg-gray-900 text-white rounded-2xl p-8">
        <div class="max-w-3xl">
          <span class="text-xs font-semibold tracking-wider uppercase text-red-400">${isEn ? "Direct Consultation" : "Persönliche Beratung"}</span>
          <h2 class="text-2xl font-bold mt-2 mb-3">${escapeHtml(officeName)}</h2>
          <p class="text-gray-300 text-sm mb-6">${escapeHtml(page.office?.street || "")}, ${escapeHtml(officeCity)} · Tel: ${escapeHtml(page.office?.phone || "")}</p>
          <div class="flex flex-wrap gap-4">
            <a href="${page.office?.phoneHref || 'tel:+496974223777'}" class="inline-flex items-center px-5 py-2.5 rounded-xl bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors">
              ${isEn ? "Call Now" : "Jetzt anrufen"}
            </a>
            <a href="${contactHref}" class="inline-flex items-center px-5 py-2.5 rounded-xl bg-gray-800 border border-gray-700 text-white font-semibold hover:bg-gray-700 transition-colors">
              ${isEn ? "Book Appointment" : "Termin anfragen"}
            </a>
          </div>
        </div>
      </section>
    `;

    mainContent = `
      <article class="max-w-5xl mx-auto py-8">
        ${eyebrow ? `<span class="text-xs font-bold tracking-wider uppercase text-red-600 mb-2 inline-block">${escapeHtml(eyebrow)}</span>` : ""}
        <h1 class="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          ${escapeHtml(h1)}
        </h1>
        <p class="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
          ${escapeHtml(subtitle)}
        </p>

        ${focusTitle ? `
          <div class="prose max-w-none text-gray-700 my-6">
            <h2 class="text-xl font-bold text-gray-900 mb-2">${escapeHtml(focusTitle)}</h2>
            <p class="leading-relaxed text-sm md:text-base">${escapeHtml(focusDesc)}</p>
          </div>
        ` : ""}

        ${highlightsHtml}
        ${regulationsHtml}
        ${faqsHtml}
        ${officeHtml}
      </article>
    `;
  } else if (meta.pageType === "project" && meta.projectData) {
    const proj = meta.projectData;
    const title = typeof proj.title === "object" ? (proj.title[lang] || proj.title.de) : proj.title;
    const cat = typeof proj.categoryLabel === "object" ? (proj.categoryLabel[lang] || proj.categoryLabel.de) : proj.category;
    const loc = typeof proj.location === "object" ? (proj.location[lang] || proj.location.de) : proj.location;
    const descText = typeof proj.description === "object" ? (proj.description[lang] || proj.description.de) : desc;

    mainContent = `
      <article class="max-w-4xl mx-auto py-8">
        <span class="text-xs font-bold tracking-wider uppercase text-red-600 mb-2 inline-block">${escapeHtml(cat)} · ${escapeHtml(loc)} (${proj.year})</span>
        <h1 class="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          ${escapeHtml(title)}
        </h1>
        <p class="text-lg text-gray-700 leading-relaxed mb-8">
          ${escapeHtml(descText)}
        </p>
        <div class="mt-8 flex gap-4">
          <a href="${projectsHref}" class="text-sm font-semibold text-gray-900 hover:underline">← ${isEn ? "All Projects" : "Alle Projekte"}</a>
          <a href="${contactHref}" class="text-sm font-semibold text-red-600 hover:underline">${isEn ? "Inquire about this project" : "Projekt anfragen"} →</a>
        </div>
      </article>
    `;
  } else if (meta.pageType === "blog" && meta.blogData) {
    const post = meta.blogData;
    const title = typeof post.title === "object" ? (post.title[lang] || post.title.de) : post.title;
    const excerpt = typeof post.excerpt === "object" ? (post.excerpt[lang] || post.excerpt.de) : desc;

    mainContent = `
      <article class="max-w-3xl mx-auto py-8">
        <span class="text-xs font-bold tracking-wider uppercase text-red-600 mb-2 inline-block">${isEn ? "Architecture Journal" : "Architektur-Magazin"} · ${post.date || ""}</span>
        <h1 class="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          ${escapeHtml(title)}
        </h1>
        <p class="text-lg text-gray-700 leading-relaxed mb-8">
          ${escapeHtml(excerpt)}
        </p>
        <div class="mt-8">
          <a href="${isEn ? '/en/blog' : '/blog'}" class="text-sm font-semibold text-gray-900 hover:underline">← ${isEn ? "Back to Journal" : "Zurück zum Magazin"}</a>
        </div>
      </article>
    `;
  } else if (meta.pageType === "card") {
    mainContent = `
      <article class="max-w-xl mx-auto py-12 px-4 text-center">
        <div class="inline-block p-1 rounded-2xl bg-white border border-gray-200 shadow-md mb-6">
          <img src="/images/team/Image.jpg" alt="Dipl.-Ing. Majeed Shams" class="w-28 h-28 rounded-xl object-cover object-top mx-auto" />
        </div>
        <span class="text-xs font-bold tracking-wider uppercase text-red-600 block mb-1">Shams Consult · ${isEn ? "Digital Business Card" : "Digitale Visitenkarte"}</span>
        <h1 class="text-3xl font-extrabold text-gray-900 leading-tight mb-2">
          Dipl.-Ing. (FH) Majeed Shams M.Eng.
        </h1>
        <p class="text-sm font-semibold text-gray-700 mb-1">
          ${isEn ? "Licensed German Architect & Urban Planner · Managing Director" : "Freier Architekt & Stadtplaner · Büroinhaber"}
        </p>
        <p class="text-xs text-gray-500 mb-6">
          ${isEn ? "Member of the Chamber of Architects and Urban Planners of Hesse (AKH No. 21886)" : "Mitglied Architekten- und Stadtplanerkammer Hessen (AKH Nr. 21886)"}
        </p>

        <div class="p-4 bg-white rounded-2xl border border-gray-200 shadow-sm text-left space-y-3 mb-6">
          <a href="/majeed-shams.vcf" download="Majeed-Shams-Architekt.vcf" class="w-full py-3.5 px-4 rounded-xl bg-gray-900 text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-red-600 transition-colors">
            <span>📥</span>
            <span>${isEn ? "Download vCard & Save Contact (.vcf)" : "Visitenkarte speichern (.vcf)"}</span>
          </a>
          <div class="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-gray-100">
            <a href="tel:+496974223777" class="p-2.5 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 text-center font-medium text-gray-900">
              📞 069 74 223 777
            </a>
            <a href="https://wa.me/4915151864090" class="p-2.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-center font-medium text-emerald-800">
              💬 WhatsApp
            </a>
          </div>
        </div>

        <div class="text-xs text-gray-500 space-y-1">
          <p><strong>Frankfurt am Main:</strong> Carl-von-Noorden-Platz 5, 60596 Frankfurt am Main</p>
          <p><strong>Rödermark:</strong> Carl-Zeiss-Str. 43, 63322 Rödermark</p>
        </div>
      </article>
    `;
  } else {
    mainContent = `
      <article class="max-w-5xl mx-auto py-8">
        <h1 class="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          ${escapeHtml(h1)}
        </h1>
        <p class="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mb-8">
          ${escapeHtml(desc)}
        </p>
        <div class="flex flex-wrap gap-4 mt-6">
          <a href="${contactHref}" class="inline-flex items-center px-6 py-3 rounded-xl bg-gray-900 text-white font-medium hover:bg-black transition-colors">
            ${isEn ? "Contact Us" : "Erstgespräch vereinbaren"}
          </a>
          <a href="${servicesHref}" class="inline-flex items-center px-6 py-3 rounded-xl bg-white border border-gray-300 text-gray-800 font-medium hover:bg-gray-50 transition-colors">
            ${isEn ? "Explore Services" : "Leistungsübersicht (HOAI 1–9)"}
          </a>
        </div>
      </article>
    `;
  }

  return `
    <div class="ssr-shell min-h-screen flex flex-col bg-[#FAFAFA] text-[#121212]">
      <header class="border-b border-gray-200 bg-white/95 sticky top-0 z-10 px-6 py-4">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
          <a href="${homeHref}" class="text-lg font-bold tracking-tight text-gray-900">
            Shams Consult
          </a>
          <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <a href="${servicesHref}" class="hover:text-black">${isEn ? 'Services' : 'Leistungen'}</a>
            <a href="${projectsHref}" class="hover:text-black">${isEn ? 'Projects' : 'Projekte'}</a>
            <a href="${aboutHref}" class="hover:text-black">${isEn ? 'About' : 'Über uns'}</a>
            <a href="${contactHref}" class="hover:text-black">${isEn ? 'Contact' : 'Kontakt'}</a>
          </nav>
          <a href="${contactHref}" class="text-xs font-semibold px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-black transition-colors">
            ${isEn ? 'Book Consultation' : 'Erstgespräch'}
          </a>
        </div>
      </header>
      <main class="flex-grow max-w-7xl mx-auto px-6 py-8 w-full">
        ${mainContent}
      </main>
      <footer class="border-t border-gray-200 bg-white px-6 py-12 text-sm text-gray-600 mt-12">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 class="font-bold text-gray-900 mb-2">Shams Consult</h4>
            <p class="text-xs leading-relaxed text-gray-500">
              ${isEn 
                ? "State-recognized practice for Architecture, Urban Master Planning & Project Development. Member AKH Hessen (No. 21886)."
                : "Staatlich anerkanntes Architekturbüro für Architektur, Stadtplanung & Projektentwicklung. Mitglied AKH Hessen (Nr. 21886)."}
            </p>
          </div>
          <div>
            <h4 class="font-bold text-gray-900 mb-2">${isEn ? "Headquarters Frankfurt" : "Hauptsitz Frankfurt am Main"}</h4>
            <p class="text-xs leading-relaxed text-gray-500">Carl-von-Noorden-Platz 5<br/>60596 Frankfurt am Main<br/>Tel: +49 69 74 223 777</p>
          </div>
          <div>
            <h4 class="font-bold text-gray-900 mb-2">${isEn ? "Planning Studio Rödermark" : "Planungsbüro Rödermark"}</h4>
            <p class="text-xs leading-relaxed text-gray-500">Carl-Zeiss-Str. 43<br/>63322 Rödermark (Rhein-Main)<br/>Tel: +49 6074 23987820</p>
          </div>
          <div>
            <h4 class="font-bold text-gray-900 mb-2">${isEn ? "Legal & Contact" : "Rechtliches & Kontakt"}</h4>
            <p class="text-xs leading-relaxed text-gray-500 mb-2">E-Mail: office@shams-consult.de</p>
            <div class="flex flex-wrap gap-2 text-xs text-gray-500">
              <a href="${isEn ? '/en/impressum' : '/impressum'}" class="hover:underline">${isEn ? 'Legal Notice' : 'Impressum'}</a> · 
              <a href="${isEn ? '/en/datenschutz' : '/datenschutz'}" class="hover:underline">${isEn ? 'Privacy' : 'Datenschutz'}</a> · 
              <a href="${isEn ? '/en/barrierefreiheit' : '/barrierefreiheit'}" class="hover:underline">${isEn ? 'Accessibility' : 'Barrierefreiheit'}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  `;
}

function renderHtmlWithMeta(baseHtml, meta) {
  let html = baseHtml;

  // 0. Update <html lang="...">
  const lang = meta.lang || (meta.canonicalUrl.includes("/en") ? "en" : "de");
  html = html.replace(/<html\s+lang=["'][^"']*["']/i, `<html lang="${lang}"`);

  // 1. Replace Title
  const titleTagRegex = /<title>[\s\S]*?<\/title>/i;
  if (titleTagRegex.test(html)) {
    html = html.replace(titleTagRegex, `<title>${escapeHtml(meta.title)}</title>`);
  }

  // 2. Replace Description
  const descRegex = /<meta\s+name=["']description["']\s+content=["'][\s\S]*?["']\s*\/?>/i;
  const newDesc = `<meta name="description" content="${escapeHtml(meta.description)}" />`;
  if (descRegex.test(html)) {
    html = html.replace(descRegex, newDesc);
  } else {
    html = html.replace("</head>", `  ${newDesc}\n</head>`);
  }

  // 3. Replace Canonical URL
  const canonicalRegex = /<link\s+rel=["']canonical["']\s+href=["'][\s\S]*?["']\s*\/?>/i;
  const newCanonical = `<link rel="canonical" href="${meta.canonicalUrl}" />`;
  if (canonicalRegex.test(html)) {
    html = html.replace(canonicalRegex, newCanonical);
  } else {
    html = html.replace("</head>", `  ${newCanonical}\n</head>`);
  }

  // 3.5 Alternate Hreflang Tags
  if (meta.alternateLanguages && meta.alternateLanguages.length > 0) {
    let hreflangTags = "";
    for (const alt of meta.alternateLanguages) {
      hreflangTags += `\n    <link rel="alternate" hreflang="${alt.lang}" href="${alt.href}" />`;
    }
    html = html.replace(/<link\s+rel=["']alternate["']\s+hreflang=["'][^"']*["']\s+href=["'][^"']*["']\s*\/?>\s*/gi, "");
    html = html.replace("</head>", `${hreflangTags}\n</head>`);
  }

  // 4. Replace Robots tag
  const robotsRegex = /<meta\s+name=["']robots["']\s+content=["'][\s\S]*?["']\s*\/?>/i;
  const robotsContent = meta.noIndex ? "noindex, follow" : "index, follow, max-image-preview:large";
  const newRobots = `<meta name="robots" content="${robotsContent}" />`;
  if (robotsRegex.test(html)) {
    html = html.replace(robotsRegex, newRobots);
  } else {
    html = html.replace("</head>", `  ${newRobots}\n</head>`);
  }

  // 5. Replace Open Graph Tags
  const image = meta.ogImage
    ? meta.ogImage.startsWith("http")
      ? meta.ogImage
      : `${SITE_URL}${meta.ogImage.startsWith("/") ? "" : "/"}${meta.ogImage}`
    : DEFAULT_IMAGE;

  html = html.replace(
    /<meta\s+property=["']og:title["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`
  );
  html = html.replace(
    /<meta\s+property=["']og:description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`
  );
  html = html.replace(
    /<meta\s+property=["']og:url["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta property="og:url" content="${meta.canonicalUrl}" />`
  );
  html = html.replace(
    /<meta\s+property=["']og:image["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta property="og:image" content="${image}" />`
  );
  html = html.replace(
    /<meta\s+property=["']og:type["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta property="og:type" content="${meta.ogType || "website"}" />`
  );
  html = html.replace(
    /<meta\s+property=["']og:locale["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta property="og:locale" content="${lang === "en" ? "en_US" : "de_DE"}" />`
  );

  // 6. Replace Twitter Tags
  html = html.replace(
    /<meta\s+name=["']twitter:title["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`
  );
  html = html.replace(
    /<meta\s+name=["']twitter:description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`
  );
  html = html.replace(
    /<meta\s+name=["']twitter:image["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta name="twitter:image" content="${image}" />`
  );

  // 7. Inject Route Breadcrumb Schema & Structured Data into <head>
  let extraHead = "";
  if (meta.breadcrumbs && meta.breadcrumbs.length > 0) {
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: meta.breadcrumbs.map((b, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: b.name,
        item: b.item.startsWith("http") ? b.item : `${SITE_URL}${b.item.startsWith("/") ? "" : "/"}${b.item}`,
      })),
    };
    extraHead += `\n    <script id="route-breadcrumb-schema" type="application/ld+json">${JSON.stringify(breadcrumbData)}</script>`;
  }

  if (meta.customJsonLd) {
    extraHead += `\n    <script id="route-detail-schema" type="application/ld+json">${JSON.stringify(meta.customJsonLd)}</script>`;
  }

  if (extraHead) {
    html = html.replace("</head>", `${extraHead}\n  </head>`);
  }

  // 8. Inject Pre-rendered Semantic HTML Body into <div id="root">
  const ssrHtml = generateSsrBody(meta);
  html = html.replace(/<div id=["']root["']>[\s\S]*?<\/div>/i, `<div id="root">${ssrHtml}</div>`);

  return html;
}

async function generateStaticRoutes() {
  console.log("\n🚀 Starting SEO Optimized Static Route & Sitemap Generation (DE + EN)...");

  const indexHtmlPath = path.join(distDir, "index.html");
  if (!fs.existsSync(indexHtmlPath)) {
    console.error("❌ dist/index.html not found! Run vite build first.");
    process.exit(1);
  }

  const baseIndexHtml = fs.readFileSync(indexHtmlPath, "utf-8");

  // Load project, blog, and case study data
  const { projects } = await import(pathToFileURL(path.join(rootDir, "src", "data", "projects.ts")).href);
  const { blogPosts } = await import(pathToFileURL(path.join(rootDir, "src", "data", "blog.ts")).href);
  const { caseStudies } = await import(pathToFileURL(path.join(rootDir, "src", "data", "caseStudies.ts")).href);
  const { regionalLandingPages } = await import(pathToFileURL(path.join(rootDir, "src", "data", "regionalLandingPages.ts")).href);
  const { comparisonTopics } = await import(pathToFileURL(path.join(rootDir, "src", "data", "comparisons.ts")).href);

  // Route definition map
  const routeConfigs = new Map();

  // 0. Home Routes (DE + EN)
  const homeHreflangs = getHreflangs("/", "/en");
  routeConfigs.set("/", {
    title: "Shams Consult — Architekturbüro für Architektur, Stadtplanung & Projektentwicklung | Frankfurt & Rödermark",
    description: "Shams Consult — Architekturbüro für Architektur, Stadtplanung und Projektentwicklung in Frankfurt am Main & Rödermark (Rhein-Main). AKH Hessen Mitglied (Nr. 21886). 15+ Jahre Erfahrung. Jetzt Erstgespräch vereinbaren.",
    canonicalUrl: `${SITE_URL}/`,
    breadcrumbs: [{ name: "Home", item: "/" }],
    priority: "1.0",
    changefreq: "weekly",
    lang: "de",
    alternateLanguages: homeHreflangs,
  });

  routeConfigs.set("/en", {
    title: "Shams Consult — Architecture, Urban Planning & Project Development | Frankfurt & Rödermark",
    description: "Shams Consult — Architectural practice for architecture, urban planning & project development in Frankfurt & Rödermark (Rhine-Main). AKH Hessen Member (No. 21886). 15+ years experience. Schedule your consultation today.",
    canonicalUrl: `${SITE_URL}/en`,
    breadcrumbs: [{ name: "Home", item: "/en" }],
    priority: "1.0",
    changefreq: "weekly",
    lang: "en",
    alternateLanguages: homeHreflangs,
  });

  // 1. Primary Top-Level Routes (German + English)
  const topRoutes = [
    {
      deRoute: "/services",
      enRoute: "/en/services",
      deTitle: "Architekturleistungen & HOAI Leistungsphasen 1–9 | Shams Consult Frankfurt",
      deDesc: "Ganzheitliche Architektur, rechtssichere Bauanträge, Bauvoranfragen und städtebauliche Planung im Rhein-Main-Gebiet. Uneingeschränkte Bauvorlageberechtigung.",
      enTitle: "Architectural Services & HOAI Phases 1–9 | Shams Consult Frankfurt",
      enDesc: "Holistic architecture, code-compliant building applications, preliminary zoning inquiries and urban master planning in Rhine-Main.",
      deName: "Leistungen",
      enName: "Services",
      priority: "0.9",
      changefreq: "weekly",
    },
    {
      deRoute: "/projects",
      enRoute: "/en/projects",
      deTitle: "Realisierte Projekte & Bauten — Portfolio | Shams Consult",
      deDesc: "Entdecken Sie unsere Referenzen: Mehrfamilienhäuser, Gewerbeimmobilien, Baugenehmigungen und Stadtplanung in Frankfurt am Main & Hessen.",
      enTitle: "Realized Projects & Architecture Portfolio | Shams Consult",
      enDesc: "Explore our architectural references: residential complexes, commercial developments, and urban master plans in Frankfurt & Rhine-Main.",
      deName: "Projekte",
      enName: "Projects",
      priority: "0.9",
      changefreq: "weekly",
    },
    {
      deRoute: "/about",
      enRoute: "/en/about",
      deTitle: "Über uns — Architekturbüro Shams Consult | Frankfurt & Rhein-Main",
      deDesc: "Erfahren Sie mehr über Shams Consult: Staatlich anerkanntes Planungsbüro für Architektur & Stadtplanung (AKH Hessen Nr. 21886) in Frankfurt am Main.",
      enTitle: "About the Practice — Shams Consult Architecture | Frankfurt & Rhine-Main",
      enDesc: "Learn about Shams Consult: Licensed architectural practice & urban planning consultancy (AKH Hessen No. 21886) in Frankfurt am Main.",
      deName: "Über uns",
      enName: "About Us",
      priority: "0.8",
      changefreq: "monthly",
    },
    {
      deRoute: "/founder",
      enRoute: "/en/founder",
      deTitle: "Dipl.-Ing. Majeed Shams — Freier Architekt & Stadtplaner | Shams Consult",
      deDesc: "Profil von Dipl.-Ing. (FH) Majeed Shams M.Eng.: Freier Architekt & Stadtplaner, AKH Hessen Mitglied (Nr. 21886), 15+ Jahre Planungserfahrung.",
      enTitle: "Dipl.-Ing. Majeed Shams — Architect & Urban Planner | Shams Consult",
      enDesc: "Professional profile of Dipl.-Ing. (FH) Majeed Shams M.Eng.: Licensed German Architect & Urban Planner, AKH Hesse Member No. 21886.",
      deName: "Gründer",
      enName: "Founder",
      priority: "0.8",
      changefreq: "monthly",
    },
    {
      deRoute: "/founder-portal",
      enRoute: "/en/founder-portal",
      deTitle: "Gründer- & Management-Portal — Offizielle Flyer & B2B-Unterlagen | Shams Consult",
      deDesc: "Geschützter Bereich für Dipl.-Ing. Majeed Shams. Download und Ansicht von B2B-Flyern, Whitepapern und LinkedIn-Dokumenten.",
      enTitle: "Founder Portal — Restricted Marketing & B2B Collateral | Shams Consult",
      enDesc: "Protected management area for Dipl.-Ing. Majeed Shams. Download and access B2B flyers, whitepapers, and LinkedIn collateral.",
      deName: "Gründer-Portal",
      enName: "Founder Portal",
      priority: "0.3",
      changefreq: "monthly",
      noIndex: true,
    },
    {
      deRoute: "/card",
      enRoute: "/en/card",
      deTitle: "Dipl.-Ing. Majeed Shams — Digitale Visitenkarte & Kontakt (vCard) | Shams Consult",
      deDesc: "Digitale Visitenkarte von Dipl.-Ing. (FH) Majeed Shams M.Eng. (AKH Hessen Nr. 21886). Kontaktdaten direkt als vCard im Smartphone-Adressbuch speichern.",
      enTitle: "Dipl.-Ing. Majeed Shams — Digital Business Card & Contact (vCard) | Shams Consult",
      enDesc: "Digital business card of Dipl.-Ing. (FH) Majeed Shams M.Eng. (AKH Hesse No. 21886). Save contact details directly to your phone address book.",
      deName: "Visitenkarte",
      enName: "Business Card",
      priority: "0.8",
      changefreq: "monthly",
      pageType: "card",
    },
    {
      deRoute: "/bautraeger-investoren",
      enRoute: "/en/bautraeger-investoren",
      deTitle: "B2B Bauträger & Investoren — Architektur & Stadtplanung aus einer Hand | Shams Consult",
      deDesc: "Spezialisierte Architektur- und Bauleitplanung für Bauträger und institutionelle Investoren in Frankfurt und Rhein-Main. BGF-Maximierung, B-Plan-Sicherheit und HOAI-Phasen 1–8.",
      enTitle: "B2B Property Developers & Investors — Architecture & Urban Planning | Shams Consult",
      enDesc: "Specialized architectural and statutory zoning services for commercial developers and investors in Frankfurt & Rhine-Main. Maximized floor area and full HOAI phases 1–8.",
      deName: "Bauträger & Investoren",
      enName: "Developers & Investors",
      priority: "0.85",
      changefreq: "monthly",
    },
    {
      deRoute: "/research",
      enRoute: "/en/research",
      deTitle: "Forschung, Thesen & Lehre | Shams Consult Architektur",
      deDesc: "Wissenschaftliche Thesen und städtebauliche Forschungsschwerpunkte von Shams Consult an der Schnittstelle von Architektur und Urbanistik.",
      enTitle: "Research, Academic Theses & Teaching | Shams Consult Architecture",
      enDesc: "Scientific theses and urban planning research by Shams Consult at the intersection of architecture and urbanism.",
      deName: "Forschung",
      enName: "Research",
      priority: "0.7",
      changefreq: "monthly",
    },
    {
      deRoute: "/forschung/schwammstadt",
      enRoute: "/en/research/schwammstadt",
      deTitle: "Schwammstadt ohne Kunststoff | Abschlussarbeit & Forschung | Shams Consult",
      deDesc: "Abschlussarbeit Thema 01: Mineralische Rigolen als Baustein der Regenwasserbewirtschaftung – vom Einzelprojekt zum städtebaulichen Quartierskonzept.",
      enTitle: "Plastic-Free Sponge City | Thesis Research Topic | Shams Consult",
      enDesc: "Thesis Topic 01: Mineral rainwater infiltration systems – from single pilot projects to urban district frameworks.",
      deName: "Schwammstadt",
      enName: "Sponge City",
      priority: "0.8",
      changefreq: "monthly",
    },
    {
      deRoute: "/forschung/cradle-to-cradle",
      enRoute: "/en/research/cradle-to-cradle",
      deTitle: "Cradle to Cradle: Bauteile im Kreislauf | Abschlussarbeit | Shams Consult",
      deDesc: "Abschlussarbeit Thema 02: Werkzeuge für nachhaltige Mehrfamilienhäuser nach dem Qualitätssiegel Nachhaltiges Gebäude (QNG) – vom Rückbau bis zur Wiederverwendung.",
      enTitle: "Cradle to Cradle: Circular Components | Thesis Research Topic | Shams Consult",
      enDesc: "Thesis Topic 02: Tools for sustainable multi-family housing under the QNG sustainability seal – from gentle deconstruction to reuse.",
      deName: "Cradle to Cradle",
      enName: "Cradle to Cradle",
      priority: "0.8",
      changefreq: "monthly",
    },
    {
      deRoute: "/forschung/gebaeudetyp-e",
      enRoute: "/en/research/gebaeudetyp-e",
      deTitle: "Gebäudetyp E: einfach, aber gut | Abschlussarbeit | Shams Consult",
      deDesc: "Abschlussarbeit Thema 03: Mehr Wohnraum im Bestand ohne Qualitätsverlust – ein Best-Practice-Modell für Umbau und Nutzungsänderung.",
      enTitle: "Building Type E: Simple, Affordable Quality | Thesis Topic | Shams Consult",
      enDesc: "Thesis Topic 03: More housing in existing fabric without quality loss – a best-practice model for conversions and adaptive reuse.",
      deName: "Gebäudetyp E",
      enName: "Building Type E",
      priority: "0.8",
      changefreq: "monthly",
    },
    {
      deRoute: "/blog",
      enRoute: "/en/blog",
      deTitle: "Fachmagazin für Architektur & Baurecht | Shams Consult",
      deDesc: "Fachartikel zu Architektur, Bauordnungsrecht Hessen, HBO, nachhaltigem Bauen und Städtebau von Architekt Dipl.-Ing. Majeed Shams.",
      enTitle: "Architecture Journal & Insights | Shams Consult Frankfurt",
      enDesc: "Expert articles on German building codes (HBO), sustainability, and urban planning by Dipl.-Ing. Majeed Shams.",
      deName: "Magazin",
      enName: "Journal",
      priority: "0.8",
      changefreq: "weekly",
    },
    {
      deRoute: "/clients",
      enRoute: "/en/clients",
      deTitle: "Auftraggeber, Partner & Referenzen | Shams Consult",
      deDesc: "Erfolgreiche Zusammenarbeiten mit institutionellen Bauherren, Bauträgern, Kommunen und privaten Auftraggebern in Hessen.",
      enTitle: "Clients, Partners & References | Shams Consult",
      enDesc: "Successful collaborations with institutional clients, developers, municipalities, and private builders in Germany.",
      deName: "Partner",
      enName: "Partners",
      priority: "0.7",
      changefreq: "monthly",
    },
    {
      deRoute: "/site-visits",
      enRoute: "/en/site-visits",
      deTitle: "Baustelleneinblicke & Vor-Ort-Impressionen | Shams Consult",
      deDesc: "Direkte Einblicke von der Baustelle: Qualitätskontrolle, VOB-konforme Bauüberwachung und Baufortschritte in Frankfurt und Rhein-Main.",
      enTitle: "Site Visits & Construction Insights | Shams Consult",
      enDesc: "On-site construction supervision, German VOB compliance, and progress updates from projects across Rhine-Main.",
      deName: "Baustelleneinblicke",
      enName: "Site Visits",
      priority: "0.7",
      changefreq: "weekly",
    },
    {
      deRoute: "/contact",
      enRoute: "/en/contact",
      deTitle: "Kontakt & Beratungstermin vereinbaren | Shams Consult",
      deDesc: "Vereinbaren Sie ein unverbindliches Erstgespräch für Ihr Bauvorhaben in Frankfurt am Main oder im Rhein-Main-Gebiet. Telefon: +49 (0) 69 74 22 3 777.",
      enTitle: "Contact & Consultation Booking | Shams Consult",
      enDesc: "Schedule a non-binding initial consultation for your building project in Frankfurt or Rhine-Main. Phone: +49 (0) 69 74 22 3 777.",
      deName: "Kontakt",
      enName: "Contact",
      priority: "0.8",
      changefreq: "monthly",
    },
  ];

  for (const r of topRoutes) {
    const hreflangs = getHreflangs(r.deRoute, r.enRoute);
    const lastmod = r.lastmod || "2026-10-15";
    routeConfigs.set(r.deRoute, {
      title: r.deTitle,
      description: r.deDesc,
      canonicalUrl: `${SITE_URL}${r.deRoute}`,
      breadcrumbs: [{ name: "Home", item: "/" }, { name: r.deName, item: r.deRoute }],
      priority: r.priority,
      changefreq: r.changefreq,
      lastmod,
      lang: "de",
      alternateLanguages: hreflangs,
      noIndex: Boolean(r.noIndex),
      pageType: r.pageType || undefined,
    });
    routeConfigs.set(r.enRoute, {
      title: r.enTitle,
      description: r.enDesc,
      canonicalUrl: `${SITE_URL}${r.enRoute}`,
      breadcrumbs: [{ name: "Home", item: "/en" }, { name: r.enName, item: r.enRoute }],
      priority: r.priority,
      changefreq: r.changefreq,
      lastmod,
      lang: "en",
      alternateLanguages: hreflangs,
      noIndex: Boolean(r.noIndex),
      pageType: r.pageType || undefined,
    });
  }

  // 1.05 Comparison & Decision Guide Routes (DE + EN)
  const compHreflangs = getHreflangs("/vergleich", "/en/vergleich");
  routeConfigs.set("/vergleich", {
    title: "Architektur-Vergleich & Entscheidungshilfe für Bauherren | Shams Consult",
    description: "Boutique-Architekturbüro vs. Großbüro, Freier Architekt vs. Bauträger, Vollarchitektur vs. reiner Entwurf: Objektiver Leitfaden für Bauherren in Hessen.",
    canonicalUrl: `${SITE_URL}/vergleich`,
    breadcrumbs: [{ name: "Home", item: "/" }, { name: "Vergleiche", item: "/vergleich" }],
    priority: "0.8",
    changefreq: "monthly",
    lastmod: "2026-09-23",
    lang: "de",
    alternateLanguages: compHreflangs,
  });
  routeConfigs.set("/en/vergleich", {
    title: "Architecture Comparisons & Decision Guide for Clients | Shams Consult",
    description: "Boutique architecture firm vs. large corporate firm, licensed architect vs. general contractor: Objective decision guide for builders in Germany.",
    canonicalUrl: `${SITE_URL}/en/vergleich`,
    breadcrumbs: [{ name: "Home", item: "/en" }, { name: "Comparisons", item: "/en/vergleich" }],
    priority: "0.8",
    changefreq: "monthly",
    lastmod: "2026-09-23",
    lang: "en",
    alternateLanguages: compHreflangs,
  });

  for (const comp of comparisonTopics) {
    const hreflangs = getHreflangs(`/vergleich/${comp.slug}`, `/en/vergleich/${comp.slug}`);
    const metaDe = {
      title: comp.metaTitle.de,
      description: comp.metaDescription.de,
      canonicalUrl: `${SITE_URL}/vergleich/${comp.slug}`,
      lastmod: "2026-09-23",
      breadcrumbs: [
        { name: "Home", item: "/" },
        { name: "Vergleiche", item: "/vergleich" },
        { name: comp.badge.de, item: `/vergleich/${comp.slug}` },
      ],
      priority: "0.8",
      changefreq: "monthly",
      lang: "de",
      alternateLanguages: hreflangs,
    };
    const metaEn = {
      title: comp.metaTitle.en || comp.metaTitle.de,
      description: comp.metaDescription.en || comp.metaDescription.de,
      canonicalUrl: `${SITE_URL}/en/vergleich/${comp.slug}`,
      lastmod: "2026-09-23",
      breadcrumbs: [
        { name: "Home", item: "/en" },
        { name: "Comparisons", item: "/en/vergleich" },
        { name: comp.badge.en || comp.badge.de, item: `/en/vergleich/${comp.slug}` },
      ],
      priority: "0.8",
      changefreq: "monthly",
      lang: "en",
      alternateLanguages: hreflangs,
    };
    routeConfigs.set(`/vergleich/${comp.slug}`, metaDe);
    routeConfigs.set(`/${comp.slug}`, { ...metaDe, isAlias: true });
    routeConfigs.set(`/en/vergleich/${comp.slug}`, metaEn);
    routeConfigs.set(`/en/${comp.slug}`, { ...metaEn, isAlias: true });
  }

  // 1.1 City-Specific Hub-and-Spoke Regional Landing Pages (DE + EN)
  for (const page of Object.values(regionalLandingPages)) {
    const metaTitleDe = typeof page.metaTitle === "string" ? page.metaTitle : (page.metaTitle?.de || "");
    const metaTitleEn = typeof page.metaTitle === "object" ? (page.metaTitle?.en || metaTitleDe) : metaTitleDe;
    const metaDescriptionDe = typeof page.metaDescription === "string" ? page.metaDescription : (page.metaDescription?.de || "");
    const metaDescriptionEn = typeof page.metaDescription === "object" ? (page.metaDescription?.en || metaDescriptionDe) : metaDescriptionDe;
    const eyebrowDe = typeof page.eyebrow === "string" ? page.eyebrow : (page.eyebrow?.de || "");
    const eyebrowEn = typeof page.eyebrow === "object" ? (page.eyebrow?.en || eyebrowDe) : eyebrowDe;
    const h1De = typeof page.h1 === "string" ? page.h1 : (page.h1?.de || "");
    const h1En = typeof page.h1 === "object" ? (page.h1?.en || h1De) : (typeof page.h1 === "string" ? page.h1 : metaTitleEn);
    const subtitleDe = typeof page.subtitle === "string" ? page.subtitle : (page.subtitle?.de || metaDescriptionDe);
    const subtitleEn = typeof page.subtitle === "object" ? (page.subtitle?.en || subtitleDe) : subtitleDe;
    const cityNameDe = typeof page.office?.city === "string" ? page.office.city : (page.office?.city?.de || "");
    const cityNameEn = typeof page.office?.city === "object" ? (page.office?.city?.en || cityNameDe) : cityNameDe;

    const isSuburb = Boolean(page.parentPath);
    const parentPathEn = page.parentPath ? `/en${page.parentPath}` : `/en${page.path}`;
    const isStadtplanungHessenAlias = page.slug === "stadtplanung-hessen";
    const deCanonical = isStadtplanungHessenAlias ? `${SITE_URL}/stadtplanung` : `${SITE_URL}${page.path}`;
    const enCanonical = isStadtplanungHessenAlias 
      ? `${SITE_URL}/en/stadtplanung`
      : (isSuburb ? `${SITE_URL}${parentPathEn}` : `${SITE_URL}/en${page.path}`);

    const hreflangs = isSuburb
      ? [
          { lang: "de", href: `${SITE_URL}${page.path}` },
          { lang: "en", href: enCanonical },
          { lang: "x-default", href: `${SITE_URL}${page.path}` },
        ]
      : getHreflangs(page.path, `/en${page.path}`);

    const localBusinessSchemaDe = {
      "@type": ["LocalBusiness", "ProfessionalService", "ArchitecturalService"],
      name: `Shams Consult — ${h1De}`,
      description: metaDescriptionDe,
      url: `${SITE_URL}${page.path}`,
      telephone: page.office.phoneHref.replace("tel:", ""),
      address: {
        "@type": "PostalAddress",
        streetAddress: page.office.street,
        addressLocality: cityNameDe.replace(/^\d+\s*/, "").replace(/\(.*?\)/, "").trim(),
        postalCode: cityNameDe.match(/\d{5}/)?.[0] || "60596",
        addressCountry: "DE",
      },
    };

    const graphDe = [localBusinessSchemaDe];

    if (page.faqs && page.faqs.length > 0) {
      graphDe.push({
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: typeof faq.question === "object" ? (faq.question?.de || faq.question) : (faq.question || ""),
          acceptedAnswer: {
            "@type": "Answer",
            text: typeof faq.answer === "object" ? (faq.answer?.de || faq.answer) : (faq.answer || ""),
          },
        })),
      });
    }

    const localBusinessSchemaEn = {
      "@type": ["LocalBusiness", "ProfessionalService", "ArchitecturalService"],
      name: `Shams Consult — ${h1En}`,
      description: metaDescriptionEn,
      url: enCanonical,
      telephone: page.office.phoneHref.replace("tel:", ""),
      address: {
        "@type": "PostalAddress",
        streetAddress: page.office.street,
        addressLocality: cityNameEn.replace(/^\d+\s*/, "").replace(/\(.*?\)/, "").replace(/,.*$/, "").trim(),
        postalCode: cityNameEn.match(/\d{5}/)?.[0] || "60596",
        addressCountry: "DE",
      },
    };

    const graphEn = [localBusinessSchemaEn];

    if (page.faqs && page.faqs.length > 0) {
      graphEn.push({
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: typeof faq.question === "object" ? (faq.question?.en || faq.question?.de || faq.question) : (faq.question || ""),
          acceptedAnswer: {
            "@type": "Answer",
            text: typeof faq.answer === "object" ? (faq.answer?.en || faq.answer?.de || faq.answer) : (faq.answer || ""),
          },
        })),
      });
    }

    routeConfigs.set(page.path, {
      pageType: "regional",
      pageData: page,
      isAlias: isStadtplanungHessenAlias,
      h1: h1De,
      subtitle: subtitleDe,
      eyebrow: eyebrowDe,
      title: metaTitleDe,
      description: metaDescriptionDe,
      canonicalUrl: deCanonical,
      breadcrumbs: [
        { name: "Home", item: "/" },
        { name: eyebrowDe, item: page.path },
      ],
      priority: isSuburb ? "0.75" : "0.9",
      changefreq: "weekly",
      lastmod: "2026-10-09",
      lang: "de",
      alternateLanguages: hreflangs,
      customJsonLd: {
        "@context": "https://schema.org",
        "@graph": graphDe,
      },
    });

    routeConfigs.set(`/en${page.path}`, {
      pageType: "regional",
      pageData: page,
      isAlias: isStadtplanungHessenAlias,
      h1: h1En,
      subtitle: subtitleEn,
      eyebrow: eyebrowEn,
      title: metaTitleEn,
      description: metaDescriptionEn,
      canonicalUrl: enCanonical,
      breadcrumbs: [
        { name: "Home", item: "/en" },
        { name: eyebrowEn, item: isSuburb ? parentPathEn : `/en${page.path}` },
      ],
      priority: isSuburb ? "0.7" : "0.9",
      changefreq: "weekly",
      lastmod: "2026-10-09",
      lang: "en",
      alternateLanguages: hreflangs,
      customJsonLd: {
        "@context": "https://schema.org",
        "@graph": graphEn,
      },
    });
  }

  // Legal Pages (noindex, follow)
  const legalConfigs = [
    {
      deRoute: "/impressum",
      enRoute: "/en/impressum",
      deTitle: "Impressum & Berufsrecht | Shams Consult",
      enTitle: "Legal Notice & Regulatory Details | Shams Consult",
      deDesc: "Impressum und berufsrechtliche Angaben des Architekturbüros Shams Consult in Frankfurt am Main.",
      enDesc: "Legal notice and regulatory details of Shams Consult architecture practice in Frankfurt am Main.",
    },
    {
      deRoute: "/datenschutz",
      enRoute: "/en/datenschutz",
      deTitle: "Datenschutzerklärung | Shams Consult",
      enTitle: "Privacy Policy | Shams Consult",
      deDesc: "Datenschutzerklärung der Shams Consult gemäß DSGVO.",
      enDesc: "Privacy policy of Shams Consult in accordance with GDPR.",
    },
    {
      deRoute: "/widerruf",
      enRoute: "/en/widerruf",
      deTitle: "Widerrufsbelehrung | Shams Consult",
      enTitle: "Right of Withdrawal | Shams Consult",
      deDesc: "Widerrufsbelehrung für Verbraucher bei Verträgen mit Shams Consult.",
      enDesc: "Information on the right of withdrawal for consumer contracts with Shams Consult.",
    },
    {
      deRoute: "/barrierefreiheit",
      enRoute: "/en/barrierefreiheit",
      deTitle: "Erklärung zur Barrierefreiheit | Shams Consult",
      enTitle: "Accessibility Statement | Shams Consult",
      deDesc: "Erklärung zur digitalen Barrierefreiheit gemäß BITV 2.0 und WCAG 2.1 AA.",
      enDesc: "Accessibility statement in accordance with BITV 2.0 and WCAG 2.1 AA.",
    },
  ];

  for (const legal of legalConfigs) {
    const hreflangs = getHreflangs(legal.deRoute, legal.enRoute);
    routeConfigs.set(legal.deRoute, {
      title: legal.deTitle,
      description: legal.deDesc,
      canonicalUrl: `${SITE_URL}${legal.deRoute}`,
      priority: "0.4",
      changefreq: "yearly",
      lastmod: "2026-10-10",
      lang: "de",
      alternateLanguages: hreflangs,
    });
    routeConfigs.set(legal.enRoute, {
      title: legal.enTitle,
      description: legal.enDesc,
      canonicalUrl: `${SITE_URL}${legal.enRoute}`,
      priority: "0.4",
      changefreq: "yearly",
      lastmod: "2026-10-10",
      lang: "en",
      alternateLanguages: hreflangs,
    });
  }

  // 2. Dynamic Projects (DE + EN)
  for (const proj of projects) {
    const slug = proj.slug || proj.id;
    const projImg = proj.image.startsWith("http") ? proj.image : `${SITE_URL}${proj.image.startsWith("/") ? "" : "/"}${proj.image}`;
    const hreflangs = getHreflangs(`/project/${slug}`, `/en/project/${slug}`);
    const yearMatch = String(proj.year || "").match(/\d{4}/g);
    const latestYear = yearMatch ? yearMatch[yearMatch.length - 1] : "2026";
    const projLastmod = `${latestYear}-06-01`;

    const metaDe = {
      pageType: "project",
      projectData: proj,
      h1: proj.title.de,
      title: `${proj.title.de} | Shams Consult`,
      description: `${proj.categoryLabel.de}: ${proj.subtitle.de} — Standort: ${proj.location.de} (${proj.year}).`,
      canonicalUrl: `${SITE_URL}/project/${slug}`,
      lastmod: projLastmod,
      ogImage: projImg,
      ogType: "article",
      breadcrumbs: [
        { name: "Home", item: "/" },
        { name: "Projekte", item: "/projects" },
        { name: proj.title.de, item: `/project/${slug}` },
      ],
      lang: "de",
      alternateLanguages: hreflangs,
      customJsonLd: {
        "@context": "https://schema.org",
        "@type": "VisualArtwork",
        name: proj.title.de,
        description: proj.subtitle.de,
        image: projImg,
        creator: {
          "@type": "Organization",
          name: "Shams Consult",
          url: SITE_URL,
        },
        locationCreated: {
          "@type": "Place",
          name: proj.location.de,
        },
        dateCreated: proj.year,
      },
      priority: "0.8",
      changefreq: "monthly",
    };

    const metaEn = {
      pageType: "project",
      projectData: proj,
      h1: proj.title.en,
      title: `${proj.title.en} | Shams Consult`,
      description: `${proj.categoryLabel.en}: ${proj.subtitle.en} — Location: ${proj.location.en} (${proj.year}).`,
      canonicalUrl: `${SITE_URL}/en/project/${slug}`,
      lastmod: projLastmod,
      ogImage: projImg,
      ogType: "article",
      breadcrumbs: [
        { name: "Home", item: "/en" },
        { name: "Projects", item: "/en/projects" },
        { name: proj.title.en, item: `/en/project/${slug}` },
      ],
      lang: "en",
      alternateLanguages: hreflangs,
      customJsonLd: {
        "@context": "https://schema.org",
        "@type": "VisualArtwork",
        name: proj.title.en,
        description: proj.subtitle.en,
        image: projImg,
        creator: {
          "@type": "Organization",
          name: "Shams Consult",
          url: SITE_URL,
        },
        locationCreated: {
          "@type": "Place",
          name: proj.location.en,
        },
        dateCreated: proj.year,
      },
      priority: "0.8",
      changefreq: "monthly",
    };

    routeConfigs.set(`/project/${slug}`, metaDe);
    routeConfigs.set(`/en/project/${slug}`, metaEn);
  }

  // 3. Dynamic Blog Posts (DE + EN)
  for (const post of blogPosts) {
    const postImg = post.image.startsWith("http") ? post.image : `${SITE_URL}${post.image.startsWith("/") ? "" : "/"}${post.image}`;
    const hreflangs = getHreflangs(`/blog/${post.slug}`, `/en/blog/${post.slug}`);
    const blogLastmod = post.isoDate || "2026-09-16";

    const metaDe = {
      pageType: "blog",
      blogData: post,
      h1: post.title.de,
      title: `${post.title.de} | Shams Consult Magazin`,
      description: post.excerpt.de,
      canonicalUrl: `${SITE_URL}/blog/${post.slug}`,
      lastmod: blogLastmod,
      ogImage: postImg,
      ogType: "article",
      breadcrumbs: [
        { name: "Home", item: "/" },
        { name: "Magazin", item: "/blog" },
        { name: post.title.de, item: `/blog/${post.slug}` },
      ],
      lang: "de",
      alternateLanguages: hreflangs,
      customJsonLd: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title.de,
        description: post.excerpt.de,
        image: postImg,
        datePublished: post.isoDate,
        dateModified: post.isoDate,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/blog/${post.slug}`,
        },
        author: {
          "@type": "Person",
          name: "Dipl.-Ing. Majeed Shams",
          jobTitle: "Freier Architekt & Stadtplaner",
          url: `${SITE_URL}/founder`,
        },
        publisher: {
          "@type": "Organization",
          name: "Shams Consult",
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/logo.png`,
          },
        },
      },
      priority: "0.8",
      changefreq: "monthly",
    };

    const metaEn = {
      pageType: "blog",
      blogData: post,
      h1: post.title.en,
      title: `${post.title.en} | Shams Consult Journal`,
      description: post.excerpt.en,
      canonicalUrl: `${SITE_URL}/en/blog/${post.slug}`,
      lastmod: blogLastmod,
      ogImage: postImg,
      ogType: "article",
      breadcrumbs: [
        { name: "Home", item: "/en" },
        { name: "Journal", item: "/en/blog" },
        { name: post.title.en, item: `/en/blog/${post.slug}` },
      ],
      lang: "en",
      alternateLanguages: hreflangs,
      customJsonLd: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title.en,
        description: post.excerpt.en,
        image: postImg,
        datePublished: post.isoDate,
        dateModified: post.isoDate,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/en/blog/${post.slug}`,
        },
        author: {
          "@type": "Person",
          name: "Dipl.-Ing. Majeed Shams",
          jobTitle: "Licensed Architect & Urban Planner",
          url: `${SITE_URL}/en/founder`,
        },
        publisher: {
          "@type": "Organization",
          name: "Shams Consult",
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/logo.png`,
          },
        },
      },
      priority: "0.8",
      changefreq: "monthly",
    };

    routeConfigs.set(`/blog/${post.slug}`, metaDe);
    routeConfigs.set(`/en/blog/${post.slug}`, metaEn);
  }

  // 4. Dynamic Case Studies (DE + EN)
  for (const cs of caseStudies) {
    const hreflangs = getHreflangs(`/case-study/${cs.id}`, `/en/case-study/${cs.id}`);
    const csLastmod = "2026-09-01";
    const rawTitleDe = typeof cs.projectTitle === "object" ? (cs.projectTitle.de || cs.projectTitle) : cs.projectTitle;
    const rawTitleEn = typeof cs.projectTitle === "object" ? (cs.projectTitle.en || cs.projectTitle.de) : cs.projectTitle;
    let cleanDe = rawTitleDe.replace(/^100%\s*Weiterempfehlung:\s*/i, "").replace(/^Ausgezeichnete\s*/i, "").trim();
    if (cleanDe.length > 33) {
      cleanDe = cleanDe.slice(0, 31).replace(/[\s,.-]+$/, "") + "…";
    }
    let cleanEn = rawTitleEn.replace(/^100%\s*Recommendation:\s*/i, "").trim();
    if (cleanEn.length > 33) {
      cleanEn = cleanEn.slice(0, 31).replace(/[\s,.-]+$/, "") + "…";
    }

    const metaDe = {
      pageType: "case-study",
      caseStudyData: cs,
      h1: cs.projectTitle.de,
      title: `★★★★★ ${cleanDe} — Fallstudie | Shams Consult`,
      description: `${cs.subtitle.de} — Verifizierte 5-Sterne-Bewertung von ${cs.reviewerName} für Shams Consult.`,
      canonicalUrl: `${SITE_URL}/case-study/${cs.id}`,
      lastmod: csLastmod,
      ogImage: DEFAULT_IMAGE,
      ogType: "article",
      breadcrumbs: [
        { name: "Home", item: "/" },
        { name: "Referenzen", item: "/clients" },
        { name: cs.projectTitle.de, item: `/case-study/${cs.id}` },
      ],
      lang: "de",
      alternateLanguages: hreflangs,
      customJsonLd: {
        "@context": "https://schema.org",
        "@type": "Review",
        name: cs.projectTitle.de,
        reviewBody: cs.reviewText,
        reviewRating: {
          "@type": "Rating",
          ratingValue: cs.rating,
          bestRating: 5,
          worstRating: 1,
        },
        author: {
          "@type": "Person",
          name: cs.reviewerName,
        },
        itemReviewed: {
          "@type": "Organization",
          name: "Shams Consult",
          url: SITE_URL,
        },
      },
      priority: "0.7",
      changefreq: "monthly",
    };

    const metaEn = {
      pageType: "case-study",
      caseStudyData: cs,
      h1: cs.projectTitle.en,
      title: `★★★★★ ${cleanEn} — Case Study | Shams Consult`,
      description: `${cs.subtitle.en} — Verified 5-star review by ${cs.reviewerName} for Shams Consult.`,
      canonicalUrl: `${SITE_URL}/en/case-study/${cs.id}`,
      lastmod: csLastmod,
      ogImage: DEFAULT_IMAGE,
      ogType: "article",
      breadcrumbs: [
        { name: "Home", item: "/en" },
        { name: "References", item: "/en/clients" },
        { name: cs.projectTitle.en, item: `/en/case-study/${cs.id}` },
      ],
      lang: "en",
      alternateLanguages: hreflangs,
      customJsonLd: {
        "@context": "https://schema.org",
        "@type": "Review",
        name: cs.projectTitle.en,
        reviewBody: cs.reviewText,
        reviewRating: {
          "@type": "Rating",
          ratingValue: cs.rating,
          bestRating: 5,
          worstRating: 1,
        },
        author: {
          "@type": "Person",
          name: cs.reviewerName,
        },
        itemReviewed: {
          "@type": "Organization",
          name: "Shams Consult",
          url: SITE_URL,
        },
      },
      priority: "0.7",
      changefreq: "monthly",
    };

    routeConfigs.set(`/case-study/${cs.id}`, metaDe);
    routeConfigs.set(`/en/case-study/${cs.id}`, metaEn);
  }

  // 5. Alias & Synonyms (Canonical points to the main canonical route)
  const aliasMappings = [
    // About aliases
    { aliases: ["/ueber-uns", "/über-uns", "/wir-ueber-uns", "/buero", "/büro", "/team", "/profil", "/agentur"], canonical: "/about" },
    // B2B & Developers aliases
    { aliases: ["/bautraeger", "/bauträger", "/investoren", "/investors", "/developers", "/developers-investors", "/b2b", "/fcn-kundentag", "/kundentag", "/b2b-partner"], canonical: "/bautraeger-investoren" },
    // Projects aliases
    { aliases: ["/projekte", "/portfolio", "/bauten", "/arbeiten"], canonical: "/projects" },
    // Founder aliases
    { aliases: ["/gruender", "/gründer", "/inhaber", "/vita", "/architekt"], canonical: "/founder" },
    // Digital Card & vCard aliases
    { aliases: ["/vcard", "/visitenkarte", "/kontaktkarte", "/contact-card"], canonical: "/card" },
    // Research aliases
    { aliases: ["/forschung", "/lehre", "/thesen", "/publikationen"], canonical: "/research" },
    // Clients aliases
    { aliases: ["/kunden", "/partner", "/partners", "/referenzen", "/auftraggeber"], canonical: "/clients" },
    // Site Visits aliases
    { aliases: ["/album", "/einblicke", "/vor-ort", "/baustellen"], canonical: "/site-visits" },
    // Blog aliases
    { aliases: ["/magazin", "/news", "/aktuelles", "/artikel", "/beitraege"], canonical: "/blog" },
    // Services aliases
    { aliases: ["/leistungen", "/hoai"], canonical: "/services" },
    // Contact aliases
    { aliases: ["/kontakt", "/beratung", "/termin"], canonical: "/contact" },
    // Legal aliases
    { aliases: ["/imprint"], canonical: "/impressum" },
    { aliases: ["/privacy", "/datenschutzerklaerung", "/datenschutzerklärung"], canonical: "/datenschutz" },
    { aliases: ["/widerrufsbelehrung"], canonical: "/widerruf" },
    { aliases: ["/accessibility"], canonical: "/barrierefreiheit" },
  ];

  for (const mapping of aliasMappings) {
    const parentDe = routeConfigs.get(mapping.canonical);
    if (parentDe) {
      for (const alias of mapping.aliases) {
        routeConfigs.set(alias, { ...parentDe, isAlias: true });
        routeConfigs.set(`/en${alias}`, {
          ...parentDe,
          title: routeConfigs.get(`/en${mapping.canonical}`)?.title || parentDe.title,
          canonicalUrl: `${SITE_URL}/en${mapping.canonical}`,
          isAlias: true,
          lang: "en",
        });
      }
    }
  }

  // Dynamic aliases for projects, blog, case studies
  for (const proj of projects) {
    const slug = proj.slug || proj.id;
    const parentDe = routeConfigs.get(`/project/${slug}`);
    const parentEn = routeConfigs.get(`/en/project/${slug}`);
    if (parentDe) {
      routeConfigs.set(`/projekt/${slug}`, { ...parentDe, isAlias: true });
      routeConfigs.set(`/projekte/${slug}`, { ...parentDe, isAlias: true });
    }
    if (parentEn) {
      routeConfigs.set(`/en/projekt/${slug}`, { ...parentEn, isAlias: true });
      routeConfigs.set(`/en/projekte/${slug}`, { ...parentEn, isAlias: true });
    }
  }

  for (const post of blogPosts) {
    const parentDe = routeConfigs.get(`/blog/${post.slug}`);
    const parentEn = routeConfigs.get(`/en/blog/${post.slug}`);
    if (parentDe) {
      routeConfigs.set(`/magazin/${post.slug}`, { ...parentDe, isAlias: true });
      routeConfigs.set(`/news/${post.slug}`, { ...parentDe, isAlias: true });
      routeConfigs.set(`/artikel/${post.slug}`, { ...parentDe, isAlias: true });
    }
    if (parentEn) {
      routeConfigs.set(`/en/magazin/${post.slug}`, { ...parentEn, isAlias: true });
      routeConfigs.set(`/en/news/${post.slug}`, { ...parentEn, isAlias: true });
      routeConfigs.set(`/en/artikel/${post.slug}`, { ...parentEn, isAlias: true });
    }
  }

  for (const cs of caseStudies) {
    const parentDe = routeConfigs.get(`/case-study/${cs.id}`);
    const parentEn = routeConfigs.get(`/en/case-study/${cs.id}`);
    if (parentDe) {
      routeConfigs.set(`/fallstudie/${cs.id}`, { ...parentDe, isAlias: true });
      routeConfigs.set(`/referenz/${cs.id}`, { ...parentDe, isAlias: true });
    }
    if (parentEn) {
      routeConfigs.set(`/en/fallstudie/${cs.id}`, { ...parentEn, isAlias: true });
      routeConfigs.set(`/en/referenz/${cs.id}`, { ...parentEn, isAlias: true });
    }
  }

  // 6. Write route-specific index.html files
  console.log(`Writing customized HTML entry points for ${routeConfigs.size} routes...`);

  let count = 0;
  for (const [route, meta] of routeConfigs.entries()) {
    try {
      if (meta.isAlias) {
        // Aliases are redirected directly via HTTP 301 in .htaccess
        // Do not generate duplicate HTML files to avoid Google canonical conflicts
        continue;
      }
      if (route === "/") {
        const customizedHtml = renderHtmlWithMeta(baseIndexHtml, meta);
        fs.writeFileSync(path.join(distDir, "index.html"), customizedHtml, "utf-8");
        count++;
        continue;
      }
      const parts = route.split("/").filter(Boolean);
      const targetDir = path.join(distDir, ...parts);
      fs.mkdirSync(targetDir, { recursive: true });

      const customizedHtml = renderHtmlWithMeta(baseIndexHtml, meta);
      fs.writeFileSync(path.join(targetDir, "index.html"), customizedHtml, "utf-8");
      count++;
    } catch (err) {
      console.error(`  ✗ Error creating route ${route}:`, err);
    }
  }

  // Write customized 404.html fallback
  const notFoundMeta = {
    pageType: "404",
    h1: "Seite nicht gefunden (404)",
    title: "Seite nicht gefunden (404) | Shams Consult",
    description: "Die gewünschte Seite existiert leider nicht. Besuchen Sie unsere Startseite oder nehmen Sie Kontakt auf.",
    canonicalUrl: `${SITE_URL}/404`,
    noIndex: true,
  };
  fs.writeFileSync(path.join(distDir, "404.html"), renderHtmlWithMeta(baseIndexHtml, notFoundMeta), "utf-8");
  fs.writeFileSync(path.join(publicDir, "404.html"), renderHtmlWithMeta(baseIndexHtml, notFoundMeta), "utf-8");
  console.log("  ✓ Created optimized 404.html in dist/ and public/");

  // 7. Generate XML Sitemap (Only canonical, non-alias, indexable URLs)
  console.log("\n🗺️ Generating XML Sitemap...");

  const todayIso = new Date().toISOString().split("T")[0];
  const seenUrls = new Set([`${SITE_URL}/`]);
  const sitemapUrls = [
    {
      loc: `${SITE_URL}/`,
      priority: "1.0",
      changefreq: "weekly",
      lastmod: todayIso,
    },
  ];

  for (const [route, meta] of routeConfigs.entries()) {
    // Only include canonical pages that are not aliases, not noIndex, and strictly self-canonical
    const expectedCanonical = `${SITE_URL}${route}`;
    if (!meta.isAlias && !meta.noIndex && route !== "/" && meta.canonicalUrl === expectedCanonical) {
      if (!seenUrls.has(meta.canonicalUrl)) {
        seenUrls.add(meta.canonicalUrl);
        sitemapUrls.push({
          loc: meta.canonicalUrl,
          priority: meta.priority || "0.7",
          changefreq: meta.changefreq || "monthly",
          lastmod: meta.lastmod || todayIso,
          image: meta.image,
          imageTitle: meta.imageTitle,
        });
      }
    }
  }

  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemapXml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  sitemapXml += `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

  for (const item of sitemapUrls) {
    sitemapXml += `  <url>\n`;
    sitemapXml += `    <loc>${escapeHtml(item.loc)}</loc>\n`;
    sitemapXml += `    <lastmod>${item.lastmod}</lastmod>\n`;
    sitemapXml += `    <changefreq>${item.changefreq}</changefreq>\n`;
    sitemapXml += `    <priority>${item.priority}</priority>\n`;
    if (item.image) {
      sitemapXml += `    <image:image>\n`;
      sitemapXml += `      <image:loc>${escapeHtml(item.image)}</image:loc>\n`;
      if (item.imageTitle) {
        sitemapXml += `      <image:title>${escapeHtml(item.imageTitle)}</image:title>\n`;
      }
      sitemapXml += `    </image:image>\n`;
    }
    sitemapXml += `  </url>\n`;
  }

  sitemapXml += `</urlset>\n`;

  // Write to both dist/sitemap.xml and public/sitemap.xml
  fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemapXml, "utf-8");
  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemapXml, "utf-8");

  console.log(`  ✓ Generated sitemap.xml with ${sitemapUrls.length} canonical URLs in public/ and dist/`);
  console.log(`🎉 Successfully created ${count} static route entry points with tailored SEO metadata!\n`);
}

generateStaticRoutes().catch((err) => {
  console.error("Static route generation failed:", err);
  process.exit(1);
});
