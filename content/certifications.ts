/* Hemanth Ande's credentials — professional validation records.
   Three internship validations at prestigious institutions. */

export type Cert = {
  no: string;
  issuer: string | null;
  logo?: { src: string; aspect: number };
  title: string;
  year: string | null;
  credentialId: string | null;
  credentialUrl?: string;
  verified: boolean;
  skills: string[];
  metric?: { value: string; label: string };
  fr?: { title?: string; skills?: string[]; metricLabel?: string };
};

export const CERTS: Cert[] = [
  {
    no: "2.1",
    issuer: "Indian Institute of Technology, Guwahati",
    logo: {
      src: "/images/issuers/small_Indian_Institute_of_Technology_Guwahati_IIT_Guwahati_b8e20684fc_238a0ccc30_81f33cfab4.png",
      aspect: 1,
    },
    title: "Deep Learning & AI Research Internship",
    year: "2024",
    credentialId: null,
    verified: true,
    skills: [
      "Deep Learning model training",
      "Speech-to-Text (LJ Speech Dataset)",
      "Python-based system automation",
      "Offline AI architecture",
    ],
    metric: { value: "IIT-G", label: "Research validated" },
    fr: {
      title: "Deep Learning & AI Research Internship",
      skills: [
        "Deep Learning model training",
        "Speech-to-Text processing",
        "Python automation",
        "Offline AI architecture",
      ],
      metricLabel: "Research validated",
    },
  },
  {
    no: "2.2",
    issuer: "Hindustan Aeronautics Limited (HAL)",
    logo: {
      src: "/images/issuers/Hindustan_Aeronautics_Limited_Logo.png",
      aspect: 1,
    },
    title: "Network Security & Automation — Project Internship",
    year: "2025",
    credentialId: null,
    verified: true,
    skills: [
      "C# (.NET) application engineering",
      "PowerShell network scanning",
      "Oracle database pipeline design",
      "Real-time security dashboard",
    ],
    metric: { value: "HAL", label: "Industrial validated" },
    fr: {
      title: "Network Security & Automation — Project Internship",
      skills: [
        "C# (.NET) application engineering",
        "PowerShell network scanning",
        "Oracle database pipeline",
        "Security dashboard",
      ],
      metricLabel: "Industrial validated",
    },
  },
  {
    no: "2.3",
    issuer: "DRK Group of Institutions",
    logo: {
      src: "/images/issuers/download.png",
      aspect: 1,
    },
    title: "Full Stack Development — Lead Engineer (Production Deployment)",
    year: "2024–Present",
    credentialId: null,
    verified: true,
    skills: [
      "PHP / MySQL full-stack engineering",
      "Flutter mobile development (iOS & Android)",
      "RESTful API design & integration",
      "SQLite offline data persistence",
    ],
    metric: { value: "3,500+", label: "Students served" },
    fr: {
      title: "Full Stack Development — Lead Engineer (Production Deployment)",
      skills: [
        "PHP / MySQL full-stack",
        "Flutter mobile development",
        "RESTful API design",
        "SQLite persistence",
      ],
      metricLabel: "Students served",
    },
  },
  {
    no: "2.4",
    issuer: null,
    title: "Multimodal AI System — Road Safety & Traffic Intelligence",
    year: "2025",
    credentialId: null,
    verified: false,
    skills: [
      "YOLOv8 with ResNet-50 backbone",
      "CBAM attention mechanism",
      "Automatic Number Plate Recognition (ANPR)",
      "Real-time computer vision pipeline",
    ],
    metric: { value: "YOLOv8", label: "AI framework" },
    fr: {
      title: "Multimodal AI System — Road Safety & Traffic Intelligence",
      skills: [
        "YOLOv8 + ResNet-50",
        "CBAM attention mechanism",
        "ANPR system",
        "Real-time CV pipeline",
      ],
      metricLabel: "AI framework",
    },
  },
  {
    no: "2.5",
    issuer: null,
    title: "B.Tech Computer Science & Engineering (AI & ML)",
    year: "2022–2026",
    credentialId: null,
    verified: false,
    skills: [
      "Artificial Intelligence & Machine Learning",
      "Data Structures & Algorithms",
      "Computer Vision & Deep Learning",
      "Full-Stack Software Engineering",
    ],
    metric: { value: "JNTUH", label: "Affiliated university" },
    fr: {
      title: "B.Tech Computer Science & Engineering (AI & ML)",
      skills: [
        "Artificial Intelligence & ML",
        "Data Structures & Algorithms",
        "Computer Vision",
        "Full-Stack Engineering",
      ],
      metricLabel: "Affiliated university",
    },
  },
];
