export type Post = {
  slug: string
  title: string
  pubDate: Date
  updatedDate: Date
  body: string
  imageUrl: string
  categories: string[]
}

export type KeysOfPost = {
  [key in keyof Post]: key
}[keyof Post]

export type Paragraph = {
  name: string
  body: string
}

export type SiteConfiguration = {
  title: string
  description: string
  siteImage: string
  heroImage: string
  videoImage: string
}
