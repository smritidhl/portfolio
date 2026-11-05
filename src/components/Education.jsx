import React from "react";
import { education } from "../data/portfolioData";
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 border-t border-slate-800/80 bg-[#070b13]/70 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-semibold text-emerald-400 mb-3 shadow-sm">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &amp; Academic Honors
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Formal post-secondary academic credentials from Sir Sandford Fleming College and Tribhuvan University.
          </p>
        </div>

        {/* Education Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {education.map((edu, idx) => {
            const isPSW = idx === 0;
            return (
              <div
                key={idx}
                className={`rounded-2xl bg-slate-900/85 border p-6 flex flex-col justify-between transition-all duration-300 shadow-xl relative overflow-hidden group ${
                  isPSW
                    ? "border-emerald-500/40 hover:border-emerald-400 shadow-emerald-950/20"
                    : "border-slate-800 hover:border-slate-700 shadow-slate-950/30"
                }`}
              >
                {/* Accent ambient glow for PSW */}
                {isPSW && (
                  <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>
                )}

                <div className="space-y-4">
                  {/* Top Bar with Period & Badges */}
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-[11px] font-semibold text-slate-300">
                      <Calendar className="w-3 h-3 text-emerald-400" />
                      {edu.period.replace("â€“", "–").replace("â€”", "—")}
                    </span>

                    {isPSW && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-950/80 border border-amber-500/40 text-[10px] font-bold text-amber-300">
                        <Award className="w-3 h-3 text-amber-400" />
                        Dean's List (GPA 3.74)
                      </span>
                    )}
                  </div>

                  {/* Degree Title & Institution */}
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {edu.program.replace("â€™", "'")}
                    </h3>
                    <div className="text-xs font-semibold text-emerald-400 mt-1 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{edu.institution}</span>
                    </div>
                    {edu.campus && (
                      <div className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        <span>{edu.campus}</span>
                      </div>
                    )}
                  </div>

                  {/* Honors Banner */}
                  {edu.honors && (
                    <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-[11px] text-emerald-300 font-medium flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{edu.honors.replace(/â€¢/g, "•").replace(/â€“/g, "–")}</span>
                    </div>
                  )}

                  {/* Program Highlights */}
                  {edu.details && edu.details.length > 0 && (
                    <div className="pt-2 border-t border-slate-800/70">
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-2">
                        Key Competencies &amp; Coursework
                      </span>
                      <ul className="space-y-2 text-xs text-slate-300">
                        {edu.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Footer badge */}
                <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400/90 font-medium">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    Verified Official Credential
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    {isPSW ? "MOH / LTC Approved" : "Academic Record"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
