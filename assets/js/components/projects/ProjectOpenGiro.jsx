import React from 'react';
import ProjectDetailCard from '../shared/ProjectDetailCard';

const ProjectOpenGiro = () => {
  const tags = ["Python", "OCR", "REST API"];
  return (
    <ProjectDetailCard 
      title="OpenGiro"
      description="An open-source tool for extracting text from Giro forms using Optical Character Recognition (OCR)."
      tags={tags}
    >
      <p>
        This project provides a simple and effective way to digitize and process information from paper-based Giro forms, making the data easily accessible via a RESTful API.
      </p>
    </ProjectDetailCard>
  );
};

export default ProjectOpenGiro; 