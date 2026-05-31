"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 lg:py-36 bg-surface/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-accent font-mono text-xs">—</span>
              <span className="text-xs font-mono uppercase tracking-widest text-muted">
                {t.contact.label}
              </span>
            </div>
            <h2
              className="font-display font-bold leading-tight whitespace-pre-line mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              {t.contact.title}
            </h2>
            <p className="text-white/60 leading-relaxed mb-10">{t.contact.subtitle}</p>

            {/* Direct links */}
            <div className="space-y-3">
              <a
                href="mailto:omar.mehenni@outlook.com"
                className="group flex items-center gap-4 p-4 border border-border rounded hover:border-accent/30 transition-all duration-200"
              >
                <div className="p-2 border border-border rounded group-hover:border-accent/30 transition-colors">
                  <Mail size={16} className="text-muted group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted uppercase tracking-widest mb-0.5">
                    {t.contact.links.email}
                  </p>
                  <p className="text-sm text-white/80">omar.mehenni@outlook.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/omar-mehenni"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 border border-border rounded hover:border-accent/30 transition-all duration-200"
              >
                <div className="p-2 border border-border rounded group-hover:border-accent/30 transition-colors">
                  <Linkedin size={16} className="text-muted group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted uppercase tracking-widest mb-0.5">
                    {t.contact.links.linkedin}
                  </p>
                  <p className="text-sm text-white/80">linkedin.com/in/omar-mehenni</p>
                </div>
              </a>

              <a
                href="https://github.com/omar-mhn"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 border border-border rounded hover:border-accent/30 transition-all duration-200"
              >
                <div className="p-2 border border-border rounded group-hover:border-accent/30 transition-colors">
                  <Github size={16} className="text-muted group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted uppercase tracking-widest mb-0.5">
                    {t.contact.links.github}
                  </p>
                  <p className="text-sm text-white/80">github.com/omar-mhn</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
