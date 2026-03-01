"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
    const containerRef = useRef(null);

    // Track scroll on the 500vh container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Section 1: Intro (0% to ~20%)
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
    const scale1 = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

    // Section 2: Statement 1 (25% to ~50%)
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.2, 0.5], [100, -100]);

    // Section 3: Statement 2 (55% to ~85%)
    const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.85], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.55, 0.85], [100, -100]);

    return (
        <div ref={containerRef} className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">
            <div className="sticky top-0 h-screen w-full flex items-center p-8 md:p-24 overflow-hidden">

                {/* Section 1 */}
                <motion.div
                    style={{ opacity: opacity1, y: y1, scale: scale1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8 flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm font-medium text-zinc-300 backdrop-blur-md"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Open for Freelance
                    </motion.div>

                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] max-w-5xl leading-[1.1]"
                        >
                            Full Stack MERN Developer Building Scalable & Secure Web Applications
                        </motion.h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-lg md:text-xl text-zinc-400 font-light mt-6 max-w-3xl leading-relaxed"
                    >
                        I help startups and businesses build production-ready applications using React, Node.js, MongoDB, and Docker with strong backend architecture and authentication systems.
                    </motion.p>


                </motion.div>

                {/* Section 2 */}
                <motion.div
                    style={{ opacity: opacity2, y: y2 }}
                    className="absolute inset-x-8 md:inset-x-24 top-1/2 -translate-y-1/2 flex flex-col items-start text-left"
                >
                    <h2 className="text-5xl md:text-8xl font-bold tracking-tight text-white max-w-3xl leading-[1.1]">
                        I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-400">digital experiences</span>
                    </h2>
                    <p className="mt-8 text-xl md:text-3xl font-light text-zinc-300 max-w-xl">
                        Blending high-performance rendering with meticulous design.
                    </p>
                </motion.div>

                {/* Section 3 */}
                <motion.div
                    style={{ opacity: opacity3, y: y3 }}
                    className="absolute inset-x-8 md:inset-x-24 top-1/2 -translate-y-1/2 flex flex-col items-end text-right"
                >
                    <h2 className="text-5xl md:text-8xl font-bold tracking-tight text-white max-w-3xl leading-[1.1]">
                        Bridging <span className="italic font-light text-zinc-300">design</span> & engineering.
                    </h2>
                    <div className="mt-8 w-24 h-[1px] bg-white/30" />
                </motion.div>

            </div>
        </div>
    );
}
