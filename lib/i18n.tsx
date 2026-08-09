"use client";

/*
 * Centralised EN string store for every user-facing string on the site.
 * (French translations removed — replaced with Hemanth Ande's English content)
 */

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "fr";

type Entry = { en: string; fr: string };

export const DICT: Record<string, Entry> = {
  /* ---------------- nav ---------------- */
  "nav.home": { en: "Home", fr: "Home" },
  "nav.about": { en: "About", fr: "About" },
  "nav.work": { en: "Work", fr: "Work" },
  "nav.experience": { en: "Experience", fr: "Experience" },
  "nav.contact": { en: "Contact", fr: "Contact" },
  "nav.menu": { en: "Open menu", fr: "Open menu" },
  "nav.close": { en: "Close menu", fr: "Close menu" },

  /* ---------------- intro ---------------- */
  "intro.scroll": { en: "Scroll to enter", fr: "Scroll to enter" },

  /* ---------------- hero ---------------- */
  "hero.kicker": {
    en: "AI & Full Stack Developer",
    fr: "AI & Full Stack Developer",
  },
  "hero.h1a": { en: "Engineering the Future", fr: "Engineering the Future" },
  "hero.h1aEm": { en: "with AI.", fr: "with AI." },
  "hero.h1b": { en: "Built for", fr: "Built for" },
  "hero.h1bEm": { en: "impact.", fr: "impact." },
  "hero.sub": {
    en: "I craft intelligent, scalable, and beautifully designed digital experiences — bridging cutting-edge AI research and robust full-stack engineering.",
    fr: "I craft intelligent, scalable, and beautifully designed digital experiences — bridging cutting-edge AI research and robust full-stack engineering.",
  },
  "hero.cta1": { en: "View My Work", fr: "View My Work" },
  "hero.cta2": { en: "Download Resume", fr: "Download Resume" },
  "hero.scroll": { en: "Scroll to Explore", fr: "Scroll to Explore" },
  "stat.projects": { en: "Live Projects", fr: "Live Projects" },
  "stat.years": { en: "Years Building", fr: "Years Building" },
  "stat.countries": { en: "Students Served", fr: "Students Served" },
  "stat.satisfaction": { en: "Admin Load Cut", fr: "Admin Load Cut" },

  /* ---------------- about ---------------- */
  "about.eyebrow": { en: "About", fr: "About" },
  "about.h2a": { en: "Code is how I think —", fr: "Code is how I think —" },
  "about.h2b": { en: "AI is how I", fr: "AI is how I" },
  "about.h2Em": { en: "shape", fr: "shape" },
  "about.h2c": { en: " it.", fr: " it." },
  "about.m1": {
    en: "IIT Guwahati — Deep Learning Research",
    fr: "IIT Guwahati — Deep Learning Research",
  },
  "about.m2": {
    en: "Years of full-stack & AI development",
    fr: "Years of full-stack & AI development",
  },
  "about.m3": {
    en: "Students served by live platform",
    fr: "Students served by live platform",
  },
  "about.m4": {
    en: "Admin workload reduction at DRK Institutions",
    fr: "Admin workload reduction at DRK Institutions",
  },
  "about.edu": {
    en: "B.Tech CSE (AI & ML) · DRK Group of Institutions · JNTUH Affiliated · 2022–2026",
    fr: "B.Tech CSE (AI & ML) · DRK Group of Institutions · JNTUH Affiliated · 2022–2026",
  },
  "about.cta": { en: "Explore My Work", fr: "Explore My Work" },

  /* ---------------- journey ---------------- */
  "journey.eyebrow": { en: "My Journey", fr: "My Journey" },
  "journey.enter": { en: "Scroll to travel", fr: "Scroll to travel" },
  "journey.chapter": { en: "Chapter", fr: "Chapter" },
  "journey.lede": {
    en: "From Hyderabad to IIT Guwahati and HAL — the chapters that turned a CS student into a full-stack AI engineer.",
    fr: "From Hyderabad to IIT Guwahati and HAL — the chapters that turned a CS student into a full-stack AI engineer.",
  },

  /* ---------------- design stack ---------------- */
  "stack.eyebrow": { en: "Toolkit", fr: "Toolkit" },
  "stack.h2": { en: "My Tech", fr: "My Tech" },
  "stack.h2Em": { en: "Stack.", fr: "Stack." },
  "stack.lede": {
    en: "The tools I use to research, architect, build and deploy — from AI model training to production-ready full-stack applications.",
    fr: "The tools I use to research, architect, build and deploy — from AI model training to production-ready full-stack applications.",
  },
  "stack.count": { en: "tools", fr: "tools" },
  "stack.disciplines": { en: "disciplines", fr: "disciplines" },

  /* ---------------- work ---------------- */
  "work.eyebrow": { en: "Featured Work", fr: "Featured Work" },
  "work.h2a": { en: "Selected projects,", fr: "Selected projects," },
  "work.h2b": { en: "built to", fr: "built to" },
  "work.h2Em": { en: "ship.", fr: "ship." },
  "work.lede": {
    en: "Full-stack platforms, AI systems, mobile apps and network security tools — each project a real-world deployment, all one practice.",
    fr: "Full-stack platforms, AI systems, mobile apps and network security tools — each project a real-world deployment, all one practice.",
  },
  "work.open": { en: "Open case study", fr: "Open case study" },
  "work.hint": { en: "SCROLL TO BROWSE", fr: "SCROLL TO BROWSE" },

  /* ---------------- experience ---------------- */
  "exp.eyebrow": { en: "Experience", fr: "Experience" },
  "exp.h2": { en: "Where I built my", fr: "Where I built my" },
  "exp.h2Em": { en: "craft.", fr: "craft." },
  "exp.worked": { en: "What I worked on", fr: "What I worked on" },
  "exp.impact": { en: "Impact", fr: "Impact" },
  "exp.tools": { en: "Tools & skills", fr: "Tools & skills" },
  "exp.hint": { en: "SCROLL · CLICK TO JUMP", fr: "SCROLL · CLICK TO JUMP" },
  "type.Internship": { en: "Internship", fr: "Internship" },
  "type.Full-time": { en: "Full-time", fr: "Full-time" },
  "type.Hackathon": { en: "Hackathon", fr: "Hackathon" },
  "type.Freelance": { en: "Freelance", fr: "Freelance" },

  /* ---------------- credentials ---------------- */
  "cert.introLabel": { en: "Introduction", fr: "Introduction" },
  "cert.introTitle1": { en: "VERIFIED", fr: "VERIFIED" },
  "cert.introTitle2": { en: "CREDENTIALS", fr: "CREDENTIALS" },
  "cert.introBody": {
    en: "Continuous, applied learning across AI, deep learning, network security and full-stack development — validated through real-world deployments.",
    fr: "Continuous, applied learning across AI, deep learning, network security and full-stack development — validated through real-world deployments.",
  },
  "cert.introNote": {
    en: "Three validated internships · IIT Guwahati, HAL, DRK Institutions.",
    fr: "Three validated internships · IIT Guwahati, HAL, DRK Institutions.",
  },
  "cert.eyebrow": { en: "Credentials", fr: "Credentials" },
  "cert.h2": { en: "Credentials", fr: "Credentials" },
  "cert.lede": {
    en: "Professional credentials and internship validations earned through real-world engineering and AI research.",
    fr: "Professional credentials and internship validations earned through real-world engineering and AI research.",
  },
  "cert.certified": { en: "Certified", fr: "Certified" },
  "cert.brandRole": { en: "AI & Full Stack Developer", fr: "AI & Full Stack Developer" },
  "cert.issuerTBC": { en: "Issuer — to confirm", fr: "Issuer — to confirm" },
  "cert.certification": { en: "Certification", fr: "Certification" },
  "cert.verified": { en: "✓ Verified", fr: "✓ Verified" },
  "cert.onRequest": { en: "Credential on request", fr: "Credential on request" },
  "cert.issuedBy": { en: "Issued by", fr: "Issued by" },
  "cert.year": { en: "Year", fr: "Year" },
  "cert.id": { en: "Credential ID", fr: "Credential ID" },
  "cert.tbc": { en: "To confirm", fr: "To confirm" },
  "cert.skills": { en: "Skills", fr: "Skills" },
  "cert.verify": { en: "Verify credential ↗", fr: "Verify credential ↗" },
  "cert.foot": { en: "Credentials", fr: "Credentials" },

  /* ---------------- gallery — the people behind the work ---------------- */
  "gallery.eyebrow": { en: "The Archive", fr: "The Archive" },
  "gallery.h2a": { en: "The moments behind", fr: "The moments behind" },
  "gallery.h2Em": { en: "the work", fr: "the work" },
  "gallery.lede": {
    en: "The places, people and experiences that shaped the engineering behind the screen.",
    fr: "The places, people and experiences that shaped the engineering behind the screen.",
  },
  "gallery.alt": {
    en: "A moment in Hemanth's journey",
    fr: "A moment in Hemanth's journey",
  },
  "gallery.frames": { en: "Frames", fr: "Frames" },
  "gallery.hint": { en: "Scroll to travel the archive", fr: "Scroll to travel the archive" },

  /* ---------------- connect ---------------- */
  "connect.eyebrow": { en: "Let's Connect", fr: "Let's Connect" },
  "connect.h2a": { en: "Let's build what's", fr: "Let's build what's" },
  "connect.h2Em": { en: "next.", fr: "next." },
  "connect.lede": {
    en: "I'm open to full-stack and AI opportunities, collaborations and good conversations — if you're building something technically ambitious, I'd love to hear about it.",
    fr: "I'm open to full-stack and AI opportunities, collaborations and good conversations — if you're building something technically ambitious, I'd love to hear about it.",
  },
  "connect.cta": { en: "Say Hello", fr: "Say Hello" },
  "connect.credit": { en: "Designed & Developed by", fr: "Designed & Developed by" },
  "connect.top": { en: "Back to top ↑", fr: "Back to top ↑" },

  /* ---------------- case study (/work/[slug]) ---------------- */
  "case.back": { en: "← Back to work", fr: "← Back to work" },
  "case.kicker": { en: "Case Study", fr: "Case Study" },
  "case.role": { en: "Role", fr: "Role" },
  "case.timeline": { en: "Timeline", fr: "Timeline" },
  "case.focus": { en: "Focus", fr: "Focus" },
  "case.site": { en: "Live product", fr: "Live product" },
  "case.repo": { en: "Source", fr: "Source" },
  "case.cover": { en: "COVER", fr: "COVER" },
  "case.context": { en: "Context", fr: "Context" },
  "case.problem": { en: "The Problem", fr: "The Problem" },
  "case.process": { en: "Process", fr: "Process" },
  "case.decisions": { en: "Design Decisions", fr: "Design Decisions" },
  "case.outcome": { en: "Outcome", fr: "Outcome" },
  "case.reflection": { en: "Reflection", fr: "Reflection" },
  "case.all": { en: "← All projects", fr: "← All projects" },
  "case.next": { en: "Next project", fr: "Next project" },

  /* ---------------- lab (/tunnel) ---------------- */
  "lab.back": { en: "← PORTFOLIO", fr: "← PORTFOLIO" },
  "lab.hint": {
    en: "LAB · TUNNEL TYPE — SCROLL TO TRAVEL · MOVE THE MOUSE",
    fr: "LAB · TUNNEL TYPE — SCROLL TO TRAVEL · MOVE THE MOUSE",
  },

  /* ---------------- 404 ---------------- */
  "nf.label": { en: "404 — NOT FOUND", fr: "404 — NOT FOUND" },
  "nf.h1": { en: "This page went", fr: "This page went" },
  "nf.h1Em": { en: "off the grid.", fr: "off the grid." },
  "nf.cta": { en: "Back to the portfolio →", fr: "Back to the portfolio →" },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string };

const LanguageContext = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  t: (k) => DICT[k]?.en ?? k,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("lang") as Lang | null;
    if (saved === "en") {
      setLangState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem("lang", l);
    } catch {
      /* private mode — the choice simply won't persist */
    }
    document.documentElement.lang = l;
  };

  const t = (k: string) => DICT[k]?.["en"] ?? k;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);

/** Pick a translated field off a content record: `L(lang, item, "summary")`
 *  returns the English original. */
export function L<T extends { fr?: Record<string, unknown> }>(
  lang: Lang,
  item: T,
  field: keyof T & string
): string {
  return item[field] as unknown as string;
}
