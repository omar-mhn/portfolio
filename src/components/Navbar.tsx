"use client";

import { useState, useEffect } from "react";
import { useI18n } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import { Download, Menu, X } from "lucide-react";

const sections = ["about", "skills", "projects", "experience", "certifications", "contact"] as const;

export default function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display font-semibold text-sm tracking-widest uppercase text-white hover:text-accent transition-colors duration-200"
        >
          OM<span className="text-accent">.</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className="text-xs font-mono uppercase tracking-widest text-muted hover:text-white transition-colors duration-200"
            >
              {t.nav[s as keyof typeof t.nav]}
            </button>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/cv/Omar_Mehenni_CV.pdf`}
            download="Omar_Mehenni_CV.pdf"
            className="flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-widest border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-200 rounded"
          >
            <Download size={12} />
            {t.nav.downloadCV}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-muted hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            {sections.map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className="text-left text-sm font-mono uppercase tracking-widest text-white hover:text-accent transition-colors duration-200 py-2 border-b border-border/40"
              >
                {t.nav[s as keyof typeof t.nav]}
              </button>
            ))}
            <div className="flex items-center justify-between pt-2">
              <LanguageSwitcher />
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/cv/Omar_Mehenni_CV.pdf`}
                download="Omar_Mehenni_CV.pdf"
                className="flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-widest border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-200 rounded"
              >
                <Download size={12} />
                CV
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
