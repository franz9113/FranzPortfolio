'use client';

import { projectDetails } from "../data/portfolio-data";

interface ProjectModalProps {
  selected: {
    title: string;
    category: string;
    image: string;
    details?: typeof projectDetails[keyof typeof projectDetails];
  };
  onClose: () => void;
}

const ProjectModal = ({ selected, onClose }: ProjectModalProps) => {
  return (
    <div 
      onClick={onClose} 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm cursor-pointer"
    >
      <div 
        onClick={(e) => e.stopPropagation()} 
        className="bg-[#0a1120] border border-white/10 max-w-5xl w-full h-[85vh] md:h-[70vh] rounded-2xl relative shadow-2xl cursor-default flex flex-col md:flex-row overflow-hidden"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-zinc-500 hover:text-white z-20 p-2 hover:bg-white/5 rounded-full transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        {/* FIXED IMAGE SIDE */}
        <div className="md:w-1/2 bg-zinc-900/50 flex items-center justify-center border-r border-white/5 overflow-hidden">
          <img src={selected.image} alt={selected.title} className="rounded-lg max-w-full max-h-full object-contain shadow-2xl border border-white/5" />
        </div>

        {/* SCROLLABLE TEXT SIDE */}
        <div className="md:w-1/2 p-10 overflow-y-auto scrollbar-thin scrollbar-thumb-emerald-500/20 scrollbar-track-transparent">
          {selected.details ? (
            <div className="w-full space-y-8 text-left">
              <div>
                <span className="text-zinc-500 font-medium text-xs uppercase tracking-[0.2em]">{selected.details.year} • {selected.category}</span>
                <h2 className="text-3xl font-bold text-white mt-2 mb-6 leading-tight">{selected.title}</h2>
              </div>

              <div className="space-y-3">
                <h4 className="text-emerald-500 font-bold text-sm tracking-wide">Overview</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{selected.details.overview}</p>
              </div>

              <div className="space-y-3">
                <h4 className="text-emerald-500 font-bold text-sm tracking-wide">My Contribution</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{selected.details.contribution}</p>
              </div>
              <div className="pt-6 border-t border-white/5">
                <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selected.details.tools.map(tool => (
                    <span key={tool} className="px-3 py-1 bg-emerald-500/5 border border-emerald-500/20 text-emerald-400 text-[10px] rounded-md font-medium">{tool}</span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-8 mt-4 border-t border-white/5">
                {selected.details.links?.map((link) => (
                  link.url !== '#' && (
                    <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-emerald-500 text-[#0a1120] text-xs font-bold rounded-lg hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/10">
                      {link.label}
                    </a>
                  )
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center text-center h-full justify-center">
              <div className="p-4 mb-6 border border-emerald-500/20 bg-emerald-500/5 rounded-full text-emerald-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 11.5A3.5 3.5 0 1 0 8.5 8 3.5 3.5 0 0 0 12 11.5Z"/><path d="M16 12.33 16 16l-4 3-4-3v-3.67"/></svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3 leading-tight">{selected.title}</h2>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold mb-8 border border-emerald-500/20">Official Certification</span>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-[320px]">This certification validates fundamental technical knowledge and professional proficiency in this domain.</p>
              <div className="w-full flex justify-center pt-8 border-t border-white/5">
                <div className="flex items-center gap-2 text-zinc-500 text-[10px] bg-zinc-900/50 px-4 py-2 rounded-lg border border-white/5 uppercase tracking-widest">
                  Type: <span className="text-zinc-300 font-bold">{selected.category}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;