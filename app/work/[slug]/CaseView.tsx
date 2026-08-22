"use client";

import Link from "next/link";
import { PROJECTS } from "@/content/projects";
import LanguageToggle from "@/components/layout/LanguageToggle";
import { useLang, L } from "@/lib/i18n";
import { assetPath } from "@/lib/site";
import styles from "./case.module.css";

export default function CaseView({ slug }: { slug: string }) {
  const { t, lang } = useLang();

  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return null;

  const fr = lang === "fr" ? project.fr : undefined;
  const study = { ...project.study, ...(fr?.study ?? {}) };
  const tags = fr?.tags ?? project.tags;

  const idx = PROJECTS.indexOf(project);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <main className={styles.page}>
      {/* Glass Top Navigation Bar */}
      <header className={styles.bar}>
        <Link href="/#work" className={styles.backBtn}>
          <span className={styles.backArrow}>←</span>
          <span>{t("case.back")}</span>
        </Link>

        <div className={styles.barRight}>
          <Link href="/" className={styles.logo}>
            HEMANTH<i>.</i>
          </Link>
          <LanguageToggle />
        </div>
      </header>

      <article className={styles.wrap}>
        {/* Hero Section */}
        <header className={styles.hero}>
          <div className={styles.kickerRow}>
            <span className={styles.kicker}>{t("case.kicker")}</span>
            <span className={styles.dotDivider}>·</span>
            <span className={styles.yearBadge}>{project.year}</span>
            {project.award && (
              <>
                <span className={styles.dotDivider}>·</span>
                <span className={styles.awardBadge}>{project.award}</span>
              </>
            )}
          </div>

          <h1 className={styles.title}>{L(lang, project, "title")}</h1>
          <p className={styles.oneLiner}>{L(lang, project, "oneLiner")}</p>

          {/* Quick Metadata Dashboard Grid */}
          <div className={styles.metaGrid}>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>{t("case.role")}</span>
              <span className={styles.metaValue}>{study.role}</span>
            </div>

            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>{t("case.timeline")}</span>
              <span className={styles.metaValue}>{study.timeline}</span>
            </div>

            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>{t("case.focus")}</span>
              <div className={styles.tagWrap}>
                {tags.map((tag) => (
                  <span key={tag} className={styles.miniTag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {(project.site || project.repo) && (
              <div className={styles.metaCard}>
                <span className={styles.metaLabel}>Links & Code</span>
                <div className={styles.linkGroup}>
                  {project.site && (
                    <a
                      className={styles.siteLink}
                      href={project.site.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.site.label} ↗
                    </a>
                  )}
                  {project.repo && (
                    <a
                      className={styles.repoLink}
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub Repo ↗
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Visual Showcase Cover */}
          {project.cover ? (
            <div
              className={styles.coverFrame}
              style={{
                background: project.cover.bg,
                color: project.cover.ink === "light" ? "#fff" : "var(--ink)",
              }}
            >
              {project.cover.src && project.cover.variant === "photo" ? (
                <img
                  className={styles.coverPhoto}
                  src={assetPath(project.cover.src)}
                  alt={project.coverLabel}
                  style={
                    project.cover.focus ? { objectPosition: project.cover.focus } : undefined
                  }
                />
              ) : project.cover.src ? (
                <img
                  className={styles.coverBrand}
                  src={assetPath(project.cover.src)}
                  alt={project.coverLabel}
                  style={{ aspectRatio: project.cover.aspect ?? 1 }}
                />
              ) : (
                <span className={styles.coverMark}>{project.cover.mark}</span>
              )}
            </div>
          ) : (
            <div className={styles.coverFrame}>
              ▢ {project.coverLabel} — {t("case.cover")}
            </div>
          )}
        </header>

        {/* Section 01: Context */}
        <section className={styles.section}>
          <div className={styles.secHeader}>
            <span className={styles.secNum}>01</span>
            <h2 className={styles.secTitle}>{t("case.context")}</h2>
          </div>
          <p className={styles.bodyText}>{study.context}</p>
        </section>

        {/* Section 02: Problem Statement */}
        <section className={styles.section}>
          <div className={styles.secHeader}>
            <span className={styles.secNum}>02</span>
            <h2 className={styles.secTitle}>{t("case.problem")}</h2>
          </div>
          <div className={styles.problemBox}>
            <p className={styles.problemText}>{study.problem}</p>
          </div>
        </section>

        {/* Section 03: Process & Architecture */}
        <section className={styles.section}>
          <div className={styles.secHeader}>
            <span className={styles.secNum}>03</span>
            <h2 className={styles.secTitle}>{t("case.process")}</h2>
          </div>
          <div className={styles.stepsGrid}>
            {study.process.map((s, i) => (
              <div className={styles.stepCard} key={i}>
                <span className={styles.stepBadge}>0{i + 1}</span>
                <div className={styles.stepContent}>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 04: Key Engineering Decisions */}
        <section className={styles.section}>
          <div className={styles.secHeader}>
            <span className={styles.secNum}>04</span>
            <h2 className={styles.secTitle}>{t("case.decisions")}</h2>
          </div>
          <div className={styles.decisionsList}>
            {study.decisions.map((d, i) => (
              <div className={styles.decisionCard} key={i}>
                <div className={styles.decisionHeader}>
                  <span className={styles.decisionTag}>Decision #{i + 1}</span>
                  <h3>{d.title}</h3>
                </div>
                <p className={styles.decisionWhy}>
                  <strong>Rationale:</strong> {d.why}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 05: Measurable Outcomes */}
        <section className={styles.section}>
          <div className={styles.secHeader}>
            <span className={styles.secNum}>05</span>
            <h2 className={styles.secTitle}>{t("case.outcome")}</h2>
          </div>
          <div className={styles.outcomesGrid}>
            {study.outcomes.map((o, i) => (
              <div className={styles.outcomeCard} key={i}>
                <span className={styles.starIcon}>✦</span>
                <p>{o}</p>
              </div>
            ))}
          </div>
          {study.note && <div className={styles.noteBox}>{study.note}</div>}
        </section>

        {/* Section 06: Reflection */}
        <section className={styles.section}>
          <div className={styles.secHeader}>
            <span className={styles.secNum}>06</span>
            <h2 className={styles.secTitle}>{t("case.reflection")}</h2>
          </div>
          <blockquote className={styles.reflectionQuote}>
            &ldquo;{study.reflection}&rdquo;
          </blockquote>
        </section>

        {/* Next Project Footer Bar */}
        <nav className={styles.footNav}>
          <Link href="/#work" className={styles.backAllBtn}>
            {t("case.all")}
          </Link>
          <Link href={`/work/${next.slug}`} className={styles.nextCard}>
            <span className={styles.nextSub}>{t("case.next")}</span>
            <span className={styles.nextTitle}>
              {L(lang, next, "title")} <i>→</i>
            </span>
          </Link>
        </nav>
      </article>
    </main>
  );
}
