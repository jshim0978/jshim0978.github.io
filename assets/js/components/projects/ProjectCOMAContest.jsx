import React from 'react';
import ProjectDetailCard from '../shared/ProjectDetailCard';

const ProjectCOMAContest = () => {
  const tags = ["Contest", "Public Data", "Data Analysis"];
  return (
    <ProjectDetailCard
      title="COMA Grand Prize - 3rd Ministry of Employment and Labor Public Data Contest"
      description="Korea University, Jun 2024 | Grand Prize (1st Place)"
      tags={tags}
    >
      <div className="space-y-4">
        <p>
          Won 1st place (Grand Prize) in the national public data utilization contest hosted by the Ministry of Employment and Labor, competing against teams from universities and companies nationwide.
        </p>

        <h3 className="text-base font-semibold text-foreground">Project Highlights</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Analyzed employment and labor public datasets to derive actionable insights for policy recommendations</li>
          <li>Applied advanced data analysis and visualization techniques using Python to uncover trends in employment patterns</li>
          <li>Developed LLM-powered insights generation to translate raw data into meaningful policy guidance</li>
          <li>Competed against teams from universities and companies nationwide, earning the top prize for impact and technical execution</li>
        </ul>

        <h3 className="text-base font-semibold text-foreground">Technologies</h3>
        <p>
          Python for data analysis and visualization, with LLM integration for automated insight generation from public employment datasets.
        </p>
      </div>
    </ProjectDetailCard>
  );
};

export default ProjectCOMAContest;
