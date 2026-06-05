import React from "react";

function Education({ scrollToSection }) {
  const education = [
    {
      degree: "Bachelor of Engineering (B.E.)",
      specialization: "Computer Science Engineering",
      institution: "PDA College of Engineering",
      duration: "Aug 2020 – Jun 2024",
      score: "CGPA: 7.91 / 10",
    },
    {
      degree: "Pre-University Course (PUC)",
      specialization: "Science Stream",
      institution: "Al Sharay PU College",
      duration: "Mar 2019 – Apr 2020",
      score: "93.67%",
    },
    {
      degree: "Secondary School (SSLC)",
      specialization: "General Education",
      institution: "Human Age Urdu High School",
      duration: "Mar 2017 – Mar 2018",
      score: "81.12%",
    },
  ];

  return (
    <section
      id="education"
      className="py-24 bg-slate-950 border-t border-slate-900"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <span className="text-indigo-400 font-medium tracking-widest uppercase text-sm">
            Education
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Academic Background
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl">
            A strong foundation in computer science, software engineering,
            algorithms, and problem-solving that supports my work in full-stack
            development and systems design.
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-indigo-500/40 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {item.degree}
                  </h3>

                  <p className="mt-2 text-indigo-400 font-medium">
                    {item.specialization}
                  </p>

                  <p className="mt-3 text-slate-400">
                    {item.institution}
                  </p>
                </div>

                <div className="lg:text-right">
                  <p className="text-slate-300 font-medium">
                    {item.duration}
                  </p>

                  <p className="mt-3 text-white font-semibold text-lg">
                    {item.score}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => scrollToSection("experience")}
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all duration-300"
          >
            View Experience
          </button>
        </div>
      </div>
    </section>
  );
}

export default Education;