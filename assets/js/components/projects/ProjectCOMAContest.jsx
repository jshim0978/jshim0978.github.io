import React from 'react';
import ProjectDetailCard from '../shared/ProjectDetailCard';

const ProjectCOMAContest = () => {
  const tags = ["Data Analysis", "Public Data", "Award"];
  return (
    <ProjectDetailCard 
      title="COMA Grand Prize: Public Data Utilization Contest"
      description="Grand prize-winning project at the 3rd Ministry of Employment and Labor Public Data Utilization Contest."
      tags={tags}
    >
      <p>
        Our team developed an innovative solution that leverages public employment data to provide valuable insights for job seekers and policymakers. The project was recognized for its impact and technical execution.
      </p>
    </ProjectDetailCard>
  );
};

export default ProjectCOMAContest; 