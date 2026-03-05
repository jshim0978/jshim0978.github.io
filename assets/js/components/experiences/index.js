import ExperienceETRI from './ExperienceETRI';
import ExperienceKoreaUniv from './ExperienceKoreaUniv';
import ExperienceMobileEntropy from './ExperienceMobileEntropy';
import ExperienceCNU from './ExperienceCNU';

const experiences = [
  {
    id: 'etri',
    title: 'Electronics and Telecommunications Research Institute (ETRI)',
    component: ExperienceETRI,
  },
  {
    id: 'korea-univ',
    title: 'Korea University Graduate School of Artificial Intelligence',
    component: ExperienceKoreaUniv,
  },
  {
    id: 'mobile-entropy',
    title: 'Mobile Entropy',
    component: ExperienceMobileEntropy,
  },
  {
    id: 'cnu',
    title: 'Chungnam National University',
    component: ExperienceCNU,
  },
];

const experienceMap = {
  etri: ExperienceETRI,
  'korea-univ': ExperienceKoreaUniv,
  'mobile-entropy': ExperienceMobileEntropy,
  'cnu': ExperienceCNU,
};

export { experiences, experienceMap, ExperienceCNU, ExperienceETRI, ExperienceKoreaUniv, ExperienceMobileEntropy };
