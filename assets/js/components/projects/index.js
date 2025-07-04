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
    component: ProjectElementaryGPT,
  },
  {
    id: 'opengiro',
    title: 'OpenGiro',
    component: ProjectOpenGiro,
  },
  {
    id: 'loldraftwin',
    title: 'League of Legends Win Prediction via Draft Data',
    component: ProjectLoLDraftWinPrediction,
  },
  {
    id: 'argussaf',
    title: 'Improving the Argus-SAF Tool',
    component: ProjectArgusSAF,
  },
  {
    id: 'coma-contest',
    title: '제3회 고용노동 공공데이터 활용 공모전 (COMA Grand Prize)',
    component: ProjectCOMAContest,
  },
  {
    id: 'genai-contest',
    title: '2024 메타버스 개발자 경진대회 (GenAI Academy 장려상)',
    component: ProjectGenAIContest,
  },
  {
    id: 'jb-smartsafety',
    title: 'JB Smart Safety System',
    component: ProjectJBSmartSafety,
  },
  {
    id: 'kakaopay-sandbox',
    title: 'KakaoPay Smart Sandbox',
    component: ProjectKakaoPaySandbox,
  },
  {
    id: 'nhn-cloud-migration',
    title: 'NHN Cloud Migration of In-House Projects',
    component: ProjectNHNCloudMigration,
  },
  {
    id: 'monitoring-system',
    title: 'Monitoring System for In-House Projects',
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