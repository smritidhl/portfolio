import React, { useState } from 'react';
import { Activity, ShieldCheck, HeartPulse, CheckCircle2, UserCheck, Stethoscope } from 'lucide-react';

export default function ClinicalMonitor() {
  const [pulseChecked, setPulseChecked] = useState(false);
  const [activeTab, setActiveTab] = useState('vitals');

  const triggerCheck = () => {
    setPulseChecked(true);
    setTimeout(() => setPulseChecked(false), 3000);
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-[#0c121e]/90 backdrop-blur-md p-5 shadow-2xl space-y-4 relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-xs font-mono font-bold text-white tracking-wide">
            Clinical Competency Monitor
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-[11px] font-mono text-emerald-300">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Active Practice</span>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1 mb-1">
            <HeartPulse className="w-3.5 h-3.5 text-emerald-400" />
            <span>Vitals Monitoring</span>
          </div>
          <div className="text-sm font-mono font-bold text-white">BP 118/76</div>
          <div className="text-[10px] text-emerald-400 font-mono">Resting HR: 68 bpm</div>
        </div>

        <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1 mb-1">
            <UserCheck className="w-3.5 h-3.5 text-teal-400" />
            <span>ADL Care Index</span>
          </div>
          <div className="text-sm font-mono font-bold text-white">100% On Schedule</div>
          <div className="text-[10px] text-teal-300 font-mono">Dignity Centered</div>
        </div>
      </div>

      {/* Core Competencies Checklist */}
      <div className="space-y-1.5 text-xs font-mono">
        <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
          <span className="text-slate-300">Mechanical Lifts (Hoyer/Track):</span>
          <span className="text-emerald-400 flex items-center gap-1 font-semibold">
            <CheckCircle2 className="w-3 h-3" /> Certified
          </span>
        </div>
        <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
          <span className="text-slate-300">Gentle Persuasive Approaches (GPA):</span>
          <span className="text-teal-300 flex items-center gap-1 font-semibold">
            <CheckCircle2 className="w-3 h-3" /> Dementia Trained
          </span>
        </div>
        <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
          <span className="text-slate-300">Infection Control (IPAC Level 1):</span>
          <span className="text-cyan-300 flex items-center gap-1 font-semibold">
            <CheckCircle2 className="w-3 h-3" /> Fully Compliant
          </span>
        </div>
      </div>

      {/* Interactive Trigger Button */}
      <button
        onClick={triggerCheck}
        className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-600/30 via-teal-600/30 to-cyan-600/30 hover:from-emerald-600/40 hover:to-cyan-600/40 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold transition flex items-center justify-center gap-2"
      >
        <Stethoscope className="w-4 h-4 text-emerald-400" />
        <span>{pulseChecked ? "✓ Vitals Recorded & Logged to Chart" : "Simulate Clinical Shift Check"}</span>
      </button>
    </div>
  );
}
