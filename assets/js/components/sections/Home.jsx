import React from 'react';

const Home = ({ onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'publications', label: 'Publications & Patents', icon: '📄' },
  ];

  return (
    <section className="relative py-12 min-h-[85vh] bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.02)_25%,rgba(59,130,246,0.02)_50%,transparent_50%,transparent_75%,rgba(59,130,246,0.02)_75%)] bg-[length:32px_32px]"></div>
      
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 pt-12">
          <div className="relative mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 blur-xl scale-110 animate-pulse"></div>
            <img src="/images/profile.jpg" alt="Profile" className="relative mx-auto w-40 h-40 rounded-full shadow-2xl border-4 border-white object-cover ring-4 ring-blue-100" />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 font-heading tracking-tight leading-tight">
              Jungwoo Shim
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-lg sm:text-xl text-slate-600 font-medium">
              <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md border border-blue-100">
                🔬 AI Researcher at ETRI
              </span>
              <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md border border-purple-100">
                🎓 M.S. in Artificial Intelligence
              </span>
            </div>
            <p className="text-lg text-slate-700 max-w-4xl mx-auto font-body leading-relaxed mt-6">
              Passionate about pushing the boundaries of <span className="font-semibold text-blue-700">artificial intelligence</span> and its real-world impact. 
              My research focuses on <span className="font-semibold text-purple-700">mitigating large language model hallucinations</span> through 
              multi-stage prompt refinement, contributing to more reliable and trustworthy AI systems.
            </p>
          </div>
          
          {/* Research Impact Metrics */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
              <div className="text-sm text-slate-600 font-medium">Publications</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-100">
              <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-sm text-slate-600 font-medium">Projects</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-indigo-100">
              <div className="text-3xl font-bold text-indigo-600 mb-2">4+</div>
              <div className="text-sm text-slate-600 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
        {/* Skills & Technologies Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 font-heading text-slate-800">Technical Expertise</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100">
              <h3 className="text-xl font-semibold mb-6 text-slate-800 flex items-center gap-2">
                <span className="text-2xl">🧠</span>
                AI & Machine Learning
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Deep Learning', 'Natural Language Processing', 'Large Language Models', 'Computer Vision', 'PyTorch', 'TensorFlow', 'Transformers', 'BERT', 'GPT'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-slate-700 rounded-full text-sm font-medium border border-blue-200 hover:scale-105 transition-transform cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100">
              <h3 className="text-xl font-semibold mb-6 text-slate-800 flex items-center gap-2">
                <span className="text-2xl">💻</span>
                Software Development
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'JavaScript', 'React', 'Node.js', 'Docker', 'AWS', 'Git', 'MongoDB', 'PostgreSQL', 'REST APIs'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gradient-to-r from-purple-100 to-indigo-100 text-slate-700 rounded-full text-sm font-medium border border-purple-200 hover:scale-105 transition-transform cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 font-heading text-slate-800">Explore My Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <button
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-center border border-blue-100 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/60 group"
              onClick={() => { console.log('QuickNav: projects clicked'); onNavigate && onNavigate('projects'); }}
              type="button"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
              <h3 className="text-xl font-semibold mb-2 font-heading group-hover:text-blue-600 transition-colors">Projects</h3>
              <p className="text-slate-600 text-sm">Explore my latest projects and research work</p>
            </button>
            <button
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-center border border-purple-100 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/60 group"
              onClick={() => { console.log('QuickNav: experience clicked'); onNavigate && onNavigate('experience'); }}
              type="button"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💼</div>
              <h3 className="text-xl font-semibold mb-2 font-heading group-hover:text-purple-600 transition-colors">Experience</h3>
              <p className="text-slate-600 text-sm">View my professional journey and education</p>
            </button>
            <button
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-center border border-indigo-100 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 group"
              onClick={() => { console.log('QuickNav: publications clicked'); onNavigate && onNavigate('publications'); }}
              type="button"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📄</div>
              <h3 className="text-xl font-semibold mb-2 font-heading group-hover:text-indigo-600 transition-colors">Publications</h3>
              <p className="text-slate-600 text-sm">See my research papers and patents</p>
            </button>
          </div>
        </div>
        {/* About Me Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200">
          <h2 className="text-3xl font-bold text-center mb-8 font-heading text-slate-800">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-slate-700 mb-6 font-body leading-relaxed">
              My journey began with a <span className="font-semibold text-blue-700">B.S. in Computer Science</span> from Chungnam National University, 
              where I built a strong foundation in software engineering and problem-solving. I recently earned my 
              <span className="font-semibold text-purple-700"> M.S. in Artificial Intelligence</span> from Korea University, 
              focusing my research on mitigating hallucinations in large language models through multi-stage prompt refinement.
            </p>
            <p className="text-lg text-slate-700 mb-8 font-body leading-relaxed">
              My expertise spans <span className="font-semibold text-indigo-700">deep learning</span>, 
              <span className="font-semibold text-blue-700"> natural language processing</span>, and 
              <span className="font-semibold text-purple-700"> scalable AI systems</span>. I thrive on tackling complex challenges, 
              collaborating with diverse teams, and transforming innovative ideas into practical solutions. Beyond research, 
              I enjoy mentoring, sharing knowledge, and contributing to open-source projects.
            </p>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-6 text-slate-800 font-heading">Interests & Hobbies</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="https://www.mountainproject.com/" target="_blank" rel="noopener noreferrer" 
                   className="bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full text-slate-700 font-medium hover:scale-105 hover:shadow-md transition-all duration-200 border border-blue-200">
                  🧗‍♂️ Rock climbing
                </a>
                <a href="https://www.rockpapershotgun.com/" target="_blank" rel="noopener noreferrer" 
                   className="bg-gradient-to-r from-purple-100 to-indigo-100 px-4 py-2 rounded-full text-slate-700 font-medium hover:scale-105 hover:shadow-md transition-all duration-200 border border-purple-200">
                  🎮 Gaming
                </a>
                <a href="https://singularityhub.com/" target="_blank" rel="noopener noreferrer" 
                   className="bg-gradient-to-r from-indigo-100 to-blue-100 px-4 py-2 rounded-full text-slate-700 font-medium hover:scale-105 hover:shadow-md transition-all duration-200 border border-indigo-200">
                  🔬 Exploring new technologies
                </a>
                <a href="https://www.codecademy.com/" target="_blank" rel="noopener noreferrer" 
                   className="bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full text-slate-700 font-medium hover:scale-105 hover:shadow-md transition-all duration-200 border border-blue-200">
                  📚 Learning new skills
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