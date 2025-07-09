"use client";

export function NestedFrame() {
    let origin = window.location.origin;
    return (
        <iframe
            src={origin + "/frame"}
            height="400"
            width="100%"
            title="Iframe Example"
        ></iframe>
    );
}
