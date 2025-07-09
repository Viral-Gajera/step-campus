"use client";

export function SwitchWindow() {
    return (
        <a
            className="underline underline-offset-2 cursor-pointer"
            onClick={(e) => {
                e.preventDefault();
                // window.open("https://www.youtube.com/@stepcampus", "_blank");
                window.open(
                    "https://www.youtube.com/@stepcampus",
                    "Snopzer",
                    "left=20,top=20,width=1000,height=1000,toolbar=1,resizable=0"
                );
            }}
        >
            Checkout Our Youtube Channel
        </a>
    );
}
