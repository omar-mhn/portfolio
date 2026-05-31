"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { MapPin, CalendarDays, ExternalLink } from "lucide-react";

export default function Experience() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const tasks = t.experience.admira.tasks as string[];
  const highlights = t.experience.admira.highlights as string[];

  return (
    <section id="experience" className="py-24 lg:py-32 bg-surface/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-accent font-mono text-xs">—</span>
            <span className="text-xs font-mono uppercase tracking-widest text-muted">
              {t.experience.label}
            </span>
          </div>
          <h2
            className="font-display font-bold leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            {t.experience.title}
          </h2>
        </motion.div>

        {/* Experience card — prominent */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="border border-border hover:border-accent/25 transition-colors duration-300 rounded-lg overflow-hidden"
        >
          {/* Top bar */}
          <div className="bg-surface px-8 py-5 flex flex-wrap items-center justify-between gap-4 border-b border-border">
            <div className="flex items-center gap-4">
              {/* Company badge */}
              <div className="w-10 h-10 rounded border border-border bg-background flex items-center justify-center shrink-0">
                <span className="text-accent font-mono font-bold text-sm">A</span>
              </div>
              <div>
                <p className="font-display font-semibold text-white">{t.experience.admira.company}</p>
                <p className="text-xs font-mono text-muted">{t.experience.admira.role}</p>
              </div>
            </div>

            {/* Completed badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 border border-white/20 rounded bg-white/5">
              <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <span className="text-xs font-mono text-white/50 uppercase tracking-wider">
                {t.experience.present}
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="p-8">
            {/* Meta row */}
            <div className="flex flex-wrap gap-6 mb-8 pb-6 border-b border-border/50">
              <div className="flex items-center gap-2 text-xs font-mono text-muted">
                <CalendarDays size={13} className="text-accent/60" />
                {t.experience.admira.period}
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-muted">
                <MapPin size={13} className="text-accent/60" />
                {t.experience.admira.location}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* Missions */}
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-muted mb-5">
                  {t.experience.missions_label}
                </p>
                <ul className="space-y-4">
                  {tasks.map((task, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-accent text-xs mt-0.5 shrink-0 font-mono">0{i + 1}</span>
                      <span className="text-sm text-white/70 leading-relaxed">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech / Key results */}
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-muted mb-5">
                  {t.experience.highlights_label}
                </p>
                <ul className="space-y-3">
                  {highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 p-3 border border-border/50 rounded hover:border-accent/20 transition-colors duration-200 bg-surface/30">
                      <span className="text-accent shrink-0 mt-0.5">›</span>
                      <span className="text-sm text-white/60 leading-snug">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Open to work banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 p-6 border border-accent/20 rounded-lg bg-accent/3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse shrink-0" />
            <p className="text-sm font-body text-white/70">
              <span className="font-semibold text-white">{t.experience.open_to_work} </span>
              {t.experience.open_to_work_desc}
            </p>
          </div>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent hover:text-white border border-accent/30 hover:border-accent/60 px-4 py-2 rounded transition-all duration-200 shrink-0"
          >
            {t.experience.contact_me}
            <ExternalLink size={11} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
