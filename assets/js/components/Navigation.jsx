import React from 'react';

const Navigation = ({ currentSection, onSectionChange }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'publications', label: 'Publications & Patents', icon: '📄' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-medium text-sm">
            J
          </div>
          <div>
            <h1 className="text-lg font-medium text-black m-0">Jungwoo Shim</h1>
            <p className="text-xs text-gray-500 m-0">AI Researcher</p>
          </div>
        </div>
        
        <ul className="flex gap-6 list-none m-0 p-0">
          {navItems.map(item => (
            <li key={item.id}>
              <button
                className={`text-sm font-medium transition-colors focus:outline-none ${
                  currentSection === item.id 
                    ? 'text-blue-600' 
                    : 'text-gray-600 hover:text-black'
                }`}
                onClick={() => onSectionChange(item.id)}
              >
                <span className="hidden sm:inline">{item.label}</span>
                <span className="sm:hidden text-base">{item.icon}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation; 