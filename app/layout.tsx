import { DsfrHeadBase } from "@codegouvfr/react-dsfr/next-app-router/DsfrHead";
import { DsfrProviderBase, StartDsfrOnHydration } from "@codegouvfr/react-dsfr/next-app-router/DsfrProvider";
import { createGetHtmlAttributes } from "@codegouvfr/react-dsfr/next-app-router/getHtmlAttributes";
import { Header } from "@codegouvfr/react-dsfr/Header";
import { defaultColorScheme } from "./defaultColorScheme";
import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css";
import "./dsfr-extensions.css";

export const metadata: Metadata = {
  title: "Formulaire DA - Document d'Architecture",
  description: "Formulaire pour créer des Documents d'Architecture (DA)",
};

const { getHtmlAttributes } = createGetHtmlAttributes({ defaultColorScheme });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = "fr";

  return (
    <html {...getHtmlAttributes({ lang })}>
      <head>
        <DsfrHeadBase
          Link={Link}
          preloadFonts={[
            "Marianne-Regular",
            "Marianne-Bold"
          ]}
        />
      </head>
      <body>
        <DsfrProviderBase lang={lang}>
          <StartDsfrOnHydration />
          <Header
            brandTop={<>RÉPUBLIQUE<br/>FRANÇAISE</>}
            serviceTitle="Documents d'Architecture"
            serviceTagline="Outil de création et gestion des DA"
            homeLinkProps={{
              href: "/",
              title: "Accueil - Documents d'Architecture"
            }}
          />
          {children}
        </DsfrProviderBase>
      </body>
    </html>
  );
}
