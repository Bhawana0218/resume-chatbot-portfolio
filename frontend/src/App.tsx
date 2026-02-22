// import './App.css';
// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
// import { 
//   Github, 
//   Linkedin, 
//   Mail, 
//   ExternalLink, 
//   Code2, 
//   Terminal, 
//   Cpu, 
//   Database, 
//   Globe, 
//   Send, 
//   X, 
//   MessageSquare,
//   Download,
//   ChevronRight,
//   Menu
// } from 'lucide-react';

// // --- Assets ---
// const HERO_BG = "https://image.qwenlm.ai/public_source/be788dee-c702-4652-be9d-5cc7dbbbb141/116c51780-7d37-48d0-8f23-33a44c5f77bf.png";
// const PROJECT_DASHBOARD = "https://image.qwenlm.ai/public_source/be788dee-c702-4652-be9d-5cc7dbbbb141/11e2d6dbd-e7d6-4843-bfb1-3548d49d598c.png";
// const PROJECT_MOBILE = "https://image.qwenlm.ai/public_source/be788dee-c702-4652-be9d-5cc7dbbbb141/16d892efc-ca93-4318-87d8-d5f055eeebf3.png";
// const PROJECT_AI = "https://image.qwenlm.ai/public_source/be788dee-c702-4652-be9d-5cc7dbbbb141/155b326c2-3903-4877-b831-657638b84a81.png";

// // --- Data ---
// const SKILLS = [
//   { name: "React", icon: <Code2 size={20} />, color: "text-blue-400" },
//   { name: "TypeScript", icon: <Terminal size={20} />, color: "text-blue-600" },
//   { name: "Next.js", icon: <Globe size={20} />, color: "text-white" },
//   { name: "Python", icon: <Cpu size={20} />, color: "text-yellow-400" },
//   { name: "FastAPI", icon: <Terminal size={20} />, color: "text-green-400" },
//   { name: "SQL", icon: <Database size={20} />, color: "text-orange-400" },
//   { name: "Tailwind", icon: <Code2 size={20} />, color: "text-cyan-400" },
//   { name: "Node.js", icon: <Terminal size={20} />, color: "text-green-500" },
// ];

// const PROJECTS = [
//   {
//     title: "Analytics Dashboard",
//     description: "A comprehensive data visualization platform built with React and D3.js. Features real-time data streaming and customizable widgets.",
//     tags: ["React", "TypeScript", "D3.js", "Tailwind"],
//     image: PROJECT_DASHBOARD,
//     github: "#",
//     demo: "#"
//   },
//   {
//     title: "E-Commerce Mobile App",
//     description: "A sleek mobile-first shopping experience with cart management, user authentication, and payment gateway integration.",
//     tags: ["React Native", "Redux", "Firebase", "Stripe"],
//     image: PROJECT_MOBILE,
//     github: "#",
//     demo: "#"
//   },
//   {
//     title: "AI Chat Interface",
//     description: "An intelligent conversational UI wrapper for LLMs. Includes streaming responses, syntax highlighting, and chat history management.",
//     tags: ["Next.js", "OpenAI API", "Vercel AI SDK", "Shadcn UI"],
//     image: PROJECT_AI,
//     github: "#",
//     demo: "#"
//   }
// ];

// const CHAT_RESPONSES = [
//   "I'm currently looking for frontend or full-stack internship opportunities!",
//   "My tech stack focuses on the React ecosystem (Next.js, TypeScript) and Python backend services.",
//   "I built this portfolio to showcase my ability to create modern, responsive, and interactive web applications.",
//   "I graduated with a degree in Computer Science and have worked on several freelance projects.",
//   "Feel free to check out my GitHub for more code samples!"
// ];

// // --- Components ---

// interface SectionProps {
//   children: React.ReactNode;
//   className?: string;
//   id?: string;
// }

// const Section: React.FC<SectionProps> = ({ children, className = "", id = "" }) => (
//   <section id={id} className={`py-20 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
//     {children}
//   </section>
// );

// interface SectionTitleProps{
//   children: React.ReactNode;
//   subtitle?: string;
// }

// const SectionTitle: React.FC<SectionTitleProps> = ({ children, subtitle }) => (
//   <div className="mb-12 text-center">
//     <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-indigo-400 to-purple-400 mb-4">
//       {children}
//     </h2>
//     {subtitle && <p className="text-slate-400 max-w-2xl mx-auto">{subtitle}</p>}
//   </div>
// );

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   children: React.ReactNode;
//   variant?: "primary" | "secondary" | "outline";
//   className?: string;
//   icon?: React.ElementType;
// }

// const Button: React.FC<ButtonProps> = ({
//   children,
//   variant = "primary",
//   className = "",
//   icon: Icon,
//   ...props
// }) => {
//   const baseStyle =
//     "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95";

//   const variants: Record<"primary" | "secondary" | "outline", string> = {
//     primary:
//       "bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50",
//     secondary:
//       "bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 hover:border-slate-600",
//     outline:
//       "bg-transparent border border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10",
//   };

//   return (
//     <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
//       {children}
//       {Icon && <Icon size={18} />}
//     </button>
//   );
// };

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "About", href: "#about" },
//     { name: "Skills", href: "#skills" },
//     { name: "Projects", href: "#projects" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
//       <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
//         <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-indigo-400 to-purple-400">
//           Portfolio
//         </a>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <a key={link.name} href={link.href} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
//               {link.name}
//             </a>
//           ))}
//           <Button variant="primary" className="py-2! px-4! text-sm">Resume</Button>
//         </div>

//         {/* Mobile Toggle */}
//         <button className="md:hidden text-slate-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//           {mobileMenuOpen ? <X /> : <Menu />}
//         </button>
//       </div>

//       {/* Mobile Nav */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div 
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-slate-900 border-b border-white/10 overflow-hidden"
//           >
//             <div className="flex flex-col p-4 gap-4">
//               {navLinks.map((link) => (
//                 <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white py-2">
//                   {link.name}
//                 </a>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// const ChatWidget = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([{ role: 'ai', text: "Hi! I'm the portfolio AI. Ask me anything about this developer." }]);
//   const [input, setInput] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const messagesEndRef = useRef<HTMLDivElement | null>(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(scrollToBottom, [messages, isOpen]);

//   const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     const userMsg = { role: 'user', text: input };
//     setMessages(prev => [...prev, userMsg]);
//     setInput("");
//     setIsTyping(true);

//     // Simulate AI response
//     setTimeout(() => {
//       const randomResponse = CHAT_RESPONSES[Math.floor(Math.random() * CHAT_RESPONSES.length)];
//       setMessages(prev => [...prev, { role: 'ai', text: randomResponse }]);
//       setIsTyping(false);
//     }, 1500);
//   };

//   return (
//     <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 20, scale: 0.9 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 20, scale: 0.9 }}
//             className="mb-4 w-80 md:w-96 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-indigo-500/20 overflow-hidden flex flex-col h-125"
//           >
//             {/* Header */}
//             <div className="p-4 border-b border-white/10 bg-linear-to-r from-indigo-900/50 to-purple-900/50 flex justify-between items-center">
//               <div className="flex items-center gap-2">
//                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//                 <span className="font-semibold text-slate-200">AI Assistant</span>
//               </div>
//               <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
//                 <X size={18} />
//               </button>
//             </div>

//             {/* Messages */}
//             <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700">
//               {messages.map((msg, idx) => (
//                 <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
//                   <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
//                     msg.role === 'user' 
//                       ? 'bg-indigo-600 text-white rounded-br-none' 
//                       : 'bg-slate-800 text-slate-300 rounded-bl-none border border-white/5'
//                   }`}>
//                     {msg.text}
//                   </div>
//                 </div>
//               ))}
//               {isTyping && (
//                 <div className="flex justify-start">
//                   <div className="bg-slate-800 p-3 rounded-2xl rounded-bl-none border border-white/5 flex gap-1">
//                     <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
//                     <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
//                     <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
//                   </div>
//                 </div>
//               )}
//               <div ref={messagesEndRef} />
//             </div>

//             {/* Input */}
//             <form onSubmit={handleSend} className="p-4 border-t border-white/10 bg-slate-900/50">
//               <div className="relative">
//                 <input
//                   type="text"
//                   value={input}
//                   onChange={(e) => setInput(e.target.value)}
//                   placeholder="Ask about my skills..."
//                   className="w-full bg-slate-800 text-slate-200 rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 border border-white/5 placeholder:text-slate-500"
//                 />
//                 <button 
//                   type="submit"
//                   disabled={!input.trim() || isTyping}
//                   className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-indigo-600 rounded-full text-white hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//                 >
//                   <Send size={16} />
//                 </button>
//               </div>
//             </form>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <motion.button
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-14 h-14 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/40 flex items-center justify-center hover:shadow-indigo-500/60 transition-all"
//       >
//         {isOpen ? <X /> : <MessageSquare />}
//       </motion.button>
//     </div>
//   );
// };

// // --- Main App ---

// export default function App() {
//   const { scrollYProgress } = useScroll();
//   const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
//       {/* Progress Bar */}
//       <motion.div 
//         className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-indigo-500 to-purple-500 origin-left z-60"
//         style={{ scaleX }}
//       />

//       <Navbar />
//       <ChatWidget />

//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
//         {/* Background Image with Overlay */}
//         <div className="absolute inset-0 z-0">
//           <img src={HERO_BG} alt="Background" className="w-full h-full object-cover opacity-20" />
//           <div className="absolute inset-0 bg-linear-to-b from-slate-950/50 via-slate-950/80 to-slate-950" />
//         </div>

//         <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm font-medium text-indigo-300">
//               Available for Internships
//             </div>
//             <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
//               <span className="block text-slate-100">Building Digital</span>
//               <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-400 via-purple-400 to-indigo-400 animate-linear-x">
//                 Experiences
//               </span>
//             </h1>
//             <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
//               Frontend & AI Enthusiast | React & Python Developer crafting modern, 
//               scalable, and user-centric web applications.
//             </p>
            
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//               <Button variant="primary" icon={ChevronRight} onClick={() => {
//                 const el = document.getElementById('projects');
//                  el?.scrollIntoView({ behavior: "smooth" });
//                  }}>
//                 View Projects
//               </Button>
//               <Button variant="secondary" icon={Mail} onClick={() => {
//                 const element = document.getElementById("contact");
//                 element?.scrollIntoView({ behavior: "smooth" });
//                 }}>
//                 Contact Me
//               </Button>
//               <Button variant="outline" icon={Download} className="px-4!">
//                 Resume
//               </Button>
//             </div>
//           </motion.div>
//         </div>
        
//         {/* Scroll Indicator */}
//         <motion.div 
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 2 }}
//           className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
//         >
//           <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center pt-2">
//             <div className="w-1 h-2 bg-slate-500 rounded-full" />
//           </div>
//         </motion.div>
//       </section>

//       {/* About Section */}
//       <Section id="about" className="bg-slate-950">
//         <SectionTitle subtitle="Get to know the person behind the code.">About Me</SectionTitle>
        
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <motion.div 
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="space-y-6 text-slate-400 leading-relaxed"
//           >
//             <p>
//               Hello! I'm a passionate developer with a knack for building clean, efficient, and visually stunning web applications. 
//               My journey began with a curiosity for how things work on the internet, which quickly evolved into a career pursuit.
//             </p>
//             <p>
//               I specialize in the <strong className="text-indigo-400">MERN stack</strong> and <strong className="text-indigo-400">Python</strong> ecosystem. 
//               I believe in writing code that is not only functional but also maintainable and scalable.
//             </p>
            
//             <div className="grid grid-cols-2 gap-4 pt-4">
//               <div className="p-4 rounded-xl bg-slate-900 border border-white/5">
//                 <h4 className="font-semibold text-slate-200 mb-1">Education</h4>
//                 <p className="text-sm">B.S. Computer Science</p>
//                 <p className="text-xs text-slate-500">University of Tech, 2024</p>
//               </div>
//               <div className="p-4 rounded-xl bg-slate-900 border border-white/5">
//                 <h4 className="font-semibold text-slate-200 mb-1">Location</h4>
//                 <p className="text-sm">San Francisco, CA</p>
//                 <p className="text-xs text-slate-500">Open to Remote</p>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div 
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             <div className="absolute inset-0 bg-linear-to-r from-indigo-500 to-purple-500 rounded-2xl blur-2xl opacity-20" />
//             <div className="relative bg-slate-900 border border-white/10 p-8 rounded-2xl">
//               <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
//                 <span className="w-2 h-8 bg-indigo-500 rounded-full" />
//                 Why this AI Portfolio?
//               </h3>
//               <p className="text-slate-400 text-sm mb-4">
//                 I built this portfolio to demonstrate my ability to integrate modern frontend technologies with AI capabilities. 
//                 It showcases:
//               </p>
//               <ul className="space-y-2 text-sm text-slate-300">
//                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />Responsive Design</li>
//                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />Interactive Components</li>
//                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />Clean Architecture</li>
//               </ul>
//             </div>
//           </motion.div>
//         </div>
//       </Section>

//       {/* Skills Section */}
//       <Section id="skills" className="bg-slate-900/30">
//         <SectionTitle subtitle="My technical toolkit and areas of expertise.">Tech Stack</SectionTitle>
        
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {SKILLS.map((skill, index) => (
//             <motion.div
//               key={skill.name}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ y: -5, scale: 1.02 }}
//               className="group p-6 bg-slate-900 border border-white/5 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/10 transition-all cursor-default"
//             >
//               <div className={`p-3 rounded-lg bg-slate-800 group-hover:bg-slate-800/80 transition-colors ${skill.color}`}>
//                 {skill.icon}
//               </div>
//               <span className="font-medium text-slate-300 group-hover:text-white">{skill.name}</span>
//             </motion.div>
//           ))}
//         </div>
//       </Section>

//       {/* Projects Section */}
//       <Section id="projects">
//         <SectionTitle subtitle="A selection of my recent work and side projects.">Featured Projects</SectionTitle>
        
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {PROJECTS.map((project, index) => (
//             <motion.div
//               key={project.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.2 }}
//               className="group bg-slate-900 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col"
//             >
//               <div className="relative h-48 overflow-hidden">
//                 <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
//                 <img 
//                   src={project.image} 
//                   alt={project.title} 
//                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
//                 />
//               </div>
              
//               <div className="p-6 flex-1 flex flex-col">
//                 <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-indigo-400 transition-colors">
//                   {project.title}
//                 </h3>
//                 <p className="text-slate-400 text-sm mb-4 flex-1 leading-relaxed">
//                   {project.description}
//                 </p>
                
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {project.tags.map(tag => (
//                     <span key={tag} className="px-2.5 py-1 rounded-md bg-slate-800 text-xs font-medium text-slate-300 border border-white/5">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
                
//                 <div className="flex items-center gap-4 pt-4 border-t border-white/5">
//                   <a href={project.github} className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
//                     <Github size={18} /> Code
//                   </a>
//                   <a href={project.demo} className="flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors ml-auto">
//                     Live Demo <ExternalLink size={16} />
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </Section>

//       {/* Contact Section */}
//       <Section id="contact" className="bg-slate-900/30">
//         <div className="max-w-4xl mx-auto bg-slate-900 border border-white/5 rounded-3xl p-8 md:p-12 overflow-hidden relative">
//           <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
//           <div className="relative z-10 grid md:grid-cols-2 gap-12">
//             <div>
//               <h2 className="text-3xl font-bold text-white mb-4">Let's work together</h2>
//               <p className="text-slate-400 mb-8">
//                 Have a project in mind or want to discuss an internship opportunity? 
//                 I'm always open to new connections.
//               </p>
              
//               <div className="space-y-4">
//                 <a href="mailto:hello@example.com" className="flex items-center gap-3 text-slate-300 hover:text-indigo-400 transition-colors">
//                   <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
//                     <Mail size={20} />
//                   </div>
//                   hello@example.com
//                 </a>
//                 <div className="flex gap-4 mt-8">
//                   <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all">
//                     <Github size={20} />
//                   </a>
//                   <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all">
//                     <Linkedin size={20} />
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
//               <div>
//                 <label className="block text-sm font-medium text-slate-400 mb-1">Name</label>
//                 <input type="text" className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Doe" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
//                 <input type="email" className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="john@example.com" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-slate-400 mb-1">Message</label>
//                 <textarea rows={4} className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors resize-none" placeholder="Tell me about your project..." />
//               </div>
//               <Button variant="primary" className="w-full" icon={Send}>
//                 Send Message
//               </Button>
//             </form>
//           </div>
//         </div>
//       </Section>

//       {/* Footer */}
//       <footer className="py-8 text-center text-slate-500 text-sm border-t border-white/5 bg-slate-950">
//         <p> &#169; {new Date().getFullYear()} Portfolio. Built with React & Tailwind.</p>
//       </footer>
//     </div>
//   );
// }








import './App.css';
import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';

import Navbar from "./components/Navbar"
import AIChat from "./components/AIChat"

import Home from "./sections/Home"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"

export default function App() {

  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <>
    <div className="bg-slate-950 text-white">
      <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-indigo-500 to-purple-500 origin-left z-60"
        style={{ scaleX }}
      />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <AIChat />
      <footer className="py-8 text-center text-slate-500 text-sm border-t border-white/5 bg-slate-950">
        <p> &#169; {new Date().getFullYear()} Portfolio. Built with React & Tailwind.</p>
      </footer>
    </div>
    </div>
    </>
  )
}