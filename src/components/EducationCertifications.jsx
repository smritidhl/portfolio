import React, { useState } from 'react';
import { certificates, education } from '../data/portfolioData';
import { Award, ShieldCheck, CheckCircle2, ExternalLink, Eye, Download, GraduationCap, X, Calendar, Building2 } from 'lucide-react';

export default function EducationCertifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <Award className="w-4 h-4" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Certifications, Licences & Academic Honors
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 font-mono">
            Every certification is official, verifiable, and compliant with Ontario Ministry of Health and Long-Term Care standards. Click any certificate to inspect details.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 p-5 space-y-4 shadow-lg hover:shadow-emerald-950/20 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                {/* Top Badge & Status */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-800/80">
                    {cert.badge}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{cert.status}</span>
                  </span>
                </div>

                {/* Title & Standard */}
                <div>
                  <h3 className="font-bold text-white text-base leading-snug group-hover:text-emerald-300 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">
                    {cert.issuer}
                  </div>
                </div>

                {/* Meta details */}
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1.5 text-xs font-mono">
                  {cert.certNumber && (
                    <div className="flex justify-between text-slate-400">
                      <span>Cert #:</span>
                      <span className="text-slate-200 font-semibold">{cert.certNumber}</span>
                    </div>
                  )}
                  {cert.issueDate && (
                    <div className="flex justify-between text-slate-400">
                      <span>Issue Date:</span>
                      <span className="text-slate-200">{cert.issueDate}</span>
                    </div>
                  )}
                  {cert.expiryDate && (
                    <div className="flex justify-between text-slate-400">
                      <span>Expiry:</span>
                      <span className="text-teal-300">{cert.expiryDate}</span>
                    </div>
                  )}
                </div>

                {/* Topics covered snippet */}
                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Key Competencies:</div>
                  <ul className="text-xs text-slate-300 space-y-0.5 list-disc list-inside">
                    {cert.topics.slice(0, 3).map((t, idx) => (
                      <li key={idx} className="line-clamp-1">{t}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="flex-1 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono font-semibold transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Inspect Certificate</span>
                </button>
                {cert.pdfUrl && (
                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer"
                    title="Download Official PDF"
                  >
                    <Download className="w-4 h-4 text-emerald-400" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Education Timeline */}
        <div className="mt-16">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-mono text-teal-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Background</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Degrees, Diplomas & Academic Achievements
            </h2>
          </div>

          <div className="space-y-4">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 hover:border-teal-500/30 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div>
                    <h3 className="text-base font-bold text-white">{edu.program}</h3>
                    <div className="text-xs font-mono text-teal-400">{edu.institution} • {edu.campus}</div>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                    {edu.gpa && (
                      <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 font-bold">
                        GPA: {edu.gpa}
                      </span>
                    )}
                    <span className="text-slate-300">{edu.period}</span>
                  </div>
                </div>

                {edu.honors && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-950/60 border border-amber-800/60 text-xs font-mono text-amber-300">
                    <Award className="w-3.5 h-3.5" />
                    <span>{edu.honors}</span>
                  </div>
                )}

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300 pt-1">
                  {edu.details.map((d, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Full Certificate Inspection Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-[#070b13]">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Certificate Verification Dossier</span>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-5 text-xs font-mono">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-800">
                  {selectedCert.badge}
                </span>
                <h2 className="text-lg font-bold text-white mt-2 font-sans">{selectedCert.title}</h2>
                <div className="text-slate-400 text-xs mt-0.5">{selectedCert.issuer}</div>
              </div>

              {/* Certificate Image Preview if available */}
              {selectedCert.imageUrl && (
                <div className="rounded-xl overflow-hidden border border-slate-800 bg-black/60 max-h-72 flex items-center justify-center">
                  <img
                    src={selectedCert.imageUrl}
                    alt={selectedCert.title}
                    className="max-h-72 w-auto object-contain"
                  />
                </div>
              )}

              {/* Metadata Table */}
              <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div>
                  <span className="text-slate-500 block text-[10px]">Certificate Identifier:</span>
                  <span className="text-white font-bold">{selectedCert.certNumber || 'N/A'}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">Standard / Curriculum:</span>
                  <span className="text-emerald-300">{selectedCert.standard}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">Date of Issue:</span>
                  <span className="text-white">{selectedCert.issueDate}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">Expiration Status:</span>
                  <span className="text-teal-300">{selectedCert.expiryDate || 'Continuous Active'}</span>
                </div>
              </div>

              {/* Curriculum Points */}
              <div className="space-y-2">
                <span className="text-slate-400 font-bold uppercase text-[10px]">Covered Healthcare Standards:</span>
                <ul className="space-y-1.5 text-slate-300">
                  {selectedCert.topics.map((t, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-3">
                {selectedCert.pdfUrl && (
                  <a
                    href={selectedCert.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold flex items-center gap-1.5 transition"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>View / Download Official PDF</span>
                  </a>
                )}
                {selectedCert.verificationUrl && (
                  <a
                    href={selectedCert.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center gap-1.5 transition"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Red Cross Verification Portal</span>
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
