import "server-only";
import { defineLive } from "next-sanity/live";
import { client } from "./client";

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({
    // Keep CDN off for live sync/preview content
    useCdn: false,
  }),
  // Token with read permission. Required for draft mode or real-time updates!
  serverToken: process.env.SANITY_API_TOKEN,
});
