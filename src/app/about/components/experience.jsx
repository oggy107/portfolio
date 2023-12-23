"use client";

import { useRef } from "react";
import { useScroll, motion } from "framer-motion";

import LiIcon from "./liIcon";

export default function Experience() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });

    return (
        <section className="mt-14 mb-24 md:mt-16 md:mb-32">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
                Experience
            </h1>
            <div className="w-[75%] relative flex gap-16 sm:gap-32 mx-auto my-12 lg:my-16">
                <motion.div
                    ref={ref}
                    className="w-[4px] relative left-[35px] top-[3px] bg-dark dark:bg-light origin-top theme-transition"
                    style={{ scaleY: scrollYProgress }}
                />
                <ul className="mx-auto">
                    <SingleExperience
                        position="Frontend Developer"
                        company="Google"
                        companyLink="https://www.google.com"
                        time="2022 - Present"
                        address="San Francisco, CA"
                        work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
                    />
                    <SingleExperience
                        position="Frontend Developer"
                        company="Google"
                        companyLink="https://www.google.com"
                        time="2022 - Present"
                        address="San Francisco, CA"
                        work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
                    />
                    <SingleExperience
                        position="Frontend Developer"
                        company="Google"
                        companyLink="https://www.google.com"
                        time="2022 - Present"
                        address="San Francisco, CA"
                        work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
                    />
                </ul>
            </div>
        </section>
    );
}

function SingleExperience({
    position,
    company,
    companyLink,
    time,
    address,
    work,
}) {
    const ref = useRef(null);

    return (
        <li ref={ref} className="max-w-2xl mb-8 lg:mb-16">
            <LiIcon reference={ref} />
            <div className="text-xl md:text-2xl lg:text-3xl font-bold">
                <h3>
                    {position}
                    <span className="text-2xl text-primary dark:text-primaryDark theme-transition">
                        &nbsp;{" "}
                        <a href={`${companyLink}`} target="_blank">
                            @{company}
                        </a>
                    </span>
                </h3>
            </div>
            <p className="text-dark/75 dark:text-light/60 theme-transition">
                {time} | {address}
            </p>
            <p>{work}</p>
        </li>
    );
}
