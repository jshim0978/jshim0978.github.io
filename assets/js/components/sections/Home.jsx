import React from 'react';

const Home = ({ onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'publications', label: 'Publications & Patents', icon: '📄' },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Profile Section - Centered like reference */}
        <div className="text-center mb-12">
          <img 
            src="/images/profile.jpg" 
            alt="Jungwoo Shim" 
            className="w-48 h-48 rounded-full object-cover mx-auto mb-8"
          />
          <h1 className="text-4xl font-light text-black mb-4">Jungwoo Shim</h1>
          <p className="text-lg text-gray-600 mb-2">AI Researcher</p>
          <p className="text-base text-gray-600">ETRI (Electronics and Telecommunications Research Institute)</p>
        </div>

        {/* Main Bio - Left aligned like reference */}
        <div className="text-left mb-10">
          <p className="text-base text-black leading-relaxed mb-6">
            I am an AI Researcher at ETRI with an M.S. in Artificial Intelligence from Korea University. 
            My research focuses on mitigating large language model hallucinations through multi-stage prompt refinement, 
            contributing to more reliable and trustworthy AI systems.
          </p>
          
          <p className="text-base text-black leading-relaxed">
            My expertise spans deep learning, natural language processing, and scalable AI systems. I thrive on 
            tackling complex challenges, collaborating with diverse teams, and transforming innovative ideas into 
            practical solutions. Beyond research, I enjoy mentoring, sharing knowledge, and contributing to 
            open-source projects.
          </p>
        </div>

        {/* Quick Navigation - Simple links like reference */}
        <div className="mb-10">
          <div className="text-left">
            <div className="inline-flex gap-6">
              <button
                className="text-blue-600 hover:underline text-base"
                onClick={() => onNavigate && onNavigate('projects')}
                type="button"
              >
                Projects
              </button>
              <button
                className="text-blue-600 hover:underline text-base"
                onClick={() => onNavigate && onNavigate('experience')}
                type="button"
              >
                Experience
              </button>
              <button
                className="text-blue-600 hover:underline text-base"
                onClick={() => onNavigate && onNavigate('publications')}
                type="button"
              >
                Publications
              </button>
            </div>
          </div>
        </div>

        {/* Research Interests */}
        <div className="mb-10">
          <h2 className="text-xl font-medium text-black mb-4">Research Interests</h2>
          <div className="text-left">
            <p className="text-base text-black leading-relaxed">
              <strong>AI & Machine Learning:</strong> Deep Learning, Natural Language Processing, Large Language Models, Computer Vision, PyTorch, TensorFlow, Transformers
            </p>
            <p className="text-base text-black leading-relaxed mt-2">
              <strong>Software Development:</strong> Python, JavaScript, React, Node.js, Docker, AWS, Git, MongoDB, PostgreSQL
            </p>
          </div>
        </div>

        {/* Personal */}
        <div className="mb-10">
          <h2 className="text-xl font-medium text-black mb-4">Personal</h2>
          <div className="text-left">
            <p className="text-base text-black leading-relaxed mb-4">
              <strong>Education:</strong> M.S. in Artificial Intelligence, Korea University (2024) • B.S. in Computer Science, Chungnam National University
            </p>
            <p className="text-base text-black leading-relaxed">
              <strong>Interests:</strong> Rock climbing, Gaming, Exploring new technologies, Learning new skills
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home; 