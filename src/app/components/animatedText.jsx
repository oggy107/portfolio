"use client";
import { motion } from "framer-motion";

const container = {
    animate: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.2,
        },
    },
};

const singleWord = {
    initial: {
        y: -40,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
        },
    },
};

export default function AnimatedText({ text, className, highlights = [] }) {
    return (
        <motion.div variants={container} initial="initial" animate="animate">
            <h1 className={` ${className}`}>
                {text.split(" ").map((word, index) => (
                    <motion.span
                        key={index}
                        className={`inline-block ${
                            highlights.includes(index + 1) && "text-blue-400"
                        }`}
                        variants={singleWord}
                    >
                        {word}&nbsp;
                    </motion.span>
                ))}
            </h1>
        </motion.div>
    );
}
