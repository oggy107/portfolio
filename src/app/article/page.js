import Link from "next/link";
import Parser from "rss-parser";
import { getLinkPreview } from "link-preview-js";

import AnimatedText from "../components/animatedText";
import Article from "./components/article";

async function fetchArticleLinks() {
    const parser = new Parser();

    const feed = await fetch("https://dev.to/feed/oggy107");

    const data = await parser.parseString(await feed.text());

    const links = [];

    data.items.forEach((item, index) => {
        if (index > 3) return;
        links.push(item.link);
    });

    return links;
}

export default function Articles() {
    return (
        <div className="w-full min-h-[calc(100vh-8rem)] container m-auto py-7 lg:py-12">
            <section className="text-center text-[2rem] sm:text-[3rem] whitespace-nowrap lg:text-[5rem] lg:leading-[5rem] font-bold">
                <AnimatedText text="Give to grow" type="fade-in" />
            </section>
            <article className="flex flex-col gap-12 my-8 lg:my-16">
                {fetchArticleLinks().then((links) => {
                    return links.map(async (link) => {
                        return getLinkPreview(link).then((data) => {
                            return (
                                <Article
                                    title={data.title}
                                    image={data.images[0]}
                                    desc={data.description}
                                    link={link}
                                />
                            );
                        });
                    });
                })}
            </article>
            <section className="w-fit mx-auto">
                <Link
                    className="group"
                    target="_blank"
                    href="https://dev.to/oggy107"
                >
                    <h3 className="text-2xl lg:text-4xl">
                        View More Articles
                        <div className="h-[2px] rounded-sm w-0 mt-[2px] group-hover:w-full bg-black dark:bg-white transition-[width] duration-300"></div>
                    </h3>
                </Link>
            </section>
        </div>
    );
}
