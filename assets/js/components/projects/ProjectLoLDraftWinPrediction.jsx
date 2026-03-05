import React from 'react';
import ProjectDetailCard from '../shared/ProjectDetailCard';

const ProjectLoLDraftWinPrediction = () => {
  const tags = ["Python", "Machine Learning", "Data Science"];
  return (
    <ProjectDetailCard
      title="LoL Win Prediction via Draft Data"
      description="CNU (Chungnam National University), Mar - Jun 2020"
      tags={tags}
    >
      <div className="space-y-4">
        <p>
          Built a machine learning model that predicts League of Legends match outcomes based on champion draft selections. The project covers the full data science pipeline from data collection through model training to deployment via a web API.
        </p>

        <h3 className="text-base font-semibold text-foreground">Key Features</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Collected and preprocessed match data from the Riot Games API for large-scale training datasets</li>
          <li>Applied feature engineering on champion synergies, counter-picks, and team composition dynamics</li>
          <li>Trained and compared multiple classifiers including Random Forest, XGBoost, and Neural Networks</li>
          <li>Achieved competitive prediction accuracy on held-out test datasets</li>
          <li>Implemented an automated data pipeline for continuous data collection and model retraining</li>
        </ul>

        <h3 className="text-base font-semibold text-foreground">Technologies</h3>
        <p>
          Python for data processing and model training, scikit-learn and XGBoost for machine learning, Riot Games API for data collection, and FastAPI for serving predictions.
        </p>
      </div>
    </ProjectDetailCard>
  );
};

export default ProjectLoLDraftWinPrediction;
