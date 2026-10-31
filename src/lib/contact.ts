export const CONTACT = {
  companyName: "Shams Consult",
  legalName: "Architekturbüro Shams Consult",
  founder: "Dipl.-Ing. (FH) Majeed Shams M.Eng.",
  chamber: "Mitglied Architekten- und Stadtplanerkammer Hessen (AKH Nr. 21886)",
  email: "office@shams-consult.de",
  primaryPhone: "069 74 223 777",
  primaryPhoneHref: "tel:+496974223777",
  phoneFrankfurt: "069 74 223 777",
  phoneFrankfurtHref: "tel:+496974223777",
  phoneRoedermark: "060 74 239 87 82",
  phoneRoedermarkHref: "tel:+4960742398782",
  whatsappNumber: "+49-15151864090",
  whatsappDisplay: "+49-15151864090",
  whatsappHref: "https://wa.me/4915151864090?text=Hallo%20Herr%20Shams,%20ich%20m%C3%B6chte%20ein%20unverbindliches%20Erstgespr%C3%A4ch%20f%C3%BCr%20mein%20Bauvorhaben%20anfragen.",
  bookingHref: "https://outlook.office365.com/owa/calendar/TerminvereinbarungBauundPlanungsberatungmitShamsConsult@shams-consult.de/bookings/",
  linkedin: "https://www.linkedin.com/company/architekturb%C3%BCro-shams-consult/",
  instagram: "https://www.instagram.com/shams_consult/",
  facebook: "https://www.facebook.com/profile.php?id=100057398741769",
  xing: "https://www.xing.com/profile/MajeedShams_FreierArchitektundStadtplaner",
  youtube: "https://www.youtube.com/@shams-consult",
  featuredVideo: {
    id: "F8NEdvixGZ8",
    url: "https://www.youtube.com/watch?v=F8NEdvixGZ8",
    embedUrl: "https://www.youtube-nocookie.com/embed/F8NEdvixGZ8",
  },
  primaryAddress: {
    street: "Carl-von-Noorden-Platz 5",
    city: "60596 Frankfurt am Main",
    country: "Deutschland",
    countryEn: "Germany",
    full: "Carl-von-Noorden-Platz 5, 60596 Frankfurt am Main",
  },
  branchAddress: {
    street: "Carl-Zeiss-Str. 43",
    city: "63322 Rödermark",
    country: "Deutschland",
    countryEn: "Germany",
    full: "Carl-Zeiss-Str. 43, 63322 Rödermark",
  },
  offices: [
    {
      id: "frankfurt",
      name: {
        de: "Büro Frankfurt am Main",
        en: "Frankfurt am Main Office",
      },
      tagline: {
        de: "Finanzmetropole & Rhein-Main Zentrale",
        en: "Financial Hub & Regional Headquarters",
      },
      street: "Carl-von-Noorden-Platz 5",
      city: "60596 Frankfurt am Main",
      phone: "069 74 223 777",
      phoneHref: "tel:+496974223777",
      mapQuery: "Carl-von-Noorden-Platz 5, 60596 Frankfurt am Main",
      mapEmbedUrl: "https://maps.google.com/maps?q=Carl-von-Noorden-Platz+5,+60596+Frankfurt+am+Main&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },
    {
      id: "roedermark",
      name: {
        de: "Büro Rödermark",
        en: "Rödermark Office",
      },
      tagline: {
        de: "Planungs- & Entwicklungsstudio",
        en: "Planning & Architectural Design Studio",
      },
      street: "Carl-Zeiss-Str. 43",
      city: "63322 Rödermark",
      phone: "060 74 239 87 82",
      phoneHref: "tel:+4960742398782",
      mapQuery: "Carl-Zeiss-Str. 43, 63322 Rödermark",
      mapEmbedUrl: "https://maps.google.com/maps?q=Carl-Zeiss-Str.+43,+63322+R%C3%B6dermark&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },
  ],
} as const;

export function getWhatsappHref(message?: string): string {
  const cleanNumber = CONTACT.whatsappNumber.replace(/[^0-9]/g, "");
  const base = `https://wa.me/${cleanNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
