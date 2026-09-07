import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

/**
 * Pages under src/dev/ (type scale, component gallery) are injected as
 * routes in `astro dev` only. They never reach the production build.
 */
const devPages = () => ({
  name: "dev-pages",
  hooks: {
    "astro:config:setup": ({ command, injectRoute }) => {
      if (command !== "dev") return;
      injectRoute({ pattern: "/dev/kitchen-sink", entrypoint: "./src/dev/kitchen-sink.astro" });
      injectRoute({ pattern: "/dev/typography", entrypoint: "./src/dev/typography.astro" });
    },
  },
});

export default defineConfig({
  site: "https://www.haolingpu.com",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
    routing: { prefixDefaultLocale: false },
  },
  devToolbar: { enabled: false }, // keeps headless screenshots clean
  integrations: [mdx(), sitemap({ filter: (page) => !page.includes("/secret") }), devPages()],
  vite: {
    plugins: [tailwindcss()],
  },
});
