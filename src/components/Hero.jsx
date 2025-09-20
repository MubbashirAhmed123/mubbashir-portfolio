import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import React from 'react'

function Hero({scrollToSection}) {
  return (
          <section id="home" className="min-h-screen flex items-center justify-center pt-16 mb-5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center">
                    <div className="mb-8">
                      <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                        MMA
                      </div>
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                      Mohammed <span className="text-blue-600">Mubbashir</span> Ahmed
                    </h1>
                    
                    <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
                      Full Stack Developer | Cloud | DevOps
                    </h2>
                    
                    <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                      Skilled in Next.js, React.js, Node.js, and AWS. Experienced in building scalable, 
                      real-time, and AI-driven applications with a strong background in fintech, 
                      device intelligence, and fraud detection.
                    </p>
        
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                      <a
                        href="mailto:mohdmubbashir71@gmail.com"
                        className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <Mail size={20} />
                        <span>Email</span>
                      </a>
                      <a
                        href="tel:+917619562002"
                        className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <Phone size={20} />
                        <span>Call</span>
                      </a>
                      <a
                        href="https://github.com/MubbashirAhmed123"
                        className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                      >
                        <Github size={20} />
                        <span>GitHub</span>
                      </a>
                      <a
                        href="https://in.linkedin.com/in/mohammed-mubbashir-ahmed-100554254"
                        className="flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                      >
                        <Linkedin size={20} />
                        <span>LinkedIn</span>
                      </a>
                    </div>
        
                    <button
                      onClick={() => scrollToSection('experience')}
                      className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-lg font-medium hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
                    >
                      View My Experience
                    </button>
                  </div>
                </div>
              </section>

  )
}

export default Hero