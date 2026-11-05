import React from 'react';
import { personalInfo, experience, clinicalSkills, certifications } from '../data/portfolioData';
import { X, Printer, Download, Award, Briefcase, GraduationCap } from 'lucide-react';

export default function ResumeModal({ onClose }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#070b13]">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <GraduationCap className="w-4 h-4" />
            <span>Curriculum Vitae Preview</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition text-xs font-mono flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-rose-950 text-slate-400 hover:text-rose-300 transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-200 text-xs">
          {/* Header */}
          <div className="border-b border-slate-800 pb-4 text-center space-y-1">
            <h1 className="text-2xl font-bold text-white">{personalInfo.name}</h1>
            <div className="text-emerald-400 font-mono text-xs">{personalInfo.title}</div>
            <div className="text-slate-400 text-[11px] font-mono">
              {personalInfo.location} • {personalInfo.phone} • {personalInfo.email}
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-1">
            <div className="font-bold text-emerald-400 font-mono uppercase tracking-wider text-[11px]">Professional Summary</div>
            <p className="text-slate-300 leading-relaxed">{personalInfo.aboutBio}</p>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <div className="font-bold text-emerald-400 font-mono uppercase tracking-wider text-[11px]">Clinical Work Experience</div>
            {experience.map((exp, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between font-bold text-white">
                  <span>{exp.role} — {exp.organization}</span>
                  <span className="text-slate-400 font-mono">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside text-slate-300 space-y-0.5">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education & Certs */}
          <div className="space-y-2">
            <div className="font-bold text-emerald-400 font-mono uppercase tracking-wider text-[11px]">Education & Certifications</div>
            <div className="grid grid-cols-2 gap-2 text-slate-300">
              {certifications.map((c, idx) => (
                <div key={idx} className="border border-slate-800 p-2 rounded bg-slate-950/50">
                  <div className="font-bold text-white">{c.title}</div>
                  <div className="text-[10px] text-slate-400 font-mono">{c.issuer} ({c.year})</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
