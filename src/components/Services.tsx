"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Globe, Smartphone, Server, Brain, Wrench } from "lucide-react";

const icons = [Globe, Smartphone, Server, Brain, Wrench];

export default function Services() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-14 lg:py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-accent font-mono text-xs">—</span>
            <span className="text-xs font-mono uppercase tracking-widest text-muted">
              {t.services.label}
            </span>
          </div>
          <h2
            className="font-display font-bold leading-tight whitespace-pre-line"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            {t.services.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.services.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="group flex flex-col border border-border rounded-lg p-6 bg-surface/40 hover:border-accent/30 hover:bg-surface/70 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 border border-border rounded group-hover:border-accent/30 transition-colors">
                    <Icon size={18} className="text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-semibold text-white text-base leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-white/60 leading-relaxed mb-5 flex-1">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded border border-border text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={scrollToContact}
                  className="text-xs font-mono uppercase tracking-widest text-accent border border-accent/40 rounded px-4 py-2 hover:bg-accent/10 transition-colors duration-200 self-start"
                >
                  {t.services.cta}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
