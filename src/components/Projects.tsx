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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
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
              className="group relative overflow-hidden rounded-3xl bg-white/[0.03] border border-white/[0.05] p-8 md:p-12 hover:bg-white/[0.06] transition-colors duration-500 ease-in-out cursor-pointer hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.05)] backdrop-blur-xl flex flex-col justify-between"
            >
              <div className="absolute -inset-24 bg-gradient-to-tr from-emerald-500/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full min-h-[250px] justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                    {project.category}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-white/[0.1] flex items-center justify-center translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 bg-white/[0.05]">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-3xl font-medium tracking-tight text-white mb-4">
                    {project.title}
                  </h4>
                  <p className="text-white/60 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
