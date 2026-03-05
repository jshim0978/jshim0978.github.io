import React from 'react';
import ProjectDetailCard from '../shared/ProjectDetailCard';

const ProjectJBSmartSafety = () => {
  const tags = ["IoT", "Safety Systems", "Full-Stack"];
  return (
    <ProjectDetailCard
      title="JB Smart Safety System - IoT Gas Safety Monitoring"
      description="Mobile Entropy, Jun - Dec 2021"
      tags={tags}
    >
      <div className="space-y-4">
        <p>
          Developed a comprehensive IoT-based safety monitoring system for gas infrastructure. As the frontend lead and backend support developer, spearheaded the implementation of a real-time safety monitoring dashboard for industrial gas installations.
        </p>

        <h3 className="text-base font-semibold text-foreground">Key Contributions</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Role:</strong> Frontend Lead and Backend Support</li>
          <li>Built a real-time dashboard for monitoring gas leak sensors and safety equipment with live data visualization</li>
          <li>Implemented IoT device integration logic for sensor data collection via MQTT and WebSocket protocols</li>
          <li>Created an alerting system for safety threshold violations, enabling rapid response to gas pressure, temperature, and leak detection anomalies</li>
          <li>Developed both the frontend dashboard and backend IoT communication layer</li>
          <li>Contributed to Spring Boot endpoints for safety evaluations and sensor data processing, including authentication and access control</li>
        </ul>

        <h3 className="text-base font-semibold text-foreground">Technologies</h3>
        <p>
          jQuery and JavaScript for the frontend, Spring Boot for the backend, OracleDB for data persistence, MQTT for IoT device communication, and WebSockets for real-time data streaming.
        </p>
      </div>
    </ProjectDetailCard>
  );
};

export default ProjectJBSmartSafety;
