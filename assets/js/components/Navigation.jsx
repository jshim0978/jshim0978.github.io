import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = ({ currentSection, onSectionChange, darkMode, onToggleDarkMode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'publications', label: 'Publications' },
    { id: 'blog', label: 'Blog' },
    { id: 'cv', label: 'CV' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [currentSection]);

  const handleNav = (id) => {
    onSectionChange(id);
    setMobileOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/80 dark:bg-[hsl(240,10%,4%)]/80 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-800/60'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center h-14">
        <button
          onClick={() => onSectionChange('home')}
          className="flex items-center gap-2.5 group"
        >
          <span className="text-sm font-semibold text-foreground tracking-tight">
            jshim
          </span>
          <span className="text-[10px] font-mono text-muted-foreground hidden sm:inline">/researcher</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-0.5 bg-slate-100/80 dark:bg-slate-800/50 rounded-lg p-0.5">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`relative px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors duration-150 ${
                currentSection === item.id
                  ? 'text-foreground bg-white dark:bg-slate-700 shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => handleNav(item.id)}
              aria-current={currentSection === item.id ? 'page' : undefined}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <button
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-150"
            onClick={onToggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.95 7.07l-.71-.71M6.34 6.34l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-150"
            onClick={() => setMobileOpen(prev => !prev)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.15 }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-[hsl(240,10%,4%)]/95 backdrop-blur-xl border-t border-slate-200/60 dark:border-slate-800/60"
          >
            <div className="px-4 py-2 space-y-0.5">
              {navItems.map(item => (
                <button
                  key={item.id}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    currentSection === item.id
                      ? 'text-foreground bg-slate-100 dark:bg-slate-800'
                      : 'text-muted-foreground hover:text-foreground hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`}
                  onClick={() => handleNav(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
