import React from 'react';
import ProjectDetailCard from '../shared/ProjectDetailCard';

const ProjectElementaryGPT = () => {
  const tags = ["AI", "NLP", "React", "Large Language Models"];
  return (
    <ProjectDetailCard
      title="ElementaryGPT (I-Scream Education Project)"
      description="Korea University, May - Nov 2023 | Client: I-Scream Education"
      tags={tags}
    >
      <div className="space-y-4">
        <p>
          ElementaryGPT is an LLM-based conversational AI assistant designed specifically for elementary school teachers. Developed in partnership with I-Scream Education, the system helps teachers create lesson plans, quizzes, and educational content through natural language interaction.
        </p>

        <h3 className="text-base font-semibold text-foreground">Key Features</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Built a conversational AI system that assists teachers in generating lesson plans, quizzes, and educational materials</li>
          <li>Integrated LLM APIs for natural language understanding and generation tailored to the Korean elementary curriculum</li>
          <li>Developed a user-friendly web interface for intuitive teacher interaction with the AI assistant</li>
          <li>Deployed as a pilot program with I-Scream Education for real-world classroom evaluation</li>
        </ul>

        <h3 className="text-base font-semibold text-foreground">Technologies</h3>
        <p>
          React for the frontend interface, FastAPI for the backend service layer, and OpenAI API integration for LLM capabilities. The system was designed to be accessible to educators with minimal technical background.
        </p>
      </div>
    </ProjectDetailCard>
  );
};

export default ProjectElementaryGPT;
