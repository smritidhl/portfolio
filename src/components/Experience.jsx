import React from 'react';
import { experience } from '../data/portfolioData';
import { Briefcase, Building2, Calendar, MapPin, Check } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-16 border-t border-slate-800/80 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">
            Clinical Career History
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Healthcare Experience & Facilities
          </h2>
        </div>

        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-emerald-500/30 transition-all space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mt-0.5">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{exp.organization}</span>
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {exp.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="w-4 h-4 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800/60 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
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
