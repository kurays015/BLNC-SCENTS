import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Exclude Sanity/Studio packages from server-side bundling.
  // They are browser-oriented and cause Turbopack to pick the wrong
  // module variants (e.g. swr's react-server bundle) in RSC context.
  // NOTE: next-sanity must NOT be here — it needs to be bundled by
  // Next.js so the correct 'react-server' condition of next-sanity/live
  // is resolved for defineLive / sanityFetch.
  serverExternalPackages: ["sanity", "@sanity/vision"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
