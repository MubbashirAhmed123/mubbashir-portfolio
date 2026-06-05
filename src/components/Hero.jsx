import { Github, Linkedin, Mail, Phone } from "lucide-react";
import React from "react";

function Hero({ scrollToSection }) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-white mb-2"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Profile Avatar */}
        <div className="mb-8">
          <div className="w-32 h-32 sm:w-28 sm:h-28 md:w-64 md:h-64  mx-auto mb-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl sm:text-4xl font-bold">
            <img src="/public/image.png" alt="" className="rounded-full" />
          </div>
        </div>

        {/* Name & Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
          Mohammed <span className="text-blue-600">Mubbashir</span> Ahmed
        </h1>

        <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-5 sm:mb-6">
          Full Stack Developer | Cloud | DevOps
        </h2>

        {/* About */}
        <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-2xl sm:max-w-3xl mx-auto px-2">
          Skilled in Next.js, React.js, Node.js, and AWS. Experienced in building scalable,
          real-time, and AI-driven applications with a strong background in fintech,
          device intelligence, and fraud detection.
        </p>

        {/* Social Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
          <a
            href="mailto:mohdmubbashir71@gmail.com"
            className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
          >
            <Mail size={18} className="sm:w-5 sm:h-5" />
            <span>Email</span>
          </a>
          <a
            href="tel:+917619562002"
            className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base"
          >
            <Phone size={18} className="sm:w-5 sm:h-5" />
            <span>Call</span>
          </a>
          <a
            href="https://github.com/MubbashirAhmed123"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors text-sm sm:text-base"
          >
            <Github size={18} className="sm:w-5 sm:h-5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://in.linkedin.com/in/mohammed-mubbashir-ahmed-100554254"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm sm:text-base"
          >
            <Linkedin size={18} className="sm:w-5 sm:h-5" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Buttons (Experience + Resume) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={() => scrollToSection("experience")}
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-base sm:text-lg font-medium hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
          >
            View My Experience
          </button>

          <a
            download
            href="/1.Mubbashir_ahmed_resume.pdf"
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg text-base sm:text-lg font-medium hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
          >
            View My Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
