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

export default function Links() {
    const pathName = usePathname();

    return (
        <nav className="flex items-center font-medium gap-5">
            {links.map((link) => (
                <Link key={link.path} href={link.path}>
                    {link.name}
                    {pathName === link.path && (
                        <div className="h-[2px] rounded-sm w-full mt-[2px] bg-black dark:bg-white theme-transition"></div>
                    )}
                </Link>
            ))}
        </nav>
    );
}
