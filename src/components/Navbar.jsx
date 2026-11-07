import React from "react";
import { personalInfo } from "../data/portfolioData";
import { FileText, Download } from "lucide-react";

export default function Navbar({ onOpenResume }) {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#070b13]/85 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Navigative Logo / Home Button */}
        <a
          href="#"
          onClick={handleScrollToTop}
          className="flex items-center gap-3 group cursor-pointer select-none transition-transform active:scale-95"
          title="Return to top / Home"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 p-[1.5px] group-hover:shadow-lg group-hover:shadow-emerald-500/25 transition-all duration-300">
            <div className="w-full h-full bg-[#0b0f19] rounded-[9px] flex items-center justify-center font-bold text-sm text-emerald-300 group-hover:text-white group-hover:bg-emerald-950/60 transition-colors">
              PSW
            </div>
          </div>
          <div>
            <span className="text-sm sm:text-base font-bold text-white block leading-tight group-hover:text-emerald-300 transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[11px] text-emerald-400 block leading-none">
              Personal Support Worker
            </span>
          </div>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300">
          <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
          <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
          <a href="#skills" className="hover:text-emerald-400 transition-colors">Competencies</a>
          <a href="#charting" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Live Charting</span>
          </a>
          <a href="#education" className="hover:text-emerald-400 transition-colors">Education</a>
          <a href="#certificates" className="hover:text-emerald-400 transition-colors">Certifications</a>
          <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
        </div>

        {/* Resume Actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenResume}
            className="hidden sm:flex px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 text-slate-300 hover:text-white transition-all items-center gap-1.5 text-xs font-semibold cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-slate-400" />
            <span>Preview</span>
          </button>

          <a
            href="/assets/Smriti-Dahal-PSW-Resume.pdf"
            download="Smriti-Dahal-PSW-Resume.pdf"
            className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white transition-all flex items-center gap-1.5 text-xs font-bold shadow-md shadow-emerald-950/40 cursor-pointer"
            title="Download Official 2-Page Resume PDF"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
