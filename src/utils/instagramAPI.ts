const USER_ID = import.meta.env.INSTAGRAM_USER_ID
const ACCESS_TOKEN = import.meta.env.INSTAGRAM_ACCESS_TOKEN
const API_URL = `https://graph.instagram.com/${USER_ID}/media?fields=permalink&access_token=${ACCESS_TOKEN}&limit=3`

type InstagramPost = {
  permalink: string
}
export async function getInstagramPosts() {
  const response = await fetch(API_URL)
  if (!response.ok) return []
  const data = await response.json()
  return data.data as InstagramPost[]
}
