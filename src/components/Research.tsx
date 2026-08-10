import { Languages, Layers, Network, GitMerge } from "lucide-react";
import Reveal from "./Reveal";

const pipeline = [
    {
        icon: <Network size={26} strokeWidth={1.5} className="text-white" />,
        step: "01 · Extraction",
        title: "Multi-model LLM pipeline",
        desc: "A Groq-powered pipeline extracts cultural features across a dataset of 500+ Hindi idioms, capturing nuance a single model would miss.",
    },
    {
        icon: <Layers size={26} strokeWidth={1.5} className="text-white" />,
        step: "02 · Retrieval",
        title: "LaBSE multilingual embeddings",
        desc: "LaBSE embeddings with cosine similarity filter semantic noise and sharpen retrieval relevance across languages.",
    },
    {
        icon: <GitMerge size={26} strokeWidth={1.5} className="text-white" />,
        step: "03 · Aggregation",
        title: "Scikit-learn ensemble model",
        desc: "An ensemble aggregation model fuses signals to improve translation accuracy and preserve meaning.",
    },
];

export default function Research() {
    return (
        <section
            id="research-section"
            className="relative z-20 bg-black py-28 md:py-40 px-5 md:px-10 border-t border-white/5 overflow-hidden"
        >
            {/* ambient glow */}
            <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-[420px] w-[720px] rounded-full bg-[#2997ff]/10 blur-[140px]" />

            <div className="max-w-6xl mx-auto relative">
                <Reveal className="mb-16 md:mb-24 max-w-3xl">
                    <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#2997ff] mb-4">
                        Research
                    </p>
                    <div className="flex items-center gap-4 mb-5">
                        <div className="h-14 w-14 rounded-2xl glass flex items-center justify-center shrink-0">
                            <Languages size={28} strokeWidth={1.5} className="text-white" />
                        </div>
                        <h2 className="tracking-apple text-4xl md:text-6xl font-semibold text-gradient leading-[1.02]">
                            Indic Language Modeling
                        </h2>
                    </div>
                    <p className="text-lg md:text-xl text-white/65 font-normal tracking-tight leading-relaxed">
                        Preserving cultural meaning in translation — a multi-stage system that
                        extracts, retrieves, and aggregates cultural features from Hindi idioms.
                    </p>
                </Reveal>

                <div className="grid md:grid-cols-3 gap-5 md:gap-6">
                    {pipeline.map((s, i) => (
                        <Reveal key={s.step} delay={i * 90}>
                            <div className="relative h-full rounded-3xl glass p-8 hover:border-white/15 transition-colors duration-500">
                                <div className="h-12 w-12 rounded-2xl bg-white/8 border border-white/10 flex items-center justify-center mb-6">
                                    {s.icon}
                                </div>
                                <p className="text-[12px] font-semibold tracking-[0.16em] uppercase text-white/55 mb-3">
                                    {s.step}
                                </p>
                                <h3 className="text-xl font-semibold text-white tracking-tight mb-3">
                                    {s.title}
                                </h3>
                                <p className="text-[15px] text-white/65 font-normal leading-relaxed">
                                    {s.desc}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={120} className="mt-8 flex flex-wrap gap-2">
                    {["Groq API", "Llama 3.3/4", "Kimi K2", "LaBSE", "Cosine Similarity", "Scikit-learn", "RAG", "500+ Idioms"].map(
                        (t) => (
                            <span
                                key={t}
                                className="text-[12px] font-medium text-white/70 bg-white/5 border border-white/10 rounded-full px-3 py-1.5"
                            >
                                {t}
                            </span>
                        )
                    )}
                </Reveal>
            </div>
        </section>
    );
}
