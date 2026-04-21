import Container from "./layout/Container";
import { personalInfo } from "@/data/portfolio-data";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-20">
      <Container className="flex flex-col items-center text-center max-w-4xl">
        
        {/* 1. Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-400 text-xs font-semibold tracking-wide uppercase">
            Available for hire
          </span>
        </div>

        {/* 2. Headline */}
        <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-8">
          Hi, I'm <span className="text-emerald-500">{personalInfo.name.split(' ')[0]}</span><br />
          {personalInfo.role}
        </h1>

        {/* 3. Sub-headline */}
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          {/* I design clean, user-friendly interfaces and experiences—built with empathy 
          and backed by a foundation in web development. */}
          {personalInfo.subheadline}
        </p>

        {/* 4. Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#gallery" 
            className="group flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-8 py-4 rounded-xl font-bold transition-all"
          >
            View My Work
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2.5} 
                stroke="currentColor" 
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
          
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-zinc-800 bg-zinc-900/50 text-white font-bold hover:bg-zinc-800 transition-all"
          >
            Contact Me
          </a>
        </div>

      {/* Decorative background glow (Optional) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -z-10"></div>
    </Container>
    </section>
  );
};
export default Hero;