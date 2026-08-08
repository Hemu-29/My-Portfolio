"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import LanguageToggle from "./LanguageToggle";
import { useLang } from "@/lib/i18n";
import styles from "./Nav.module.css";

/* `#home` resolves to the very top of the document (see lib/lenis.ts), so
   Home always returns to the true beginning of the portfolio. */
const LINKS = [
  { key: "nav.home", href: "#home", watch: null },
  { key: "nav.about", href: "#about", watch: "about" },
  { key: "nav.work", href: "#work", watch: "work" },
  { key: "nav.contact", href: "#contact", watch: "contact" },
];

export default function Nav() {
  const ref = useRef<HTMLElement>(null);
  const { t } = useLang();
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const nav = ref.current;
    if (!nav) return;

    const ctx = gsap.context(() => {
      /* The header is PERSISTENT: it never hides. It only condenses slightly
         once the page has been scrolled, which keeps it feeling part of the
         page rather than a floating panel. */
      ScrollTrigger.create({
        start: "top top-=40",
        onUpdate: (self) => {
          nav.classList.toggle(styles.scrolled, self.scroll() > 40);
        },
        onLeaveBack: () => nav.classList.remove(styles.scrolled),
      });

      /* scroll-spy: the nav reflects where you actually are, and falls back
         to Home whenever you are near the top of the document */
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
          GIREESH<i>.</i>
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
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
