import { Code2, GraduationCap } from "lucide-react";
import DataAnnotationLogo from "./DataAnnotationLogo";
import Reveal from "./Reveal";

const daBullets = [
    "Evaluate frontier AI coding models (Claude Code, OpenAI Codex) against rubric criteria — task success, instruction-following, and code quality — producing detailed feedback that feeds model improvement.",
    "Assess 1–2 hour long-horizon autonomous agentic sessions, reviewing model reasoning, intermediate decisions, and end-to-end code changes for correctness and reliability.",
    "Design adversarial prompts and run multi-turn interactive evaluations (3–5+ turns) to stress-test model behavior and score response correctness.",
    "Write structured qualitative and quantitative assessments used to benchmark and compare model versions across releases.",
];

const sdeBullets = [
    "Built MERN-stack authentication & authorization with stateless session management, cutting server overhead ~30%.",
    "Implemented JWT + bcrypt auth and RBAC middleware enforcing route-level permissions across user roles.",
    "Refined the client auth flow with React hooks and Axios interceptors, reducing token-refresh errors ~40%.",
];

function Tag({ children }: { children: React.ReactNode }) {
    return (
        <span className="text-[12px] font-medium text-white/70 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
            {children}
        </span>
    );
}

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
                        Where I&apos;ve worked.
                    </h2>
                </Reveal>

                {/* Featured role — DataAnnotation */}
                <Reveal>
                    <article className="rounded-[2rem] md:rounded-[2.5rem] glass overflow-hidden">
                        <div className="grid lg:grid-cols-[0.9fr_1.6fr]">
                            <div className="relative bg-gradient-to-br from-white/[0.06] to-transparent p-8 md:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/8">
                                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl w-full max-w-[280px] mx-auto">
                                    <DataAnnotationLogo className="w-full h-auto" />
                                </div>
                                <div className="mt-8 text-center lg:text-left">
                                    <p className="text-white font-semibold tracking-tight">DataAnnotation</p>
                                    <p className="text-white/60 text-sm mt-1">Remote · United States</p>
                                </div>
                            </div>

                            <div className="p-8 md:p-12">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-8">
                                    <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                                        AI Model Evaluator
                                    </h3>
                                    <span className="text-sm font-medium text-white/60 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 w-fit">
                                        Jun 2026 — Present
                                    </span>
                                </div>

                                <ul className="space-y-5">
                                    {daBullets.map((b, i) => (
                                        <li key={i} className="flex gap-4 items-start">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#2997ff] shrink-0" />
                                            <span className="text-[15px] md:text-base text-white/65 font-normal leading-relaxed">
                                                {b}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 mt-9">
                                    {["LLM Evaluation", "Agentic Systems", "Adversarial Prompting", "Benchmarking", "Code Quality"].map(
                                        (t) => (
                                            <Tag key={t}>{t}</Tag>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </article>
                </Reveal>

                {/* Secondary role + Education */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8">
                    <Reveal delay={80}>
                        <article className="h-full rounded-[1.75rem] glass p-8 md:p-10">
                            <div className="flex items-start justify-between gap-3 mb-5">
                                <div className="h-12 w-12 rounded-2xl bg-white/8 border border-white/10 flex items-center justify-center shrink-0">
                                    <Code2 size={24} strokeWidth={1.5} className="text-white" />
                                </div>
                                <span className="text-[13px] font-medium text-white/60 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
                                    May — Jun 2025
                                </span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
                                SDE Intern
                            </h3>
                            <p className="text-white/60 text-sm mt-1 mb-5">Soni Stacc Technology · Remote</p>
                            <ul className="space-y-3.5">
                                {sdeBullets.map((b, i) => (
                                    <li key={i} className="flex gap-3 items-start">
                                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#2997ff] shrink-0" />
                                        <span className="text-[15px] text-white/65 font-normal leading-relaxed">{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    </Reveal>

                    <Reveal delay={140}>
                        <article className="h-full rounded-[1.75rem] glass p-8 md:p-10 flex flex-col">
                            <div className="flex items-start justify-between gap-3 mb-5">
                                <div className="h-12 w-12 rounded-2xl bg-white/8 border border-white/10 flex items-center justify-center shrink-0">
                                    <GraduationCap size={24} strokeWidth={1.5} className="text-white" />
                                </div>
                                <span className="text-[13px] font-medium text-white/60 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
                                    2022 — 2026
                                </span>
                            </div>
                            <p className="text-[13px] font-semibold tracking-[0.16em] uppercase text-white/45 mb-3">
                                Education
                            </p>
                            <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight leading-snug">
                                National Institute of Technology, Hamirpur
                            </h3>
                            <p className="text-white/65 text-[15px] mt-2">
                                B.Tech, Computer Science &amp; Engineering
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto pt-6">
                                {["DSA", "Operating Systems", "Computer Networks", "DBMS", "OOP"].map((t) => (
                                    <Tag key={t}>{t}</Tag>
                                ))}
                            </div>
                        </article>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
