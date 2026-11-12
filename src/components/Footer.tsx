"use client";

import { useI18n } from "@/lib/i18n";
import { Github, Linkedin, Mail } from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-6">
          <div>
            <p className="font-display font-semibold text-sm text-white mb-1">
              OM<span className="text-accent">.</span>
            </p>
            <p className="text-xs font-mono text-muted">
              © {year} Omar Mehenni. {t.footer.rights}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:omar.mehenni@outlook.com"
              className="text-muted hover:text-accent transition-colors duration-200 p-2"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/omar-mehenni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors duration-200 p-2"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://github.com/omar-mhn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors duration-200 p-2"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
          </div>
        </div>

        <div className="border-t border-border/40 pt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <a
            href={`${BASE}/aviso-legal/`}
            className="text-xs font-mono text-muted hover:text-accent transition-colors duration-200"
          >
            {t.footer.legal}
          </a>
          <a
            href={`${BASE}/privacidad/`}
            className="text-xs font-mono text-muted hover:text-accent transition-colors duration-200"
          >
            {t.footer.privacy}
          </a>
          <a
            href={`${BASE}/condiciones/`}
            className="text-xs font-mono text-muted hover:text-accent transition-colors duration-200"
          >
            {t.footer.terms}
          </a>
        </div>
      </div>
    </footer>
  );
}
