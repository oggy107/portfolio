// "use client";
import Parser from "rss-parser";
import { getLinkPreview } from "link-preview-js";

import AnimatedText from "../components/animatedText";
import Article from "./components/article";

async function fetchArticleLinks() {
    const parser = new Parser();

    const feed = await fetch("https://dev.to/feed/oggy107");

    const data = await parser.parseString(await feed.text());

    const links = [];

    data.items.forEach((item) => {
        links.push(item.link);
    });

    return links;
}

export default function Articles() {
    return (
        <div className="w-full min-h-[calc(100vh-8rem)] container m-auto py-7 lg:py-12">
            <section className="text-center text-[2rem] sm:text-[3rem] whitespace-nowrap lg:text-[5rem] lg:leading-[5rem] font-bold">
                <AnimatedText text="Articles" type="fade-in" />
            </section>
            <section className="flex flex-col gap-12 my-8 lg:my-16">
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
            </section>
        </div>
    );
}
