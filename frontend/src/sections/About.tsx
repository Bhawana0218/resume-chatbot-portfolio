import { motion } from "framer-motion"
import Section from "../components/Section.tsx"
import { SectionTitle } from "../components/SectionTitle"

export default function About() {
  return (
    <Section id="about" className="bg-slate-950">
      <SectionTitle subtitle="Get to know the person behind the code."
      >About Me</SectionTitle>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-slate-400 leading-relaxed"
        >
          <p>
            Hello! I'm a passionate Full Stack Developer with strong expertise in building 
            detailed, scalable, and production-ready web applications. I specialize in 
            creating clean, responsive, and visually engaging user interfaces while also 
             developing robust backend systems. My journey started with curiosity about how 
             websites work, and it quickly evolved into mastering modern technologies like 
             React, Next.js, Node.js, and database-driven architectures to deliver complete 
             end-to-end solutions.
          </p>

          <p>
            I specialize in the{" "}
            <strong className="text-indigo-400">
              React & TypeScript ecosystem
            </strong>{" "}
            along with{" "}
            <strong className="text-indigo-400">
              Python backend development
            </strong>
            . I focus on writing maintainable, structured, and scalable code 
            while delivering smooth user experiences.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-slate-900 border border-white/5">
              <h4 className="font-semibold text-slate-200 mb-1">
                Education
              </h4>
              <p className="text-sm">B.Tech | Computer Science Engineering</p>
              <p className="text-xs text-slate-500">Graduating 2027</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-white/5">
              <h4 className="font-semibold text-slate-200 mb-1">
                Career Goal
              </h4>
              <p className="text-sm">Frontend / Full Stack Developer</p>
              <p className="text-xs text-slate-500">
                Skilled in detailed implementation and full-stack development
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right  Portfolio Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-linear-to-r from-indigo-500 to-purple-500 rounded-2xl blur-2xl opacity-20" />

          <div className="relative bg-slate-900 border border-white/10 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-indigo-500 rounded-full" />
              Why This AI Portfolio?
            </h3>

            <p className="text-slate-400 text-sm mb-4">
              I built this portfolio to showcase my expertise in modern frontend technologies and robust backend development. 
              It highlights clean architecture, seamless functionality, and thoughtful UI/UX design.
            </p>

            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                Responsive & Modern UI Design
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                AI Chat Integration with Python Backend
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                Clean & Scalable Project Architecture
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}