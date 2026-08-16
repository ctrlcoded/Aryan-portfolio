"use client";

import { useEffect, useRef } from "react";
import { ExternalLink, Github, Car, Wallet, GraduationCap, Target } from "lucide-react";
import Reveal from "./Reveal";
import ProjectPreview from "./ProjectPreview";

type Variant = "gonomad" | "lekha" | "mlforai" | "solvi";

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
        title: "Lekha",
        category: "Full-Stack · Next.js",
        desc: "A fast, app-like personal finance tracker for logging income, expenses, and daily cash flow.",
        icon: <Wallet size={18} strokeWidth={1.75} className="text-white" />,
        variant: "lekha",
        previewUrl: "ledger-five-sandy.vercel.app",
        tint: "from-indigo-500/12 to-transparent",
        tech: ["Next.js 14", "Supabase", "Drizzle ORM", "PostgreSQL", "Tailwind"],
        liveUrl: "https://ledger-five-sandy.vercel.app/",
        githubUrl: "https://github.com/ctrlcoded/Ledger",
        details: [
            "Dashboard summaries for balance, income, expenses and cash flow, plus a calendar view for daily spending.",
            "Postgres triggers maintain materialized daily rollups to avoid expensive aggregations, with Row Level Security throughout.",
            "Email/password and Google OAuth via Supabase Auth, optimistic UI updates, and light/dark/system theming.",
        ],
    },
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
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduce) return;

        let raf = 0;

        const update = () => {
            raf = 0;
            const vh = window.innerHeight;
            const viewportCenter = vh / 2;
            // Wide "in-focus" dead-zone: while a card's centre is within this
            // distance of the viewport centre it stays fully sharp. Blur only
            // ramps up once the card is clearly heading off to become a neighbour.
            const sharpZone = vh * 0.52;
            const rampRange = vh * 0.5;

            for (const el of cardRefs.current) {
                if (!el) continue;
                const rect = el.getBoundingClientRect();
                const cardCenter = rect.top + rect.height / 2;
                const dist = Math.abs(cardCenter - viewportCenter);
                // 0 while inside the sharp zone, then 0→1 as it leaves toward the edges.
                const raw = Math.min(Math.max((dist - sharpZone) / rampRange, 0), 1);
                // Smoothstep for a soft, natural ramp.
                const e = raw * raw * (3 - 2 * raw);

                el.style.setProperty("--focus-scale", (1 - 0.16 * e).toFixed(4));
                el.style.setProperty("--focus-blur", (7 * e).toFixed(2) + "px");
                el.style.setProperty("--focus-opacity", (1 - 0.5 * e).toFixed(3));
            }
        };

        const onScroll = () => {
            if (!raf) raf = requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            if (raf) cancelAnimationFrame(raf);
        };
    }, []);

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
                        <Reveal key={p.title} delay={i * 60} className="reveal-pop">
                          <div
                            ref={(el) => {
                                cardRefs.current[i] = el;
                            }}
                            className="focus-card"
                          >
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
                          </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
