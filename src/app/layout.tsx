import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omar Mehenni — Full-Stack Developer",
  description:
    "Full-Stack Developer specialized in backend Java/Spring Boot and Android Kotlin. Building scalable REST APIs, robust mobile apps, and complete web solutions.",
  keywords: [
    "Omar Mehenni",
    "Full-Stack Developer",
    "Java",
    "Spring Boot",
    "Android",
    "Kotlin",
    "Backend Developer",
    "Barcelona",
  ],
  authors: [{ name: "Omar Mehenni" }],
  openGraph: {
    title: "Omar Mehenni — Full-Stack Developer",
    description:
      "Backend Java/Spring Boot & Android/Kotlin developer based in Barcelona.",
    url: "https://omar-mehenni.vercel.app",
    siteName: "Omar Mehenni Portfolio",
    locale: "en_US",
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
    <html lang="en" suppressHydrationWarning>
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
