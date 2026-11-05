import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { FileText, Heart, ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#070b13]/85 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 p-[1.5px]">
            <div className="w-full h-full bg-[#0b0f19] rounded-[9px] flex items-center justify-center font-bold text-sm text-emerald-300">
              PSW
            </div>
          </div>
          <div>
            <span className="text-sm sm:text-base font-bold text-white block leading-tight">
              {personalInfo.name}
            </span>
            <span className="text-[11px] text-emerald-400">
              Personal Support Worker
            </span>
          </div>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300">
          <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
          <a href="#experience" className="hover:text-emerald-400 transition-colors">Clinical Experience</a>
          <a href="#skills" className="hover:text-emerald-400 transition-colors">Competencies</a>
          <a href="#charting" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Live Charting</span>
          </a>
          <a href="#certificates" className="hover:text-emerald-400 transition-colors">Certifications</a>
          <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
        </div>

        {/* Resume Modal Trigger */}
        <button
          onClick={onOpenResume}
          className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 text-slate-300 hover:text-white transition-all flex items-center gap-2 text-xs font-semibold group cursor-pointer"
        >
          <FileText className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
          <span>Resume Preview</span>
        </button>

      </div>
    </nav>
  );
}
