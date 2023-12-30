import Image from "next/image";
import Link from "next/link";

import AnimatedText from "../components/animatedText";
import project_1 from "../../../public/images/projects/project_1.png";
import project_2 from "../../../public/images/projects/project_2.png";

export default function Project() {
    return (
        <div className="w-full min-h-[calc(100vh-8rem)] container m-auto py-7 lg:py-12">
            <section className="text-center text-[2rem] sm:text-[3rem] whitespace-nowrap lg:text-[5rem] lg:leading-[5rem] font-bold">
                <AnimatedText text="Ideas shape reality" type="fade-in" />
            </section>
            <section className="flex flex-col gap-12 my-8 lg:my-16">
                <SingleProject
                    image={project_1}
                    name="AuthentiScan"
                    desc="A blockchain-based fake product identification system is a technological solution designed to combat the proliferation of counterfeit goods in the market"
                    link="https://github.com/oggy107/AuthentiScan"
                />
                <SingleProject
                    image={project_2}
                    name="crowd-surge"
                    desc="Meet 'Crowd-Surge' – your go-to minimalistic crowdfunding platform. Create or back campaigns seamlessly with Ethereum (ETH). Enjoy a clean, mobile-responsive interface for an effortless experience. Revolutionize crowdfunding with Crowd-Surge – where simplicity meets impact."
                    link="https://github.com/oggy107/crowd-surge"
                />
            </section>
        </div>
    );
}

function SingleProject({ image, name, desc, link }) {
    return (
        <div className="mx-6 lg:w-[90%] lg:mx-auto flex flex-col lg:flex-row lg:gap-4 px-6 py-8 border border-dark/90 rounded-3xl dark:border-light/50 p-5 shadow-[10px_10px] shadow-dark/90 dark:shadow-light/50 transition-shadow theme-transition">
            <Image
                className="w-[90%] lg:w-[45%] rounded-2xl self-center shadow-lg hover:scale-105 transition-transform duration-300"
                src={image}
                placeholder="blur"
                alt="project one"
            />
            <div className="flex gap-3 justify-between flex-col">
                <div>
                    <h3 className="text-2xl lg:text-4xl text-center lg:text-left my-4 lg:my-0 lg:mb-3 font-bold">
                        {name}
                    </h3>
                    <p>{desc}</p>
                </div>
                <Link
                    href={link}
                    className="w-fit mx-auto lg:mx-0 shadow-lg text-lg font-semibold px-3 py-2 border-2 border-transparent rounded-lg bg-dark text-light hover:bg-light hover:text-dark hover:border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light theme-transition"
                >
                    Visit Project
                </Link>
            </div>
        </div>
    );
}
