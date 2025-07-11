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
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Profile Section */}
        <div className="text-center mb-12">
          <img 
            src="/images/profile.jpg" 
            alt="Jungwoo Shim" 
            className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-2 border-gray-200"
          />
          <h1 className="text-4xl font-normal text-black mb-2">Jungwoo Shim</h1>
          <p className="text-lg text-gray-600 mb-4">AI Researcher at ETRI</p>
          <p className="text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
            I am an AI Researcher at ETRI (Electronics and Telecommunications Research Institute) with an M.S. in Artificial Intelligence from Korea University. 
            My research focuses on mitigating large language model hallucinations through multi-stage prompt refinement, contributing to more reliable AI systems.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-8 text-sm text-gray-600">
            <span><strong className="text-black">2+</strong> Publications</span>
            <span><strong className="text-black">10+</strong> Projects</span>
            <span><strong className="text-black">4+</strong> Years Experience</span>
          </div>
        </div>
        {/* Technical Skills */}
        <div className="mb-12">
          <h2 className="text-2xl font-normal text-black mb-6">Technical Skills</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-black mb-2">AI & Machine Learning</h3>
              <p className="text-gray-600 text-sm">
                Deep Learning, Natural Language Processing, Large Language Models, Computer Vision, PyTorch, TensorFlow, Transformers, BERT, GPT
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-black mb-2">Software Development</h3>
              <p className="text-gray-600 text-sm">
                Python, JavaScript, React, Node.js, Docker, AWS, Git, MongoDB, PostgreSQL, REST APIs
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-6 justify-center">
            <button
              className="text-blue-600 hover:text-blue-800 text-lg font-medium transition-colors"
              onClick={() => { console.log('QuickNav: projects clicked'); onNavigate && onNavigate('projects'); }}
              type="button"
            >
              Projects
            </button>
            <button
              className="text-blue-600 hover:text-blue-800 text-lg font-medium transition-colors"
              onClick={() => { console.log('QuickNav: experience clicked'); onNavigate && onNavigate('experience'); }}
              type="button"
            >
              Experience
            </button>
            <button
              className="text-blue-600 hover:text-blue-800 text-lg font-medium transition-colors"
              onClick={() => { console.log('QuickNav: publications clicked'); onNavigate && onNavigate('publications'); }}
              type="button"
            >
              Publications
            </button>
          </div>
        </div>
        {/* About Me Section */}
        <div className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-normal text-black mb-6">About Me</h2>
          <div className="space-y-4 text-gray-700 text-base leading-relaxed">
            <p>
              My journey began with a <strong>B.S. in Computer Science</strong> from Chungnam National University, 
              where I built a strong foundation in software engineering and problem-solving. I recently earned my 
              <strong> M.S. in Artificial Intelligence</strong> from Korea University, focusing my research on 
              mitigating hallucinations in large language models through multi-stage prompt refinement.
            </p>
            <p>
              My expertise spans deep learning, natural language processing, and scalable AI systems. I thrive on 
              tackling complex challenges, collaborating with diverse teams, and transforming innovative ideas into 
              practical solutions. Beyond research, I enjoy mentoring, sharing knowledge, and contributing to 
              open-source projects.
            </p>
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-medium text-black mb-4">Interests & Hobbies</h3>
            <div className="flex flex-wrap gap-3 text-sm text-gray-600">
              <a href="https://www.mountainproject.com/" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-blue-600 transition-colors">
                Rock climbing
              </a>
              <span>•</span>
              <a href="https://www.rockpapershotgun.com/" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-blue-600 transition-colors">
                Gaming
              </a>
              <span>•</span>
              <a href="https://singularityhub.com/" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-blue-600 transition-colors">
                Exploring new technologies
              </a>
              <span>•</span>
              <a href="https://www.codecademy.com/" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-blue-600 transition-colors">
                Learning new skills
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home; 