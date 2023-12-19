import Image from "next/image";

import AnimatedText from "./components/animatedText";
import profilePic from "../../public/images/profile/developer-pic-1.png";

export default function Home() {
    return (
        <div className="w-full min-h-screen container m-auto flex items-center">
            <div className="grid grid-cols-2">
                <section className="w-full">
                    <Image
                        src={profilePic}
                        alt="developer"
                        quality={100}
                        priority
                    />
                </section>
                <section className="flex flex-col justify-center">
                    {/* <h1 className="text-3xl lg:text-[4rem] lg:leading-[4.2rem] font-bold">
                        Turning Vision Into Reality With Code And Design.
                    </h1> */}
                    <AnimatedText
                        text={
                            "Turning Vision Into Reality With Code And Design."
                        }
                        className="text-3xl lg:text-[4rem] lg:leading-[4.2rem] font-bold"
                    />
                    <p className="my-4 text-dark dark:text-light theme-transition">
                        As a skilled full-stack developer, I am dedicated to
                        turning ideas into innovative web applications. Explore
                        my latest projects and articles, showcasing my expertise
                        in React.js and web development.
                    </p>
                    <div>
                        <button className="font-medium px-2 py-1 border border-transparent rounded-md bg-dark text-light hover:bg-light hover:text-dark hover:border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light theme-transition">
                            Resume
                        </button>
                        <button className="ml-4 underline font-medium">
                            Contact
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}
