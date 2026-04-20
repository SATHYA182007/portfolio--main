import { motion } from "framer-motion";

export default function Expertise() {
  const technical = ["HTML", "CSS", "JavaScript", "Java", "React.js", "UI/UX Design", "Next.js", "Tailwind CSS", "Git & GitHub", "Supabase", "TypeScript"];
  const tools = ["VS Code", "GitHub", "Netlify", "Supabase", "Antigravity", "Figma"];
  
  return (
    <section id="expertise" className="relative z-20 py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-20"
        >
          <span className="text-[10px] font-mono tracking-[0.4em] text-blue-400 mb-4 block uppercase opacity-70">Expertise</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Technical <span className="text-zinc-600">&</span> <br/> Professional Skills.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main Skills Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[60px] group-hover:bg-emerald-500/10 transition-colors" />
            <h3 className="text-2xl font-semibold text-white mb-10 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-emerald-400" />
              Technical Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {technical.map(skill => (
                <span key={skill} className="px-5 py-2.5 bg-white/[0.03] border border-white/[0.08] rounded-full text-white/60 font-light text-sm hover:text-white hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Tools & Process Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            <div className="glass p-10 rounded-[2.5rem] flex-1">
              <h3 className="text-xl font-semibold text-white mb-6">Tools I Use</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map(tool => (
                  <span key={tool} className="px-4 py-2 bg-blue-500/5 border border-blue-500/10 rounded-xl text-blue-400/80 font-mono text-xs">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/10 to-blue-500/5 border border-white/[0.05] p-10 rounded-[2.5rem] flex-1">
              <h3 className="text-xl font-semibold text-white mb-6 font-mono text-sm tracking-widest uppercase opacity-50">Strengths</h3>
              <ul className="space-y-3">
                {["Quick Learner", "Creative Problem Solver", "Detail Oriented"].map(s => (
                  <li key={s} className="flex items-center gap-3 text-white/70 text-sm font-light">
                    <div className="w-1 h-1 rounded-full bg-emerald-400" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
