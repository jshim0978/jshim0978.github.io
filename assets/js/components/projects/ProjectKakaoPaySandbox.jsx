import React from 'react';
import ProjectDetailCard from '../shared/ProjectDetailCard';

const ProjectKakaoPaySandbox = () => {
  const tags = ["FinTech", "API", "Sandbox Environment", "React", "Spring Boot"];
  return (
    <ProjectDetailCard 
      title="KakaoPay Smart Sandbox"
      description="A sandbox environment for KakaoPay services, enabling safe testing of new features."
      tags={tags}
    >
      <p>
        I contributed to the development of a smart sandbox for KakaoPay, allowing developers to safely test new financial services and APIs in an isolated environment before deployment.
      </p>
    </ProjectDetailCard>
  );
};

export default ProjectKakaoPaySandbox; 