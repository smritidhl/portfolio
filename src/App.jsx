import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Skills from './components/Skills';
import ClinicalLiveCharting from './components/ClinicalLiveCharting';
import EducationCertifications from './components/EducationCertifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import EkgWaveBackground from './components/EkgWaveBackground';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#070b13] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-black overflow-x-hidden">
      {/* Medical EKG Rhythmic Pulse Wave Background */}
      <EkgWaveBackground />

      {/* Top Navbar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <AboutMe />
        <Experience />
        <Skills />
        <ClinicalLiveCharting />
        <EducationCertifications />
        <Contact />
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer onOpenResume={() => setResumeOpen(true)} />
      </div>

      {/* CV / Resume Preview Modal */}
      {resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}
    </div>
  );
}
