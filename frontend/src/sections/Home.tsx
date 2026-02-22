import { HERO_BG } from "/src/data/portfolioData"
import Button from "/src/components/Button"
import { motion } from "framer-motion";

import {
    ChevronRight,
    Mail,
    Download,
} from 'lucide-react';

export default function Home() {
  return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={HERO_BG} alt="Background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-linear-to-b from-slate-950/50 via-slate-950/80 to-slate-950" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm font-medium text-indigo-300">
              Available for Internships
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
              <span className="block text-slate-100">Building Digital</span>
              <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-400 via-purple-400 to-indigo-400 animate-linear-x">
                Experiences
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Full-Stack Developer | Crafting modern, scalable web applications with React, TypeScript, Next.js, and Python
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" icon={ChevronRight} onClick={() => {
                const el = document.getElementById('projects');
                 el?.scrollIntoView({ behavior: "smooth" });
                 }}>
                View Projects
              </Button>
              <Button variant="secondary" icon={Mail} onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
                }}>
                Contact Me
              </Button>
              <Button variant="outline" icon={Download} className="px-4!"
               onClick={() => {
                const link = document.createElement("a");
                link.href = "/resume.jpg";
                link.download = "B_Bisht_Resume.jpg";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              
              }}
              >
                Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
  )
}