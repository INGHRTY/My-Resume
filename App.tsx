import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import VideoGallery from './components/VideoGallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 selection:bg-stone-900 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <VideoGallery />
        <Portfolio />
        <Experience />
      </main>
      <Contact />
    </div>
  );
}

export default App;