import React from 'react';
const ProjectCOMAContest = () => (
  <div className="max-w-2xl mx-auto p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-card border border-blue-100">
    <h2 className="text-2xl font-bold mb-2 font-heading text-primary drop-shadow-lg">제3회 고용노동 공공데이터 활용 공모전 (COMA Grand Prize)</h2>
    <span className="inline-block bg-gold text-black px-2 py-1 rounded-full text-xs font-medium mb-2 shadow-card">Grand Prize</span>
    <div className="flex flex-wrap gap-2 mb-2">
      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">COMA Project</span>
      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">AI</span>
      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">Public Data</span>
      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">React.js</span>
      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">FastAPI</span>
      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">Spring Boot</span>
      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">RAG</span>
      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">EIS/NCS/ELDS labor data</span>
    </div>
    <p className="text-gray-700 text-base mb-2 font-body">
      Awarded the Grand Prize for presenting the COMA project, an AI-driven career consulting platform, at the 3rd Ministry of Employment and Labor Public Data Utilization Contest.
    </p>
    <ul className="list-disc pl-5 text-gray-600 text-sm mb-4 font-body">
      <li>Role: Full-Stack Developer & AI Engineer</li>
      <li>Technologies: React.js, FastAPI, Spring Boot, RAG, EIS/NCS/ELDS labor data</li>
      <li>Built an AI-driven career consulting platform</li>
      <li>Real-time labor market simulations and policy-based job matching</li>
      <li>Utilized public labor data for advanced analytics</li>
    </ul>
    <p className="text-sm text-gray-500 font-body">Awarded: 2023</p>
  </div>
);
export default ProjectCOMAContest; 