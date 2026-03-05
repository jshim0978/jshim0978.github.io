import React from 'react';
import ProjectDetailCard from '../shared/ProjectDetailCard';

const ProjectNHNCloudMigration = () => {
  const tags = ["Cloud Migration", "DevOps", "NHN Cloud"];
  return (
    <ProjectDetailCard
      title="NHN Cloud Migration - Infrastructure Modernization"
      description="Mobile Entropy, 2021-2022"
      tags={tags}
    >
      <div className="space-y-4">
        <p>
          Led the migration of legacy on-premise infrastructure to NHN Cloud (later transitioned to Naver Cloud), redesigning the deployment architecture for cloud-native operation with improved reliability, scalability, and maintainability.
        </p>

        <h3 className="text-base font-semibold text-foreground">Key Contributions</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Planned and executed the migration of multiple in-house projects from on-premise servers to NHN Cloud</li>
          <li>Redesigned deployment architecture for cloud-native operation, leveraging managed services where appropriate</li>
          <li>Set up CI/CD pipelines for automated deployment, reducing manual deployment effort and human error</li>
          <li>Configured cloud networking, security groups, and access management for production environments</li>
          <li>Improved system reliability and scalability through cloud-based infrastructure patterns</li>
        </ul>

        <h3 className="text-base font-semibold text-foreground">Technologies</h3>
        <p>
          NHN Cloud and Naver Cloud for infrastructure, CI/CD tooling for automated deployments, and cloud networking and security group configuration for production operations.
        </p>
      </div>
    </ProjectDetailCard>
  );
};

export default ProjectNHNCloudMigration;
