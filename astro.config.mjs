import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel/serverless"
import { sanityIntegration as sanity } from "@sanity/astro"

// https://astro.build/config
export default defineConfig({
  site: "https://jaimegiraldo.co",
  integrations: [
    sitemap(),
    tailwind(),
    sanity({
      projectId: "sex5rmcp",
      dataset: "production",
      useCdn: false
    })
  ],
  output: "server",
  adapter: vercel()
})
