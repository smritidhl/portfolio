import React from 'react';
import { personalInfo, stats } from '../data/portfolioData';
import ClinicalMonitor from './ClinicalMonitor';
import { ArrowRight, Download, FileText, MapPin, Heart, Shield, CheckCircle, Award } from 'lucide-react';

export default function Hero({ onOpenResume }) {
  return (
    <section id="home" className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-emerald-600/10 via-teal-600/10 to-transparent blur-[140px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-mono text-emerald-400">Certified PSW</span>
              <span className="text-slate-600">•</span>
              <span className="text-teal-300">CPR/AED HCP Certified</span>
              <span className="text-slate-600">•</span>
              <span className="text-cyan-300">Ontario College Diploma</span>
            </div>

            {/* Headline */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-slate-200 tracking-tight">
                {personalInfo.headline}
              </p>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
              {personalInfo.subheadline} Experienced across Long-Term Care (LTC), sub-acute recovery, and community healthcare with an emphasis on patient safety, Gentle Persuasive Approaches (GPA), and holistic comfort.
            </p>

            {/* Location & Clearance */}
            <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <MapPin className="w-3.5 h-3.5" />
                <span>{personalInfo.location}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5 text-slate-300">
                <Shield className="w-3.5 h-3.5 text-teal-400" />
                <span>Vulnerable Sector Cleared</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#experience"
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 rounded-xl shadow-lg shadow-emerald-950/40 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>View Clinical Experience</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#credentials"
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-emerald-400/50 rounded-xl transition-all flex items-center gap-2 group cursor-pointer"
              >
                <Award className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>View Credentials</span>
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="px-3.5 py-2.5 text-xs font-mono text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 rounded-xl transition-colors cursor-pointer"
              >
                Preview CV
              </button>
            </div>

            {/* 4 Stats Grid */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-emerald-500/30 transition-all"
                >
                  <div className="text-base font-extrabold font-mono text-white mb-0.5">
                    {s.value}
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono block leading-tight">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Hero Column: Clinical Monitor Component */}
          <div className="lg:col-span-6 w-full">
            <ClinicalMonitor />
          </div>

        </div>
      </div>
    </section>
  );
}
