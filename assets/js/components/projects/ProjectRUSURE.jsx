import React from 'react';
import ProjectDetailCard from '../shared/ProjectDetailCard';

const ProjectRUSURE = () => {
  const tags = ["Python", "LLM", "Hallucination Mitigation", "NLP", "AI Research"];
  return (
    <ProjectDetailCard
      title="RUSURE"
      description="Research project focused on hallucination mitigation in large language models."
      tags={tags}
    >
      <p>
        RUSURE explores methods for detecting and mitigating hallucinated outputs from large language models, contributing to more reliable and trustworthy AI systems.
      </p>
      <p>
        <a href="https://github.com/jshim0978/RUSURE" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">View on GitHub</a>
      </p>
    </ProjectDetailCard>
  );
};

export default ProjectRUSURE;
