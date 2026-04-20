"use client";

import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="w-full flex flex-col font-sans overflow-x-clip selection:bg-emerald-400/30">
      <ScrollyCanvas>
        {({ scrollYProgress }) => <Overlay scrollYProgress={scrollYProgress} />}
      </ScrollyCanvas>
      
      {/* Container for content segments below the canvas with premium gradient styling */}
      <div className="relative bg-[#0d0d0d] z-20">
        {/* Subtle decorative background noise or glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full -translate-x-1/2" />
        </div>
        
        <About />
        <Expertise />
        <Projects />
        <Contact />
        
        {/* Footer */}
        <footer className="relative w-full py-12 px-6 flex flex-col md:flex-row justify-between items-center text-sm font-light text-white/30 border-t border-white/5 bg-[#0a0a0a]">
          <p className="font-mono tracking-widest text-xs">© {new Date().getFullYear()} SATHYA M. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8 mt-6 md:mt-0 font-medium">
            <a href="#" className="hover:text-emerald-400 transition-colors">Resume</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
