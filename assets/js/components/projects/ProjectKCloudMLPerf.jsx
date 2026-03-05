import React from 'react';
import ProjectDetailCard from '../shared/ProjectDetailCard';

const ProjectKCloudMLPerf = () => {
  const tags = ["Python", "MLPerf", "Benchmarking", "Cloud"];
  return (
    <ProjectDetailCard
      title="KCloud MLPerf - AI Semiconductor Cloud Benchmarking"
      description="ETRI, Jul 2025 - Present | AI Semiconductor Cloud Platform Project (RS-2025-02263869)"
      tags={tags}
    >
      <div className="space-y-4">
        <p>
          Building MLPerf and LLM benchmark execution modules for the AI semiconductor cloud platform. This project enables standardized performance evaluation of AI accelerators through cloud-based benchmarking infrastructure, supporting the national initiative for AI semiconductor development.
        </p>

        <h3 className="text-base font-semibold text-foreground">Key Responsibilities</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Implementing standardized ML performance benchmarking modules (MLPerf Inference and Training) for cloud deployment</li>
          <li>Integrating MMLU benchmark for evaluating LLM capabilities across different AI accelerator architectures</li>
          <li>Supporting multiple AI chip architectures through Kubernetes-based orchestration on the cloud platform</li>
          <li>Working with cloud infrastructure components including OpenStack and Kubernetes for scalable benchmark execution</li>
        </ul>

        <h3 className="text-base font-semibold text-foreground">Collaboration</h3>
        <p>
          Part of a multi-organization effort with industry partners including Mondrian AI, KETI, and Kyung Hee University, focused on building a comprehensive AI semiconductor evaluation ecosystem.
        </p>

        <p>
          <a href="https://github.com/jshim0978/kcloud-mlperf" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">View on GitHub</a>
        </p>
      </div>
    </ProjectDetailCard>
  );
};

export default ProjectKCloudMLPerf;
