import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.4 5.4 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 3.8 5 4.2 5 4.2a5.4 5.4 0 0 0-.1 3.8 5.4 5.4 0 0 0-1.5 3.8c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Contact() {
  return (
    <section className="relative z-20 py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-white/[0.05] to-transparent p-12 md:p-24 rounded-[3rem] border border-white/[0.05] relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
          
          <h2 className="text-sm font-mono tracking-[0.2em] text-blue-400 mb-6 uppercase">
            Get In Touch
          </h2>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8">
            Let&apos;s Connect.
          </h3>
          <p className="text-xl text-white/60 mb-12 font-light max-w-2xl mx-auto">
            I&apos;m currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>

          <a 
            href="mailto:contact@example.com" 
            className="inline-flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform"
          >
            <Mail className="w-5 h-5" />
            <span>Say Hello</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <div className="flex justify-center space-x-6 mt-16 border-t border-white/[0.05] pt-12">
            <a href="https://github.com/SATHYA182007" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/[0.03] rounded-full hover:bg-white/[0.1] hover:text-emerald-400 transition-colors text-white/50">
              <GithubIcon />
            </a>
            <a href="https://www.linkedin.com/in/sathya-m-989237374/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/[0.03] rounded-full hover:bg-white/[0.1] hover:text-blue-400 transition-colors text-white/50">
              <LinkedinIcon />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
