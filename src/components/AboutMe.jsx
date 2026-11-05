import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { HeartHandshake, ShieldCheck, UserCheck, Stethoscope, GraduationCap, Award, Building2, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AboutMe() {
  return (
    <section id="about" className="py-20 border-t border-slate-800/80 bg-[#070b13]/60 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5 font-semibold">
            <UserCheck className="w-4 h-4" />
            <span>Professional Profile</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            About Smriti Dahal, PSW
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Dedicated Personal Support Worker specializing in Long-Term Care, dementia support, and restorative resident mobility.
          </p>
        </div>

        {/* Rich Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          
          {/* Card 1: Active LTC Practice */}
          <div className="p-5 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-emerald-500/50 transition-all shadow-lg hover:shadow-emerald-950/20 group">
            <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800/80 flex items-center justify-center text-emerald-400 mb-3 group-hover:scale-110 transition-transform">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">Clinical Facility</div>
            <h3 className="font-bold text-white text-base mt-0.5">Victoria Manor LTC</h3>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Providing person-centred daily care, hygiene, nutrition support, and mechanical lift transfers for 166 residents across Lindsay & Kawartha Lakes.
            </p>
            <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-emerald-300">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Active Staff Member</span>
            </div>
          </div>

          {/* Card 2: Academic Excellence */}
          <div className="p-5 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-teal-500/50 transition-all shadow-lg hover:shadow-teal-950/20 group">
            <div className="w-10 h-10 rounded-xl bg-teal-950 border border-teal-800/80 flex items-center justify-center text-teal-400 mb-3 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="text-[10px] uppercase font-bold text-teal-400 tracking-wider">Academic Honours</div>
            <h3 className="font-bold text-white text-base mt-0.5">Fleming College</h3>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Graduated with a stellar <strong className="text-white">3.737 GPA</strong>, earning the distinguished <strong className="text-white">Academic Excellence Award</strong> on the President's Honour Roll.
            </p>
            <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-teal-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Top Academic Standing</span>
            </div>
          </div>

          {/* Card 3: Dementia & BSO Care */}
          <div className="p-5 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-cyan-500/50 transition-all shadow-lg hover:shadow-cyan-950/20 group">
            <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-800/80 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-110 transition-transform">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider">Specialized Care</div>
            <h3 className="font-bold text-white text-base mt-0.5">Dementia & BSO-DOS</h3>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Certified in Gentle Persuasive Approaches (GPA 4E) for responsive behaviors, redirection techniques, and dementia observation charting.
            </p>
            <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-cyan-300">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>AGE Certified</span>
            </div>
          </div>

          {/* Card 4: Safety & Analytical Discipline */}
          <div className="p-5 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-amber-500/50 transition-all shadow-lg hover:shadow-amber-950/20 group">
            <div className="w-10 h-10 rounded-xl bg-amber-950 border border-amber-800/80 flex items-center justify-center text-amber-400 mb-3 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">Dual Discipline</div>
            <h3 className="font-bold text-white text-base mt-0.5">B.Sc. Foundation</h3>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Bachelor's in Environmental Science enhances analytical documentation discipline, strict IPC infection control, and zero-error medication safety.
            </p>
            <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-amber-300">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Sanitation & IPC Mastery</span>
            </div>
          </div>

        </div>

        {/* Person-Centred Philosophy Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-teal-950/30 to-slate-900/60 border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Resident Dignity & Autonomy First</h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Every resident is supported with compassion, personal privacy, and encouragement of individual independence.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition text-center shrink-0 cursor-pointer shadow-md"
          >
            Connect With Smriti
          </a>
        </div>

      </div>
    </section>
  );
}
