"use client";

import { createContext, useContext } from "react";
import en from "@/locales/en.json";
import fr from "@/locales/fr.json";
import es from "@/locales/es.json";
import ca from "@/locales/ca.json";

export type Locale = "en" | "fr" | "es" | "ca";

export const locales: { code: Locale; label: string; flag: string }[] = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "fr", label: "FR", flag: "🇫🇷" },
  { code: "es", label: "ES", flag: "🇪🇸" },
  { code: "ca", label: "CA", flag: "🏴󠁥󠁳󠁣󠁴󠁿" },
];

const translations: Record<Locale, typeof en> = { en, fr, es, ca };

export function getTranslations(locale: Locale) {
  return translations[locale] ?? translations.en;
}

export type I18nContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: typeof en;
};

export const I18nContext = createContext<I18nContextType>({
  locale: "en",
  setLocale: () => {},
  t: en,
});

export function useI18n() {
  return useContext(I18nContext);
}
