import React from 'react';
import ProjectDetailCard from '../shared/ProjectDetailCard';

const ProjectBDDemo = () => {
  const tags = ["JavaScript", "Web Development", "Demo"];
  return (
    <ProjectDetailCard
      title="BD Demo"
      description="A web-based demonstration application built with JavaScript."
      tags={tags}
    >
      <p>
        A frontend demonstration project showcasing interactive web application capabilities.
      </p>
      <p>
        <a href="https://github.com/jshim0978/BD_demo" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">View on GitHub</a>
      </p>
    </ProjectDetailCard>
  );
};

export default ProjectBDDemo;
