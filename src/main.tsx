import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { validateEnvironment } from "./config/env";

const rootElement = document.getElementById("root");

if (rootElement) {
  const envValidation = validateEnvironment();

  if (!envValidation.isValid) {
    const errorDetails = envValidation.missing.map((key) => ` - ${key}`).join("\n");
    console.error(
      `[CRITICAL CONFIGURATION ERROR]: Missing required environment variables:\n${errorDetails}`
    );

    // Strict Startup Halt: Do NOT render the application if dynamic configuration is incomplete.
    ReactDOM.createRoot(rootElement).render(
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#090a0d",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          padding: "24px",
        }}
      >
        <div
          style={{
            maxWidth: "540px",
            width: "100%",
            backgroundColor: "#16181f",
            border: "1px solid #dc2626",
            borderRadius: "16px",
            padding: "32px",
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.6)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <span style={{ fontSize: "28px" }}>⚠️</span>
            <h1 style={{ fontSize: "20px", fontWeight: 700, margin: 0, color: "#f87171" }}>
              Konfigurationsfehler / Configuration Halt
            </h1>
          </div>
          <p style={{ fontSize: "14px", color: "#cbd5e1", lineHeight: 1.6, marginBottom: "16px" }}>
            Die Website kann nicht gerendert werden, da erforderliche Umgebungsvariablen in der{" "}
            <code style={{ color: "#fca5a5", background: "rgba(220,38,38,0.2)", padding: "2px 6px", borderRadius: "4px" }}>
              .env
            </code>
            -Datei fehlen.
          </p>
          <div
            style={{
              backgroundColor: "#0d0e12",
              borderRadius: "8px",
              padding: "12px 16px",
              fontFamily: "monospace",
              fontSize: "12px",
              color: "#fca5a5",
              marginBottom: "16px",
              lineHeight: 1.6,
            }}
          >
            {envValidation.missing.map((key) => (
              <div key={key}>✕ {key} fehlt</div>
            ))}
          </div>
          <p style={{ fontSize: "12px", color: "#94a3b8", margin: 0 }}>
            Bitte tragen Sie alle erforderlichen Werte in die <code>.env</code>-Datei ein und starten Sie die Anwendung neu.
          </p>
        </div>
      </div>
    );
  } else {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}
