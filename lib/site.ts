/* Single source of truth for site-wide constants.
   Set NEXT_PUBLIC_SITE_URL in Vercel once the domain exists —
   everything (sitemap, robots, OG, JSON-LD) follows automatically. */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === "production" ? "/My-Portfolio" : "");

export function assetPath(path?: string | null): string {
  if (!path) return "";
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:")
  )
    return path;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}

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
