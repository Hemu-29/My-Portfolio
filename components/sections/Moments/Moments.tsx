"use client";

/*
 * MOMENTS — "More than just design." (DriftWall as the engine benchmark.)
 *
 * Kept from the reference: the perspective-tilted wall (rotateX/rotateY),
 * columns drifting vertically at individually varied speeds, seamless wrap
 * (each column's content rendered twice, offset wrapped at half height),
 * edge fades, dimmed tiles that clarify on hover, pointer parallax.
 * Rebuilt as DOM tiles in our design system, with a story lightbox —
 * these are memories, not stock photos, so every tile carries a caption
 * and a chapter of the journey.
 */

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap, EASE, prefersReducedMotion } from "@/lib/gsap";
import { MOMENTS, type Moment } from "@/content/moments";
import styles from "./Moments.module.css";
import { useLang, L } from "@/lib/i18n";

const COLS = 4;
const BASE_SPEED = 14; /* px/s — calm */
const VARIANCE = 0.5;

/* deal moments into columns, round-robin */
const columns: Moment[][] = Array.from({ length: COLS }, () => []);
MOMENTS.forEach((m, i) => columns[i % COLS].push(m));

export default function Moments() {
  const root = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<number | null>(null);
  const { t, lang } = useLang();

  /* ---------- drift engine ---------- */
  useEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;

    const colEls = gsap.utils.toArray<HTMLElement>(`.${styles.colInner}`);
    const speeds = colEls.map(
      (_, i) =>
        BASE_SPEED *
        (1 + (i % 2 === 0 ? 1 : -1) * VARIANCE * ((i + 1) / colEls.length)) *
        (i % 2 === 0 ? 1 : 0.82)
    );
    const offsets = colEls.map(() => 0);
    const halves = colEls.map((c) => Math.max(1, c.scrollHeight / 2));

    const measure = () => {
      colEls.forEach((c, i) => (halves[i] = Math.max(1, c.scrollHeight / 2)));
    };
    const ro = new ResizeObserver(measure);
    ro.observe(el);

    const tick = (_t: number, dt: number) => {
      const f = Math.min(dt / 1000, 0.05);
      colEls.forEach((c, i) => {
        offsets[i] = (offsets[i] + speeds[i] * f) % halves[i];
        c.style.transform = `translate3d(0, ${(-offsets[i]).toFixed(2)}px, 0)`;
      });
    };

    let running = false;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running) {
          gsap.ticker.add(tick);
          running = true;
        } else if (!entry.isIntersecting && running) {
          gsap.ticker.remove(tick);
          running = false;
        }
      },
      { rootMargin: "100px" }
    );
    io.observe(el);

    /* pointer parallax on the whole wall */
    const wall = el.querySelector<HTMLElement>(`.${styles.wall}`);
    let px: ReturnType<typeof gsap.quickTo> | null = null;
    let py: ReturnType<typeof gsap.quickTo> | null = null;
    if (wall) {
      px = gsap.quickTo(wall, "x", { duration: 1.2, ease: "power3.out" });
      py = gsap.quickTo(wall, "y", { duration: 1.2, ease: "power3.out" });
    }
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const cx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      const cy = ((e.clientY - r.top) / r.height - 0.5) * 2;
      px?.(cx * 18);
      py?.(cy * 12);
    };
    el.addEventListener("pointermove", onMove);

    gsap.from(`.${styles.head} > *`, {
      y: 36,
      autoAlpha: 0,
      duration: 0.9,
      ease: EASE.outExpo,
      stagger: 0.09,
      scrollTrigger: { trigger: el, start: "top 72%" },
    });

    return () => {
      if (running) gsap.ticker.remove(tick);
      io.disconnect();
      ro.disconnect();
      el.removeEventListener("pointermove", onMove);
    };
  }, []);

  /* ---------- lightbox ---------- */
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setOpen((cur) => (cur === null ? cur : (cur + dir + MOMENTS.length) % MOMENTS.length)),
    []
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  const current = open !== null ? MOMENTS[open] : null;

  return (
    <section className={styles.moments} id="moments" ref={root}>
      <div className={styles.head}>
        <p className={styles.eyebrow}>
          <span>07</span> {t("moments.eyebrow")}
        </p>
        <h2 className={styles.h2}>
          {t("moments.h2")} <em className={styles.serif}>{t("moments.h2Em")}</em>
        </h2>
        <p className={styles.lede}>
          {t("moments.lede")}
        </p>
      </div>

      <div className={styles.wallView}>
        <div className={styles.wall}>
          {columns.map((col, ci) => (
            <div className={styles.col} key={ci}>
              <div className={styles.colInner}>
                {[...col, ...col].map((m, i) => (
                  <button
                    key={`${m.id}-${i}`}
                    type="button"
                    className={`${styles.tile} ${m.tall ? styles.tall : ""}`}
                    onClick={() => setOpen(MOMENTS.indexOf(m))}
                    tabIndex={i < col.length ? 0 : -1}
                    aria-hidden={i >= col.length}
                  >
                    {m.src ? (
                      <img src={m.src} alt={L(lang, m, "title")} loading="lazy" />
                    ) : (
                      <span className={styles.ph}>▢</span>
                    )}
                    <span className={styles.cap}>
                      <b>{L(lang, m, "title")}</b>
                      <i>{L(lang, m, "date")}</i>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.fade} aria-hidden="true" />
      </div>

      {/* ---------- lightbox ---------- */}
      {current && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={L(lang, current, "title")}
        >
          <button
            className={styles.lbBackdrop}
            onClick={close}
            aria-label={t("moments.close")}
          />
          <div className={styles.lbCard}>
            <button className={styles.lbClose} onClick={close} aria-label={t("moments.close")}>
              ✕
            </button>
            <div className={styles.lbMedia}>
              {current.src ? (
                <img src={current.src} alt={L(lang, current, "title")} />
              ) : (
                <span>{t("moments.soon")}</span>
              )}
            </div>
            <div className={styles.lbBody}>
              <p className={styles.lbContext}>
                {L(lang, current, "context")} · <span>{L(lang, current, "date")}</span>
              </p>
              <h3>{L(lang, current, "title")}</h3>
              <p className={styles.lbStory}>{L(lang, current, "story")}</p>
              <div className={styles.lbNav}>
                <button type="button" onClick={() => step(-1)}>
                  {t("moments.prev")}
                </button>
                <span>
                  {(open ?? 0) + 1} / {MOMENTS.length}
                </span>
                <button type="button" onClick={() => step(1)}>
                  {t("moments.next")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
