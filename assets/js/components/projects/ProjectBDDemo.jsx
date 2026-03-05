import React from 'react';
import ProjectDetailCard from '../shared/ProjectDetailCard';

const ProjectBDDemo = () => {
  const tags = ["JavaScript", "Web Development", "Demo"];
  return (
    <ProjectDetailCard
      title="BD Demo - Web Demonstration Application"
      description="2023"
      tags={tags}
    >
      <div className="space-y-4">
        <p>
          A web-based demonstration application showcasing interactive features and modern web development techniques. Built with JavaScript and designed with responsive layouts and interactive UI components.
        </p>

        <h3 className="text-base font-semibold text-foreground">Features</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Interactive web application with responsive design for multiple screen sizes</li>
          <li>Built with modern JavaScript and standard web technologies</li>
          <li>Demonstrates dynamic UI components and client-side interactivity</li>
        </ul>

        <p>
          <a href="https://github.com/jshim0978/BD_demo" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">View on GitHub</a>
        </p>
      </div>
    </ProjectDetailCard>
  );
};

export default ProjectBDDemo;
