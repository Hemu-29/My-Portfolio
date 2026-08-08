/* My Design Stack — tools shown in the spiral orbit.
   `src` uses a real logo from /public/images/logos when we have one;
   otherwise a brand-tinted monogram mark keeps the set visually uniform.
   To upgrade a monogram: drop an SVG/PNG in that folder and swap in `src`. */

export type Tool = {
  name: string;
  group: "AI" | "Design" | "Build" | "Creative";
  src?: string;
  mono?: string;
  color?: string;
};

export const TOOLS: Tool[] = [
  /* — AI — */
  { name: "Claude", group: "AI", src: "/images/logos/claude.png" },
  { name: "ChatGPT", group: "AI", src: "/images/logos/chatgpt.png" },
  { name: "Gemini", group: "AI", mono: "Gm", color: "#2C6BD8" },
  { name: "Perplexity", group: "AI", mono: "Px", color: "#1F7A86" },

  /* — Design — */
  { name: "Figma", group: "Design", src: "/images/logos/figma.png" },
  { name: "Framer", group: "Design", src: "/images/logos/framer.png" },
  { name: "Spline", group: "Design", src: "/images/logos/spline.png" },
  { name: "Notion", group: "Design", src: "/images/logos/notion.png" },

  /* — Build — */
  { name: "Cursor", group: "Build", mono: "Cu", color: "#141414" },
  { name: "VS Code", group: "Build", mono: "VS", color: "#0065A9" },
  { name: "GitHub", group: "Build", mono: "GH", color: "#181717" },
  { name: "React", group: "Build", mono: "Re", color: "#0E7C99" },
  { name: "Next.js", group: "Build", mono: "N", color: "#141414" },
  { name: "Tailwind", group: "Build", mono: "TW", color: "#0891A6" },
  { name: "HTML", group: "Build", mono: "H5", color: "#D6431C" },
  { name: "CSS", group: "Build", mono: "C3", color: "#1572B6" },

  /* — Creative — */
  { name: "Photoshop", group: "Creative", mono: "Ps", color: "#1E7FC4" },
  { name: "Illustrator", group: "Creative", mono: "Ai", color: "#D97A00" },
  { name: "After Effects", group: "Creative", mono: "Ae", color: "#5C4FE0" },
  { name: "Midjourney", group: "Creative", src: "/images/logos/midjourney.png" },
  { name: "CapCut", group: "Creative", src: "/images/logos/capcut.png" },
  { name: "Runway", group: "Creative", mono: "Rw", color: "#141414" },
  { name: "ElevenLabs", group: "Creative", mono: "11", color: "#141414" },
];
