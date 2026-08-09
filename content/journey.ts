/* Hemanth Ande's journey — the chapters the light tunnel travels through.
 * From Hyderabad to IIT Guwahati and HAL — turning a CS student into an AI engineer. */

export type Chapter = {
  id: string;
  year: string;
  title: string;
  place: string;
  story: string;
  bridge: string;
  fr?: { title?: string; place?: string; story?: string; bridge?: string };
};

export const CHAPTERS: Chapter[] = [
  {
    id: "roots",
    year: "2022",
    title: "The Beginning",
    place: "Hyderabad, India",
    story:
      "Where the story starts. Enrolled in B.Tech CSE (AI & ML) at DRK Group of Institutions under JNTUH — stepping into a world of code, algorithms and the promise of artificial intelligence.",
    bridge: "It started with curiosity about how machines could learn to think.",
    fr: {
      title: "The Beginning",
      place: "Hyderabad, India",
      story:
        "Where the story starts. Enrolled in B.Tech CSE (AI & ML) at DRK Group of Institutions under JNTUH — stepping into a world of code, algorithms and the promise of artificial intelligence.",
      bridge: "It started with curiosity about how machines could learn to think.",
    },
  },
  {
    id: "first-build",
    year: "2023",
    title: "First real builds",
    place: "DRK Group of Institutions · Hyderabad",
    story:
      "The year of going beyond theory. Building first full-stack web applications, exploring JavaScript, PHP and MySQL, and discovering the satisfaction of deploying something real that people actually use. Computer Vision and AI research began here.",
    bridge:
      "Every project taught me that clean code matters less than code that solves real problems.",
    fr: {
      title: "First real builds",
      place: "DRK Group of Institutions · Hyderabad",
      story:
        "The year of going beyond theory. Building first full-stack web applications, exploring JavaScript, PHP and MySQL, and discovering the satisfaction of deploying something real that people actually use.",
      bridge:
        "Every project taught me that clean code matters less than code that solves real problems.",
    },
  },
  {
    id: "iit",
    year: "2024",
    title: "Deep Learning at IIT",
    place: "Indian Institute of Technology, Guwahati",
    story:
      "A summer at one of India's premier research institutions. Architected an offline AI virtual assistant using Deep Learning — trained a speech-to-text model on the LJ Speech Dataset, integrated Python-based system automation, and built something that worked entirely without an internet connection.",
    bridge:
      "IIT Guwahati showed me that research and engineering aren't separate things — they're the same curiosity applied at different altitudes.",
    fr: {
      title: "Deep Learning at IIT",
      place: "Indian Institute of Technology, Guwahati",
      story:
        "A summer at one of India's premier research institutions. Architected an offline AI virtual assistant using Deep Learning — trained a speech-to-text model on the LJ Speech Dataset, integrated Python-based system automation.",
      bridge:
        "IIT Guwahati showed me that research and engineering aren't separate things — they're the same curiosity applied at different altitudes.",
    },
  },
  {
    id: "hal",
    year: "2025",
    title: "Industry validation at HAL",
    place: "Hindustan Aeronautics Limited · Hyderabad",
    story:
      "Hindustan Aeronautics Limited: an internship that demanded production-quality engineering. Built an automated LAN monitoring system in C# .NET with PowerShell, logging to Oracle, visualized on a real-time web dashboard. The system was adopted and validated in a live lab environment. Back at DRK, the Results Management System went live for 3,500+ students.",
    bridge:
      "Writing software that secures an aerospace organization's network is a different kind of test — one where failure has real stakes.",
    fr: {
      title: "Industry validation at HAL",
      place: "Hindustan Aeronautics Limited · Hyderabad",
      story:
        "Hindustan Aeronautics Limited: an internship that demanded production-quality engineering. Built an automated LAN monitoring system in C# .NET with PowerShell, logging to Oracle, visualized on a real-time web dashboard.",
      bridge:
        "Writing software that secures an aerospace organization's network is a different kind of test — one where failure has real stakes.",
    },
  },
  {
    id: "lead",
    year: "2025–26",
    title: "Leading at scale",
    place: "DRK Group of Institutions · Hyderabad",
    story:
      "Promoted to Lead Full Stack Developer at DRK. A suite of production applications serving 3,500+ students: the Results Management System live at drkresults.kesug.com, Faculty and Student Portal mobile apps built in Flutter, and a Multimodal AI System for Road Safety using YOLOv8, CBAM and ResNet-50 achieving superior detection of helmets, number plates and traffic violations.",
    bridge:
      "Selling solutions taught me what users want. Engineering them at scale taught me what systems need.",
    fr: {
      title: "Leading at scale",
      place: "DRK Group of Institutions · Hyderabad",
      story:
        "Promoted to Lead Full Stack Developer at DRK. A suite of production applications serving 3,500+ students: the Results Management System live, Faculty and Student Portal mobile apps in Flutter, and a Multimodal AI System for Road Safety.",
      bridge:
        "Selling solutions taught me what users want. Engineering them at scale taught me what systems need.",
    },
  },
  {
    id: "graduation",
    year: "2026",
    title: "The next chapter",
    place: "Hyderabad, India",
    story:
      "Graduating with a B.Tech in CSE (AI & ML). Five projects deployed, two research internships at prestigious institutions, one aerospace industrial validation. The journey from first line of code to AI systems that run in production — and the next chapter just beginning.",
    bridge:
      "Every system I've built has made the next one more ambitious. The future is exactly where I intend to be.",
    fr: {
      title: "The next chapter",
      place: "Hyderabad, India",
      story:
        "Graduating with a B.Tech in CSE (AI & ML). Five projects deployed, two research internships at prestigious institutions, one aerospace industrial validation.",
      bridge:
        "Every system I've built has made the next one more ambitious. The future is exactly where I intend to be.",
    },
  },
];
