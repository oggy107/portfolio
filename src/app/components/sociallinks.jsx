"use client";

import { useEffect, useState } from "react";
import {
    TwitterIcon,
    GithubIcon,
    LinkedInIcon,
    SunIcon,
    MoonIcon,
    WindowIcon,
    DevtoIcon,
} from "../icons";

export default function SocialLinks() {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const userTheme = localStorage.getItem("theme");

        if (userTheme) {
            if (userTheme === "light") {
                setLightTheme();
            } else {
                setDarkTheme();
            }
        } else {
            setSystemTheme();
        }
    }, []);

    const setDarkTheme = () => {
        setTheme("dark");
        localStorage.setItem("theme", "dark");
        document.querySelector("html").classList.add("dark");
    };

    const setLightTheme = () => {
        setTheme("light");
        localStorage.setItem("theme", "light");
        document.querySelector("html").classList.remove("dark");
    };

    const setSystemTheme = (e) => {
        localStorage.removeItem("theme");
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setDarkTheme();
        } else {
            setLightTheme();
        }
    };

    const toggleTheme = () => {
        if (theme === "dark") {
            setLightTheme();
        } else {
            setDarkTheme();
        }
    };

    return (
        <ul className="flex flex-row gap-5 items-center">
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
                <LinkedInIcon
                    className={
                        "w-6 h-auto hover:scale-125 transition-transform"
                    }
                />
            </li>
            <li className="flex flex-row gap-2 border border-black dark:border-white px-3 py-1 rounded-full theme-transition">
                <div onClick={toggleTheme}>
                    {theme === "dark" ? (
                        <MoonIcon className="w-6 h-auto" />
                    ) : (
                        <SunIcon className="w-6 h-auto" />
                    )}
                </div>
                <WindowIcon className="w-6 h-auto" onClick={setSystemTheme} />
            </li>
        </ul>
    );
}
