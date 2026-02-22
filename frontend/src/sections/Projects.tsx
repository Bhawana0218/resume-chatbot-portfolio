import Section from "/src/components/section"
import { SectionTitle } from "/src/components/SectionTitle"
import { PROJECTS } from "/src/data/portfolioData"
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {

  return (

    <Section id="projects">
      <SectionTitle subtitle="A selection of my recent work and side projects.">Featured Projects</SectionTitle>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-slate-900 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 flex-1 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-slate-800 text-xs font-medium text-slate-300 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <a href={project.github} className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
                    <Github size={18} /> Code
                  </a>
                  <a href={project.demo} className="flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors ml-auto">
                    Live Demo <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
    </Section>
  )
}