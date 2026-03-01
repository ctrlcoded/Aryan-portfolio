export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0a0a0a] py-8 border-t border-white/5 relative z-20">
            <div className="max-w-7xl mx-auto px-4 md:px-24 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 font-light text-sm">
                <p>&copy; {currentYear} Aryan Raghav. All rights reserved.</p>
                <p className="flex items-center gap-1.5">
                    Made with <span className="text-red-500 animate-pulse">❤️</span> by Aryan
                </p>
            </div>
        </footer>
    );
}
