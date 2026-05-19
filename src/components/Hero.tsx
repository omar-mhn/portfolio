"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Download, ArrowDown, MapPin } from "lucide-react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

function ScrambleText({ text, delay = 0 }: { text: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let iteration = 0;
    let interval: ReturnType<typeof setInterval>;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        if (!ref.current) return;
        ref.current.innerText = text
          .split("")
          .map((char, idx) => {
            if (idx < iteration) return char;
            if (char === " ") return " ";
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");
        if (iteration >= text.length) clearInterval(interval);
        iteration += 1 / 2;
      }, 30);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay]);

  return <span ref={ref}>{text}</span>;
}

function GeometricLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Diagonal accent line */}
      <svg
        className="absolute top-0 right-0 w-1/2 h-full opacity-10"
        viewBox="0 0 600 900"
        fill="none"
      >
        <line x1="600" y1="0" x2="0" y2="900" stroke="#d4a853" strokeWidth="0.5" />
        <line x1="580" y1="0" x2="0" y2="870" stroke="#d4a853" strokeWidth="0.3" />
        <line x1="540" y1="0" x2="0" y2="810" stroke="#d4a853" strokeWidth="0.2" />
        <circle cx="600" cy="0" r="120" stroke="#d4a853" strokeWidth="0.3" fill="none" />
        <circle cx="600" cy="0" r="200" stroke="#d4a853" strokeWidth="0.2" fill="none" />
        <circle cx="600" cy="0" r="300" stroke="#d4a853" strokeWidth="0.15" fill="none" />
      </svg>

      {/* Corner bracket TL */}
      <svg className="absolute top-24 left-8 opacity-20" width="60" height="60" fill="none">
        <path d="M 0 30 L 0 0 L 30 0" stroke="#d4a853" strokeWidth="1" />
      </svg>

      {/* Corner bracket BR */}
      <svg className="absolute bottom-24 right-8 opacity-20" width="60" height="60" fill="none">
        <path d="M 60 30 L 60 60 L 30 60" stroke="#d4a853" strokeWidth="1" />
      </svg>

      {/* Horizontal rules */}
      <div className="absolute left-0 top-1/3 w-24 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </div>
  );
}

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <GeometricLines />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left column — main content */}
          <div className="lg:col-span-7">
            {/* Location tag */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-8"
            >
              <MapPin size={12} className="text-accent" />
              <span className="text-xs font-mono uppercase tracking-widest text-muted">
                {t.hero.location}
              </span>
              <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse ml-1" />
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-sm font-mono text-muted uppercase tracking-widest mb-3"
            >
              {t.hero.greeting}
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold leading-[0.95] tracking-tight mb-6"
              style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
            >
              <span className="block text-white">Omar</span>
              <span className="block text-accent">Mehenni</span>
            </motion.h1>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-2"
            >
              <h2 className="font-display text-xl lg:text-2xl font-medium text-white/80">
                <ScrambleText text={t.hero.title} delay={600} />
              </h2>
              <p className="font-mono text-sm text-muted mt-1">
                {t.hero.subtitle}
              </p>
            </motion.div>

            {/* Open to work badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.55 }}
              className="inline-flex items-center gap-2 mt-3 px-3 py-1.5 border border-green-500/30 rounded bg-green-500/5"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-mono text-green-400 uppercase tracking-widest">Open to work</span>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "left" }}
              className="h-px w-24 bg-accent/50 my-6"
            />

            {/* Philosophy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-base lg:text-lg text-white/60 leading-relaxed max-w-xl font-body"
            >
              {t.hero.philosophy}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group flex items-center gap-3 px-6 py-3 bg-accent text-background font-display font-semibold text-sm uppercase tracking-widest hover:bg-accent/90 transition-all duration-200 rounded"
              >
                {t.hero.cta_projects}
                <ArrowDown
                  size={14}
                  className="group-hover:translate-y-1 transition-transform duration-200"
                />
              </button>

              <a
                href="/cv/Omar_Mehenni_CV.pdf"
                download
                className="flex items-center gap-3 px-6 py-3 border border-white/20 text-white/70 font-display font-semibold text-sm uppercase tracking-widest hover:border-accent/60 hover:text-accent transition-all duration-200 rounded"
              >
                <Download size={14} />
                {t.hero.cta_cv}
              </a>
            </motion.div>
          </div>

          {/* Right column — decorative stats */}
          <div className="hidden lg:flex lg:col-span-5 justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              {/* Code block decoration */}
              <div className="border border-border rounded-lg overflow-hidden bg-surface/60 backdrop-blur p-6 font-mono text-xs leading-relaxed w-80">
                <div className="flex items-center gap-1.5 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  <span className="ml-2 text-muted text-[10px]">developer.java</span>
                </div>
                <div className="space-y-1.5">
                  <p><span className="text-blue-400">class</span> <span className="text-accent">OmarMehenni</span> {"{"}</p>
                  <p className="pl-4"><span className="text-purple-400">String</span> location = <span className="text-green-400">&quot;Barcelona&quot;</span>;</p>
                  <p className="pl-4"><span className="text-purple-400">String[]</span> stack = {"{"}</p>
                  <p className="pl-8 text-green-400">&quot;Java&quot;, &quot;Spring Boot&quot;,</p>
                  <p className="pl-8 text-green-400">&quot;Kotlin&quot;, &quot;Android&quot;</p>
                  <p className="pl-4">{"}"};</p>
                  <p className="pl-4"><span className="text-purple-400">boolean</span> available = <span className="text-orange-400">true</span>;</p>
                  <p className="mt-2 pl-4 text-muted">// Open to opportunities</p>
                  <p>{"}"}</p>
                </div>
              </div>

              {/* Floating stat cards */}
              <div className="absolute -top-4 -right-4 bg-surface border border-border rounded p-3 shadow-lg">
                <p className="font-display font-bold text-2xl text-accent">4+</p>
                <p className="text-xs text-muted font-mono">Languages spoken</p>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-surface border border-border rounded p-3 shadow-lg">
                <p className="font-display font-bold text-2xl text-accent">IoT</p>
                <p className="text-xs text-muted font-mono">& AI at Admira</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-muted to-transparent" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-muted">scroll</span>
        </motion.div>
      </div>
    </section>
  );
}
