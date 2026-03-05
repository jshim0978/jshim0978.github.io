import React from 'react';
import ProjectDetailCard from '../shared/ProjectDetailCard';

const ExperienceKoreaUniv = () => {
  const tags = ["Python", "PyTorch", "Hugging Face Transformers", "QLoRA", "PEFT", "FastAPI", "React.js"];
  return (
    <ProjectDetailCard
      title="Korea University - Pattern Recognition & Machine Learning Lab"
      description="Graduate Researcher (M.S. in Artificial Intelligence) | Feb 2023 - Feb 2025 | Seoul, Korea"
      tags={tags}
    >
      <p>
        Completed a Master of Science in Artificial Intelligence (GPA: 4.21 / 4.5) under the supervision of
        Prof. Seong-Whan Lee. Research focused on prompt engineering and hallucination mitigation in large
        language models. Funded by IITP (No. 2019-0-00079, AI Graduate School Program at Korea University).
      </p>

      <h3>Thesis</h3>
      <p>
        "Multi-stage Prompt Refinement for Mitigating Hallucinations in Large Language Models"
      </p>

      <h3>Core Research</h3>
      <ul>
        <li>
          <strong>CPR (Curative Prompt Refinement):</strong> Developed a method using a fine-tuned small language
          model (SLM) to clean ill-formed prompts and generate descriptions with perplexity-based reranking.
          Achieved a 96% win rate over original prompts with GPT-3.5. Published at IEEE SMC 2024.
        </li>
        <li>
          <strong>MPR (Multi-stage Prompt Refinement):</strong> Extended CPR into a 3-stage approach
          (punctuation correction, typographical correction, semantic refinement) with iterative description
          generation using self-reflection. Achieved 85%+ win rate. Submitted to Pattern Recognition journal.
        </li>
        <li>Fine-tuned models using QLoRA on datasets including OLM Wikipedia, CoEdIT, MQR, and Magpie-Pro-300K</li>
        <li>Evaluated on Well-formed Queries, GSM8K, SQuAD, and Natural Questions datasets</li>
        <li>Filed patent for therapeutic prompt refinement methodology (KR Application No. 10-2024-0102366)</li>
      </ul>

      <h3>Industry & Academic Projects</h3>
      <ul>
        <li>
          <strong>GenAI Academy (Ducowise), Jun 2024:</strong> Developed LLM integration for a generative AI
          education platform
        </li>
        <li>
          <strong>COMA - Ministry of Employment and Labor, Jun 2024:</strong> Public data analysis project;
          won Grand Prize (1st Place)
        </li>
        <li>
          <strong>LLM for Chemical Control (ADD), Oct 2023 - Jan 2024:</strong> Built an LLM assistant for
          the Agency for Defense Development to support chemical control tasks
        </li>
        <li>
          <strong>ElementaryGPT (I-Scream), May - Nov 2023:</strong> Built an LLM-based assistant designed
          to support elementary school teachers
        </li>
      </ul>
    </ProjectDetailCard>
  );
};

export default ExperienceKoreaUniv;
