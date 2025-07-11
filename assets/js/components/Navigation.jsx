import React from 'react';

const Navigation = ({ currentSection, onSectionChange }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'publications', label: 'Publications & Patents', icon: '📄' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/90 border-b border-slate-200/50 transition-all shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
            J
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold text-slate-800 m-0 font-heading tracking-tight">Jungwoo Shim</h1>
            <p className="text-xs text-slate-500 m-0">AI Researcher at ETRI</p>
          </div>
        </div>
        
        <ul className="flex gap-1 list-none m-0 p-0">
          {navItems.map(item => (
            <li key={item.id}>
              <button
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/60 ${
                  currentSection === item.id 
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg scale-105' 
                    : 'text-slate-600 hover:text-slate-800 hover:bg-white/80 hover:shadow-md bg-white/60'
                }`}
                onClick={() => onSectionChange(item.id)}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="hidden sm:inline font-semibold">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation; 