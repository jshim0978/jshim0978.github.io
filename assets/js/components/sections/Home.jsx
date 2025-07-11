import React from 'react';

const Home = ({ onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'publications', label: 'Publications & Patents', icon: '📄' },
  ];

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-50/30 to-transparent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-gray-50/40 to-transparent rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        {/* Hero Section */}
        <div className="pt-20 pb-12 text-center">
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-gray-100 rounded-full blur-2xl opacity-40 scale-110"></div>
              <img 
                src="/images/profile.jpg" 
                alt="Jungwoo Shim - AI Researcher" 
                className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover shadow-xl border-4 border-white"
              />
            </div>
          </div>
          
          <div className="space-y-6 mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
              Jungwoo Shim
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <span className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
                <span className="mr-2">🔬</span>
                AI Researcher at ETRI
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-sm font-medium border border-gray-200">
                <span className="mr-2">🎓</span>
                M.S. in Artificial Intelligence
              </span>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Passionate about advancing <span className="font-semibold text-gray-800">artificial intelligence</span> through 
              rigorous research and practical applications. Specialized in <span className="font-semibold text-gray-800">large language models</span> 
              and developing more reliable AI systems.
            </p>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
              <div className="text-sm text-gray-600 font-medium">Publications</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-sm text-gray-600 font-medium">Projects</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
              <div className="text-sm text-gray-600 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
        {/* Skills & Technologies Section */}
        <div className="py-16 border-t border-gray-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proficient in cutting-edge technologies and methodologies driving AI research and development
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">AI & Machine Learning</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Deep Learning', 'Natural Language Processing', 'Large Language Models', 'Computer Vision', 'PyTorch', 'TensorFlow', 'Transformers', 'BERT', 'GPT'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100 hover:bg-blue-100 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Software Development</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Python', 'JavaScript', 'React', 'Node.js', 'Docker', 'AWS', 'Git', 'MongoDB', 'PostgreSQL', 'REST APIs'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm font-medium border border-gray-200 hover:bg-gray-100 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="py-16 border-t border-gray-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore My Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover my research projects, professional experience, and published work
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <button
              className="bg-white rounded-2xl p-8 text-center border border-gray-200 hover:shadow-md hover:border-blue-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 group"
              onClick={() => { console.log('QuickNav: projects clicked'); onNavigate && onNavigate('projects'); }}
              type="button"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">Projects</h3>
              <p className="text-gray-600 text-sm">Explore my latest projects and research work</p>
            </button>
            
            <button
              className="bg-white rounded-2xl p-8 text-center border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500/20 group"
              onClick={() => { console.log('QuickNav: experience clicked'); onNavigate && onNavigate('experience'); }}
              type="button"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-gray-700 transition-colors">Experience</h3>
              <p className="text-gray-600 text-sm">View my professional journey and education</p>
            </button>
            
            <button
              className="bg-white rounded-2xl p-8 text-center border border-gray-200 hover:shadow-md hover:border-green-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500/20 group"
              onClick={() => { console.log('QuickNav: publications clicked'); onNavigate && onNavigate('publications'); }}
              type="button"
            >
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <span className="text-2xl">📄</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-green-600 transition-colors">Publications</h3>
              <p className="text-gray-600 text-sm">See my research papers and patents</p>
            </button>
          </div>
        </div>
        {/* About Me Section */}
        <div className="py-16 border-t border-gray-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My journey in artificial intelligence and software development
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-8">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                My journey began with a <span className="font-semibold text-gray-900">B.S. in Computer Science</span> from Chungnam National University, 
                where I built a strong foundation in software engineering and problem-solving. I recently earned my 
                <span className="font-semibold text-gray-900"> M.S. in Artificial Intelligence</span> from Korea University, 
                focusing my research on mitigating hallucinations in large language models through multi-stage prompt refinement.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My expertise spans <span className="font-semibold text-gray-900">deep learning</span>, 
                <span className="font-semibold text-gray-900"> natural language processing</span>, and 
                <span className="font-semibold text-gray-900"> scalable AI systems</span>. I thrive on tackling complex challenges, 
                collaborating with diverse teams, and transforming innovative ideas into practical solutions. Beyond research, 
                I enjoy mentoring, sharing knowledge, and contributing to open-source projects.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Interests & Hobbies</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="https://www.mountainproject.com/" target="_blank" rel="noopener noreferrer" 
                   className="inline-flex items-center px-4 py-2 bg-gray-50 text-gray-700 rounded-full font-medium hover:bg-gray-100 transition-colors border border-gray-200">
                  <span className="mr-2">🧗‍♂️</span>
                  Rock climbing
                </a>
                <a href="https://www.rockpapershotgun.com/" target="_blank" rel="noopener noreferrer" 
                   className="inline-flex items-center px-4 py-2 bg-gray-50 text-gray-700 rounded-full font-medium hover:bg-gray-100 transition-colors border border-gray-200">
                  <span className="mr-2">🎮</span>
                  Gaming
                </a>
                <a href="https://singularityhub.com/" target="_blank" rel="noopener noreferrer" 
                   className="inline-flex items-center px-4 py-2 bg-gray-50 text-gray-700 rounded-full font-medium hover:bg-gray-100 transition-colors border border-gray-200">
                  <span className="mr-2">🔬</span>
                  Exploring new technologies
                </a>
                <a href="https://www.codecademy.com/" target="_blank" rel="noopener noreferrer" 
                   className="inline-flex items-center px-4 py-2 bg-gray-50 text-gray-700 rounded-full font-medium hover:bg-gray-100 transition-colors border border-gray-200">
                  <span className="mr-2">📚</span>
                  Learning new skills
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home; 