/* Single source of truth for site-wide constants.
   Set NEXT_PUBLIC_SITE_URL in Vercel once the domain exists —
   everything (sitemap, robots, OG, JSON-LD) follows automatically. */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const PERSON = {
  name: "Hemanth Ande",
  jobTitle: "AI & Full Stack Developer",
  email: "andehemanth24@gmail.com",
  location: "Hyderabad, India",
  /* exact profile URLs — also consumed by JSON-LD */
  sameAs: [
    "https://www.linkedin.com/in/hemanth-ande-0265a2330/",
    "https://github.com/Hemu-29",
  ],
};
