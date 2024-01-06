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
                        position="Full Stack Developer"
                        company="Freelance"
                        // companyLink=""
                        time="2021 - Present"
                        address="Remote"
                        work="Worked on a team of freelance developers called 'Web Wizards' to build various full stack web applications using modern technologies like React, Next.js, Node.js, tailwind CSS, etc. We have worked on multiple projects and have gained valuable experience in working with various technologies and team work."
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
                        {companyLink ? (
                            <a href={`${companyLink}`} target="_blank">
                                @{company}
                            </a>
                        ) : (
                            <span>@{company}</span>
                        )}
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
