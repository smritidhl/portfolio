import React from 'react';
import { experience } from '../data/portfolioData';
import { Briefcase, Building2, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <Briefcase className="w-4 h-4" />
            <span>Healthcare & Professional Career</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Relevant Clinical & Work Experience
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 font-mono">
            Proven track record in Long-Term Care (LTC), clinical field placements, patient dignity preservation, and multidisciplinary healthcare.
          </p>
        </div>

        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-emerald-500/30 transition-all space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-white">{exp.role}</h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-800">
                      {exp.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mt-1">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{exp.facility}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-teal-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {exp.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="w-4 h-4 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800/60 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3 h-3" />
                    </span>
                    <span className="leading-relaxed">{h}</span>
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
