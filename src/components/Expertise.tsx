import { motion } from "framer-motion";

export default function Expertise() {
  const technical = ["HTML", "CSS", "JavaScript", "Java", "React.js", "UI/UX Design", "Responsive Web Design", "Git & GitHub", "Supabase", "Frontend Development", "Problem Solving"];
  const tools = ["VS Code", "GitHub", "Netlify", "Supabase", "Antigravity", "Figma"];
  const strengths = ["Quick Learner", "Creative Thinker", "Problem Solver", "Consistent Worker", "Passionate About Technology", "Strong Interest in UI & Development"];
  const whatIDo = [
    "Build responsive websites",
    "Design clean and modern UI",
    "Develop educational and productivity-based projects",
    "Work on frontend and basic backend integration",
    "Create user-friendly web experiences"
  ];

  return (
    <section className="relative z-20 py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Skills & Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8 border-b border-white/[0.1] pb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {technical.map(skill => (
                <span key={skill} className="px-4 py-2 bg-white/[0.03] border border-white/[0.1] rounded-full text-white/80 font-light text-sm hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8 border-b border-white/[0.1] pb-4">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map(tool => (
                <span key={tool} className="px-4 py-2 bg-emerald-500/5 border border-emerald-500/20 rounded-full text-emerald-400 font-light text-sm">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* What I Do & Strengths */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 bg-white/[0.02] border border-white/[0.05] p-10 md:p-16 rounded-3xl backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8">What I Do</h3>
            <ul className="space-y-4">
              {whatIDo.map(item => (
                <li key={item} className="flex items-start text-white/70 font-light">
                  <span className="text-emerald-400 mr-4 mt-1">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Strengths</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {strengths.map(strength => (
                <li key={strength} className="flex items-center space-x-3 text-white/70 font-light">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
