import React from "react";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen py-20 relative bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      <div className="absolute top-20 left-10 w-40 h-40 bg-emerald-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-20 right-10 w-52 h-52 bg-teal-100 rounded-full blur-3xl opacity-40"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
          Get in{" "}
          <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mb-6 rounded-full"></div>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed mb-12">
          Whether you have a question, collaboration idea, or a recruiting
          opportunity, feel free to reach out directly.
        </p>

        <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 p-10 border border-gray-200">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-4 text-gray-800">
              <Mail className="w-6 h-6 text-emerald-600" />
              <a
                href="mailto:mohdmubbashir71@gmail.com"
                className="text-lg font-medium hover:text-emerald-600 transition"
              >
                mohdmubbashir71@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4 text-gray-800">
              <Phone className="w-6 h-6 text-teal-600" />
              <a
                href="tel:+917619562002"
                className="text-lg font-medium hover:text-teal-600 transition"
              >
                +91 7619562002
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
