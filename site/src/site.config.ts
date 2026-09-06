import type { Education, Hobby, Metadata, NavItem, Site, Socials, Stat } from "@types";

/**
 * Single source of truth for identity, copy and links.
 * Everything user-visible that is not page content lives here.
 */
export const SITE: Site = {
  NAME: "Haoling Pu",
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
  DESCRIPTION: "Where I have worked and what I built there.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Things I have built, with code and demos where public.",
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
  { LABEL: "work", HREF: "/work", ENABLED: true },
  { LABEL: "projects", HREF: "/projects", ENABLED: true },
  { LABEL: "research", HREF: "/research", ENABLED: true },
  { LABEL: "writing", HREF: "/writing", ENABLED: false },
  { LABEL: "about", HREF: "/about", ENABLED: false },
  { LABEL: "♡", HREF: "/secret", ENABLED: true },
];

export const REPO_URL = "https://github.com/HaolingPu/haolingpu.com";

export const RESEARCH: Metadata = {
  TITLE: "Research",
  DESCRIPTION: "Simultaneous speech translation research at CMU and GPU kernel work.",
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
    LOGO: "cmu",
    DEGREE: "MS in Artificial Intelligence and Innovation",
    UNIT: "School of Computer Science",
    START: "2025",
    END: "May 2027",
    GPA: "4.00 / 4.00",
    LOCATION: "Pittsburgh, PA",
    COURSES: ["AI Engineering", "Deep Learning", "Multimodal ML", "Advanced NLP", "Generative AI"],
    URL: "https://www.cs.cmu.edu",
  },
  {
    SCHOOL: "University of Michigan",
    LOGO: "umich",
    DEGREE: "BS in Computer Science & Data Science",
    UNIT: "College of Engineering",
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
  { ICON: "basketball", LABEL: "Basketball" },
  { ICON: "dumbbell", LABEL: "Gym" },
  { ICON: "mountain", LABEL: "Rock climbing" },
  { ICON: "music", LABEL: "Music" },
  { ICON: "eightball", LABEL: "Pool" },
];
