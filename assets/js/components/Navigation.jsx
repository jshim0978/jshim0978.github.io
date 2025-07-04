import React from 'react';

const Navigation = ({ currentSection, onSectionChange }) => {
  const navItems = [
    { id: 'home', label: '🏠 Home', icon: '🏠' },
    { id: 'projects', label: '🚀 Projects', icon: '🚀' },
    { id: 'experience', label: '💼 Experience', icon: '💼' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur border-b border-gray-200 z-40 shadow-sm transition-all">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-lg font-bold text-gray-900 m-0">Jungwoo Shim</h1>
          <p className="text-xs text-gray-500 m-0">AI Researcher at ETRI</p>
        </div>
        <ul className="flex gap-2 list-none m-0 p-0">
          {navItems.map(item => (
            <li key={item.id}>
              <button
                className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-sm transition-all ${currentSection === item.id ? 'bg-blue-600 text-white shadow' : 'text-gray-600 hover:bg-gray-100 hover:text-blue-700'}`}
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