import DataAnnotationLogo from "./DataAnnotationLogo";
import Reveal from "./Reveal";

const bullets = [
    "Evaluate frontier AI coding models (Claude Code, OpenAI Codex) against rubric criteria — task success, instruction-following, and code quality — producing detailed feedback that feeds model improvement.",
    "Assess 1–2 hour long-horizon autonomous agentic sessions, reviewing model reasoning, intermediate decisions, and end-to-end code changes for correctness and reliability.",
    "Design adversarial prompts and run multi-turn interactive evaluations (3–5+ turns) to stress-test model behavior and score response correctness.",
    "Write structured qualitative and quantitative assessments used to benchmark and compare model versions across releases.",
];

export default function Experience() {
    return (
        <section
            id="experience-section"
            className="relative z-20 bg-black py-28 md:py-40 px-5 md:px-10 border-t border-white/5"
        >
            <div className="max-w-6xl mx-auto">
                <Reveal className="mb-14 md:mb-20 text-center">
                    <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#2997ff] mb-4">
                        Experience
                    </p>
                    <h2 className="tracking-apple text-5xl md:text-7xl font-semibold text-gradient leading-[1.02]">
                        Where I work.
                    </h2>
                </Reveal>

                <Reveal>
                    <article className="rounded-[2rem] md:rounded-[2.5rem] glass overflow-hidden">
                        <div className="grid lg:grid-cols-[0.9fr_1.6fr]">
                            {/* Logo / company panel */}
                            <div className="relative bg-gradient-to-br from-white/[0.06] to-transparent p-8 md:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/8">
                                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl w-full max-w-[280px] mx-auto">
                                    <DataAnnotationLogo className="w-full h-auto" />
                                </div>
                                <div className="mt-8 text-center lg:text-left">
                                    <p className="text-white font-semibold tracking-tight">DataAnnotation</p>
                                    <p className="text-white/45 text-sm mt-1">Remote · United States</p>
                                </div>
                            </div>

                            {/* Role details */}
                            <div className="p-8 md:p-12">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-8">
                                    <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                                        AI Model Evaluator
                                    </h3>
                                    <span className="text-sm font-medium text-white/50 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 w-fit">
                                        Jun 2026 — Present
                                    </span>
                                </div>

                                <ul className="space-y-5">
                                    {bullets.map((b, i) => (
                                        <li key={i} className="flex gap-4 items-start">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#2997ff] shrink-0" />
                                            <span className="text-[15px] md:text-base text-white/60 font-normal leading-relaxed">
                                                {b}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 mt-9">
                                    {["LLM Evaluation", "Agentic Systems", "Adversarial Prompting", "Benchmarking", "Code Quality"].map(
                                        (t) => (
                                            <span
                                                key={t}
                                                className="text-[12px] font-medium text-white/70 bg-white/5 border border-white/10 rounded-full px-3 py-1.5"
                                            >
                                                {t}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </article>
                </Reveal>
            </div>
        </section>
    );
}
