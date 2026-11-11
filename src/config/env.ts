/**
 * Strict Centralized Environment Configuration
 *
 * PERMANENT RULE:
 * ZERO fallback defaults are allowed for dynamic values.
 * All dynamic endpoints, secrets, and credentials MUST be provided via .env.
 * If any required variable is missing, the application startup halts immediately.
 */

export const REQUIRED_ENV_VARS = [
  "VITE_FOUNDER_PORTAL_PASSWORD",
  "VITE_MAIL_API_URL",
  "VITE_MAIL_CLIENT_ID",
] as const;

export type RequiredEnvVar = (typeof REQUIRED_ENV_VARS)[number];

export interface EnvValidationResult {
  isValid: boolean;
  missing: RequiredEnvVar[];
}

/**
 * Validates the presence of all required environment variables with non-empty values.
 */
export function validateEnvironment(): EnvValidationResult {
  const missing: RequiredEnvVar[] = [];

  for (const envKey of REQUIRED_ENV_VARS) {
    const val = import.meta.env[envKey];
    if (typeof val !== "string" || val.trim().length === 0) {
      missing.push(envKey);
    }
  }

  return {
    isValid: missing.length === 0,
    missing,
  };
}

/**
 * Centralized, type-safe environment configuration with strictly zero fallbacks.
 */
export const envConfig = {
  get founderPortalPassword(): string {
    const val = import.meta.env.VITE_FOUNDER_PORTAL_PASSWORD;
    if (!val || typeof val !== "string" || val.trim().length === 0) {
      throw new Error(
        "[FATAL CONFIGURATION ERROR]: Missing required environment variable 'VITE_FOUNDER_PORTAL_PASSWORD'."
      );
    }
    return val.trim();
  },

  get mailApiUrl(): string {
    const val = import.meta.env.VITE_MAIL_API_URL;
    if (!val || typeof val !== "string" || val.trim().length === 0) {
      throw new Error(
        "[FATAL CONFIGURATION ERROR]: Missing required environment variable 'VITE_MAIL_API_URL'."
      );
    }
    return val.trim();
  },

  get mailClientId(): string {
    const val = import.meta.env.VITE_MAIL_CLIENT_ID;
    if (!val || typeof val !== "string" || val.trim().length === 0) {
      throw new Error(
        "[FATAL CONFIGURATION ERROR]: Missing required environment variable 'VITE_MAIL_CLIENT_ID'."
      );
    }
    return val.trim();
  },
} as const;
