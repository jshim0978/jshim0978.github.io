import React from 'react';
import ProjectDetailCard from '../shared/ProjectDetailCard';

const ProjectArgusSAF = () => {
  const tags = ["Static Analysis", "Tooling", "Python"];
  return (
    <ProjectDetailCard 
      title="Argus-SAF Tool Enhancement"
      description="Improved and optimized the Argus-SAF static analysis tool for better performance and accuracy."
      tags={tags}
    >
      <p>
        This project focused on enhancing the capabilities of the Argus-SAF tool, a static analyzer for identifying vulnerabilities in software. My contributions led to more precise and faster security analysis.
      </p>
    </ProjectDetailCard>
  );
};

export default ProjectArgusSAF; 