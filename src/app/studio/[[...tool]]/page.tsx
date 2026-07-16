/**
 * Studio page — thin server component.
 * The actual Studio is loaded client-side only via StudioClient to avoid
 * Turbopack trying to resolve Sanity's browser-only deps (e.g. swr) in the
 * React-server context, which causes a build error.
 */
export const dynamic = "force-dynamic";

export { metadata, viewport } from "next-sanity/studio";

import StudioClient from "./StudioClient";

export default function StudioPage() {
  return <StudioClient />;
}
