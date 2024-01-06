"use client";

import { useRef } from "react";
import { useScroll, motion } from "framer-motion";

import LiIcon from "./liIcon";

export default function Education() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });

    return (
        <section className="mt-14 mb-24 md:mt-16 md:mb-32">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
                Education
            </h1>
            <div className="w-[75%] relative flex gap-16 sm:gap-32 mx-auto my-12 lg:my-16">
                <motion.div
                    ref={ref}
                    className="w-[7px] sm:w-[4px] relative left-[36.5px] sm:left-[36px] top-[3px] bg-dark dark:bg-light origin-top theme-transition"
                    style={{ scaleY: scrollYProgress }}
                />
                <ul className="mx-auto">
                    <SingleEducation
                        institue="Budhadal Public School"
                        time="2018-2020"
                        address="Patiala, Punjab"
                        description="Completed 11th and 12th from Budhadal Public School."
                    />
                    <SingleEducation
                        institue="Khalsa College Patiala"
                        time="2020-2023"
                        address="Patiala, Punjab"
                        description="Completed BCA from Khalsa College Patiala."
                    />
                    <SingleEducation
                        institue="Jetking Infotrain"
                        time="2023-2024"
                        address="Chandigarh, Punjab"
                        description="Currently pursuing Masters in Blockchain Development from Jetking Infotrain."
                    />
                </ul>
            </div>
        </section>
    );
}

function SingleEducation({
    institue,
    // company,
    // companyLink,
    time,
    address,
    description,
}) {
    const ref = useRef(null);

    return (
        <li ref={ref} className="max-w-2xl mb-8 lg:mb-16">
            <LiIcon reference={ref} />
            <div className="text-xl md:text-2xl lg:text-3xl font-bold">
                <h3>
                    {institue}
                    {/* <span className="text-2xl text-primary dark:text-primaryDark theme-transition">
                        &nbsp;{" "}
                        <a href={`${companyLink}`} target="_blank">
                            @{company}
                        </a>
                    </span> */}
                </h3>
            </div>
            <p className="text-dark/75 dark:text-light/60 theme-transition">
                {time} | {address}
            </p>
            <p>{description}</p>
        </li>
    );
}
