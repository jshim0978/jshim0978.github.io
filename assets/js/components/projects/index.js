import ProjectElementaryGPT from './ProjectElementaryGPT';
import ProjectOpenGiro from './ProjectOpenGiro';
import ProjectLoLDraftWinPrediction from './ProjectLoLDraftWinPrediction';
import ProjectArgusSAF from './ProjectArgusSAF';
import ProjectCOMAContest from './ProjectCOMAContest';
import ProjectGenAIContest from './ProjectGenAIContest';
import ProjectJBSmartSafety from './ProjectJBSmartSafety';
import ProjectKakaoPaySandbox from './ProjectKakaoPaySandbox';
import ProjectNHNCloudMigration from './ProjectNHNCloudMigration';
import ProjectMonitoringSystem from './ProjectMonitoringSystem';
import ProjectPOaaS from './ProjectPOaaS';
import ProjectMPRSaaS from './ProjectMPRSaaS';
import ProjectRUSURE from './ProjectRUSURE';
import ProjectColorPoisoning from './ProjectColorPoisoning';
import ProjectKCloudMLPerf from './ProjectKCloudMLPerf';
import ProjectBDDemo from './ProjectBDDemo';

export const projects = [
  {
    id: 'poaas',
    title: 'POaaS - Prompt Optimization as a Service',
    description: 'A lightweight prompt-optimization layer for on-device small LLMs that improves accuracy and reduces hallucinations.',
    tags: ['Python', 'LLM', 'Prompt Optimization', 'On-Device AI'],
    component: ProjectPOaaS,
  },
  {
    id: 'mpr-saas',
    title: 'MPR-SaaS',
    description: 'Multi-stage Prompt Refinement as a Service for mitigating LLM hallucinations.',
    tags: ['Python', 'Shell', 'LLM', 'Prompt Refinement', 'NLP'],
    component: ProjectMPRSaaS,
  },
  {
    id: 'rusure',
    title: 'RUSURE',
    description: 'Research project focused on hallucination mitigation in large language models.',
    tags: ['Python', 'LLM', 'Hallucination Mitigation', 'NLP'],
    component: ProjectRUSURE,
  },
  {
    id: 'elementarygpt',
    title: 'ElementaryGPT',
    description: 'A project focused on making large language models more accessible and understandable for elementary-level users.',
    tags: ['AI', 'NLP', 'React', 'Large Language Models'],
    component: ProjectElementaryGPT,
  },
  {
    id: 'coma-contest',
    title: 'COMA Grand Prize (고용노동 공공데이터 공모전)',
    description: 'Grand prize-winning project in the 3rd Ministry of Employment and Labor Public Data Utilization Contest.',
    tags: ['Contest', 'Public Data', 'Data Analysis'],
    component: ProjectCOMAContest,
  },
  {
    id: 'genai-contest',
    title: 'GenAI Academy (메타버스 개발자 경진대회 장려상)',
    description: 'Award-winning project in the 2024 Metaverse Developer Competition, focused on generative AI.',
    tags: ['Contest', 'Generative AI', 'Metaverse'],
    component: ProjectGenAIContest,
  },
  {
    id: 'color-poisoning',
    title: 'Color Poisoning',
    description: 'Course project exploring adversarial data poisoning through color manipulation in neural networks.',
    tags: ['Python', 'Jupyter', 'Neural Networks', 'Adversarial ML'],
    component: ProjectColorPoisoning,
  },
  {
    id: 'loldraftwin',
    title: 'LoL Win Prediction via Draft Data',
    description: 'A machine learning model that predicts League of Legends match outcomes based on champion draft.',
    tags: ['Python', 'Machine Learning', 'Data Science'],
    component: ProjectLoLDraftWinPrediction,
  },
  {
    id: 'kcloud-mlperf',
    title: 'KCloud MLPerf',
    description: 'Machine learning performance benchmarking on cloud infrastructure using MLPerf.',
    tags: ['Python', 'MLPerf', 'Benchmarking', 'Cloud'],
    component: ProjectKCloudMLPerf,
  },
  {
    id: 'opengiro',
    title: 'OpenGiro',
    description: 'An open-source platform for managing and visualizing financial data.',
    tags: ['FinTech', 'React', 'Data Visualization'],
    component: ProjectOpenGiro,
  },
  {
    id: 'kakaopay-sandbox',
    title: 'KakaoPay Smart Sandbox',
    description: 'A sandbox environment for KakaoPay services, enabling safe testing of new features.',
    tags: ['FinTech', 'API', 'Sandbox'],
    component: ProjectKakaoPaySandbox,
  },
  {
    id: 'jb-smartsafety',
    title: 'JB Smart Safety System',
    description: 'A comprehensive smart safety system integrating IoT and real-time monitoring.',
    tags: ['IoT', 'Safety Systems', 'Full-Stack'],
    component: ProjectJBSmartSafety,
  },
  {
    id: 'nhn-cloud-migration',
    title: 'NHN Cloud Migration',
    description: 'Migration of in-house projects to NHN Cloud, focusing on scalability and cost-efficiency.',
    tags: ['Cloud Migration', 'DevOps', 'NHN Cloud'],
    component: ProjectNHNCloudMigration,
  },
  {
    id: 'monitoring-system',
    title: 'Monitoring System',
    description: 'Real-time monitoring and alerting system for critical in-house applications.',
    tags: ['Monitoring', 'Prometheus', 'Grafana', 'DevOps'],
    component: ProjectMonitoringSystem,
  },
  {
    id: 'argussaf',
    title: 'Improving the Argus-SAF Tool',
    description: 'Enhancements for the Argus-SAF static analysis tool to improve accuracy and performance.',
    tags: ['Software Engineering', 'Static Analysis'],
    component: ProjectArgusSAF,
  },
  {
    id: 'bd-demo',
    title: 'BD Demo',
    description: 'A web-based demonstration application built with JavaScript.',
    tags: ['JavaScript', 'Web Development', 'Demo'],
    component: ProjectBDDemo,
  },
];

export const projectMap = {
  poaas: ProjectPOaaS,
  'mpr-saas': ProjectMPRSaaS,
  rusure: ProjectRUSURE,
  elementarygpt: ProjectElementaryGPT,
  'coma-contest': ProjectCOMAContest,
  'genai-contest': ProjectGenAIContest,
  'color-poisoning': ProjectColorPoisoning,
  loldraftwin: ProjectLoLDraftWinPrediction,
  'kcloud-mlperf': ProjectKCloudMLPerf,
  opengiro: ProjectOpenGiro,
  'kakaopay-sandbox': ProjectKakaoPaySandbox,
  'jb-smartsafety': ProjectJBSmartSafety,
  'nhn-cloud-migration': ProjectNHNCloudMigration,
  'monitoring-system': ProjectMonitoringSystem,
  argussaf: ProjectArgusSAF,
  'bd-demo': ProjectBDDemo,
};
