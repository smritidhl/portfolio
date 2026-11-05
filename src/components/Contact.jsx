import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, ExternalLink } from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    facilityOrType: 'Long-Term Care Facility',
    subject: '',
    message: ''
  });

  const [copied, setCopied] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    const finalSubject = encodeURIComponent(
      `[Healthcare Placement / Inquiry] ${formData.subject || formData.facilityOrType} - ${formData.senderName}`
    );
    const finalBody = encodeURIComponent(
      `Name: ${formData.senderName}\nEmail: ${formData.senderEmail}\nInquiry Type: ${formData.facilityOrType}\n\nMessage:\n${formData.message}\n\n-- Sent via Smriti Dahal PSW Portfolio`
    );

    // Trigger user's mail client directly
    window.location.href = `mailto:${personalInfo.email}?subject=${finalSubject}&body=${finalBody}`;
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 5000);
  };

  const openWebmail = (service) => {
    const finalSubject = encodeURIComponent(
      `[Healthcare Placement / Inquiry] ${formData.subject || formData.facilityOrType} - ${formData.senderName || 'Inquirer'}`
    );
    const finalBody = encodeURIComponent(
      `Name: ${formData.senderName}\nEmail: ${formData.senderEmail}\n\nMessage:\n${formData.message}`
    );

    if (service === 'gmail') {
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=${finalSubject}&body=${finalBody}`, '_blank');
    } else if (service === 'outlook') {
      window.open(`https://outlook.live.com/mail/0/deeplink/compose?to=${personalInfo.email}&subject=${finalSubject}&body=${finalBody}`, '_blank');
    }
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-800/80 bg-[#070b13]/60 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto rounded-3xl border border-slate-800 bg-slate-900/70 p-8 sm:p-12 shadow-2xl relative overflow-hidden backdrop-blur-md">
          {/* Ambient glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Contact Bio & Links */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">
                  Connect & Inquire
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Get in Touch
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
                  Open for opportunities in Long-Term Care (LTC) facilities, sub-acute rehabilitation, and healthcare staffing across Lindsay & Kawartha Lakes, Ontario.
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-3.5 text-xs font-mono">
                {/* Email with copy button */}
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-slate-200">
                    <Mail className="w-4 h-4 text-emerald-400" />
                    <span>{personalInfo.email}</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                    title="Copy Email Address"
                  >
                    {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center gap-2.5 text-slate-200">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>{personalInfo.location}</span>
                </div>

                {/* LinkedIn */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-emerald-500/50 flex items-center justify-between text-slate-200 hover:text-white transition group"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                    <span>Smriti Dahal on LinkedIn</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition" />
                </a>
              </div>

              {/* Webmail Quick Launch Buttons */}
              <div className="space-y-1.5 pt-2">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">One-Click Webmail Compose:</span>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <button
                    onClick={() => openWebmail('gmail')}
                    className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-red-500/40 text-slate-300 hover:text-white transition flex items-center justify-center gap-1.5"
                  >
                    <span className="text-red-400 font-bold">G</span>
                    <span>Open in Gmail</span>
                  </button>
                  <button
                    onClick={() => openWebmail('outlook')}
                    className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-blue-500/40 text-slate-300 hover:text-white transition flex items-center justify-center gap-1.5"
                  >
                    <span className="text-blue-400 font-bold">O</span>
                    <span>Open in Outlook</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Interactive Email Dispatch Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSendEmail} className="space-y-3.5 text-xs font-mono">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 text-[10px] uppercase mb-1">Your Name / Facility</label>
                    <input
                      type="text"
                      placeholder="e.g. Director of Care / Nurse Manager"
                      required
                      value={formData.senderName}
                      onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-[10px] uppercase mb-1">Your Email</label>
                    <input
                      type="email"
                      placeholder="e.g. care@victoriamanor.ca"
                      required
                      value={formData.senderEmail}
                      onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 text-[10px] uppercase mb-1">Inquiry Purpose</label>
                  <select
                    value={formData.facilityOrType}
                    onChange={(e) => setFormData({ ...formData, facilityOrType: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 focus:outline-none focus:border-emerald-500"
                  >
                    <option>Long-Term Care Facility Staffing</option>
                    <option>Sub-Acute / Hospital Rehabilitation Placement</option>
                    <option>Community Healthcare Coordination</option>
                    <option>General Professional Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 text-[10px] uppercase mb-1">Subject</label>
                  <input
                    type="text"
                    placeholder="e.g. PSW Opportunity / Schedule Inquiry"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 text-[10px] uppercase mb-1">Message</label>
                  <textarea
                    rows="4"
                    placeholder="Write your message here regarding shift schedules, facility requirements, or interview requests..."
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white focus:outline-none focus:border-emerald-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 text-white text-xs font-bold rounded-xl transition shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Email to Smriti</span>
                </button>

                {sentSuccess && (
                  <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs flex items-center gap-2 animate-fadeIn">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Your email composer has opened! You can review and click Send directly.</span>
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
