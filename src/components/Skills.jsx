import React from 'react';
import { coreCompetencies } from '../data/portfolioData';
import { CheckCircle2, ShieldCheck, HeartHandshake, Stethoscope } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-slate-800/80 bg-[#070b13]/60 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <Stethoscope className="w-4 h-4" />
            <span>Clinical Competencies</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Core Healthcare Knowledge & Capabilities
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 font-mono">
            Directly aligned with Ontario Personal Support Worker clinical practice standards and LTC requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {coreCompetencies.map((comp, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all space-y-2 group"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform"></span>
                <h3 className="font-bold text-white text-sm font-mono group-hover:text-emerald-300 transition-colors">
                  {comp.title}
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed pl-4 border-l border-slate-800/80">
                {comp.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
