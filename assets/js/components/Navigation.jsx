import React from 'react';

const Navigation = ({ currentSection, onSectionChange }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'publications', label: 'Publications & Patents', icon: '📄' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/95 border-b border-gray-200 transition-all shadow-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
            J
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold text-gray-900 m-0 tracking-tight">Jungwoo Shim</h1>
            <p className="text-xs text-gray-500 m-0">AI Researcher at ETRI</p>
          </div>
        </div>
        
        <ul className="flex gap-1 list-none m-0 p-0">
          {navItems.map(item => (
            <li key={item.id}>
              <button
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                  currentSection === item.id 
                    ? 'bg-blue-600 text-white shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
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