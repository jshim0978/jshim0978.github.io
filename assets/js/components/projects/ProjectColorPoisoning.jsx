import React from 'react';
import ProjectDetailCard from '../shared/ProjectDetailCard';

const ProjectColorPoisoning = () => {
  const tags = ["Python", "Jupyter Notebook", "Neural Networks", "Adversarial ML", "Deep Learning"];
  return (
    <ProjectDetailCard
      title="Color Poisoning"
      description="Course project for Applications and Practice of Neural Networks at Korea University."
      tags={tags}
    >
      <p>
        An exploration of data poisoning attacks through color manipulation in neural network training pipelines. This project investigates how adversarial color perturbations can impact model behavior and defenses against such attacks.
      </p>
      <p>
        <a href="https://github.com/jshim0978/color_poisoning" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">View on GitHub</a>
      </p>
    </ProjectDetailCard>
  );
};

export default ProjectColorPoisoning;
