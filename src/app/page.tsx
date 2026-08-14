import ScrollyVideo from "@/components/ScrollyVideo";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import WhyMe from "@/components/WhyMe";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="bg-black min-h-screen w-full relative selection:bg-white/25">
      <Navbar />

      <div className="relative">
        {/* 500vh scroll-scrubbed hero video */}
        <ScrollyVideo />
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

      {/* Toolkit marquee */}
      <Skills />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Floating back-to-top */}
      <BackToTop />
    </main>
  );
}
