"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
    { label: "Work", id: "work-section" },
    { label: "Research", id: "research-section" },
    { label: "Experience", id: "experience-section" },
    { label: "About", id: "about-section" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const go = (id: string) =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-4"
        >
            <div
                className={`max-w-5xl mx-auto flex items-center justify-between rounded-full px-5 sm:px-7 h-14 transition-all duration-500 ${
                    scrolled
                        ? "bg-black/60 backdrop-blur-2xl border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
                        : "bg-transparent border border-transparent"
                }`}
            >
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-[15px] font-semibold tracking-tight text-white"
                >
                    Aryan Raghav
                </button>

                <div className="hidden md:flex items-center gap-9 text-[13px] font-medium text-white/70">
                    {links.map((l) => (
                        <button
                            key={l.id}
                            onClick={() => go(l.id)}
                            className="hover:text-white transition-colors duration-200"
                        >
                            {l.label}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => go("contact-section")}
                    className="rounded-full bg-[#2997ff] hover:bg-[#0a84ff] text-white text-[13px] font-medium px-4 sm:px-5 h-9 flex items-center transition-colors duration-200"
                >
                    Contact
                </button>
            </div>
        </motion.nav>
    );
}
