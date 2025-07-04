import React from 'react';

const Home = () => {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent mb-2">Welcome to My Portfolio</h1>
          <p className="text-lg text-gray-500 mb-4">AI Researcher at ETRI | M.S. in Artificial Intelligence</p>
          <p className="text-base text-gray-700 max-w-2xl mx-auto">Hi, my name is Jungwoo Shim, and I am an AI Researcher at ETRI (Electronics and Telecommunications Research Institute). I recently completed my M.S. in Artificial Intelligence from Korea University Graduate School of Artificial Intelligence, where my research focused on mitigating large language model hallucinations through multi-stage prompt refinement.</p>
        </div>
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-6">Quick Navigation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow p-6 text-center hover:-translate-y-1 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">🚀 Projects</h3>
              <p className="text-gray-600">Explore my latest projects and research work</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 text-center hover:-translate-y-1 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">💼 Experience</h3>
              <p className="text-gray-600">View my professional journey and education</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-center mb-6">About Me</h2>
          <p className="text-base text-gray-700 mb-6">I have a solid foundation in computer science from Chungnam National University, and I am skilled in various programming languages and technologies including Python, Java, React.js, and AI/ML frameworks. I am passionate about large language models, AI research, and their applications in real-world scenarios.</p>
          <div className="max-w-xl mx-auto">
            <h3 className="text-lg font-semibold mb-2">Interests & Hobbies</h3>
            <ul className="flex flex-wrap gap-2 justify-center">
              <li className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 font-medium">Rock climbing</li>
              <li className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 font-medium">Gaming</li>
              <li className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 font-medium">Exploring new technologies</li>
              <li className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 font-medium">Learning new skills</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home; 