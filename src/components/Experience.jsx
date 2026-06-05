import React from 'react'

function Experience({scrollToSection}) {
  return (
<section id="experience" className="min-h-screen py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
            <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-1000"></div>
            <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping delay-500"></div>
            <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-green-400 rounded-full animate-ping delay-700"></div>
            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-yellow-400 rounded-full animate-ping delay-300"></div>
          </div>
          
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:40px_40px]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
              Professional <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Building innovative solutions and making impact at leading technology companies
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden lg:block"></div>

            <div className="space-y-12">

              {/* HWL - Current Role */}
              <div className="relative">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                  <div className="lg:text-right mb-8 lg:mb-0">
                    <div className="inline-block lg:block">
                      <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-4 inline-block">
                        Nov 2025 – Present
                      </div>
                      <div className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs font-semibold mb-3 border border-cyan-400/30 lg:mr-5">
                        🟢 Current Role
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2 mr-5">Software Engineer</h3>
                      <h4 className="text-xl text-cyan-300 font-semibold mb-4">HWL · Healthcare Workforce Logistics</h4>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg lg:flex">
                    🏥
                  </div>

                  <div className="lg:pl-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30 shadow-xl">
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300 leading-relaxed">
                            Contributed to <span className="text-cyan-300 font-semibold">AI-driven predictive analytics systems</span> leveraging workforce and healthcare operational datasets to forecast staffing demand, utilization trends, and resource allocation patterns for intelligent decision-support.
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300 leading-relaxed">
                            Architected scalable <span className="text-blue-300 font-semibold">Tableau data integration pipelines</span> and distributed analytical workflows, enabling low-latency visualization and high-throughput processing of enterprise-scale datasets.
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300 leading-relaxed">
                            Contributed to <span className="text-purple-300 font-semibold">intelligent data orchestration</span> and real-time processing workflows integrating AI inference systems with enterprise reporting platforms, ensuring high data integrity and consistency.
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300 leading-relaxed">
                            Engineered advanced <span className="text-pink-300 font-semibold">frontend and backend performance optimizations</span> including lazy loading, caching, concurrency control, and async processing — significantly improving dashboard responsiveness under heavy workloads.
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-white/20">
                        <div className="flex flex-wrap gap-2">
                          {['Predictive Analytics', 'Open AI', 'Tableau', 'Real-time Processing', 'AI Report Generation', 'Performance Optimization'].map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-200 rounded-full text-sm border border-cyan-400/30">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Neokred Technologies */}
              <div className="relative">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                  <div className="lg:text-right mb-8 lg:mb-0">
                    <div className="inline-block lg:block">
                      <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-4 inline-block">
                        Feb 2025 – Aug 2025
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2 mr-5">Full Stack SDE-1</h3>
                      <h4 className="text-xl text-blue-300 font-semibold mb-4">Neokred Technologies</h4>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg lg:flex">
                    🚀
                  </div>

                  <div className="lg:pl-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl">
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300 leading-relaxed">
                            Architected and optimized <span className="text-blue-300 font-semibold">enterprise-grade KYC, fraud prevention, and digital onboarding</span> platforms supporting secure identity verification workflows for fintech and banking applications with high-volume user onboarding.
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300 leading-relaxed">
                            Engineered <span className="text-purple-300 font-semibold">high-throughput real-time API orchestration</span> systems and no-code bundle automation capabilities, reducing manual operational efforts by <span className="text-white font-bold">70%</span> and improving distributed data processing efficiency.
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300 leading-relaxed">
                            Developed advanced <span className="text-pink-300 font-semibold">device intelligence and behavioral analytics</span> solutions including real-time fingerprinting, suspicious activity detection, and cross-platform tracking mechanisms, strengthening fraud detection accuracy.
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-white/20">
                        <div className="flex flex-wrap gap-2">
                          {['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'AWS', 'Real-time APIs', 'Device Intelligence'].map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 rounded-full text-sm border border-blue-400/30">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pentagon Space Training */}
              <div className="relative">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                  <div className="lg:text-right lg:order-2 mb-8 lg:mb-0">
                    <div className="inline-block lg:block">
                      <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-4 inline-block">
                        Oct 2024 – Feb 2025
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">MERN Stack Training</h3>
                      <h4 className="text-xl text-orange-300 font-semibold mb-4">Pentagon Space, Bengaluru</h4>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg lg:flex">
                    📚
                  </div>

                  <div className="lg:pr-8 lg:order-1">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl">
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300 leading-relaxed">
                            Completed intensive <span className="text-orange-300 font-semibold">MERN Stack training program</span> covering 
                            MongoDB, Express.js, React.js, and Node.js development
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300 leading-relaxed">
                            Built multiple <span className="text-red-300 font-semibold">full-stack web applications</span> with 
                            real-time features and database integration
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300 leading-relaxed">
                            Mastered <span className="text-yellow-300 font-semibold">RESTful API development</span> and 
                            modern JavaScript frameworks for scalable applications
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300 leading-relaxed">
                            Gained expertise in <span className="text-green-300 font-semibold">state management, authentication,</span> and 
                            deployment strategies for production-ready applications
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-white/20">
                        <div className="flex flex-wrap gap-2">
                          {['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JavaScript ES6+', 'RESTful APIs'].map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-200 rounded-full text-sm border border-orange-400/30">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AWS Intern */}
              <div className="relative">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                  <div className="lg:text-right mb-8 lg:mb-0">
                    <div className="inline-block lg:block">
                      <div className="bg-gradient-to-br from-green-500 to-teal-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-4 inline-block">
                        Aug 2023 – Sep 2023
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2 mr-5">AWS Intern</h3>
                      <h4 className="text-xl text-green-300 font-semibold mb-4">Ethnotech Academic Solutions</h4>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg lg:flex">
                    ☁️
                  </div>

                  <div className="lg:pl-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl">
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300 leading-relaxed">
                            Utilized AWS services including <span className="text-green-300 font-semibold">EC2, S3, IAM, and Lambda</span> to 
                            build scalable cloud infrastructure solutions
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300 leading-relaxed">
                            Contributed to a <span className="text-teal-300 font-semibold">serverless image processing project</span>, 
                            using AWS Lambda and S3 for efficient image handling and optimization
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300 leading-relaxed">
                            Gained hands-on experience with <span className="text-blue-300 font-semibold">cloud computing patterns</span> and 
                            serverless computing paradigms
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-white/20">
                        <div className="flex flex-wrap gap-2">
                          {['AWS EC2', 'AWS S3', 'AWS Lambda', 'AWS IAM', 'Serverless', 'Cloud Computing'].map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-teal-500/20 text-green-200 rounded-full text-sm border border-green-400/30">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="text-center mt-16">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Something Amazing?</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                I'm passionate about creating innovative solutions that make a real impact. 
                Let's collaborate on your next project!
              </p>
            </div>
            <button
              onClick={() => scrollToSection('projects')}
              className="group inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <span>View My Projects</span>
              <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>
  )
}

export default Experience