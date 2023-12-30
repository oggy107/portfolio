import Image from "next/image";
import Link from "next/link";

export default function Article({ title, image, desc, link }) {
    return (
        <div className="mx-6 lg:w-[90%] lg:mx-auto flex flex-col lg:flex-row lg:gap-4 px-6 py-8 border border-dark/90 rounded-3xl dark:border-light/50 p-5 shadow-[10px_10px] shadow-dark/90 dark:shadow-light/50 transition-shadow duration-300 theme-transition">
            <Image
                className="w-[90%] lg:w-[45%] rounded-2xl self-center"
                src={image}
                width={400}
                height={400}
                alt={title}
            />
            <div className="flex gap-3 justify-between flex-col">
                <div>
                    <h3 className="text-2xl lg:text-4xl text-center lg:text-left my-3 lg:mb-2 font-bold">
                        {title}
                    </h3>
                    <p>{desc}</p>
                </div>
                <Link
                    href={link}
                    target="_blank"
                    className="w-fit mx-auto lg:mx-0 shadow-lg text-lg font-semibold px-3 py-2 border-2 border-transparent rounded-lg bg-dark text-light hover:bg-light hover:text-dark hover:border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light theme-transition"
                >
                    Read Article
                </Link>
            </div>
        </div>
    );
}
