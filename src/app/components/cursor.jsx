"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 60,
            y: mousePosition.y - 120,
        },
    };

    return (
        <motion.div
            variants={variants}
            animate="default"
            transition={{
                duration: 0.05,
            }}
            className={`fixed z-50 w-32 h-32 blur-[90px] bg-dark dark:bg-light opacity-60 rounded-full pointer-events-none theme-transition`}
        ></motion.div>
    );
}
