import Reveal from "./Reveal";

const skills = [
    "React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB",
    "Prisma", "Tailwind CSS", "Framer Motion", "Python", "Scikit-learn",
    "Groq", "Gemini", "LaBSE", "Docker", "JWT", "Zustand", "TanStack Query",
];

function Row({ reverse = false }: { reverse?: boolean }) {
    return (
        <div className="flex overflow-hidden select-none" aria-hidden="true">
            <div className={`flex shrink-0 items-center gap-3 pr-3 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
                {skills.map((s) => (
                    <span
                        key={s}
                        className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-[15px] font-medium text-white/75"
                    >
                        {s}
                    </span>
                ))}
            </div>
            <div className={`flex shrink-0 items-center gap-3 pr-3 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
                {skills.map((s) => (
                    <span
                        key={`${s}-dup`}
                        className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-[15px] font-medium text-white/75"
                    >
                        {s}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default function Skills() {
    return (
        <section className="relative z-20 bg-white/[0.015] py-20 md:py-28 border-t border-white/5 overflow-hidden">
            <Reveal className="text-center mb-12 px-5">
                <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#2997ff] mb-4">
                    Toolkit
                </p>
                <h2 className="tracking-apple text-3xl md:text-5xl font-semibold text-gradient leading-[1.05]">
                    Tools I work with.
                </h2>
            </Reveal>

            <div className="relative flex flex-col gap-4">
                {/* edge fades */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 z-10 bg-gradient-to-r from-black to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 z-10 bg-gradient-to-l from-black to-transparent" />
                <Row />
                <Row reverse />
            </div>
        </section>
    );
}
