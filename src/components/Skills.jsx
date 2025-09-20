import React from 'react'
function Skills({scrollToSection}) {
  return (
  <section id="skills" className="min-h-screen py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-20 w-24 h-24 bg-purple-200/30 rotate-45 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-pink-200/30 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 bg-green-200/30 rotate-12 animate-pulse delay-700"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Passionate about cutting-edge technologies and building scalable solutions. 
              Here's my toolkit for creating amazing digital experiences.
            </p>
          </div>

          <div className="space-y-12">
            
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                Frontend Development
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[
                  { name: 'HTML5', icon: '🌐', color: 'from-orange-400 to-red-500' },
                  { name: 'CSS3', icon: '🎨', color: 'from-blue-400 to-blue-600' },
                  { name: 'JavaScript', icon: '⚡', color: 'from-yellow-400 to-yellow-600' },
                  { name: 'TypeScript', icon: '🔷', color: 'from-blue-500 to-blue-700' },
                  { name: 'React.js', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
                  { name: 'Next.js', icon: '▲', color: 'from-gray-700 to-black' },
                  { name: 'Tailwind CSS', icon: '🎯', color: 'from-teal-400 to-blue-500' },
                  { name: 'Zustand', icon: '🐻', color: 'from-purple-400 to-pink-500' },
                  { name: 'Redux Toolkit', icon: '🔄', color: 'from-purple-500 to-purple-700' }
                ].map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="group cursor-pointer transform hover:scale-110 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`bg-gradient-to-br ${skill.color} rounded-2xl p-6 text-white text-center shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
                      <div className="text-3xl mb-3">{skill.icon}</div>
                      <div className="font-semibold text-sm">{skill.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                Backend Development
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {[
                  { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-green-700' },
                  { name: 'Express.js', icon: '🚀', color: 'from-gray-600 to-gray-800' },
                  { name: 'Fastify.js', icon: '⚡', color: 'from-blue-600 to-purple-600' },
                  { name: 'RESTful APIs', icon: '🔗', color: 'from-indigo-500 to-blue-600' },
                  { name: 'GraphQL', icon: '📊', color: 'from-pink-500 to-rose-600' }
                ].map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="group cursor-pointer transform hover:scale-110 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`bg-gradient-to-br ${skill.color} rounded-2xl p-6 text-white text-center shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
                      <div className="text-3xl mb-3">{skill.icon}</div>
                      <div className="font-semibold text-sm">{skill.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                Database & Cloud
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[
                  { name: 'MongoDB', icon: '🍃', color: 'from-green-600 to-green-800' },
                  { name: 'MySQL', icon: '🗄️', color: 'from-blue-500 to-blue-700' },
                  { name: 'Redis', icon: '🔴', color: 'from-red-500 to-red-700' },
                  { name: 'BullMQ', icon: '🐂', color: 'from-orange-500 to-red-600' },
                  { name: 'AWS', icon: '☁️', color: 'from-yellow-500 to-orange-600' },
                  { name: 'Docker', icon: '🐳', color: 'from-blue-400 to-blue-600' }
                ].map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="group cursor-pointer transform hover:scale-110 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`bg-gradient-to-br ${skill.color} rounded-2xl p-6 text-white text-center shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
                      <div className="text-3xl mb-3">{skill.icon}</div>
                      <div className="font-semibold text-sm">{skill.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-3 h-3 bg-pink-500 rounded-full mr-3"></span>
                AI & Development Tools
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {[
                  { name: 'Google Gemini AI', icon: '🤖', color: 'from-blue-500 to-purple-600' },
                  { name: 'Cloud Vision API', icon: '👁️', color: 'from-green-500 to-teal-600' },
                  { name: 'NLP', icon: '🧠', color: 'from-purple-500 to-pink-600' },
                  { name: 'Git', icon: '📝', color: 'from-orange-500 to-red-600' },
                  { name: 'GitHub', icon: '🐙', color: 'from-gray-700 to-black' }
                ].map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="group cursor-pointer transform hover:scale-110 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`bg-gradient-to-br ${skill.color} rounded-2xl p-6 text-white text-center shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
                      <div className="text-3xl mb-3">{skill.icon}</div>
                      <div className="font-semibold text-sm">{skill.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6 text-lg">
              Always learning and exploring new technologies to stay ahead of the curve
            </p>
            <button
              onClick={() => scrollToSection('experience')}
              className="group inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <span>See My Experience</span>
              <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>  )
}

export default Skills