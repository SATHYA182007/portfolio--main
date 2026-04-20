import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative z-20 py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
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
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-emerald-500/10 to-blue-500/5 rounded-[3rem] border border-white/[0.05] flex items-center justify-center p-12 overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="text-center relative z-10">
                <h4 className="text-7xl md:text-9xl font-bold text-white/10 mb-4 font-mono select-none transition-colors group-hover:text-emerald-500/20">OBJ</h4>
                <p className="text-white/40 leading-relaxed font-light text-xl italic max-w-xs mx-auto">
                  &quot;To build innovative, user-focused digital solutions that create real-world impact.&quot;
                </p>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.5)]" />
              <div className="absolute bottom-8 left-8 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.5)]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
