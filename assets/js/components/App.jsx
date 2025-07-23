import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Navigation from '@/components/Navigation';
import Home from '@/components/sections/Home';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Publications from '@/components/sections/Publications';

function parseHash() {
  const hash = window.location.hash.replace(/^#\/?/, '');
  if (!hash) return { section: 'home' };
  const [section, id] = hash.split('/');
  return { section, id };
}

const App = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [selectedExperienceId, setSelectedExperienceId] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleHashChange() {
      const { section, id } = parseHash();
      setCurrentSection(section || 'home');
      setSelectedProjectId(section === 'projects' ? id : null);
      setSelectedExperienceId(section === 'experience' ? id : null);
      window.scrollTo(0, 0);
    }
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (section, id = null) => {
    let path = `/${section}`;
    if (id) {
      path += `/${id}`;
    }
    window.location.hash = path;
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <section id="home" className="section"><Home onNavigate={navigate} /></section>;
      case 'projects':
        return <section id="projects" className="section"><Projects onProjectSelect={(id) => navigate('projects', id)} selectedProjectId={selectedProjectId} /></section>;
      case 'experience':
        return <section id="experience" className="section"><Experience onExperienceSelect={(id) => navigate('experience', id)} selectedExperienceId={selectedExperienceId} /></section>;
      case 'publications':
        return <section id="publications" className="section"><Publications /></section>;
      default:
        return <section id="home" className="section"><Home onNavigate={navigate} /></section>;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Navigation
          currentSection={currentSection}
          onSectionChange={navigate}
          darkMode={darkMode}
          onToggleDarkMode={() => setDarkMode(dm => !dm)}
        />
      </div>
      <main className="pt-8">
        <div className="container">
          {renderSection()}
        </div>
      </main>
      {showBackToTop && (
        <button
          className="fixed bottom-4 right-4 w-8 h-8 bg-card border rounded-full text-lg transition-all hover:scale-110 z-50 flex items-center justify-center"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default App; 