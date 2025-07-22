import React from 'react';
import ProjectDetailCard from '../shared/ProjectDetailCard';

const ProjectElementaryGPT = () => {
  const tags = ["Python", "PyQt5", "OpenAI API"];
  return (
    <ProjectDetailCard 
      title="ElementaryGPT"
      description="A desktop application designed to make large language models more accessible for elementary school students."
      tags={tags}
    >
      <p>
        This project provides an intuitive graphical user interface (GUI) that simplifies interaction with OpenAI's GPT models, allowing young students to explore AI capabilities in a controlled and user-friendly environment.
      </p>
    </ProjectDetailCard>
  );
};

export default ProjectElementaryGPT; 