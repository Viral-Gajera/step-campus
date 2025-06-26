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
    return (
        <Button
            variant="ghost"
            // hover:bg-white hover:text-primary-600
            className={`cursor-pointer ${className} `}
        >
            <Link href={href}>{children}</Link>
        </Button>
    );
}
