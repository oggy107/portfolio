import Link from "next/link";

export default function Logo() {
    return (
        <Link
            className="text-2xl bg-dark text-light font-bold rounded-full p-2 hover:bg-light hover:text-dark hover:border hover:border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border dark:hover:border-light theme-transition"
            href="/"
        >
            US
        </Link>
    );
}
