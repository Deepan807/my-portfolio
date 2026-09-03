import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ToolsStrip from "@/components/ToolsStrip";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ProcessTimeline from "@/components/ProcessTimeline";
import Principles from "@/components/Principles";
import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import { CTA, Footer } from "@/components/CTAFooter";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <ToolsStrip />
      <Skills />
      <Projects />
      <ProcessTimeline />
      <Principles />
      <Banner />
      <Blog />
      <CTA />
      <Footer />
    </main>
  );
}
