/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    darkMode: "class",
    theme: {
        extend: {
            backgroundImage: {
                circularLight:
                    // "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px)",
                    "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,transparent 5px,transparent 100px)",
                circularDark:
                    // "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 100px)",
                    "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,transparent 5px,transparent 100px)",
                circularLightLg:
                    // "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 80px)",
                    "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,transparent 5px,transparent 80px)",

                circularDarkLg:
                    // "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 80px)",
                    "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,transparent 5px,transparent 80px)",

                circularLightMd:
                    // "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)",
                    "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,transparent 5px,transparent 60px)",

                circularDarkMd:
                    // "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 60px)",
                    "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,transparent 5px,transparent 60px)",
                circularLightSm:
                    // "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 40px)",
                    "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,transparent 5px,transparent 40px)",

                circularDarkSm:
                    // "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 40px)",
                    "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,transparent 5px,transparent 40px)",
            },
            fontFamily: {
                montserrat: ["var(--font-montserrat)"],
                roboto: ["var(--font-roboto)"],
            },
            colors: {
                dark: "#1b1b1b",
                light: "#f5f5f5",
                primary: "#B63E96", // 240,86,199
                primaryDark: "#58E6D9", // 80,230,217
            },
            boxShadow: {
                "3xl": "0 15px 15px 1px rgba(80,230,217, 0.4)",
            },
        },
    },
    plugins: [],
};
