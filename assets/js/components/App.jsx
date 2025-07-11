import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Home from './sections/Home';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Publications from './sections/Publications';

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

  // Hash-based routing
  useEffect(() => {
    function handleHashChange() {
      const { section, id } = parseHash();
      setCurrentSection(section || 'home');
      setSelectedProjectId(section === 'projects' ? id : null);
      setSelectedExperienceId(section === 'experience' ? id : null);
    }
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // initial
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (section, id = null) => {
    if (section === 'projects' && id) {
      window.location.hash = `/projects/${id}`;
    } else if (section === 'experience' && id) {
      window.location.hash = `/experience/${id}`;
    } else {
      window.location.hash = `/${section}`;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <Home onNavigate={section => navigate(section)} />;
      case 'projects':
        return <Projects
          onProjectSelect={id => id ? navigate('projects', id) : navigate('projects')}
          selectedProjectId={selectedProjectId}
        />;
      case 'experience':
        return <Experience
          onExperienceSelect={id => id ? navigate('experience', id) : navigate('experience')}
          selectedExperienceId={selectedExperienceId}
        />;
      case 'publications':
        return <Publications />;
      default:
        return <Home onNavigate={section => navigate(section)} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        currentSection={currentSection}
        onSectionChange={section => navigate(section)}
      />
      <main className="pt-16">
        {renderSection()}
      </main>
      {showBackToTop && (
        <button
          className="fixed bottom-6 right-6 w-8 h-8 bg-gray-100 text-gray-600 rounded text-xs transition-all hover:bg-gray-200 z-50"
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