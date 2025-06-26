"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function () {
    const HEADING_TEXT = "Welcome To Step Campus!!";
    const [headingText, setHeadingText] = useState(" ");

    useEffect(() => {
        let count = 0;
        const interVal = setInterval(() => {
            const word = HEADING_TEXT.slice(0, count);
            setHeadingText(word);
            count = (count + 1) % (HEADING_TEXT.length + 20);
        }, 200);
        return () => clearInterval(interVal);
    }, []);

    return (
        <section className="custom-border border-b">
            <div className="container mx-auto border-l custom-border border-r p-16 py-44 hero-bg bg-right bg-no-repeat bg-contain">
                <div className="text-5xl font-bold font-mono">
                    Hello!,
                    <Image
                        src="/waving-hand.gif"
                        alt="waving hand"
                        width={70}
                        height={70}
                        className="inline-block pb-4"
                    ></Image>
                </div>
                <div className="text-3xl font-bold font-mono text-[var(--color-primary-600)] mt-3">
                    {headingText}
                    <span className="animate-pulse">|</span>
                </div>
            </div>
        </section>
    );
}
