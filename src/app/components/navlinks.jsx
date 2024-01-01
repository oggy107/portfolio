"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "About",
        path: "/about",
    },
    {
        name: "Articles",
        path: "/article",
    },
    {
        name: "Projects",
        path: "/project",
    },
];

export default function Links({ className }) {
    const pathName = usePathname();

    return (
        <nav className={`items-center font-medium gap-3 md:gap-5 ${className}`}>
            {links.map((link) => (
                <Link key={link.path} href={link.path} className="group">
                    {link.name}
                    {pathName === link.path ? (
                        <div className="h-[2px] rounded-sm w-full mt-[2px] bg-black dark:bg-white theme-transition"></div>
                    ) : (
                        <div className="h-[2px] rounded-sm w-0 mt-[2px] group-hover:w-full bg-black dark:bg-white transition-[width] duration-300"></div>
                    )}
                </Link>
            ))}
        </nav>
    );
}
