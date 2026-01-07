import React, { useState } from 'react';
import Hero from './components/sections/Hero';
import ProblemSolution from './components/sections/ProblemSolution'; // Philosophy
import CoreTech from './components/sections/CoreTech';
import Mechanism from './components/sections/Mechanism';
import Evolution from './components/sections/Evolution'; // Evidence
import RecommendedFor from './components/sections/RecommendedFor'; // Targeting
import Navigation from './components/Navigation';
import { Globe } from 'lucide-react';

function App() {
  const [lang, setLang] = useState('en');

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'kr', label: 'Korean' },
    { code: 'jp', label: 'Japanese' },
    { code: 'th', label: 'Thai' },
    { code: 'vn', label: 'Vietnamese' },
    { code: 'ar', label: 'Arabic' }
  ];

  return (
    <div className="App w-full min-h-screen bg-[#1a1a1a]">
      {/* Navigation Menu */}
      <Navigation />

      {/* Language Selector - Moved to Left */}
      <div style={{
        position: 'fixed',
        top: '30px',
        left: '30px', /* Changed from right to left */
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        padding: '8px 16px',
        borderRadius: '30px',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
        <Globe size={14} color="#E0E0E0" style={{ marginRight: '8px' }} />
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          style={{
            border: 'none',
            background: 'transparent',
            fontSize: '0.8rem',
            color: '#E0E0E0',
            cursor: 'pointer',
            outline: 'none',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-body)',
            fontWeight: 500
          }}
        >
          {languages.map(l => (
            <option key={l.code} value={l.code} style={{ color: 'black' }}>{l.label}</option>
          ))}
        </select>
      </div>

      <main>
        <Hero lang={lang} />
        <ProblemSolution lang={lang} />

        <div id="technology">
          <CoreTech lang={lang} />
        </div>

        <Mechanism lang={lang} />

        {/* Evolution = Data Validation */}
        <div id="evolution">
          <Evolution lang={lang} />
        </div>

        {/* RecommendedFor = Indication */}
        <div id="indication">
          <RecommendedFor lang={lang} />
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="py-10 text-center text-xs text-gray-600 border-t border-gray-900">
        <p>&copy; 2026 SPEETIQUEL RED. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
