import Section from '../components/section';
import { SectionTitle }  from "../components/SectionTitle";
import { SKILLS } from "../data/portfolioData";
import {
  motion,
} from 'framer-motion';

export default function Skills() {
  return (
    <Section id="skills" className="bg-slate-900/30">
      <SectionTitle subtitle="My technical toolkit and areas of expertise.">Tech Stack</SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group p-6 bg-slate-900 border border-white/5 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/10 transition-all cursor-default"
            >
              <div className={`p-3 rounded-lg bg-slate-800 group-hover:bg-slate-800/80 transition-colors ${skill.color}`}>
                {skill.icon}
              </div>
              <span className="font-medium text-slate-300 group-hover:text-white">{skill.name}</span>
            </motion.div>
          ))}
        </div>
    </Section>
  )
}