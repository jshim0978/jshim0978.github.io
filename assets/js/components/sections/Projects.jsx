import React, { useState } from 'react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = {
    ai: [
      {
        title: "ElementaryGPT",
        role: "AI Researcher & LLM Engineer",
        technologies: ["Polyglot-Ko", "Mistral", "Solar", "Python", "Hugging Face Datasets"],
        description: "Fine-tuned LLMs with domain adaptive pre-training and instruction datasets (KorQuAD, GSM8K) to create a curriculum-based QA assistant for elementary teachers."
      },
      {
        title: "CBRNGPT",
        role: "AI Researcher & LLM Engineer",
        technologies: ["LLaMA-3", "Phi-3", "Gemma", "RAG", "Vector DB", "NBC-RAMS API"],
        description: "Developed a retrieval-augmented decision support agent for CBRN operations, integrating domain DB and real-time analysis modules."
      },
      {
        title: "COMA (Career Optimization and Management Assistant)",
        role: "Full-Stack Developer & AI Engineer",
        technologies: ["React.js", "FastAPI", "Spring Boot", "RAG", "EIS/NCS/ELDS labor data"],
        description: "Built an AI-driven career consulting platform with real-time labor market simulations and policy-based job matching."
      },
      {
        title: "GenAI Academy",
        role: "XR Developer & AI Integration Specialist",
        technologies: ["Unity", "React Native", "FastAPI", "GPT-based Generative Models", "MeshyAI"],
        description: "Created an XR educational toolkit with generative AI for interactive and adaptive learning modules, awarded at 2024 Metaverse Developer Competition."
      }
    ],
    enterprise: [
      {
        title: "JB Smart Safety System",
        role: "Frontend Lead & Backend Support",
        technologies: ["jQuery", "JavaScript", "Spring Boot", "OracleDB", "MQTT", "WebSockets"],
        description: "Implemented a real-time safety monitoring dashboard with responsive UI components and integrated RESTful APIs for device control and alarm management."
      },
      {
        title: "KakaoPay Smart Sandbox",
        role: "Frontend Lead & Backend Support",
        technologies: ["React.js", "Node.js", "JavaScript", "Redux", "Spring Boot", "MySQL", "Oracle", "KakaoPay API"],
        description: "Designed and built a multi-role dashboard with real-time transaction visualizations, notification handling, and secure user authentication."
      }
    ],
    infrastructure: [
      {
        title: "NHN Cloud Migration of In-House Projects",
        role: "Cloud Infrastructure Lead",
        technologies: ["NHN Cloud", "CentOS", "VPC", "Floating IP", "Load Balancer"],
        description: "Architected and executed migration of enterprise applications (OpenGiro, KakaoPay Systems, Smart Sandbox) to NHN Cloud, configuring network, security groups, and deployment pipelines."
      },
      {
        title: "Monitoring System for In-House Projects",
        role: "System Designer & Developer",
        technologies: ["Spring Boot Actuator", "Prometheus", "Grafana", "Docker", "Kubernetes"],
        description: "Developed real-time observability dashboards, custom alerts, and metric collection for company-wide service health monitoring on NHN Cloud."
      }
    ]
  };

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI Research' },
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'infrastructure', label: 'Infrastructure' }
  ];

  const getFilteredProjects = () => {
    if (activeCategory === 'all') {
      return Object.values(projects).flat();
    }
    return projects[activeCategory] || [];
  };

  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-10">🚀 Projects</h1>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-5 py-2 rounded-full border-2 font-medium text-sm transition-all ${activeCategory === category.id ? 'bg-blue-600 border-blue-600 text-white shadow' : 'bg-gray-100 border-gray-200 text-gray-700 hover:bg-blue-50 hover:text-blue-700'}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {getFilteredProjects().map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-6 hover:-translate-y-1 hover:shadow-lg transition">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-semibold mr-2 mb-0">{project.title}</h3>
                <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">{project.role}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">{tech}</span>
                ))}
              </div>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 