import Navbar from "@/components/layout/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#0a1120]/85 text-[#9ca3af] selection:bg-emerald-500/30">
      <div className="max-w-[1440px] mx-auto shadow-2xl shadow-black/50">
        <Navbar />
          <main className="pt-16"> 
            <Hero />
            <About />
            <Skills />
            <Gallery />
            <Contact />
          </main>
      </div>
      
    </div>
  )
}
export default App