import React from 'react';
import ProjectDetailCard from '../shared/ProjectDetailCard';

const ProjectMonitoringSystem = () => {
  const tags = ["Monitoring", "Prometheus", "Grafana", "DevOps"];
  return (
    <ProjectDetailCard
      title="System Monitoring - Prometheus and Grafana Dashboard"
      description="Mobile Entropy, 2021-2022"
      tags={tags}
    >
      <div className="space-y-4">
        <p>
          Built a real-time system monitoring infrastructure using Prometheus and Grafana, deployed on Naver Cloud for comprehensive monitoring of production services. The system provides full observability into server health, application performance, and availability.
        </p>

        <h3 className="text-base font-semibold text-foreground">Key Contributions</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Designed and deployed the monitoring stack using Prometheus for metrics collection and Grafana for visualization</li>
          <li>Created custom dashboards for server metrics including CPU, memory, disk, and network utilization</li>
          <li>Configured alerting rules for critical system events, enabling proactive incident response</li>
          <li>Monitored web application performance and availability with custom health-check integrations</li>
          <li>Integrated the monitoring infrastructure with the existing deployment pipeline for automated health checks</li>
        </ul>

        <h3 className="text-base font-semibold text-foreground">Technologies</h3>
        <p>
          Prometheus for metrics collection and alerting, Grafana for dashboard visualization, deployed on Naver Cloud infrastructure alongside production services.
        </p>
      </div>
    </ProjectDetailCard>
  );
};

export default ProjectMonitoringSystem;
