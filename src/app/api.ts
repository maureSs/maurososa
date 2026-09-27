export const interests = [
  "Reading",
  "Videogames",
  "Music",
  "Technology",
  "Coffee",
  "Movies & TV",
  "Sports",
  "Streaming",
] as const;

export type Rarity = "uncommon" | "rare" | "epic" | "legendary";

export type DevItemIcon =
  | "brain"
  | "monitor"
  | "mic"
  | "keyboard"
  | "mouse"
  | "headphones"
  | "coffee"
  | "notebook"
  | "armchair"
  | "usb"
  | "panel"
  | "bot";

export interface DevItem {
  id: string;
  name: string;
  icon: DevItemIcon;
  rarity: Rarity;
  blurb: string;
  iceName?: string;
  iceBlurb?: string;
  side: "left" | "right" | "bottom";
}

export const devItems: DevItem[] = [
  {
    id: "mind",
    name: "Arcane Focus",
    icon: "brain",
    rarity: "legendary",
    blurb: "Where architecture and product sense meet before a single line ships.",
    side: "left",
  },
  {
    id: "eyes",
    name: "Sight Glass",
    icon: "monitor",
    rarity: "epic",
    blurb: "Dual monitors for debugging reality and polishing interfaces.",
    side: "left",
  },
  {
    id: "voice",
    name: "Whisper Crystal",
    icon: "mic",
    rarity: "rare",
    blurb: "Clear standups, demos, and async updates across teams.",
    side: "left",
  },
  {
    id: "hands",
    name: "Rune Keys",
    icon: "keyboard",
    rarity: "legendary",
    blurb: "TypeScript-forged keystrokes that turn ideas into shipping code.",
    side: "left",
  },
  {
    id: "ground",
    name: "Focus Mat",
    icon: "panel",
    rarity: "uncommon",
    blurb: "Keeps the workspace grounded when production starts casting chaos.",
    side: "left",
  },
  {
    id: "ears",
    name: "Echo Circlet",
    icon: "headphones",
    rarity: "rare",
    blurb: "Deep-focus soundtrack for long raids through complex tickets.",
    side: "right",
  },
  {
    id: "fuel",
    name: "Hot Coffee",
    icon: "coffee",
    rarity: "uncommon",
    blurb: "Hot Coffee — the classic resource regen potion.",
    iceName: "Ice Coffee",
    iceBlurb: "Ice Coffee — the classic resource regen potion.",
    side: "right",
  },
  {
    id: "notes",
    name: "Spell Journal",
    icon: "notebook",
    rarity: "rare",
    blurb: "Specs, notes, and lessons that keep every build intentional.",
    side: "right",
  },
  {
    id: "seat",
    name: "Command Throne",
    icon: "armchair",
    rarity: "epic",
    blurb: "Ergonomic base camp for marathon frontend and backend sessions.",
    side: "right",
  },
  {
    id: "link",
    name: "Portal Dongle",
    icon: "usb",
    rarity: "uncommon",
    blurb: "Connects devices, environments, and the occasional last-minute deploy.",
    side: "right",
  },
  {
    id: "precision",
    name: "Cursor Wand",
    icon: "mouse",
    rarity: "epic",
    blurb: "Pixel-level control for UI craft and careful refactors.",
    side: "bottom",
  },
  {
    id: "ally",
    name: "Code Familiar",
    icon: "bot",
    rarity: "legendary",
    blurb: "AI pair for drafts and exploration — judgment stays human.",
    side: "bottom",
  },
];

export interface StatRow {
  label: string;
  value: string;
  url?: string;
}

export const stackPower = {
  label: "Stack Power",
  value: "437",
};

export const attributes: StatRow[] = [
  { label: "TypeScript", value: "9,240", url: "https://www.typescriptlang.org/" },
  { label: "React", value: "8,860", url: "https://react.dev/" },
  { label: "Next.js", value: "8,510", url: "https://nextjs.org/" },
  { label: "Java", value: "7,980", url: "https://www.java.com/" },
  {
    label: "Spring Boot",
    value: "7,420",
    url: "https://spring.io/projects/spring-boot",
  },
];

export const specializations: StatRow[] = [
  { label: "PostgreSQL", value: "31%", url: "https://www.postgresql.org/" },
  { label: "Node.js", value: "28%", url: "https://nodejs.org/" },
  { label: "Tailwind CSS", value: "36%", url: "https://tailwindcss.com/" },
  { label: "React Native", value: "24%" },
  { label: "MongoDB", value: "27%", url: "https://www.mongodb.com/" },
];

export const training = [
  "Bachelor of Systems Analysis — UBA",
  "Full Stack Development — freeCodeCamp",
  "Spring Boot, REST APIs, JPA & Security — Udemy",
];

export interface Work {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  summary: string;
  details: string[];
  technologies: string[];
}

export const myWork: Work[] = [
  {
    name: "ABstract",
    role: "Full Stack Developer · WMS",
    image: "/assets/images/abstract.png",
    imageAlt: "ABstract company logo",
    summary:
      "Develop and maintain an enterprise Warehouse Management System optimizing logistics and warehouse operations.",
    details: [
      "Build modern, scalable web apps with React, Next.js, and TypeScript.",
      "Ship a React Native app used daily by warehouse operators for barcode scanning, inventory, and warehouse workflows.",
      "Design RESTful APIs and backend services with Java, Spring Boot, and PostgreSQL.",
    ],
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "React Native",
      "Java",
      "Spring Boot",
      "PostgreSQL",
    ],
  },
  {
    name: "Insite Latin America",
    role: "Frontend Developer · HPE",
    image: "/assets/images/insite.png",
    imageAlt: "Insite Latin America logo",
    summary:
      "Developed and maintained Hewlett Packard Enterprise's global Courses & Certifications platform.",
    details: [
      "Led the migration from Next.js 12 to Next.js 14 with the App Router.",
      "Introduced Storybook to standardize components and improve UI documentation.",
      "Improved page load times by roughly 35% through image and component-level optimization.",
    ],
    technologies: ["TypeScript", "React", "Next.js", "Storybook", "Performance"],
  },
  {
    name: "Freelance",
    role: "Independent Full Stack Developer",
    image: "/assets/images/freelance.png",
    imageAlt: "Illustrated cat wearing sunglasses",
    summary:
      "Design and develop end-to-end web applications for startups, small businesses, and independent clients.",
    details: [
      "Build responsive interfaces with React, Next.js, TypeScript, and Tailwind CSS.",
      "Develop backend services and APIs with Node.js, Express.js, and MongoDB.",
      "Configure CI/CD pipelines and manage cloud deployments.",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
    ],
  },
];

export const profileTabs = ["character", "journey", "whispers"] as const;
export type ProfileTab = (typeof profileTabs)[number];

export function parseProfileTab(value: string | null | undefined): ProfileTab {
  if (value === "journey" || value === "whispers" || value === "character") {
    return value;
  }
  return "character";
}
