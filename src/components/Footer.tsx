export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black py-10 border-t border-white/5 relative z-20">
            <div className="max-w-6xl mx-auto px-5 md:px-10 flex flex-col md:flex-row justify-between items-center gap-3 text-white/55 font-normal text-[13px]">
                <p>&copy; {currentYear} Aryan Raghav. All rights reserved.</p>
                <p className="tracking-tight">Designed &amp; built with care.</p>
            </div>
        </footer>
    );
}
