import React from 'react';
import ProjectDetailCard from '../shared/ProjectDetailCard';

const ProjectGenAIContest = () => {
  const tags = ["Generative AI", "Metaverse", "Award"];
  return (
    <ProjectDetailCard 
      title="GenAI Academy Award: 2024 Metaverse Developer Competition"
      description="Award-winning project at the 2024 Metaverse Developer Competition, focused on generative AI."
      tags={tags}
    >
      <p>
        Our project showcased a novel application of generative AI within a metaverse environment, earning recognition for its creativity and technical implementation from the GenAI Academy.
      </p>
    </ProjectDetailCard>
  );
};

export default ProjectGenAIContest; 