"use client";

import dynamic from "next/dynamic";

/**
 * Dynamically loads the Studio renderer with ssr:false so Turbopack only
 * bundles Sanity's deps (including swr) for the browser — never the server.
 */
const StudioRenderer = dynamic(() => import("./StudioRenderer"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#101010",
        color: "#a07850",
        fontFamily: "sans-serif",
        fontSize: "14px",
        letterSpacing: "0.1em",
      }}
    >
      Loading Studio…
    </div>
  ),
});

export default function StudioClient() {
  return <StudioRenderer />;
}
