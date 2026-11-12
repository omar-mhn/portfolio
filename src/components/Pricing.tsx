"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export default function Pricing() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-14 lg:py-20 bg-surface/30" ref={ref}>
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
              {t.pricing.label}
            </span>
          </div>
          <h2
            className="font-display font-bold leading-tight whitespace-pre-line"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            {t.pricing.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {t.pricing.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className={`flex flex-col border rounded-lg p-6 ${
                i === 0
                  ? "border-accent/40 bg-accent/5"
                  : "border-border bg-surface/40"
              }`}
            >
              <p className="text-xs font-mono uppercase tracking-widest text-muted mb-1">
                {item.type}
              </p>
              <p
                className="font-display font-bold text-white mb-2"
                style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)" }}
              >
                {item.price}
              </p>
              <p className="text-xs font-mono text-accent mb-3">{item.detail}</p>
              <p className="text-sm text-white/60 leading-relaxed flex-1">
                {item.scope}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <p className="text-xs font-mono text-muted max-w-xl">
            * {t.pricing.note}
          </p>
          <button
            onClick={scrollToContact}
            className="shrink-0 flex items-center gap-2 px-5 py-2.5 bg-accent text-background font-display font-semibold text-xs uppercase tracking-widest hover:bg-accent/90 transition-colors duration-200 rounded"
          >
            {t.pricing.cta}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
