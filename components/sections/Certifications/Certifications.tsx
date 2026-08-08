"use client";

/*
 * CREDENTIALS — pitch-deck cascade, replicated from the supplied reference.
 *
 * What the reference establishes, and what is reproduced here:
 *   · 16:10 slide panels descending diagonally through the centre on a gentle
 *     S-curve, each rotated 4–14° in alternating directions
 *   · panels overlap so each one's UPPER-LEFT stays exposed — which is exactly
 *     where the reference places its section number and title
 *   · colour rhythm: near-black → white → near-black → VERMILION brand panel
 *     → white → near-black → white, on a warm light-grey ground
 *   · tiny mono section numbers, oversized condensed uppercase titles,
 *     ghosted metric numerals, small right-hand text columns
 *   · a structural INTRODUCTION panel and a brand wordmark panel sit inside
 *     the sequence, as in the reference deck
 *
 * Interaction: scroll drives the cascade. Panels travel down the arc, rotation
 * and scale ease as they move, the centre panel becomes dominant, passed
 * panels exit downward. Text never collides: waiting panels expose only their
 * identity band; full detail renders on the focused panel, which nothing
 * sits in front of.
 */

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, EASE } from "@/lib/gsap";
import { getLenis } from "@/lib/lenis";
import { CERTS } from "@/content/certifications";
import styles from "./Certifications.module.css";
import { useLang, L } from "@/lib/i18n";

const STEP_VH = 0.85;

/* ---------- the movement model ----------
 *   LEFT  →  CENTER  →  UP / RIGHT  →  FADE
 *
 * Every panel slides in from the left, holds the centre as the active
 * credential, then leaves — alternating upward and rightward — while
 * fading. Incoming and outgoing panels move at the same time, so each
 * hand-off reads as one continuous motion rather than two slides.
 * Position is a pure function of scroll, so scrolling back runs the exact
 * same path in reverse. Offsets are percentages of the panel, so the
 * behaviour is identical at every screen size. */
const ENTER_X = -118; /* % of panel width — where a panel waits, off-left */
const EXIT_X = 118; /* % — rightward exit */
const EXIT_Y = -118; /* % of panel height — upward exit */
const ENTER_Z = -170; /* px of depth on approach, flattening to 0 at centre */
const CULL = 1.25; /* beyond this distance the panel is off-stage */
const TILT = 4; /* stage rotateX (unchanged) */

/* per-slot base rotation, alternating like the reference deck */
const ROT = [-9, 6, -4, 8, -6, 5, -7];

type Panel =
  | { kind: "intro" }
  | { kind: "brand" }
  | { kind: "cert"; index: number };

/* dark → white → dark → RED → white → dark → white */
const PANELS: Panel[] = [
  { kind: "intro" },
  { kind: "cert", index: 0 },
  { kind: "cert", index: 1 },
  { kind: "brand" },
  { kind: "cert", index: 2 },
  { kind: "cert", index: 3 },
  { kind: "cert", index: 4 },
];
const TONE = ["dark", "light", "dark", "red", "light", "dark", "light"] as const;

export default function Certifications() {
  const root = useRef<HTMLElement>(null);
  const { t, lang } = useLang();

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1001px) and (prefers-reduced-motion: no-preference)", () => {
      const panels = gsap.utils.toArray<HTMLElement>(`.${styles.panel}`);
      const counter = el.querySelector<HTMLElement>(`.${styles.count}`);
      const n = panels.length;
      let active = -1;

      el.classList.add(styles.deckMode);

      const setActive = (i: number) => {
        if (i === active) return;
        active = i;
        panels.forEach((p, k) => p.classList.toggle(styles.on, k === i));
        if (counter) counter.textContent = `${String(i + 1).padStart(2, "0")} / ${String(n).padStart(2, "0")}`;
      };

      const place = (p: number) => {
        for (let i = 0; i < n; i++) {
          const el2 = panels[i];
          const d = i - p; /* >0 still to come · 0 centred · <0 leaving */

          if (d > CULL || d < -CULL) {
            el2.style.visibility = "hidden";
            continue;
          }
          el2.style.visibility = "visible";

          /* the reference's scattered-slide tilt — static per panel */
          const roll = ROT[i % ROT.length] * 0.25;

          let x = 0;
          let y = 0;
          let z = 0;
          let op = 1;
          let sc = 1;

          if (d >= 0) {
            /* LEFT → CENTER */
            const t = Math.min(d, CULL);
            x = ENTER_X * t;
            z = ENTER_Z * t;
            sc = 1 - 0.05 * t;
            op = 1 - Math.max(0, t - 0.5) / 0.62; /* fades up as it arrives */
          } else {
            /* CENTER → UP or RIGHT, alternating, fading out */
            const t = Math.min(CULL, -d);
            if (i % 2 === 1) y = EXIT_Y * t;
            else x = EXIT_X * t;
            z = -70 * t;
            sc = 1 - 0.04 * t;
            op = 1 - t / 0.85;
          }

          el2.style.transform =
            `translate3d(${x.toFixed(2)}%, ${y.toFixed(2)}%, ${z.toFixed(1)}px)` +
            ` rotate(${roll.toFixed(2)}deg) scale(${sc.toFixed(3)})`;
          el2.style.opacity = String(gsap.utils.clamp(0, 1, op));
          el2.style.filter = "";
          /* the leaving panel rides above the centre one so its exit reads;
             the arriving panel sits behind until it takes the centre */
          el2.style.zIndex = d < 0 ? "210" : String(200 - Math.round(d * 20));
        }
        setActive(Math.round(gsap.utils.clamp(0, n - 1, p)));
      };

      /* scroll → target → interpolation → transforms */
      let target = 0;
      let current = 0;
      const tick = (_t: number, dt: number) => {
        const f = Math.min(dt / 1000, 0.05);
        current += (target - current) * Math.min(f * 9, 1);
        place(current);
      };
      gsap.ticker.add(tick);
      place(0);

      const st = ScrollTrigger.create({
        trigger: el,
        start: "top top",
        end: () => `+=${n * window.innerHeight * STEP_VH}`,
        pin: true,
        scrub: 0.5,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          target = self.progress * (n - 1);
        },
      });

      /* click a panel to travel to it */
      const handlers: Array<[HTMLElement, () => void]> = [];
      panels.forEach((pnl, i) => {
        const h = () => {
          const y = st.start + (i / (n - 1)) * (st.end - st.start);
          const lenis = getLenis();
          if (lenis) lenis.scrollTo(y, { duration: 1 });
          else window.scrollTo({ top: y, behavior: "smooth" });
        };
        pnl.addEventListener("click", h);
        handlers.push([pnl, h]);
      });

      /* very subtle perspective response */
      const stage = el.querySelector<HTMLElement>(`.${styles.stage}`);
      let rx: ReturnType<typeof gsap.quickTo> | null = null;
      let ry: ReturnType<typeof gsap.quickTo> | null = null;
      if (stage) {
        rx = gsap.quickTo(stage, "rotationX", { duration: 1, ease: "power3.out" });
        ry = gsap.quickTo(stage, "rotationY", { duration: 1, ease: "power3.out" });
      }
      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        rx?.(TILT - ((e.clientY - r.top) / r.height - 0.5) * 3.4);
        ry?.(((e.clientX - r.left) / r.width - 0.5) * 3.6);
      };
      el.addEventListener("pointermove", onMove);

      gsap.from(`.${styles.foot} > *`, {
        y: 18,
        autoAlpha: 0,
        duration: 0.8,
        ease: EASE.outExpo,
        stagger: 0.08,
        scrollTrigger: { trigger: el, start: "top 74%" },
      });

      return () => {
        gsap.ticker.remove(tick);
        st.kill();
        el.removeEventListener("pointermove", onMove);
        handlers.forEach(([e2, h]) => e2.removeEventListener("click", h));
        el.classList.remove(styles.deckMode);
      };
    });

    mm.add("(max-width: 1000px), (prefers-reduced-motion: reduce)", () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.utils.toArray<HTMLElement>(`.${styles.panel}`).forEach((p) => {
        gsap.from(p, {
          y: 40,
          autoAlpha: 0,
          duration: 0.85,
          ease: EASE.outExpo,
          scrollTrigger: { trigger: p, start: "top 88%" },
        });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section className={styles.certs} id="certifications" ref={root}>
      {/* No header floats over the panels — as in the reference, the only
          surrounding UI is the deck footer strip below. */}
      <div className={styles.stageWrap}>
        <div className={styles.stage}>
          {PANELS.map((p, i) => {
            const tone = TONE[i];
            const cls = `${styles.panel} ${styles[tone]} ${i === 0 ? styles.on : ""}`;

            if (p.kind === "intro") {
              return (
                <article className={cls} key="intro" style={{ zIndex: 200 - i }}>
                  <div className={styles.band}>
                    <span className={styles.no}>1.1</span>
                    <span className={styles.org}>{t("cert.introLabel")}</span>
                  </div>
                  <h3 className={styles.title}>
                    {t("cert.introTitle1")}
                    <br />
                    {t("cert.introTitle2")}
                  </h3>
                  <div className={styles.detail}>
                    <div className={styles.cols}>
                      <p>{t("cert.introBody")}</p>
                      <p className={styles.muted}>{t("cert.introNote")}</p>
                    </div>
                  </div>
                </article>
              );
            }

            if (p.kind === "brand") {
              return (
                <article className={cls} key="brand" style={{ zIndex: 200 - i }}>
                  <div className={styles.band}>
                    <span className={styles.no}>—</span>
                    <span className={styles.org}>{t("cert.brandRole")}</span>
                  </div>
                  <span className={styles.wordmark}>Gireesh</span>
                  <span className={styles.vert}>CERTIFICATIONS · 2026</span>
                </article>
              );
            }

            const c = CERTS[p.index];
            return (
              <article className={cls} key={c.title} style={{ zIndex: 200 - i }}>
                <div className={styles.band}>
                  <span className={styles.no}>{c.no}</span>
                  {/* issuing organisation — the credibility line */}
                  <span className={styles.issuer}>
                    {c.issuer ? `${c.issuer} · ${t("cert.certification")}` : t("cert.issuerTBC")}
                  </span>
                  <span className={`${styles.status} ${c.verified ? styles.ok : ""}`}>
                    {c.verified ? t("cert.verified") : t("cert.onRequest")}
                  </span>
                </div>

                <h3 className={styles.title}>{L(lang, c, "title")}</h3>

                <div className={styles.detail}>
                  {c.metric && (
                    <div className={styles.metric}>
                      <span className={styles.metricValue}>{c.metric.value}</span>
                      <span className={styles.metricLabel}>
                        {(lang === "fr" && c.fr?.metricLabel) || c.metric.label}
                      </span>
                    </div>
                  )}

                  <div className={styles.cols}>
                    {/* credential record — the fields a real certificate carries */}
                    <dl className={styles.record}>
                      <div>
                        <dt>{t("cert.issuedBy")}</dt>
                        <dd>{c.issuer ?? t("cert.tbc")}</dd>
                      </div>
                      <div>
                        <dt>{t("cert.year")}</dt>
                        <dd>{c.year ?? t("cert.tbc")}</dd>
                      </div>
                      <div>
                        <dt>{t("cert.id")}</dt>
                        <dd>{c.credentialId ?? "—"}</dd>
                      </div>
                    </dl>

                    <p className={styles.colLbl}>{t("cert.skills")}</p>
                    <ul className={styles.skills}>
                      {/* English list stays the key source, so switching
                          language re-labels rows instead of remounting them */}
                      {c.skills.map((s, si) => (
                        <li key={s}>
                          {(lang === "fr" && c.fr?.skills?.[si]) || s}
                        </li>
                      ))}
                    </ul>

                    {c.credentialUrl && (
                      <a
                        className={styles.verifyLink}
                        href={c.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {t("cert.verify")}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className={styles.foot}>
        <span className={styles.brandFoot}>
          <b>06</b> Gireesh
        </span>
        <span className={styles.count}>01 / 07</span>
        <span className={styles.footLbl}>{t("cert.foot")}</span>
      </div>
    </section>
  );
}
