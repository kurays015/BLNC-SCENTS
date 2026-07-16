import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Exclude Sanity/Studio packages from server-side bundling.
  // They are browser-oriented and cause Turbopack to pick the wrong
  // module variants (e.g. swr's react-server bundle) in RSC context.
  serverExternalPackages: ["sanity", "@sanity/vision", "next-sanity"],
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
