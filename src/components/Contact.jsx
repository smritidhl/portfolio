import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 border-t border-slate-800/80 bg-[#070b13]/60 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto rounded-3xl border border-slate-800 bg-slate-900/60 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                Direct Contact
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Get in Touch
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Available for staffing placement, long-term care facility opportunities, and private client inquiries across Ontario.
              </p>

              <div className="space-y-3 pt-2 text-xs font-mono">
                <div className="flex items-center gap-3 text-slate-300">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <form onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }} className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name / Facility"
                  required
                  className="w-full text-xs p-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-emerald-500"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full text-xs p-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-emerald-500"
                />
                <textarea
                  rows="3"
                  placeholder="Message regarding placement or care schedule..."
                  required
                  className="w-full text-xs p-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-emerald-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white text-xs font-bold rounded-xl transition shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Direct Inquiry</span>
                </button>
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
