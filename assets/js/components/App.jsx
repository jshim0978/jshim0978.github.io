import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Home from '@/components/sections/Home';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Publications from '@/components/sections/Publications';
import CV from '@/components/sections/CV';
import Blog from '@/components/sections/Blog';
import Footer from '@/components/shared/Footer';

function parseHash() {
  const hash = window.location.hash.replace(/^#\/?/, '');
  if (!hash) return { section: 'home' };
  const [section, id] = hash.split('/');
  return { section, id };
}

const pageVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -4 },
};

const App = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [selectedExperienceId, setSelectedExperienceId] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
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
      setShowBackToTop(window.scrollY > 400);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
    if (id) path += `/${id}`;
    window.location.hash = path;
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <Home onNavigate={navigate} />;
      case 'projects':
        return <Projects onProjectSelect={(id) => navigate('projects', id)} selectedProjectId={selectedProjectId} />;
      case 'experience':
        return <Experience onExperienceSelect={(id) => navigate('experience', id)} selectedExperienceId={selectedExperienceId} />;
      case 'publications':
        return <Publications />;
      case 'cv':
        return <CV />;
      case 'blog':
        return <Blog />;
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-[2px] scroll-progress z-[60]"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />

      <Navigation
        currentSection={currentSection}
        onSectionChange={navigate}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(dm => !dm)}
      />

      <main id="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection + (selectedProjectId || '') + (selectedExperienceId || '')}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

      {/* Back to top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bottom-5 right-5 w-8 h-8 rounded-lg bg-foreground text-background flex items-center justify-center z-50 hover:bg-foreground/90 transition-colors shadow-sm"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
