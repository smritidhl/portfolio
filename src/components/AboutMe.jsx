import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { HeartHandshake, ShieldCheck, UserCheck, Stethoscope, GraduationCap, Award } from 'lucide-react';

export default function AboutMe() {
  return (
    <section id="about" className="py-20 border-t border-slate-800/80 bg-[#070b13]/60 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <UserCheck className="w-4 h-4" />
            <span>Professional Profile</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            About Smriti Dahal, PSW
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <p>
              {personalInfo.objective}
            </p>
            <p>
              Educated at <strong>Sir Sandford Fleming College</strong>, graduating with a <strong>3.737 GPA</strong> and earning the distinguished <strong>Academic Excellence Award</strong>. In addition to healthcare credentials, holding a Bachelor's in Environmental Science from Tribhuvan University enhances my analytical problem-solving, meticulous documentation discipline, and adherence to public health sanitation protocols.
            </p>
            <p>
              Currently serving residents at <strong>Victoria Manor</strong> in Lindsay, Canada, delivering person-centred support, safe mechanical transfers, vital sign monitoring, and BSO-DOS dementia behavioral charting in continuous collaboration with charge nurses and allied health practitioners.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <HeartHandshake className="w-5 h-5 text-emerald-400 mb-2" />
              <div className="font-bold text-white text-xs mb-1">Dignity & Privacy</div>
              <div className="text-[11px] text-slate-400 leading-tight">Prioritizing resident independence, personal choices, and privacy at all times.</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <ShieldCheck className="w-5 h-5 text-teal-400 mb-2" />
              <div className="font-bold text-white text-xs mb-1">Safe Transfers</div>
              <div className="text-[11px] text-slate-400 leading-tight">Mastery of Hoyer, sit-to-stand, and zero-injury transfer protocols.</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <Award className="w-5 h-5 text-amber-400 mb-2" />
              <div className="font-bold text-white text-xs mb-1">Academic Honors</div>
              <div className="text-[11px] text-slate-400 leading-tight">Academic Excellence Award recipient from Fleming College.</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <Stethoscope className="w-5 h-5 text-cyan-400 mb-2" />
              <div className="font-bold text-white text-xs mb-1">Clinical Vigilance</div>
              <div className="text-[11px] text-slate-400 leading-tight">Prompt observation and BSO-DOS charting of behavioral & vital status changes.</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
