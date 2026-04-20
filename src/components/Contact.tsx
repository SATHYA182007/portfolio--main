import { motion } from "framer-motion";
import { Mail, ArrowRight, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative z-20 py-40 px-6 md:px-12 lg:px-24 overflow-hidden">
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
