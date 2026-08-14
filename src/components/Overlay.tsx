"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Section 1: Intro (0% to ~20%)
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -80]);
    const scale1 = useTransform(scrollYProgress, [0, 0.2], [1, 1.06]);

    // Section 2: Statement 1 (20% to ~50%)
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.42, 0.5], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.2, 0.5], [80, -80]);

    // Section 3: Statement 2 (55% to ~88%)
    const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.78, 0.88], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.55, 0.88], [80, -80]);

    return (
        <div
            ref={containerRef}
            className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10"
        >
            <div className="sticky top-0 h-screen w-full flex items-center p-6 md:p-24 overflow-hidden">
                {/* Section 1 — Intro */}
                <motion.div
                    style={{ opacity: opacity1, y: y1, scale: scale1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-5"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        className="mb-8 flex items-center gap-2.5 rounded-full glass px-4 py-2 text-[13px] font-medium text-white/80"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-70"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                        </span>
                        Available for new work
                    </motion.div>

                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: 90, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                            className="tracking-apple text-[13vw] sm:text-7xl lg:text-8xl font-semibold text-gradient max-w-5xl leading-[0.95]"
                        >
                            Aryan Raghav
                        </motion.h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.45 }}
                        className="text-lg md:text-2xl text-white/60 font-normal mt-6 max-w-2xl leading-relaxed tracking-tight"
                    >
                        Software engineer building AI products and scalable systems —
                        from multi-model LLM pipelines to production-grade web platforms.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.65 }}
                        className="mt-10 flex flex-wrap items-center justify-center gap-3 pointer-events-auto"
                    >
                        <button
                            onClick={() =>
                                document
                                    .getElementById("work-section")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                            className="rounded-full bg-white hover:bg-white/90 text-black text-[15px] font-medium px-7 h-12 flex items-center transition-colors"
                        >
                            View Work
                        </button>
                        <a
                            href="/Aryan-Raghav-Resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full glass hover:bg-white/10 text-white text-[15px] font-medium px-7 h-12 flex items-center transition-colors"
                        >
                            Résumé
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="mt-9 flex items-center gap-2 text-white/45 text-sm font-medium"
                    >
                        <span>Scroll to explore</span>
                        <span className="inline-block animate-bounce">↓</span>
                    </motion.div>
                </motion.div>

                {/* Section 2 */}
                <motion.div
                    style={{ opacity: opacity2, y: y2 }}
                    className="absolute inset-x-6 md:inset-x-24 top-1/2 -translate-y-1/2 flex flex-col items-start text-left"
                >
                    <h2 className="tracking-apple text-5xl md:text-8xl font-semibold text-white max-w-4xl leading-[1.02]">
                        Where{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/70 to-white/40">
                            intelligence
                        </span>{" "}
                        meets engineering.
                    </h2>
                    <p className="mt-8 text-xl md:text-3xl font-normal text-white/60 max-w-xl tracking-tight">
                        Research-driven models. Products built to ship.
                    </p>
                </motion.div>

                {/* Section 3 */}
                <motion.div
                    style={{ opacity: opacity3, y: y3 }}
                    className="absolute inset-x-6 md:inset-x-24 top-1/2 -translate-y-1/2 flex flex-col items-end text-right"
                >
                    <h2 className="tracking-apple text-5xl md:text-8xl font-semibold text-white max-w-4xl leading-[1.02]">
                        Designed with{" "}
                        <span className="italic font-light text-white/70">intent.</span>
                    </h2>
                    <p className="mt-8 text-xl md:text-3xl font-normal text-white/60 max-w-xl tracking-tight">
                        Every detail, considered.
                    </p>
                    <div className="mt-8 w-24 h-px bg-white/25" />
                </motion.div>
            </div>
        </div>
    );
}
