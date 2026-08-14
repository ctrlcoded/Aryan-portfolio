"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
    { label: "Work", id: "work-section" },
    { label: "Research", id: "research-section" },
    { label: "Experience", id: "experience-section" },
    { label: "About", id: "about-section" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState<string>("");

    const { scrollYProgress } = useScroll();
    const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Active-section detection
    useEffect(() => {
        const ids = [...links.map((l) => l.id), "contact-section"];
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActive(e.target.id);
                });
            },
            { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
        );
        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    // Body scroll lock + Esc close for the drawer
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
            const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
            window.addEventListener("keydown", onKey);
            return () => {
                document.body.style.overflow = "";
                window.removeEventListener("keydown", onKey);
            };
        }
    }, [open]);

    const go = (id: string) => {
        setOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            {/* scroll progress bar */}
            <motion.div
                style={{ scaleX: progress }}
                className="fixed top-0 left-0 right-0 z-[60] h-0.5 origin-left bg-white"
            />

            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: EASE }}
                className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-4"
            >
                <div
                    className={`max-w-5xl mx-auto flex items-center justify-between rounded-full px-5 sm:px-7 h-14 transition-all duration-500 ${
                        scrolled || open
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

                    <div className="hidden md:flex items-center gap-9 text-[13px] font-medium">
                        {links.map((l) => (
                            <button
                                key={l.id}
                                onClick={() => go(l.id)}
                                className={`relative transition-colors duration-200 ${
                                    active === l.id ? "text-white" : "text-white/60 hover:text-white"
                                }`}
                            >
                                {l.label}
                                {active === l.id && (
                                    <motion.span
                                        layoutId="nav-active"
                                        className="absolute -bottom-1.5 left-0 right-0 mx-auto h-1 w-1 rounded-full bg-white"
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => go("contact-section")}
                            className="hidden sm:flex rounded-full bg-white hover:bg-white/90 text-black text-[13px] font-medium px-5 h-9 items-center transition-colors duration-200"
                        >
                            Contact
                        </button>
                        <button
                            onClick={() => setOpen((v) => !v)}
                            aria-label={open ? "Close menu" : "Open menu"}
                            aria-expanded={open}
                            className="md:hidden h-9 w-9 flex items-center justify-center rounded-full text-white hover:bg-white/10 transition-colors"
                        >
                            {open ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile drawer */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setOpen(false)}
                        className="fixed inset-0 z-40 md:hidden bg-black/80 backdrop-blur-2xl"
                    >
                        <motion.nav
                            onClick={(e) => e.stopPropagation()}
                            className="absolute inset-x-0 top-0 pt-28 pb-12 px-8 flex flex-col gap-2"
                        >
                            {[...links, { label: "Contact", id: "contact-section" }].map((l, i) => (
                                <motion.button
                                    key={l.id}
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 12 }}
                                    transition={{ delay: 0.06 * i + 0.05, duration: 0.5, ease: EASE }}
                                    onClick={() => go(l.id)}
                                    className={`text-left tracking-apple text-4xl font-semibold py-3 border-b border-white/10 transition-colors ${
                                        active === l.id ? "text-white" : "text-white/70"
                                    }`}
                                >
                                    {l.label}
                                </motion.button>
                            ))}
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
