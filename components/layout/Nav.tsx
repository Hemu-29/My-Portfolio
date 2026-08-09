"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useLang } from "@/lib/i18n";
import styles from "./Nav.module.css";

const LINKS = [
  { key: "nav.home", href: "#home", watch: null },
  { key: "nav.about", href: "#about", watch: "about" },
  { key: "nav.work", href: "#work", watch: "work" },
  { key: "nav.experience", href: "#experience", watch: "experience" },
  { key: "nav.contact", href: "#contact", watch: "contact" },
];

export default function Nav() {
  const ref = useRef<HTMLElement>(null);
  const { t } = useLang();
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  /* close on Escape, and lock the page behind the open drawer */
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  /* never leave the drawer open behind a resize to desktop */
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 901px)");
    const close = () => mq.matches && setMenuOpen(false);
    mq.addEventListener("change", close);
    return () => mq.removeEventListener("change", close);
  }, []);

  useEffect(() => {
    const nav = ref.current;
    if (!nav) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: "top top-=40",
        onUpdate: (self) => {
          nav.classList.toggle(styles.scrolled, self.scroll() > 40);
        },
        onLeaveBack: () => nav.classList.remove(styles.scrolled),
      });

      const spies = LINKS.filter((l) => l.watch).map((l) =>
        ScrollTrigger.create({
          trigger: `#${l.watch}`,
          start: "top 55%",
          end: "bottom 45%",
          onToggle: (self) => {
            if (self.isActive) setActive(l.watch);
          },
        })
      );
      const top = ScrollTrigger.create({
        start: 0,
        end: () => window.innerHeight * 1.2,
        onToggle: (self) => {
          if (self.isActive) setActive(null);
        },
      });

      return () => {
        spies.forEach((s) => s.kill());
        top.kill();
      };
    }, nav);

    return () => ctx.revert();
  }, []);

  return (
    <header className={styles.wrap} ref={ref}>
      <div className={styles.cap}>
        <a href="#home" className={styles.logo} aria-label={t("nav.home")}>
          HEMANTH <i>ANDE</i>
        </a>

        <nav className={styles.links} aria-label="Primary">
          {LINKS.map((l) => {
            const isOn = l.watch === active;
            return (
              <a
                key={l.key}
                href={l.href}
                className={isOn ? styles.on : ""}
                aria-current={isOn ? "page" : undefined}
              >
                <span className={styles.roll}>
                  <span>{t(l.key)}</span>
                  <span aria-hidden="true">{t(l.key)}</span>
                </span>
              </a>
            );
          })}
        </nav>

        <div className={styles.right}>
          <button
            type="button"
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
            aria-label={menuOpen ? t("nav.close") : t("nav.menu")}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* ---------- mobile drawer ---------- */}
      <div
        className={`${styles.sheet} ${menuOpen ? styles.sheetOpen : ""}`}
        id="mobile-nav"
        hidden={!menuOpen}
      >
        <nav aria-label="Primary mobile">
          {LINKS.map((l) => (
            <a
              key={l.key}
              href={l.href}
              className={l.watch === active ? styles.sheetOn : ""}
              aria-current={l.watch === active ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {t(l.key)}
            </a>
          ))}
        </nav>
      </div>
      <button
        type="button"
        className={`${styles.scrim} ${menuOpen ? styles.scrimOn : ""}`}
        aria-label={t("nav.close")}
        tabIndex={menuOpen ? 0 : -1}
        onClick={() => setMenuOpen(false)}
      />
    </header>
  );
}
