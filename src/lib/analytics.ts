import { envConfig } from "../config/env";

export type CookieConsent = "all" | "essential";

const CONSENT_STORAGE_KEY = "shams_cookie_consent_v1";
const GTM_SCRIPT_ID = "gtm-container-script";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

function isLocalEnvironment(): boolean {
  if (typeof window === "undefined") return true;
  const { hostname } = window.location;
  return (
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname.endsWith(".local")
  );
}

function isTrackingAllowed(): boolean {
  return !isLocalEnvironment() && getConsent() === "all";
}

function ensureDataLayer(): Record<string, unknown>[] {
  window.dataLayer = window.dataLayer || [];
  return window.dataLayer;
}

export function getConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (stored === "all" || stored === "essential") {
      return stored;
    }
  } catch {
    // In case localStorage is blocked/restricted
    return null;
  }
  return null;
}

/**
 * Dynamically injects Google Tag Manager using the centralized container ID
 * when running outside local development and after explicit user consent.
 */
export function initGTM(): void {
  if (!isTrackingAllowed()) return;
  if (document.getElementById(GTM_SCRIPT_ID)) return;

  const gtmId = envConfig.gtmId;
  const dataLayer = ensureDataLayer();
  dataLayer.push({
    "gtm.start": Date.now(),
    event: "gtm.js",
  });

  const script = document.createElement("script");
  script.id = GTM_SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`;
  document.head.appendChild(script);
}

export function setConsent(consent: CookieConsent): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, consent);
  } catch {
    // LocalStorage quota or access issue
  }

  if (consent === "all") {
    initGTM();
  }

  if (!isLocalEnvironment() && window.dataLayer) {
    window.dataLayer.push({
      event: "consent_update",
      consent_status: consent,
    });
  }

  window.dispatchEvent(new CustomEvent("shams_consent_changed", { detail: consent }));
}

export function openCookieSettings(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("shams_open_cookie_settings"));
}

/**
 * Pushes SPA route changes to GTM's dataLayer when analytics consent is active.
 */
export function trackPageView(path: string, title?: string): void {
  if (!isTrackingAllowed()) return;

  initGTM();
  const dataLayer = ensureDataLayer();
  dataLayer.push({
    event: "page_view",
    page_path: path,
    page_title: title || document.title,
    page_location: window.location.href,
  });
}

/**
 * Pushes custom UX/conversion events to GTM's dataLayer when analytics consent is active.
 */
export function trackEvent(
  eventName: string,
  params: Record<string, unknown> = {}
): void {
  if (!isTrackingAllowed()) return;

  initGTM();
  const dataLayer = ensureDataLayer();
  dataLayer.push({
    event: eventName,
    ...params,
  });
}
