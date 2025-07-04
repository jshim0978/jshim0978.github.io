import React from 'react';
const ProjectElementaryGPT = () => (
  <div className="max-w-2xl mx-auto p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-card border border-blue-100">
    <h2 className="text-2xl font-bold mb-2 font-heading text-primary drop-shadow-lg">ElementaryGPT</h2>
    <span className="inline-block bg-primary text-black px-2 py-1 rounded-full text-xs font-medium mb-2 shadow-card">AI Researcher & LLM Engineer</span>
    <div className="flex flex-wrap gap-2 mb-2">
      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">Polyglot-Ko</span>
      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">Mistral</span>
      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">Solar</span>
      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">Python</span>
      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">Hugging Face Datasets</span>
      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">Pandas</span>
      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">DAPT</span>
      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">NEFTune</span>
    </div>
    <p className="text-gray-700 text-base mb-2 font-body">
      Fine-tuned LLMs with domain adaptive pre-training and instruction datasets (KorQuAD, GSM8K) to create a curriculum-based QA assistant for elementary teachers.
    </p>
    <ul className="list-disc pl-5 text-gray-600 text-sm mb-4 font-body">
      <li>Role: AI Researcher & LLM Engineer</li>
      <li>Technologies: Polyglot-Ko, Mistral, Solar, Python, Hugging Face Datasets, Pandas, DAPT, NEFTune</li>
      <li>Developed a QA assistant tailored for elementary school teachers</li>
      <li>Domain adaptive pre-training and instruction dataset curation</li>
      <li>Focused on curriculum-based question answering</li>
    </ul>
    <p className="text-sm text-gray-500 font-body">Project period: May 2023 - Nov 2023 (I-Scream Education, Korea)</p>
  </div>
);
export default ProjectElementaryGPT; 