import Link from "next/link";

import NavLinks from "./navlinks";
import SocialLinks from "./sociallinks";

export default function Header() {
    return (
        <header className="w-full h-[4rem] z-50 fixed top-0  backdrop-blur-2xl hidden sm:flex">
            <section className="container mx-auto flex items-center justify-between">
                <NavLinks />
                <Link
                    className="text-2xl bg-dark text-light font-bold rounded-full p-2 border border-transparent hover:bg-light hover:text-dark hover:border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light theme-transition"
                    href="/"
                >
                    US
                </Link>
                <SocialLinks />
            </section>
        </header>
    );
}
