"use client";
import { usePathname } from "next/navigation";
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
    // access path to highlight active link
    const path = usePathname();
    const isActive = path == href;

    return (
        <Button
            variant="ghost"
            className={`bg-neutral-900 text-white hover:bg-[var(--color-primary-400)] hover:text-black cursor-pointer ${className} ${
                isActive ? " bg-[var(--color-primary-400)] text-black " : ""
            } `}
        >
            <Link href={href}>{children}</Link>
        </Button>
    );
}
