import type { Post, KeysOfPost, Paragraph, SiteConfiguration } from "@/types"
import { sanityClient } from "@/sanity/client"

export function transformTitleToSlug(title: string) {
  return title.toLowerCase().replace(/\s/g, "-")
}

export async function getPosts(query: string, fields: KeysOfPost[]) {
  const posts = await sanityClient.fetch<Post[]>(query)
  return posts.map((post) => {
    const transformedPost = {} as Post
    fields.forEach((field) => {
      if (field === "slug") {
        transformedPost[field] =
          post.slug != null ? post.slug : transformTitleToSlug(post.title)
        return
      }
      if (field === "pubDate" || field === "updatedDate") {
        transformedPost[field] = new Date(post[field])
        return
      }
      if (field === "categories") {
        transformedPost[field] = post[field]
        return
      }
      transformedPost[field] = post[field]
    })
    return transformedPost
  }) as Post[]
}

export async function getParagraphs() {
  const query = `*[_type == "paragraph"]{name, body}`
  return await sanityClient.fetch<Paragraph[]>(query)
}

export async function getSiteConfiguration() {
  const query = `*[_type == "configuration"]{title, description, "siteImage": siteImage.asset->url, "heroImage": heroImage.asset->url, "videoImage": videoImage.asset->url}`
  const config = await sanityClient.fetch<SiteConfiguration[]>(query)
  return config[0]
}
