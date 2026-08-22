"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { getLenis } from "@/lib/lenis";
import { sceneScrub } from "@/lib/scene";
import { ROLES } from "@/content/experience";
import { assetPath } from "@/lib/site";
import styles from "./Experience.module.css";
import { useLang, L } from "@/lib/i18n";

export default function Experience() {
  const root = useRef<HTMLElement>(null);
  const { t, lang } = useLang();
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressPct, setProgressPct] = useState(0);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 901px) and (prefers-reduced-motion: no-preference)", () => {
      const n = ROLES.length;

      const st = ScrollTrigger.create({
        ...sceneScrub(el),
        scrub: 0.5,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const p = self.progress;
          setProgressPct(p * 100);
          const active = Math.min(n - 1, Math.floor(p * n));
          setActiveIndex(active);
        },
      });

      return () => st.kill();
    });

    return () => mm.revert();
  }, []);

  const jumpToNode = (idx: number) => {
    setActiveIndex(idx);
    const el = root.current;
    if (!el) return;

    const st = ScrollTrigger.getAll().find((s) => s.trigger === el);
    if (st) {
      const n = ROLES.length;
      const targetP = (idx + 0.5) / n;
      const targetY = st.start + targetP * (st.end - st.start);
      const lenis = getLenis();
      if (lenis) lenis.scrollTo(targetY, { duration: 0.8 });
      else window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  };

  return (
    <section className={styles.experience} id="experience" ref={root}>
      <div className={styles.container}>
        {/* Section Header */}
        <header className={styles.header}>
          <p className={styles.eyebrow}>
            <span>05</span> {t("exp.eyebrow")}
          </p>
          <h2 className={styles.h2}>
            {t("exp.h2")} <em className={styles.serif}>{t("exp.h2Em")}</em>
          </h2>
        </header>

        {/* 3 Compact Experience Cards Grid (ALL 3 VISIBLE AT START) */}
        <div className={styles.cardsGrid}>
          {ROLES.map((r, i) => {
            const isActive = activeIndex === i;
            const achievements =
              lang === "fr" && r.fr?.achievements
                ? r.fr.achievements
                : r.achievements;
            // Select top 2 core achievements for compact single-screen fit
            const topHighlights = achievements.slice(0, 2);
            // Select top 4 core skills
            const topSkills = r.skills.slice(0, 4);

            return (
              <article
                key={r.company}
                className={`${styles.roleCard} ${isActive ? styles.cardActive : styles.cardInactive}`}
                onClick={() => jumpToNode(i)}
              >
                {/* Header Row with Logo Tile */}
                <div className={styles.cardHeader}>
                  <div className={styles.companyGroup}>
                    {r.logo ? (
                      <div className={styles.logoTile}>
                        <img
                          src={assetPath(r.logo.src)}
                          alt={`${r.company} logo`}
                        />
                      </div>
                    ) : (
                      <div className={styles.logoTileMono}>
                        {r.company.charAt(0)}
                      </div>
                    )}

                    <div className={styles.titlesWrap}>
                      <h3 className={styles.companyTitle}>{r.company}</h3>
                      <p className={styles.roleTitle}>{L(lang, r, "role")}</p>
                    </div>
                  </div>

                  <div className={styles.badgeRow}>
                    <span className={styles.typeBadge}>
                      {t(`type.${r.type}`)}
                    </span>
                    <span className={styles.periodPill}>{r.period}</span>
                  </div>
                </div>

                {/* Key Highlights List */}
                <div className={styles.achievementsWrap}>
                  <ul className={styles.achievementsList}>
                    {topHighlights.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Impact / Outcome Box */}
                <div className={styles.outcomeBox}>
                  <span className={styles.impactStar}>✦</span>
                  <p>{L(lang, r, "outcome")}</p>
                </div>

                {/* Skills & Tools */}
                <div className={styles.skillsWrap}>
                  <div className={styles.skillsList}>
                    {topSkills.map((s) => (
                      <span key={s} className={styles.skillChip}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Horizontal Timeline Bar — PLACED BELOW THE 3 CARDS */}
        <div className={styles.timelineWrap}>
          <div className={styles.timelineTrack}>
            <div
              className={styles.timelineFill}
              style={{ width: `${progressPct}%` }}
            />
          </div>

          <div className={styles.nodesRow}>
            {ROLES.map((r, i) => {
              const isActive = activeIndex === i;
              const shortName =
                r.company.includes("DRK")
                  ? "DRK Institutions"
                  : r.company.includes("Hindustan")
                  ? "HAL Security"
                  : "IIT Guwahati";

              return (
                <button
                  key={r.company}
                  type="button"
                  className={`${styles.nodeBtn} ${isActive ? styles.nodeActive : ""}`}
                  onClick={() => jumpToNode(i)}
                >
                  <div className={styles.nodePoint}>
                    <span className={styles.nodeNum}>0{i + 1}</span>
                  </div>
                  <div className={styles.nodeInfo}>
                    <span className={styles.nodeName}>{shortName}</span>
                    <span className={styles.nodePeriod}>{r.period}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer Navigation Controls */}
        <footer className={styles.foot}>
          <span className={styles.count}>
            0{activeIndex + 1} / 0{ROLES.length}
          </span>
          <div className={styles.stepDots}>
            {ROLES.map((r, i) => (
              <span
                key={r.company}
                className={`${styles.dot} ${activeIndex === i ? styles.dotOn : ""}`}
                onClick={() => jumpToNode(i)}
              />
            ))}
          </div>
          <span className={styles.hint}>{t("exp.hint")}</span>
        </footer>
      </div>
    </section>
  );
}
