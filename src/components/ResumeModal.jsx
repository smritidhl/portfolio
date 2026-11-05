import React from 'react';
import { personalInfo, experience, coreCompetencies, certificates, education } from '../data/portfolioData';
import { X, Printer, Download, Award, Briefcase, GraduationCap, ShieldCheck } from 'lucide-react';

export default function ResumeModal({ onClose }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#070b13]">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <GraduationCap className="w-4 h-4" />
            <span>Curriculum Vitae Preview — Smriti Dahal, PSW</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition text-xs font-mono flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-rose-950 text-slate-400 hover:text-rose-300 transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-200 text-xs font-mono">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-4 text-center space-y-1">
            <h1 className="text-2xl font-bold text-white font-sans">{personalInfo.name}</h1>
            <div className="text-emerald-400 text-xs font-semibold">{personalInfo.title}</div>
            <div className="text-slate-400 text-[11px]">
              {personalInfo.location} • {personalInfo.email} • {personalInfo.linkedin}
            </div>
          </div>

          {/* Career Objective */}
          <div className="space-y-1">
            <div className="font-bold text-emerald-400 uppercase tracking-wider text-[11px]">Career Objective</div>
            <p className="text-slate-300 leading-relaxed font-sans">{personalInfo.objective}</p>
          </div>

          {/* Core Competencies */}
          <div className="space-y-1.5">
            <div className="font-bold text-emerald-400 uppercase tracking-wider text-[11px]">Core Competencies</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-slate-300">
              {coreCompetencies.map((c, idx) => (
                <div key={idx} className="p-1.5 rounded bg-slate-950/60 border border-slate-800/80">
                  • {c.title}
                </div>
              ))}
            </div>
          </div>

          {/* Relevant Experience */}
          <div className="space-y-4">
            <div className="font-bold text-emerald-400 uppercase tracking-wider text-[11px]">Relevant Experience</div>
            {experience.map((exp, idx) => (
              <div key={idx} className="space-y-1 border-l-2 border-slate-800 pl-3">
                <div className="flex justify-between font-bold text-white">
                  <span>{exp.role.toUpperCase()} | {exp.facility.toUpperCase()} | {exp.location.toUpperCase()}</span>
                  <span className="text-emerald-400">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside text-slate-300 space-y-0.5 font-sans">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-3">
            <div className="font-bold text-emerald-400 uppercase tracking-wider text-[11px]">Education</div>
            {education.map((edu, idx) => (
              <div key={idx} className="space-y-0.5 border-l-2 border-slate-800 pl-3">
                <div className="flex justify-between font-bold text-white">
                  <span>{edu.program.toUpperCase()} — {edu.institution.toUpperCase()}</span>
                  <span className="text-slate-400">{edu.period}</span>
                </div>
                {edu.honors && <div className="text-amber-300 text-[10px]">★ {edu.honors} {edu.gpa ? `(GPA: ${edu.gpa})` : ''}</div>}
              </div>
            ))}
          </div>

          {/* Certificates */}
          <div className="space-y-2">
            <div className="font-bold text-emerald-400 uppercase tracking-wider text-[11px]">Certificates & Clearances</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {certificates.map((cert, idx) => (
                <div key={idx} className="p-2 rounded bg-slate-950/70 border border-slate-800 text-[11px]">
                  <div className="font-bold text-white">{cert.title}</div>
                  <div className="text-slate-400 text-[10px]">{cert.issuer} {cert.certNumber ? `(${cert.certNumber})` : ''}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
