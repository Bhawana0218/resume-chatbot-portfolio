import Section from "../components/section"
import {
    Mail,
    Github,
    Linkedin,
    Send,
    Phone,
    MapPin,
} from 'lucide-react';

import Button from "../components/Button";

const Contact = () =>{
    return (
        <Section id="contact" className="bg-slate-900/30">
        <div className="max-w-4xl mx-auto bg-slate-900 border border-white/5 rounded-3xl p-8 md:p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Let's work together</h2>
              <p className="text-slate-400 mb-8">
                Have a project in mind or want to discuss an internship opportunity? 
                I'm always open to new connections.
              </p>
              
              <div className="space-y-4">
                <a href="mailto:hello@example.com" className="flex items-center gap-3 text-slate-300 hover:text-indigo-400 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  portfolioAI@gmail.com
                </a>
                <div className="flex gap-4 mt-8">
                  <a href="https://github.com/Bhawana0218" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/bhawana-bisht-5442582b3" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all">
                    <Linkedin size={20} />
                  </a>
                </div>
                <div className="mt-8 space-y-4">
                  
                  {/* Phone */}
                  
                  <div className="flex items-center gap-3 text-slate-300">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all">
                      <Phone size={20} />
                    </div>
                    +91 99999 99999
                    </div>
                    
                    {/* Address */}
                    <div className="flex items-start gap-3 text-slate-300">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all">
                        <MapPin size={20} />
                      </div>
                      <span>
                           Nainital <br />
                        Uttarakhand, India
                      </span>
                    </div>
                </div>
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                <input type="text" className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                <input type="email" className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                <textarea rows={4} className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors resize-none" placeholder="Tell me about your project..." />
              </div>
              <Button variant="primary" className="w-full" icon={Send}>
                Send Message
              </Button>
            </form>
          </div>
        </div>
        </Section>
    );
}

export default Contact;