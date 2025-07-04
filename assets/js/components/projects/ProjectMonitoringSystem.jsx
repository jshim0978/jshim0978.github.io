import React from 'react';
const ProjectMonitoringSystem = () => (
  <div className="max-w-2xl mx-auto p-6 bg-glass/80 backdrop-blur-md rounded-2xl shadow-card border border-blue-100">
    <h2 className="text-2xl font-bold mb-2 font-heading bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-lg">Monitoring System for In-House Projects</h2>
    <span className="inline-block bg-gradient-to-br from-primary to-accent text-black px-2 py-1 rounded-full text-xs font-medium mb-2 shadow-card">Enterprise / Infrastructure</span>
    <div className="flex flex-wrap gap-2 mb-2">
      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">Spring Boot Actuator</span>
      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">Prometheus</span>
      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">Grafana</span>
      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">Docker</span>
      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">Kubernetes</span>
    </div>
    <p className="text-gray-700 text-base mb-2 font-body">
      Developed and deployed a comprehensive system monitoring solution using Prometheus and Grafana. Monitored the company's services hosted on Naver Cloud, improving operational reliability and performance. Developed real-time observability dashboards, custom alerts, and metric collection for company-wide service health monitoring on NHN Cloud.
    </p>
    <ul className="list-disc pl-5 text-gray-600 text-sm mb-4 font-body">
      <li>Role: System Designer & Developer</li>
      <li>Technologies: Spring Boot Actuator, Prometheus, Grafana, Docker, Kubernetes</li>
      <li>Developed real-time observability dashboards and custom alerts</li>
      <li>Monitored company-wide service health on NHN Cloud</li>
      <li>Project period: May 2022 - Jan 2023 (Mobile Entropy, Korea)</li>
    </ul>
    <p className="text-sm text-gray-500 font-body">Enterprise/Infra project. Add more details as needed.</p>
  </div>
);
export default ProjectMonitoringSystem; 