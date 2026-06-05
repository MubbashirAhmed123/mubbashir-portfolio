import React from 'react';

const skills = {
  frontend: {
    label: 'Frontend Development',
    accent: '#2563EB',
    accentLight: '#EFF6FF',
    accentBorder: '#BFDBFE',
    items: [
      {
        name: 'HTML5',
        color: '#E34F26',
        bg: '#FFF4F1',
        svg: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <path d="M5 3l2.1 23.4L16 29l8.9-2.6L27 3H5z" fill="#E44D26"/>
            <path d="M16 27.1l7.2-2L25 6.5H16v20.6z" fill="#F16529"/>
            <path d="M11.2 13.5H16v-3H8l.3 3.6 7.7 2.1v-2.9l-4.8-0.8zM11.6 18.2l.3 3.1L16 22.5v-3.1l-4.4-1.2z" fill="#EBEBEB"/>
            <path d="M16 13.5v2.9l4.8-1.3.4-4.6H16v3zM16 19.4v3.1l4.1-1.1.5-5.1H16v3.1z" fill="#fff"/>
          </svg>
        ),
      },
      {
        name: 'CSS3',
        color: '#1572B6',
        bg: '#EFF6FF',
        svg: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <path d="M5 3l2.1 23.4L16 29l8.9-2.6L27 3H5z" fill="#1572B6"/>
            <path d="M16 27.1l7.2-2L25 6.5H16v20.6z" fill="#33A9DC"/>
            <path d="M16 13.5H11.2l.3 3.4 4.5.1v-3.5zm0-7H8.6l.3 3h7.1V6.5z" fill="#fff"/>
            <path d="M16 17l-4.5-.1.3 3.3 4.2 1.2V17zm0-10.5v3h7.1l-.6 6.5-6.5 1.8v3.3l6.5-1.8.9-10H16v-.8z" fill="#EBEBEB"/>
          </svg>
        ),
      },
      {
        name: 'JavaScript',
        color: '#F7DF1E',
        bg: '#FEFCE8',
        svg: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <rect width="32" height="32" fill="#F7DF1E" rx="3"/>
            <path d="M19.5 24.4c.5.8 1.2 1.4 2.4 1.4 1 0 1.6-.5 1.6-1.2 0-.8-.6-1.1-1.8-1.6l-.6-.3c-1.8-.8-3-1.7-3-3.8 0-1.9 1.4-3.3 3.7-3.3 1.6 0 2.8.6 3.6 2l-2 1.3c-.4-.8-1-.9-1.6-.9-.7 0-1.1.5-1.1 1 0 .7.4 1 1.7 1.5l.6.3c2.1.9 3.3 1.8 3.3 3.9 0 2.2-1.7 3.5-4 3.5-2.2 0-3.7-1.1-4.4-2.5l2.1-1.3zm-9.7.2c.4.6.7 1.2 1.5 1.2.7 0 1.2-.3 1.2-1.5V16h2.5v8.5c0 2.5-1.5 3.6-3.6 3.6-2 0-3.1-1-3.7-2.3l2.1-1.2z" fill="#323330"/>
          </svg>
        ),
      },
      {
        name: 'TypeScript',
        color: '#3178C6',
        bg: '#EFF6FF',
        svg: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <rect width="32" height="32" fill="#3178C6" rx="3"/>
            <path d="M18 17.5h3V16H13v1.5h3V26h2v-8.5zM22 20.5c0 3 1.8 5.5 5 5.5v-2c-1.8 0-3-1.3-3-3.5s1.2-3.5 3-3.5v-2c-3.2 0-5 2.5-5 5.5z" fill="#fff"/>
          </svg>
        ),
      },
      {
        name: 'React.js',
        color: '#61DAFB',
        bg: '#F0FDFF',
        svg: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <circle cx="16" cy="16" r="2.5" fill="#61DAFB"/>
            <ellipse cx="16" cy="16" rx="13" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
            <ellipse cx="16" cy="16" rx="13" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 16 16)"/>
            <ellipse cx="16" cy="16" rx="13" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 16 16)"/>
          </svg>
        ),
      },
      {
        name: 'Next.js',
        color: '#000000',
        bg: '#F8F8F8',
        svg: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <circle cx="16" cy="16" r="14" fill="#000"/>
            <path d="M10 21V11h8.5l-6 8H19v2H10z" fill="#fff"/>
            <path d="M21 11h2v10h-2V11z" fill="url(#ng)"/>
            <defs>
              <linearGradient id="ng" x1="22" y1="11" x2="22" y2="21" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#fff"/>
                <stop offset="100%" stopColor="#fff" stopOpacity="0"/>
              </linearGradient>
            </defs>
          </svg>
        ),
      },
      {
        name: 'Tailwind CSS',
        color: '#38BDF8',
        bg: '#F0FDFF',
        svg: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <path d="M16 8c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.76.19 1.3.74 1.9 1.35C17.4 13 18.4 14 20.5 14c2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C19.1 9 18.1 8 16 8zM11 14c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.76.19 1.3.74 1.9 1.35C12.4 19 13.4 20 15.5 20c2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C14.1 15 13.1 14 11 14z" fill="#38BDF8"/>
          </svg>
        ),
      },
      {
        name: 'Redux',
        color: '#764ABC',
        bg: '#F5F3FF',
        svg: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <path d="M20.6 19.3c.8-.1 1.4-.9 1.3-1.7-.1-.8-.8-1.3-1.6-1.3-1 .1-1.5.8-1.5 1.6 0 .2.1.5.2.6-1.1.8-2.4 1.3-3.8 1.3-1.1 0-2-.3-2.7-.9V11c.9-.3 1.5-1.1 1.5-2.1C14 7.8 13.1 7 12 7c-1.1 0-1.9.9-1.9 1.9 0 .9.5 1.6 1.3 1.9v7.4c-.8.3-1.3 1-1.3 1.9 0 1.1.9 1.9 1.9 1.9 1.1 0 2-.9 2-1.9 0-.3-.1-.5-.2-.8.6.3 1.3.4 2 .4 1.8 0 3.4-.6 4.8-1.4zm1.7-9.3c-1.1 0-2 .9-2 1.9 0 .2.1.5.2.7l-2 1.2c-.2.1-.3.4-.2.7l.2.4c.1.2.4.3.7.2l2-1.2c.3.2.7.3 1.1.3 1.1 0 2-.9 2-1.9 0-1.2-.9-2.3-2-2.3z" fill="#764ABC"/>
          </svg>
        ),
      },
      {
        name: 'Zustand',
        color: '#443E38',
        bg: '#F8F8F8',
        svg: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <circle cx="16" cy="16" r="11" fill="#443E38"/>
            <text x="16" y="20" textAnchor="middle" fontSize="11" fontWeight="700" fill="#F5C842" fontFamily="serif">Z</text>
          </svg>
        ),
      },
    ],
  },
  backend: {
    label: 'Backend Development',
    accent: '#16A34A',
    accentLight: '#F0FDF4',
    accentBorder: '#BBF7D0',
    items: [
      {
        name: 'Node.js',
        color: '#339933',
        bg: '#F0FDF4',
        svg: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <path d="M16 2L3 9.5v15L16 32l13-7.5v-15L16 2z" fill="#339933"/>
            <path d="M16 6l9.5 5.5v11L16 28l-9.5-5.5v-11L16 6z" fill="#fff" fillOpacity=".05"/>
            <path d="M16 9v14M10 12.5l6 3.5 6-3.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        name: 'Express.js',
        color: '#404040',
        bg: '#F8F8F8',
        svg: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <rect width="32" height="32" rx="4" fill="#2D2D2D"/>
            <text x="4" y="20" fontSize="9" fontWeight="700" fill="#fff" fontFamily="monospace">ex</text>
            <path d="M16 12h10M16 16h8M16 20h10" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        name: 'Fastify.js',
        color: '#000',
        bg: '#F8F8F8',
        svg: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <rect width="32" height="32" rx="4" fill="#000"/>
            <path d="M8 11h10l-6 4h8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 21h12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        name: 'RESTful APIs',
        color: '#0EA5E9',
        bg: '#F0F9FF',
        svg: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <rect x="3" y="8" width="10" height="16" rx="2" fill="#0EA5E9" fillOpacity=".15" stroke="#0EA5E9" strokeWidth="1.5"/>
            <rect x="19" y="8" width="10" height="16" rx="2" fill="#0EA5E9" fillOpacity=".15" stroke="#0EA5E9" strokeWidth="1.5"/>
            <path d="M13 14h6M13 18h6" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="6" cy="14" r="1.5" fill="#0EA5E9"/>
            <circle cx="6" cy="18" r="1.5" fill="#0EA5E9"/>
          </svg>
        ),
      },
      {
        name: 'WebSockets',
        color: '#7C3AED',
        bg: '#F5F3FF',
        svg: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <path d="M8 16a8 8 0 1116 0" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M6 16a10 10 0 1120 0" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
            <circle cx="16" cy="16" r="3" fill="#7C3AED"/>
            <path d="M13 16h-5M19 16h5" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ),
      },
    ],
  },
  database: {
    label: 'Database & Cloud',
    accent: '#9333EA',
    accentLight: '#FAF5FF',
    accentBorder: '#E9D5FF',
    items: [
      {
        name: 'MongoDB',
        color: '#00ED64',
        bg: '#F0FDF4',
        svg: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <path d="M16 3C12 8 9 12 9 16.5a7 7 0 0014 0C23 12 20 8 16 3z" fill="#00ED64"/>
            <path d="M16 3v26" stroke="#00684A" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        name: 'MySQL',
        color: '#4479A1',
        bg: '#EFF6FF',
        svg: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <ellipse cx="16" cy="10" rx="10" ry="4" fill="#4479A1" fillOpacity=".2" stroke="#4479A1" strokeWidth="1.5"/>
            <path d="M6 10v12c0 2.2 4.5 4 10 4s10-1.8 10-4V10" stroke="#4479A1" strokeWidth="1.5"/>
            <path d="M6 16c0 2.2 4.5 4 10 4s10-1.8 10-4" stroke="#4479A1" strokeWidth="1.5"/>
          </svg>
        ),
      },
      {
        name: 'Redis',
        color: '#DC382C',
        bg: '#FEF2F2',
        svg: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <ellipse cx="16" cy="22" rx="11" ry="4" fill="#DC382C" fillOpacity=".2" stroke="#DC382C" strokeWidth="1.5"/>
            <ellipse cx="16" cy="16" rx="11" ry="4" fill="#DC382C" fillOpacity=".2" stroke="#DC382C" strokeWidth="1.5"/>
            <ellipse cx="16" cy="10" rx="11" ry="4" fill="#DC382C" fillOpacity=".35" stroke="#DC382C" strokeWidth="1.5"/>
          </svg>
        ),
      },
      {
        name: 'BullMQ',
        color: '#D97706',
        bg: '#FFFBEB',
        svg: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <rect x="4" y="8" width="24" height="5" rx="2" fill="#D97706" fillOpacity=".3" stroke="#D97706" strokeWidth="1.3"/>
            <rect x="4" y="15" width="18" height="5" rx="2" fill="#D97706" fillOpacity=".3" stroke="#D97706" strokeWidth="1.3"/>
            <rect x="4" y="22" width="12" height="5" rx="2" fill="#D97706" fillOpacity=".3" stroke="#D97706" strokeWidth="1.3"/>
            <path d="M26 18l3-2-3-2" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      },
      {
        name: 'AWS',
        color: '#FF9900',
        bg: '#FFFBEB',
        svg: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <path d="M9 19l-4 2 4 2M23 19l4 2-4 2" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 21h22" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M10 13h12M16 9v4" stroke="#232F3E" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M8 13c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#232F3E" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          </svg>
        ),
      },
      {
        name: 'Docker',
        color: '#2496ED',
        bg: '#EFF6FF',
        svg: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <rect x="4" y="13" width="5" height="4" rx="1" fill="#2496ED" fillOpacity=".3" stroke="#2496ED" strokeWidth="1.2"/>
            <rect x="10" y="13" width="5" height="4" rx="1" fill="#2496ED" fillOpacity=".3" stroke="#2496ED" strokeWidth="1.2"/>
            <rect x="16" y="13" width="5" height="4" rx="1" fill="#2496ED" fillOpacity=".3" stroke="#2496ED" strokeWidth="1.2"/>
            <rect x="10" y="8" width="5" height="4" rx="1" fill="#2496ED" fillOpacity=".3" stroke="#2496ED" strokeWidth="1.2"/>
            <rect x="16" y="8" width="5" height="4" rx="1" fill="#2496ED" fillOpacity=".3" stroke="#2496ED" strokeWidth="1.2"/>
            <path d="M4 19c2 4 6 4 10 4 5 0 10-1 13-5" stroke="#2496ED" strokeWidth="1.3" strokeLinecap="round"/>
            <path d="M25 15c1-1 3-.5 3 1s-1 2-2 2" stroke="#2496ED" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        ),
      },
    ],
  },
  ai: {
    label: 'AI & Machine Learning',
    accent: '#DC2626',
    accentLight: '#FFF5F5',
    accentBorder: '#FECACA',
    items: [
      {
        name: 'PyTorch',
        color: '#EE4C2C',
        bg: '#FFF5F5',
        svg: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <path d="M16 4l-8 8a11.3 11.3 0 0016 16A11.3 11.3 0 0016 4z" fill="#EE4C2C" fillOpacity=".15" stroke="#EE4C2C" strokeWidth="1.5"/>
            <circle cx="20" cy="12" r="2" fill="#EE4C2C"/>
          </svg>
        ),
      },
      {
        name: 'Scikit-learn',
        color: '#F89939',
        bg: '#FFFBEB',
        svg: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <circle cx="16" cy="16" r="5" fill="#F89939" fillOpacity=".2" stroke="#F89939" strokeWidth="1.5"/>
            <circle cx="16" cy="8" r="3" fill="#3499CD" fillOpacity=".3" stroke="#3499CD" strokeWidth="1.3"/>
            <circle cx="23" cy="20" r="3" fill="#3499CD" fillOpacity=".3" stroke="#3499CD" strokeWidth="1.3"/>
            <circle cx="9" cy="20" r="3" fill="#3499CD" fillOpacity=".3" stroke="#3499CD" strokeWidth="1.3"/>
          </svg>
        ),
      },
      {
        name: 'HuggingFace',
        color: '#FF9D00',
        bg: '#FFFBEB',
        svg: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <circle cx="16" cy="15" r="10" fill="#FFD21E" fillOpacity=".25" stroke="#FF9D00" strokeWidth="1.5"/>
            <circle cx="12" cy="13" r="2" fill="#FF9D00"/>
            <circle cx="20" cy="13" r="2" fill="#FF9D00"/>
            <path d="M11 19c1.2 2 8.8 2 10 0" stroke="#FF9D00" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        name: 'Gemini AI',
        color: '#4285F4',
        bg: '#EFF6FF',
        svg: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <path d="M16 4C16 4 10 10 10 16C10 22 16 28 16 28C16 28 22 22 22 16C22 10 16 4 16 4Z" fill="url(#gm1)"/>
            <path d="M4 16C4 16 10 10 16 10C22 10 28 16 28 16C28 16 22 22 16 22C10 22 4 16 4 16Z" fill="url(#gm2)" fillOpacity=".7"/>
            <defs>
              <linearGradient id="gm1" x1="16" y1="4" x2="16" y2="28" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4285F4"/>
                <stop offset="1" stopColor="#EA4335"/>
              </linearGradient>
              <linearGradient id="gm2" x1="4" y1="16" x2="28" y2="16" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FBBC04"/>
                <stop offset="1" stopColor="#34A853"/>
              </linearGradient>
            </defs>
          </svg>
        ),
      },
      {
        name: 'BERT / NLP',
        color: '#6D28D9',
        bg: '#F5F3FF',
        svg: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <rect x="5" y="10" width="5" height="5" rx="2" fill="#6D28D9" fillOpacity=".3" stroke="#6D28D9" strokeWidth="1.2"/>
            <rect x="13.5" y="7" width="5" height="5" rx="2" fill="#6D28D9" fillOpacity=".5" stroke="#6D28D9" strokeWidth="1.2"/>
            <rect x="22" y="10" width="5" height="5" rx="2" fill="#6D28D9" fillOpacity=".3" stroke="#6D28D9" strokeWidth="1.2"/>
            <rect x="13.5" y="20" width="5" height="5" rx="2" fill="#6D28D9" fillOpacity=".3" stroke="#6D28D9" strokeWidth="1.2"/>
            <path d="M10 12.5l3.5-1M22 12.5l-3.5-1M16 12v8" stroke="#6D28D9" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        name: 'Cloud Vision',
        color: '#0F9D58',
        bg: '#F0FDF4',
        svg: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <circle cx="16" cy="16" r="7" fill="none" stroke="#0F9D58" strokeWidth="1.5"/>
            <circle cx="16" cy="16" r="3" fill="#0F9D58" fillOpacity=".3" stroke="#0F9D58" strokeWidth="1.2"/>
            <path d="M16 5v3M16 24v3M5 16h3M24 16h3" stroke="#0F9D58" strokeWidth="1.3" strokeLinecap="round"/>
          </svg>
        ),
      },
    ],
  },
  devops: {
    label: 'DevOps & Tools',
    accent: '#0F766E',
    accentLight: '#F0FDFA',
    accentBorder: '#99F6E4',
    items: [
      {
        name: 'Git',
        color: '#F05032',
        bg: '#FFF4F1',
        svg: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <path d="M29.5 14.7L17.3 2.5a1.7 1.7 0 00-2.4 0l-2.4 2.4 3 3a2 2 0 012.5 2.5l3 3a2 2 0 11-1.2 1.2l-2.8-2.8v7.2a2 2 0 11-2.4.2V11a2 2 0 01-1.1-2.6L12.5 5.4l-10 10a1.7 1.7 0 000 2.4l12.2 12.2a1.7 1.7 0 002.4 0l12.4-12.4a1.7 1.7 0 000-2.4v.1z" fill="#F05032"/>
          </svg>
        ),
      },
      {
        name: 'GitHub',
        color: '#24292F',
        bg: '#F8F8F8',
        svg: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <path fillRule="evenodd" clipRule="evenodd" d="M16 3C8.8 3 3 8.8 3 16c0 5.8 3.8 10.7 9 12.4.7.1.9-.3.9-.6v-2.2c-3.7.8-4.5-1.8-4.5-1.8-.6-1.5-1.5-2-1.5-2-1.2-.8.1-.8.1-.8 1.4.1 2.1 1.4 2.1 1.4 1.2 2.1 3.2 1.5 4 1.1.1-.9.5-1.5.9-1.8-3-.3-6.1-1.5-6.1-6.7 0-1.5.5-2.7 1.4-3.6-.1-.3-.6-1.7.1-3.5 0 0 1.1-.4 3.7 1.4a13 13 0 016.6 0c2.6-1.7 3.7-1.4 3.7-1.4.7 1.8.3 3.2.1 3.5.9.9 1.4 2.1 1.4 3.6 0 5.2-3.2 6.3-6.2 6.7.5.4.9 1.2.9 2.5v3.7c0 .4.2.8.9.6 5.2-1.7 9-6.6 9-12.4C29 8.8 23.2 3 16 3z" fill="#24292F"/>
          </svg>
        ),
      },
      {
        name: 'Jenkins CI/CD',
        color: '#D24939',
        bg: '#FFF4F1',
        svg: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <circle cx="16" cy="13" r="8" fill="#D24939" fillOpacity=".15" stroke="#D24939" strokeWidth="1.5"/>
            <circle cx="16" cy="13" r="3" fill="#D24939"/>
            <path d="M16 22v7" stroke="#D24939" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12 27h8" stroke="#D24939" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        name: 'Microservices',
        color: '#0891B2',
        bg: '#ECFEFF',
        svg: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <rect x="13" y="13" width="6" height="6" rx="2" fill="#0891B2" fillOpacity=".3" stroke="#0891B2" strokeWidth="1.3"/>
            <rect x="4" y="4" width="6" height="6" rx="2" fill="#0891B2" fillOpacity=".2" stroke="#0891B2" strokeWidth="1.2"/>
            <rect x="22" y="4" width="6" height="6" rx="2" fill="#0891B2" fillOpacity=".2" stroke="#0891B2" strokeWidth="1.2"/>
            <rect x="4" y="22" width="6" height="6" rx="2" fill="#0891B2" fillOpacity=".2" stroke="#0891B2" strokeWidth="1.2"/>
            <rect x="22" y="22" width="6" height="6" rx="2" fill="#0891B2" fillOpacity=".2" stroke="#0891B2" strokeWidth="1.2"/>
            <path d="M10 7h3M19 7h3M10 25h3M19 25h3M7 10v3M7 19v3M25 10v3M25 19v3" stroke="#0891B2" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        name: 'Tableau',
        color: '#1F77B4',
        bg: '#EFF6FF',
        svg: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <path d="M15 4v24M4 16h24" stroke="#1F77B4" strokeWidth="2" strokeLinecap="round"/>
            <path d="M15 10V22M9 16h12" stroke="#E8762D" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="15" cy="16" r="2" fill="#1F77B4"/>
          </svg>
        ),
      },
    ],
  },
};

const SkillCard = ({ item }) => (
  <div
    className="group flex flex-col items-center gap-3 p-4 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default"
    style={{
      background: item.bg,
      borderColor: '#E5E7EB',
    }}
  >
    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white shadow-sm border border-gray-100">
      {item.svg}
    </div>
    <span className="text-xs font-semibold text-center text-gray-700 leading-tight">{item.name}</span>
  </div>
);

const CategorySection = ({ section }) => (
  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
    <div
      className="px-6 py-4 flex items-center gap-3"
      style={{ borderBottom: `2px solid ${section.accent}`, background: section.accentLight }}
    >
      <span
        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
        style={{ background: section.accent }}
      />
      <h3 className="text-base font-semibold tracking-tight" style={{ color: section.accent }}>
        {section.label}
      </h3>
    </div>
    <div className="p-6">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {section.items.map((item) => (
          <SkillCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  </div>
);

function Skills({ scrollToSection }) {
  return (
    <section id="skills" className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            Technical{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-5 rounded-full" />
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            A curated toolkit built across frontend, backend, cloud, and AI — focused on shipping scalable, production-grade software.
          </p>
        </div>

        <div className="space-y-6">
          {Object.values(skills).map((section) => (
            <CategorySection key={section.label} section={section} />
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="text-gray-500 mb-6 text-base">
            Always learning and exploring new technologies to stay ahead of the curve
          </p>
          <button
            onClick={() => scrollToSection('experience')}
            className="group inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-full hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            <span>See My Experience</span>
            <svg
              className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}

export default Skills;