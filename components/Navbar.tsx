import Image from "next/image";
import NavLink from "./ui/NavLink";
export default function () {
    return (
        <nav className="border-b custom-border sticky top-0 backdrop-blur-sm">
            <div className="container custom-border border-l border-r mx-auto px-16 py-4 flex justify-between">
                <div>
                    <Image src="/logo.png" alt="" width={50} height={50} />
                </div>
                <div className="flex items-center gap-3">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/login">Login</NavLink>
                    <NavLink href="/sign-up">Sign Up</NavLink>
                </div>
            </div>
        </nav>
    );
}
