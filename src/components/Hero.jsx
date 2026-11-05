import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowRight, Award, FileText, MapPin, ShieldCheck, HeartPulse, Sparkles, Building2, GraduationCap } from 'lucide-react';

export default function Hero({ onOpenResume }) {
  return (
    <section id="home" className="relative pt-24 pb-14 lg:pt-32 lg:pb-20 overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-emerald-600/10 via-teal-600/10 to-transparent blur-[140px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Bio, Credentials & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Pill / Status Tag with Dean's List Highlight */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-emerald-400 font-bold">Personal Support Worker</span>
              <span className="text-slate-600">•</span>
              <span className="text-amber-300 font-semibold flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" /> Dean's List Honoree
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-cyan-300">Fleming College (GPA: 3.737)</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="text-lg sm:text-2xl font-bold text-slate-200 tracking-tight">
                {personalInfo.tagline}
              </p>
            </div>

            {/* Resume Objective */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              {personalInfo.objective}
            </p>

            {/* Location & Academic Distinction Badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <MapPin className="w-4 h-4" />
                <span>{personalInfo.location}</span>
              </div>
              <span className="text-slate-700">•</span>
              <div className="flex items-center gap-1.5 text-teal-300">
                <ShieldCheck className="w-4 h-4" />
                <span>Vulnerable Sector Checked</span>
              </div>
              <span className="text-slate-700">•</span>
              <div className="flex items-center gap-1.5 text-amber-300 font-semibold bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/80">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Dean's List & Academic Excellence Award</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#experience"
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 rounded-xl shadow-lg shadow-emerald-950/40 hover:shadow-emerald-500/25 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Clinical Experience</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#certificates"
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-emerald-400/50 rounded-xl transition-all flex items-center gap-2 group cursor-pointer"
              >
                <Award className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>View All Certificates</span>
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-emerald-400" />
                <span>View Resume</span>
              </button>
            </div>

            {/* Metric Highlights Grid with Dean's List Featured */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/30 transition-all">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <Building2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-base font-extrabold text-white">166+</span>
                </div>
                <span className="text-[11px] text-slate-400 block leading-tight">Residents Supported</span>
              </div>

              {/* Dean's List Highlight Metric Card */}
              <div className="p-3 rounded-xl bg-slate-900/80 border border-amber-500/40 hover:border-amber-400 transition-all shadow-sm">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <GraduationCap className="w-4 h-4 text-amber-400" />
                  <span className="text-base font-extrabold text-amber-300">Dean's List</span>
                </div>
                <span className="text-[11px] text-slate-300 block leading-tight font-semibold">3.737 GPA • Top Distinction</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/30 transition-all">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span className="text-base font-extrabold text-white">100%</span>
                </div>
                <span className="text-[11px] text-slate-400 block leading-tight">VSC & Safety Cleared</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/30 transition-all">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <HeartPulse className="w-4 h-4 text-emerald-400" />
                  <span className="text-base font-extrabold text-white">CPR-C</span>
                </div>
                <span className="text-[11px] text-slate-400 block leading-tight">Red Cross & GPA Cert</span>
              </div>
            </div>

          </div>

          {/* Right Column: Prominent Portrait Cutout Card with Verified Badges */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-md">
              {/* Glow backdrop */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-700"></div>

              {/* Card Container */}
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#070b13]/95 border border-slate-800/90 p-4 shadow-2xl overflow-hidden backdrop-blur-md">
                
                {/* Photo Frame */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-slate-950 border border-slate-800">
                  <img
                    src={personalInfo.avatar}
                    alt="Smriti Dahal - Fleming College PSW Graduate"
                    className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.04] group-hover:scale-105 transition duration-700"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b13] via-transparent to-transparent opacity-85"></div>

                  {/* Top Floating Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-emerald-500/40 text-[10px] font-bold text-emerald-300 flex items-center gap-1 shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Verified PSW</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-amber-950/90 backdrop-blur-md border border-amber-500/50 text-[10px] font-bold text-amber-300 shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-400" /> Dean's List Honoree
                    </span>
                  </div>

                  {/* Bottom Portrait Info */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-800 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-white">Smriti Dahal</span>
                      <span className="text-[10px] text-emerald-400 font-semibold">Active LTC Practice</span>
                    </div>
                    <div className="text-[11px] text-slate-300">
                      Victoria Manor • Fleming College (Dean's List)
                    </div>
                    <div className="flex items-center gap-2 pt-1 text-[10px] text-slate-400">
                      <span>✓ CPR-C #105427452</span>
                      <span>•</span>
                      <span>✓ GPA #0148-6552-1518</span>
                    </div>
                  </div>
                </div>

                {/* Quick Care Snapshot Bar */}
                <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="text-slate-300">Specialization:</span>
                  <span className="text-emerald-400 font-semibold">Long-Term Care & Dementia</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
