import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative z-20 py-24 px-6 md:px-12 lg:px-24 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h2 className="text-sm font-mono tracking-[0.2em] text-emerald-400 mb-4 uppercase">
            About Me
          </h2>
          <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight mb-8">
            Building clean, creative, and user-friendly digital experiences.
          </h3>
          <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
            I am a passionate and motivated developer with a strong interest in web development, UI design, and software problem-solving. I enjoy creating modern, user-friendly, and visually appealing digital experiences.
          </p>
          <p className="text-lg text-white/70 leading-relaxed font-light">
            I am constantly learning new technologies and improving my skills by building real-world projects. My goal is to grow as a developer and create impactful solutions that make a difference.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 bg-white/[0.02] border border-white/[0.05] p-10 rounded-3xl"
        >
          <h4 className="text-2xl text-white font-medium mb-4">Career Objective</h4>
          <p className="text-white/60 leading-relaxed font-light">
            To become a skilled software developer and build innovative, user-focused digital solutions that create real-world impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
