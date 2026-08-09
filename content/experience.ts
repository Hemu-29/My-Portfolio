/* Professional experience — Hemanth Ande's career history.
   Reverse chronological: newest first. */

export type Role = {
  company: string;
  role: string;
  type: "Internship" | "Full-time" | "Hackathon" | "Freelance";
  location: string;
  period: string;
  summary: string;
  achievements: string[];
  outcome: string;
  skills: string[];
  color: string;
  fg: "light" | "dark";
  logo?: {
    src: string;
    variant: "tile" | "plate";
    aspect: number;
    placement?: "right" | "below";
  };
  fr?: { role?: string; summary?: string; outcome?: string; achievements?: string[] };
};

export const ROLES: Role[] = [
  {
    company: "DRK Group of Institutions",
    role: "Lead Full Stack Developer",
    type: "Full-time",
    location: "Hyderabad, India",
    period: "Sep 2024 – Present",
    summary:
      "Independently architected and deployed a suite of production-level applications that modernized academic workflows and served a user base of 3,500+ students across the institution.",
    achievements: [
      "Engineered a dynamic PHP/MySQL Results Management System tailored to JNTUH regulations — parsing complex Excel data to map student profiles and results for 3,500+ students",
      "Developed a Flutter mobile ecosystem featuring multi-level approval pipelines for gate passes and leaves, integrated with real-time attendance analytics",
      "Designed and launched a high-performance Student Portal using Flutter and RESTful APIs providing 24/7 access to academic resources, personalized schedules and attendance tracking",
      "Reduced institutional administrative workloads by 80% and decreased manual paperwork by 50% through automated digital pipelines",
      "Leveraged SQLite for offline data persistence and optimized backend logic to handle regular/supplementary exam updates and digital gate pass automation",
    ],
    outcome: "3,500+ students served · 80% admin workload reduction · 50% less manual paperwork",
    skills: ["PHP", "MySQL", "Flutter", "Dart", "RESTful APIs", "SQLite", "Web Development"],
    color: "#6366f1",
    fg: "light",
    logo: {
      src: "/images/projects/play_store_512.png",
      variant: "tile",
      aspect: 1,
      placement: "right",
    },
    fr: {
      role: "Lead Full Stack Developer",
      summary:
        "Independently architected and deployed a suite of production-level applications that modernized academic workflows and served a user base of 3,500+ students across the institution.",
      outcome: "3,500+ students served · 80% admin workload reduction",
    },
  },
  {
    company: "Hindustan Aeronautics Limited (HAL)",
    role: "Project Intern",
    type: "Internship",
    location: "Hyderabad, India",
    period: "May 2025 – Jul 2025",
    summary:
      "Developed and deployed an automated LAN monitoring system to secure network integrity during off-hours at a premier aerospace manufacturing organization.",
    achievements: [
      "Engineered a C# (.NET) application leveraging PowerShell to scan for active IP/MAC addresses and unauthorized shared folders on the institutional LAN",
      "Designed a secure logging pipeline to an Oracle database for real-time analysis and audit trails",
      "Built a custom web dashboard providing real-time security insights that was successfully adopted and validated in a live lab environment",
      "System successfully secured network integrity by detecting unauthorized access after working hours",
    ],
    outcome: "System validated and adopted in live HAL lab environment",
    skills: ["C#", ".NET Framework", "PowerShell", "Oracle Database", "Network Security", "Web Dashboard"],
    color: "#0072E3",
    fg: "light",
    logo: {
      src: "/images/projects/hal_logo.png",
      variant: "tile",
      aspect: 1,
      placement: "right",
    },
    fr: {
      role: "Project Intern",
      summary:
        "Developed and deployed an automated LAN monitoring system to secure network integrity during off-hours.",
      outcome: "System validated and adopted in live HAL lab environment",
    },
  },
  {
    company: "Indian Institute of Technology, Guwahati",
    role: "Research Intern",
    type: "Internship",
    location: "Guwahati, India",
    period: "May 2024 – Jul 2024",
    summary:
      "Architected an offline virtual assistant utilizing Deep Learning for speech-to-text processing, ensuring privacy and functionality without an internet connection.",
    achievements: [
      "Trained a speech-to-text model on the LJ Speech Dataset to achieve high-accuracy command recognition using deep learning techniques",
      "Integrated Python-based system automation within VS Code, enabling voice-controlled file handling and system operations",
      "Improved developer accessibility by supporting hybrid voice and text inputs for natural language interaction",
      "Achieved fully offline, privacy-preserving operation with no dependency on cloud services",
    ],
    outcome: "Fully offline AI assistant with high-accuracy voice command recognition",
    skills: ["Python", "Deep Learning", "Speech-to-Text", "NLP", "VS Code Extension", "LJ Speech Dataset"],
    color: "#7c3aed",
    fg: "light",
    logo: {
      src: "/images/projects/IIT_Guwahati_Logo.svg.webp",
      variant: "tile",
      aspect: 1,
      placement: "right",
    },
    fr: {
      role: "Research Intern",
      summary:
        "Architected an offline virtual assistant utilizing Deep Learning for speech-to-text processing.",
      outcome: "Fully offline AI assistant with high-accuracy voice command recognition",
    },
  },
];
