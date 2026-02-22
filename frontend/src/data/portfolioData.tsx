import { 
  Code2, 
  Terminal, 
  Cpu, 
  Database, 
  Globe
} from 'lucide-react';

export const HERO_BG = "https://image.qwenlm.ai/public_source/be788dee-c702-4652-be9d-5cc7dbbbb141/116c51780-7d37-48d0-8f23-33a44c5f77bf.png";

const PROJECT_DASHBOARD = "https://image.qwenlm.ai/public_source/be788dee-c702-4652-be9d-5cc7dbbbb141/11e2d6dbd-e7d6-4843-bfb1-3548d49d598c.png";
const PROJECT_MOBILE = "https://image.qwenlm.ai/public_source/be788dee-c702-4652-be9d-5cc7dbbbb141/16d892efc-ca93-4318-87d8-d5f055eeebf3.png";
const PROJECT_AI = "https://image.qwenlm.ai/public_source/be788dee-c702-4652-be9d-5cc7dbbbb141/155b326c2-3903-4877-b831-657638b84a81.png";


export const SKILLS = [
  { name: "React", icon: <Code2 size={20} />, color: "text-blue-400" },
  { name: "TypeScript", icon: <Terminal size={20} />, color: "text-blue-600" },
  { name: "Next.js", icon: <Globe size={20} />, color: "text-white" },
  { name: "Python", icon: <Cpu size={20} />, color: "text-yellow-400" },
  { name: "FastAPI", icon: <Terminal size={20} />, color: "text-green-400" },
  { name: "SQL", icon: <Database size={20} />, color: "text-orange-400" },
  { name: "Tailwind", icon: <Code2 size={20} />, color: "text-cyan-400" },
  { name: "Node.js", icon: <Terminal size={20} />, color: "text-green-500" },
];

export const PROJECTS = [
  {
    title: "Analytics Dashboard",
    description: "A comprehensive data visualization platform built with React and D3.js. Features real-time data streaming and customizable widgets.",
    tags: ["React", "TypeScript", "D3.js", "Tailwind"],
    image: PROJECT_DASHBOARD,
    github: "#",
    demo: "#"
  },
  {
    title: "E-Commerce Mobile App",
    description: "A sleek mobile-first shopping experience with cart management, user authentication, and payment gateway integration.",
    tags: ["React Native", "Redux", "Firebase", "Stripe"],
    image: PROJECT_MOBILE,
    github: "#",
    demo: "#"
  },
  {
    title: "AI Chat Interface",
    description: "An intelligent conversational UI wrapper for LLMs. Includes streaming responses, syntax highlighting, and chat history management.",
    tags: ["Next.js", "OpenAI API", "Vercel AI SDK", "Shadcn UI"],
    image: PROJECT_AI,
    github: "#",
    demo: "#"
  }
];

export const CHAT_RESPONSES = [
  "I'm currently looking for frontend or full-stack internship opportunities!",
  "My tech stack focuses on the React ecosystem (Next.js, TypeScript) and Python backend services.",
  "I built this portfolio to showcase my ability to create modern, responsive, and interactive web applications.",
  "I graduated with a degree in Computer Science and have worked on several freelance projects.",
  "Feel free to check out my GitHub for more code samples!"
];