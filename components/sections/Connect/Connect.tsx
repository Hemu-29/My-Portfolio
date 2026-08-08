"use client";

/*
 * LET'S CONNECT — the closing chapter (Patta "Let's connect" as the mood
 * reference: curved panel row, floating perspective, calm typography).
 * Our take: five memory panels on a shallow 3D arc that lean with the
 * cursor and breathe on idle; the site-wide Button carries the CTA; social
 * cards use the same circle-fill + roll language as the nav.
 */

import { useEffect, useRef } from "react";
import { gsap, EASE, prefersReducedMotion } from "@/lib/gsap";
import Button from "@/components/ui/Button";
import styles from "./Connect.module.css";
import { useLang } from "@/lib/i18n";

const PANELS = [
  { label: "HACKATHON — 1st PLACE", rotate: 26, z: -110, y: -26 },
  { label: "TEAM · HEEDING", rotate: 13, z: -40, y: -8 },
  { label: "PRESENTING · DEMO DAY", rotate: 0, z: 0, y: 0 },
  { label: "WORKSHOPS · RESEARCH", rotate: -13, z: -40, y: -8 },
  { label: "CONFERENCES · CLIMATE-TECH", rotate: -26, z: -110, y: -26 },
];

const SOCIALS = [
  { name: "LinkedIn", glyph: "in", href: "https://www.linkedin.com/in/gireesh-kumar-reddy-kolli-/" },
  { name: "GitHub", glyph: "gh", href: "https://github.com/gireeshkumarreddy" },
  { name: "Instagram", glyph: "ig", href: "#" },
  { name: "Email", glyph: "@", href: "mailto:kolligireeshkumarreddy0622@gmail.com" },
];

export default function Connect() {
  const root = useRef<HTMLElement>(null);
  const { t } = useLang();

  useEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      /* reveal */
      gsap.from(`.${styles.head} > *`, {
        y: 36,
        autoAlpha: 0,
        duration: 0.9,
        ease: EASE.outExpo,
        stagger: 0.09,
        scrollTrigger: { trigger: el, start: "top 70%" },
      });
      gsap.from(`.${styles.panel}`, {
        y: 90,
        autoAlpha: 0,
        duration: 1.1,
        ease: EASE.outExpo,
        stagger: { each: 0.08, from: "center" },
        scrollTrigger: { trigger: `.${styles.arc}`, start: "top 82%" },
      });
      gsap.from(`.${styles.socials} > *`, {
        y: 26,
        autoAlpha: 0,
        duration: 0.8,
        ease: EASE.outExpo,
        stagger: 0.07,
        scrollTrigger: { trigger: `.${styles.socials}`, start: "top 88%" },
      });

      /* idle float — each panel bobs on its own rhythm */
      gsap.utils.toArray<HTMLElement>(`.${styles.panelInner}`).forEach((p, i) => {
        gsap.to(p, {
          y: `+=${6 + (i % 3) * 3}`,
          duration: 3 + (i % 3) * 0.7,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          delay: i * 0.4,
        });
      });

      /* cursor: the whole arc leans, each panel adds its own micro-tilt */
      const panels = gsap.utils.toArray<HTMLElement>(`.${styles.panel}`);
      const setters = panels.map((p, i) => ({
        rx: gsap.quickTo(p, "rotationX", { duration: 0.9, ease: "power3.out" }),
        add: gsap.quickTo(p, "rotationY", { duration: 0.9, ease: "power3.out" }),
        base: PANELS[i].rotate,
      }));
      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const cx = ((e.clientX - r.left) / r.width - 0.5) * 2;
        const cy = ((e.clientY - r.top) / r.height - 0.5) * 2;
        setters.forEach((s) => {
          s.add(s.base + cx * 5);
          s.rx(-cy * 4);
        });
      };
      const onLeave = () => setters.forEach((s) => {
        s.add(s.base);
        s.rx(0);
      });
      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);

      return () => {
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
      };
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.connect} id="contact" ref={root}>
      <div className={styles.head}>
        <p className={styles.eyebrow}>
          <span>08</span> {t("connect.eyebrow")}
        </p>
        <h2 className={styles.h2}>
          {t("connect.h2a")}{" "}
          <em className={styles.serif}>{t("connect.h2Em")}</em>
        </h2>
        <p className={styles.lede}>
          {t("connect.lede")}
        </p>
        <div className={styles.cta}>
          <Button href="mailto:kolligireeshkumarreddy0622@gmail.com" variant="primary" arrow>
            {t("connect.cta")}
          </Button>
        </div>
      </div>

      {/* curved memory arc */}
      <div className={styles.arc} aria-hidden="true">
        {PANELS.map((p) => (
          <div
            className={styles.panel}
            key={p.label}
            style={
              {
                transform: `translate3d(0, ${p.y}px, ${p.z}px) rotateY(${p.rotate}deg)`,
              } as React.CSSProperties
            }
          >
            <div className={styles.panelInner}>
              <span className={styles.ph}>▢</span>
              <span className={styles.pLabel}>{p.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* social cards */}
      <div className={styles.socials}>
        {SOCIALS.map((s) => (
          <a
            key={s.name}
            href={s.href}
            className={styles.social}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel={s.href.startsWith("http") ? "noreferrer" : undefined}
          >
            <span className={styles.glyph}>{s.glyph}</span>
            <span className={styles.roll}>
              <span>{s.name}</span>
              <span aria-hidden="true">{s.name}</span>
            </span>
            <span className={styles.arrow}>↗</span>
          </a>
        ))}
      </div>

      <footer className={styles.footer}>
        <span>
          {t("connect.credit")} <b>Gireesh</b>
        </span>
        <a href="#home" className={styles.top}>
          {t("connect.top")}
        </a>
        <span>© 2026 Gireesh Kumar Reddy Kolli</span>
      </footer>
    </section>
  );
}
