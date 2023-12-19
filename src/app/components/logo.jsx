import Link from "next/link";

export default function Logo() {
    return (
        <Link
            className="text-2xl bg-dark text-light font-bold rounded-full p-2 border border-transparent hover:bg-light hover:text-dark hover:border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light theme-transition"
            href="/"
        >
            US
        </Link>
    );
}
