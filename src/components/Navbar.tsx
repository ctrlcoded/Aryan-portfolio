"use client";

import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 w-full z-50 px-6 py-6"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/[0.03] backdrop-blur-lg border border-white/10 px-8 py-4 rounded-full shadow-2xl">
                <div className="text-white font-bold text-xl tracking-tighter">
                    ARYAN<span className="text-emerald-500">.</span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
                    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-white transition-colors">
                        Home
                    </button>
                    <button onClick={() => document.getElementById('work-section')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">
                        Work
                    </button>
                    <button onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">
                        Services
                    </button>
                    <button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-emerald-400 transition-colors">
                        Contact
                    </button>
                </div>

                <button
                    onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="md:hidden px-5 py-2.5 rounded-full bg-white/10 text-white font-medium text-sm backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors"
                >
                    Let's Talk
                </button>
            </div>
        </motion.nav>
    );
}
