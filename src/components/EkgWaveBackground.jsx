import React, { useEffect, useRef } from 'react';

/**
 * EkgWaveBackground - Authentic Clinical ECG Cardiac Monitor
 * Built to mirror real hospital bedside cardiac monitors (Lead II rhythm strip):
 * - Steady isoelectric flat baseline (no floating/bobbing)
 * - Anatomically accurate P-Q-R-S-T cardiac waveform
 * - Sweeping monitor beam with phosphorescent persistence decay
 * - Authentic medical ECG millimeter grid (subtle dark emerald)
 * - Grounded, realistic telemetry without cartoonish floating
 */
export default function EkgWaveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initBuffer();
    };

    // Cardiac Cycle Function (Lead II normal sinus rhythm)
    // Returns normalized voltage [-0.3 to +1.0] for phase [0 to 1]
    const getEcgVoltage = (phase) => {
      const p = phase % 1.0;
      
      // Isoelectric baseline before P
      if (p < 0.14) return 0;
      
      // P wave (atrial depolarization) - small rounded upward bump
      if (p >= 0.14 && p < 0.22) {
        return 0.14 * Math.sin(((p - 0.14) / 0.08) * Math.PI);
      }
      
      // PR segment - flat baseline
      if (p >= 0.22 && p < 0.28) return 0;
      
      // Q wave - brief downward deflection
      if (p >= 0.28 && p < 0.305) {
        return -0.16 * Math.sin(((p - 0.28) / 0.025) * Math.PI);
      }
      
      // R wave - sharp, prominent ventricular spike
      if (p >= 0.305 && p < 0.345) {
        return 1.0 * Math.sin(((p - 0.305) / 0.04) * Math.PI);
      }
      
      // S wave - immediate sharp dip below baseline
      if (p >= 0.345 && p < 0.375) {
        return -0.28 * Math.sin(((p - 0.345) / 0.03) * Math.PI);
      }
      
      // ST segment - flat isoelectric baseline
      if (p >= 0.375 && p < 0.44) return 0;
      
      // T wave - broader rounded upward repolarization wave
      if (p >= 0.44 && p < 0.58) {
        return 0.26 * Math.sin(((p - 0.44) / 0.14) * Math.PI);
      }
      
      // TP interval (resting baseline until next beat)
      return 0;
    };

    // Buffer to hold ECG y-values across the canvas width
    let ecgBuffer = [];
    const initBuffer = () => {
      ecgBuffer = new Float32Array(Math.ceil(width) + 10);
      const baseY = height * 0.50; // Stable, fixed isoelectric baseline
      for (let i = 0; i < ecgBuffer.length; i++) {
        ecgBuffer[i] = baseY;
      }
    };
    initBuffer();

    // Sweep beam variables
    let scanX = 0;
    const sweepSpeed = 2.4; // Real clinical monitor sweep rate (~25 mm/s equivalent)
    const beatWidth = 260; // Pixels per heartbeat cycle
    const amplitude = 65; // Voltage scale in pixels

    // Mouse interaction for clinical telemetry probe
    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const baseY = height * 0.50;

      // 1. Authentic Clinical ECG Grid (Subtle millimeter squares)
      const smallGrid = 20;
      const largeGrid = 100;

      // Small 1mm grid lines
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.025)';
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      for (let x = 0; x < width; x += smallGrid) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += smallGrid) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Major 5mm grid lines
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.055)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x < width; x += largeGrid) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += largeGrid) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Stable isoelectric baseline guide (subtle dashed line)
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.08)';
      ctx.setLineDash([4, 8]);
      ctx.beginPath();
      ctx.moveTo(0, baseY);
      ctx.lineTo(width, baseY);
      ctx.stroke();
      ctx.setLineDash([]);

      // 2. Advance the Sweep Scan Beam and calculate true ECG voltage
      const step = sweepSpeed;
      const prevScanX = scanX;
      scanX += step;

      for (let x = Math.floor(prevScanX); x <= Math.floor(scanX); x++) {
        if (x < ecgBuffer.length) {
          const cyclePhase = (x % beatWidth) / beatWidth;
          const voltage = getEcgVoltage(cyclePhase);
          ecgBuffer[x] = baseY - voltage * amplitude;
        }
      }

      // Wrap around at screen edge (like a hospital monitor refreshing from left)
      if (scanX >= width) {
        scanX = 0;
      }

      // 3. Render Continuous ECG Trace with Phosphor Persistence Fade
      const eraseGap = 32; // Blank gap immediately ahead of sweep head

      ctx.lineWidth = 2.0;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      ctx.beginPath();
      let isDrawing = false;

      for (let x = 0; x < width; x += 1.5) {
        const idx = Math.floor(x);
        const distFromHead = (scanX >= x) ? (scanX - x) : (width - x + scanX);

        // Erase zone right ahead of scan head
        if (distFromHead > width - eraseGap) {
          if (isDrawing) {
            ctx.stroke();
            ctx.beginPath();
            isDrawing = false;
          }
          continue;
        }

        // Phosphor decay: bright near scan head, settling to steady clinical green
        const decayAlpha = Math.max(0.18, 0.75 - (distFromHead / width) * 0.55);
        ctx.strokeStyle = `rgba(16, 185, 129, ${decayAlpha})`;

        const y = ecgBuffer[idx] || baseY;

        if (!isDrawing) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          isDrawing = true;
        } else {
          ctx.lineTo(x, y);
        }

        if (idx % 35 === 0 && isDrawing) {
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(x, y);
        }
      }
      if (isDrawing) ctx.stroke();

      // 4. Glowing Sweep Head (Phosphorescent Beam Tip)
      const currentHeadY = ecgBuffer[Math.floor(scanX)] || baseY;

      const headGlow = ctx.createRadialGradient(scanX, currentHeadY, 1, scanX, currentHeadY, 28);
      headGlow.addColorStop(0, 'rgba(52, 211, 153, 0.7)');
      headGlow.addColorStop(0.3, 'rgba(16, 185, 129, 0.25)');
      headGlow.addColorStop(1, 'rgba(16, 185, 129, 0)');
      ctx.fillStyle = headGlow;
      ctx.beginPath();
      ctx.arc(scanX, currentHeadY, 28, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#6ee7b7';
      ctx.shadowColor = '#10b981';
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(scanX, currentHeadY, 2.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // 5. Authentic Top-Left Clinical Rhythm Telemetry Badge
      ctx.fillStyle = 'rgba(16, 185, 129, 0.35)';
      ctx.font = '10px monospace';
      ctx.fillText('LEAD II • 25mm/s • 10mm/mV • FILTER 0.05-40Hz', 24, 32);

      // 6. Interactive Cursor Clinical Probe
      if (mouse.active && mouse.x > 0 && mouse.x < width) {
        ctx.strokeStyle = 'rgba(16, 185, 129, 0.15)';
        ctx.setLineDash([2, 4]);
        ctx.beginPath();
        ctx.moveTo(mouse.x, baseY - amplitude - 20);
        ctx.lineTo(mouse.x, baseY + amplitude + 20);
        ctx.stroke();
        ctx.setLineDash([]);

        const intersectY = ecgBuffer[Math.floor(mouse.x)] || baseY;
        ctx.fillStyle = '#34d399';
        ctx.beginPath();
        ctx.arc(mouse.x, intersectY, 3.5, 0, Math.PI * 2);
        ctx.fill();

        const hudX = mouse.x + 14;
        const hudY = mouse.y - 28;

        if (hudX < width - 165 && hudY > 30) {
          ctx.fillStyle = 'rgba(7, 11, 19, 0.92)';
          ctx.strokeStyle = 'rgba(16, 185, 129, 0.40)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.roundRect(hudX, hudY, 150, 44, 7);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = '#34d399';
          ctx.font = 'bold 10px monospace';
          ctx.fillText('❤️ Sinus Rhythm • 70 BPM', hudX + 8, hudY + 15);

          ctx.fillStyle = '#94a3b8';
          ctx.font = '9px monospace';
          const voltageMv = ((baseY - intersectY) / amplitude).toFixed(2);
          ctx.fillText(`Lead II Amp: ${voltageMv} mV`, hudX + 8, hudY + 28);
          ctx.fillStyle = '#10b981';
          ctx.fillText('PR: 0.16s • QRS: 0.08s', hudX + 8, hudY + 38);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
}
