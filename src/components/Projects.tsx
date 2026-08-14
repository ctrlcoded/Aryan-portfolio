import { ExternalLink, Github, Car, Sparkles, GraduationCap, Target } from "lucide-react";
import Reveal from "./Reveal";
import ProjectPreview from "./ProjectPreview";

type Variant = "gonomad" | "lumina" | "mlforai" | "solvi";

type Project = {
    title: string;
    category: string;
    desc: string;
    icon: React.ReactNode;
    variant: Variant;
    previewUrl: string;
    tint: string;
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
        icon: <Car size={18} strokeWidth={1.75} className="text-white" />,
        variant: "gonomad",
        previewUrl: "go-nomad.netlify.app",
        tint: "from-emerald-500/12 to-transparent",
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
        icon: <Sparkles size={18} strokeWidth={1.75} className="text-white" />,
        variant: "lumina",
        previewUrl: "lumina-ai-orcin.vercel.app",
        tint: "from-violet-500/12 to-transparent",
        tech: ["Next.js 16", "TypeScript", "Zustand", "Tailwind 4", "Framer Motion"],
        liveUrl: "https://lumina-ai-orcin.vercel.app/",
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
        icon: <GraduationCap size={18} strokeWidth={1.75} className="text-white" />,
        variant: "mlforai",
        previewUrl: "mlforai.vercel.app",
        tint: "from-amber-500/12 to-transparent",
        tech: ["Next.js 16", "MDX", "Tailwind 4", "Turbopack"],
        liveUrl: "https://mlforai.vercel.app/",
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
        icon: <Target size={18} strokeWidth={1.75} className="text-white" />,
        variant: "solvi",
        previewUrl: "solvi-jade.vercel.app",
        tint: "from-white/15 to-transparent",
        tech: ["Next.js 16", "React 19", "Prisma", "SQLite", "TanStack Query", "Gemini"],
        liveUrl: "https://solvi-jade.vercel.app/",
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
                    <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-white/50 mb-4">
                        Selected Work
                    </p>
                    <h2 className="tracking-apple text-5xl md:text-7xl font-semibold text-gradient leading-[1.02]">
                        Things I&apos;ve built.
                    </h2>
                    <p className="mt-5 text-lg md:text-xl text-white/60 font-normal max-w-2xl mx-auto tracking-tight">
                        Four products spanning AI tooling, education, and full-stack platforms.
                    </p>
                </Reveal>

                <div className="flex flex-col gap-8 md:gap-10">
                    {projects.map((p, i) => (
                        <Reveal key={p.title} delay={i * 60}>
                            <article className="group relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] glass hover:border-white/15 hover:-translate-y-1 hover:shadow-[0_24px_70px_-20px_rgba(41,151,255,0.28)] transition-all duration-500">
                                <div className="grid lg:grid-cols-2 gap-0">
                                    {/* Product mockup */}
                                    <div
                                        className={`relative min-h-[280px] lg:min-h-full overflow-hidden ${
                                            i % 2 === 1 ? "lg:order-2" : ""
                                        }`}
                                    >
                                        <ProjectPreview variant={p.variant} url={p.previewUrl} tint={p.tint} />
                                        {/* small icon badge */}
                                        <div className="absolute top-5 left-5 flex items-center gap-2 rounded-full glass px-3 py-1.5">
                                            <span className="flex h-5 w-5 items-center justify-center">{p.icon}</span>
                                            <span className="text-[13px] font-semibold tracking-tight text-white/90">
                                                {p.title}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 md:p-12 flex flex-col justify-center">
                                        <span className="text-[12px] font-semibold tracking-[0.16em] uppercase text-white/45 mb-4">
                                            {p.category}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4 leading-snug">
                                            {p.desc}
                                        </h3>

                                        <ul className="space-y-3 mb-7 text-[15px] md:text-base text-white/60 font-normal leading-relaxed">
                                            {p.details.map((d, idx) => (
                                                <li key={idx} className="flex gap-3 items-start">
                                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/35 shrink-0" />
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
                                                    className="group/btn flex items-center gap-2 px-5 h-11 rounded-full bg-white hover:bg-white/90 text-black text-sm font-medium transition-colors"
                                                >
                                                    Live Demo{" "}
                                                    <ExternalLink
                                                        size={16}
                                                        className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                                                    />
                                                </a>
                                            )}
                                            <a
                                                href={p.githubUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="group/btn flex items-center gap-2 px-5 h-11 rounded-full bg-white/8 hover:bg-white/15 text-white text-sm font-medium border border-white/10 transition-colors"
                                            >
                                                GitHub{" "}
                                                <Github
                                                    size={16}
                                                    className="transition-transform group-hover/btn:scale-110"
                                                />
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
