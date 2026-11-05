import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { HeartHandshake, ShieldCheck, UserCheck, Stethoscope } from 'lucide-react';

export default function AboutMe() {
  return (
    <section id="about" className="py-16 border-t border-slate-800/80 bg-[#070b13]/60 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-10">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">
            Professional Profile
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Care Philosophy & Healthcare Background
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <p>
              {personalInfo.aboutBio}
            </p>
            <p>
              Trained rigorously under accredited Ontario healthcare curriculum standards, my care methodology is anchored in active listening, empathy, strict safety compliance, and collaborating cohesively with interdisciplinary healthcare teams (Physicians, RPNs, RNs, and Occupational Therapists).
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <HeartHandshake className="w-5 h-5 text-emerald-400 mb-2" />
              <div className="font-bold text-white text-xs mb-1">Dignity First</div>
              <div className="text-[11px] text-slate-400 leading-tight">Every patient is treated with deep respect and personal autonomy.</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <ShieldCheck className="w-5 h-5 text-teal-400 mb-2" />
              <div className="font-bold text-white text-xs mb-1">Zero-Harm Safety</div>
              <div className="text-[11px] text-slate-400 leading-tight">Strict adherence to mechanical lift limits & IPAC infection control.</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <UserCheck className="w-5 h-5 text-cyan-400 mb-2" />
              <div className="font-bold text-white text-xs mb-1">Family Trust</div>
              <div className="text-[11px] text-slate-400 leading-tight">Transparent documentation and empathetic communication with relatives.</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <Stethoscope className="w-5 h-5 text-emerald-400 mb-2" />
              <div className="font-bold text-white text-xs mb-1">Clinical Vigilance</div>
              <div className="text-[11px] text-slate-400 leading-tight">Proactive vitals logging and swift escalation of acute status changes.</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
