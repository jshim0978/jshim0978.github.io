import React from 'react';
import ProjectDetailCard from '../shared/ProjectDetailCard';

const ExperienceCNU = () => {
  const tags = ["Python", "Java", "Android SDK", "Machine Learning", "Data Science"];
  return (
    <ProjectDetailCard
      title="Chungnam National University"
      description="B.S. in Computer Science | Mar 2015 - Feb 2021 | Daejeon, Korea"
      tags={tags}
    >
      <p>
        Earned a Bachelor of Science in Computer Science under the supervision of Prof. Jin-su Jang.
        Developed a strong foundation in algorithms, data structures, operating systems, computer networks,
        and software engineering. Completed military service during the undergraduate period.
      </p>

      <h3>Thesis</h3>
      <p>
        "Developing Safe UI for Android OS"
      </p>

      <h3>Key Activities & Projects</h3>
      <ul>
        <li>
          <strong>Argus-SAF Research, Feb - Nov 2020:</strong> Improved the Argus-SAF static analysis
          framework for Android app security analysis. Enhanced detection capabilities for malicious
          components in Android applications.
        </li>
        <li>
          <strong>Kaggle LG Product Prediction, Sep - Dec 2020:</strong> Participated in a Kaggle competition
          for LG product prediction. Applied machine learning techniques for classification and prediction tasks.
        </li>
        <li>
          <strong>LoL Draft Win Prediction, Mar - Jun 2020:</strong> Built a machine learning model to predict
          League of Legends match outcomes based on champion draft data. Applied feature engineering and
          ensemble methods.
        </li>
      </ul>
    </ProjectDetailCard>
  );
};

export default ExperienceCNU;
