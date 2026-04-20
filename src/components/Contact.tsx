"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

const Github = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.4 5.4 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 3.8 5 4.2 5 4.2a5.4 5.4 0 0 0-.1 3.8 5.4 5.4 0 0 0-1.5 3.8c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const Linkedin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="relative z-20 py-40 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] font-mono tracking-[0.5em] text-emerald-400 mb-8 block uppercase opacity-70">
            Available for opportunities
          </span>
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-10">
            Let&apos;s build <br/>
            <span className="text-zinc-600 italic">together.</span>
          </h2>
          
          <div className="flex flex-col items-center gap-12 mt-16">
            <a 
              href="mailto:contact@example.com" 
              className="group relative flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-semibold text-lg hover:scale-[1.03] active:scale-95 transition-all duration-300 shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)]"
            >
              <Mail className="w-5 h-5" />
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex items-center gap-8">
               <a href="https://github.com/SATHYA182007" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-full hover:bg-emerald-500/10 hover:text-emerald-400 transition-all duration-300 text-white/30 backdrop-blur-md">
                 <Github className="w-6 h-6" />
               </a>
               <a href="https://www.linkedin.com/in/sathya-m-989237374/" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-full hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300 text-white/30 backdrop-blur-md">
                 <Linkedin className="w-6 h-6" />
               </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
