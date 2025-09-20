import React from 'react'

function About({scrollToSection}) {
  return (
<section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
          
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent bg-[length:40px_40px] bg-[image:radial-gradient(circle_1px_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative group">
                <div className="mt-10 w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center text-white text-8xl font-bold shadow-2xl transform group-hover:scale-105 transition-all duration-500 md:mt-0">
                  <span className="font-serif">MMA</span>
                </div>
                
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center text-2xl animate-bounce delay-300">
                  💻
                </div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-green-400 rounded-2xl flex items-center justify-center text-2xl animate-bounce delay-700">
                  🚀
                </div>
                <div className="absolute top-1/2 -left-8 w-12 h-12 bg-pink-400 rounded-xl flex items-center justify-center text-xl animate-bounce delay-1000">
                  ⚡
                </div>
              </div>
            </div>

            <div className="text-white">
              <div className="mb-6">
                <h2 className="text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent leading-tight">
                  About Me
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
              </div>

              <div className="space-y-6 text-lg leading-relaxed">
                <p className="font-light text-blue-100">
                  Hello! I'm <span className="font-semibold text-white">Mohammed Mubbashir Ahmed</span>, 
                  a passionate full-stack developer based in <span className="text-blue-300 font-medium">Bengaluru, India</span>. 
                  I specialize in creating modern, scalable web applications that solve real-world problems.
                </p>

                <p className="font-light text-blue-100">
                  With expertise in <span className="text-purple-300 font-medium">React.js, Next.js, Node.js</span>, 
                  and cloud technologies, I've built everything from AI-powered receipt management systems 
                  to advanced fraud detection platforms for fintech companies.
                </p>

                <p className="font-light text-blue-100">
                  Worked as a <span className="text-pink-300 font-medium">Full Stack SDE-1 at Neokred Technologies</span>, 
                  where I develop cutting-edge solutions for KYC, fraud prevention, and digital onboarding 
                  that serve major fintech and banking clients.
                </p>

                <div className="pt-4">
                  <h3 className="text-2xl font-bold text-white mb-4">What I Do</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="text-2xl mb-2">🌐</div>
                      <div className="font-semibold text-white">Full-Stack Development</div>
                      <div className="text-sm text-blue-200">End-to-end web applications</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="text-2xl mb-2">🤖</div>
                      <div className="font-semibold text-white">AI Integration</div>
                      <div className="text-sm text-blue-200">Machine learning solutions</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="text-2xl mb-2">🔒</div>
                      <div className="font-semibold text-white">Security & Fraud Prevention</div>
                      <div className="text-sm text-blue-200">Advanced detection systems</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="text-2xl mb-2">☁️</div>
                      <div className="font-semibold text-white">Cloud Architecture</div>
                      <div className="text-sm text-blue-200">AWS & scalable solutions</div>
                    </div>
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </section>  )
}

export default About