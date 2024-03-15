import type { APIRoute } from "astro"
import { refreshInstagramAccessToken } from "@/utils/instagramAPI"
const CRON_SECRET = import.meta.env.VITE_CRON_SECRET

export const GET: APIRoute = async ({ request }) => {
  const authHeader = request.headers.get("Authorization")
  if (authHeader !== `Bearer ${CRON_SECRET}`) {
    return new Response(JSON.stringify("Unauthorized"), { status: 401 })
  }

  await refreshInstagramAccessToken()
  return new Response(JSON.stringify("OK"), { status: 200 })
}
