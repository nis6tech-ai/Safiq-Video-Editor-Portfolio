import { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/canvas/Background';

function App() {
  return (
    <>
      <div className="bg-primary text-secondary selection:bg-cyan-500 selection:text-white"
        style={{ position: 'relative', overflow: 'hidden' }}>
        <Suspense fallback={<div className="fixed inset-0 bg-black z-50 flex-center text-white">Loading 3D Assets...</div>}>
          <Background />
        </Suspense>

        <Navbar />

        <main>
          <Hero />
          <Experience />
          <Portfolio />
          <Skills />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
