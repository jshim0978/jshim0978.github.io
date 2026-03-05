import React from 'react';
import ProjectDetailCard from '../shared/ProjectDetailCard';

const ProjectKakaoPaySandbox = () => {
  const tags = ["FinTech", "API", "Sandbox"];
  return (
    <ProjectDetailCard
      title="KakaoPay Smart Sandbox - Payment API Integration"
      description="Mobile Entropy, 2022"
      tags={tags}
    >
      <div className="space-y-4">
        <p>
          Implemented KakaoPay API integration for online bill payments, building a sandbox testing environment that enabled safe development and quality assurance of payment features before production deployment.
        </p>

        <h3 className="text-base font-semibold text-foreground">Key Contributions</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Implemented the full KakaoPay API integration for online bill payment workflows</li>
          <li>Built a sandbox testing environment for safe development and QA of payment features</li>
          <li>Developed the end-to-end payment flow: bill selection, KakaoPay authorization, and payment confirmation</li>
          <li>Handled KakaoPay webhook callbacks and payment status management for reliable transaction tracking</li>
          <li>Ensured PCI compliance and secure payment data handling throughout the integration</li>
        </ul>

        <h3 className="text-base font-semibold text-foreground">Technologies</h3>
        <p>
          JavaScript for the integration layer, KakaoPay API for payment processing, and a sandbox architecture for isolated testing of financial transactions.
        </p>
      </div>
    </ProjectDetailCard>
  );
};

export default ProjectKakaoPaySandbox;
