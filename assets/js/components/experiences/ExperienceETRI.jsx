import React from 'react';
import ProjectDetailCard from '../shared/ProjectDetailCard';

const ExperienceETRI = () => {
  const tags = ["Python", "Kubernetes", "OpenStack", "MLPerf", "MMLU", "LLM Deployment", "Docker", "Linux"];
  return (
    <ProjectDetailCard
      title="Electronics and Telecommunications Research Institute (ETRI)"
      description="AI Researcher | Jul 2025 - Present | Daejeon, Korea"
      tags={tags}
    >
      <p>
        Working as a regular employee (Employee #07666) at the AI Computing Research Laboratory within the
        Ultra-Performance Computing Research Division. Focused on building cloud infrastructure for AI semiconductor
        evaluation and developing LLM benchmarking methodologies.
      </p>

      <h3>Main Project: AI Semiconductor Cloud Platform</h3>
      <p>
        Contributing to the government-funded R&D project "AI Semiconductor Cloud Platform"
        (Project Code: RS-2025-02263869), which aims to build a cloud platform optimized for
        AI semiconductor chips. The platform enables deploying and benchmarking AI/ML workloads
        on custom AI accelerator hardware using Kubernetes and OpenStack-based cloud infrastructure.
      </p>

      <h3>Key Responsibilities & Achievements</h3>
      <ul>
        <li>Developing MLPerf and LLM benchmark execution modules for evaluating large language models on AI semiconductors</li>
        <li>Building etri-llm-deployments and etri-llm-solution systems for LLM deployment on cloud infrastructure</li>
        <li>Researching LLM accuracy and hallucination benchmarking methodologies, including MMLU evaluation</li>
        <li>Created presentations and tools for MLPerf benchmarking for AI semiconductors (Aug 2025)</li>
        <li>Developed LLM hallucination and accuracy benchmark tools and delivered presentations (Nov 2025)</li>
        <li>Coordinating with subcontractors and partners including Mondrian AI (LLM evaluation solution), Orchestro, Innogrid, KETI, and Kyung Hee University</li>
        <li>Attended OCP Korea Tech Day 2025 for industry networking and knowledge sharing</li>
        <li>Continuing POaaS (Prompt Optimization as a Service) research published at FEVER@EACL 2026</li>
      </ul>
    </ProjectDetailCard>
  );
};

export default ExperienceETRI;
