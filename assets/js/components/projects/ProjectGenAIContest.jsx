import React from 'react';
import ProjectDetailCard from '../shared/ProjectDetailCard';

const ProjectGenAIContest = () => {
  const tags = ["Contest", "Generative AI", "Metaverse"];
  return (
    <ProjectDetailCard
      title="GenAI Academy - Metaverse Developer Competition Award"
      description="Korea University, Jun 2024 | Client: Ducowise | GenAI Academy Award"
      tags={tags}
    >
      <div className="space-y-4">
        <p>
          Received the GenAI Academy Award at the 2024 Metaverse Developer Competition for developing a generative AI educational platform that integrates LLM capabilities into interactive learning experiences.
        </p>

        <h3 className="text-base font-semibold text-foreground">Project Highlights</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Developed a generative AI educational platform for the Metaverse Developer Competition in collaboration with Ducowise</li>
          <li>Integrated LLM capabilities for interactive, AI-powered learning experiences within a metaverse environment</li>
          <li>Built a web-based interface for generative AI content creation, enabling users to create and interact with AI-generated materials</li>
          <li>Recognized with the GenAI Academy Award for creativity and technical implementation</li>
        </ul>

        <h3 className="text-base font-semibold text-foreground">Technologies</h3>
        <p>
          Web technologies for the frontend interface, LLM APIs for generative AI content, and metaverse platform integration for immersive educational experiences.
        </p>
      </div>
    </ProjectDetailCard>
  );
};

export default ProjectGenAIContest;
