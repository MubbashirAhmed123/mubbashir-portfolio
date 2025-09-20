import React from 'react';

const Projects = ({scrollToSection}) => {
  return (
    <section id='projects' className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-60 h-60 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-50 h-50 bg-pink-300/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
        
        <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg rotate-45 animate-bounce"></div>
        <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-gradient-to-br from-pink-400 to-red-500 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-2/3 right-1/3 w-10 h-10 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg rotate-12 animate-bounce delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Showcasing innovative solutions that blend cutting-edge technology with real-world impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          <div className="group relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    🧾
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Raseed</h3>
                    <p className="text-sm text-gray-500 font-medium">AI Receipt Management</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Google Hackathon 2025
                </div>
              </div>

              
              <div className="w-full h-48 bg-gradient-to-br from-green-100 to-emerald-200 rounded-2xl mb-6 flex items-center justify-center group-hover:from-green-200 group-hover:to-emerald-300 transition-all duration-300">
                <div className="text-center">
                  <div className="text-6xl mb-2">📱</div>
                  <p className="text-gray-600 font-medium">AI-Powered Receipt Scanner</p>
                </div>
              </div>

              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">🤖 AI-Powered Receipt Processing</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Created a multilingual OCR solution that automatically integrates Google Wallet digital passes 
                    and extracts receipt data from images and videos using Google Gemini AI's multi-modal processing.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">📊 Smart Financial Analytics Platform</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Built a scalable Firebase/GCP system offering real-time spending metrics, insights, 
                    and conversational AI for natural language expenditure inquiries.
                  </p>
                </div>
              </div>

              
              <div className="mb-6">
                <h5 className="text-sm font-semibold text-gray-700 mb-3">Technologies Used:</h5>
                <div className="flex flex-wrap gap-2">
                  {['Google Gemini AI', 'Cloud Vision API', 'Firebase', 'GCP', 'OCR', 'NLP'].map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm border border-green-200 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </button>
                <a href='https://github.com/MubbashirAhmed123/team-raseed-frontend' className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all duration-300 font-semibold shadow-md hover:shadow-lg">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    🏦
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">IBBank</h3>
                    <p className="text-sm text-gray-500 font-medium">Banking Management System</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Full Stack
                </div>
              </div>

              
              <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-cyan-200 rounded-2xl mb-6 flex items-center justify-center group-hover:from-blue-200 group-hover:to-cyan-300 transition-all duration-300">
                <div className="text-center">
                  <div className="text-6xl mb-2">💳</div>
                  <p className="text-gray-600 font-medium">Complete Banking Solution</p>
                </div>
              </div>

              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">💰 Complete Banking Operations</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Comprehensive banking system enabling users to perform all essential banking operations including 
                    account management, fund transfers, transaction history, and balance inquiries.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">🔒 Secure Financial Platform</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Built with robust security measures, user authentication, and real-time transaction processing 
                    to ensure safe and reliable banking experiences.
                  </p>
                </div>
              </div>

              
              <div className="mb-6">
                <h5 className="text-sm font-semibold text-gray-700 mb-3">Technologies Used:</h5>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT Auth', 'Responsive Design'].map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-sm border border-blue-200 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://ibbank.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
                <a href='https://github.com/MubbashirAhmed123/online_banking_system' className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all duration-300 font-semibold shadow-md hover:shadow-lg">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    📦
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">WareHouse Pro</h3>
                    <p className="text-sm text-gray-500 font-medium">Smart Warehouse Management</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                 Full Stack | IoT Integration
                </div>
              </div>

              
              <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-pink-200 rounded-2xl mb-6 flex items-center justify-center group-hover:from-purple-200 group-hover:to-pink-300 transition-all duration-300">
                <div className="text-center">
                  <div className="text-6xl mb-2">📱</div>
                  <p className="text-gray-600 font-medium">QR Code Automation</p>
                </div>
              </div>

              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">📋 QR Code-Based Storage System</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Automated warehouse management system where users scan QR codes to store and retrieve goods. 
                    Physical storage integration with digital tracking for seamless inventory management.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">⚖️ Weight-Based Billing System</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Smart charging system based on weight (kg) of stored goods. Owner confirmation required before 
                    retrieval, with automated billing calculation and payment processing.
                  </p>
                </div>
              </div>

              
              <div className="mb-6">
                <h5 className="text-sm font-semibold text-gray-700 mb-3">Technologies Used:</h5>
                <div className="flex flex-wrap gap-2">
                  {['QR Code Scanner', 'React.js', 'Node.js', 'MongoDB', 'IoT Integration', 'Payment Gateway'].map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm border border-purple-200 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              
              <div className="flex flex-wrap gap-4">
                
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
                <button className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all duration-300 font-semibold shadow-md hover:shadow-lg">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </button>
              </div>
            </div>
          </div>

          
          <div className="group relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    ⚽
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Turf Booking</h3>
                    <p className="text-sm text-gray-500 font-medium">Sports Facility Management</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Full Stack
                </div>
              </div>

              
              <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-red-200 rounded-2xl mb-6 flex items-center justify-center group-hover:from-orange-200 group-hover:to-red-300 transition-all duration-300">
                <div className="text-center">
                  <div className="text-6xl mb-2">🏟️</div>
                  <p className="text-gray-600 font-medium">Sports Facility Management</p>
                </div>
              </div>

              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">🎯 Dynamic Turf Booking System</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Created a user-friendly application that streamlines playground reservations with 
                    easy-to-use booking features, real-time slot availability tracking, and customer management.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">📱 Enhanced Booking Management</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Integrated slot view and phone-based lookup capabilities to display available and 
                    occupied time periods, increasing operational efficiency.
                  </p>
                </div>
              </div>

              
              <div className="mb-6">
                <h5 className="text-sm font-semibold text-gray-700 mb-3">Technologies Used:</h5>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Real-time Updates', 'Responsive Design'].map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-full text-sm border border-orange-200 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://turf-booking-app.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
               
                <a href='https://github.com/MubbashirAhmed123/turf-booking' className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all duration-300 font-semibold shadow-md hover:shadow-lg">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">More Projects Coming Soon</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm constantly working on new and exciting projects. Stay tuned for more innovative solutions 
            that push the boundaries of web development and AI integration.
          </p>
        </div>

        <div className="text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Build Something Amazing Together</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Have an idea for a project? I'm passionate about creating innovative solutions that make a real impact. 
              From AI-powered applications to full-stack web platforms, let's bring your vision to life!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={()=>scrollToSection('contact')} className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <span>Get In Touch</span>
                <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <a href='https://github.com/MubbashirAhmed123' className="inline-flex items-center px-8 py-4 bg-white text-gray-800 font-bold rounded-full hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                <span>View All Projects</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;