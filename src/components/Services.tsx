import { MonitorSmartphone, ShieldCheck, LayoutDashboard, Webhook, Container, Rocket } from "lucide-react";

export default function Services() {
    const services = [
        { icon: <MonitorSmartphone size={28} className="text-white" />, title: "Full Stack MERN Apps", desc: "Production-ready web applications built from scratch with seamless user experiences." },
        { icon: <ShieldCheck size={28} className="text-white" />, title: "Secure Authentication", desc: "Robust JWT & Role-Based Access Control integration for total security." },
        { icon: <LayoutDashboard size={28} className="text-white" />, title: "Admin Dashboards", desc: "Custom back-office tools, CMS, and actionable analytics interfaces." },
        { icon: <Webhook size={28} className="text-white" />, title: "REST APIs", desc: "Highly scalable, well-documented, and performant backend node.js APIs." },
        { icon: <Container size={28} className="text-white" />, title: "Docker Deployment", desc: "Containerized application architectures ensuring consistency and easy scaling." },
        { icon: <Rocket size={28} className="text-white" />, title: "Startup MVP Development", desc: "Fast execution for early-stage startups to launch their custom products rapidly." }
    ];

    return (
        <section id="services-section" className="bg-[#0a0a0a] py-32 px-4 md:px-24 border-t border-white/5 relative z-20">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 max-w-2xl">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1]">
                        What I Can Help You Build
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                    {services.map((s, i) => (
                        <div key={i} className="group flex flex-col p-10 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-all duration-300">
                            <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8 shrink-0">
                                {s.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{s.title}</h3>
                            <p className="text-zinc-400 font-light leading-relaxed grow">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
