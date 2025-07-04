import ExperienceETRI from './ExperienceETRI';
import ExperienceMobileEntropy from './ExperienceMobileEntropy';
import ExperienceKoreaUniv from './ExperienceKoreaUniv';
import ExperienceCNU from './ExperienceCNU';
// Add more imports as you add more experiences

export const experiences = [
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
  // Add more experience objects here
];

export const experienceMap = {
  etri: ExperienceETRI,
  'mobile-entropy': ExperienceMobileEntropy,
  'korea-univ': ExperienceKoreaUniv,
  'cnu': ExperienceCNU,
  // Add more id: Component pairs here
}; 