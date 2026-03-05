import React from 'react';
import ProjectDetailCard from '../shared/ProjectDetailCard';

const ProjectPOaaS = () => {
  const tags = ["Python", "LLM", "Prompt Optimization", "On-Device AI", "NLP"];
  return (
    <ProjectDetailCard
      title="POaaS - Prompt Optimization as a Service"
      description="A lightweight prompt-optimization layer for on-device small LLMs."
      tags={tags}
    >
      <p>
        POaaS is a CPU orchestrator that scores prompt quality, routes to specialist agents (grammar correction, paraphrase, deduplication), then a drift-controlled Merger produces an optimized prompt for a frozen target sLLM — improving accuracy and reducing hallucinations without expensive prompt search.
      </p>
      <p>
        Published at the FEVER Workshop at EACL 2026.
      </p>
      <p>
        <a href="https://github.com/jshim0978/POaaS" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">View on GitHub</a>
      </p>
    </ProjectDetailCard>
  );
};

export default ProjectPOaaS;
