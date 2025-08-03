"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

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
        <section>
            {/* <section className="custom-border border-b">
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
                            <Link href={"about"}>Step Campus!</Link>
                        </h1>
                    </div>
                    <div className="h-[50px]"></div>
                </div>
            </section> */}

            <section className="w-full bg-card custom-border border-b">
                <div className="container mx-auto border-l custom-border border-r px-4 md:px-6 flex flex-col h-[calc(100vh-82px-82px)] justify-center text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-4xl font-headline font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-400">
                            Step Forward in Your Automation Journey
                        </div>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                            Master web automation with hands-on practice. Our
                            platform provides a rich set of UI components
                            designed to test and perfect your Selenium scripts.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link href="#selenium-practice-components">
                                <Button size="lg" className="font-button">
                                    Get Started
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="/about">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="font-button"
                                >
                                    Learn More
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}
