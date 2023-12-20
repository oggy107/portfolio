import Image from "next/image";
import Link from "next/link";

import AnimatedText from "./components/animatedText";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import lightBulbPic from "../../public/images/svgs/miscellaneous_icons_1.svg";
import { LinkArrow } from "./icons";

export default function Home() {
    return (
        <div className="w-full min-h-[calc(100vh-8rem)] container m-auto flex items-center">
            <div className="grid grid-cols-2">
                <section className="w-full">
                    <Image
                        src={profilePic}
                        alt="developer"
                        quality={100}
                        placeholder="blur"
                        priority
                        className="drop-shadow-[0_0_1.3rem_#00000070] dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                    />
                </section>
                <section className="flex flex-col justify-center">
                    <AnimatedText
                        text={
                            "Turning Vision Into Reality With Code And Design."
                        }
                        highlights={[6, 8]}
                        className="text-3xl lg:text-[4rem] lg:leading-[4.2rem] font-bold"
                    />
                    <p className="my-4 font-medium text-dark dark:text-light theme-transition">
                        As a skilled full-stack developer, I am dedicated to
                        turning ideas into innovative web applications. Explore
                        my latest projects and articles, showcasing my expertise
                        in web development, modern frameworks and web3.
                    </p>
                    <div className="flex items-center">
                        <Link
                            href="/dummy.pdf"
                            target="_blank"
                            download={true}
                            className="flex gap-1 items-center shadow-lg text-lg font-semibold px-3 py-2 border-2 border-transparent rounded-lg bg-dark text-light hover:bg-light hover:text-dark hover:border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light theme-transition"
                        >
                            Resume
                            <LinkArrow className={"w-7"} />
                        </Link>
                        <Link
                            href="mailto:urmalsingh10@gmail.com"
                            className="text-lg ml-4 underline font-medium"
                        >
                            Contact
                        </Link>
                    </div>
                </section>
                <section className="w-24 absolute bottom-24 right-20">
                    <Image src={lightBulbPic} alt="idea" className="w-full" />
                </section>
            </div>
        </div>
    );
}
