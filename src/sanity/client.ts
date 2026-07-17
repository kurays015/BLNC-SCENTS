import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // was true — CDN caching fights with on-demand revalidation
  perspective: "published",
  stega: {
    studioUrl: "/studio",
  },
});
