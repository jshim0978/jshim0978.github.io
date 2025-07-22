import React from 'react';
import ProjectDetailCard from '../shared/ProjectDetailCard';

const ProjectMonitoringSystem = () => {
  const tags = ["Monitoring", "System Architecture", "DevOps", "Prometheus", "Grafana"];
  return (
    <ProjectDetailCard 
      title="In-House Project Monitoring System"
      description="Developed a real-time monitoring and alerting system for critical in-house applications."
      tags={tags}
    >
      <p>
        I designed and implemented a comprehensive monitoring solution using Prometheus and Grafana to provide real-time insights into application performance and health, enabling proactive issue resolution.
      </p>
    </ProjectDetailCard>
  );
};

export default ProjectMonitoringSystem; 