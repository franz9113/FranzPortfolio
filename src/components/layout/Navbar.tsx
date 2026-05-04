import React, { useState } from 'react';
import { navLinks } from '@/data/portfolio-data';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
  
    <nav className="fixed top-0 w-full z-50 bg-[#0a1120]/85 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex-1">
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              <a href="/">DevPortfolio</a>
            </span>
          </div>

          {/* 2. Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-baseline space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* 3. Resume Button */}
          {/* <div className="hidden md:flex flex-1 justify-end">
            <a 
                href="/Franz_Resume.pdf"
                download
                className="group flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-zinc-700 bg-transparent text-zinc-100 text-sm font-semibold transition-all hover:bg-zinc-800 hover:border-zinc-600"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.8} 
                stroke="currentColor" 
                className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Resume
            </a>
          </div> */}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden bg-[#0d1627] border-b border-zinc-800">
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-zinc-300 hover:text-white block px-3 py-2.5 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
            {/* Mobile Resume Button */}
            {/* <div className="px-3 pt-3">
                <a 
                    href="/Franz_Resume.pdf"
                    download
                    className="flex items-center justify-center gap-2.5 w-full border border-zinc-700 bg-transparent text-zinc-100 px-4 py-3 rounded-xl text-sm font-semibold"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4 text-zinc-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Resume
                </a>
            </div> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;