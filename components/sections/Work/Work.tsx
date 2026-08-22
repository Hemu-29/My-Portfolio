"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { PROJECTS } from "@/content/projects";
import { assetPath } from "@/lib/site";
import styles from "./Work.module.css";
import { useLang, L } from "@/lib/i18n";

export default function Work() {
  const router = useRouter();
  const { t, lang } = useLang();

  return (
    <section className={styles.work} id="work">
      <div className={styles.container}>
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
            <p className={styles.lede}>{t("work.lede")}</p>
          </div>
        </div>

        {/* Static Grid of Original Card Template */}
        <div className={styles.grid}>
          {PROJECTS.map((p) => (
            <article
              className={styles.card}
              key={p.slug}
              onClick={() => router.push(`/work/${p.slug}`)}
            >
              <Link className={styles.inner} href={`/work/${p.slug}`}>
                <div
                  className={styles.cover}
                  style={
                    p.cover
                      ? {
                          background: p.cover.bg,
                          color:
                            p.cover.ink === "light"
                              ? "#fff"
                              : "var(--ink)",
                        }
                      : undefined
                  }
                >
                  {p.cover?.src && p.cover.variant === "photo" ? (
                    <img
                      className={styles.coverPhoto}
                      src={assetPath(p.cover.src)}
                      alt={p.coverLabel}
                      style={
                        p.cover.focus
                          ? { objectPosition: p.cover.focus }
                          : undefined
                      }
                      loading="lazy"
                    />
                  ) : p.cover?.src ? (
                    <img
                      className={styles.coverBrand}
                      src={assetPath(p.cover.src)}
                      alt={p.coverLabel}
                      style={{ aspectRatio: p.cover.aspect ?? 1 }}
                      loading="lazy"
                    />
                  ) : p.cover?.mark ? (
                    <span className={styles.coverMark} aria-label={p.coverLabel}>
                      {p.cover.mark}
                    </span>
                  ) : (
                    <span>▢&nbsp;&nbsp;{p.coverLabel}</span>
                  )}
                  {p.award && <span className={styles.award}>{p.award}</span>}
                </div>

                <div className={styles.meta}>
                  <h3>{L(lang, p, "title")}</h3>
                  <p className={styles.contribution}>{L(lang, p, "contribution")}</p>
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
              </Link>

              {(p.site || p.repo) && (
                <a
                  className={styles.siteChip}
                  href={p.site ? p.site.url : p.repo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${p.site ? p.site.label : "GitHub"} ↗`}
                  onClick={(e) => e.stopPropagation()}
                >
                  {p.site ? p.site.label : "GitHub"} <i aria-hidden="true">↗</i>
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
