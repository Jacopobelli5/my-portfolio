import { useEffect, useRef } from 'react';
import Banner from './components/Banner';
import Experience from './components/Experience';
import Works from './components/Works';
import Contact from './components/Contact';
import './css/index.css';

export default function App() {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouse = e => {
      const glow = glowRef.current;
      if (!glow) return;
      glow.style.left = e.clientX + 'px';
      glow.style.top  = e.clientY + 'px';
    };
    document.addEventListener('mousemove', handleMouse);
    return () => document.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <div className="container-fluid">
      {/* glow layer */}
      <div id="cursor-glow" ref={glowRef} />

      <div className="row min-vh-100 main-container">
        {/* Left static banner/sidebar */}
        <header
          className="col-12 col-md-4 col-lg-4 d-flex flex-column justify-content-center px-4 px-md-3 banner-sidebar"
        >
          <Banner />
        </header>
        {/* Right scrollable content */}
        <main
          className="col-12 col-md-7 col-lg-6 offset-md-5 offset-lg-4 px-4 py-5"
        >
          <Experience />
          <Works />
        </main>
        <Contact />
      </div>
    </div>
  );
}
