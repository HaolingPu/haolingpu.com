// Accessibility audit: axe-core over every route, both languages and themes.
//   node scripts/a11y.mjs [baseUrl]
import AxeBuilder from "@axe-core/playwright";
import { chromium } from "@playwright/test";

const base = process.argv[2] ?? "http://localhost:4321";
const routes = ["/", "/work", "/projects", "/projects/llm-wiki", "/research", "/writing", "/secret", "/404-test",
                "/zh/", "/zh/work", "/zh/projects", "/zh/projects/llm-wiki", "/zh/research", "/zh/secret"];
const browser = await chromium.launch();
let total = 0;
for (const theme of ["light", "dark"]) {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  await ctx.addInitScript((t) => localStorage.setItem("theme", t), theme);
  const page = await ctx.newPage();
  for (const route of routes) {
    await page.goto(base + route, { waitUntil: "networkidle" });
    await page.waitForTimeout(600);
    const { violations } = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
    for (const v of violations) {
      total += v.nodes.length;
      console.log(`${theme} ${route}\n  [${v.impact}] ${v.id}: ${v.help}`);
      for (const n of v.nodes.slice(0, 3)) console.log(`    ${n.html.slice(0, 110)}`);
    }
  }
  await ctx.close();
}
await browser.close();
console.log(total === 0 ? "\n✓ axe: no violations" : `\n✗ axe: ${total} node(s) with violations`);
process.exit(total === 0 ? 0 : 1);
