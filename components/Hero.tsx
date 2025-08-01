"use client";
import Image from "next/image";
import Link from "next/link";
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
            <div className="container mx-auto border-l custom-border border-r p-16 hero-bg bg-right bg-no-repeat bg-contain flex flex-col h-[calc(100vh-82px-82px)] justify-center">
                <div className="text-5xl font-bold font-mono !text-black">
                    Hello!,
                    <Image
                        src="/waving-hand.gif"
                        alt="waving hand"
                        width={70}
                        height={70}
                        className="inline-block pb-4"
                        unoptimized={true}
                    ></Image>
                </div>
                <div className="mt-3 text-gray-700 text-3xl font-bold font-mono">
                    Welcome To{" "}
                    <h1 className="text-black inline-block italic underline bg-[var(--color-primary-400)] p-4 skew-x-12 z-0">
                        <Link href={"about"} >Step Campus!</Link>
                    </h1>
                </div>
                <div className="h-[50px]" ></div>
            </div>
        </section>
    );
}
