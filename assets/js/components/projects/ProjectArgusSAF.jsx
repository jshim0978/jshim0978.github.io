import React from 'react';
const ProjectArgusSAF = () => (
  <div className="max-w-2xl mx-auto p-6 bg-glass/80 backdrop-blur-md rounded-2xl shadow-card border border-blue-100">
    <h2 className="text-2xl font-bold mb-2 font-heading bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-lg">Improving the Argus-SAF Tool</h2>
    <span className="inline-block bg-gradient-to-br from-primary to-accent text-black px-2 py-1 rounded-full text-xs font-medium mb-2 shadow-card">Academic Project</span>
    <div className="flex flex-wrap gap-2 mb-2">
      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">Java</span>
      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">Software Engineering</span>
      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">UI/UX</span>
      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">APK Analysis</span>
    </div>
    <p className="text-gray-700 text-base mb-2 font-body">
      Enhanced an APK analysis tool for mitigating malware risks in Android applications. Focused on software engineering best practices and user experience improvements.
    </p>
    <ul className="list-disc pl-5 text-gray-600 text-sm mb-4 font-body">
      <li>Role: Researcher</li>
      <li>Technologies: Java, Software Engineering, UI/UX, APK Analysis</li>
      <li>Improved usability and performance of Argus-SAF tool</li>
      <li>Project period: Feb 2020 - Nov 2020 (Chungnam National University, Korea)</li>
    </ul>
    <p className="text-sm text-gray-500 font-body">Academic project. Add more details as needed.</p>
  </div>
);
export default ProjectArgusSAF; 