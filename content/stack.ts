/* Hemanth Ande's tech stack — tools shown in the spiral orbit.
   Replaced Gireesh's design/UX tools with Hemanth's full-stack & AI engineering stack. */

export type Tool = {
  name: string;
  group: "AI" | "Design" | "Build" | "Creative";
  src?: string;
  mono?: string;
  color?: string;
};

export const TOOLS: Tool[] = [
  /* — AI & Deep Learning — */
  { name: "PyTorch", group: "AI", mono: "Pt", color: "#EE4C2C" },
  { name: "YOLOv8", group: "AI", mono: "Yv8", color: "#00BFFF" },
  { name: "OpenCV", group: "AI", mono: "CV", color: "#5C3EE8" },
  { name: "TensorFlow", group: "AI", mono: "Tf", color: "#FF6F00" },

  /* — Frontend — */
  { name: "JavaScript", group: "Design", mono: "JS", color: "#F7DF1E" },
  { name: "HTML5", group: "Design", mono: "H5", color: "#E34F26" },
  { name: "CSS3", group: "Design", mono: "C3", color: "#1572B6" },
  { name: "Flutter", group: "Design", mono: "Fl", color: "#54C5F8" },

  /* — Backend & DB — */
  { name: "PHP", group: "Build", mono: "Php", color: "#8892BF" },
  { name: "C# .NET", group: "Build", mono: "C#", color: "#512BD4" },
  { name: "MySQL", group: "Build", mono: "My", color: "#00758F" },
  { name: "Oracle", group: "Build", mono: "Or", color: "#F80000" },
  { name: "SQLite", group: "Build", mono: "Sl", color: "#003B57" },
  { name: "REST APIs", group: "Build", mono: "API", color: "#2ECC71" },
  { name: "GitHub", group: "Build", mono: "GH", color: "#181717" },
  { name: "VS Code", group: "Build", mono: "VS", color: "#0065A9" },

  /* — Languages — */
  { name: "Python", group: "Creative", mono: "Py", color: "#306998" },
  { name: "Java", group: "Creative", mono: "Jv", color: "#007396" },
  { name: "Dart", group: "Creative", mono: "Dt", color: "#0175C2" },
  { name: "C", group: "Creative", mono: "C", color: "#A8B9CC" },
  { name: "PowerShell", group: "Creative", mono: "PS", color: "#012456" },
  { name: "Android Studio", group: "Creative", mono: "As", color: "#3DDC84" },
];
