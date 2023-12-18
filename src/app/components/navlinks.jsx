"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Links() {
    const pathName = usePathname();

    return (
        <nav className="flex items-center">
            <ul className="flex gap-5 font-bold">
                <li>
                    <Link href="/">
                        Home
                        {pathName === "/" && (
                            <div className="h-[2px] rounded-sm w-full mt-[2px] bg-black dark:bg-white"></div>
                        )}
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        About
                        {pathName === "/about" && (
                            <div className="h-[2px] rounded-sm w-full mt-[2px] bg-black dark:bg-white"></div>
                        )}
                    </Link>
                </li>
                <li>
                    <Link href="/article">
                        Articles
                        {pathName === "/article" && (
                            <div className="h-[2px] rounded-sm w-full mt-[2px] bg-black dark:bg-white"></div>
                        )}
                    </Link>
                </li>
                <li>
                    <Link href="/project">
                        Projects
                        {pathName === "/project" && (
                            <div className="h-[2px] rounded-sm w-full mt-[2px] bg-black dark:bg-white"></div>
                        )}
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
