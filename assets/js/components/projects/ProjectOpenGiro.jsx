import React from 'react';
import ProjectDetailCard from '../shared/ProjectDetailCard';

const ProjectOpenGiro = () => {
  const tags = ["FinTech", "React", "Data Visualization"];
  return (
    <ProjectDetailCard
      title="OpenGiro - Gas Company Giro Payment System"
      description="Mobile Entropy, Jan - Apr 2022"
      tags={tags}
    >
      <div className="space-y-4">
        <p>
          Led frontend development for a web-based giro bill payment service for gas companies. The system enables gas utility customers to view and pay their bills online, replacing paper-based giro processes with a modern digital workflow.
        </p>

        <h3 className="text-base font-semibold text-foreground">Key Responsibilities</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Led frontend development of the responsive web UI for bill management, payment history, and account management</li>
          <li>Integrated with existing gas company backend billing systems for real-time bill retrieval and payment processing</li>
          <li>Enabled online bill viewing and payment processing for gas utility customers</li>
          <li>Built data visualization components for payment history and billing analytics</li>
        </ul>

        <h3 className="text-base font-semibold text-foreground">Technologies</h3>
        <p>
          React.js for the frontend application, JavaScript for business logic, and RESTful API integration with backend billing systems.
        </p>
      </div>
    </ProjectDetailCard>
  );
};

export default ProjectOpenGiro;
