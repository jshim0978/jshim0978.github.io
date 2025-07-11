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
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-light text-black mb-6">Projects</h1>
          <p className="text-base text-black leading-relaxed">
            Research projects and software development work spanning AI, machine learning, and full-stack development.
          </p>
        </div>
        
        {/* Projects List */}
        <div className="mb-10">
          {projects.map((project, index) => (
            <div key={project.id} className="mb-6">
              <button
                className="text-left w-full group"
                onClick={() => onProjectSelect(project.id)}
                type="button"
              >
                <h3 className="text-lg font-medium text-blue-600 hover:underline mb-1">
                  {project.title}
                </h3>
                <p className="text-base text-black leading-relaxed">
                  Click to explore project details and technical implementation.
                </p>
              </button>
            </div>
          ))}
        </div>
        
        {/* Contact */}
        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-xl font-medium text-black mb-4">Contact</h2>
          <div className="text-left">
            <p className="text-base text-black leading-relaxed mb-2">
              <strong>Email:</strong> Available upon request
            </p>
            <p className="text-base text-black leading-relaxed">
              <a href="/files/심정우_포트폴리오.pdf" target="_blank" rel="noopener noreferrer" 
                 className="text-blue-600 hover:underline">
                Download Portfolio (PDF)
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 