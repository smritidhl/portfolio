import React from "react";
import { X, Download, ExternalLink, FileText } from "lucide-react";

export default function ResumeModal({ onClose }) {
  const resumeUrl = "/assets/Smriti-Dahal-PSW-Resume.pdf";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-5xl h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-[#070b13]">
          <div className="flex items-center gap-2.5 text-xs text-white">
            <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-700/60 flex items-center justify-center text-emerald-400 shadow-sm">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-bold text-white text-xs sm:text-sm leading-tight">
                Smriti Dahal — Curriculum Vitae
              </span>
              <span className="text-[10px] text-emerald-400 font-mono block">
                Official 2-Page Clinical PSW Resume (PDF)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={resumeUrl}
              download="Smriti-Dahal-PSW-Resume.pdf"
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-emerald-950/50 transition cursor-pointer"
              title="Download Official PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium items-center gap-1.5 transition"
              title="Open full PDF in a new browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in New Tab</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800 hover:bg-rose-950 hover:text-rose-300 text-slate-400 transition cursor-pointer"
              title="Close Preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Clean PDF Document Embed — Exactly 2 Pages, No Broken Layout */}
        <div className="flex-1 w-full h-full bg-slate-950 relative overflow-hidden flex flex-col">
          <object
            data={`${resumeUrl}#toolbar=0&navpanes=0&view=FitH`}
            type="application/pdf"
            className="w-full h-full flex-1"
          >
            {/* Fallback iframe */}
            <iframe
              src={`${resumeUrl}#toolbar=0&navpanes=0&view=FitH`}
              title="Smriti Dahal Resume Preview"
              className="w-full h-full flex-1 border-0"
            >
              <div className="p-8 text-center text-slate-300 space-y-3 flex flex-col items-center justify-center h-full">
                <FileText className="w-10 h-10 text-emerald-400 mb-2" />
                <p className="text-sm">Smriti Dahal — 2-Page Official Resume</p>
                <a
                  href={resumeUrl}
                  download="Smriti-Dahal-PSW-Resume.pdf"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume PDF Directly</span>
                </a>
              </div>
            </iframe>
          </object>
        </div>

        {/* Bottom Status Strip */}
        <div className="px-5 py-2.5 border-t border-slate-800 bg-[#070b13] flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Verified 2-Page Document</span>
          </span>
          <span className="text-slate-500 font-mono">
            Sir Sandford Fleming College • Victoria Manor LTC
          </span>
        </div>

      </div>
    </div>
  );
}
