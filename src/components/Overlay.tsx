"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Phase 1: Intro (Center)
  // Appears at 0, disappears by 0.15
  const opacity1 = useTransform(scrollYProgress, [0, 0.08, 0.15], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -100]);
  const scale1 = useTransform(scrollYProgress, [0, 0.15], [1, 0.8]);

  // Phase 2: First Phrase (Left)
  // Appears 0.20, full at 0.25, fades out 0.40 to 0.45
  const opacity2 = useTransform(scrollYProgress, [0.18, 0.23, 0.38, 0.43], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.18, 0.23, 0.38, 0.43], [50, 0, 0, -50]);

  // Phase 3: Second Phrase (Right)
  // Appears 0.48, full at 0.53, fades out 0.68 to 0.73
  const opacity3 = useTransform(scrollYProgress, [0.48, 0.53, 0.68, 0.73], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.48, 0.53, 0.68, 0.73], [50, 0, 0, -50]);

  // Phase 4: Third Phrase (Center/Left) - Let's make this one very impactful
  // Appears 0.78, full at 0.83, stays until near end
  const opacity4 = useTransform(scrollYProgress, [0.78, 0.83, 0.95, 1], [0, 1, 1, 0]);
  const y4 = useTransform(scrollYProgress, [0.78, 0.83, 0.95, 1], [50, 0, 0, -50]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      
      {/* PHASE 1 - Intro */}
      <motion.div 
        style={{ opacity: opacity1, y: y1, scale: scale1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <span className="text-emerald-400 font-mono text-xs tracking-[0.5em] uppercase mb-4 block opacity-60">Portfolio &apos;24</span>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-white mb-8">
            Sathya <span className="text-zinc-500">M</span>
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-white/20" />
            <span className="text-white/40 font-light tracking-[0.2em] text-sm uppercase">Creative Developer</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-white/20" />
          </div>
        </motion.div>
      </motion.div>

      {/* PHASE 2 - Expertise */}
      <motion.div 
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-y-0 left-8 md:left-24 max-w-4xl flex flex-col items-start justify-center text-left"
      >
        <span className="text-emerald-400 font-mono mb-4 tracking-widest uppercase text-sm">Phrase I</span>
        <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white drop-shadow-2xl leading-[1.1]">
          Aspiring <br/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">
            Full Stack Developer <br/> & UI Enthusiast
          </span>
        </h2>
      </motion.div>

      {/* PHASE 3 - Vision */}
      <motion.div 
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-y-0 right-12 md:right-24 max-w-3xl flex flex-col items-end justify-center text-right ml-auto"
      >
        <span className="text-blue-400 font-mono mb-4 tracking-widest uppercase text-sm">Phrase II</span>
        <h2 className="text-3xl md:text-6xl font-medium tracking-tight text-white drop-shadow-2xl leading-snug">
          Passionate about creating <br/>
          <span className="font-light text-white/90">
             modern, user-friendly, and <br/>
             <span className="text-emerald-400 font-semibold italic">impactful</span> digital experiences.
          </span>
        </h2>
      </motion.div>

      {/* PHASE 4 - Stack */}
      <motion.div 
        style={{ opacity: opacity4, y: y4 }}
        className="absolute inset-y-0 left-8 md:left-24 max-w-5xl flex flex-col items-start justify-center text-left"
      >
        <span className="text-cyan-400 font-mono mb-4 tracking-[0.4em] uppercase text-xs opacity-70">Phrase III</span>
        <h2 className="text-4xl md:text-8xl font-bold tracking-tight text-white mb-6 leading-[0.95]">
          Architecting <br/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">
            Robust Solutions
          </span>
        </h2>
        <p className="text-lg md:text-xl font-light text-white/50 max-w-xl leading-relaxed">
          Building the digital future with modern technologies like <span className="text-white font-medium">Next.js, React, Java & Tailwind CSS</span>.
        </p>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
        className="absolute bottom-12 left-1/2 -ms-px -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-medium font-mono">Explore</span>
        <div className="w-[1px] h-12 relative overflow-hidden bg-white/5">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent via-emerald-400 to-transparent"
          />
        </div>
      </motion.div>
      
    </div>
  );
}
