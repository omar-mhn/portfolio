import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://omar-mhn.github.io/portfolio";

export const metadata: Metadata = {
  title: {
    default: "Omar Mehenni — Desarrollador Freelance | Barcelona",
    template: "%s — Omar Mehenni",
  },
  description:
    "Desarrollador freelance en Barcelona especializado en backend Java/Spring Boot, apps Android Kotlin, bases de datos, integración de IA y Docker. Disponible para proyectos.",
  keywords: [
    "Omar Mehenni",
    "desarrollador freelance",
    "backend Java",
    "Spring Boot",
    "Android Kotlin",
    "desarrollo web",
    "Barcelona",
    "autónomo",
  ],
  authors: [{ name: "Omar Mehenni" }],
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: BASE_URL + "/",
    languages: {
      "es-ES": BASE_URL + "/",
      "en": BASE_URL + "/",
    },
  },
  openGraph: {
    title: "Omar Mehenni — Desarrollador Freelance | Barcelona",
    description:
      "Backend Java/Spring Boot & Android/Kotlin developer based in Barcelona. Available for freelance projects.",
    url: BASE_URL + "/",
    siteName: "Omar Mehenni",
    locale: "es_ES",
    alternateLocale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-background text-white antialiased">{children}</body>
    </html>
  );
}
