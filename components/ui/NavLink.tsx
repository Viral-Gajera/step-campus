"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "./button";
import Link from "next/link";

export default function NavLink({
    children,
    href,
    className,
}: {
    children: React.ReactNode | null;
    href: string;
    className?: string;
}) {
    
    const router = useRouter();

    // access path to highlight active link
    const path = usePathname();
    const isActive = path == href;

    return (
        <Button
            variant="ghost"
            className={`bg-neutral-900 text-white hover:bg-[var(--color-primary-400)] hover:text-black cursor-pointer ${className} ${
                isActive ? " bg-[var(--color-primary-400)] text-black " : ""
            } `}
            onClick={() => router.push(href)}
        >
            {children}
        </Button>
    );
}
