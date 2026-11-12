"use client";

import { useState, useEffect } from "react";
import { I18nContext, type Locale, getTranslations } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LegalPageWrapper({ children }: { children: React.ReactNode }) {
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
      <div className="bg-background min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-24 pb-16 max-w-3xl mx-auto w-full px-6 lg:px-12">
          {children}
        </main>
        <Footer />
      </div>
    </I18nContext.Provider>
  );
}
