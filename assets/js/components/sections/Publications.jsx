import React from 'react';

const publications = [
  {
    id: 'patent-2024',
    type: 'Patent',
    title: '치료적 프롬프트 정제를 통해 언어 모델의 환각 오류를 감소시키는 방법, 장치, 및 프로그램',
    subTitle: 'KR Application No. 10-2024-0102366 · 출원일: 2024년 8월 1일',
    year: 2024,
    description: 'Method, device, and program for reducing hallucination errors in language models through therapeutic prompt refinement.'
  },
  {
    id: 'ieee-smc-2024',
    type: 'Conference Paper (Accepted)',
    title: 'CPR: Mitigating Large Language Model Hallucinations with Curative Prompt Refinement',
    subTitle: 'IEEE International Conference on Systems, Man, and Cybernetics (IEEE SMC 2024)',
    year: 2024,
    description: 'Research paper presenting a novel approach to mitigating hallucinations in large language models through curative prompt refinement techniques.',
    image: '/images/publicationImages/CPR.png',
    imageAlt: 'CPR Paper Figure',
    link: '/files/학술대회(1).pdf',
    linkLabel: 'View Paper (PDF)'
  },
  {
    id: 'pattern-recognition-2024',
    type: 'Journal Submission (Under Review)',
    title: 'Multi-stage Prompt Refinement for Mitigating Hallucinations in Large Language Models',
    subTitle: 'Pattern Recognition (Under Review)',
    year: 2024,
    description: 'Comprehensive study on multi-stage prompt refinement techniques for reducing hallucinations in large language models.',
    image: '/images/publicationImages/MPR.png',
    imageAlt: 'Multi-stage Prompt Refinement Paper Figure',
    link: '/files/게재논문(1).pdf',
    linkLabel: 'View Paper (PDF)'
  },
];

const Publications = () => (
  <section className="py-12 bg-background-strong min-h-[80vh]">
    <div className="max-w-5xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-10 font-heading text-primary drop-shadow-lg">📄 Publications & Patents</h1>
      <div className="grid grid-cols-1 gap-6">
        {publications.map(pub => (
          <div key={pub.id} className="bg-white/90 backdrop-blur-md rounded-2xl shadow-card p-6 border border-blue-100 hover:scale-[1.02] hover:shadow-lg transition-all group">
            {pub.image && (
              <img src={pub.image} alt={pub.imageAlt || pub.title} className="w-full max-w-md mx-auto mb-4 rounded-xl shadow-card object-contain" />
            )}
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block bg-primary text-black px-2 py-1 rounded-full text-xs font-medium shadow-card group-hover:bg-accent transition-colors">{pub.type}</span>
              <span className="text-xs text-gray-500">{pub.year}</span>
            </div>
            <h2 className="text-xl font-bold mb-1 font-heading group-hover:text-primary transition-colors">{pub.title}</h2>
            <div className="text-sm text-gray-600 mb-2">{pub.subTitle}</div>
            <p className="text-gray-700 text-base font-body mb-2">{pub.description}</p>
            {pub.link && (
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 bg-primary text-white rounded-lg shadow hover:bg-accent transition-colors font-medium text-sm"
              >
                {pub.linkLabel || 'View PDF'}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Publications; 