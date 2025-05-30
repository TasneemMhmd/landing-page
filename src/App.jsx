import React, { useEffect } from 'react';
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    if (window.location.hash) {
      const cleanURL = window.location.href.split('#')[0];
      window.history.replaceState(null, document.title, cleanURL);
      window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    return () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, []);

  return (
    <div className="scroll-smooth">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
