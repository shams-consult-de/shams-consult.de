import { envConfig } from "../config/env";

export interface LeadCapturePayload {
  email: string;
  phone?: string;
  fullName?: string;
  projectType?: string;
  description?: string;
  honeypot?: string;
}

export interface LeadCaptureResponse {
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * Dispatch lead details to the centralized email service using public client ID authentication.
 * The server strictly locks recipient routing; no recipient email is transmitted from the static client.
 */
export async function sendLeadNotification(
  payload: LeadCapturePayload
): Promise<LeadCaptureResponse> {
  const mailApiUrl = envConfig.mailApiUrl;
  const clientId = envConfig.mailClientId;

  try {
    const response = await fetch(mailApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-client-id": clientId,
      },
      body: JSON.stringify({
        clientId,
        fullName: payload.fullName || "Broschüren-Interessent (Website)",
        email: payload.email,
        phone: payload.phone?.trim() || "Nicht angegeben",
        brochureDownload: true,
        projectType:
          payload.projectType ||
          "Broschüren-Download 2026 (Architektur & Stadtplanung)",
        description: [
          `Neuer Interessent für das offizielle Architektur-Portfolio 2026`,
          `E-Mail: ${payload.email}`,
          `Telefon: ${payload.phone?.trim() || "Nicht angegeben"}`,
          payload.description ? `Zusatzinformation: ${payload.description}` : "",
        ]
          .filter(Boolean)
          .join("\n"),
        // Anti-bot honeypot / ghost input fields checked by the server
        website_url: payload.honeypot || undefined,
        honeypot: payload.honeypot || undefined,
      }),
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      console.warn("Mail dispatch notice:", data);
      return { success: false, error: data?.error || "Lead dispatch failed" };
    }

    return { success: true, message: "Lead captured successfully" };
  } catch (error: unknown) {
    console.warn("Non-blocking lead dispatch error:", error);
    return { success: false, error: "Network error during lead dispatch" };
  }
}
