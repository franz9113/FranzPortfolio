import Container from "./layout/Container";
import { allSkills } from "../data/portfolio-data"; //

const Skills = () => {
  return (
    <section id="skills" className="py-24 border-t border-white/5">
      <Container>
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
        </div>

        {/* Cleaner, card-free grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-8 gap-y-12">
          {allSkills.map((skill) => (
            <div 
              key={skill.name} 
              className="flex flex-col items-center justify-center group"
            >
              <div className="relative w-14 h-14 mb-4 transition-transform duration-300 group-hover:-translate-y-2">
                <img 
                  src={`https://cdn.simpleicons.org/${skill.icon}`} 
                  alt={skill.name}
                  className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`;
                  }}
                />
              </div>
              
              <span className="text-zinc-500 group-hover:text-emerald-400 text-xs font-semibold tracking-wider uppercase transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;