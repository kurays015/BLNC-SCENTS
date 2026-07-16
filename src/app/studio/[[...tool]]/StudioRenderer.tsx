"use client";

import { Suspense, useEffect, useState } from "react";
import { NextStudio } from "next-sanity/studio";
import config from "@/sanity/sanity.config";

function Loading() {
  return (
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
  );
}

/**
 * Suspense wrapper defers NextStudio until after hydration so Sanity can't
 * fire state updates on an unmounted component (React 18 strict-mode error).
 * Mount guard provides an additional safety layer.
 */
export default function StudioRenderer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Loading />;

  return (
    <Suspense fallback={<Loading />}>
      <NextStudio config={config} />
    </Suspense>
  );
}
