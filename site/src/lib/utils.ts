import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* Dates in frontmatter are parsed as UTC midnight; format in UTC so the day never shifts. */
export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

export function dateRange(startDate: Date, endDate?: Date | string): string {
  const startMonth = startDate.toLocaleString("en-US", { month: "short", timeZone: "UTC" });
  const startYear = startDate.getUTCFullYear().toString();
  let end = "";

  if (endDate) {
    if (typeof endDate === "string") {
      end = endDate;
    } else {
      const endMonth = endDate.toLocaleString("en-US", { month: "short", timeZone: "UTC" });
      end = `${endMonth}${endDate.getUTCFullYear()}`;
    }
  }

  return `${startMonth}${startYear} - ${end}`;
}
