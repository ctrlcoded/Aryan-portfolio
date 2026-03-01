import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import WhyMe from "@/components/WhyMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen w-full relative selection:bg-emerald-500/30">
      <Navbar />

      <div className="relative">
        {/* The 500vh container handling the scroll scrub sequence */}
        <ScrollyCanvas />
        {/* The sticky overlay that syncs with the scroll */}
        <Overlay />
      </div>

      {/* The grid section appearing after the scroll ends */}
      <Projects />

      {/* What I can help you build */}
      <Services />

      {/* Why Work With Me */}
      <WhyMe />

      {/* Contact Form */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
