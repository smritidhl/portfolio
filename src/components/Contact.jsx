import React, { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { Mail, MapPin, Copy, ExternalLink, CheckCircle2 } from "lucide-react";
import { LinkedinIcon } from "./SocialIcons";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-800/80 bg-[#070b13]/60 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-3xl border border-slate-800 bg-slate-900/70 p-8 sm:p-12 shadow-2xl relative overflow-hidden backdrop-blur-md">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="text-xs text-emerald-400 uppercase tracking-wider mb-1 font-semibold">Connect &amp; Inquire</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Get in Touch</h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
                  Open for opportunities in Long-Term Care (LTC) facilities, sub-acute rehabilitation, and healthcare staffing across Lindsay &amp; Kawartha Lakes, Ontario.
                </p>
              </div>
              <div className="space-y-3.5 text-xs">
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-slate-200">
                    <Mail className="w-4 h-4 text-emerald-400" />
                    <span>{personalInfo.email}</span>
                  </div>
                  <button onClick={handleCopyEmail} className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer" title="Copy Email">
                    {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center gap-2.5 text-slate-200">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>{personalInfo.location}</span>
                </div>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between text-slate-200 hover:text-white hover:border-emerald-600/50 transition group">
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-emerald-400" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition" />
                </a>
              </div>
              <div className="pt-2">
                <div className="text-[11px] text-slate-400 mb-2">Or compose via webmail:</div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <a href={"https://mail.google.com/mail/?view=cm&fs=1&to=" + personalInfo.email} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-300 hover:text-white hover:border-red-500/40 transition">
                    <span className="text-red-400 font-bold">G</span> Open in Gmail
                  </a>
                  <a href={"https://outlook.live.com/mail/0/deeplink/compose?to=" + personalInfo.email} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500/40 transition">
                    <span className="text-blue-400 font-bold">O</span> Open in Outlook
                  </a>
                </div>
              </div>
            </div>

            {/* Right: FormSubmit Standard POST Form */}
            <div className="lg:col-span-7">
              <form action="https://formsubmit.co/smritidahal70@gmail.com" method="POST" className="space-y-3.5 text-xs">
                <input type="hidden" name="_subject" value="New Portfolio Inquiry - Smriti Dahal PSW" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://smritidahal.pages.dev/#contact" />
                <input type="text" name="_honey" style={{ display: "none" }} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 text-[10px] uppercase mb-1 font-semibold">Your Name / Facility</label>
                    <input type="text" name="name" placeholder="e.g. Director of Care / Nurse Manager" required className="w-full p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white focus:outline-none focus:border-emerald-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-[10px] uppercase mb-1 font-semibold">Your Email</label>
                    <input type="email" name="email" placeholder="e.g. care@facility.ca" required className="w-full p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white focus:outline-none focus:border-emerald-500 transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 text-[10px] uppercase mb-1 font-semibold">Inquiry Purpose</label>
                  <select name="inquiry_purpose" className="w-full p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors">
                    <option>Long-Term Care Facility Staffing</option>
                    <option>Sub-Acute / Hospital Rehabilitation Placement</option>
                    <option>Community Healthcare Coordination</option>
                    <option>General Professional Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 text-[10px] uppercase mb-1 font-semibold">Subject</label>
                  <input type="text" name="subject" placeholder="e.g. PSW Opportunity / Schedule Inquiry" required className="w-full p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white focus:outline-none focus:border-emerald-500 transition-colors" />
                </div>

                <div>
                  <label className="block text-slate-400 text-[10px] uppercase mb-1 font-semibold">Message</label>
                  <textarea name="message" rows="4" placeholder="Write your message here regarding shift schedules, facility requirements, or interview requests..." required className="w-full p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none"></textarea>
                </div>

                <button type="submit" className="w-full py-3.5 bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 text-white text-xs font-bold rounded-xl transition shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span>Send Direct Message</span>
                </button>

                <p className="text-center text-[10px] text-slate-500">
                  Dispatched securely via FormSubmit directly to email inbox
                </p>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
