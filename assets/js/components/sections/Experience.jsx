import React from 'react';
import { experiences, experienceMap } from '../experiences';

const Experience = ({ onExperienceSelect, selectedExperienceId }) => {
  if (selectedExperienceId && experienceMap[selectedExperienceId]) {
    const ExperienceComponent = experienceMap[selectedExperienceId];
    return (
      <div className="py-12">
        <button
          className="mb-6 ml-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-gray-700"
          onClick={() => onExperienceSelect(null)}
        >
          ← Back to Experience
        </button>
        <ExperienceComponent />
      </div>
    );
  }

  return (
    <section className="py-12 bg-background min-h-[80vh]">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-10 font-heading text-primary drop-shadow-lg">💼 Experience & Education</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {experiences.map(exp => (
            <button
              key={exp.id}
              className="bg-white/90 backdrop-blur-md rounded-2xl shadow-card p-6 text-left border border-blue-100 hover:scale-[1.03] hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-accent/60 group"
              onClick={() => onExperienceSelect(exp.id)}
              type="button"
            >
              <h3 className="text-lg font-semibold mb-2 font-heading group-hover:text-primary transition-colors">{exp.title}</h3>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 