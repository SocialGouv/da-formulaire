"use client";

import { signIn } from "next-auth/react";

const isDev = process.env.NODE_ENV === "development";

export default function ProConnectLoginButton() {
  return (
    <div className="fr-connect-group">
      <button
        type="button"
        className="fr-connect"
        onClick={() => {
          signIn("proconnect", { callbackUrl: "/" });
        }}
      >
        <span className="fr-connect__login">S&apos;identifier avec</span>
        <span className="fr-connect__brand">ProConnect</span>
      </button>
      <p>
        <a
          href="https://www.proconnect.gouv.fr/"
          target="_blank"
          rel="noopener"
          title="Qu'est-ce que ProConnect ? - nouvelle fenêtre"
        >
          Qu&apos;est-ce que ProConnect ?
        </a>
      </p>

      {isDev && (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              margin: "1.5rem 0",
            }}
          >
            <hr style={{ flex: 1 }} />
            <span className="fr-text--sm fr-text--bold">ou</span>
            <hr style={{ flex: 1 }} />
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button
              type="button"
              className="fr-btn fr-btn--secondary fr-btn--icon-left fr-icon-admin-line"
              onClick={() => {
                signIn("dev-login", {
                  email: "admin@test.fr",
                  name: "Admin Dev",
                  callbackUrl: "/",
                });
              }}
            >
              Admin Dev
            </button>
            <button
              type="button"
              className="fr-btn fr-btn--tertiary fr-btn--icon-left fr-icon-user-line"
              onClick={() => {
                signIn("dev-login", {
                  email: "utilisateur@test.fr",
                  name: "Utilisateur Dev",
                  callbackUrl: "/",
                });
              }}
            >
              Utilisateur Dev
            </button>
          </div>
        </>
      )}
    </div>
  );
}
