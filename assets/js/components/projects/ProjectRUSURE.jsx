import React from 'react';
import ProjectDetailCard from '../shared/ProjectDetailCard';

const ProjectRUSURE = () => {
  const tags = ["Python", "LLM", "Hallucination Mitigation", "NLP"];
  return (
    <ProjectDetailCard
      title="RUSURE - Hallucination Detection System"
      description="Korea University, 2023-2024"
      tags={tags}
    >
      <div className="space-y-4">
        <p>
          RUSURE is a research system for detecting and quantifying hallucinations in large language model outputs. It forms a core component of the CPR (Curative Prompt Refinement) research pipeline, addressing the challenge of unreliable LLM responses through systematic prompt cleaning and reranking.
        </p>

        <h3 className="text-base font-semibold text-foreground">Key Contributions</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Implemented perplexity-based reranking for candidate prompt descriptions, enabling selection of the most reliable LLM outputs</li>
          <li>Developed a fine-tuned SLM (Small Language Model) to clean ill-formed prompts before LLM inference, reducing error propagation</li>
          <li>Achieved a 96% win rate over original prompts when evaluated with GPT-3.5, demonstrating significant improvement in response quality</li>
          <li>Integrated hallucination detection metrics into the broader CPR pipeline for end-to-end prompt refinement</li>
        </ul>

        <h3 className="text-base font-semibold text-foreground">Publication</h3>
        <p>
          Published at IEEE SMC 2024 (IEEE International Conference on Systems, Man, and Cybernetics).
        </p>

        <p>
          <a href="https://github.com/jshim0978/RUSURE" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">View on GitHub</a>
        </p>
      </div>
    </ProjectDetailCard>
  );
};

export default ProjectRUSURE;
