"use client";

import { useState, useEffect } from "react";
import { I18nContext, type Locale, getTranslations } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("es");
  const t = getTranslations(locale);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("locale") as Locale | null;
      if (saved && ["en", "es", "fr", "ca"].includes(saved)) setLocale(saved);
    } catch {}
  }, []);

  const handleSetLocale = (l: Locale) => {
    setLocale(l);
    try { localStorage.setItem("locale", l); } catch {}
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
      <main className="bg-background min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </I18nContext.Provider>
  );
}
