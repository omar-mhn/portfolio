"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const SKILL_DATA = {
  backend: [
    "Java", "Spring Boot", "JPA / Hibernate", "Spring Security",
    "JWT Auth", "REST APIs", "Architecture MVC","Maven / Gradle"
  ],
  mobile: [
    "Kotlin", "Android Studio","Jetpack Compose", "MVVM Architecture",
     "Retrofit","ViewModel / LiveData","Coroutines"
  ],
  database: ["MySQL", "PostgreSQL", "SQL","Firebase Firestore", "MongoDB"],
  devops: ["Docker", "Git / GitHub"],
  other: ["Python", "Machine Learning", "IoT"],
};

type Category = keyof typeof SKILL_DATA;

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

        {/* Skills badges */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap gap-3"
        >
          {SKILL_DATA[active].map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="px-4 py-2 text-sm font-mono border border-border text-white/70 hover:border-accent/50 hover:text-accent transition-all duration-200 rounded bg-surface/40 cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
