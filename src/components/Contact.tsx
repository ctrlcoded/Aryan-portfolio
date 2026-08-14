"use client";

import { Mail, Linkedin, Github as GithubIcon, MessageCircle, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import Reveal from "./Reveal";

const socials = [
    { icon: <Mail size={20} strokeWidth={1.5} />, label: "Email", href: "mailto:delhibhanu2@gmail.com" },
    { icon: <Linkedin size={20} strokeWidth={1.5} />, label: "LinkedIn", href: "https://www.linkedin.com/in/aryan-raghav-96407b252/" },
    { icon: <GithubIcon size={20} strokeWidth={1.5} />, label: "GitHub", href: "https://github.com/ctrlcoded" },
    { icon: <MessageCircle size={20} strokeWidth={1.5} />, label: "WhatsApp", href: "https://wa.me/917668775545" },
];

type Status = "idle" | "submitting" | "success" | "error";

const inputBase =
    "bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:border-white/60 focus:bg-white/[0.07] transition-all font-normal";

export default function Contact() {
    const [status, setStatus] = useState<Status>("idle");
    const [error, setError] = useState("");

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        const payload = {
            name: String(data.get("name") || ""),
            email: String(data.get("email") || ""),
            message: String(data.get("message") || ""),
            _subject: "New Portfolio Inquiry",
            _template: "table",
        };

        setStatus("submitting");
        setError("");
        try {
            const res = await fetch("https://formsubmit.co/ajax/delhibhanu2@gmail.com", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify(payload),
            });
            if (!res.ok) throw new Error(`Request failed (${res.status})`);
            const json = await res.json();
            if (json.success === "true" || json.success === true) {
                setStatus("success");
                form.reset();
            } else {
                throw new Error(json.message || "Something went wrong.");
            }
        } catch (err) {
            setStatus("error");
            setError(err instanceof Error ? err.message : "Something went wrong. Please email me directly.");
        }
    }

    return (
        <section
            id="contact-section"
            className="relative z-20 bg-black py-28 md:py-40 px-5 md:px-10 border-t border-white/5"
        >
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-14 lg:gap-20">
                <Reveal className="lg:w-1/2">
                    <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-white/50 mb-4">
                        Contact
                    </p>
                    <h2 className="tracking-apple text-5xl md:text-7xl font-semibold text-gradient leading-[1.02]">
                        Let&apos;s talk.
                    </h2>
                    <p className="mt-5 text-lg md:text-xl text-white/60 font-normal mb-12 tracking-tight leading-relaxed">
                        I usually respond within 24 hours. Reach out about a role, a project, or
                        anything AI and engineering.
                    </p>
                    <div className="flex flex-col gap-3">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target={s.href.startsWith("http") ? "_blank" : undefined}
                                rel="noreferrer"
                                className="flex items-center gap-5 group text-white/75 hover:text-white transition-colors"
                            >
                                <div className="h-12 w-12 rounded-full glass group-hover:bg-white/10 flex items-center justify-center transition-colors">
                                    {s.icon}
                                </div>
                                <span className="text-lg font-medium tracking-tight">{s.label}</span>
                            </a>
                        ))}
                    </div>
                </Reveal>

                <Reveal delay={100} className="lg:w-1/2">
                    <form
                        onSubmit={onSubmit}
                        className="flex flex-col gap-4 glass p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem]"
                    >
                        <h3 className="text-2xl font-semibold text-white tracking-tight mb-2">
                            Send a message
                        </h3>

                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input id="name" type="text" name="name" placeholder="Name" required className={inputBase} />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input id="email" type="email" name="email" placeholder="Email" required className={inputBase} />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="message" className="sr-only">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Tell me about your project or role"
                                rows={5}
                                required
                                className={`${inputBase} resize-none`}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "submitting" || status === "success"}
                            className="bg-white hover:bg-white/90 disabled:opacity-70 text-black font-medium text-base py-4 rounded-2xl mt-2 transition-all hover:scale-[1.01] active:scale-[0.99] flex justify-center items-center gap-2"
                        >
                            {status === "submitting" && <Loader2 size={18} className="animate-spin" />}
                            {status === "success" && <CheckCircle2 size={18} />}
                            {status === "submitting"
                                ? "Sending…"
                                : status === "success"
                                ? "Sent!"
                                : "Send message"}
                        </button>

                        {/* Live status region for screen readers + inline feedback */}
                        <div aria-live="polite" className="min-h-[1.25rem]">
                            {status === "success" && (
                                <p className="text-sm text-emerald-400 font-medium">
                                    Thanks — your message is on its way. I&apos;ll be in touch soon.
                                </p>
                            )}
                            {status === "error" && (
                                <p className="text-sm text-red-400 font-medium">
                                    {error}{" "}
                                    <a href="mailto:delhibhanu2@gmail.com" className="underline">
                                        Email me directly
                                    </a>
                                    .
                                </p>
                            )}
                        </div>
                    </form>
                </Reveal>
            </div>
        </section>
    );
}
