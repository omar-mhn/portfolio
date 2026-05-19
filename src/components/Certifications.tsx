"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Award, Clock } from "lucide-react";

export default function Certifications() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const certs = t.certifications.list as Array<{
    title: string;
    issuer: string;
    status: "ongoing" | "completed";
  }>;

  return (
    <section id="certifications" className="py-24 lg:py-36" ref={ref}>
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
              {t.certifications.label}
            </span>
          </div>
          <h2
            className="font-display font-bold leading-tight whitespace-pre-line"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            {t.certifications.title}
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`group relative border rounded-lg p-6 transition-all duration-300 hover:border-accent/30 ${
                cert.status === "ongoing"
                  ? "border-accent/20 bg-accent/3"
                  : "border-border bg-surface/20"
              }`}
            >
              {/* Top bar */}
              <div className="flex items-start justify-between mb-6">
                <div
                  className={`p-2 rounded border ${
                    cert.status === "ongoing"
                      ? "border-accent/30 bg-accent/10"
                      : "border-border bg-surface"
                  }`}
                >
                  {cert.status === "ongoing" ? (
                    <Clock size={16} className="text-accent" />
                  ) : (
                    <Award size={16} className="text-accent" />
                  )}
                </div>

                <span
                  className={`text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded border ${
                    cert.status === "ongoing"
                      ? "border-accent/30 text-accent bg-accent/5"
                      : "border-border text-muted"
                  }`}
                >
                  {cert.status === "ongoing"
                    ? t.certifications.status_ongoing
                    : t.certifications.status_completed}
                </span>
              </div>

              <h3 className="font-display font-semibold text-white text-base leading-snug mb-2 group-hover:text-accent transition-colors duration-200">
                {cert.title}
              </h3>
              <p className="text-xs font-mono text-muted">{cert.issuer}</p>

              {/* Corner accent for ongoing */}
              {cert.status === "ongoing" && (
                <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden rounded-tr-lg">
                  <div className="absolute top-0 right-0 w-full h-px bg-accent/40" />
                  <div className="absolute top-0 right-0 h-full w-px bg-accent/40" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
