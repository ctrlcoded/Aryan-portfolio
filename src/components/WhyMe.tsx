export default function WhyMe() {
    const points = [
        { title: "500+", desc: "DSA problems solved" },
        { title: "1800+", desc: "LeetCode rating" },
        { title: "Security", desc: "Built production auth systems" },
        { title: "Systems", desc: "Strong backend & system design" },
        { title: "Leadership", desc: "Led 2000+ participant hackathon" }
    ];

    return (
        <section className="bg-[#0a0a0a] py-32 px-4 md:px-24 border-t border-white/5 relative z-20">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
                <div className="lg:w-1/3">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1]">
                        Why Work With Me
                    </h2>
                    <p className="mt-6 text-xl font-light text-zinc-400">
                        I combine strong computer science fundamentals with practical engineering experience to deliver robust, scalable solutions.
                    </p>
                </div>
                <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {points.map((p, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-colors flex flex-col justify-center">
                            <h3 className="text-4xl lg:text-5xl font-black text-white mb-3">{p.title}</h3>
                            <p className="text-lg text-zinc-400 font-light leading-snug">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
