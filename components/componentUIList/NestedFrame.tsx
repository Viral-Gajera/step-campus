"use client";

export function NestedFrame() {
    // Use a fallback for origin during prerendering
  const origin = typeof window !== "undefined" ? window.location.origin : "";
    return (
        <iframe
            src={origin + "/frame"}
            height="400"
            width="100%"
            title="Iframe Example"
        ></iframe>
    );
}
