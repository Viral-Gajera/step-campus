import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function () {
    return (
        <footer className="container custom-border border-l border-r mx-auto">
            <div>
                <div className="custom-border border-b mx-auto px-4 py-12 sm:px-6 lg:px-16">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div className="md:col-span-2 lg:col-span-1">
                            <h3 className="font-semibold">Step Campus</h3>
                            <p className="mt-4 text-muted-foreground">
                                A comprehensive platform for mastering
                                automation testing tools like Selenium, Cypress,
                                Playwright, and more — through hands-on practice
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Quick Links</h3>
                            <ul className="mt-4 space-y-2">
                                <li>
                                    <Link
                                        href="/"
                                        className="text-muted-foreground hover:text-primary"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="text-muted-foreground hover:text-primary"
                                    >
                                        Practice Components
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/about"
                                        className="text-muted-foreground hover:text-primary"
                                    >
                                        About Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold">Resources</h3>
                            <ul className="mt-4 space-y-2">
                                <li>
                                    <Link
                                        href=""
                                        className="text-muted-foreground hover:text-primary"
                                    >
                                        YouTube
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-muted-foreground hover:text-primary"
                                    >
                                        Selenium Playlist
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold">Contact Us</h3>
                            <ul className="mt-4 space-y-2 text-muted-foreground">
                                <li>Email: yourstepcampus@gmail.com</li>
                            </ul>
                            <div className="mt-6 flex space-x-2">
                                <Button variant="secondary" size="icon" asChild>
                                    <a href="#" aria-label="Facebook">
                                        <Youtube className="h-5 w-5" />
                                    </a>
                                </Button>
                                <Button variant="secondary" size="icon" asChild>
                                    <a href="#" aria-label="Facebook">
                                        <Facebook className="h-5 w-5" />
                                    </a>
                                </Button>
                                <Button variant="secondary" size="icon" asChild>
                                    <a href="#" aria-label="Twitter">
                                        <Twitter className="h-5 w-5" />
                                    </a>
                                </Button>
                                <Button variant="secondary" size="icon" asChild>
                                    <a href="#" aria-label="Instagram">
                                        <Instagram className="h-5 w-5" />
                                    </a>
                                </Button>
                                <Button variant="secondary" size="icon" asChild>
                                    <a href="#" aria-label="LinkedIn">
                                        <Linkedin className="h-5 w-5" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center text-sm text-muted-foreground p-6">
                    <p>
                        &copy; {new Date().getFullYear()} Step Campus. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
