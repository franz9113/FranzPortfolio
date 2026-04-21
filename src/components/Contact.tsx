'use client';

import Container from "./layout/Container";
import { personalInfo } from "@/data/portfolio-data";

const Contact = () => {
  return (
    <section id="contact" className="py-32 text-center">
      <Container>
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-white tracking-tight">
              Get In Touch
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question 
              or just want to say hi, I'll do my best to get back to you!
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-6">
             {/* Email Link */}
              <a href={`mailto:${personalInfo.email}`} className="p-3 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-emerald-500 transition-all group">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-emerald-500 transition-colors">
                  <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </a>
            {/* LinkedIn Link */}
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-emerald-500 transition-all group">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-emerald-500 transition-colors">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              {/* Seek Link */}
              <a href={personalInfo.seek} target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-emerald-500 transition-all group">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-emerald-500 transition-colors">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                  <path d="M11 8a3 3 0 0 0-3 3" />
                </svg>
              </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;