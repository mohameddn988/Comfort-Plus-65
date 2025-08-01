import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { organizationSchema } from "@/lib/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
      title: 'Soins et services pour personnes âgées de 65 ans&+',
    description: "Confort Plus 65 offre des services de soins de qualité à domicile dans la grande région de Montréal. Soins personnalisés, aide à domicile et accompagnement pour les personnes âgées de 65 ans et plus.",
  keywords: "soins à domicile, aide aux personnes âgées, services pour seniors, soins personnalisés, Montréal, aide domestique, accompagnement personnes âgées",
      authors: [{ name: "Confort Plus 65" }],
    creator: "Confort Plus 65",
    publisher: "Confort Plus 65",
  robots: "index, follow",
  alternates: {
    canonical: "https://confortplus65.com"
  },
  openGraph: {
    type: "website",
    url: "https://confortplus65.com",
    title: "Soins et services pour personnes âgées de 65 ans&+",
    description: "Services de soins à domicile personnalisés pour les personnes âgées de 65 ans et plus dans la grande région de Montréal.",
    siteName: "Confort Plus 65",
    images: [{
      url: "/Logo.svg",
      width: 800,
      height: 600,
      alt: "Confort Plus 65 Logo"
    }],
    locale: "fr_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soins et services pour personnes âgées de 65 ans&+",
    description: "Services de soins à domicile personnalisés pour les personnes âgées de 65 ans et plus dans la grande région de Montréal.",
    images: ["/Logo.svg"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#10b981", // emerald-600
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
