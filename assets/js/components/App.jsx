import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Home from './sections/Home';
import Projects from './sections/Projects';
import Experience from './sections/Experience';

const App = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <Home />;
      case 'projects':
        return <Projects />;
      case 'experience':
        return <Experience />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        currentSection={currentSection} 
        onSectionChange={setCurrentSection} 
      />
      
      <main className="mt-20 min-h-[calc(100vh-5rem)]">
        {renderSection()}
      </main>

      {showBackToTop && (
        <button 
          className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center text-2xl transition hover:bg-blue-800 z-50"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default App; 