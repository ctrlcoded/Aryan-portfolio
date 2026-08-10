import { ExternalLink, Github, Car, Sparkles, GraduationCap, Target } from "lucide-react";
import Reveal from "./Reveal";

type Project = {
    title: string;
    category: string;
    desc: string;
    icon: React.ReactNode;
    gradient: string;
    glow: string;
    tech: string[];
    liveUrl?: string;
    githubUrl: string;
    details: string[];
};

const projects: Project[] = [
    {
        title: "GoNomad",
        category: "Full-Stack · MERN",
        desc: "A production car-rental marketplace connecting owners and travelers across North India.",
        icon: <Car size={40} strokeWidth={1.5} className="text-white" />,
        gradient: "from-emerald-500/25 via-teal-500/10 to-transparent",
        glow: "bg-emerald-500/20",
        tech: ["React 19", "Express 5", "MongoDB", "Gemini API", "ImageKit", "JWT"],
        liveUrl: "https://go-nomad.netlify.app/",
        githubUrl: "https://github.com/ctrlcoded/GoNomad",
        details: [
            "Dual-interface marketplace — customers book vehicles by city while owners manage fleet, bookings and revenue.",
            "AI-generated car descriptions via Google Gemini, ImageKit cloud media, and JWT + Bcrypt auth with role-based access.",
            "Real-time availability and a full booking lifecycle: pending → confirmed → completed.",
        ],
    },
    {
        title: "Lumina AI",
        category: "AI · Next.js",
        desc: "A free, zero-backend AI text humanizer that runs entirely in the browser with your own LLM key.",
        icon: <Sparkles size={40} strokeWidth={1.5} className="text-white" />,
        gradient: "from-violet-500/25 via-indigo-500/10 to-transparent",
        glow: "bg-violet-500/20",
        tech: ["Next.js 16", "TypeScript", "Zustand", "Tailwind 4", "Framer Motion"],
        githubUrl: "https://github.com/ctrlcoded/lumina-ai",
        details: [
            "100% client-side — API keys never leave the browser, giving real privacy with zero server cost.",
            "Multi-provider LLM support (Gemini, GPT-4o, Claude, DeepSeek) with unlimited word count.",
            "Premium glassmorphism interface with light/dark theming and single-click humanization.",
        ],
    },
    {
        title: "MLforAI",
        category: "Education · Open Source",
        desc: "A 23-module, interview-focused curriculum bridging classical ML and generative AI.",
        icon: <GraduationCap size={40} strokeWidth={1.5} className="text-white" />,
        gradient: "from-amber-500/25 via-orange-500/10 to-transparent",
        glow: "bg-amber-500/20",
        tech: ["Next.js 16", "MDX", "Tailwind 4", "Turbopack"],
        githubUrl: "https://github.com/ctrlcoded/MLforAI",
        details: [
            "Three progressive pillars — core foundations, classical ML, and generative AI (transformers, RAG, agents, MLOps).",
            "Content-as-code with MDX and embedded React components, statically generated for performance.",
            "Built around mental models, system-design tradeoffs, and production reality over rote theory.",
        ],
    },
    {
        title: "Solvi",
        category: "AI · Full-Stack",
        desc: "An AI-powered spaced-repetition companion for mastering the NeetCode 150.",
        icon: <Target size={40} strokeWidth={1.5} className="text-white" />,
        gradient: "from-sky-500/25 via-cyan-500/10 to-transparent",
        glow: "bg-sky-500/20",
        tech: ["Next.js 16", "React 19", "Prisma", "SQLite", "TanStack Query", "Gemini"],
        githubUrl: "https://github.com/ctrlcoded/Solvi",
        details: [
            "Smart review scheduling using a custom interval + ease-factor spaced-repetition algorithm.",
            "AI-generated day-by-day study roadmaps via Gemini and a knowledge vault of complexities and syntax.",
            "Optimistic UI with TanStack Query, backed by SQLite and Prisma.",
        ],
    },
];

export default function Projects() {
    return (
        <section
            id="work-section"
            className="bg-black py-28 md:py-40 px-5 md:px-10 border-t border-white/5 relative z-20"
        >
            <div className="max-w-6xl mx-auto">
                <Reveal className="mb-16 md:mb-24 text-center">
                    <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#2997ff] mb-4">
                        Selected Work
                    </p>
                    <h2 className="tracking-apple text-5xl md:text-7xl font-semibold text-gradient leading-[1.02]">
                        Things I&apos;ve built.
                    </h2>
                    <p className="mt-5 text-lg md:text-xl text-white/50 font-normal max-w-2xl mx-auto tracking-tight">
                        Four products spanning AI tooling, education, and full-stack platforms.
                    </p>
                </Reveal>

                <div className="flex flex-col gap-8 md:gap-10">
                    {projects.map((p, i) => (
                        <Reveal key={p.title} delay={i * 60}>
                            <article className="group relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] glass hover:border-white/15 transition-all duration-500">
                                <div className="grid lg:grid-cols-2 gap-0">
                                    {/* Visual panel */}
                                    <div
                                        className={`relative min-h-[240px] lg:min-h-full overflow-hidden bg-gradient-to-br ${p.gradient} ${
                                            i % 2 === 1 ? "lg:order-2" : ""
                                        }`}
                                    >
                                        <div className={`absolute -top-16 -left-16 h-64 w-64 rounded-full blur-3xl ${p.glow}`} />
                                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-10">
                                            <div className="h-20 w-20 rounded-3xl glass flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                                                {p.icon}
                                            </div>
                                            <span className="text-3xl md:text-4xl font-semibold tracking-apple text-white/95">
                                                {p.title}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 md:p-12 flex flex-col justify-center">
                                        <span className="text-[12px] font-semibold tracking-[0.16em] uppercase text-white/40 mb-4">
                                            {p.category}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4 leading-snug">
                                            {p.desc}
                                        </h3>

                                        <ul className="space-y-3 mb-7 text-[15px] md:text-base text-white/55 font-normal leading-relaxed">
                                            {p.details.map((d, idx) => (
                                                <li key={idx} className="flex gap-3 items-start">
                                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/30 shrink-0" />
                                                    <span>{d}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {p.tech.map((t) => (
                                                <span
                                                    key={t}
                                                    className="text-[12px] font-medium text-white/70 bg-white/5 border border-white/10 rounded-full px-3 py-1"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex flex-wrap gap-3 mt-auto">
                                            {p.liveUrl && (
                                                <a
                                                    href={p.liveUrl}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="flex items-center gap-2 px-5 h-11 rounded-full bg-[#2997ff] hover:bg-[#0a84ff] text-white text-sm font-medium transition-colors"
                                                >
                                                    Live Demo <ExternalLink size={16} />
                                                </a>
                                            )}
                                            <a
                                                href={p.githubUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 px-5 h-11 rounded-full bg-white/8 hover:bg-white/15 text-white text-sm font-medium border border-white/10 transition-colors"
                                            >
                                                GitHub <Github size={16} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
