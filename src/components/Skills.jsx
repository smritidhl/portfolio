import React from 'react';
import { clinicalSkills } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-16 border-t border-slate-800/80 bg-[#070b13]/60 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">
            Clinical Competencies
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Core Healthcare Skills & Care Standards
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {clinicalSkills.map((cat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 hover:border-emerald-500/30 transition-all"
            >
              <h3 className="text-xs font-mono font-bold text-emerald-400 border-b border-slate-800 pb-2">
                {cat.category}
              </h3>
              <div className="space-y-2">
                {cat.skills.map((s, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-2 rounded-lg bg-slate-800/40 border border-slate-800 text-xs text-slate-300 font-mono"
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
