import React, { useState } from 'react';
import { certificates } from '../data/portfolioData';
import { Award, ShieldCheck, CheckCircle2, ExternalLink, Eye, Download, GraduationCap, X, Calendar, Building2, Sparkles, HeartPulse, FileText } from 'lucide-react';

export default function EducationCertifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-20 border-t border-slate-800/80 bg-[#070b13]/80 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-semibold text-emerald-400 mb-3 shadow-sm">
            <Award className="w-3.5 h-3.5" />
            <span>Official Healthcare Licences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & Academic Credentials
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Every credential is active, verified, and compliant with Ontario Ministry of Health and Long-Term Care standards.
          </p>
        </div>

        {/* Visual Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

          {/* Card 1: Canadian Red Cross First Aid & CPR Level C */}
          <div className="rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-red-500/50 p-4 transition-all duration-300 shadow-xl hover:shadow-red-950/30 flex flex-col justify-between group">
            <div className="space-y-3">
              {/* Certificate Visual Preview Canvas */}
              <div className="relative rounded-xl overflow-hidden bg-white text-slate-900 p-4 aspect-[16/10] flex flex-col justify-between shadow-md border border-slate-200">
                <div className="flex items-center justify-between border-b border-red-600/30 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-red-600 flex items-center justify-center text-white font-black text-base shadow-sm">
                      +
                    </div>
                    <div>
                      <div className="font-extrabold text-[11px] text-red-700 leading-none">CANADIAN RED CROSS</div>
                      <div className="text-[8px] text-slate-500">Croix-Rouge canadienne</div>
                    </div>
                  </div>
                  <span className="text-[8px] bg-red-100 text-red-800 font-bold px-2 py-0.5 rounded-full border border-red-200">
                    Level C (BL)
                  </span>
                </div>

                <div className="my-auto py-1 text-center">
                  <div className="text-[9px] text-slate-500 font-semibold uppercase tracking-wider">Standard First Aid & CPR/AED</div>
                  <div className="text-sm font-extrabold text-slate-900 mt-0.5">Smriti Dahal</div>
                  <div className="text-[9px] text-slate-600">CSA Std. Z1210-17 – Intermediate</div>
                </div>

                <div className="flex items-center justify-between border-t border-slate-200 pt-1.5 text-[9px] text-slate-600">
                  <span>Cert #: <strong className="text-slate-900">105427452</strong></span>
                  <span className="text-emerald-700 font-bold">Valid to: 2027-09-29</span>
                </div>
              </div>

              {/* Card Text Info */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-red-400">Canadian Red Cross</span>
                  <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Active</span>
                  </span>
                </div>
                <h3 className="font-bold text-white text-sm">Standard First Aid & CPR/AED Level C</h3>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Adult, child, and infant CPR with automated external defibrillator (AED) operation and emergency airway rescue.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center gap-2 mt-4">
              <button
                onClick={() => setSelectedCert(certificates[0])}
                className="flex-1 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-red-400" />
                <span>Inspect Dossier</span>
              </button>
              <a
                href={certificates[0].pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                title="Open PDF"
              >
                <Download className="w-3.5 h-3.5 text-red-400" />
              </a>
            </div>
          </div>

          {/* Card 2: WHMIS 2015 For Workers */}
          <div className="rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 p-4 transition-all duration-300 shadow-xl hover:shadow-blue-950/30 flex flex-col justify-between group">
            <div className="space-y-3">
              {/* WHMIS Real Certificate Thumbnail */}
              <div className="relative rounded-xl overflow-hidden bg-slate-950 aspect-[16/10] border border-slate-700 group-hover:border-blue-500/40 transition">
                <img
                  src="/assets/whmis-certificate.jpg"
                  alt="WHMIS 2015 for Workers - Smriti Dahal"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[10px]">
                  <span className="font-bold text-white bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800">
                    WSPS Certified
                  </span>
                  <span className="text-blue-300 font-semibold bg-slate-900/80 px-1.5 py-0.5 rounded">
                    Mar 02, 2024
                  </span>
                </div>
              </div>

              {/* Card Text Info */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-400">Workplace Safety & Prevention Services</span>
                  <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </span>
                </div>
                <h3 className="font-bold text-white text-sm">WHMIS 2015 for Workers</h3>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  GHS hazard pictograms, safety data sheets (SDS), hazardous medical chemical handling, and PPE compliance.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center gap-2 mt-4">
              <button
                onClick={() => setSelectedCert(certificates[1])}
                className="flex-1 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-blue-400" />
                <span>Inspect Certificate</span>
              </button>
              <a
                href="/assets/whmis-certificate.jpg"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                title="View Full Image"
              >
                <Download className="w-3.5 h-3.5 text-blue-400" />
              </a>
            </div>
          </div>

          {/* Card 3: GPA Gentle Persuasive Approaches in Dementia Care */}
          <div className="rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-teal-500/50 p-4 transition-all duration-300 shadow-xl hover:shadow-teal-950/30 flex flex-col justify-between group">
            <div className="space-y-3">
              {/* GPA Certificate Visual Canvas */}
              <div className="relative rounded-xl overflow-hidden bg-gradient-to-tr from-[#041d1a] to-[#0a3530] text-white p-4 aspect-[16/10] flex flex-col justify-between border border-teal-500/40 shadow-md">
                <div className="flex items-center justify-between border-b border-teal-500/30 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-teal-300 font-black text-sm tracking-widest">AGE</span>
                    <span className="text-[8px] text-teal-200">Advanced Gerontological Education</span>
                  </div>
                  <span className="text-[8px] bg-teal-950 text-teal-300 font-bold px-2 py-0.5 rounded-full border border-teal-800">
                    GPA Basics 4E
                  </span>
                </div>

                <div className="my-auto py-1 text-center">
                  <div className="text-[9px] text-teal-300 uppercase font-semibold">Gentle Persuasive Approaches</div>
                  <div className="text-sm font-extrabold text-white mt-0.5">Smriti Dahal</div>
                  <div className="text-[9px] text-slate-300">Dementia Responsive Care & De-escalation</div>
                </div>

                <div className="flex items-center justify-between border-t border-teal-500/30 pt-1.5 text-[9px] text-teal-200">
                  <span>Cert #: <strong>0148-6552-1518</strong></span>
                  <span className="text-emerald-300 font-semibold">7.5 Clinical Hours</span>
                </div>
              </div>

              {/* Card Text Info */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-teal-400">Advanced Gerontological Education</span>
                  <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Certified</span>
                  </span>
                </div>
                <h3 className="font-bold text-white text-sm">GPA Basics 4th Edition (Dementia Care)</h3>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Evidence-based behavioural de-escalation, gentle physical self-protective techniques, and BSO responsive care.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center gap-2 mt-4">
              <button
                onClick={() => setSelectedCert(certificates[2])}
                className="flex-1 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-teal-400" />
                <span>Inspect Dossier</span>
              </button>
              <a
                href={certificates[2].pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                title="Open PDF"
              >
                <Download className="w-3.5 h-3.5 text-teal-400" />
              </a>
            </div>
          </div>

          {/* Card 4: Fleming College PSW Diploma */}
          <div className="rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 p-4 transition-all duration-300 shadow-xl hover:shadow-emerald-950/30 flex flex-col justify-between group">
            <div className="space-y-3">
              {/* Graduation Photo Frame */}
              <div className="relative rounded-xl overflow-hidden bg-slate-950 aspect-[16/10] border border-slate-700 group-hover:border-emerald-500/40 transition">
                <img
                  src="/assets/smriti-profile.jpg"
                  alt="Smriti Dahal - Fleming College Graduate"
                  className="w-full h-full object-cover object-[center_35%] group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[10px]">
                  <span className="font-bold text-white bg-emerald-950/90 px-2 py-0.5 rounded border border-emerald-800 flex items-center gap-1">
                    <GraduationCap className="w-3 h-3 text-emerald-400" />
                    Fleming College
                  </span>
                  <span className="text-emerald-300 font-bold bg-slate-900/90 px-2 py-0.5 rounded border border-slate-700">
                    GPA: 3.737
                  </span>
                </div>
              </div>

              {/* Card Text Info */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-400">Sir Sandford Fleming College</span>
                  <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Graduated</span>
                  </span>
                </div>
                <h3 className="font-bold text-white text-sm">Personal Support Worker Diploma</h3>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Comprehensive Ontario curriculum including clinical placements at Victoria Manor LTC and acute care prep.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center gap-2 mt-4">
              <button
                onClick={() => setSelectedCert(certificates[3])}
                className="flex-1 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-emerald-400" />
                <span>View Program Details</span>
              </button>
            </div>
          </div>

          {/* Card 5: Academic Excellence Award & President's Honour Roll */}
          <div className="rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 p-4 transition-all duration-300 shadow-xl hover:shadow-amber-950/30 flex flex-col justify-between group">
            <div className="space-y-3">
              {/* Gold Award Seal Canvas */}
              <div className="relative rounded-xl overflow-hidden bg-gradient-to-tr from-[#1f1906] to-[#3a2f0e] text-amber-100 p-4 aspect-[16/10] flex flex-col justify-between border border-amber-500/40 shadow-md">
                <div className="flex items-center justify-between border-b border-amber-500/30 pb-2">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span className="font-bold text-xs text-amber-300">PRESIDENT'S HONOUR ROLL</span>
                  </div>
                  <span className="text-[8px] bg-amber-950 text-amber-300 font-bold px-2 py-0.5 rounded-full border border-amber-800">
                    Academic Distinction
                  </span>
                </div>

                <div className="my-auto py-1 text-center">
                  <div className="text-[9px] text-amber-300 uppercase font-semibold">Sir Sandford Fleming College</div>
                  <div className="text-sm font-extrabold text-white mt-0.5">Smriti Dahal</div>
                  <div className="text-xs text-amber-300 font-bold mt-1">Grade Point Average: 3.737 / 4.0</div>
                </div>

                <div className="flex items-center justify-between border-t border-amber-500/30 pt-1.5 text-[9px] text-amber-300">
                  <span>Award: <strong>Academic Excellence</strong></span>
                  <span className="text-emerald-400 font-bold">Top Quartile</span>
                </div>
              </div>

              {/* Card Text Info */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400">Academic Distinction</span>
                  <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Conferred</span>
                  </span>
                </div>
                <h3 className="font-bold text-white text-sm">President's Honour Roll & Excellence Award</h3>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Honoured for outstanding academic standing, rigorous clinical documentation, and high pharmacology scores.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center gap-2 mt-4">
              <button
                onClick={() => setSelectedCert(certificates[4])}
                className="flex-1 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-amber-400" />
                <span>Inspect Distinction</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Inspection Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-[#070b13]">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Certificate Verification Dossier</span>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-4 text-xs">
              <div className="border-b border-slate-800 pb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-800">
                  {selectedCert.badge}
                </span>
                <h2 className="text-xl font-bold text-white mt-1.5">{selectedCert.title}</h2>
                <div className="text-slate-400 text-xs mt-0.5">{selectedCert.issuer}</div>
              </div>

              {/* Certificate Image if available */}
              {selectedCert.imageUrl && (
                <div className="rounded-xl overflow-hidden border border-slate-800 bg-black/60 max-h-72 flex items-center justify-center">
                  <img
                    src={selectedCert.imageUrl}
                    alt={selectedCert.title}
                    className="max-h-72 w-auto object-contain"
                  />
                </div>
              )}

              {/* Metadata */}
              <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <div>
                  <span className="text-slate-500 block text-[10px] font-semibold">Certificate Number:</span>
                  <span className="text-white font-bold">{selectedCert.certNumber || 'Verified Official Record'}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] font-semibold">Curriculum / Standard:</span>
                  <span className="text-emerald-300 font-medium">{selectedCert.standard}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] font-semibold">Date of Issue:</span>
                  <span className="text-white">{selectedCert.issueDate}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] font-semibold">Validity / Expiry:</span>
                  <span className="text-teal-300 font-semibold">{selectedCert.expiryDate || 'Continuous Active'}</span>
                </div>
              </div>

              {/* Competencies */}
              <div className="space-y-1.5">
                <span className="text-slate-300 font-bold uppercase text-[10px]">Competencies & Training Standards:</span>
                <ul className="space-y-1 text-slate-300">
                  {selectedCert.topics.map((t, i) => (
                    <li key={i} className="flex items-start gap-2 bg-slate-950/40 p-2 rounded-lg border border-slate-800/60">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center gap-3">
                {selectedCert.pdfUrl && (
                  <a
                    href={selectedCert.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold flex items-center gap-1.5 transition text-xs shadow-md"
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
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center gap-1.5 transition text-xs"
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
