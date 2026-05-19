"use client";

import { useState } from "react";
import { I18nContext, type Locale, getTranslations } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const t = getTranslations(locale);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      <main className="bg-background min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </I18nContext.Provider>
  );
}
