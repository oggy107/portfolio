import AnimatedText from "../components/animatedText";

export default function Project() {
    return (
        <div className="w-full min-h-[calc(100vh-8rem)] container m-auto py-7 lg:py-12">
            <section className="text-center text-[2rem] sm:text-[3rem] whitespace-nowrap lg:text-[5rem] lg:leading-[5rem] font-bold">
                <AnimatedText text="Ideas shape reality" type="fade-in" />
            </section>
        </div>
    );
}
