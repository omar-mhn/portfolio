"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: "radioisotopo",
    title: "RadioIsótopo",
    description:
      "Medical telemetry platform for real-time patient monitoring. Smartwatch integration, vital data conversion to HL7 FHIR standard, clinical logic engine for anomaly detection and alert generation.",
    stack: ["Java", "Spring Boot", "JPA", "Spring Security", "JWT", "Kotlin", "Android", "Retrofit", "MySQL", "REST"],
    role: "Backend + Android Developer",
    type: "type_backend",
    github: "#",
    featured: true,
  },
  {
    id: "ecommerce",
    title: "E-Commerce API",
    description:
      "Complete REST API for e-commerce with JWT authentication, product management, shopping cart and payment integration.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Docker", "JWT"],
    role: "Backend Developer",
    type: "type_api",
    github: "#",
    featured: false,
  },
  {
    id: "taskmanager",
    title: "Task Manager App",
    description:
      "Android task management app with cloud synchronization and push notifications. Spring Boot backend with REST API.",
    stack: ["Kotlin", "Android Studio", "Retrofit", "Spring Boot", "ViewModel"],
    role: "Full-Stack Developer",
    type: "type_mobile",
    github: "#",
    featured: false,
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description:
      "This portfolio — a modern web project built around a backend-first development philosophy. i18n in 4 languages.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    role: "Developer",
    type: "type_web",
    github: "#",
    featured: false,
  },
];

function ProjectImage({ title, featured }: { title: string; featured: boolean }) {
  return (
    <div
      className={`relative overflow-hidden bg-surface border-b border-border flex items-center justify-center ${
        featured ? "h-52" : "h-36"
      }`}
    >
      {/* Placeholder grid */}
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 rounded border border-border mx-auto mb-2 flex items-center justify-center">
            <div className="w-4 h-4 bg-accent/20 rounded-sm" />
          </div>
          <p className="text-xs font-mono text-muted">screenshot pending</p>
        </div>
      </div>

      {/* Accent corner */}
      <div className="absolute top-0 left-0 w-12 h-12">
        <div className="absolute top-0 left-0 w-full h-px bg-accent/40" />
        <div className="absolute top-0 left-0 h-full w-px bg-accent/40" />
      </div>
    </div>
  );
}

export default function Projects() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="projects" className="py-24 lg:py-36" ref={ref}>
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
              {t.projects.label}
            </span>
          </div>
          <h2
            className="font-display font-bold leading-tight whitespace-pre-line"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            {t.projects.title}
          </h2>
        </motion.div>

        {/* Featured project — full width */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8"
        >
          <div className="group grid lg:grid-cols-2 border border-border hover:border-accent/30 transition-all duration-300 rounded-lg overflow-hidden bg-surface/20">
            <div className="relative">
              <ProjectImage title={PROJECTS[0].title} featured />
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest border border-accent/40 text-accent rounded bg-background/80">
                  Featured
                </span>
              </div>
            </div>

            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display font-bold text-2xl text-white group-hover:text-accent transition-colors duration-200">
                    {PROJECTS[0].title}
                  </h3>
                  <a
                    href={PROJECTS[0].github}
                    className="text-muted hover:text-white transition-colors p-1"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                </div>

                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  {PROJECTS[0].description}
                </p>

                <p className="text-xs font-mono text-muted mb-2">Role</p>
                <p className="text-sm text-accent/80 font-mono mb-6">{PROJECTS[0].role}</p>

                <div className="flex flex-wrap gap-1.5">
                  {PROJECTS[0].stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] font-mono border border-border text-muted rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                <span className="text-xs font-mono text-muted uppercase tracking-widest">
                  {t.projects[PROJECTS[0].type as keyof typeof t.projects] ?? PROJECTS[0].type}
                </span>
                <a
                  href={PROJECTS[0].github}
                  className="flex items-center gap-1.5 text-xs font-mono text-muted hover:text-accent transition-colors duration-200"
                >
                  {t.projects.github}
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other projects — asymmetric grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {PROJECTS.slice(1).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              className={`group border border-border hover:border-accent/30 transition-all duration-300 rounded-lg overflow-hidden bg-surface/20 flex flex-col ${
                i === 1 ? "md:mt-8" : i === 2 ? "md:-mt-4" : ""
              }`}
            >
              <ProjectImage title={project.title} featured={false} />

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display font-semibold text-lg text-white group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </h3>
                  <a
                    href={project.github}
                    className="text-muted hover:text-white transition-colors p-0.5"
                    aria-label="GitHub"
                  >
                    <Github size={14} />
                  </a>
                </div>

                <p className="text-xs text-white/50 leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-1.5 py-0.5 text-[10px] font-mono border border-border text-muted rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono text-muted">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>

                <div className="pt-3 border-t border-border flex items-center justify-between">
                  <span className="text-[10px] font-mono text-muted uppercase tracking-widest">
                    {t.projects[project.type as keyof typeof t.projects] ?? project.type}
                  </span>
                  <ExternalLink size={12} className="text-muted group-hover:text-accent transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
