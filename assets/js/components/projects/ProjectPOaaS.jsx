import React from 'react';
import ProjectDetailCard from '../shared/ProjectDetailCard';

const ProjectPOaaS = () => {
  const tags = ["Python", "LLM", "Prompt Optimization", "On-Device AI"];
  return (
    <ProjectDetailCard
      title="POaaS - Prompt Optimization as a Service"
      description="ETRI, Jul 2025 - Present (continuing from Korea University research)"
      tags={tags}
    >
      <div className="space-y-4">
        <p>
          POaaS is a lightweight prompt-optimization layer designed for on-device small language models (sLLMs). It improves task accuracy and reduces hallucinations without requiring expensive prompt search or model fine-tuning, making it practical for resource-constrained deployment scenarios.
        </p>

        <h3 className="text-base font-semibold text-foreground">Overview</h3>
        <p>
          The system operates as a CPU-based orchestrator that scores prompt quality, routes prompts to specialist agents (grammar correction, paraphrase, deduplication), and then employs a drift-controlled Merger to produce an optimized prompt for a frozen target sLLM. This minimal-edit approach preserves the user's original intent while systematically improving prompt clarity and structure.
        </p>

        <h3 className="text-base font-semibold text-foreground">Key Contributions</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Implemented a minimal-edit prompt optimization pipeline that works as a service layer on top of existing sLLMs</li>
          <li>Designed the architecture for resource-constrained on-device deployment, requiring only CPU for the optimization layer</li>
          <li>Built on and extended the CPR (Curative Prompt Refinement) and MPR (Multi-stage Prompt Refinement) research from Korea University</li>
          <li>Tested across multiple sLLM architectures to validate generalizability</li>
          <li>Published at the FEVER Workshop at EACL 2026</li>
        </ul>

        <h3 className="text-base font-semibold text-foreground">Authors</h3>
        <p>
          Jungwoo Shim, Dae Won Kim, Sun Wook Kim, Soo Young Kim, Myungcheol Lee, Jae-geun Cha, Hyunhwa Choi
        </p>

        <p>
          <a href="https://github.com/jshim0978/POaaS" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">View on GitHub</a>
        </p>
      </div>
    </ProjectDetailCard>
  );
};

export default ProjectPOaaS;
