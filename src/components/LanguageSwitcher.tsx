"use client";

import { useState, useRef, useEffect } from "react";
import { useI18n, locales, type Locale } from "@/lib/i18n";
import { ChevronDown } from "lucide-react";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = locales.find((l) => l.code === locale)!;

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-border text-sm font-mono text-muted hover:text-accent hover:border-accent/40 transition-all duration-200"
        aria-label="Select language"
      >
        <span>{current.label}</span>
        <ChevronDown
          size={12}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 bg-surface border border-border rounded shadow-xl z-50 overflow-hidden min-w-[80px]">
          {locales.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLocale(l.code as Locale);
                setOpen(false);
              }}
              className={`w-full flex items-center justify-center px-4 py-2.5 text-sm font-mono transition-colors duration-150 ${
                l.code === locale
                  ? "text-accent bg-accent/5"
                  : "text-muted hover:text-white hover:bg-surface-2"
              }`}
            >
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
