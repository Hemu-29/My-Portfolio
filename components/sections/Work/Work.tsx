"use client";

/*
 * Featured Work — the curved project track (02_UX_AND_INTERACTIONS.md §3.3).
 * Desktop: the section pins and vertical scroll scrubs the cards along a
 * perspective arc — center card frontal, neighbours rotate away and recede.
 * Touch / reduced motion: a native horizontal snap row, same cards.
 */

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion, EASE } from "@/lib/gsap";
import { PROJECTS } from "@/content/projects";
import styles from "./Work.module.css";
import { useLang, L } from "@/lib/i18n";

const SPREAD = 330; /* px between card centers on the arc */
const PIN_PER_CARD = 340; /* scroll px per card step */

export default function Work() {
  const root = useRef<HTMLElement>(null);
  const { t, lang } = useLang();

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1101px) and (prefers-reduced-motion: no-preference)", () => {
      const cards = gsap.utils.toArray<HTMLElement>(`.${styles.card}`);
      const counter = el.querySelector<HTMLElement>(`.${styles.count}`);
      const dots = gsap.utils.toArray<HTMLElement>(`.${styles.dot}`);
      const n = cards.length;

      const render = (p: number) => {
        cards.forEach((card, i) => {
          const d = i - p;
          const ad = Math.abs(d);
          gsap.set(card, {
            x: d * SPREAD,
            y: Math.min(ad * ad * 9, 110),
            rotationY: gsap.utils.clamp(-34, 34, -d * 10),
            scale: 1 - Math.min(ad * 0.065, 0.38),
            autoAlpha: 1 - Math.min(ad * 0.17, 0.78),
            zIndex: Math.round(100 - ad * 10),
          });
        });
        const active = Math.round(gsap.utils.clamp(0, n - 1, p));
        if (counter) counter.textContent = `0${active + 1} / 0${n}`;
        dots.forEach((dot, i) => dot.classList.toggle(styles.dotOn, i === active));
      };

      render(0);

      const st = ScrollTrigger.create({
        trigger: el,
        start: "top top",
        end: `+=${n * PIN_PER_CARD}`,
        pin: true,
        scrub: 0.65,
        onUpdate: (self) => render(self.progress * (n - 1)),
      });

      /* header reveal, once, on pin start */
      gsap.from(`.${styles.header} > *`, {
        y: 40,
        autoAlpha: 0,
        duration: 0.9,
        ease: EASE.outExpo,
        stagger: 0.09,
        scrollTrigger: { trigger: el, start: "top 70%" },
      });

      return () => st.kill();
    });

    /* touch & reduced motion: reveal cards as the row enters */
    mm.add("(max-width: 1100px), (prefers-reduced-motion: reduce)", () => {
      if (prefersReducedMotion()) return;
      gsap.from(`.${styles.card}`, {
        y: 40,
        autoAlpha: 0,
        duration: 0.9,
        ease: EASE.outExpo,
        stagger: 0.07,
        scrollTrigger: { trigger: el, start: "top 75%" },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section className={styles.work} id="work" ref={root}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>
          <span>04</span> {t("work.eyebrow")}
        </p>
        <div className={styles.headRow}>
          <h2 className={styles.h2}>
            {t("work.h2a")}
            <br />
            {t("work.h2b")} <em className={styles.serif}>{t("work.h2Em")}</em>
          </h2>
          <p className={styles.lede}>
            {t("work.lede")}
          </p>
        </div>
      </div>

      <div className={styles.stage}>
        <div className={styles.track}>
          {PROJECTS.map((p, i) => (
            <article className={styles.card} key={p.slug} style={{ zIndex: 100 - i }}>
              <a className={styles.inner} href={`/work/${p.slug}`}>
                <div className={styles.cover}>
                  <span>▢&nbsp;&nbsp;{p.coverLabel}</span>
                  {p.award && <span className={styles.award}>{p.award}</span>}
                </div>
                <div className={styles.meta}>
                  <h3>{L(lang, p, "title")}</h3>
                  <p className={styles.tags}>
                    {(p.fr && lang === "fr" ? p.fr.tags ?? p.tags : p.tags)
                      .join(" · ")
                      .toUpperCase()}
                  </p>
                  <div className={styles.metaFoot}>
                    <span className={styles.year}>{p.year}</span>
                    <span className={styles.open}>
                      {t("work.open")} <i>→</i>
                    </span>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.foot}>
        <span className={styles.count}>01 / 0{PROJECTS.length}</span>
        <div className={styles.dots}>
          {PROJECTS.map((p, i) => (
            <span key={p.slug} className={`${styles.dot} ${i === 0 ? styles.dotOn : ""}`} />
          ))}
        </div>
        <span className={styles.hint}>{t("work.hint")}</span>
      </div>
    </section>
  );
}
