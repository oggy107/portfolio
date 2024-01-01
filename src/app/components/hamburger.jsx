"use client";

import { useState, useEffect } from "react";

import NavLinks from "./navlinks";
import SocialLinks from "./sociallinks";

export default function HamburderMenu() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        window.onresize = () => {
            setIsOpen(false);
        };
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="block sm:hidden" onClick={toggleMenu}>
                <div
                    className={`w-6 h-0.5 bg-dark dark:bg-light transition-transform duration-300 ${
                        isOpen && "rotate-45 translate-y-1.5"
                    }`}
                ></div>
                <div
                    className={`w-6 h-0.5 bg-dark dark:bg-light my-1 transition-opacity duration-300 ${
                        isOpen ? "opacity-0" : "opacity-100"
                    }`}
                ></div>
                <div
                    className={`w-6 h-0.5 bg-dark dark:bg-light transition-transform duration-300 ${
                        isOpen && "-rotate-45 -translate-y-1.5"
                    }`}
                ></div>
            </div>
            <div
                className={`fixed w-[100vw] h-[100vh] z-10 top-16 left-0 bg-dark/30 transition-all ease-linear duration-300 ${
                    isOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-[110%] opacity-0"
                }`}
            >
                <div
                    className={`fixed flex flex-col items-center justify-center top-[50vh] left-[50vw] w-[70vw] h-[50vh] my-auto translate-x-[-50%] p-4 rounded-lg bg-light/90 dark:bg-dark/90 z-20 transition-all ease-linear duration-300 backdrop-blur-sm hover:backdrop-blur-lg ${
                        isOpen
                            ? "translate-y-[-50%] opacity-100"
                            : "translate-y-[-450%] opacity-0"
                    }`}
                    onClick={toggleMenu}
                >
                    <NavLinks className={"w-fit text-center mx-auto mb-5"} />
                    <SocialLinks isHamburger className={"justify-center"} />
                </div>
            </div>
        </>
    );
}
