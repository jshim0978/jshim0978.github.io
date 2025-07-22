import React from 'react';
import ProjectDetailCard from '../shared/ProjectDetailCard';

const ProjectNHNCloudMigration = () => {
  const tags = ["Cloud Migration", "DevOps", "NHN Cloud", "Infrastructure"];
  return (
    <ProjectDetailCard 
      title="NHN Cloud Migration of In-House Projects"
      description="Led the successful migration of several in-house projects to NHN Cloud."
      tags={tags}
    >
      <p>
        This initiative focused on improving scalability, reliability, and cost-efficiency by transitioning our infrastructure to NHN Cloud. I was responsible for planning the migration strategy and executing the transfer with minimal downtime.
      </p>
    </ProjectDetailCard>
  );
};

export default ProjectNHNCloudMigration; 