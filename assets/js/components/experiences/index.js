import React from 'react';
import ProjectDetailCard from '../shared/ProjectDetailCard';

const ExperienceCNU = () => (
  <ProjectDetailCard title="Chungnam National University" description="Bachelor of Science in Computer Science">
    <p>Details about the B.S. in Computer Science at CNU.</p>
  </ProjectDetailCard>
);
const ExperienceETRI = () => (
  <ProjectDetailCard title="ETRI (Electronics and Telecommunications Research Institute)" description="AI Researcher">
    <p>Details about the AI Researcher position at ETRI.</p>
  </ProjectDetailCard>
);
const ExperienceKoreaUniv = () => (
  <ProjectDetailCard title="Korea University" description="Master of Science in Artificial Intelligence">
    <p>Details about the M.S. in AI at Korea University.</p>
  </ProjectDetailCard>
);
const ExperienceMobileEntropy = () => (
  <ProjectDetailCard title="Mobile Entropy" description="Software Engineer">
    <p>Details about the Software Engineer role at Mobile Entropy.</p>
  </ProjectDetailCard>
);

const experiences = [
  {
    id: 'etri',
    title: 'Electronics and Telecommunications Research Institute (ETRI)',
    component: ExperienceETRI,
  },
  {
    id: 'mobile-entropy',
    title: 'Mobile Entropy',
    component: ExperienceMobileEntropy,
  },
  {
    id: 'korea-univ',
    title: 'Korea University Graduate School of Artificial Intelligence',
    component: ExperienceKoreaUniv,
  },
  {
    id: 'cnu',
    title: 'Chungnam National University',
    component: ExperienceCNU,
  },
];

const experienceMap = {
  etri: ExperienceETRI,
  'mobile-entropy': ExperienceMobileEntropy,
  'korea-univ': ExperienceKoreaUniv,
  'cnu': ExperienceCNU,
};

export { experiences, experienceMap, ExperienceCNU, ExperienceETRI, ExperienceKoreaUniv, ExperienceMobileEntropy }; 