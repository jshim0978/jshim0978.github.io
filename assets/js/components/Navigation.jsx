import React from 'react';

const Navigation = ({ currentSection, onSectionChange }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'publications', label: 'Publications & Patents', icon: '📄' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 shadow-nav backdrop-blur-md bg-white/80 border-b border-blue-100 transition-all">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-lg font-bold text-primary m-0 font-heading tracking-tight">Jungwoo Shim</h1>
          <p className="text-xs text-gray-500 m-0">AI Researcher at ETRI</p>
        </div>
        <ul className="flex gap-2 list-none m-0 p-0">
          {navItems.map(item => (
            <li key={item.id}>
              <button
                className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-sm transition-all shadow-card hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent/60 bg-white/90 border border-blue-100 ${currentSection === item.id ? 'bg-primary text-black shadow-lg' : 'text-gray-600 hover:text-primary'}`}
                onClick={() => onSectionChange(item.id)}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation; 