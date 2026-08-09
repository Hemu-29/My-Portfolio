/* Hemanth Ande's projects — single source of truth for the Work section
   and the /work/[slug] case-study routes. */

export type Study = {
  role: string;
  timeline: string;
  context: string;
  problem: string;
  process: { title: string; body: string }[];
  decisions: { title: string; why: string }[];
  outcomes: string[];
  reflection: string;
  note?: string;
};

export type StudyFr = Partial<Study>;

export type Cover = {
  bg: string;
  ink: "light" | "dark";
  src?: string;
  aspect?: number;
  variant?: "brand" | "photo";
  focus?: string;
  mark?: string;
};

export type Project = {
  slug: string;
  title: string;
  tags: string[];
  year: string;
  oneLiner: string;
  contribution: string;
  coverLabel: string;
  cover?: Cover;
  site?: { url: string; label: string };
  repo?: string;
  award?: string;
  study: Study;
  fr?: {
    title?: string;
    oneLiner?: string;
    contribution?: string;
    tags?: string[];
    study?: StudyFr;
  };
};

export const PROJECTS: Project[] = [
  /* ─────────────── 1 · MULTIMODAL AI ROAD SAFETY ─────────────── */
  {
    slug: "multimodal-ai-road-safety",
    title: "Multimodal AI System for Road Safety & Traffic Intelligence",
    tags: ["PyTorch", "Computer Vision", "YOLOv8"],
    year: "2025",
    oneLiner:
      "An advanced AI system for real-time traffic monitoring — augmenting YOLO with ResNet-50 and CBAM attention for superior detection of helmets, number plates and traffic violations.",
    contribution:
      "End-to-end AI pipeline — model architecture, training, detection and ANPR dashboard.",
    coverLabel: "ROAD SAFETY AI",
    cover: { bg: "#ffffff", ink: "dark", src: "/images/projects/images.jpg", variant: "photo" },
    study: {
      role: "AI & Computer Vision Engineer",
      timeline: "2025 · ongoing",
      context:
        "Engineered an advanced AI system for real-time traffic monitoring by augmenting the YOLO framework with a ResNet-50 backbone for deep feature extraction. Integrated a CBAM attention mechanism to achieve superior detection accuracy for small or overlapping objects like helmets and number plates.",
      problem:
        "Standard YOLO models struggle with small overlapping objects in real-world traffic — helmets at distance, occluded number plates, simultaneous multi-violation detection. The challenge: build a unified pipeline that detects multiple violation types in real-time with production-level accuracy.",
      process: [
        {
          title: "Augmenting YOLO with a ResNet-50 backbone",
          body: "Standard YOLOv8 was augmented with a ResNet-50 backbone for deeper feature extraction, enabling the model to capture richer spatial hierarchies for small object detection.",
        },
        {
          title: "CBAM Attention for precision targeting",
          body: "Integrated Channel and Spatial Attention (CBAM) mechanisms to focus the model's attention on critical regions — dramatically improving detection accuracy for overlapping objects like helmets and number plates.",
        },
        {
          title: "Unified multi-violation pipeline",
          body: "Developed a single unified detection pipeline to simultaneously detect helmetless riding, triple riding, wrong-way driving, and license plates — alongside an ANPR dashboard for automated enforcement.",
        },
      ],
      decisions: [
        {
          title: "CBAM over standard attention",
          why: "CBAM's dual channel-spatial attention proved significantly more effective than standard self-attention for the densely overlapping small objects typical in traffic scenes, where a helmet may be occluded by the rider's body.",
        },
        {
          title: "ResNet-50 as the feature backbone",
          why: "ResNet-50's skip connections allowed the model to capture both fine-grained texture information (helmet surface, plate characters) and higher-level semantic features (rider posture, vehicle orientation) simultaneously.",
        },
      ],
      outcomes: [
        "Superior detection accuracy for small/overlapping objects vs. baseline YOLOv8",
        "Unified pipeline detecting 4 violation types simultaneously",
        "ANPR dashboard for automated number plate recognition and enforcement logging",
      ],
      reflection:
        "The most interesting engineering constraint was making a single model robust across wildly different detection tasks — from a tiny helmet at distance to a full vehicle going the wrong way. CBAM solved the attention problem; the architecture did the rest.",
    },
    fr: {
      title: "Multimodal AI System for Road Safety & Traffic Intelligence",
      oneLiner:
        "An advanced AI system for real-time traffic monitoring — augmenting YOLO with ResNet-50 and CBAM attention for superior detection of helmets, number plates and traffic violations.",
      contribution:
        "End-to-end AI pipeline — model architecture, training, detection and ANPR dashboard.",
    },
  },

  /* ─────────────── 2 · DRKIST MOBILE APPS ─────────────── */
  {
    slug: "drkist-mobile-apps",
    title: "DRKIST Faculty & Student Portal Mobile Apps",
    tags: ["Flutter", "Mobile", "RESTful APIs"],
    year: "2024–2025",
    oneLiner:
      "Production-ready mobile ecosystems serving 3,500+ students — multi-level approval pipelines, real-time attendance tracking, and 24/7 digital access to academic resources.",
    contribution:
      "Full mobile ecosystem — two apps, one backend, reducing paperwork by 50%.",
    coverLabel: "DRKIST MOBILE ECOSYSTEM",
    cover: { bg: "#ffffff", ink: "dark", src: "/images/projects/play_store_512.png", variant: "photo" },
    study: {
      role: "Lead Full Stack & Mobile Developer",
      timeline: "2024–2025 · Live Deployment",
      context:
        "Developed production-ready mobile ecosystems using Flutter and RESTful APIs for DRK Group of Institutions. Two separate apps — Faculty Portal and Student Portal — serving 3,500+ users on the institutional infrastructure.",
      problem:
        "Manual paper-based processes for gate passes, leave requests, attendance and academic resources were inefficient and inaccessible. Faculty spent hours on paperwork; students had no real-time visibility into their own academic standing.",
      process: [
        {
          title: "Multi-level approval pipeline for Faculty Portal",
          body: "Designed and built an approval workflow for gate passes and leave requests with multi-level authorization — department head, HOD, principal — with real-time status updates and push notifications.",
        },
        {
          title: "Real-time attendance analytics",
          body: "Integrated real-time attendance tracking with visual analytics dashboards, allowing faculty to mark attendance and students to monitor their attendance percentage against JNTUH thresholds.",
        },
        {
          title: "SQLite for offline-first resilience",
          body: "Implemented SQLite local storage for critical data, ensuring the apps remain functional when connectivity is poor — important in a campus environment with variable network quality.",
        },
      ],
      decisions: [
        {
          title: "Flutter for cross-platform parity",
          why: "A single Flutter codebase targeting both iOS and Android ensured consistent UX and halved the development time compared to separate native apps.",
        },
        {
          title: "Offline-first with SQLite",
          why: "Campus networks are unreliable. SQLite syncs when online and serves cached data offline — students can always access schedules and attendance records regardless of connectivity.",
        },
      ],
      outcomes: [
        "50% reduction in manual paperwork across the institution",
        "24/7 access to academic resources for 3,500+ students",
        "Multi-level approval workflows replacing paper-based gate pass and leave systems",
        "Real-time attendance tracking integrated with JNTUH regulations",
      ],
      reflection:
        "Building for a real institution's real users meant every bug had an immediate human consequence. That accountability made me a more careful engineer.",
    },
    fr: {
      title: "DRKIST Faculty & Student Portal Mobile Apps",
      oneLiner:
        "Production-ready mobile ecosystems serving 3,500+ students — multi-level approval pipelines, real-time attendance and 24/7 digital access.",
      contribution:
        "Full mobile ecosystem — two apps, one backend, reducing paperwork by 50%.",
    },
  },

  /* ─────────────── 3 · RESULTS MANAGEMENT SYSTEM ─────────────── */
  {
    slug: "results-management-system",
    title: "Student Results Management System (DRKIST)",
    tags: ["PHP", "MySQL", "Full Stack"],
    year: "2024",
    oneLiner:
      "A full-stack PHP/MySQL platform serving 3,500+ students — parsing complex Excel result files, mapping JNTUH regulations, and automating exam update workflows.",
    contribution:
      "Full-stack architecture, JNTUH regulation logic, Excel parsing pipeline — 80% admin workload cut.",
    coverLabel: "RESULTS MANAGEMENT SYSTEM",
    cover: { bg: "#ffffff", ink: "dark", src: "/images/projects/Screenshot 2026-08-09 212836.png", variant: "photo" },
    site: { url: "https://drkresults.kesug.com/?i=1", label: "drkresults.kesug.com" },
    study: {
      role: "Full Stack Developer",
      timeline: "2024 · Live at drkresults.kesug.com",
      context:
        "Architected a full-stack application using PHP and MySQL to parse complex Excel result files and map them to dynamic student profiles for DRK Group of Institutions (JNTUH affiliated), serving over 3,500 students.",
      problem:
        "JNTUH examination results arrive in complex, irregularly formatted Excel files that must be parsed, validated and mapped to individual student profiles while handling multiple exam types (regular, supplementary, back papers) with different grading regulations. Manual processing was taking weeks and causing errors.",
      process: [
        {
          title: "Excel parsing engine",
          body: "Built a custom PHP engine to parse JNTUH's multi-format Excel result files — handling merged cells, irregular layouts, and multiple result sheets per examination session.",
        },
        {
          title: "JNTUH regulation mapping",
          body: "Engineered custom logic to handle multiple JNTUH regulations for regular exams, supplementary exams, detained students and grade calculation — different rule sets that apply to different cohorts simultaneously.",
        },
        {
          title: "Dynamic student profile system",
          body: "Built a dynamic student profile system that aggregates a student's complete academic history — all semesters, all attempts, all regulations — into a single cohesive view.",
        },
      ],
      decisions: [
        {
          title: "PHP for direct JNTUH Excel integration",
          why: "PHPExcel/PhpSpreadsheet provided the most direct path to handling JNTUH's complex Excel formats with the least overhead — critical when parsing files with thousands of student records.",
        },
        {
          title: "MySQL normalized schema",
          why: "A normalized relational schema allowed efficient querying of complex combinations (student + subject + exam type + regulation) that would have been intractable in a flat-file approach.",
        },
      ],
      outcomes: [
        "80% reduction in administrative workload for the results team",
        "3,500+ students served with real-time access to their results",
        "Platform live at drkresults.kesug.com — deployed and maintained in production",
        "Automated handling of regular and supplementary exam updates",
      ],
      reflection:
        "The hardest part wasn't the code — it was understanding JNTUH's regulation edge cases well enough to encode them correctly. Domain mastery is half of software engineering.",
    },
    fr: {
      title: "Student Results Management System (DRKIST)",
      oneLiner:
        "A full-stack PHP/MySQL platform serving 3,500+ students — parsing complex Excel result files and automating exam workflows.",
      contribution:
        "Full-stack architecture, JNTUH regulation logic, Excel parsing — 80% admin workload cut.",
    },
  },

  /* ─────────────── 4 · LAN MONITORING SYSTEM (HAL) ─────────────── */
  {
    slug: "lan-monitoring-hal",
    title: "LAN Monitoring & Reporting System (HAL)",
    tags: ["C#", ".NET", "Network Security"],
    year: "2025",
    oneLiner:
      "An automated LAN monitoring system for Hindustan Aeronautics Limited — detecting unauthorized IP/MAC addresses and shared folders, logging to Oracle, visualized on a real-time web dashboard.",
    contribution:
      "C# .NET application, PowerShell scanner, Oracle logging pipeline, real-time security dashboard.",
    coverLabel: "LAN SECURITY SYSTEM",
    cover: { bg: "#ffffff", ink: "dark", src: "/images/projects/360_F_712456251_KnZf5qdjImXhH0DEmTfoREn76HcrdTg3.jpg", variant: "photo" },
    award: "✓ Validated",
    study: {
      role: "Network Security Developer (Project Intern)",
      timeline: "May – Jul 2025 · HAL, Hyderabad",
      context:
        "Hindustan Aeronautics Limited required automated monitoring of their LAN to detect unauthorized device connections and shared folder access after working hours — without manual intervention from the security team.",
      problem:
        "HAL's network security team had no automated way to detect unauthorized devices or shared folders appearing on the corporate LAN after hours. Manual checks were impractical at enterprise scale, creating a window of vulnerability every night.",
      process: [
        {
          title: "PowerShell-based network scanner",
          body: "Built a PowerShell scanning module that systematically enumerates all active IP addresses and MAC addresses on the LAN, then cross-references against the authorized device registry to flag anomalies.",
        },
        {
          title: "Unauthorized shared folder detection",
          body: "Extended the scanner to detect SMB shared folders — identifying any shares that appear on the network that haven't been pre-approved by the IT security team.",
        },
        {
          title: "Oracle logging pipeline and real-time dashboard",
          body: "All scan results are logged to an Oracle database with timestamps and device fingerprints. A custom web dashboard visualizes the logs in real-time, allowing the security team to review overnight activity the next morning.",
        },
      ],
      decisions: [
        {
          title: "C# .NET as the orchestration layer",
          why: "C# .NET provided the best integration with Windows enterprise environments — native WMI access, PowerShell interop, and scheduled task integration made deployment seamless on HAL's Windows infrastructure.",
        },
        {
          title: "Oracle over SQL Server for logging",
          why: "HAL's existing infrastructure included Oracle Database, so integrating the logging pipeline with Oracle ensured the security data was backed by the organization's existing database administration practices.",
        },
      ],
      outcomes: [
        "System validated and adopted in a live HAL lab environment",
        "Automated after-hours monitoring replacing manual security checks",
        "Real-time Oracle-backed audit trail for all network activity",
        "Custom security dashboard providing morning-review-ready reports",
      ],
      reflection:
        "Engineering for an aerospace organization means zero tolerance for false negatives — a missed unauthorized device is a real security incident. That constraint sharpened every design decision.",
      note: "Industrial internship project — developed at and for Hindustan Aeronautics Limited.",
    },
    fr: {
      title: "LAN Monitoring & Reporting System (HAL)",
      oneLiner:
        "An automated LAN monitoring system for HAL — detecting unauthorized devices and folders, logging to Oracle, visualized on a real-time dashboard.",
      contribution:
        "C# .NET app, PowerShell scanner, Oracle pipeline, real-time security dashboard.",
    },
  },

  /* ─────────────── 5 · INDIAN TRAFFIC SIGN DETECTION ─────────────── */
  {
    slug: "indian-traffic-sign-detection",
    title: "Indian Traffic Sign Detection and Recognition",
    tags: ["PyTorch", "Faster R-CNN", "OpenCV"],
    year: "2024",
    oneLiner:
      "Fine-tuned Faster R-CNN on PyTorch to identify and classify regional Indian traffic signs in real-world conditions — with live video stream processing and real-time bounding box overlays.",
    contribution:
      "Model training, real-time OpenCV inference pipeline, bounding box and classification rendering.",
    coverLabel: "TRAFFIC SIGN DETECTION",
    cover: { bg: "#ffffff", ink: "dark", src: "/images/projects/choose-right-way-realistic-concept_1284-5715.avif", variant: "photo" },
    repo: "https://github.com/Hemu-29/Indian-Traffic-Sign-Detection",
    study: {
      role: "AI/ML Engineer",
      timeline: "2024 · Computer Vision Project",
      context:
        "Fine-tuned a Faster R-CNN architecture using PyTorch to identify and classify regional traffic signs encountered on Indian roads — handling the significant visual diversity of Indian traffic signage compared to Western datasets.",
      problem:
        "Standard object detection models trained on Western datasets (GTSRB, LISA) perform poorly on Indian traffic signs, which have different visual conventions, weathering patterns, and include regional language text. A model was needed that understood the specific visual vocabulary of Indian roads.",
      process: [
        {
          title: "Faster R-CNN fine-tuning",
          body: "Fine-tuned a pre-trained Faster R-CNN model on a curated dataset of Indian traffic signs, using transfer learning to leverage ImageNet-trained feature extraction while adapting the classification head to Indian signage categories.",
        },
        {
          title: "Real-world data augmentation",
          body: "Applied aggressive data augmentation (lighting variation, motion blur, partial occlusion, perspective distortion) to simulate real-world road conditions — critical for a model that needs to work in variable Indian traffic environments.",
        },
        {
          title: "OpenCV live stream inference",
          body: "Integrated the trained model with OpenCV for live video stream processing — rendering real-time bounding box overlays and class labels on detected signs frame-by-frame.",
        },
      ],
      decisions: [
        {
          title: "Faster R-CNN over YOLO for accuracy",
          why: "For traffic sign recognition, where false negatives have safety implications, Faster R-CNN's two-stage detection provides better accuracy on small, varied objects than single-stage detectors — the slight speed trade-off was acceptable.",
        },
        {
          title: "Transfer learning from pre-trained weights",
          why: "Training from scratch on a limited Indian traffic sign dataset would have been insufficient. Transfer learning from ImageNet-pretrained weights allowed the backbone to contribute strong generic visual features immediately.",
        },
      ],
      outcomes: [
        "Accurate detection and classification of Indian traffic signs in real-world conditions",
        "Real-time inference pipeline with live bounding box and label overlay via OpenCV",
        "Open-source repository available on GitHub",
      ],
      reflection:
        "The most interesting challenge was building a dataset that captured the real visual diversity of Indian roads — not just clean studio shots, but weathered, partially occluded, rain-blurred signs. The model is only as good as the data's honesty about the real world.",
    },
    fr: {
      title: "Indian Traffic Sign Detection and Recognition",
      oneLiner:
        "Fine-tuned Faster R-CNN to detect and classify Indian traffic signs in real-world conditions with live OpenCV inference.",
      contribution:
        "Model training, real-time OpenCV inference, bounding box and classification rendering.",
    },
  },
];
