// Headless screenshots for visual QA: node scripts/shoot.mjs <outDir> [baseUrl]
import { chromium } from "@playwright/test";
import { mkdirSync } from "node:fs";

const [outDir = "shots", base = "http://localhost:4321"] = process.argv.slice(2);
mkdirSync(outDir, { recursive: true });

const pages = ["/", "/dev/kitchen-sink", "/dev/typography"];
const themes = ["dark", "light"];
const viewports = { desktop: { width: 1280, height: 800 }, mobile: { width: 390, height: 844 } };

const browser = await chromium.launch();
for (const [vpName, viewport] of Object.entries(viewports)) {
  for (const theme of themes) {
    const ctx = await browser.newContext({ viewport, deviceScaleFactor: 1 });
    await ctx.addInitScript((t) => localStorage.setItem("theme", t), theme);
    const page = await ctx.newPage();
    for (const path of pages) {
      await page.goto(base + path, { waitUntil: "networkidle" });
      await page.waitForTimeout(2000); // let staggered .animate reveals finish
      const name = (path === "/" ? "home" : path.replace(/^\/dev\//, "")) + `-${theme}-${vpName}.png`;
      await page.screenshot({ path: `${outDir}/${name}`, fullPage: true });
      console.log("shot", name);
    }
    await ctx.close();
  }
}
await browser.close();
