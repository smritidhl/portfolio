import React from 'react';
import { coreCompetencies } from '../data/portfolioData';
import { Stethoscope, HeartPulse, ShieldCheck, Activity, Users, Sparkles, Brain, CheckCircle2, Award, Zap } from 'lucide-react';

export default function Skills() {
  const iconList = [
    HeartPulse,
    Brain,
    ShieldCheck,
    Activity,
    Stethoscope,
    ShieldCheck,
    HeartPulse,
    Users,
    Zap,
    ShieldCheck,
    Users,
    Sparkles
  ];

  return (
    <section id="skills" className="py-20 border-t border-slate-800/80 bg-[#070b13]/60 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-semibold text-emerald-400 mb-3 shadow-sm">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Healthcare Competency Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Clinical Skills & Core Competencies
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Practical skills verified across Ontario Long-Term Care and healthcare facility environments.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {coreCompetencies.map((comp, idx) => {
            const IconComponent = iconList[idx % iconList.length];
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900 transition-all duration-300 space-y-3 group shadow-md hover:shadow-emerald-950/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-9 h-9 rounded-xl bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Certified
                    </span>
                  </div>

                  <h3 className="font-bold text-white text-sm group-hover:text-emerald-300 transition-colors">
                    {comp.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mt-2">
                    {comp.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Ontario LTC Standard</span>
                  <span className="text-teal-400 font-semibold">100% Verified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
