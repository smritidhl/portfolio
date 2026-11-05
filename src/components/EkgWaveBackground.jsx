import React, { useEffect, useRef } from 'react';

/**
 * EkgWaveBackground - Slow, Calming, Bio-Luminescent Healthcare Field
 * Features:
 * - Slow, graceful EKG cardiac rhythm (P-Q-R-S-T wave) with relaxing pacing
 * - Hemodynamic mouse-reactive wave flexion (smoothed & gentle)
 * - Floating medical crosses (+) and bio-vitality nodes drifting peacefully
 * - Smooth arterial pulse ripples on hover/click
 * - Interactive Telemetry HUD displaying live vitals at cursor
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

    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      lastX: -1000,
      lastY: -1000,
      speed: 0,
      active: false,
    };

    let baseBpm = 68; // Relaxing resting heart rate
    let currentBpm = 68;
    let heartPulseScale = 1;

    // Floating healthcare vitality nodes
    const nodeLabels = [
      'Victoria Manor LTC',
      'Fleming GPA: 3.74',
      'CPR-C / AED Active',
      'BSO-DOS Tracking',
      'Hoyer Lift Safe',
      'IPAC Level 1',
      'VSC Cleared',
      'Gentle Care (GPA)',
      'SpO₂: 99%',
      'Normal Sinus'
    ];

    const vitalityNodes = [];
    const nodeCount = 32;
    for (let i = 0; i < nodeCount; i++) {
      vitalityNodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        // Slower, graceful floating velocities
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        size: Math.random() * 2.2 + 1.2,
        isCross: i % 3 === 0, // Medical crosses (+)
        label: i < nodeLabels.length ? nodeLabels[i] : null,
        pulseOffset: Math.random() * Math.PI * 2,
        baseAlpha: Math.random() * 0.22 + 0.12,
      });
    }

    const ripples = [];

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const newX = e.clientX - rect.left;
      const newY = e.clientY - rect.top;

      const dx = newX - (mouse.lastX === -1000 ? newX : mouse.lastX);
      const dy = newY - (mouse.lastY === -1000 ? newY : mouse.lastY);
      const dist = Math.hypot(dx, dy);
      mouse.speed = Math.min(dist * 0.25, 12);

      mouse.targetX = newX;
      mouse.targetY = newY;
      mouse.lastX = newX;
      mouse.lastY = newY;
      mouse.active = true;

      // Gentle BPM increase on mouse movement
      currentBpm = Math.min(78, baseBpm + mouse.speed * 0.5);

      if (dist > 16 && ripples.length < 4) {
        ripples.push({
          x: newX,
          y: newY,
          radius: 6,
          maxRadius: 190,
          alpha: 0.38,
          speed: 1.1, // Slower, peaceful expansion
        });
      }
    };

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      ripples.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        radius: 4,
        maxRadius: 260,
        alpha: 0.6,
        speed: 1.6,
      });
      heartPulseScale = 1.28;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
      currentBpm = baseBpm;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    document.addEventListener('mouseleave', handleMouseLeave);

    let offset = 0;
    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.012; // Slower time step

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;
      mouse.speed *= 0.95;
      currentBpm += (baseBpm - currentBpm) * 0.015;
      heartPulseScale += (1.0 - heartPulseScale) * 0.05;

      // 1. Subtle Healthcare Matrix Grid Dots
      ctx.fillStyle = 'rgba(16, 185, 129, 0.03)';
      const spacing = 38;
      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          const dToMouse = Math.hypot(x - mouse.x, y - mouse.y);
          if (mouse.active && dToMouse < 200) {
            const glow = (1 - dToMouse / 200) * 0.14;
            ctx.fillStyle = `rgba(16, 185, 129, ${0.03 + glow})`;
          } else {
            ctx.fillStyle = 'rgba(16, 185, 129, 0.03)';
          }
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 2. Mouse Healing Aura
      if (mouse.active && mouse.x > 0 && mouse.x < width) {
        const aura = ctx.createRadialGradient(mouse.x, mouse.y, 8, mouse.x, mouse.y, 240);
        aura.addColorStop(0, 'rgba(16, 185, 129, 0.10)');
        aura.addColorStop(0.5, 'rgba(20, 184, 166, 0.04)');
        aura.addColorStop(1, 'rgba(16, 185, 129, 0)');
        ctx.fillStyle = aura;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 240, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. Slow Arterial Pulse Ripples
      for (let r = ripples.length - 1; r >= 0; r--) {
        const rip = ripples[r];
        rip.radius += rip.speed;
        rip.alpha *= 0.985; // Slower fade

        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(16, 185, 129, ${rip.alpha * 0.32})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        if (rip.radius > rip.maxRadius || rip.alpha < 0.015) {
          ripples.splice(r, 1);
        }
      }

      // 4. Primary & Secondary EKG Waves (Slower & Gentle)
      const waveLayers = [
        {
          name: 'Primary EKG Lifeline',
          baseYRatio: 0.45,
          stroke: 'rgba(16, 185, 129, 0.38)',
          lineWidth: 1.8,
          glow: true,
          cycleLength: 460,
        },
        {
          name: 'SpO2 Plethysmograph Wave',
          baseYRatio: 0.70,
          stroke: 'rgba(20, 184, 166, 0.18)',
          lineWidth: 1.2,
          glow: false,
          cycleLength: 360,
        }
      ];

      waveLayers.forEach((layer) => {
        const baseY = height * layer.baseYRatio;
        ctx.beginPath();
        ctx.strokeStyle = layer.stroke;
        ctx.lineWidth = layer.lineWidth;

        if (layer.glow) {
          ctx.shadowColor = 'rgba(16, 185, 129, 0.4)';
          ctx.shadowBlur = 6;
        } else {
          ctx.shadowBlur = 0;
        }

        for (let x = 0; x < width; x += 2) {
          const cycle = ((x + offset) % layer.cycleLength);
          let dy = 0;

          // Anatomical P-Q-R-S-T wave curve
          if (cycle > 90 && cycle < 114) {
            dy = -8 * Math.sin(((cycle - 90) / 24) * Math.PI);
          } else if (cycle >= 126 && cycle < 134) {
            dy = 10 * Math.sin(((cycle - 126) / 8) * Math.PI);
          } else if (cycle >= 134 && cycle < 150) {
            dy = -62 * heartPulseScale * Math.sin(((cycle - 134) / 16) * Math.PI);
          } else if (cycle >= 150 && cycle < 158) {
            dy = 16 * Math.sin(((cycle - 150) / 8) * Math.PI);
          } else if (cycle >= 182 && cycle < 220) {
            dy = -12 * Math.sin(((cycle - 182) / 38) * Math.PI);
          }

          let y = baseY + dy;

          // Smooth hemodynamic mouse warp
          if (mouse.active && mouse.x > 0) {
            const dxToMouse = x - mouse.x;
            const gaussianWeight = Math.exp(-(dxToMouse * dxToMouse) / 32000); // Broader, gentler curve
            const pull = (mouse.y - baseY) * gaussianWeight * 0.28;
            const pulseThrum = Math.sin(dxToMouse * 0.03 - time * 0.04) * 4 * gaussianWeight;
            y += pull + pulseThrum;
          }

          for (let r = 0; r < ripples.length; r++) {
            const rip = ripples[r];
            const dRip = Math.abs(Math.hypot(x - rip.x, baseY - rip.y) - rip.radius);
            if (dRip < 34) {
              const weight = (1 - dRip / 34) * rip.alpha;
              y += Math.sin(dRip * 0.12 - time * 0.06) * 6 * weight;
            }
          }

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });

      ctx.shadowBlur = 0;

      // 5. Floating Medical Crosses (+) & Vitality Nodes (Slow drifting)
      const nearestToMouse = [];

      vitalityNodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0) node.x = width;
        if (node.x > width) node.x = 0;
        if (node.y < 0) node.y = height;
        if (node.y > height) node.y = 0;

        const distToMouse = Math.hypot(node.x - mouse.x, node.y - mouse.y);
        if (mouse.active && distToMouse < 210) {
          nearestToMouse.push({ node, dist: distToMouse });
        }

        const pulse = Math.sin(time + node.pulseOffset) * 0.12;
        const alpha = node.baseAlpha + pulse;

        if (node.isCross) {
          // Render subtle medical cross (+)
          ctx.strokeStyle = `rgba(16, 185, 129, ${alpha * 1.35})`;
          ctx.lineWidth = 1.3;
          const len = 4.5;
          ctx.beginPath();
          ctx.moveTo(node.x - len, node.y);
          ctx.lineTo(node.x + len, node.y);
          ctx.moveTo(node.x, node.y - len);
          ctx.lineTo(node.x, node.y + len);
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(20, 184, 166, ${alpha})`;
          ctx.fill();
        }
      });

      // 6. Cardiac Telemetry Lead Connections to Cursor
      if (mouse.active && mouse.x > 0 && mouse.x < width) {
        nearestToMouse.sort((a, b) => a.dist - b.dist);
        const leads = nearestToMouse.slice(0, 3);

        leads.forEach((item) => {
          const n = item.node;
          const leadAlpha = (1 - item.dist / 210) * 0.42;

          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(n.x, n.y);
          ctx.strokeStyle = `rgba(52, 211, 153, ${leadAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(n.x, n.y, n.size + 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(52, 211, 153, ${leadAlpha * 1.5})`;
          ctx.fill();

          if (n.label) {
            ctx.fillStyle = `rgba(167, 243, 208, ${leadAlpha * 1.8})`;
            ctx.font = '10px monospace';
            ctx.fillText(n.label, n.x + 8, n.y + 3);
          }
        });

        // 7. Clinical Telemetry HUD at Cursor
        const hudX = mouse.x + 18;
        const hudY = mouse.y - 28;

        if (hudX < width - 180 && hudY > 30) {
          ctx.fillStyle = 'rgba(7, 11, 19, 0.90)';
          ctx.strokeStyle = 'rgba(16, 185, 129, 0.35)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.roundRect(hudX, hudY, 155, 48, 8);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = '#34d399';
          ctx.font = 'bold 10px monospace';
          ctx.fillText(`❤️ Sinus Rhythm • ${Math.round(currentBpm)} BPM`, hudX + 10, hudY + 16);

          ctx.fillStyle = '#94a3b8';
          ctx.font = '9px monospace';
          ctx.fillText(`SpO₂: 99%  •  BP: 118/76`, hudX + 10, hudY + 30);
          ctx.fillStyle = '#10b981';
          ctx.fillText(`Victoria Manor LTC • Lead Active`, hudX + 10, hudY + 41);
        }
      }

      // Slower, peaceful offset increment
      offset += (currentBpm / 60) * 0.42;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
}
