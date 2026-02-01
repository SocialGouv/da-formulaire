import "@gouvfr/dsfr/dist/dsfr.min.css";
import "@gouvfr/dsfr/dist/utility/utility.min.css";
import Script from "next/script";
import HeaderWithAuth from "./_components/HeaderWithAuth";
import type { Metadata } from "next";
import "./globals.css";
import "./dsfr-extensions.css";

export const metadata: Metadata = {
  title: "Formulaire DA - Document d'Architecture",
  description: "Formulaire pour créer des Documents d'Architecture (DA)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-fr-scheme="system" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=document.documentElement.getAttribute('data-fr-scheme');if(s==='system'){var d=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.setAttribute('data-fr-theme',d?'dark':'light');window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',function(e){document.documentElement.setAttribute('data-fr-theme',e.matches?'dark':'light')})}})()`,
          }}
        />
      </head>
      <body>
        <HeaderWithAuth />
        {children}

        <Script src="/dsfr/dsfr.module.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
