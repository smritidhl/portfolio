import React, { useEffect, useRef } from 'react';

/**
 * EkgWaveBackground - Intuitive Multi-Lead Clinical Cardiac Monitor
 * Features:
 * - 4 Ambient Floating ECG Rhythm Strips drifting across the screen at different heights
 * - 1 Main Lead II Central Clinical Monitor with sweeping beam and phosphorescent decay
 * - Authentic P-Q-R-S-T cardiac waveform mathematics
 * - Millimeter medical grid with subtle ambient vignette
 * - Intuitive mouse proximity reaction: hovering reacts with vital telemetry HUD and pulse glow
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
      initMainBuffer();
    };

    // Authentic Lead II P-Q-R-S-T Voltage Calculator
    const getEcgVoltage = (phase) => {
      const p = phase % 1.0;
      if (p < 0.14) return 0;
      if (p >= 0.14 && p < 0.22) return 0.15 * Math.sin(((p - 0.14) / 0.08) * Math.PI); // P wave
      if (p >= 0.22 && p < 0.28) return 0; // PR segment
      if (p >= 0.28 && p < 0.305) return -0.18 * Math.sin(((p - 0.28) / 0.025) * Math.PI); // Q wave
      if (p >= 0.305 && p < 0.345) return 1.0 * Math.sin(((p - 0.305) / 0.04) * Math.PI); // R spike
      if (p >= 0.345 && p < 0.375) return -0.30 * Math.sin(((p - 0.345) / 0.03) * Math.PI); // S wave
      if (p >= 0.375 && p < 0.44) return 0; // ST segment
      if (p >= 0.44 && p < 0.58) return 0.28 * Math.sin(((p - 0.44) / 0.14) * Math.PI); // T wave
      return 0; // Baseline
    };

    // Main Central Monitor
    let ecgBuffer = [];
    const initMainBuffer = () => {
      ecgBuffer = new Float32Array(Math.ceil(width) + 20);
      const baseY = height * 0.48;
      for (let i = 0; i < ecgBuffer.length; i++) ecgBuffer[i] = baseY;
    };
    initMainBuffer();

    let scanX = 0;
    const sweepSpeed = 2.2;
    const beatWidth = 280;
    const mainAmp = 65;

    // Ambient Floating ECG Waves (drifting from left to right at various heights)
    const ambientWaves = [
      { yRel: 0.16, amp: 22, speed: 1.1, beatW: 210, alpha: 0.16, label: 'LEAD I', offset: 0.15 },
      { yRel: 0.32, amp: 18, speed: 0.85, beatW: 190, alpha: 0.12, label: 'aVR', offset: 0.42 },
      { yRel: 0.68, amp: 26, speed: 1.3, beatW: 240, alpha: 0.18, label: 'V1', offset: 0.70 },
      { yRel: 0.84, amp: 20, speed: 0.95, beatW: 200, alpha: 0.14, label: 'V5', offset: 0.30 },
      { yRel: 0.93, amp: 14, speed: 0.75, beatW: 170, alpha: 0.10, label: 'PLETH', offset: 0.85 },
    ];

    // Floating independent pulse packets that drift across
    const floatingPackets = [
      { x: width * 0.1, yRel: 0.24, vx: 0.6, width: 220, amp: 24, alpha: 0.22, color: '16, 185, 129' },
      { x: width * 0.6, yRel: 0.40, vx: 0.8, width: 260, amp: 28, alpha: 0.20, color: '20, 184, 166' },
      { x: width * 0.3, yRel: 0.76, vx: 0.7, width: 240, amp: 25, alpha: 0.24, color: '6, 182, 212' },
      { x: width * 0.8, yRel: 0.88, vx: 0.5, width: 190, amp: 20, alpha: 0.18, color: '16, 185, 129' },
    ];

    // Mouse Interaction
    const mouse = { x: -1000, y: -1000, active: false };
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

    let frame = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      frame++;

      // 1. Clinical Millimeter Grid
      const smallGrid = 22;
      const largeGrid = 110;

      ctx.strokeStyle = 'rgba(16, 185, 129, 0.025)';
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      for (let x = 0; x < width; x += smallGrid) { ctx.moveTo(x, 0); ctx.lineTo(x, height); }
      for (let y = 0; y < height; y += smallGrid) { ctx.moveTo(0, y); ctx.lineTo(width, y); }
      ctx.stroke();

      ctx.strokeStyle = 'rgba(16, 185, 129, 0.055)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x < width; x += largeGrid) { ctx.moveTo(x, 0); ctx.lineTo(x, height); }
      for (let y = 0; y < height; y += largeGrid) { ctx.moveTo(0, y); ctx.lineTo(width, y); }
      ctx.stroke();

      // 2. Ambient Floating Continuous ECG Rhythm Strips
      ambientWaves.forEach((wave) => {
        const baseY = height * wave.yRel;
        const scrollOffset = (frame * wave.speed) % wave.beatW;

        // Subtle baseline guide
        ctx.strokeStyle = `rgba(16, 185, 129, ${wave.alpha * 0.35})`;
        ctx.setLineDash([3, 10]);
        ctx.beginPath();
        ctx.moveTo(0, baseY);
        ctx.lineTo(width, baseY);
        ctx.stroke();
        ctx.setLineDash([]);

        // Small Lead label
        ctx.fillStyle = `rgba(16, 185, 129, ${wave.alpha * 1.8})`;
        ctx.font = '9px monospace';
        ctx.fillText(wave.label, 20, baseY - 6);

        // Wave trace
        ctx.strokeStyle = `rgba(16, 185, 129, ${wave.alpha})`;
        ctx.lineWidth = 1.3;
        ctx.lineCap = 'round';
        ctx.beginPath();

        let started = false;
        for (let x = 0; x < width; x += 3) {
          const phase = (((x + scrollOffset) / wave.beatW) + wave.offset) % 1.0;
          let v = getEcgVoltage(phase);

          // Subtle mouse proximity warping
          if (mouse.active) {
            const dist = Math.hypot(x - mouse.x, baseY - mouse.y);
            if (dist < 180) {
              const boost = (1 - dist / 180) * 0.4;
              v *= (1 + boost);
            }
          }

          const y = baseY - v * wave.amp;
          if (!started) {
            ctx.moveTo(x, y);
            started = true;
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      });

      // 3. Floating Mini ECG Packets (Independent drifting waveforms)
      floatingPackets.forEach((pkt) => {
        pkt.x += pkt.vx;
        if (pkt.x > width + pkt.width) pkt.x = -pkt.width;

        const baseY = height * pkt.yRel + Math.sin(frame * 0.015 + pkt.vx) * 8;
        ctx.save();
        ctx.lineWidth = 1.6;
        ctx.lineCap = 'round';

        // Gradient fade on edges of the floating wave packet
        const grad = ctx.createLinearGradient(pkt.x, 0, pkt.x + pkt.width, 0);
        grad.addColorStop(0, `rgba(${pkt.color}, 0)`);
        grad.addColorStop(0.25, `rgba(${pkt.color}, ${pkt.alpha})`);
        grad.addColorStop(0.75, `rgba(${pkt.color}, ${pkt.alpha})`);
        grad.addColorStop(1, `rgba(${pkt.color}, 0)`);
        ctx.strokeStyle = grad;

        ctx.beginPath();
        let started = false;
        for (let px = 0; px < pkt.width; px += 2) {
          const phase = (px / pkt.width) * 1.5;
          const v = getEcgVoltage(phase);
          const screenX = pkt.x + px;
          const screenY = baseY - v * pkt.amp;

          if (!started) {
            ctx.moveTo(screenX, screenY);
            started = true;
          } else {
            ctx.lineTo(screenX, screenY);
          }
        }
        ctx.stroke();

        // Glowing heart pulse dot on R-peak
        const peakX = pkt.x + pkt.width * 0.22;
        const peakY = baseY - pkt.amp;
        if (peakX > 0 && peakX < width) {
          ctx.fillStyle = `rgba(${pkt.color}, ${pkt.alpha * 1.5})`;
          ctx.beginPath();
          ctx.arc(peakX, peakY, 2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      });

      // 4. Central Main Lead II Monitor with Phosphorescent Sweeping Beam
      const mainBaseY = height * 0.48;

      // Stable center baseline
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.12)';
      ctx.setLineDash([4, 8]);
      ctx.beginPath();
      ctx.moveTo(0, mainBaseY);
      ctx.lineTo(width, mainBaseY);
      ctx.stroke();
      ctx.setLineDash([]);

      const prevScanX = scanX;
      scanX += sweepSpeed;

      for (let x = Math.floor(prevScanX); x <= Math.floor(scanX); x++) {
        if (x < ecgBuffer.length) {
          const cyclePhase = (x % beatWidth) / beatWidth;
          const voltage = getEcgVoltage(cyclePhase);
          ecgBuffer[x] = mainBaseY - voltage * mainAmp;
        }
      }

      if (scanX >= width) scanX = 0;

      // Draw Main Sweep Trace
      const eraseGap = 36;
      ctx.lineWidth = 2.2;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      ctx.beginPath();
      let isDrawing = false;

      for (let x = 0; x < width; x += 1.5) {
        const idx = Math.floor(x);
        const distFromHead = (scanX >= x) ? (scanX - x) : (width - x + scanX);

        if (distFromHead > width - eraseGap) {
          if (isDrawing) { ctx.stroke(); ctx.beginPath(); isDrawing = false; }
          continue;
        }

        const decayAlpha = Math.max(0.18, 0.85 - (distFromHead / width) * 0.65);
        ctx.strokeStyle = `rgba(16, 185, 129, ${decayAlpha})`;

        const y = ecgBuffer[idx] || mainBaseY;
        if (!isDrawing) { ctx.beginPath(); ctx.moveTo(x, y); isDrawing = true; }
        else ctx.lineTo(x, y);

        if (idx % 35 === 0 && isDrawing) {
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(x, y);
        }
      }
      if (isDrawing) ctx.stroke();

      // Sweep Beam Head Glow
      const headY = ecgBuffer[Math.floor(scanX)] || mainBaseY;
      const headGlow = ctx.createRadialGradient(scanX, headY, 1, scanX, headY, 32);
      headGlow.addColorStop(0, 'rgba(52, 211, 153, 0.8)');
      headGlow.addColorStop(0.3, 'rgba(16, 185, 129, 0.3)');
      headGlow.addColorStop(1, 'rgba(16, 185, 129, 0)');
      ctx.fillStyle = headGlow;
      ctx.beginPath();
      ctx.arc(scanX, headY, 32, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#a7f3d0';
      ctx.shadowColor = '#10b981';
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(scanX, headY, 2.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // 5. Clinical Telemetry Header
      ctx.fillStyle = 'rgba(16, 185, 129, 0.45)';
      ctx.font = '10px monospace';
      ctx.fillText('LEAD II • 25mm/s • 10mm/mV • FILTER 0.05-40Hz • MULTI-LEAD ACTIVE', 24, 32);

      // 6. Intuitive Mouse Telemetry Probe
      if (mouse.active && mouse.x > 0 && mouse.x < width) {
        ctx.strokeStyle = 'rgba(16, 185, 129, 0.20)';
        ctx.setLineDash([2, 4]);
        ctx.beginPath();
        ctx.moveTo(mouse.x, mainBaseY - mainAmp - 25);
        ctx.lineTo(mouse.x, mainBaseY + mainAmp + 25);
        ctx.stroke();
        ctx.setLineDash([]);

        const intersectY = ecgBuffer[Math.floor(mouse.x)] || mainBaseY;
        ctx.fillStyle = '#34d399';
        ctx.beginPath();
        ctx.arc(mouse.x, intersectY, 4, 0, Math.PI * 2);
        ctx.fill();

        const hudX = mouse.x + 14;
        const hudY = mouse.y - 28;

        if (hudX < width - 170 && hudY > 30) {
          ctx.fillStyle = 'rgba(7, 11, 19, 0.94)';
          ctx.strokeStyle = 'rgba(16, 185, 129, 0.50)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.roundRect(hudX, hudY, 160, 48, 7);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = '#34d399';
          ctx.font = 'bold 10px monospace';
          ctx.fillText('❤️ Sinus Rhythm • 72 BPM', hudX + 8, hudY + 16);

          ctx.fillStyle = '#94a3b8';
          ctx.font = '9px monospace';
          const voltageMv = ((mainBaseY - intersectY) / mainAmp).toFixed(2);
          ctx.fillText(`Lead II Amp: ${voltageMv} mV`, hudX + 8, hudY + 30);
          ctx.fillStyle = '#10b981';
          ctx.fillText('PR: 0.16s • QRS: 0.08s', hudX + 8, hudY + 41);
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
      className="fixed inset-0 pointer-events-none z-0 opacity-85"
      aria-hidden="true"
    />
  );
}
