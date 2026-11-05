import React, { useState } from 'react';
import { Activity, ShieldCheck, HeartPulse, CheckCircle2, UserCheck, Stethoscope, Clock, FileEdit, Sparkles } from 'lucide-react';

export default function ClinicalLiveCharting() {
  const [logs, setLogs] = useState([
    { time: '07:30 AM', entry: 'Morning ADL Care & repositioning completed. Resident comfortable and alert.', type: 'ADL' },
    { time: '08:15 AM', entry: 'Breakfast assistance provided. 240ml fluid intake logged. Swallowing normal.', type: 'Diet' },
    { time: '10:00 AM', entry: 'Mechanical Hoyer transfer to wheelchair with 2-person assist. Zero skin friction.', type: 'Transfer' },
    { time: '11:20 AM', entry: 'BSO-DOS observation: Pleasant, responsive to music therapy, no agitation noted.', type: 'BSO' },
  ]);

  const [vitals, setVitals] = useState({
    bp: '118/76',
    hr: '72',
    spo2: '98%',
    temp: '36.8°C'
  });

  const [simulating, setSimulating] = useState(false);
  const [justLogged, setJustLogged] = useState(false);

  const handleSimulateCheck = () => {
    setSimulating(true);
    setTimeout(() => {
      const newHr = 68 + Math.floor(Math.random() * 8);
      const newSys = 116 + Math.floor(Math.random() * 6);
      const newDia = 74 + Math.floor(Math.random() * 4);
      setVitals({
        bp: `${newSys}/${newDia}`,
        hr: `${newHr}`,
        spo2: `${98 + Math.floor(Math.random() * 2)}%`,
        temp: '36.7°C'
      });

      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      setLogs((prev) => [
        {
          time: timeStr,
          entry: `Routine vitals verified (HR: ${newHr} bpm, BP: ${newSys}/${newDia}). Skin intact. Hydration verified.`,
          type: 'Vitals'
        },
        ...prev.slice(0, 4)
      ]);

      setSimulating(false);
      setJustLogged(true);
      setTimeout(() => setJustLogged(false), 3500);
    }, 600);
  };

  return (
    <section id="charting" className="py-20 border-t border-slate-800/80 bg-[#060e1a]/70 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-semibold text-emerald-400 mb-3 shadow-sm">
            <Activity className="w-3.5 h-3.5" />
            <span>Interactive Healthcare Practice</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Live Clinical Charting & Shift Telemetry
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Sample PointClickCare (POC) daily resident care workflow, vital signs surveillance, and BSO-DOS dementia observation routines.
          </p>
        </div>

        {/* Telemetry & Charting Dashboard */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-2xl backdrop-blur-md space-y-6">
          
          {/* Top Unit Header (Completely Anonymized & Sample Training Model) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800/80 flex items-center justify-center text-emerald-400 font-bold text-sm">
                POC
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-white">Sample Resident Care Plan • Training Simulation Unit</h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800">
                    Sample Simulation
                  </span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Demonstration Profile • Clinical Skills Demonstration
                </div>
              </div>
            </div>

            <button
              onClick={handleSimulateCheck}
              disabled={simulating}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-semibold text-xs transition flex items-center justify-center gap-1.5 shadow-md cursor-pointer disabled:opacity-60"
            >
              <Stethoscope className="w-4 h-4" />
              <span>{simulating ? 'Recording to Chart...' : 'Simulate Shift Vitals Check'}</span>
            </button>
          </div>

          {/* Vitals Telemetry Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
              <div className="text-[10px] text-slate-400 font-semibold uppercase flex items-center justify-between">
                <span>Blood Pressure</span>
                <HeartPulse className="w-3.5 h-3.5 text-rose-400" />
              </div>
              <div className="text-xl font-bold text-white">{vitals.bp}</div>
              <div className="text-[10px] text-emerald-400 font-medium">Normotensive</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
              <div className="text-[10px] text-slate-400 font-semibold uppercase flex items-center justify-between">
                <span>Heart Rate</span>
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="text-xl font-bold text-white">{vitals.hr} <span className="text-xs text-slate-400 font-normal">bpm</span></div>
              <div className="text-[10px] text-emerald-400 font-medium">Sinus Rhythm</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
              <div className="text-[10px] text-slate-400 font-semibold uppercase flex items-center justify-between">
                <span>Oxygen Sat (SpO2)</span>
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              </div>
              <div className="text-xl font-bold text-white">{vitals.spo2}</div>
              <div className="text-[10px] text-teal-300 font-medium">Room Air (Adequate)</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
              <div className="text-[10px] text-slate-400 font-semibold uppercase flex items-center justify-between">
                <span>Body Temp</span>
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <div className="text-xl font-bold text-white">{vitals.temp}</div>
              <div className="text-[10px] text-cyan-300 font-medium">Afebrile</div>
            </div>
          </div>

          {/* Shift Charting Log Feed */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-xs text-slate-400 font-semibold">
              <span className="flex items-center gap-1.5">
                <FileEdit className="w-3.5 h-3.5 text-emerald-400" />
                <span>Simulated Point-of-Care (POC) Chart Entries</span>
              </span>
              <span className="text-[11px] text-emerald-400 font-normal">Training Demonstration</span>
            </div>

            <div className="space-y-2">
              {logs.map((log, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/80 hover:border-slate-700 transition flex items-start gap-3 text-xs"
                >
                  <div className="flex items-center gap-1 text-[11px] text-teal-400 font-mono shrink-0 pt-0.5">
                    <Clock className="w-3 h-3" />
                    <span>{log.time}</span>
                  </div>
                  <div className="flex-1 text-slate-300 leading-relaxed">
                    {log.entry}
                  </div>
                  <span className="text-[9px] font-semibold px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800 shrink-0">
                    {log.type}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {justLogged && (
            <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-700/80 text-emerald-300 text-xs flex items-center justify-center gap-2 animate-fadeIn">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Shift observation logged to sample simulation chart successfully!</span>
            </div>
          )}

          <div className="pt-2 text-center text-[10px] text-slate-500">
            * Strictly simulated sample chart data for professional skills demonstration in accordance with PHIPA standards.
          </div>

        </div>

      </div>
    </section>
  );
}
