import { personalInfo } from "@/data/portfolio-data";
import Container from "./layout/Container";

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0a1120]">
      <Container>
        {/* Centered Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Circular Image */}
          <div className="flex justify-center md:justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-zinc-800 shadow-2xl">
              <img 
                src={personalInfo.profileImage}
                alt="Franz" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="text-zinc-400 space-y-6 text-lg leading-relaxed max-w-xl">
            {personalInfo.bio.map((paragraph, index) => (
              <p key={index} className='text-lg mb-6 text-muted-foreground'>
                {paragraph}
              </p>
            ))}

            <div className="flex gap-4 pt-6">
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
        </div>
      </Container>
    </section>
  );
};

export default About;