import { ExternalLink, Github, ArrowRight } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            title: "GoNomad – Vehicle Rental Platform",
            category: "Full Stack MERN",
            desc: "A scalable vehicle rental platform streamlining booking flows.",
            img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
            liveUrl: "https://go-nomad.netlify.app/",
            githubUrl: "#",
            details: [
                "Problem: Booking vehicles involved complex, multi-step processes.",
                "Solution: Built an intuitive platform prioritizing user flow and admin controls.",
                "Tech Stack: MongoDB, Express.js, React, Node.js",
                "Impact: Reduced booking steps by ~30% with complete admin dashboard."
            ]
        },
        {
            title: "Automated DNS Management System",
            category: "DevOps & Systems",
            desc: "Containerized automated deployment of DNS protocol systems.",
            img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2034&ixlib=rb-4.0.3",
            liveUrl: null,
            githubUrl: "#",
            details: [
                "Problem: Manual DNS configuration was prone to human error and time-consuming.",
                "Solution: Automated DNS infrastructure deployment using shell scripting & Docker.",
                "Tech Stack: Shell Scripting, BIND9, Docker, DNS Protocol",
                "Impact: Reduced manual setup time by ~60% with 95%+ validation accuracy."
            ]
        }
    ];

    return (
        <section className="min-h-screen bg-[#0a0a0a] py-32 px-4 md:px-24 border-t border-white/5 relative z-20">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
                            Selected Work
                        </h2>
                        <p className="mt-4 text-xl text-zinc-400 font-light">
                            A collection of things I've built.
                        </p>
                    </div>
                    <button className="flex items-center gap-2 group text-white hover:text-blue-400 transition-colors">
                        <span className="text-lg font-medium">View Archive</span>
                        <span className="p-3 rounded-full bg-white/5 group-hover:bg-blue-500/10 transition-colors">
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                </div>

                <div className="flex flex-col gap-12">
                    {projects.map((p, i) => (
                        <div
                            key={i}
                            className="group relative overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/10 p-1 md:p-2 transition-all duration-700 hover:border-white/20 select-none"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2.5rem]" />
                            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 bg-[#0a0a0a] rounded-[2rem] p-8 md:p-12 h-full z-10 relative">

                                {/* Image Section */}
                                <div className="lg:w-1/2 relative rounded-3xl overflow-hidden aspect-video border border-white/5">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent z-10" />
                                    <img
                                        src={p.img}
                                        alt={p.title}
                                        className="w-full h-full object-cover opacity-60 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-80 saturate-50 group-hover:saturate-100"
                                    />
                                </div>

                                {/* Content Section */}
                                <div className="lg:w-1/2 flex flex-col justify-center">
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="px-4 py-1.5 text-xs font-semibold tracking-widest text-[#0a0a0a] bg-zinc-200 rounded-full">
                                            {p.category}
                                        </span>
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">{p.title}</h3>

                                    <ul className="space-y-4 mb-8 text-zinc-400 font-light text-base md:text-lg">
                                        {p.details.map((detail, idx) => {
                                            const [boldPart, ...rest] = detail.split(": ");
                                            return (
                                                <li key={idx} className="flex gap-3 items-start">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2.5 shrink-0" />
                                                    <span>
                                                        <strong className="text-zinc-200 font-medium">{boldPart}:</strong> {rest.join(": ")}
                                                    </span>
                                                </li>
                                            );
                                        })}
                                    </ul>

                                    <div className="flex flex-wrap gap-4 mt-auto pt-4">
                                        {p.liveUrl && (
                                            <a href={p.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors">
                                                Live Demo <ExternalLink size={18} />
                                            </a>
                                        )}
                                        {p.githubUrl && (
                                            <a href={p.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-colors border border-white/10">
                                                GitHub <Github size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
