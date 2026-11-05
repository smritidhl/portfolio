import React from 'react';
import { certifications } from '../data/portfolioData';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function EducationCertifications() {
  return (
    <section id="credentials" className="py-16 border-t border-slate-800/80 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">
            Credentials & Compliance
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Certifications & Healthcare Diplomas
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((c, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 transition-all space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
                  {c.badge}
                </span>
                <span className="text-[11px] font-mono text-slate-400">{c.year}</span>
              </div>
              <div className="font-bold text-white text-sm leading-snug">{c.title}</div>
              <div className="text-xs text-slate-400 font-mono">{c.issuer}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
