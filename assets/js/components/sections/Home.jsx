import React from 'react';

const Home = ({ onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'publications', label: 'Publications & Patents', icon: '📄' },
  ];

  return (
    <section className="py-12 bg-background-strong min-h-[80vh]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16 pt-8">
          <img src="/images/profile.jpg" alt="Profile" className="mx-auto mb-4 w-32 h-32 rounded-full shadow-lg border-4 border-white object-cover" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-primary mb-2 font-heading tracking-tight drop-shadow-lg">Welcome to My Portfolio</h1>
          <p className="text-lg text-gray-500 mb-4 font-body">AI Researcher at ETRI | M.S. in Artificial Intelligence</p>
          <p className="text-base text-gray-700 max-w-2xl mx-auto font-body">Hi, my name is Jungwoo Shim, and I am an AI Researcher at ETRI (Electronics and Telecommunications Research Institute). I recently completed my M.S. in Artificial Intelligence from Korea University Graduate School of Artificial Intelligence, where my research focused on mitigating large language model hallucinations through multi-stage prompt refinement.</p>
        </div>
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-6 font-heading text-primary">Quick Navigation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <button
              className="bg-white/90 backdrop-blur-md rounded-2xl shadow-card p-6 text-center border border-blue-100 hover:scale-[1.03] hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-accent/60 group"
              onClick={() => { console.log('QuickNav: projects clicked'); onNavigate && onNavigate('projects'); }}
              type="button"
            >
              <h3 className="text-xl font-semibold mb-2 font-heading group-hover:text-primary transition-colors">🚀 Projects</h3>
              <p className="text-gray-600">Explore my latest projects and research work</p>
            </button>
            <button
              className="bg-white/90 backdrop-blur-md rounded-2xl shadow-card p-6 text-center border border-blue-100 hover:scale-[1.03] hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-accent/60 group"
              onClick={() => { console.log('QuickNav: experience clicked'); onNavigate && onNavigate('experience'); }}
              type="button"
            >
              <h3 className="text-xl font-semibold mb-2 font-heading group-hover:text-primary transition-colors">💼 Experience</h3>
              <p className="text-gray-600">View my professional journey and education</p>
            </button>
            <button
              className="bg-white/90 backdrop-blur-md rounded-2xl shadow-card p-6 text-center border border-blue-100 hover:scale-[1.03] hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-accent/60 group"
              onClick={() => { console.log('QuickNav: publications clicked'); onNavigate && onNavigate('publications'); }}
              type="button"
            >
              <h3 className="text-xl font-semibold mb-2 font-heading group-hover:text-primary transition-colors">📄 Publications & Patents</h3>
              <p className="text-gray-600">See my research papers and patents</p>
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-center mb-6 font-heading text-primary">About Me</h2>
          <p className="text-base text-gray-700 mb-6 font-body">
            I am Jungwoo Shim, an AI Researcher at ETRI (Electronics and Telecommunications Research Institute), passionate about pushing the boundaries of artificial intelligence and its real-world impact. My journey began with a B.S. in Computer Science from Chungnam National University, where I built a strong foundation in software engineering and problem-solving. I recently earned my M.S. in Artificial Intelligence from Korea University, focusing my research on mitigating hallucinations in large language models through multi-stage prompt refinement. <br/><br/>
            My expertise spans deep learning, natural language processing, and scalable AI systems. I thrive on tackling complex challenges, collaborating with diverse teams, and transforming innovative ideas into practical solutions. Beyond research, I enjoy mentoring, sharing knowledge, and contributing to open-source projects. I believe in lifelong learning and the power of technology to make a positive difference in society.
          </p>
          <div className="max-w-xl mx-auto flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2 text-center font-heading text-primary">Interests & Hobbies</h3>
            <ul className="flex flex-wrap gap-2 justify-center w-full">
              <li className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 font-medium">
                <a href="https://www.mountainproject.com/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-primary transition-colors">Rock climbing</a>
              </li>
              <li className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 font-medium">
                <a href="https://www.rockpapershotgun.com/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-primary transition-colors">Gaming</a>
              </li>
              <li className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 font-medium">
                <a href="https://singularityhub.com/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-primary transition-colors">Exploring new technologies</a>
              </li>
              <li className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 font-medium">
                <a href="https://www.codecademy.com/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-primary transition-colors">Learning new skills</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home; 