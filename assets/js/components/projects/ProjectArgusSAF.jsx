import React from 'react';
import ProjectDetailCard from '../shared/ProjectDetailCard';

const ProjectArgusSAF = () => {
  const tags = ["Software Engineering", "Static Analysis"];
  return (
    <ProjectDetailCard
      title="Improving the Argus-SAF Tool - Android Static Analysis"
      description="CNU (Chungnam National University), Feb - Nov 2020 | Advisor: Prof. Jin-su Jang"
      tags={tags}
    >
      <div className="space-y-4">
        <p>
          Enhanced the Argus-SAF (Argus Static Analysis Framework) for Android application security as part of undergraduate thesis work on "Developing Safe UI for Android OS." The project improved the tool's ability to detect malicious behavior in Android applications through advanced static analysis techniques.
        </p>

        <h3 className="text-base font-semibold text-foreground">Key Contributions</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Enhanced detection capabilities for malicious components in Android APKs through improved bytecode analysis</li>
          <li>Analyzed inter-component communication (ICC) patterns to identify security vulnerabilities in Android applications</li>
          <li>Contributed to the tool's ability to detect data leakage and privilege escalation attacks</li>
          <li>Worked with the Scala/Java-based framework for Android bytecode analysis and security assessment</li>
        </ul>

        <h3 className="text-base font-semibold text-foreground">Technologies</h3>
        <p>
          Scala and Java for the Argus-SAF framework, Android APK analysis tooling, and static analysis techniques for inter-component communication security.
        </p>
      </div>
    </ProjectDetailCard>
  );
};

export default ProjectArgusSAF;
