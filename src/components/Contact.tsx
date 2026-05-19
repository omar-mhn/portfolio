"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle } from "lucide-react";

// ============================================================
// EMAILJS CONFIGURATION — À REMPLIR APRÈS AVOIR CRÉÉ TON COMPTE
// 1. Crée un compte sur https://www.emailjs.com
// 2. Crée un service email (Gmail, Outlook, etc.)
// 3. Crée un template email
// 4. Remplace les valeurs ci-dessous par tes vraies clés
// ============================================================
// import emailjs from "@emailjs/browser";
// const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
// const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
// const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

type FormState = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const { t } = useI18n();
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  function validate() {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Valid email required";
    if (!form.subject.trim()) e.subject = "Required";
    if (!form.message.trim() || form.message.length < 10)
      e.message = "At least 10 characters";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setFormState("sending");

    // ============================================================
    // DÉCOMMENTER CE BLOC APRÈS AVOIR CONFIGURÉ EMAILJS
    // ============================================================
    // try {
    //   await emailjs.send(
    //     EMAILJS_SERVICE_ID,
    //     EMAILJS_TEMPLATE_ID,
    //     {
    //       from_name: form.name,
    //       from_email: form.email,
    //       subject: form.subject,
    //       message: form.message,
    //     },
    //     EMAILJS_PUBLIC_KEY
    //   );
    //   setFormState("success");
    //   setForm({ name: "", email: "", subject: "", message: "" });
    // } catch {
    //   setFormState("error");
    // }
    // ============================================================

    // SIMULATION (à retirer quand EmailJS est configuré)
    setTimeout(() => {
      setFormState("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setFormState("idle"), 4000);
    }, 1500);
  }

  const fieldClass = (field: keyof typeof form) =>
    `w-full bg-surface border rounded px-4 py-3 text-sm text-white placeholder-muted font-body outline-none transition-all duration-200 focus:border-accent/60 ${
      errors[field] ? "border-red-500/60" : "border-border hover:border-white/20"
    }`;

  return (
    <section id="contact" className="py-24 lg:py-36 bg-surface/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
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

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder={t.contact.form.name}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={fieldClass("name")}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1 font-mono">{errors.name}</p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder={t.contact.form.email}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={fieldClass("email")}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1 font-mono">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <input
                  type="text"
                  placeholder={t.contact.form.subject}
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className={fieldClass("subject")}
                />
                {errors.subject && (
                  <p className="text-xs text-red-400 mt-1 font-mono">{errors.subject}</p>
                )}
              </div>

              <div>
                <textarea
                  rows={6}
                  placeholder={t.contact.form.message}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${fieldClass("message")} resize-none`}
                />
                {errors.message && (
                  <p className="text-xs text-red-400 mt-1 font-mono">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={formState === "sending"}
                className="group w-full flex items-center justify-center gap-3 py-3.5 bg-accent text-background font-display font-semibold text-sm uppercase tracking-widest rounded hover:bg-accent/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
              >
                {formState === "sending" ? (
                  <>
                    <div className="w-4 h-4 border-2 border-background/40 border-t-background rounded-full animate-spin" />
                    {t.contact.form.sending}
                  </>
                ) : (
                  <>
                    <Send size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    {t.contact.form.send}
                  </>
                )}
              </button>

              {/* Status messages */}
              {formState === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 border border-green-500/30 bg-green-500/5 rounded text-green-400 text-sm font-mono"
                >
                  <CheckCircle size={16} />
                  {t.contact.form.success}
                </motion.div>
              )}

              {formState === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 border border-red-500/30 bg-red-500/5 rounded text-red-400 text-sm font-mono"
                >
                  <AlertCircle size={16} />
                  {t.contact.form.error}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
