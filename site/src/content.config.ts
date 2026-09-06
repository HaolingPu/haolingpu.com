import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const logo = z.enum(["google", "nvidia", "cmu", "umich", "weride", "umsn", "aviage"]).optional();

const md = (dir: string) => glob({ base: `./src/content/${dir}`, pattern: "**/*.{md,mdx}" });

/** Roles. Body = optional longer note. `abstract: true` marks entries kept deliberately vague (ROADMAP D16). */
const work = defineCollection({
  loader: md("work"),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    role_zh: z.string().optional(),
    location: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.literal("Present")]),
    highlights: z.array(z.string()).min(1),
    highlights_zh: z.array(z.string()).optional(),
    tech: z.array(z.string()).default([]),
    url: z.url().optional(),
    logo,
    abstract: z.boolean().default(false),
  }),
});

/** Projects. Body = problem → approach → result write-up. */
const projects = defineCollection({
  loader: md("projects"),
  schema: z.object({
    title: z.string(),
    title_zh: z.string().optional(),
    summary: z.string().max(160),
    summary_zh: z.string().optional(),
    date: z.coerce.date(),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    tags: z.array(z.string()).default([]),
    repo: z.url().optional(),
    demo: z.url().optional(),
    context: z.string().optional(), // e.g. "NVIDIA MLSys 2026 competition"
    logo,
    private: z.boolean().default(false), // code not public
    draft: z.boolean().default(false),
  }),
});

/** Research. Body = abstract-level description only until published (D16). */
const research = defineCollection({
  loader: md("research"),
  schema: z.object({
    title: z.string(),
    title_zh: z.string().optional(),
    venue: z.string(),
    venue_zh: z.string().optional(),
    status: z.enum(["in progress", "under review", "preprint", "published", "competition"]),
    date: z.coerce.date(),
    summary: z.string(),
    summary_zh: z.string().optional(),
    authors: z.array(z.string()).default([]),
    links: z.array(z.object({ label: z.string(), href: z.url() })).default([]),
    logo,
    order: z.number().default(100),
  }),
});

/** Writing. Hidden from nav until the first post exists (D14). */
const writing = defineCollection({
  loader: md("writing"),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, projects, research, writing };
