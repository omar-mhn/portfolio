"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const VALUE_ICONS: Record<string, string> = {
  "0": "◈",
  "1": "◎",
  "2": "◇",
  "3": "△",
};

export default function About() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const values = t.about.values as Array<{ title: string; desc: string }>;
  const languages = t.about.languages as Array<{ name: string; level: string }>;

  return (
    <section id="about" className="py-24 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Label + headline */}
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-accent font-mono text-xs">—</span>
              <span className="text-xs font-mono uppercase tracking-widest text-muted">
                {t.about.label}
              </span>
            </div>
            <h2
              className="font-display font-bold leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              {t.about.title}
            </h2>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              {t.about.bio}
            </p>
          </motion.div>

          {/* Languages — compact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <p className="text-xs font-mono uppercase tracking-widest text-muted mb-4">
              {t.about.languages_label}
            </p>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center gap-2 px-3 py-2 border border-border rounded bg-surface/40 hover:border-accent/30 transition-colors duration-200"
                >
                  <span className="text-sm text-white/80 font-body">{lang.name}</span>
                  <span className="text-xs font-mono text-accent">{lang.level}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Value props — what I bring */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden">
          {values.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="bg-background p-6 hover:bg-surface/60 transition-colors duration-200 group"
            >
              <div className="text-2xl text-accent/40 group-hover:text-accent mb-4 transition-colors duration-200 font-mono select-none">
                {VALUE_ICONS[String(i)]}
              </div>
              <h3 className="font-display font-semibold text-white text-sm mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
