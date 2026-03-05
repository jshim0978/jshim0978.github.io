import React from 'react';
import ProjectDetailCard from '../shared/ProjectDetailCard';

const ExperienceMobileEntropy = () => {
  const tags = ["JavaScript", "React.js", "Java", "Spring Boot", "SQL", "KakaoPay API", "Prometheus", "Grafana", "Naver Cloud", "NHN Cloud", "IoT"];
  return (
    <ProjectDetailCard
      title="Mobile Entropy"
      description="Web Developer | Feb 2021 - Jan 2023 | Seoul, Korea"
      tags={tags}
    >
      <p>
        Worked as a full-stack web developer building and maintaining web services primarily for gas company
        clients. Led frontend development efforts and supported backend integration across multiple production
        projects involving payment systems, IoT safety monitoring, and cloud infrastructure.
      </p>

      <h3>Key Projects</h3>
      <ul>
        <li>
          <strong>Giro Payment System (OpenGiro), Jan - Apr 2022:</strong> Led frontend development for a
          gas company web-based giro bill payment service. Integrated KakaoPay API for online bill payments
          and built a responsive UI for bill management and payment processing.
        </li>
        <li>
          <strong>IoT Smart Safety System (JB Smart Safety), Jun - Dec 2021:</strong> Developed a comprehensive
          safety monitoring system for gas infrastructure. Built the frontend dashboard and IoT device integration
          logic, enabling real-time monitoring of gas leak sensors and safety equipment.
        </li>
        <li>
          <strong>NHN Cloud Migration:</strong> Migrated legacy on-premise infrastructure to NHN Cloud (later
          migrated to Naver Cloud), improving system reliability and scalability.
        </li>
        <li>
          <strong>System Monitoring:</strong> Built real-time monitoring dashboards using Prometheus and Grafana
          on Naver Cloud. Created alerting rules for critical system metrics.
        </li>
        <li>
          <strong>KakaoPay Smart Sandbox:</strong> Implemented a sandbox testing environment for KakaoPay API
          integration, enabling safe development and testing of payment features.
        </li>
      </ul>
    </ProjectDetailCard>
  );
};

export default ExperienceMobileEntropy;
