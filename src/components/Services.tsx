import { Brain, MonitorSmartphone, ShieldCheck, Database, Webhook, Rocket } from "lucide-react";
import Reveal from "./Reveal";

const services = [
    {
        icon: <Brain size={24} strokeWidth={1.5} className="text-white" />,
        title: "AI & LLM Engineering",
        desc: "Multi-model pipelines, embeddings, retrieval, and rigorous evaluation of agentic systems.",
    },
    {
        icon: <MonitorSmartphone size={24} strokeWidth={1.5} className="text-white" />,
        title: "Full-Stack Products",
        desc: "Production web apps with React, Next.js, and Node — from first commit to deploy.",
    },
    {
        icon: <ShieldCheck size={24} strokeWidth={1.5} className="text-white" />,
        title: "Secure Auth",
        desc: "JWT and role-based access control built for real-world security and reliability.",
    },
    {
        icon: <Database size={24} strokeWidth={1.5} className="text-white" />,
        title: "Data & ML",
        desc: "Scikit-learn ensembles, feature extraction, and retrieval that improves accuracy.",
    },
    {
        icon: <Webhook size={24} strokeWidth={1.5} className="text-white" />,
        title: "REST APIs",
        desc: "Scalable, well-documented backend services with clean, performant architecture.",
    },
    {
        icon: <Rocket size={24} strokeWidth={1.5} className="text-white" />,
        title: "MVP Development",
        desc: "Fast, focused execution to take early-stage ideas from concept to launch.",
    },
];

export default function Services() {
    return (
        <section
            id="services-section"
            className="relative z-20 bg-black py-28 md:py-40 px-5 md:px-10 border-t border-white/5"
        >
            <div className="max-w-6xl mx-auto">
                <Reveal className="mb-16 md:mb-20 max-w-2xl">
                    <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#2997ff] mb-4">
                        Capabilities
                    </p>
                    <h2 className="tracking-apple text-4xl md:text-6xl font-semibold text-gradient leading-[1.03]">
                        What I can help you build.
                    </h2>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {services.map((s, i) => (
                        <Reveal key={s.title} delay={i * 60}>
                            <div className="group h-full flex flex-col p-8 md:p-9 rounded-3xl glass hover:border-white/15 transition-all duration-500">
                                <div className="h-12 w-12 rounded-2xl bg-white/8 border border-white/10 flex items-center justify-center mb-7 shrink-0 transition-transform duration-500 group-hover:scale-105">
                                    {s.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white tracking-tight mb-3">
                                    {s.title}
                                </h3>
                                <p className="text-[15px] text-white/65 font-normal leading-relaxed grow">
                                    {s.desc}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
