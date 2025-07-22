import React from 'react';
import ProjectDetailCard from '../shared/ProjectDetailCard';

const ProjectJBSmartSafety = () => {
  const tags = ["jQuery", "JavaScript", "Spring Boot", "OracleDB", "MQTT", "WebSockets"];
  return (
    <ProjectDetailCard 
      title="JB Smart Safety System"
      description="A real-time safety monitoring dashboard for industrial sites."
      tags={tags}
    >
      <div className="space-y-4">
        <p>
          As the frontend lead and a backend support developer, I spearheaded the implementation of a real-time safety monitoring dashboard. My primary responsibilities included designing and developing responsive UI components and integrating RESTful APIs for device control and alarm management.
        </p>
        <p>
          I also contributed to the backend by assisting in the development of Spring Boot endpoints for safety evaluations and processing sensor data, which included implementing authentication and access control measures to secure the system.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Role:</strong> Frontend Lead & Backend Support</li>
          <li><strong>Technologies:</strong> jQuery, JavaScript, Spring Boot, OracleDB, MQTT, WebSockets</li>
          <li>Developed IoT device manipulation logic and the corresponding frontend interfaces for enhancing workplace safety.</li>
          <li>Contributed to improving safety standards by integrating smart IoT solutions into the existing infrastructure.</li>
          <li><strong>Project period:</strong> Jun 2021 - Dec 2021</li>
        </ul>
      </div>
    </ProjectDetailCard>
  );
};

export default ProjectJBSmartSafety; 