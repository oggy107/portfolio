import { Montserrat, Roboto_Serif } from "next/font/google";
import "./globals.css";

import Cursor from "./components/cursor";
import Header from "./components/header";

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
    description:
        "As a software developer, I transform ideas into reality. Explore my portfolio for innovative solutions and a blend of creativity and technical expertise",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark">
            <body
                className={`${fonts.montserrat.variable} ${fonts.roboto.variable} font-montserrat bg-light dark:bg-dark dark:text-white theme-transition`}
            >
                <Cursor />
                <Header />
                <main className="my-[4rem]">{children}</main>
                <footer className="w-full h-[4rem] border-t z-50 fixed bottom-0 backdrop-blur-xl flex items-center justify-center">
                    <div>
                        {new Date().getFullYear()} &copy; Urmalveer Singh. All
                        Rights Reserved
                    </div>
                </footer>
            </body>
        </html>
    );
}
