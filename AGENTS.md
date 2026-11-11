# AGENTS & DEVELOPER GUIDELINES — SHAMS CONSULT

## 1. Zero Hardcoding & Mandatory Centralized Configuration
- **PERMANENT RULE:** Never hardcode dynamic values, URLs, API endpoints, credentials, or fallback defaults (e.g., absolutely no `import.meta.env.KEY || 'https://...'` or `|| 'password'`).
- All dynamic values MUST be declared in `.env` (and documented in `.env.example`).
- All dynamic values MUST be consumed exclusively through the centralized configuration in `src/config/env.ts` (`envConfig`).
- **Pre-Render Startup Guard:** The application validates all required environment variables in `src/main.tsx` before rendering. If any required variable is missing or empty, the application halts immediately and renders a configuration error screen.

## 2. Git & Change Protocol
- Never commit or stage changes. The user will handle all Git operations manually.
- Do not make changes without explicit user confirmation.

## 3. UI/UX Design & Ergonomics
- Implement science-backed UX patterns (Fitts's Law, Hick's Law, Steven Hoober's Mobile Thumb Zone).
- Keep primary interactive controls within the natural thumb reach on mobile devices.

## 4. Linting
- Always run the lint script from `package.json` (`npm run lint`).
- Fix only lint errors, not warnings, unless requested.
