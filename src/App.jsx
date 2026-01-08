import React, { useState } from 'react';
import Hero from './components/sections/Hero';
import ProblemSolution from './components/sections/ProblemSolution'; // Philosophy
import CoreTech from './components/sections/CoreTech';
import Mechanism from './components/sections/Mechanism';
import Evolution from './components/sections/Evolution'; // Evidence
import RecommendedFor from './components/sections/RecommendedFor'; // Targeting
import Navigation from './components/Navigation';
import Footer from './components/sections/Footer';
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
      {/* Language Selector - Moved to Left */}
      <div className="fixed top-4 left-4 md:top-8 md:left-8 z-[1000] flex items-center bg-white/5 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10">
        <Globe size={14} className="text-[#E0E0E0] mr-2" />
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="bg-transparent border-none text-[0.7rem] md:text-sm text-[#E0E0E0] cursor-pointer outline-none uppercase font-body font-medium"
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

      {/* Footer */}
      <Footer lang={lang} />
    </div>
  );
}

export default App;
