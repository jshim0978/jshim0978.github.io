import React from 'react';
import { projects, projectMap } from '../projects';

const Projects = ({ onProjectSelect, selectedProjectId }) => {
  if (selectedProjectId && projectMap[selectedProjectId]) {
    const ProjectComponent = projectMap[selectedProjectId];
    return (
      <div className="py-12">
        <button
          className="mb-6 ml-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-gray-700"
          onClick={() => onProjectSelect(null)}
        >
          ← Back to Projects
        </button>
        <ProjectComponent />
      </div>
    );
  }

  return (
    <section className="relative py-12 min-h-[85vh] bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(99,102,241,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.05),transparent_50%)]"></div>
      
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 font-heading tracking-tight mb-4">
            🚀 Projects
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore my research projects and software development work spanning AI, machine learning, and full-stack development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <button
              key={project.id}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-left border border-slate-200 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/60 group overflow-hidden relative"
              onClick={() => onProjectSelect(project.id)}
              type="button"
            >
              {/* Card gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg">
                    {project.title.charAt(0)}
                  </div>
                  <div className="text-2xl opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                    ⚡
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 font-heading group-hover:text-purple-600 transition-colors duration-300 leading-tight">
                  {project.title}
                </h3>
                
                <div className="text-sm text-slate-500 mb-3 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Active Project</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {/* Tech stack badges - these would be from project data */}
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                    AI/ML
                  </span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                    Research
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>Click to explore</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </button>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4 font-heading">Interested in Collaboration?</h3>
            <p className="text-slate-600 mb-6">
              I'm always open to discussing new research opportunities and innovative projects in AI and machine learning.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="/files/심정우_포트폴리오.pdf" target="_blank" rel="noopener noreferrer" 
                 className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
                Download Portfolio
              </a>
              <button className="px-6 py-3 bg-white border-2 border-indigo-200 text-indigo-600 rounded-xl font-semibold hover:bg-indigo-50 transition-all duration-300">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 