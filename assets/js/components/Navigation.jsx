import React from 'react';

const Navigation = ({ currentSection, onSectionChange, darkMode, onToggleDarkMode }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'publications', label: 'Publications' },
  ];

  return (
    <nav className="static bg-slate-100/95 dark:bg-slate-800/95 backdrop-blur-sm border-b border-border/50 shadow-sm mb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 max-w-7xl">
        <div className="flex items-center">
          <span className="text-lg font-heading font-semibold text-foreground tracking-tight">Jungwoo Shim</span>
        </div>
        <div className="flex md:flex items-center gap-6">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`nav-button ${currentSection === item.id ? 'active' : ''}`}
              onClick={() => onSectionChange(item.id)}
              aria-current={currentSection === item.id ? 'page' : undefined}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="flex items-center">
          <button
            className="p-1 rounded-md text-muted-foreground hover:text-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring hover:bg-accent/5"
            onClick={onToggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.95 7.07l-.71-.71M6.34 6.34l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
            )}
          </button>
          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring"
            onClick={() => {
              // Add mobile menu toggle logic here
            }}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 