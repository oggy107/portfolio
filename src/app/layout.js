import { Montserrat, Roboto_Serif } from "next/font/google";
import "./globals.css";

import NavLinks from "./components/navlinks";
import SocialLinks from "./components/sociallinks";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
});
const roboto = Roboto_Serif({ subsets: ["latin"], variable: "--font-roboto" });

const fonts = {
    montserrat,
    roboto,
};

export const metadata = {
    title: "Urmalveer Singh",
    description: "Portfolio site for Urmalveer Singh",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark">
            <body
                className={`${fonts.montserrat.variable} ${fonts.roboto.variable} font-montserrat dark:bg-black dark:text-white`}
            >
                <header className="w-full h-[4rem] fixed top-0 right-0 left-0 backdrop-blur-2xl hidden sm:flex">
                    <section className="container mx-auto flex justify-between">
                        <NavLinks />
                        <SocialLinks />
                    </section>
                </header>
                <section className="mt-[4rem]">{children}</section>
            </body>
        </html>
    );
}
