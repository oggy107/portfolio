import Image from "next/image";

import AnimatedText from "../components/animatedText";

import developerPic from "../../../public/images/profile/developer-pic-2.jpg";

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
        </div>
    );
}
