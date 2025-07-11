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
    <section className="bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-normal text-black mb-4">Projects</h1>
          <p className="text-gray-600">
            Research projects and software development work spanning AI, machine learning, and full-stack development.
          </p>
        </div>
        
        {/* Projects List */}
        <div className="space-y-8">
          {projects.map(project => (
            <button
              key={project.id}
              className="w-full text-left border-b border-gray-200 pb-6 hover:border-gray-300 transition-colors group"
              onClick={() => onProjectSelect(project.id)}
              type="button"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-black mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      Active
                    </span>
                    <span>AI/ML</span>
                    <span>Research</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Click to explore project details
                  </p>
                </div>
                <div className="text-gray-400 group-hover:text-blue-600 transition-colors ml-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
        
        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 mb-4">
            Interested in collaboration? I'm always open to discussing new research opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/files/심정우_포트폴리오.pdf" target="_blank" rel="noopener noreferrer" 
               className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              Download Portfolio
            </a>
            <span className="hidden sm:inline text-gray-400">•</span>
            <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 