export type Site = {
  NAME: string;
  DOMAIN: string;
  EMAIL: string;
  TAGLINE: string;
  NOW: string;
  NUM_POSTS_ON_HOMEPAGE: number;
  NUM_WORKS_ON_HOMEPAGE: number;
  NUM_PROJECTS_ON_HOMEPAGE: number;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

export type Socials = {
  NAME: string;
  HREF: string;
}[];

export type NavItem = {
  LABEL: string;
  LABEL_ZH: string;
  HREF: string;
  ENABLED: boolean;
};

export type Stat = { VALUE: string; LABEL: string };

export type Education = {
  SCHOOL: string;
  SCHOOL_ZH: string;
  LOGO: "cmu" | "umich";
  DEGREE: string;
  DEGREE_ZH: string;
  UNIT: string;
  UNIT_ZH: string;
  START: string;
  END: string;
  GPA: string;
  LOCATION: string;
  COURSES: string[];
  URL: string;
};

export type Hobby = {
  ICON: "basketball" | "dumbbell" | "mountain" | "music" | "eightball";
  LABEL: string;
  LABEL_ZH: string;
};
