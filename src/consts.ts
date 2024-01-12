// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import { getSiteConfiguration } from '@/utils/posts'

const siteConfig = await getSiteConfiguration()
export const SITE_TITLE = siteConfig.title
export const SITE_DESCRIPTION = siteConfig.description
export const SITE_IMAGE = siteConfig.siteImage
export const HERO_IMAGE = siteConfig.heroImage
export const VIDEO_IMAGE = siteConfig.videoImage
