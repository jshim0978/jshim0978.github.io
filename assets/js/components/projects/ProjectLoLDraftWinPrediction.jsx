import React from 'react';
import ProjectDetailCard from '../shared/ProjectDetailCard';

const ProjectLoLDraftWinPrediction = () => {
  const tags = ["Python", "Machine Learning", "FastAPI"];
  return (
    <ProjectDetailCard 
      title="League of Legends Win Prediction"
      description="A machine learning model to predict match outcomes based on champion draft data."
      tags={tags}
    >
      <p>
        This project involves training a model on a large dataset of match histories to identify patterns in champion selections that lead to victory. The model is served via a FastAPI endpoint.
      </p>
    </ProjectDetailCard>
  );
};

export default ProjectLoLDraftWinPrediction; 