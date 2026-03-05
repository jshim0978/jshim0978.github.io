import React from 'react';
import ProjectDetailCard from '../shared/ProjectDetailCard';

const ProjectColorPoisoning = () => {
  const tags = ["Python", "Jupyter", "Neural Networks", "Adversarial ML"];
  return (
    <ProjectDetailCard
      title="Color Poisoning - Adversarial Data Poisoning via Color Manipulation"
      description="Korea University, 2023 | Course Project: Applications and Practice of Neural Networks"
      tags={tags}
    >
      <div className="space-y-4">
        <p>
          A course project exploring adversarial attacks on neural network image classifiers through subtle color manipulations in training data. The work investigates how carefully crafted color perturbations can poison model behavior while remaining imperceptible to human observers.
        </p>

        <h3 className="text-base font-semibold text-foreground">Research Focus</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Investigated how subtle color manipulations in training data can systematically poison neural network classifiers</li>
          <li>Implemented data poisoning attacks targeting specific classes through color-space perturbations</li>
          <li>Evaluated model vulnerability across different network architectures and training configurations</li>
          <li>Analyzed defense mechanisms against color-based adversarial perturbations, including data augmentation and input validation</li>
        </ul>

        <h3 className="text-base font-semibold text-foreground">Technologies</h3>
        <p>
          Python and Jupyter Notebooks for experimentation, PyTorch for model training and attack implementation, and standard computer vision libraries for image manipulation and analysis.
        </p>

        <p>
          <a href="https://github.com/jshim0978/color_poisoning" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">View on GitHub</a>
        </p>
      </div>
    </ProjectDetailCard>
  );
};

export default ProjectColorPoisoning;
