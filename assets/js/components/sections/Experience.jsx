import React from 'react';

const Experience = () => {
  const experience = [
    {
      title: "Electronics and Telecommunications Research Institute (ETRI)",
      position: "AI Researcher",
      duration: "2025/07 - Present",
      description: "Currently working as an AI researcher at ETRI, focusing on cutting-edge artificial intelligence research and development.",
      highlights: [
        "Conducting research in artificial intelligence and machine learning",
        "Contributing to innovative AI solutions and technologies"
      ]
    },
    {
      title: "Mobile Entropy",
      position: "Web Developer",
      duration: "2021/02 - 2023/01",
      description: "Developed and maintained web services for gas company clients, leading front-end and supporting back-end integration.",
      highlights: [
        "Led frontend development for various web applications",
        "Supported backend integration and system architecture",
        "Worked on payment systems, IoT safety monitoring, and cloud infrastructure"
      ]
    }
  ];

  const education = [
    {
      title: "Korea University Graduate School of Artificial Intelligence",
      degree: "M.S. in Artificial Intelligence",
      duration: "2023/03 - 2025/02",
      thesis: "Multi-stage Prompt Refinement for Mitigating Hallucinations in Large Language Models",
      description: "Specialized in large language models and prompt engineering techniques, with research focused on reducing hallucinations in AI systems."
    },
    {
      title: "Chungnam National University",
      degree: "B.S. in Computer Science",
      duration: "2015/03 - 2021/02",
      description: "Built a strong foundation in programming, algorithms, and software development."
    }
  ];

  const publications = [
    {
      type: "Patent",
      title: "치료적 프롬프트 정제를 통해 언어 모델의 환각 오류를 감소시키는 방법, 장치, 및 프로그램",
      details: "KR Application No. 10-2024-0102366 · 출원일: 2024년 8월 1일",
      description: "Method, device, and program for reducing hallucination errors in language models through therapeutic prompt refinement."
    },
    {
      type: "Conference Paper",
      title: "CPR: Mitigating Large Language Model Hallucinations with Curative Prompt Refinement",
      details: "IEEE International Conference on Systems, Man, and Cybernetics (IEEE SMC 2024)",
      description: "Research paper presenting a novel approach to mitigating hallucinations in large language models through curative prompt refinement techniques."
    },
    {
      type: "Journal Submission",
      title: "Multi-stage Prompt Refinement for Mitigating Hallucinations in Large Language Models",
      details: "Pattern Recognition (Under Review)",
      description: "Comprehensive study on multi-stage prompt refinement techniques for reducing hallucinations in large language models."
    }
  ];

  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-10">💼 Experience & Education</h1>
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-center mb-6">Professional Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} className="mb-8 bg-white rounded-xl shadow p-6 border-l-4 border-blue-600">
              <h3 className="text-lg font-bold mb-1">{exp.title}</h3>
              <div className="flex flex-wrap gap-2 items-center mb-2">
                <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">{exp.position}</span>
                <span className="text-gray-500 text-xs">{exp.duration}</span>
              </div>
              <p className="text-gray-700 mb-2 text-sm">{exp.description}</p>
              <ul className="list-disc pl-5 text-gray-600 text-sm">
                {exp.highlights.map((highlight, hIndex) => (
                  <li key={hIndex}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-center mb-6">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-8 bg-white rounded-xl shadow p-6">
              <h3 className="text-lg font-bold mb-1">{edu.title}</h3>
              <div className="flex flex-wrap gap-2 items-center mb-2">
                <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">{edu.degree}</span>
                <span className="text-gray-500 text-xs">{edu.duration}</span>
              </div>
              {edu.thesis && <p className="bg-gray-100 p-3 rounded mb-2 text-gray-700 text-sm"><strong>Thesis:</strong> {edu.thesis}</p>}
              <p className="text-gray-700 text-sm">{edu.description}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-center mb-6">Publications & Patents</h2>
          {publications.map((pub, index) => (
            <div key={index} className="mb-8 bg-white rounded-xl shadow p-6">
              <div className="mb-2">
                <span className="bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-medium mr-2">{pub.type}</span>
                <h3 className="inline text-lg font-bold mb-0">{pub.title}</h3>
              </div>
              <p className="text-blue-600 font-medium text-xs mb-1">{pub.details}</p>
              <p className="text-gray-700 text-sm">{pub.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 