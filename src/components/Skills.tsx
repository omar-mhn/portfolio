"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const SKILL_DATA = {
  backend: [
    { name: "Java", level: 90 },
    { name: "Spring Boot", level: 88 },
    { name: "JPA / Hibernate", level: 82 },
    { name: "Spring Security", level: 80 },
    { name: "JWT Auth", level: 85 },
    { name: "REST APIs", level: 90 },
    { name: "Architecture MVC", level: 85 },
  ],
  mobile: [
    { name: "Kotlin", level: 85 },
    { name: "Android Studio", level: 87 },
    { name: "Retrofit", level: 80 },
    { name: "ViewModel / LiveData", level: 78 },
    { name: "Fragments", level: 82 },
  ],
  database: [
    { name: "MySQL", level: 85 },
    { name: "PostgreSQL", level: 80 },
    { name: "SQL", level: 88 },
  ],
  devops: [
    { name: "Docker", level: 72 },
    { name: "Git / GitHub", level: 88 },
  ],
  other: [
    { name: "Python", level: 70 },
    { name: "Machine Learning", level: 55 },
    { name: "IoT", level: 65 },
  ],
};

type Category = keyof typeof SKILL_DATA;

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-body text-white/70 group-hover:text-white transition-colors duration-200">
          {name}
        </span>
        <span className="text-xs font-mono text-muted group-hover:text-accent transition-colors duration-200">
          {level}%
        </span>
      </div>
      <div className="h-px bg-border overflow-hidden rounded-full">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
          className="h-full bg-gradient-to-r from-accent/60 to-accent"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState<Category>("backend");

  const categories = Object.keys(SKILL_DATA) as Category[];
  const catLabels = t.skills.categories as Record<Category, string>;

  return (
    <section id="skills" className="py-24 lg:py-36 bg-surface/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-accent font-mono text-xs">—</span>
              <span className="text-xs font-mono uppercase tracking-widest text-muted">
                {t.skills.label}
              </span>
            </div>
            <h2
              className="font-display font-bold leading-tight whitespace-pre-line"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              {t.skills.title}
            </h2>
          </motion.div>
        </div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-widest rounded border transition-all duration-200 ${
                active === cat
                  ? "border-accent text-accent bg-accent/5"
                  : "border-border text-muted hover:border-white/20 hover:text-white"
              }`}
            >
              {catLabels[cat]}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-x-16 gap-y-4 max-w-3xl"
        >
          {SKILL_DATA[active].map((skill, i) => (
            <SkillBar key={skill.name} {...skill} delay={i * 0.08} />
          ))}
        </motion.div>

        {/* Tech badges — all at once */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 pt-12 border-t border-border"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-muted mb-6">
            Full stack
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Java", "Spring Boot", "Kotlin", "Android", "Python",
              "MySQL", "PostgreSQL", "Docker", "Git", "REST", "JWT",
              "JPA", "MVC", "Retrofit", "IoT", "ML"
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-mono border border-border text-muted hover:border-accent/40 hover:text-accent/80 transition-all duration-200 rounded cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
