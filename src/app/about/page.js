import Image from "next/image";

import AnimatedText from "../components/animatedText";
import SkillPill from "./components/skillPill";
import developerPic from "../../../public/images/profile/developer-pic-2.jpg";
import Experience from "./components/experience";
import Education from "./components/education";

export default function About() {
    return (
        <div className="w-full min-h-[calc(100vh-8rem)] container m-auto py-7 lg:py-12">
            <section className="text-center text-[2rem] sm:text-[3rem] whitespace-nowrap lg:text-[5rem] lg:leading-[5rem] font-bold">
                <AnimatedText text="Learn, Adapt, Thrive!" type="down-up" />
            </section>
            <section className="my-8 lg:my-16 flex flex-col items-center justify-around md:flex-row gap-4">
                <div className="w-full max-w-[700px]">
                    <h4 className="mb-4 text-xl font-bold text-dark/75 dark:text-light/50 theme-transition">
                        BIOGRAPHY
                    </h4>
                    <div>
                        <p>
                            Hello, I&apos;m{" "}
                            <span className="font-semibold">
                                Urmalveer Singh
                            </span>
                            , a seasoned full-stack developer proficient in both
                            web2 and web3 technologies. With a rich background
                            spanning 4 years, I am dedicated to crafting
                            aesthetically pleasing, highly functional, and
                            user-centric digital experiences. Continuously
                            embracing innovation, I am enthusiastic about
                            exploring the realms of artificial intelligence and
                            integrating its advancements into my skill set.
                        </p>
                        <p className="py-3">
                            My goal is to consistently bring my clients&apos;
                            visions to life through a combination of technical
                            expertise and a passion for staying at the forefront
                            of emerging technologies.
                        </p>
                        <p>
                            Whether I&apos;m working on a website, mobile app,
                            or other digital product, I bring my commitment to
                            design excellence and user-centered thinking to
                            every project I work on. I look forward to the
                            opportunity to bring my skills and passion to your
                            next project.
                        </p>
                    </div>
                </div>
                <div className="w-full max-w-[400px] border border-dark/90 rounded-3xl dark:border-light/50 p-5 shadow-[10px_10px] shadow-dark/90 dark:shadow-light/50 transition-shadow duration-300 theme-transition">
                    <Image
                        src={developerPic}
                        alt="developer"
                        className="w-full rounded-3xl"
                        quality={100}
                        placeholder="blur"
                        priority={true}
                    />
                </div>
            </section>
            <section className="my-14 md:my-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
                    Skills
                </h1>
                <div className="h-[70vh] sm:h-[80vh] lg:h-screen lg:w-[80%] lg:mx-auto flex items-center justify-center relative rounded-full bg-circularLight dark:bg-circularDark sm:bg-circularLightSm dark:sm:bg-circularDarkSm md:bg-circularLightMd dark:md:bg-circularDarkMd lg:bg-circularLightLg dark:lg:bg-circularDarkLg">
                    <SkillPill name="Web3" center />
                    <SkillPill name="Go lang" position={["65%", "55%"]} />
                    <SkillPill name="Tailwind CSS" position={["30%", "20%"]} />
                    <SkillPill name="JavaScript" position={["30%", "75%"]} />
                    <SkillPill name="ReactJS" position={["70%", "20%"]} />
                    <SkillPill name="NextJS" position={["10%", "45%"]} />
                    <SkillPill name="RDMS" position={["47%", "10%"]} />
                    <SkillPill name="No SQL DB" position={["85%", "44%"]} />
                    <SkillPill name="Node" position={["45%", "75%"]} />
                    <SkillPill name="Python" position={["75%", "75%"]} />
                    <SkillPill name="Rust" position={["15%", "15%"]} />
                    <SkillPill name="API" position={["55%", "30%"]} />
                    <SkillPill name="CSS" position={["25%", "50%"]} />
                    <SkillPill name="AI" position={["13%", "80%"]} />
                    <SkillPill name="HTML" position={["60%", "85%"]} />
                </div>
            </section>
            <Experience />
            <Education />
        </div>
    );
}
