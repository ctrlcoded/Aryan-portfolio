import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import WhyMe from "@/components/WhyMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-black min-h-screen w-full relative selection:bg-[#2997ff]/30">
      <Navbar />

      <div className="relative">
        {/* 500vh scroll-scrub photo sequence (kept as-is) */}
        <ScrollyCanvas />
        {/* Sticky overlay synced with the scroll */}
        <Overlay />
      </div>

      {/* Selected work — four featured products */}
      <Projects />

      {/* Research — Indic language modeling */}
      <Research />

      {/* Experience — DataAnnotation */}
      <Experience />

      {/* About / stats */}
      <WhyMe />

      {/* Capabilities */}
      <Services />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
