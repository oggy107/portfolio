import { Inter, Roboto_Serif } from "next/font/google";
import "./globals.css";

import NavLinks from "./components/navlinks";
import SocialLinks from "./components/sociallinks";

// const inter = Inter({ subsets: ["latin"] });
const inter = Roboto_Serif({ subsets: ["latin"] });

export const metadata = {
    title: "Urmalveer Singh",
    description: "Portfolio site for Urmalveer Singh",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark">
            <body className={`{inter.className} dark:bg-black dark:text-white`}>
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
