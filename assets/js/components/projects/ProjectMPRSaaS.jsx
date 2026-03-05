import React from 'react';
import ProjectDetailCard from '../shared/ProjectDetailCard';

const ProjectMPRSaaS = () => {
  const tags = ["Python", "Shell", "LLM", "Prompt Refinement", "NLP"];
  return (
    <ProjectDetailCard
      title="MPR-SaaS - Multi-stage Prompt Refinement as a Service"
      description="Korea University, Feb 2023 - Feb 2025"
      tags={tags}
    >
      <div className="space-y-4">
        <p>
          Service implementation of the Multi-stage Prompt Refinement research. MPR-SaaS provides a 3-stage prompt refinement pipeline that systematically transforms ill-formed user prompts into well-structured inputs, significantly reducing hallucination errors in large language models.
        </p>

        <h3 className="text-base font-semibold text-foreground">Pipeline Stages</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Stage 1: Punctuation Correction</strong> - Fixes missing or incorrect punctuation using a fine-tuned model, establishing a baseline of grammatical correctness</li>
          <li><strong>Stage 2: Typographical Correction</strong> - Corrects spelling and grammar errors that could confuse downstream LLM inference</li>
          <li><strong>Stage 3: Semantic Refinement</strong> - Enhances the clarity and informativeness of the prompt through iterative description generation with a self-reflection mechanism</li>
        </ul>

        <h3 className="text-base font-semibold text-foreground">Technical Details</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Fine-tuned using QLoRA on OLM Wikipedia, CoEdIT, MQR, and Magpie-Pro-300K datasets</li>
          <li>Includes an iterative description generation module with self-reflection for continuous refinement</li>
          <li>Achieves 85%+ win rate improvement over original prompts in comparative evaluations</li>
          <li>Evaluated on Well-formed Queries, GSM8K, SQuAD, and Natural Questions benchmarks</li>
        </ul>

        <h3 className="text-base font-semibold text-foreground">Publication</h3>
        <p>
          Submitted to Pattern Recognition journal (under review).
        </p>

        <p>
          <a href="https://github.com/jshim0978/MPR-SaaS" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">View on GitHub</a>
        </p>
      </div>
    </ProjectDetailCard>
  );
};

export default ProjectMPRSaaS;
