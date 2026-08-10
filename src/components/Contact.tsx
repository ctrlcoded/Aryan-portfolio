"use client";

import { Mail, Linkedin, Github as GithubIcon, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";

const socials = [
    { icon: <Mail size={20} strokeWidth={1.5} />, label: "Email", href: "mailto:delhibhanu2@gmail.com" },
    { icon: <Linkedin size={20} strokeWidth={1.5} />, label: "LinkedIn", href: "https://www.linkedin.com/in/aryan-raghav-96407b252/" },
    { icon: <GithubIcon size={20} strokeWidth={1.5} />, label: "GitHub", href: "https://github.com/ctrlcoded" },
    { icon: <MessageCircle size={20} strokeWidth={1.5} />, label: "WhatsApp", href: "https://wa.me/917668775545" },
];

export default function Contact() {
    return (
        <section
            id="contact-section"
            className="relative z-20 bg-black py-28 md:py-40 px-5 md:px-10 border-t border-white/5"
        >
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-14 lg:gap-20">
                <Reveal className="lg:w-1/2">
                    <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#2997ff] mb-4">
                        Contact
                    </p>
                    <h2 className="tracking-apple text-5xl md:text-7xl font-semibold text-gradient leading-[1.02]">
                        Let&apos;s talk.
                    </h2>
                    <p className="mt-5 text-lg md:text-xl text-white/55 font-normal mb-12 tracking-tight leading-relaxed">
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
                                className="flex items-center gap-5 group text-white/70 hover:text-white transition-colors"
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
                        action="https://formsubmit.co/delhibhanu2@gmail.com"
                        method="POST"
                        target="_blank"
                        className="flex flex-col gap-4 glass p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem]"
                    >
                        <h3 className="text-2xl font-semibold text-white tracking-tight mb-2">
                            Send a message
                        </h3>

                        <input type="hidden" name="_subject" value="New Portfolio Inquiry" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_captcha" value="false" />

                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                            className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/35 focus:outline-none focus:border-[#2997ff]/60 focus:bg-white/[0.07] transition-all font-normal"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/35 focus:outline-none focus:border-[#2997ff]/60 focus:bg-white/[0.07] transition-all font-normal"
                        />
                        <textarea
                            name="message"
                            placeholder="Tell me about your project or role"
                            rows={5}
                            required
                            className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/35 focus:outline-none focus:border-[#2997ff]/60 focus:bg-white/[0.07] transition-all resize-none font-normal"
                        />

                        <button
                            type="submit"
                            className="bg-[#2997ff] hover:bg-[#0a84ff] text-white font-medium text-base py-4 rounded-2xl mt-2 transition-all hover:scale-[1.01] active:scale-[0.99] flex justify-center items-center"
                        >
                            Send message
                        </button>
                    </form>
                </Reveal>
            </div>
        </section>
    );
}
