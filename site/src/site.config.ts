import type { Metadata, NavItem, Site, Socials } from "@types";

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
  { LABEL: "research", HREF: "/research", ENABLED: false },
  { LABEL: "writing", HREF: "/writing", ENABLED: false },
  { LABEL: "about", HREF: "/about", ENABLED: false },
];

export const REPO_URL = "https://github.com/HaolingPu/haolingpu.com";
