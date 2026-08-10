import Reveal from "./Reveal";

const stats = [
    { title: "500+", desc: "DSA problems solved" },
    { title: "1800+", desc: "Peak LeetCode rating" },
    { title: "2000+", desc: "Hackathon participants led" },
    { title: "4", desc: "AI & full-stack products shipped" },
];

export default function WhyMe() {
    return (
        <section
            id="about-section"
            className="relative z-20 bg-black py-28 md:py-40 px-5 md:px-10 border-t border-white/5 overflow-hidden"
        >
            {/* ambient backdrop for tonal variety */}
            <div className="pointer-events-none absolute -top-20 right-0 h-[420px] w-[560px] rounded-full bg-[#7ba7ff]/8 blur-[150px]" />
            <div className="max-w-6xl mx-auto relative flex flex-col lg:flex-row gap-14 lg:gap-20">
                <Reveal className="lg:w-2/5">
                    <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#2997ff] mb-4">
                        About
                    </p>
                    <h2 className="tracking-apple text-4xl md:text-6xl font-semibold text-gradient leading-[1.03]">
                        Fundamentals first. <br />
                        Products that ship.
                    </h2>
                    <p className="mt-6 text-lg text-white/65 font-normal leading-relaxed tracking-tight">
                        I pair strong computer-science fundamentals with hands-on engineering —
                        evaluating frontier AI models by day and building AI-native products the
                        rest of the time. I care about correctness, systems that scale, and
                        interfaces that feel effortless.
                    </p>
                    <div className="mt-8 flex items-center gap-3 rounded-full glass w-fit px-4 py-2.5">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                        </span>
                        <span className="text-sm font-medium text-white/70">
                            Currently — evaluating frontier AI models &amp; building AI-native products
                        </span>
                    </div>
                </Reveal>

                <div className="lg:w-3/5 grid grid-cols-2 gap-4 md:gap-6">
                    {stats.map((p, i) => (
                        <Reveal key={p.desc} delay={i * 70}>
                            <div className="h-full p-7 md:p-9 rounded-3xl glass hover:border-white/15 transition-colors duration-500 flex flex-col justify-center">
                                <h3 className="text-4xl md:text-6xl font-semibold text-white tracking-apple mb-2">
                                    {p.title}
                                </h3>
                                <p className="text-[15px] md:text-lg text-white/60 font-normal leading-snug">
                                    {p.desc}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
