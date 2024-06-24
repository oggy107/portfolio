"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    TwitterIcon,
    GithubIcon,
    LinkedInIcon,
    SunIcon,
    MoonIcon,
    WindowIcon,
    DevtoIcon,
} from "../icons";

const DARK = "dark";
const LIGHT = "light";
const THEME = "urmalveer_theme";

export default function SocialLinks({ className, isHamburger = false }) {
    const [theme, setTheme] = useState(DARK);

    useEffect(() => {
        const userPref = localStorage.getItem(THEME);

        if (userPref) {
            if (userPref === LIGHT) {
                setLightTheme();
            } else {
                setDarkTheme();
            }
        } else {
            setSystemTheme();
        }
    }, []);

    const setDarkTheme = () => {
        setTheme(DARK);
        localStorage.setItem(THEME, DARK);
        document.documentElement.classList.add(DARK);
    };

    const setLightTheme = () => {
        setTheme(LIGHT);
        localStorage.setItem(THEME, LIGHT);
        document.documentElement.classList.remove(DARK);
    };

    const setSystemTheme = () => {
        localStorage.removeItem(THEME);
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setDarkTheme();
        } else {
            setLightTheme();
        }
    };

    const toggleTheme = () => {
        if (theme === DARK) {
            setLightTheme();
        } else {
            setDarkTheme();
        }
    };

    return (
        <ul
            className={`flex flex-row items-center ${className} gap-3.5 md:gap-5`}
        >
            <div
                className={`flex-row items-center gap-3.5 md:gap-5 ${
                    isHamburger ? "flex" : "hidden sm:flex"
                }`}
            >
                <li>
                    <a href="https://x.com/oggy107" target="_blank">
                        <TwitterIcon className="w-6 h-auto hover:scale-125 transition-transform" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/oggy107" target="_blank">
                        <GithubIcon
                            className={
                                "w-6 h-auto hover:scale-125 transition-transform"
                            }
                        />
                    </a>
                </li>
                <li>
                    <a href="https://dev.to/oggy107" target="_blank">
                        <DevtoIcon
                            className={
                                "w-6 h-auto scale-[1.35] hover:scale-[1.60] transition-transform"
                            }
                        />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/urmalveer-singh-05b486233"
                        target="_blank"
                    >
                        <LinkedInIcon
                            className={
                                "w-6 h-auto hover:scale-125 transition-transform"
                            }
                        />
                    </a>
                </li>
            </div>
            <li
                className={`flex flex-row gap-2 border border-black dark:border-white px-3 py-1 rounded-full theme-transition ${
                    isHamburger && "hidden"
                }`}
            >
                <div onClick={toggleTheme}>
                    {theme === DARK ? (
                        <MoonIcon className="w-6 h-auto" />
                    ) : (
                        <SunIcon className="w-6 h-auto" />
                    )}
                </div>
                <motion.div whileTap={{ scale: 0.9 }}>
                    <WindowIcon
                        whiletap={{ scale: 0.9 }}
                        className="w-6 h-auto"
                        onClick={setSystemTheme}
                    />
                </motion.div>
            </li>
        </ul>
    );
}
