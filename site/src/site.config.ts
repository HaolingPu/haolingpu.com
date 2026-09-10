import type { Education, Hobby, Metadata, NavItem, Site, Socials, Stat } from "@types";

/**
 * Single source of truth for identity, copy and links.
 * Everything user-visible that is not page content lives here.
 */
export const SITE: Site = {
  NAME: "Haoling Pu",
  NAME_ZH: "蒲浩领",
  DOMAIN: "haolingpu.com",
  EMAIL: "haolingp@andrew.cmu.edu",
  TAGLINE:
    "I build ML systems that ship — from CUDA kernels to agents to speech translation research.",
  NOW: "MS in AI & Innovation @ CMU, graduating May 2027 · open to 2027 new-grad ML / SWE roles",
  NUM_POSTS_ON_HOMEPAGE: 2,
  NUM_WORKS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 4,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION:
    "Haoling Pu — ML systems engineer. CMU AI MS '27, Google intern, CUDA kernels, LLM agents, simultaneous speech translation.",
};

export const WRITING: Metadata = {
  TITLE: "Writing",
  DESCRIPTION: "Notes on ML systems, kernels, agents and research.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION:
    "Haoling Pu's roles at Google, CMU's Language Technologies Institute, WeRide and more, told in a line or two each.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "Projects by Haoling Pu: a sparse attention CUDA kernel for Blackwell, a self-writing LLM wiki, hybrid retrieval, and more.",
};

export const SOCIALS: Socials = [
  { NAME: "github", HREF: "https://github.com/HaolingPu" },
  { NAME: "linkedin", HREF: "https://www.linkedin.com/in/haoling-pu/" },
];

/**
 * Header navigation. `enabled: false` hides an item until its page exists
 * (research/about arrive in Phase E; writing stays hidden until the first post — D14).
 */
export const NAV: NavItem[] = [
  { LABEL: "work", LABEL_ZH: "经历", HREF: "/work", ENABLED: true },
  { LABEL: "projects", LABEL_ZH: "项目", HREF: "/projects", ENABLED: true },
  { LABEL: "research", LABEL_ZH: "研究", HREF: "/research", ENABLED: true },
  { LABEL: "writing", LABEL_ZH: "文章", HREF: "/writing", ENABLED: false },
  { LABEL: "about", LABEL_ZH: "关于", HREF: "/about", ENABLED: false },
  { LABEL: "♡", LABEL_ZH: "♡", HREF: "/secret", ENABLED: true },
];

export const REPO_URL = "https://github.com/HaolingPu/haolingpu.com";

export const RESEARCH: Metadata = {
  TITLE: "Research",
  DESCRIPTION:
    "Haoling Pu's research: simultaneous speech translation at CMU's Language Technologies Institute, and a Blackwell sparse attention kernel for NVIDIA's MLSys competition.",
};

/** Hero numbers. Keep to three; each must be defensible from the résumé. */
export const STATS: Stat[] = [
  { VALUE: "22–35×", LABEL: "sparse-attention kernel speedup vs. PyTorch" },
  { VALUE: "88%", LABEL: "Knative cold-start latency removed" },
  { VALUE: "4.00", LABEL: "GPA, MS in AI & Innovation @ CMU" },
];

export const EDUCATION: Education[] = [
  {
    SCHOOL: "Carnegie Mellon University",
    SCHOOL_ZH: "卡内基梅隆大学",
    LOGO: "cmu",
    DEGREE: "MS in Artificial Intelligence and Innovation",
    DEGREE_ZH: "人工智能与创新 硕士",
    UNIT: "School of Computer Science",
    UNIT_ZH: "计算机学院",
    START: "2025",
    END: "May 2027",
    GPA: "4.00 / 4.00",
    LOCATION: "Pittsburgh, PA",
    COURSES: [
      "AI Engineering",
      "Deep Learning",
      "Multimodal ML",
      "NLP",
      "AI Agents",
      "LLM Systems",
      "Generative AI",
    ],
    URL: "https://www.cs.cmu.edu",
  },
  {
    SCHOOL: "University of Michigan",
    SCHOOL_ZH: "密歇根大学",
    LOGO: "umich",
    DEGREE: "BS in Computer Science & Data Science",
    DEGREE_ZH: "计算机科学与数据科学 学士",
    UNIT: "College of Engineering",
    UNIT_ZH: "工学院",
    START: "2021",
    END: "May 2025",
    GPA: "3.95 / 4.00",
    LOCATION: "Ann Arbor, MI",
    COURSES: [
      "Database Systems",
      "Data Structures & Algorithms",
      "Machine Learning",
      "Web Systems",
      "Computer Organization",
    ],
    URL: "https://umich.edu",
  },
];

/** Off the clock. Icons are keys into HobbyIcon.astro. */
export const HOBBIES: Hobby[] = [
  { ICON: "basketball", LABEL: "Basketball", LABEL_ZH: "篮球" },
  { ICON: "dumbbell", LABEL: "Gym", LABEL_ZH: "健身" },
  { ICON: "mountain", LABEL: "Rock climbing", LABEL_ZH: "攀岩" },
  { ICON: "music", LABEL: "Music", LABEL_ZH: "音乐" },
  { ICON: "eightball", LABEL: "Pool", LABEL_ZH: "台球" },
];

/** Section labels and small UI strings per language. */
export const UI = {
  en: {
    work: "work",
    education: "education",
    projects: "projects",
    research: "research",
    writing: "writing",
    off: "off the clock",
    allRoles: "all roles",
    allProjects: "all projects",
    more: "all research",
    allWriting: "all writing",
    gpa: "GPA",
    coursework: "Coursework",
    present: "Present",
    switch: "中文",
    switchHref: "/zh/",
    switchLabel: "切换到中文",
  },
  zh: {
    work: "经历",
    education: "教育",
    projects: "项目",
    research: "研究",
    writing: "文章",
    off: "工作之外",
    allRoles: "全部经历",
    allProjects: "全部项目",
    more: "全部研究",
    allWriting: "全部文章",
    gpa: "GPA",
    coursework: "课程",
    present: "至今",
    switch: "EN",
    switchHref: "/",
    switchLabel: "Switch to English",
  },
} as const;
export type Lang = keyof typeof UI;
