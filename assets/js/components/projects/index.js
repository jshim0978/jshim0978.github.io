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
// Add more imports as you add more projects

export const projects = [
  {
    id: 'elementarygpt',
    title: 'ElementaryGPT',
    description: 'A project focused on making large language models more accessible and understandable for elementary-level users.',
    tags: ['AI', 'NLP', 'React', 'Large Language Models'],
    component: ProjectElementaryGPT,
  },
  {
    id: 'opengiro',
    title: 'OpenGiro',
    description: 'An open-source platform for managing and visualizing financial data, with a focus on transparency and ease of use.',
    tags: ['FinTech', 'React', 'Data Visualization', 'Open Source'],
    component: ProjectOpenGiro,
  },
  {
    id: 'loldraftwin',
    title: 'League of Legends Win Prediction via Draft Data',
    description: 'A machine learning model that predicts the outcome of a League of Legends match based on the champion draft.',
    tags: ['Machine Learning', 'AI', 'Data Science', 'Gaming'],
    component: ProjectLoLDraftWinPrediction,
  },
  {
    id: 'argussaf',
    title: 'Improving the Argus-SAF Tool',
    description: 'Enhancements and optimizations for the Argus-SAF static analysis tool to improve accuracy and performance.',
    tags: ['Software Engineering', 'Static Analysis', 'Tooling'],
    component: ProjectArgusSAF,
  },
  {
    id: 'coma-contest',
    title: '제3회 고용노동 공공데이터 활용 공모전 (COMA Grand Prize)',
    description: 'Grand prize-winning project in the 3rd Ministry of Employment and Labor Public Data Utilization Contest.',
    tags: ['Contest', 'Public Data', 'Data Analysis'],
    component: ProjectCOMAContest,
  },
  {
    id: 'genai-contest',
    title: '2024 메타버스 개발자 경진대회 (GenAI Academy 장려상)',
    description: 'Award-winning project in the 2024 Metaverse Developer Competition, focused on generative AI.',
    tags: ['Contest', 'Generative AI', 'Metaverse'],
    component: ProjectGenAIContest,
  },
  {
    id: 'jb-smartsafety',
    title: 'JB Smart Safety System',
    description: 'A comprehensive smart safety system developed for JB, integrating IoT and real-time monitoring.',
    tags: ['IoT', 'Safety Systems', 'Full-Stack'],
    component: ProjectJBSmartSafety,
  },
  {
    id: 'kakaopay-sandbox',
    title: 'KakaoPay Smart Sandbox',
    description: 'A sandbox environment for KakaoPay services, enabling safe testing and development of new features.',
    tags: ['FinTech', 'API', 'Sandbox Environment'],
    component: ProjectKakaoPaySandbox,
  },
  {
    id: 'nhn-cloud-migration',
    title: 'NHN Cloud Migration of In-House Projects',
    description: 'Led the migration of several in-house projects to NHN Cloud, focusing on scalability and cost-efficiency.',
    tags: ['Cloud Migration', 'DevOps', 'NHN Cloud'],
    component: ProjectNHNCloudMigration,
  },
  {
    id: 'monitoring-system',
    title: 'Monitoring System for In-House Projects',
    description: 'Developed a real-time monitoring and alerting system for critical in-house applications.',
    tags: ['Monitoring', 'System Architecture', 'DevOps'],
    component: ProjectMonitoringSystem,
  },
  // Add more project objects here
];

export const projectMap = {
  elementarygpt: ProjectElementaryGPT,
  opengiro: ProjectOpenGiro,
  loldraftwin: ProjectLoLDraftWinPrediction,
  argussaf: ProjectArgusSAF,
  'coma-contest': ProjectCOMAContest,
  'genai-contest': ProjectGenAIContest,
  'jb-smartsafety': ProjectJBSmartSafety,
  'kakaopay-sandbox': ProjectKakaoPaySandbox,
  'nhn-cloud-migration': ProjectNHNCloudMigration,
  'monitoring-system': ProjectMonitoringSystem,
  // Add more id: Component pairs here
}; 