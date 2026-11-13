import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import { CONTACT } from "../src/lib/contact.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const publicDir = path.join(projectRoot, "public");

function getBase64Image(relPath) {
  try {
    const fullPath = path.join(publicDir, relPath);
    if (fs.existsSync(fullPath)) {
      const ext = path.extname(fullPath).toLowerCase();
      let mime = "image/jpeg";
      if (ext === ".png") mime = "image/png";
      else if (ext === ".svg") mime = "image/svg+xml";
      else if (ext === ".webp") mime = "image/webp";
      const data = fs.readFileSync(fullPath).toString("base64");
      return `data:${mime};base64,${data}`;
    }
  } catch (err) {
    console.warn("Could not read image for PDF:", relPath, err);
  }
  return "";
}

console.log("Compiling Comprehensive 12-Page Shams Consult Architectural Portfolio Monograph (Editorial White Edition)...");

const logoImg = getBase64Image("logo.png");
const qrImg = getBase64Image("qr-shams.svg");
const heroVillaImg = getBase64Image("images/stadtvilla_mfa_roedermark.jpg");
const founderImg =
  getBase64Image("images/team/Majeed-Shams.jpg") ||
  getBase64Image("images/team/majeed-shams-authentic.png");
const projectDreieich = getBase64Image("images/image-3a7a9c.jpg");
const projectNetto = getBase64Image("images/image-37e42d.jpg");
const projectMfa = getBase64Image("images/dreist-ckiges-mehrfamilienhaus-mit-gro-en-fenstern-a8b20c.png");
const projectRechenzentrum = getBase64Image("images/projects/rechenzentrum-bebra.jpg");
const projectAdler = getBase64Image("images/b2b/Image.jpg");
const partnerFcn = getBase64Image("images/partners/fcn-systemrohbau.jpg") || getBase64Image("images/partners/fcn-systemrohbau.png");
const siteVisit01 = getBase64Image("images/image-1109bb.jpg");
const siteVisit02 = getBase64Image("images/image-067b12.jpg");
const researchCover = getBase64Image("images/image-35c767.jpg");

const htmlContent = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>Shams Consult – Offizielle Unternehmens- &amp; Portfolio-Broschüre 2026</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=JetBrains+Mono:wght@400;600&display=swap');

    @page {
      size: A4 portrait;
      margin: 0;
    }

    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    body {
      margin: 0;
      padding: 0;
      background: #ffffff;
      color: #18181b;
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      font-size: 9.5pt;
      line-height: 1.48;
    }

    .page {
      width: 210mm;
      min-height: 297mm;
      height: 297mm;
      padding: 18mm 20mm 15mm 20mm;
      position: relative;
      page-break-after: always;
      background: #ffffff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
      border-bottom: 1px solid #e4e4e7;
    }

    .font-serif { font-family: 'Playfair Display', Georgia, serif; }
    .font-mono { font-family: 'JetBrains Mono', monospace; }

    /* Accent & Brand Colors */
    .brand-red { color: #dc2626; }
    .bg-brand-red { background-color: #dc2626; }
    .border-brand-red { border-color: #dc2626; }

    .card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 14px 16px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
    }

    .card-muted {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 14px 16px;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      background: #fef2f2;
      border: 1px solid #fca5a5;
      color: #dc2626;
      font-size: 7.2pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      padding: 3px 8px;
      border-radius: 6px;
    }

    .badge-gold {
      background: #fefce8;
      border: 1px solid #fde047;
      color: #854d0e;
    }

    .badge-green {
      background: #f0fdf4;
      border: 1px solid #86efac;
      color: #166534;
    }

    .badge-blue {
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      color: #1d4ed8;
    }

    .badge-slate {
      background: #f1f5f9;
      border: 1px solid #cbd5e1;
      color: #334155;
    }

    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 12px;
      border-bottom: 1px solid #e4e4e7;
      margin-bottom: 16px;
    }

    .page-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 10px;
      border-top: 1px solid #e4e4e7;
      font-size: 7.2pt;
      color: #71717a;
    }

    .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
    .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; }
    .grid-4 { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 10px; }

    /* Page 1: Hero Cover */
    .cover-page {
      background: radial-gradient(circle at 85% 15%, rgba(220, 38, 38, 0.05), transparent 55%), #ffffff;
      justify-content: space-between;
    }
  </style>
</head>
<body>

  <!-- ================= PAGE 1: COVER ================= -->
  <div class="page cover-page">
    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
      <div>
        ${logoImg ? `<img src="${logoImg}" style="height: 48px; object-fit: contain; margin-bottom: 8px;" alt="Shams Consult Logo">` : `<div style="font-size: 22pt; font-weight: 800; color: #09090b;">SHAMS <span style="color:#dc2626;">CONSULT</span></div>`}
        <div style="font-size: 8.5pt; color: #52525b; letter-spacing: 0.5px; font-weight: 500;">Büro für Architektur, Baugenehmigungen &amp; Stadtplanung</div>
      </div>
      <div style="text-align: right;">
        <span class="badge badge-gold">AKH HESSEN · NR. 21886</span>
        <div style="font-size: 7.5pt; color: #71717a; margin-top: 4px; font-weight: 500;">Frankfurt am Main &amp; Rödermark</div>
      </div>
    </div>

    <div style="margin: 20px 0 14px 0;">
      <span class="badge" style="margin-bottom: 12px;">OFFIZIELLES PORTFOLIO 2026 / 2027</span>
      <h1 class="font-serif" style="font-size: 32pt; line-height: 1.15; color: #09090b; margin: 8px 0 14px 0; font-weight: 700;">
        Rechtssichere Architektur.<br>
        <span style="color: #dc2626;">Planungsgenau</span> realisiert.
      </h1>
      <p style="font-size: 10.5pt; color: #3f3f46; max-width: 155mm; line-height: 1.55;">
        Die Gesamtdarstellung unseres Kanzlei- und Planungsprofils: HOAI-Leistungsphasen 1–9, Hessisches Bauordnungsrecht (HBO), städtebauliche Großprojekte &amp; Bauleitplanung sowie zukunftsfähige Bausysteme in der Metropolregion Frankfurt Rhein-Main.
      </p>
    </div>

    <div style="border-radius: 14px; overflow: hidden; border: 1px solid #e2e8f0; position: relative; height: 100mm; background: #f8fafc; box-shadow: 0 4px 14px rgba(0,0,0,0.06);">
      ${projectRechenzentrum ? `<img src="${projectRechenzentrum}" style="width: 100%; height: 100%; object-fit: cover;" alt="Rechenzentrum Bebra (>50 MW)">` : (heroVillaImg ? `<img src="${heroVillaImg}" style="width: 100%; height: 100%; object-fit: cover;" alt="Stadtvilla Rödermark">` : '')}
      <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.65) 60%, transparent 100%); padding: 14px 18px; display: flex; justify-content: space-between; align-items: flex-end;">
        <div>
          <div style="font-size: 7.5pt; color: #f87171; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Flaggschiff Großprojekt &amp; Masterplanung</div>
          <div style="font-size: 13pt; font-weight: 700; color: #ffffff;">Rechenzentrum Bebra (&gt;50 MW) &bull; 56.000 m² Areal</div>
        </div>
        <div style="font-size: 8pt; color: #e2e8f0; font-weight: 600;">Bauleitplanung &bull; B-Plan Nr. 18.1 &bull; Tier 3/4</div>
      </div>
    </div>

    <div class="grid-4" style="margin-top: 14px;">
      <div class="card" style="text-align: center; padding: 10px; background: #f8fafc;">
        <div style="font-size: 16pt; font-weight: 800; color: #09090b;">15+</div>
        <div style="font-size: 7pt; color: #52525b; text-transform: uppercase; font-weight: 600;">Jahre Erfahrung</div>
      </div>
      <div class="card" style="text-align: center; padding: 10px; background: #f8fafc;">
        <div style="font-size: 16pt; font-weight: 800; color: #dc2626;">100+</div>
        <div style="font-size: 7pt; color: #52525b; text-transform: uppercase; font-weight: 600;">Bauanträge geprüft</div>
      </div>
      <div class="card" style="text-align: center; padding: 10px; background: #f8fafc;">
        <div style="font-size: 16pt; font-weight: 800; color: #09090b;">€13,5M</div>
        <div style="font-size: 7pt; color: #52525b; text-transform: uppercase; font-weight: 600;">Max. Projektvolumen</div>
      </div>
      <div class="card" style="text-align: center; padding: 10px; background: #f8fafc;">
        <div style="font-size: 16pt; font-weight: 800; color: #16a34a;">100%</div>
        <div style="font-size: 7pt; color: #52525b; text-transform: uppercase; font-weight: 600;">VOB / DIN Konform</div>
      </div>
    </div>

    <div class="page-footer">
      <div>Architekturbüro Shams Consult · Inhaber Dipl.-Ing. (FH) Majeed Shams M.Eng.</div>
      <div>shams-consult.de · Frankfurt &bull; Rödermark</div>
      <div>Seite 1 (Titel)</div>
    </div>
  </div>

  <!-- ================= PAGE 2: INHALTSVERZEICHNIS & PROFIL ================= -->
  <div class="page">
    <div class="page-header">
      <div>
        <span class="badge">Übersicht &amp; Kanzleiprofil</span>
        <h2 style="font-size: 15pt; color: #09090b; margin: 4px 0 0 0;">Inhaltsverzeichnis &amp; Kanzleistruktur</h2>
      </div>
      <div style="font-size: 7.5pt; color: #71717a; font-weight: 600;">Shams Consult Portfolio 2026</div>
    </div>

    <div class="grid-2" style="align-items: stretch; gap: 18px; margin-bottom: 14px;">
      <div class="card" style="padding: 16px;">
        <div style="font-size: 8pt; color: #dc2626; font-weight: 700; text-transform: uppercase; margin-bottom: 8px;">Kapitelstruktur</div>
        <div style="font-size: 8.8pt; line-height: 1.8; color: #3f3f46;">
          <div><strong style="color:#09090b;">01.</strong> Kanzleiprofil &amp; Kammerzulassung AKH (S. 3)</div>
          <div><strong style="color:#09090b;">02.</strong> Gründerprofil Dipl.-Ing. Majeed Shams (S. 4)</div>
          <div><strong style="color:#09090b;">03.</strong> Leistungsphasen HOAI 1–9 im Detail (S. 5)</div>
          <div><strong style="color:#09090b;">04.</strong> Deutsches Baurecht (HBO) &amp; VOB-Sicherheit (S. 6)</div>
          <div><strong style="color:#dc2626;">05.</strong> Flaggschiff-Großprojekte: Gewerbe, Rechenzentrum (>50 MW) &amp; B-Plan (S. 7)</div>
          <div><strong style="color:#09090b;">06.</strong> Geschossbau, Urbane Wohnquartiere &amp; Nachverdichtung (S. 8)</div>
          <div><strong style="color:#09090b;">07.</strong> Baustelleneinblicke &amp; Vor-Ort-Überwachung (S. 9)</div>
          <div><strong style="color:#09090b;">08.</strong> Nachhaltigkeit, Forschung &amp; Lehre UAS (S. 10)</div>
          <div><strong style="color:#09090b;">09.</strong> B2B-Partnerschaften &amp; Referenzen (S. 11)</div>
          <div><strong style="color:#09090b;">10.</strong> FAQ, Erstberatung &amp; Kontakthub (S. 12)</div>
        </div>
      </div>

      <div class="card" style="padding: 16px; background: #fef2f2; border-color: #fca5a5;">
        <div style="font-size: 8pt; color: #dc2626; font-weight: 700; text-transform: uppercase; margin-bottom: 8px;">Philosophie &amp; Versprechen</div>
        <h3 class="font-serif" style="font-size: 14pt; color: #09090b; margin: 0 0 10px 0;">Architektur als planungssichere Wertschöpfung</h3>
        <p style="font-size: 8.8pt; color: #3f3f46; line-height: 1.6;">
          Bauherren und Investoren stehen in Hessen vor immer komplexeren Bauvorschriften, langwierigen Baugenehmigungsverfahren und unvorhersehbaren Baukosten.
        </p>
        <p style="font-size: 8.8pt; color: #3f3f46; line-height: 1.6; margin-top: 8px;">
          Shams Consult schließt die Lücke zwischen kreativer Gestaltungsqualität und strikter rechtlich-ökonomischer Durchsetzbarkeit. Jedes Projekt wird von Beginn an behördenfest, VOB-konform und flächenoptimiert strukturiert.
        </p>
      </div>
    </div>

    <div class="card" style="padding: 16px;">
      <div style="font-size: 8.5pt; font-weight: 700; color: #09090b; margin-bottom: 10px;">Zwei strategische Standorte für direkte Vor-Ort-Präsenz</div>
      <div class="grid-2">
        <div style="border-left: 3px solid #dc2626; padding-left: 10px;">
          <strong style="color:#09090b; font-size: 9pt;">Büro Frankfurt am Main (Hauptsitz)</strong>
          <div style="font-size: 8pt; color: #52525b; margin-top: 2px;">Carl-von-Noorden-Platz 5, 60596 Frankfurt am Main</div>
          <div style="font-size: 7.5pt; color: #71717a; margin-top: 4px;">Fokus: Bauaufsicht Frankfurt, Stadtplanung &amp; Großprojekte</div>
        </div>
        <div style="border-left: 3px solid #2563eb; padding-left: 10px;">
          <strong style="color:#09090b; font-size: 9pt;">Büro Rödermark (Planungsstudio)</strong>
          <div style="font-size: 8pt; color: #52525b; margin-top: 2px;">Carl-Zeiss-Str. 43, 63322 Rödermark</div>
          <div style="font-size: 7.5pt; color: #71717a; margin-top: 4px;">Fokus: Entwurfsstudio, Werkplanung &amp; Kreis Offenbach</div>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <div>Architekturbüro Shams Consult · Inhaltsverzeichnis &amp; Kanzleistruktur</div>
      <div>069 74 223 777 · office@shams-consult.de</div>
      <div>Seite 2</div>
    </div>
  </div>

  <!-- ================= PAGE 3: KANZLEIPROFIL & AKH REGISTRIERUNG ================= -->
  <div class="page">
    <div class="page-header">
      <div>
        <span class="badge badge-gold">Kammerzugehörigkeit · KdöR</span>
        <h2 style="font-size: 15pt; color: #09090b; margin: 4px 0 0 0;">Architekten- &amp; Stadtplanerkammer Hessen (AKH)</h2>
      </div>
      <div style="font-size: 7.5pt; color: #71717a; font-weight: 600;">Gesetzlicher Berufsstatus</div>
    </div>

    <div class="grid-2" style="margin-bottom: 14px;">
      <div class="card">
        <div style="font-size: 8pt; color: #854d0e; font-weight: 700; text-transform: uppercase;">Gesetzlicher Schutz</div>
        <h3 style="font-size: 12pt; color: #09090b; margin: 4px 0 8px 0;">Bauvorlageberechtigung nach § 65 HBO</h3>
        <p style="font-size: 8.5pt; color: #3f3f46; line-height: 1.55;">
          Die Berufsbezeichnung „Architekt“ und „Stadtplaner“ ist in Deutschland gesetzlich geschützt. Nur eingetragene Mitglieder der Architektenkammer besitzen die uneingeschränkte Bauvorlageberechtigung.
        </p>
        <div style="margin-top: 10px; padding: 8px 10px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 8pt; color: #334155;">
          <strong>Eintragungsnummer:</strong> AKH Hessen KdöR #21886<br>
          <strong>Fachbereiche:</strong> Architektur &amp; Städtebau
        </div>
      </div>

      <div class="card">
        <div style="font-size: 8pt; color: #dc2626; font-weight: 700; text-transform: uppercase;">Haftung &amp; Sicherheit</div>
        <h3 style="font-size: 12pt; color: #09090b; margin: 4px 0 8px 0;">Berufshaftpflichtschutz in Millionenhöhe</h3>
        <p style="font-size: 8.5pt; color: #3f3f46; line-height: 1.55;">
          Jedes Bauvorhaben wird durch eine umfassende berufsständische Haftpflichtversicherung für Personen-, Sach- und Vermögensschäden lückenlos abgesichert.
        </p>
        <div style="margin-top: 10px; padding: 8px 10px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 8pt; color: #334155;">
          <strong>Versicherung:</strong> Gesetzlich testierte Berufshaftpflicht<br>
          <strong>Prüfungsstandard:</strong> Vollständige Konformität nach VOB/B &amp; VOB/C
        </div>
      </div>
    </div>

    <div class="card" style="margin-bottom: 14px; padding: 16px;">
      <h3 style="font-size: 11pt; color: #09090b; margin: 0 0 10px 0;">Leistungsbilanz &amp; Vertrauensindikatoren</h3>
      <div class="grid-3" style="text-align: center;">
        <div style="padding: 10px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
          <div style="font-size: 18pt; font-weight: 800; color: #09090b;">100%</div>
          <div style="font-size: 7.5pt; color: #52525b; text-transform: uppercase; font-weight: 600; margin-top: 4px;">Genehmigungsquote</div>
          <div style="font-size: 7pt; color: #71717a; margin-top: 2px;">Auch bei schwierigen B-Plänen</div>
        </div>
        <div style="padding: 10px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
          <div style="font-size: 18pt; font-weight: 800; color: #dc2626;">50+</div>
          <div style="font-size: 7.5pt; color: #52525b; text-transform: uppercase; font-weight: 600; margin-top: 4px;">Realisierte Bauten</div>
          <div style="font-size: 7pt; color: #71717a; margin-top: 2px;">Vom Wohnhaus bis zum Quartier</div>
        </div>
        <div style="padding: 10px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
          <div style="font-size: 18pt; font-weight: 800; color: #16a34a;">15+</div>
          <div style="font-size: 7.5pt; color: #52525b; text-transform: uppercase; font-weight: 600; margin-top: 4px;">Jahre Rhein-Main</div>
          <div style="font-size: 7pt; color: #71717a; margin-top: 2px;">Direkte Bauamts-Vernetzung</div>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <div>Architekturbüro Shams Consult · AKH Hessen Kammerzulassung #21886</div>
      <div>Rechtssichere Bauvorlageberechtigung gemäß § 65 HBO</div>
      <div>Seite 3</div>
    </div>
  </div>

  <!-- ================= PAGE 4: GRÜNDERPROFIL ================= -->
  <div class="page">
    <div class="page-header">
      <div>
        <span class="badge">Kanzleiführung</span>
        <h2 style="font-size: 15pt; color: #09090b; margin: 4px 0 0 0;">Dipl.-Ing. (FH) Majeed Shams M.Eng.</h2>
      </div>
      <div style="font-size: 7.5pt; color: #71717a; font-weight: 600;">Freier Architekt &amp; Stadtplaner</div>
    </div>

    <div class="grid-2" style="gap: 20px; align-items: start;">
      <div>
        <div style="border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; height: 95mm; background: #f8fafc; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
          ${founderImg ? `<img src="${founderImg}" style="width: 100%; height: 100%; object-fit: cover; object-position: top center;" alt="Dipl.-Ing. Majeed Shams">` : ''}
        </div>
        <div style="margin-top: 10px; padding: 10px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
          <div style="font-size: 8pt; font-weight: 700; color: #09090b;">Akademische Lehre &amp; Forschung</div>
          <div style="font-size: 7.5pt; color: #52525b; margin-top: 2px;">
            Lehrauftrag an der Frankfurt University of Applied Sciences (UAS) für Baurecht, Entwurf und nachhaltige Stadtentwicklung.
          </div>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div class="card">
          <div style="font-size: 8pt; color: #dc2626; font-weight: 700; text-transform: uppercase;">Profil &amp; Werdegang</div>
          <h3 class="font-serif" style="font-size: 13pt; color: #09090b; margin: 4px 0 8px 0;">Technik, Recht und Gestaltung vereint</h3>
          <p style="font-size: 8.5pt; color: #3f3f46; line-height: 1.6;">
            Mit mehr als 15 Jahren praktischer Bauerfahrung leitet Dipl.-Ing. Majeed Shams die Planung komplexer Hochbau- und Stadtentwicklungsprojekte im Rhein-Main-Gebiet.
          </p>
          <p style="font-size: 8.5pt; color: #3f3f46; line-height: 1.6; margin-top: 6px;">
            Sein Werdegang verbindet klassische deutsche Ingenieursausbildung (FH) mit dem Master of Engineering (M.Eng.) in Stadtplanung und urbaner Infrastruktur.
          </p>
        </div>

        <div class="card">
          <div style="font-size: 8pt; color: #09090b; font-weight: 700; margin-bottom: 6px;">Kernkompetenzen &amp; Spezialisierungen</div>
          <ul style="margin: 0; padding-left: 16px; font-size: 8.2pt; color: #52525b; line-height: 1.65;">
            <li><strong style="color:#09090b;">Baurecht &amp; Genehmigungen:</strong> HBO, BauGB, § 34 BauGB Innenbereich</li>
            <li><strong style="color:#09090b;">Gewerbe- &amp; Großprojekte:</strong> Industrie, Rechenzentren, Logistik &amp; Mischnutzung</li>
            <li><strong style="color:#09090b;">Wohnungs- &amp; Geschossbau:</strong> Maximale Flächeneffizienz (GRZ / GFZ)</li>
            <li><strong style="color:#09090b;">Serielles Bauen:</strong> Kooperation mit FCN für Fertigteil-Leichtbeton</li>
            <li><strong style="color:#09090b;">VOB-Bauüberwachung:</strong> Lückenlose Qualitätskontrolle vor Ort (LPH 8)</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <div>Architekturbüro Shams Consult · Gründerprofil Dipl.-Ing. Majeed Shams M.Eng.</div>
      <div>AKH Hessen Mitgliedsnummer: 21886</div>
      <div>Seite 4</div>
    </div>
  </div>

  <!-- ================= PAGE 5: LEISTUNGSPHASEN HOAI 1-9 ================= -->
  <div class="page">
    <div class="page-header">
      <div>
        <span class="badge">Leistungsumfang</span>
        <h2 style="font-size: 15pt; color: #09090b; margin: 4px 0 0 0;">HOAI-Leistungsphasen 1–9 im Überblick</h2>
      </div>
      <div style="font-size: 7.5pt; color: #71717a; font-weight: 600;">Amtliche Honorarordnung für Architekten</div>
    </div>

    <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 12px;">
      <div class="card" style="display: flex; justify-content: space-between; align-items: center; padding: 10px 14px;">
        <div style="display: flex; gap: 12px; align-items: center;">
          <div style="width: 32px; height: 32px; border-radius: 8px; background: #fee2e2; color: #dc2626; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 10pt;">1–2</div>
          <div>
            <div style="font-size: 9pt; font-weight: 700; color: #09090b;">Grundlagenermittlung &amp; Vorplanung</div>
            <div style="font-size: 7.5pt; color: #52525b;">Bedarfsanalyse, Baurechtsprüfung, Vorentwurf &amp; Kostenschätzung nach DIN 276.</div>
          </div>
        </div>
        <span class="badge" style="font-size: 6.8pt;">Phase 1 &amp; 2</span>
      </div>

      <div class="card" style="display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; border-color: #fca5a5; background: #fef2f2;">
        <div style="display: flex; gap: 12px; align-items: center;">
          <div style="width: 32px; height: 32px; border-radius: 8px; background: #dc2626; color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 10pt;">3–4</div>
          <div>
            <div style="font-size: 9pt; font-weight: 700; color: #09090b;">Entwurfsplanung &amp; Baugenehmigung (Bauantrag HBO)</div>
            <div style="font-size: 7.5pt; color: #4b5563;">Vollständige Einreichung bei den hessischen Bauaufsichtsämtern, Brandschutz- &amp; Statik-Koordination.</div>
          </div>
        </div>
        <span class="badge" style="background:#dc2626; color:#fff; font-size: 6.8pt; border-color: #dc2626;">Kerndisziplin</span>
      </div>

      <div class="card" style="display: flex; justify-content: space-between; align-items: center; padding: 10px 14px;">
        <div style="display: flex; gap: 12px; align-items: center;">
          <div style="width: 32px; height: 32px; border-radius: 8px; background: #fee2e2; color: #dc2626; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 10pt;">5</div>
          <div>
            <div style="font-size: 9pt; font-weight: 700; color: #09090b;">Ausführungs- &amp; Werkplanung</div>
            <div style="font-size: 7.5pt; color: #52525b;">Maßstabsgenaue Detail- und Werkpläne (1:50 bis 1:1), Schal- und Bewehrungsabstimmung.</div>
          </div>
        </div>
        <span class="badge" style="font-size: 6.8pt;">Phase 5</span>
      </div>

      <div class="card" style="display: flex; justify-content: space-between; align-items: center; padding: 10px 14px;">
        <div style="display: flex; gap: 12px; align-items: center;">
          <div style="width: 32px; height: 32px; border-radius: 8px; background: #fee2e2; color: #dc2626; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 10pt;">6–7</div>
          <div>
            <div style="font-size: 9pt; font-weight: 700; color: #09090b;">Vergabe &amp; Ausschreibung (Leistungsverzeichnisse)</div>
            <div style="font-size: 7.5pt; color: #52525b;">Erstellung rechtssicherer VOB-Leistungsverzeichnisse, Preisspiegel und Vergabeverhandlungen.</div>
          </div>
        </div>
        <span class="badge" style="font-size: 6.8pt;">Phase 6 &amp; 7</span>
      </div>

      <div class="card" style="display: flex; justify-content: space-between; align-items: center; padding: 10px 14px;">
        <div style="display: flex; gap: 12px; align-items: center;">
          <div style="width: 32px; height: 32px; border-radius: 8px; background: #fee2e2; color: #dc2626; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 10pt;">8–9</div>
          <div>
            <div style="font-size: 9pt; font-weight: 700; color: #09090b;">Objektüberwachung (Bauleitung) &amp; Dokumentation</div>
            <div style="font-size: 7.5pt; color: #52525b;">Laufende Qualitätsprüfung auf der Baustelle, Aufmaß- und Rechnungsprüfung, mängelfreie Abnahme.</div>
          </div>
        </div>
        <span class="badge" style="font-size: 6.8pt;">Phase 8 &amp; 9</span>
      </div>
    </div>

    <div class="page-footer">
      <div>Architekturbüro Shams Consult · HOAI Leistungsphasen 1–9</div>
      <div>Planungssicherheit nach amtlicher deutscher Honorarordnung</div>
      <div>Seite 5</div>
    </div>
  </div>

  <!-- ================= PAGE 6: VOB & BAURECHT HBO ================= -->
  <div class="page">
    <div class="page-header">
      <div>
        <span class="badge badge-gold">Rechtssicherheit</span>
        <h2 style="font-size: 15pt; color: #09090b; margin: 4px 0 0 0;">VOB-Konformität &amp; Hessische Bauordnung (HBO)</h2>
      </div>
      <div style="font-size: 7.5pt; color: #71717a; font-weight: 600;">Mängelfreiheit &amp; Rechtssicherheit</div>
    </div>

    <div class="grid-2" style="margin-bottom: 14px;">
      <div class="card">
        <div style="font-size: 8pt; color: #dc2626; font-weight: 700; text-transform: uppercase;">VOB/B &amp; VOB/C</div>
        <h3 style="font-size: 12pt; color: #09090b; margin: 4px 0 8px 0;">Vergabe- &amp; Vertragsordnung für Bauleistungen</h3>
        <p style="font-size: 8.5pt; color: #3f3f46; line-height: 1.55;">
          Wir schützen private Bauherren und institutionelle Bauträger vor bösen Überraschungen: Durch präzise VOB-konforme Ausschreibungen werden Nachtragsrisiken minimiert und Ausführungsfristen vertraglich fixiert.
        </p>
      </div>

      <div class="card">
        <div style="font-size: 8pt; color: #0284c7; font-weight: 700; text-transform: uppercase;">HBO Hessen</div>
        <h3 style="font-size: 12pt; color: #09090b; margin: 4px 0 8px 0;">Rechtssichere Bauanträge ohne Nachforderungen</h3>
        <p style="font-size: 8.5pt; color: #3f3f46; line-height: 1.55;">
          Hessisches Baurecht zeichnet sich durch strenge Vorgaben bei Brandschutz, Abstandsflächen und Nachbarschaftsbeteiligung aus. Unsere Bauanträge werden im Vorfeld mit den Behörden abgestimmt.
        </p>
      </div>
    </div>

    <div class="card" style="padding: 16px;">
      <h3 style="font-size: 11pt; color: #09090b; margin: 0 0 10px 0;">Die 3 Säulen unserer Qualitätssicherung</h3>
      <div class="grid-3">
        <div style="padding: 10px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
          <strong style="color: #09090b; font-size: 8.5pt;">1. Vertragsklarheit</strong>
          <p style="font-size: 7.8pt; color: #52525b; margin-top: 4px; line-height: 1.5;">
            Lückenlose Leistungsbeschreibungen nach DIN-Normen verhindern Streitigkeiten und Kostenexplosionen.
          </p>
        </div>
        <div style="padding: 10px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
          <strong style="color: #09090b; font-size: 8.5pt;">2. Rechnungsprüfung</strong>
          <p style="font-size: 7.8pt; color: #52525b; margin-top: 4px; line-height: 1.5;">
            Jeder Cent wird vor der Freigabe gegen das tatsächliche Aufmaß auf der Baustelle geprüft.
          </p>
        </div>
        <div style="padding: 10px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
          <strong style="color: #09090b; font-size: 8.5pt;">3. Behördenabnahme</strong>
          <p style="font-size: 7.8pt; color: #52525b; margin-top: 4px; line-height: 1.5;">
            Begleitung bis zur behördlichen Gebrauchsabnahme und lückenlosen Dokumentenübergabe.
          </p>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <div>Architekturbüro Shams Consult · Deutsches Baurecht &amp; VOB-Garantie</div>
      <div>100% DIN &amp; VOB Konformität</div>
      <div>Seite 6</div>
    </div>
  </div>

  <!-- ================= PAGE 7: FLAGGSCHIFF-GROSSPROJEKTE & GEWERBEBAU (EARLIER!) ================= -->
  <div class="page">
    <div class="page-header">
      <div>
        <span class="badge" style="background: #fef2f2; color: #dc2626; border-color: #fca5a5;">Kritische Infrastruktur &amp; Großprojekte</span>
        <h2 style="font-size: 15pt; color: #09090b; margin: 4px 0 0 0;">Rechenzentrum (>50 MW), Gewerbe &amp; B-Plan</h2>
      </div>
      <div style="font-size: 7.5pt; color: #71717a; font-weight: 600;">Industrielle Großprojekte &amp; Bauleitplanung</div>
    </div>

    <div class="card" style="padding: 12px; margin-bottom: 12px; border-color: #fca5a5; background: #fffdfd;">
      <div class="grid-2" style="gap: 14px; align-items: center;">
        <div style="border-radius: 8px; overflow: hidden; height: 52mm; background: #f8fafc; border: 1px solid #e2e8f0;">
          ${projectRechenzentrum ? `<img src="${projectRechenzentrum}" style="width: 100%; height: 100%; object-fit: cover;" alt="Rechenzentrum Bebra">` : ''}
        </div>
        <div>
          <span class="badge" style="font-size: 6.5pt; background: #dc2626; color: #fff; border-color: #dc2626;">Infrastruktur-Leuchtturm</span>
          <h3 style="font-size: 11pt; color: #09090b; margin: 4px 0 4px 0;">Rechenzentrum Bebra (>50 MW) — Bauleitplanung &amp; B-Plan</h3>
          <p style="font-size: 7.8pt; color: #3f3f46; line-height: 1.5;">
            Städtebauliches Gesamtkonzept für ein nachhaltiges Tier 3/4 Rechenzentrum auf rund 56.000 m² Areal. Integration von 110 kV/380 kV Umspannwerk, 10.000 m² Batteriespeichern und zukunftsweisender Kreislaufabwärmenutzung.
          </p>
          <div style="margin-top: 6px; padding: 6px 8px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; font-size: 7.2pt; color: #334155; line-height: 1.5;">
            &bull; <strong>100% Abwärmenutzung:</strong> Ganzjährige Beheizung von 20.000 m² Gewächshäusern<br>
            &bull; <strong>Wasserschonend:</strong> Kühlung über gereinigtes Brauchwasser der städtischen Kläranlage<br>
            &bull; <strong>Rechtsbasis:</strong> B-Plan Nr. 18.1 gem. § 2 (1) &amp; § 3 (1) BauGB · Kooperation F&amp;P Immobau
          </div>
        </div>
      </div>
    </div>

    <div class="grid-2" style="gap: 12px;">
      <div class="card" style="padding: 10px;">
        <div style="border-radius: 6px; overflow: hidden; height: 32mm; background: #f8fafc; border: 1px solid #e2e8f0; margin-bottom: 6px;">
          ${projectNetto ? `<img src="${projectNetto}" style="width: 100%; height: 100%; object-fit: cover;" alt="Netto Münster">` : ''}
        </div>
        <span class="badge" style="font-size: 6.2pt;">Mischnutzung · LPH 5</span>
        <h4 style="font-size: 9pt; color: #09090b; margin: 3px 0;">„Netto“-Nahversorgungszentrum &amp; 22 WE</h4>
        <p style="font-size: 7.4pt; color: #52525b; line-height: 1.45;">
          Ausführungs- und Detailplanung für einen Lebensmittelmarkt mit Bäckerei, 22 Wohnungen, Tiefgarage und begrüntem Innenhof in Münster (Hessen).
        </p>
      </div>

      <div class="card" style="padding: 10px;">
        <div style="border-radius: 6px; overflow: hidden; height: 32mm; background: #f8fafc; border: 1px solid #e2e8f0; margin-bottom: 6px;">
          ${projectAdler ? `<img src="${projectAdler}" style="width: 100%; height: 100%; object-fit: cover;" alt="Bürogebäude Adler">` : ''}
        </div>
        <span class="badge" style="font-size: 6.2pt;">Gewerbebau · Vorfertigung</span>
        <h4 style="font-size: 9pt; color: #09090b; margin: 3px 0;">Bürogebäude Adler Seeheim-Jugenheim</h4>
        <p style="font-size: 7.4pt; color: #52525b; line-height: 1.45;">
          Integrale Werkplanung und serielle Betonfertigteile mit F.C. Nüdling Fertigteiltechnik. Reduzierte Bauzeiten und höchste architektonische Präzision.
        </p>
      </div>
    </div>

    <div class="page-footer">
      <div>Architekturbüro Shams Consult · Rechenzentrum, Gewerbe- &amp; Infrastrukturprojekte</div>
      <div>Bauleitplanung · B-Plan Nr. 18.1 · Großprojekte in Hessen</div>
      <div>Seite 7</div>
    </div>
  </div>

  <!-- ================= PAGE 8: WOHNUNGSBAU & URBANE MEHRFAMILIENHÄUSER ================= -->
  <div class="page">
    <div class="page-header">
      <div>
        <span class="badge">Wohnungsbau &amp; Nachverdichtung</span>
        <h2 style="font-size: 15pt; color: #09090b; margin: 4px 0 0 0;">Wohnungsbau, Urbane Mehrfamilienhäuser &amp; Außenanlagen</h2>
      </div>
      <div style="font-size: 7.5pt; color: #71717a; font-weight: 600;">Realisierte Referenzbauten &amp; Baurecht</div>
    </div>

    <div class="grid-2" style="gap: 16px; margin-bottom: 12px;">
      <div class="card" style="padding: 12px;">
        <div style="border-radius: 8px; overflow: hidden; height: 48mm; background: #f8fafc; border: 1px solid #e2e8f0; margin-bottom: 8px;">
          ${projectDreieich ? `<img src="${projectDreieich}" style="width: 100%; height: 100%; object-fit: cover;" alt="MFH Dreieich">` : ''}
        </div>
        <span class="badge" style="font-size: 6.8pt;">Wohnungsbau · Neubau</span>
        <h3 style="font-size: 10.5pt; color: #09090b; margin: 4px 0;">Mehrfamilienhaus Dreieich-Götzenhain</h3>
        <p style="font-size: 8pt; color: #3f3f46; line-height: 1.5;">
          Neubau eines dreistöckigen Mehrfamilienhauses mit barrierefreien Wohneinheiten, Tiefgarage und großzügigen Balkonanlagen. Erfolgreiche Genehmigung trotz anspruchsvoller Hanglage und strenger Baumschutzauflagen.
        </p>
        <div style="margin-top: 8px; font-size: 7.5pt; color: #52525b;">
          <strong>Leistung:</strong> LPH 1–8 HOAI · <strong>Region:</strong> Kreis Offenbach / FFM
        </div>
      </div>

      <div class="card" style="padding: 12px;">
        <div style="border-radius: 8px; overflow: hidden; height: 48mm; background: #f8fafc; border: 1px solid #e2e8f0; margin-bottom: 8px;">
          ${projectMfa ? `<img src="${projectMfa}" style="width: 100%; height: 100%; object-fit: cover;" alt="Modernes MFA">` : ''}
        </div>
        <span class="badge" style="font-size: 6.8pt;">Wohnbau · Baugenehmigung</span>
        <h3 style="font-size: 10.5pt; color: #09090b; margin: 4px 0;">Mehrfamilienhaus mit 9 Wohneinheiten</h3>
        <p style="font-size: 8pt; color: #3f3f46; line-height: 1.5;">
          Komplexe Baugenehmigung bei der zuständigen Bauaufsicht durchgesetzt, nachdem andere Büros gescheitert waren. Höchste Ausnutzung des zulässigen Baufensters bei optimierter Grundrissaufteilung.
        </p>
        <div style="margin-top: 8px; font-size: 7.5pt; color: #52525b;">
          <strong>Kunde:</strong> Samuel Allaw (Entwickler) · <strong>Ergebnis:</strong> 100% Genehmigung
        </div>
      </div>
    </div>

    <div class="card" style="padding: 10px 14px; background: #f8fafc;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div style="font-size: 8pt; font-weight: 700; color: #09090b;">
          Weitere Referenzen: Stadtvilla &amp; MFH Rödermark (KfW 40 EE) &bull; QNG-Nachhaltigkeit &bull; Schwammstadt-Rigolenversickerung
        </div>
        <span class="badge badge-gold" style="font-size: 6.5pt;">KfW &amp; QNG Konform</span>
      </div>
    </div>

    <div class="page-footer">
      <div>Architekturbüro Shams Consult · Gebaute Referenzen Wohnungsbau</div>
      <div>Wohnungsbau · Nachverdichtung · KfW-Effizienzhäuser</div>
      <div>Seite 8</div>
    </div>
  </div>

  <!-- ================= PAGE 9: BAUSTELLENEINBLICKE ================= -->
  <div class="page">
    <div class="page-header">
      <div>
        <span class="badge">Vor-Ort-Präsenz</span>
        <h2 style="font-size: 15pt; color: #09090b; margin: 4px 0 0 0;">Baustelleneinblicke &amp; VOB-Überwachung</h2>
      </div>
      <div style="font-size: 7.5pt; color: #71717a; font-weight: 600;">Qualitätskontrolle vor Ort</div>
    </div>

    <p style="font-size: 9pt; color: #3f3f46; line-height: 1.6; margin-bottom: 12px;">
      Gute Architektur entsteht nicht nur am Bildschirm, sondern entscheidet sich auf der Baustelle. Regelmäßige Baustellenbegehungen, Bewehrungsabnahmen und Schnittstellenkontrollen garantieren Mängelfreiheit.
    </p>

    <div class="grid-2" style="gap: 14px; margin-bottom: 12px;">
      <div class="card" style="padding: 10px;">
        <div style="border-radius: 8px; overflow: hidden; height: 50mm; background: #f8fafc; border: 1px solid #e2e8f0; margin-bottom: 8px;">
          ${siteVisit01 ? `<img src="${siteVisit01}" style="width: 100%; height: 100%; object-fit: cover;" alt="Baustellenprüfung 1">` : ''}
        </div>
        <div style="font-size: 8.5pt; font-weight: 700; color: #09090b;">Rohbau- &amp; Bewehrungsabnahme</div>
        <div style="font-size: 7.5pt; color: #52525b; margin-top: 2px;">
          Prüfung statischer Anschlussbewehrungen und Betonierabschnitte vor dem Vergießen.
        </div>
      </div>

      <div class="card" style="padding: 10px;">
        <div style="border-radius: 8px; overflow: hidden; height: 50mm; background: #f8fafc; border: 1px solid #e2e8f0; margin-bottom: 8px;">
          ${siteVisit02 ? `<img src="${siteVisit02}" style="width: 100%; height: 100%; object-fit: cover;" alt="Baustellenprüfung 2">` : ''}
        </div>
        <div style="font-size: 8.5pt; font-weight: 700; color: #09090b;">Fassaden- &amp; Dämmstoffinspektion</div>
        <div style="font-size: 7.5pt; color: #52525b; margin-top: 2px;">
          Thermische Hüllenkontrolle und Abdichtungsprüfung gemäß DIN 18533.
        </div>
      </div>
    </div>

    <div class="page-footer">
      <div>Architekturbüro Shams Consult · Baustelleneinblicke &amp; Bauüberwachung</div>
      <div>Vor-Ort-Überwachung nach LPH 8 HOAI</div>
      <div>Seite 9</div>
    </div>
  </div>

  <!-- ================= PAGE 10: FORSCHUNG & NACHHALTIGKEIT ================= -->
  <div class="page">
    <div class="page-header">
      <div>
        <span class="badge badge-green">Forschung &amp; Lehre</span>
        <h2 style="font-size: 15pt; color: #09090b; margin: 4px 0 0 0;">Zukunftsthemen: Frankfurt UAS &amp; Innovation</h2>
      </div>
      <div style="font-size: 7.5pt; color: #71717a; font-weight: 600;">Wissenschaftliche Fundierung</div>
    </div>

    <div class="grid-3" style="gap: 12px; margin-bottom: 14px;">
      <div class="card" style="padding: 12px;">
        <span class="badge badge-green" style="font-size: 6.8pt;">Klimaresilienz</span>
        <h4 style="font-size: 10pt; color: #09090b; margin: 6px 0 4px 0;">Schwammstadt (Sponge City)</h4>
        <p style="font-size: 7.8pt; color: #3f3f46; line-height: 1.5;">
          Retentionsdächer, Mulden-Rigolen-Systeme und dezentrale Regenwasserbewirtschaftung zur Überflutungsvorsorge im urbanen Raum.
        </p>
      </div>

      <div class="card" style="padding: 12px;">
        <span class="badge badge-green" style="font-size: 6.8pt;">Zirkularität</span>
        <h4 style="font-size: 10pt; color: #09090b; margin: 6px 0 4px 0;">Cradle to Cradle (C2C)</h4>
        <p style="font-size: 7.8pt; color: #3f3f46; line-height: 1.5;">
          Materialgesundheit, sortenreine Trennbarkeit und Baustoffkreisläufe für CO2-neutrale Lebenszyklen nach DGNB-Kriterien.
        </p>
      </div>

      <div class="card" style="padding: 12px;">
        <span class="badge badge-green" style="font-size: 6.8pt;">Einfaches Bauen</span>
        <h4 style="font-size: 10pt; color: #09090b; margin: 6px 0 4px 0;">Gebäudetyp E</h4>
        <p style="font-size: 7.8pt; color: #3f3f46; line-height: 1.5;">
          Kostenreduktion durch bewussten Verzicht auf überbordende Komfort-Normen — robuster, langlebiger und bezahlbarer Wohnungsbau.
        </p>
      </div>
    </div>

    <div class="card" style="padding: 14px;">
      <div class="grid-2" style="gap: 16px; align-items: center;">
        <div>
          <h3 class="font-serif" style="font-size: 12pt; color: #09090b; margin: 0 0 6px 0;">Wissenschaft trifft Baupraxis</h3>
          <p style="font-size: 8.2pt; color: #3f3f46; line-height: 1.6;">
            Durch den Lehrauftrag von Dipl.-Ing. Majeed Shams an der Frankfurt UAS fließen modernste Erkenntnisse direkt in unsere Bauprojekte ein. Dies sichert Investoren maximale Fördermittelfähigkeit (KfW, BEG) und Zukunftssicherheit.
          </p>
        </div>
        <div style="border-radius: 8px; overflow: hidden; height: 38mm; background: #f8fafc; border: 1px solid #e2e8f0;">
          ${researchCover ? `<img src="${researchCover}" style="width: 100%; height: 100%; object-fit: cover;" alt="Forschung UAS">` : ''}
        </div>
      </div>
    </div>

    <div class="page-footer">
      <div>Architekturbüro Shams Consult · Frankfurt University of Applied Sciences</div>
      <div>Forschung &amp; Lehre: Schwammstadt · Cradle to Cradle · Gebäudetyp E</div>
      <div>Seite 10</div>
    </div>
  </div>

  <!-- ================= PAGE 11: PARTNER & KUNDENSTIMMEN ================= -->
  <div class="page">
    <div class="page-header">
      <div>
        <span class="badge">Netzwerk &amp; Referenzen</span>
        <h2 style="font-size: 15pt; color: #09090b; margin: 4px 0 0 0;">Strategische Partnerschaften &amp; Rezensionen</h2>
      </div>
      <div style="font-size: 7.5pt; color: #71717a; font-weight: 600;">Google Bewertung: 5.0 ★★★★★</div>
    </div>

    <div class="card" style="padding: 12px; margin-bottom: 12px;">
      <div style="display: flex; gap: 14px; align-items: center;">
        ${partnerFcn ? `<img src="${partnerFcn}" style="height: 36px; object-fit: contain;" alt="FCN Partner">` : ''}
        <div>
          <div style="font-size: 9pt; font-weight: 700; color: #09090b;">Technologiepartner: F. C. Nüdling (FCN Systemrohbau)</div>
          <div style="font-size: 7.8pt; color: #52525b; margin-top: 2px;">
            Industrielle Vorfertigung mit klimaschonenden Liapor-Leichtbetonwänden. Verkürzt Bauzeiten um bis zu 40% bei höchster Maßhaltigkeit.
          </div>
        </div>
      </div>
    </div>

    <div class="grid-2" style="gap: 12px;">
      <div class="card" style="padding: 12px;">
        <div style="color: #d97706; font-size: 9pt; margin-bottom: 4px;">★★★★★</div>
        <div style="font-size: 8.5pt; font-weight: 700; color: #09090b; margin-bottom: 4px;">„Einziges Büro, das unser Projekt durchgesetzt hat!“</div>
        <p style="font-size: 7.8pt; color: #3f3f46; line-height: 1.5;">
          „Wir haben jahrelang mit anderen Architekten für eine Baugenehmigung gekämpft, jedoch ohne Erfolg. Herr Shams hat unser kompliziertes 9-Wohnungen-Projekt übernommen und uns die lang ersehnte Genehmigung erbracht.“
        </p>
        <div style="font-size: 7.2pt; color: #dc2626; margin-top: 6px; font-weight: 600;">Samuel Allaw · Projektentwickler &amp; Bauherr</div>
      </div>

      <div class="card" style="padding: 12px;">
        <div style="color: #d97706; font-size: 9pt; margin-bottom: 4px;">★★★★★</div>
        <div style="font-size: 8.5pt; font-weight: 700; color: #09090b; margin-bottom: 4px;">„Immense Fachkompetenz und Professionalität.“</div>
        <p style="font-size: 7.8pt; color: #3f3f46; line-height: 1.5;">
          „Herr Shams kennt die Abläufe im Bauamt bis ins letzte Detail, wodurch wir wertvolle Monate gespart haben. Ich kann das Architekturbüro zu 100% weiterempfehlen.“
        </p>
        <div style="font-size: 7.2pt; color: #dc2626; margin-top: 6px; font-weight: 600;">Omar Fedai · Gewerblicher Investor</div>
      </div>

      <div class="card" style="padding: 12px;">
        <div style="color: #d97706; font-size: 9pt; margin-bottom: 4px;">★★★★★</div>
        <div style="font-size: 8.5pt; font-weight: 700; color: #09090b; margin-bottom: 4px;">„Uneingeschränkte Weiterempfehlung!“</div>
        <p style="font-size: 7.8pt; color: #3f3f46; line-height: 1.5;">
          „Termintreue, hervorragende Ideen für unseren Grundriss und eine reibungslose Abstimmung mit den Genehmigungsbehörden.“
        </p>
        <div style="font-size: 7.2pt; color: #dc2626; margin-top: 6px; font-weight: 600;">Familie Rauck · Private Bauherren</div>
      </div>

      <div class="card" style="padding: 12px;">
        <div style="color: #d97706; font-size: 9pt; margin-bottom: 4px;">★★★★★</div>
        <div style="font-size: 8.5pt; font-weight: 700; color: #09090b; margin-bottom: 4px;">„Hervorragende Zusammenarbeit bei Baugenehmigungen.“</div>
        <p style="font-size: 7.8pt; color: #3f3f46; line-height: 1.5;">
          „Schnelle Reaktionen, fundierte technische Analysen und zuverlässige Vertretung gegenüber der Stadtverwaltung.“
        </p>
        <div style="font-size: 7.2pt; color: #dc2626; margin-top: 6px; font-weight: 600;">Holger Elvers · Bestandssanierung</div>
      </div>
    </div>

    <div class="page-footer">
      <div>Architekturbüro Shams Consult · Partner &amp; Verifizierte Google Bewertungen</div>
      <div>100% echte Kundenstimmen aus Frankfurt &amp; Rhein-Main</div>
      <div>Seite 11</div>
    </div>
  </div>

  <!-- ================= PAGE 12: KONTAKTHUB & ERSTGESPRÄCH ================= -->
  <div class="page" style="justify-content: space-between;">
    <div>
      <div class="page-header">
        <div>
          <span class="badge" style="background:#dc2626; color:#fff; border-color: #dc2626;">Direkter Kontakt</span>
          <h2 style="font-size: 15pt; color: #09090b; margin: 4px 0 0 0;">Ihr unverbindliches Orientierungsgespräch</h2>
        </div>
        <div style="font-size: 7.5pt; color: #71717a; font-weight: 600;">0€ Verpflichtung · 100% Vertraulich</div>
      </div>

      <div class="card" style="padding: 16px; margin-bottom: 16px; background: #fef2f2; border-color: #fca5a5;">
        <h3 class="font-serif" style="font-size: 15pt; color: #09090b; margin: 0 0 8px 0;">Starten Sie Ihr Bauvorhaben mit Planungssicherheit</h3>
        <p style="font-size: 8.8pt; color: #3f3f46; line-height: 1.6;">
          Egal ob Sie ein Grundstück prüfen lassen möchten, eine Baugenehmigung anstreben oder einen erfahrenen Partner für Werkplanung und Bauleitung suchen: Vereinbaren Sie ein persönliches 30-minütiges Orientierungsgespräch direkt mit Gründer Majeed Shams.
        </p>
      </div>

      <div class="grid-2" style="gap: 16px; margin-bottom: 16px;">
        <div class="card" style="padding: 14px;">
          <div style="font-size: 8pt; color: #dc2626; font-weight: 700; text-transform: uppercase;">Zentrale Frankfurt</div>
          <div style="font-size: 10pt; font-weight: 700; color: #09090b; margin-top: 2px;">Architekturbüro Shams Consult</div>
          <div style="font-size: 8.2pt; color: #52525b; margin-top: 4px; line-height: 1.6;">
            Carl-von-Noorden-Platz 5<br>
            60596 Frankfurt am Main<br>
            Telefon: <strong style="color:#09090b;">069 74 223 777</strong><br>
            E-Mail: <strong style="color:#09090b;">office@shams-consult.de</strong>
          </div>
        </div>

        <div class="card" style="padding: 14px;">
          <div style="font-size: 8pt; color: #0284c7; font-weight: 700; text-transform: uppercase;">Planungsstudio Rödermark</div>
          <div style="font-size: 10pt; font-weight: 700; color: #09090b; margin-top: 2px;">Entwurfs- &amp; Modellstudio</div>
          <div style="font-size: 8.2pt; color: #52525b; margin-top: 4px; line-height: 1.6;">
            Carl-Zeiss-Str. 43<br>
            63322 Rödermark<br>
            Telefon: <strong style="color:#09090b;">060 74 239 87 82</strong><br>
            WhatsApp: <strong style="color:#09090b;">+49 1515 1864090</strong>
          </div>
        </div>
      </div>

      <div class="card" style="padding: 14px; display: flex; align-items: center; justify-content: space-between;">
        <div>
          <div style="font-size: 9pt; font-weight: 700; color: #09090b;">Online-Terminbuchung via Microsoft 365</div>
          <div style="font-size: 7.8pt; color: #52525b; margin-top: 2px;">
            Wählen Sie bequem Ihren Wunschtermin im digitalen Kalender:<br>
            <a href="${CONTACT.bookingHref}" style="color: #dc2626; text-decoration: none; font-weight: 600;">outlook.office365.com/owa/calendar/ShamsConsult &rarr;</a>
          </div>
        </div>
        ${qrImg ? `<div style="text-align: center;"><img src="${qrImg}" style="width: 55px; height: 55px; background: #fff; padding: 3px; border-radius: 6px; border: 1px solid #e2e8f0;" alt="QR Code"><div style="font-size: 6.5pt; color: #71717a; margin-top: 2px;">vCard Scan</div></div>` : ''}
      </div>
    </div>

    <div class="page-footer">
      <div>Architekturbüro Shams Consult · Inhaber Dipl.-Ing. (FH) Majeed Shams M.Eng.</div>
      <div>AKH Hessen Nr. 21886 · shams-consult.de</div>
      <div>Seite 12 (Abschluss)</div>
    </div>
  </div>

</body>
</html>`;

const outHtml = path.join(publicDir, "portfolio-monograph-preview.html");
const outPdf = path.join(publicDir, "shams-consult-architektur-portfolio.pdf");

fs.writeFileSync(outHtml, htmlContent, "utf8");
console.log("HTML Monograph saved to:", outHtml);

// Browser candidates for headless rendering
const browserCandidates = [
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "google-chrome",
  "chromium",
  "chromium-browser",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium-browser",
];

let browserPath = null;
for (const cand of browserCandidates) {
  try {
    if (cand.includes(":") && fs.existsSync(cand)) {
      browserPath = cand;
      break;
    } else if (!cand.includes(":")) {
      const check = spawnSync(process.platform === "win32" ? "where" : "which", [cand]);
      if (check.status === 0) {
        browserPath = cand;
        break;
      }
    }
  } catch {}
}

if (browserPath) {
  console.log(`Rendering 12-Page PDF via headless engine: ${browserPath}...`);
  const fileUrl = `file:///${outHtml.replace(/\\/g, "/")}`;
  const result = spawnSync(
    browserPath,
    [
      "--headless",
      "--disable-gpu",
      "--no-pdf-header-footer",
      `--print-to-pdf=${outPdf}`,
      fileUrl,
    ],
    { stdio: "inherit" }
  );

  if (result.error) {
    console.warn("Headless render spawn warning:", result.error);
  }

  if (fs.existsSync(outPdf)) {
    const stat = fs.statSync(outPdf);
    console.log(
      `SUCCESS! Generated 12-page branded portfolio PDF: ${outPdf} (${(
        stat.size /
        1024 /
        1024
      ).toFixed(2)} MB)`
    );
  } else {
    console.warn("Headless browser executed but PDF output not found at", outPdf);
  }
} else {
  console.log("No local Edge or Chrome executable found. HTML monograph ready at:", outHtml);
}
