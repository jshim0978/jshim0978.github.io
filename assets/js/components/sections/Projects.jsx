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
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-50/20 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-gray-50/30 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore my research projects and software development work spanning AI, machine learning, and full-stack development.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map(project => (
            <button
              key={project.id}
              className="bg-white rounded-2xl p-8 text-left border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 group"
              onClick={() => onProjectSelect(project.id)}
              type="button"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-xl font-bold">
                  {project.title.charAt(0)}
                </div>
                <div className="text-gray-400 group-hover:text-blue-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span className="text-sm text-gray-500">Active Project</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                  AI/ML
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                  Research
                </span>
              </div>
              
              <div className="text-sm text-gray-500 group-hover:text-blue-600 transition-colors">
                Click to explore →
              </div>
            </button>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in Collaboration?</h3>
            <p className="text-gray-600 mb-6">
              I'm always open to discussing new research opportunities and innovative projects in AI and machine learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/files/심정우_포트폴리오.pdf" target="_blank" rel="noopener noreferrer" 
                 className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                Download Portfolio
              </a>
              <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
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