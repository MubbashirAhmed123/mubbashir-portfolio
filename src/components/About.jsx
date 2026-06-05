import React from 'react';

const whatIDo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="#2563EB" strokeWidth="1.6"/>
        <path d="M8 21h8M12 17v4" stroke="#2563EB" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M6 8l3 3-3 3M11 14h6" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Full-Stack Development',
    desc: 'Next.js, React.js, Node.js — end-to-end scalable web applications',
    accent: '#2563EB',
    bg: 'rgba(37,99,235,0.08)',
    border: 'rgba(37,99,235,0.18)',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="3" stroke="#7C3AED" strokeWidth="1.6"/>
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="#7C3AED" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" stroke="#7C3AED" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    title: 'AI & Predictive Analytics',
    desc: 'PyTorch, BERT, Scikit-learn — ML systems and intelligent data pipelines',
    accent: '#7C3AED',
    bg: 'rgba(124,58,237,0.08)',
    border: 'rgba(124,58,237,0.18)',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z" stroke="#DC2626" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="#DC2626" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Security & Fraud Prevention',
    desc: 'KYC, device intelligence, behavioral analytics for fintech platforms',
    accent: '#DC2626',
    bg: 'rgba(220,38,38,0.07)',
    border: 'rgba(220,38,38,0.17)',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 15a4 4 0 004 4h10a4 4 0 001.8-7.6A6 6 0 006.2 9.4 4 4 0 003 15z" stroke="#0891B2" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M12 12v5M9.5 14.5L12 12l2.5 2.5" stroke="#0891B2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Cloud & DevOps',
    desc: 'AWS, Docker, Jenkins CI/CD — distributed systems and infrastructure',
    accent: '#0891B2',
    bg: 'rgba(8,145,178,0.07)',
    border: 'rgba(8,145,178,0.17)',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="#16A34A" strokeWidth="1.5"/>
        <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="#16A34A" strokeWidth="1.5"/>
        <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="#16A34A" strokeWidth="1.5"/>
        <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="#16A34A" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'System Design',
    desc: 'Microservices, caching, load balancing, database optimization at scale',
    accent: '#16A34A',
    bg: 'rgba(22,163,74,0.07)',
    border: 'rgba(22,163,74,0.17)',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 3H5a2 2 0 00-2 2v4M9 3h6M9 3v18m6-18h4a2 2 0 012 2v4M15 3v18M9 21H5a2 2 0 01-2-2v-4M9 21h6M15 21h4a2 2 0 002-2v-4M2 9h20M2 15h20" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Data Engineering',
    desc: 'Tableau pipelines, real-time processing, enterprise analytical workflows',
    accent: '#D97706',
    bg: 'rgba(217,119,6,0.07)',
    border: 'rgba(217,119,6,0.17)',
  },
];

const stats = [
  { value: '1+', label: 'Years Experience' },
  { value: '5+', label: 'Projects Built' },
  { value: '2', label: 'Companies' },
];

function About({ scrollToSection }) {
  return (
    <section
      id="about"
      className="min-h-screen py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 45%, #0F172A 100%)' }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.15) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Soft glow accents */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #6366F1 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #0EA5E9 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black mb-4 text-white">
            About{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #818CF8, #38BDF8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Me
            </span>
          </h2>
          <div
            className="w-20 h-1 mx-auto rounded-full"
            style={{ background: 'linear-gradient(90deg, #818CF8, #38BDF8)' }}
          />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left — Avatar + Stats */}
          <div className="lg:col-span-2 flex flex-col items-center gap-8">
            {/* Avatar card */}
            <div
              className="w-full max-w-xs rounded-3xl p-8 flex flex-col items-center gap-4 border"
              style={{
                background: 'rgba(255,255,255,0.04)',
                borderColor: 'rgba(129,140,248,0.25)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="text-center">
                <p className="text-lg font-bold text-white">Mohammed Mubbashir Ahmed</p>
                <p className="text-sm mt-1" style={{ color: '#94A3B8' }}>
                  Software Engineer
                </p>
                <div className="flex items-center justify-center gap-1.5 mt-2">
                  <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#64748B"/>
                  </svg>
                  <span className="text-xs" style={{ color: '#64748B' }}>Bengaluru, India</span>
                </div>
              </div>

              {/* Current role badge */}
              <div
                className="w-full rounded-xl px-4 py-3 border"
                style={{ background: 'rgba(5,150,105,0.1)', borderColor: 'rgba(16,185,129,0.25)' }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-emerald-400">Currently at</p>
                    <p className="text-sm font-bold text-white">HWL · Software Engineer</p>
                    <p className="text-xs" style={{ color: '#94A3B8' }}>Healthcare Workforce Logistics</p>
                  </div>
                </div>
              </div>

              {/* Previous role */}
              <div
                className="w-full rounded-xl px-4 py-3 border"
                style={{ background: 'rgba(99,102,241,0.08)', borderColor: 'rgba(99,102,241,0.2)' }}
              >
                <p className="text-xs font-semibold" style={{ color: '#818CF8' }}>Previously</p>
                <p className="text-sm font-bold text-white">Full Stack SDE-1</p>
                <p className="text-xs" style={{ color: '#94A3B8' }}>Neokred Technologies · Fintech</p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl p-4 text-center border"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    borderColor: 'rgba(255,255,255,0.08)',
                  }}
                >
                  <p className="text-2xl font-black text-white">{s.value}</p>
                  <p className="text-xs mt-0.5 leading-tight" style={{ color: '#64748B' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Bio + What I Do */}
          <div className="lg:col-span-3 space-y-8">
            {/* Bio */}
            <div
              className="rounded-2xl p-6 border"
              style={{
                background: 'rgba(255,255,255,0.03)',
                borderColor: 'rgba(255,255,255,0.08)',
              }}
            >
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span
                  className="w-1 h-5 rounded-full inline-block"
                  style={{ background: 'linear-gradient(180deg, #818CF8, #38BDF8)' }}
                />
                Background
              </h3>
             <div className="space-y-4 text-base leading-relaxed" style={{ color: '#CBD5E1' }}>
  <p>
    I'm a <span className="text-white font-semibold">Full-Stack Software Engineer</span> with experience building scalable web applications, AI-powered analytics platforms, and enterprise software solutions using{' '}
    <span style={{ color: '#818CF8' }} className="font-medium">React.js, Next.js, Node.js, Python, PostgreSQL, and MongoDB</span>.
  </p>

  <p>
    Specialized in developing <span className="text-white font-medium">end-to-end data-driven applications</span> that combine modern frontend experiences, robust backend architectures, real-time analytics, and intelligent automation. Passionate about transforming complex business data into actionable insights through interactive dashboards and predictive systems.
  </p>

  <p>
    Currently at <span className="text-white font-semibold">HWL (Healthcare Workforce Logistics)</span>, contributing to AI-driven predictive staffing solutions, workforce analytics platforms, Tableau data pipelines, and automated reporting systems. Focused on building features that leverage machine learning, forecasting models, and AI-generated insights for business decision-making.
  </p>

  <p>
    Previously at <span className="text-white font-semibold">Neokred Technologies</span>, where I developed enterprise KYC, onboarding, and fraud-detection platforms, helping reduce manual operational effort by{' '}
    <span style={{ color: '#4ADE80' }} className="font-bold">70%</span> through workflow automation and intelligent risk assessment solutions.
  </p>

  <p>
    Currently expanding expertise in <span style={{ color: '#38BDF8' }} className="font-medium">AI Engineering, LLM Applications, RAG Systems, AI Agents, Predictive Analytics, and Full-Stack AI Products</span> to build the next generation of intelligent business applications.
  </p>
</div>

            </div>

            {/* What I Do */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span
                  className="w-1 h-5 rounded-full inline-block"
                  style={{ background: 'linear-gradient(180deg, #818CF8, #38BDF8)' }}
                />
                What I Do
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whatIDo.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl p-4 border flex items-start gap-3 transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      background: item.bg,
                      borderColor: item.border,
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(255,255,255,0.07)' }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="text-xs mt-0.5 leading-relaxed" style={{ color: '#94A3B8' }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => scrollToSection('experience')}
                className="px-6 py-3 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ background: 'linear-gradient(135deg, #4F46E5, #0EA5E9)' }}
              >
                View Experience →
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 rounded-xl text-sm font-bold border transition-all duration-300 hover:scale-105"
                style={{
                  color: '#CBD5E1',
                  borderColor: 'rgba(255,255,255,0.15)',
                  background: 'rgba(255,255,255,0.04)',
                }}
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;