"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "EduNest",
    category: "EdTech Platform",
    description: "An educational platform designed to provide students with a better learning experience through organized courses, clean UI, and interactive learning features.",
    link: "https://edunest-sathya.netlify.app/",
  },
  {
    id: 2,
    title: "Mentrix",
    category: "AI SaaS Concept",
    description: "An AI-powered SaaS concept focused on improving user productivity, learning, and smart assistance through modern technology.",
    link: "https://github.com/SATHYA182007",
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Personal Brand",
    description: "A personal portfolio website built to showcase my skills, projects, and journey as a developer in a professional way.",
    link: "https://github.com/SATHYA182007",
  },
];

export default function Projects() {
  return (
    <section className="relative z-20 py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-sm font-mono tracking-[0.2em] text-emerald-400 mb-4 uppercase">
            Selected Work
          </h2>
          <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
            Projects / Websites <br /> Done By Me.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative h-[450px] overflow-hidden rounded-[2rem] bg-white/[0.02] border border-white/[0.05] p-8 hover:border-white/10 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Animated Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-0" />
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-emerald-400 opacity-70">
                    {project.category}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
              </div>

              <div className="relative z-10">
                <h4 className="text-3xl font-semibold tracking-tight text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-white/40 leading-relaxed font-light text-sm group-hover:text-white/60 transition-colors duration-300">
                  {project.description}
                </p>
                <div className="mt-8 flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-white/20 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span>View Project</span>
                  <div className="w-8 h-[1px] bg-emerald-400" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
