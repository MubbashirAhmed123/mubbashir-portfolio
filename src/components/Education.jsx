    import React from 'react'
    
    function Education({scrollToSection}) {
      return (
<section id="education" className="min-h-screen py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
          <div className="absolute top-1/4 left-1/6 w-16 h-16 bg-emerald-300/30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-teal-300/30 rotate-45 animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-cyan-300/30 rounded-full animate-pulse delay-500"></div>
          
          <div className="absolute top-20 right-20 text-4xl text-emerald-300/40 animate-bounce">🎓</div>
          <div className="absolute bottom-20 left-20 text-3xl text-teal-300/40 animate-bounce delay-700">📚</div>
          <div className="absolute top-1/2 left-10 text-2xl text-cyan-300/40 animate-bounce delay-300">✏️</div>
          <div className="absolute bottom-1/3 right-1/6 text-3xl text-emerald-300/40 animate-bounce delay-1000">🏆</div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Educational <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A strong academic foundation built through consistent excellence and dedication to learning
            </p>
          </div>

          <div className="space-y-12">
            
            <div className="group relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-500">
                <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                  
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center text-white text-4xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                        🎓
                      </div>
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Latest
                      </div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="mb-4">
                      <div className="flex flex-wrap items-center gap-4 mb-2">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">Bachelor of Engineering</h3>
                        <div className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 px-4 py-1 rounded-full text-sm font-semibold border border-emerald-200">
                          Aug 2020 – Jun 2024
                        </div>
                      </div>
                      <h4 className="text-xl text-emerald-600 font-semibold mb-2">Computer Science Engineering</h4>
                      <h5 className="text-lg text-gray-600 font-medium">PDA College of Engineering</h5>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">
                            📊
                          </div>
                          <h6 className="font-semibold text-gray-800">Academic Performance</h6>
                        </div>
                        <div className="text-3xl font-black text-emerald-600 mb-1">7.91</div>
                        <div className="text-sm text-gray-600">CGPA out of 10.0</div>
                        <div className="mt-3 bg-emerald-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full" style={{width: '79.1%'}}></div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-100">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">
                            💻
                          </div>
                          <h6 className="font-semibold text-gray-800">Specialization</h6>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-teal-400 rounded-full mr-2"></div>
                            <span className="text-gray-700">Full-Stack Development</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                            <span className="text-gray-700">Software Engineering</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                            <span className="text-gray-700">Database Management</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {['Data Structures', 'Algorithms', 'Web Development', 'Database Systems', 'Software Engineering', 'Computer Networks'].map((subject, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-sm border border-emerald-200 font-medium">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-500">
                <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                  
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center text-white text-4xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                      🏫
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="mb-4">
                      <div className="flex flex-wrap items-center gap-4 mb-2">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">Pre-University Course (PUC)</h3>
                        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold border border-blue-200">
                          Mar 2019 – Apr 2020
                        </div>
                      </div>
                      <h4 className="text-xl text-blue-600 font-semibold mb-2">Science Stream</h4>
                      <h5 className="text-lg text-gray-600 font-medium">Al Sharay PU College</h5>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">
                            🌟
                          </div>
                          <h6 className="font-semibold text-gray-800">Excellence Award</h6>
                        </div>
                        <div className="text-3xl font-black text-blue-600 mb-1">93.67%</div>
                        <div className="text-sm text-gray-600">Outstanding Performance</div>
                        <div className="mt-3 bg-blue-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full" style={{width: '93.67%'}}></div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">
                            🔬
                          </div>
                          <h6 className="font-semibold text-gray-800">Core Subjects</h6>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                            <span className="text-gray-700">Physics</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></div>
                            <span className="text-gray-700">Chemistry</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                            <span className="text-gray-700">Mathematics</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {['Physics', 'Chemistry', 'Mathematics', 'Computer Science', 'English', 'Biology'].map((subject, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm border border-blue-200 font-medium">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-500">
                <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                  
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center text-white text-4xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                      📖
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="mb-4">
                      <div className="flex flex-wrap items-center gap-4 mb-2">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">Class X (SSLC)</h3>
                        <div className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-1 rounded-full text-sm font-semibold border border-purple-200">
                          Mar 2017 – Mar 2018
                        </div>
                      </div>
                      <h4 className="text-xl text-purple-600 font-semibold mb-2">Secondary Education</h4>
                      <h5 className="text-lg text-gray-600 font-medium">Human Age Urdu High School</h5>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">
                            🎯
                          </div>
                          <h6 className="font-semibold text-gray-800">Foundation Strong</h6>
                        </div>
                        <div className="text-3xl font-black text-purple-600 mb-1">81.12%</div>
                        <div className="text-sm text-gray-600">Solid Academic Base</div>
                        <div className="mt-3 bg-purple-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: '81.12%'}}></div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-100">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">
                            🏁
                          </div>
                          <h6 className="font-semibold text-gray-800">Achievement</h6>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                            <span className="text-gray-700">Strong Foundation</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-pink-400 rounded-full mr-2"></div>
                            <span className="text-gray-700">Academic Discipline</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-rose-400 rounded-full mr-2"></div>
                            <span className="text-gray-700">Future Ready</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {['Mathematics', 'Science', 'English', 'Social Studies', 'Urdu', 'Hindi'].map((subject, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm border border-purple-200 font-medium">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-16 text-center">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Academic Excellence Journey</h3>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    🎓
                  </div>
                  <div className="text-2xl font-bold text-gray-900">4 Years</div>
                  <div className="text-gray-600">Engineering Degree</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    📈
                  </div>
                  <div className="text-2xl font-bold text-gray-900">Consistent</div>
                  <div className="text-gray-600">Academic Growth</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    🏆
                  </div>
                  <div className="text-2xl font-bold text-gray-900">Strong</div>
                  <div className="text-gray-600">Foundation</div>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                My educational journey reflects a consistent commitment to academic excellence and continuous learning. 
                From building strong fundamentals in secondary education to specializing in Computer Science Engineering, 
                each step has contributed to my technical expertise and problem-solving abilities.
              </p>

              <button onClick={()=>scrollToSection('experience')} className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-full hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <span>View My Experience</span>
                <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
            )
    }
    
    export default Education