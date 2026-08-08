"use client";

import { useLang } from "@/lib/i18n";
import styles from "./LanguageToggle.module.css";

/* EN | FR — lives inside the existing header, far right.
   A sliding indicator moves between the two; switching is pure React state,
   so scroll position and the active section are preserved. */
export default function LanguageToggle() {
  const { lang, setLang } = useLang();

  return (
    <div className={styles.toggle} role="group" aria-label="Language">
      <span
        className={styles.thumb}
        style={{ transform: `translateX(${lang === "fr" ? "100%" : "0%"})` }}
        aria-hidden="true"
      />
      {(["en", "fr"] as const).map((l) => (
        <button
          key={l}
          type="button"
          className={`${styles.opt} ${lang === l ? styles.on : ""}`}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          lang={l}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
