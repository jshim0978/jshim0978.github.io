import React from 'react';
import ProjectDetailCard from '../shared/ProjectDetailCard';

const ProjectKCloudMLPerf = () => {
  const tags = ["Python", "MLPerf", "Benchmarking", "Cloud Computing", "Machine Learning"];
  return (
    <ProjectDetailCard
      title="KCloud MLPerf"
      description="Machine learning performance benchmarking on cloud infrastructure."
      tags={tags}
    >
      <p>
        A benchmarking project using the MLPerf framework to evaluate machine learning workload performance on cloud infrastructure. Measures training and inference throughput across different configurations.
      </p>
      <p>
        <a href="https://github.com/jshim0978/kcloud-mlperf" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">View on GitHub</a>
      </p>
    </ProjectDetailCard>
  );
};

export default ProjectKCloudMLPerf;
