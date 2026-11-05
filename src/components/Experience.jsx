import React from 'react';
import { experience } from '../data/portfolioData';
import { Briefcase, Building2, Calendar, MapPin, CheckCircle2, ChevronRight, Activity } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-semibold text-emerald-400 mb-3 shadow-sm">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Healthcare Clinical History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Relevant Clinical & Healthcare Experience
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Proven track record in Long-Term Care (LTC), clinical field placements, patient dignity preservation, and multidisciplinary healthcare.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 space-y-4 shadow-lg hover:shadow-emerald-950/20 group"
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-950/90 text-emerald-300 border border-emerald-800/80">
                      {exp.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{exp.facility}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/60 border border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-teal-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/60 border border-slate-800">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Highlights Visual Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                {exp.highlights.map((h, hIdx) => (
                  <div
                    key={hIdx}
                    className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/60 hover:border-slate-700/80 transition-colors flex items-start gap-2.5 text-xs text-slate-300"
                  >
                    <span className="w-4 h-4 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800/80 flex items-center justify-center shrink-0 mt-0.5">
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
