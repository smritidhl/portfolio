import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, ExternalLink, Loader2 } from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    facilityOrType: 'Long-Term Care Facility Staffing',
    subject: '',
    message: ''
  });

  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);

    // Smooth dispatching state
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', facilityOrType: 'Long-Term Care Facility Staffing', subject: '', message: '' });
    }, 800);
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
                <div className="text-xs text-emerald-400 uppercase tracking-wider mb-1 font-semibold">
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
              <div className="space-y-3.5 text-xs">
                {/* Email with copy button */}
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-slate-200">
                    <Mail className="w-4 h-4 text-emerald-400" />
                    <span>{personalInfo.email}</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer"
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
                  className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between text-slate-200 hover:text-white hover:border-emerald-600/50 transition group"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-emerald-400" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition" />
                </a>
              </div>

              {/* Direct Mail Providers */}
              <div className="pt-2">
                <div className="text-[11px] text-slate-400 mb-2">Or compose via webmail:</div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=PSW%20Placement%20Inquiry`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-red-500/50 hover:bg-red-950/20 text-slate-300 hover:text-white transition flex items-center justify-center gap-1.5"
                  >
                    <span className="text-red-400 font-bold">G</span>
                    <span>Open in Gmail</span>
                  </a>
                  <a
                    href={`https://outlook.live.com/mail/0/deeplink/compose?to=${personalInfo.email}&subject=PSW%20Placement%20Inquiry`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-blue-500/50 hover:bg-blue-950/20 text-slate-300 hover:text-white transition flex items-center justify-center gap-1.5"
                  >
                    <span className="text-blue-400 font-bold">O</span>
                    <span>Open in Outlook</span>
                  </a>
                </div>
              </div>
            </div>

            {/* In-App Direct Dispatch Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/70 border border-emerald-700/80 text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Inquiry Dispatched!</h3>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Thank you! Your message has been dispatched to Smriti Dahal. She will review your inquiry and respond promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition cursor-pointer shadow-md inline-block mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-400 text-[10px] uppercase mb-1 font-semibold">Your Name / Facility</label>
                      <input
                        type="text"
                        placeholder="e.g. Director of Care / Nurse Manager"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-[10px] uppercase mb-1 font-semibold">Your Email</label>
                      <input
                        type="email"
                        placeholder="e.g. care@victoriamanor.ca"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-400 text-[10px] uppercase mb-1 font-semibold">Inquiry Purpose</label>
                    <select
                      value={formData.facilityOrType}
                      onChange={(e) => setFormData({ ...formData, facilityOrType: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors"
                    >
                      <option>Long-Term Care Facility Staffing</option>
                      <option>Sub-Acute / Hospital Rehabilitation Placement</option>
                      <option>Community Healthcare Coordination</option>
                      <option>General Professional Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-400 text-[10px] uppercase mb-1 font-semibold">Subject</label>
                    <input
                      type="text"
                      placeholder="e.g. PSW Opportunity / Schedule Inquiry"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 text-[10px] uppercase mb-1 font-semibold">Message</label>
                    <textarea
                      rows="4"
                      placeholder="Write your message here regarding shift schedules, facility requirements, or interview requests..."
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 disabled:opacity-70 text-white text-xs font-bold rounded-xl transition shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Dispatching...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Direct Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
