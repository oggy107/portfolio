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
    "up-down": {
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
    },
    "down-up": {
        initial: {
            y: 40,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
            },
        },
    },
    "fade-in": {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.6,
            },
        },
    },
};

/**
 * Animate the text
 * @param {{ text: string, className: string, type: "up-down" | "down-up" | "fade-in", highlights: number[] }} param0
 */
export default function AnimatedText({
    text,
    className,
    type = "up-down",
    highlights = [],
}) {
    return (
        <motion.div variants={container} initial="initial" animate="animate">
            <h1 className={` ${className}`}>
                {text.split(" ").map((word, index) => (
                    <motion.span
                        key={index}
                        className={`inline-block ${
                            highlights.includes(index + 1) &&
                            "bg-gradient-to-r from-blue-500 via-red-500 to-blue-600 text-transparent bg-clip-text bg-[length:200%_200%] animate-highlight"
                        }`}
                        variants={{ ...singleWord[type] }}
                    >
                        {word}&nbsp;
                    </motion.span>
                ))}
            </h1>
        </motion.div>
    );
}
