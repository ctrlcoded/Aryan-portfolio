"use client";

import { Mail, Linkedin, Github as GithubIcon, MessageCircle } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact-section" className="bg-[#0a0a0a] py-32 px-4 md:px-24 border-t border-white/5 relative z-20 pb-48">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
                <div className="md:w-1/2">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1]">Let's Talk.</h2>
                    <p className="mt-6 text-xl font-light text-zinc-400 mb-12">
                        I respond within 24 hours. Let's discuss your next project or freelance opportunity.
                    </p>
                    <div className="flex flex-col gap-6">
                        <a href="mailto:delhibhanu2@gmail.com" className="flex items-center gap-6 group text-zinc-300 hover:text-white transition-colors">
                            <div className="h-14 w-14 rounded-full bg-white/5 group-hover:bg-white/10 flex items-center justify-center border border-white/10 transition-colors"><Mail size={22} /></div>
                            <span className="text-xl font-medium tracking-wide">Email Me</span>
                        </a>
                        <a href="https://www.linkedin.com/in/aryan-raghav-96407b252/" target="_blank" rel="noreferrer" className="flex items-center gap-6 group text-zinc-300 hover:text-white transition-colors">
                            <div className="h-14 w-14 rounded-full bg-white/5 group-hover:bg-white/10 flex items-center justify-center border border-white/10 transition-colors"><Linkedin size={22} /></div>
                            <span className="text-xl font-medium tracking-wide">LinkedIn</span>
                        </a>
                        <a href="https://github.com/ctrlcoded" target="_blank" rel="noreferrer" className="flex items-center gap-6 group text-zinc-300 hover:text-white transition-colors">
                            <div className="h-14 w-14 rounded-full bg-white/5 group-hover:bg-white/10 flex items-center justify-center border border-white/10 transition-colors"><GithubIcon size={22} /></div>
                            <span className="text-xl font-medium tracking-wide">GitHub</span>
                        </a>
                        <a href="https://wa.me/917668775545" target="_blank" rel="noreferrer" className="flex items-center gap-6 group text-zinc-300 hover:text-white transition-colors">
                            <div className="h-14 w-14 rounded-full bg-white/5 group-hover:bg-white/10 flex items-center justify-center border border-white/10 transition-colors"><MessageCircle size={22} /></div>
                            <span className="text-xl font-medium tracking-wide">WhatsApp</span>
                        </a>
                    </div>
                </div>

                <div className="md:w-1/2">
                    <form
                        action="https://formsubmit.co/delhibhanu2@gmail.com"
                        method="POST"
                        target="_blank"
                        className="flex flex-col gap-6 bg-white/[0.02] p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl"
                    >
                        <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>

                        {/* FormSubmit Configuration */}
                        <input type="hidden" name="_subject" value="New Portfolio Inquiry" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_captcha" value="false" />

                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                            className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all font-light"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all font-light"
                        />
                        <textarea
                            name="message"
                            placeholder="Tell me about your project"
                            rows={5}
                            required
                            className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all resize-none font-light"
                        ></textarea>

                        <button
                            type="submit"
                            className="bg-white text-black font-bold text-lg py-5 rounded-2xl mt-2 hover:bg-zinc-200 transition-colors hover:scale-[1.02] active:scale-[0.98] flex justify-center items-center"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
