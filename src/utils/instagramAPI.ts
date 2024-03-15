const USER_ID = import.meta.env.INSTAGRAM_USER_ID
const ACCESS_TOKEN = import.meta.env.INSTAGRAM_ACCESS_TOKEN
const API_URL = `https://graph.instagram.com/${USER_ID}/media?fields=permalink&access_token=${ACCESS_TOKEN}&limit=3`
const API_URL_REFRESH = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${ACCESS_TOKEN}`

type InstagramPost = {
  permalink: string
}
export async function getInstagramPosts() {
  const response = await fetch(API_URL)
  if (!response.ok) return []
  const data = await response.json()
  return data.data as InstagramPost[]
}

export async function refreshInstagramAccessToken() {
  // fetch the refresh token endpoint and repeats the fetch if it fails
  const response = await fetch(API_URL_REFRESH)
  if (!response.ok) {
    await refreshInstagramAccessToken()
  }
}
