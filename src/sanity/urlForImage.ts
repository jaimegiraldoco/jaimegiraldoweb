import { sanityClient } from "sanity:client"
import imageUrlBuilder from "@sanity/image-url"

const imageBuilder = imageUrlBuilder(sanityClient)
export function urlForImage(source: string) {
  return imageBuilder.image(source)
}
