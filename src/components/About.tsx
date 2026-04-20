import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative z-20 py-32 px-6 md:px-12 lg:px-24">
      <div id="about-container" className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-mono tracking-[0.5em] text-emerald-400 mb-6 block uppercase opacity-70">
              The Background
            </span>
            <h3 className="text-4xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-10">
              Building things <br/>
              <span className="text-zinc-500">that matter.</span>
            </h3>
            <div className="space-y-6 text-lg text-white/50 font-light leading-relaxed max-w-xl">
              <p>
                I am a passionate and motivated developer with a strong interest in <span className="text-white font-medium">web development, UI design, and software problem-solving</span>. I enjoy creating modern, user-friendly, and visually appealing digital experiences.
              </p>
              <p>
                I am constantly learning new technologies and improving my skills by building real-world projects. My goal is to grow as a developer and create impactful solutions that make a difference.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/3] glass rounded-[3rem] flex items-center justify-center p-12 overflow-hidden group relative">
              {/* Subtle Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5" />
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full group-hover:bg-emerald-500/20 transition-all duration-1000" />
              
              <div className="text-center relative z-10">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/10 group-hover:border-emerald-400/30 transition-colors">
                  <span className="text-emerald-400 text-2xl font-serif">“</span>
                </div>
                <p className="text-white/60 leading-relaxed font-light text-xl italic max-w-md mx-auto">
                  To become a skilled software developer and build innovative, <span className="text-white font-normal underline decoration-emerald-400/30 underline-offset-8">user-focused digital solutions</span> that create real-world impact.
                </p>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute top-8 right-8 w-1 h-1 rounded-full bg-emerald-400/50 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
              <div className="absolute bottom-8 left-8 w-1 h-1 rounded-full bg-blue-400/50 shadow-[0_0_10px_rgba(96,165,250,0.5)]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
