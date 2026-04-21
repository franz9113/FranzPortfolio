'use client';

import { useState, useEffect } from 'react';
import Container from "./layout/Container";
import { galleryItems, projectDetails } from "../data/portfolio-data";
import ProjectModal from './ProjectModal';

interface SelectedProject {
  title: string;
  category: string;
  image: string;
  details?: typeof projectDetails[keyof typeof projectDetails];
}

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState<SelectedProject | null>(null);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selected]);

  const categories = ['All', ...new Set(galleryItems.map(item => item.category))];
  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-24 bg-[#0a1120] border-t border-white/5">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Gallery</h2>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                  ? 'bg-emerald-500 text-[#0a1120] font-bold' 
                  : 'bg-zinc-900/50 text-zinc-400 border border-white/10 hover:border-emerald-500/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelected({
                title: item.title,
                category: item.category,
                image: item.image,
                details: projectDetails[item.title as keyof typeof projectDetails]
              })}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-zinc-900 border border-white/5 aspect-video"
            >
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1120] via-[#0a1120]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-1">{item.category}</span>
                <h3 className="text-white font-bold text-base leading-tight">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

       {selected && (
          <ProjectModal 
            selected={selected} 
            onClose={() => setSelected(null)} 
          />
        )}
      </Container>
    </section>
  );
};

export default Gallery;