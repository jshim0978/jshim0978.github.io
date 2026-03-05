import React from 'react';
import ProjectDetailCard from '../shared/ProjectDetailCard';

const ProjectMPRSaaS = () => {
  const tags = ["Python", "Shell", "LLM", "Prompt Refinement", "NLP", "Hallucination Mitigation"];
  return (
    <ProjectDetailCard
      title="MPR-SaaS"
      description="Multi-stage Prompt Refinement as a Service for mitigating LLM hallucinations."
      tags={tags}
    >
      <p>
        Implementation of the multi-stage prompt refinement pipeline described in the research paper submitted to Pattern Recognition. The system iteratively refines prompts through multiple stages to reduce hallucination errors in large language models.
      </p>
      <p>
        <a href="https://github.com/jshim0978/MPR-SaaS" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">View on GitHub</a>
      </p>
    </ProjectDetailCard>
  );
};

export default ProjectMPRSaaS;
