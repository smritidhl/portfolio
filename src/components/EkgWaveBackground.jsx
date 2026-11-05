import React, { useEffect, useRef } from 'react';

/**
 * EkgWaveBackground - Interactive Healthcare & Cardiac Telemetry Field
 * Features:
 * - Animated rhythmic EKG Lifeline (P-Q-R-S-T cardiac cycle)
 * - Mouse-reactive hemodynamic wave warping
 * - Arterial pulse ripples & ultrasound shockwaves on hover/click
 * - Floating healthcare vitality nodes & medical cross markers
 * - Interactive Telemetry HUD tracking cardiac rhythm & vitals at cursor
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

    // Mouse state with smooth interpolation
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

    // Heartbeat BPM & hemodynamic state (reacts dynamically to mouse speed)
    let baseBpm = 72;
    let currentBpm = 72;
    let heartPulseScale = 1;

    // Floating healthcare vitality nodes
    const nodeLabels = [
      'SpO₂: 99%',
      'BP: 118/76',
      'Normal Sinus',
      'IPAC Protocol',
      'GPA Dignity',
      'CPR-HCP',
      'Safe Transfers',
      'Holistic Care'
    ];

    const vitalityNodes = [];
    const nodeCount = 36;
    for (let i = 0; i < nodeCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      vitalityNodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        size: Math.random() * 2.5 + 1.2,
        isCross: i % 4 === 0, // 25% of nodes are subtle medical crosses (+)
        label: i < nodeLabels.length ? nodeLabels[i] : null,
        pulseOffset: Math.random() * Math.PI * 2,
        baseAlpha: Math.random() * 0.25 + 0.15,
      });
    }

    // Arterial pulse ripples
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
      mouse.speed = Math.min(dist * 0.4, 18);

      mouse.targetX = newX;
      mouse.targetY = newY;
      mouse.lastX = newX;
      mouse.lastY = newY;
      mouse.active = true;

      // Accelerate heart rate slightly on active mouse movement (72 -> up to 88 bpm)
      currentBpm = Math.min(88, baseBpm + mouse.speed * 0.85);

      if (dist > 12 && ripples.length < 5) {
        ripples.push({
          x: newX,
          y: newY,
          radius: 6,
          maxRadius: 180,
          alpha: 0.45,
          speed: 2.2,
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
        alpha: 0.7,
        speed: 3.2,
      });
      // Heartbeat pulse thump
      heartPulseScale = 1.4;
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
      time += 0.02;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;
      mouse.speed *= 0.94;
      currentBpm += (baseBpm - currentBpm) * 0.02;
      heartPulseScale += (1.0 - heartPulseScale) * 0.08;

      // 1. Subtle Healthcare Dot Matrix Grid
      ctx.fillStyle = 'rgba(16, 185, 129, 0.035)';
      const spacing = 36;
      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          const dToMouse = Math.hypot(x - mouse.x, y - mouse.y);
          if (mouse.active && dToMouse < 180) {
            // Brighten grid dots near mouse
            const glow = (1 - dToMouse / 180) * 0.18;
            ctx.fillStyle = `rgba(16, 185, 129, ${0.035 + glow})`;
          } else {
            ctx.fillStyle = 'rgba(16, 185, 129, 0.035)';
          }
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 2. Mouse Healing Aura Glow
      if (mouse.active && mouse.x > 0 && mouse.x < width) {
        const aura = ctx.createRadialGradient(mouse.x, mouse.y, 10, mouse.x, mouse.y, 220);
        aura.addColorStop(0, 'rgba(16, 185, 129, 0.12)');
        aura.addColorStop(0.5, 'rgba(20, 184, 166, 0.05)');
        aura.addColorStop(1, 'rgba(16, 185, 129, 0)');
        ctx.fillStyle = aura;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 220, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. Arterial Pulse Shockwave Ripples (Ultrasound echo effect)
      for (let r = ripples.length - 1; r >= 0; r--) {
        const rip = ripples[r];
        rip.radius += rip.speed;
        rip.alpha *= 0.97;

        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(16, 185, 129, ${rip.alpha * 0.35})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        if (rip.radius > rip.maxRadius || rip.alpha < 0.015) {
          ripples.splice(r, 1);
        }
      }

      // 4. Primary & Secondary EKG Cardiac Waves with Hemodynamic Mouse Warping
      const waveLayers = [
        {
          name: 'Primary EKG Lifeline',
          baseYRatio: 0.42,
          stroke: 'rgba(16, 185, 129, 0.42)',
          glowStroke: 'rgba(52, 211, 153, 0.25)',
          lineWidth: 1.8,
          cycleLength: 420,
        },
        {
          name: 'SpO2 Plethysmograph Wave',
          baseYRatio: 0.65,
          stroke: 'rgba(20, 184, 166, 0.22)',
          glowStroke: 'transparent',
          lineWidth: 1.2,
          cycleLength: 320,
        }
      ];

      waveLayers.forEach((layer) => {
        const baseY = height * layer.baseYRatio;
        ctx.beginPath();
        ctx.strokeStyle = layer.stroke;
        ctx.lineWidth = layer.lineWidth;

        if (layer.glowStroke !== 'transparent') {
          ctx.shadowColor = 'rgba(16, 185, 129, 0.5)';
          ctx.shadowBlur = 8;
        } else {
          ctx.shadowBlur = 0;
        }

        for (let x = 0; x < width; x += 2) {
          const cycle = ((x + offset) % layer.cycleLength);
          let dy = 0;

          // Realistic P-Q-R-S-T Cardiac Cycle Form
          if (cycle > 90 && cycle < 110) {
            // P-Wave (atrial depolarization)
            dy = -10 * Math.sin(((cycle - 90) / 20) * Math.PI);
          } else if (cycle >= 125 && cycle < 133) {
            // Q-Wave (slight downward dip)
            dy = 12 * Math.sin(((cycle - 125) / 8) * Math.PI);
          } else if (cycle >= 133 && cycle < 147) {
            // R-Wave (dominant ventricular spike)
            dy = -68 * heartPulseScale * Math.sin(((cycle - 133) / 14) * Math.PI);
          } else if (cycle >= 147 && cycle < 155) {
            // S-Wave (downward dip)
            dy = 18 * Math.sin(((cycle - 147) / 8) * Math.PI);
          } else if (cycle >= 180 && cycle < 215) {
            // T-Wave (ventricular repolarization)
            dy = -14 * Math.sin(((cycle - 180) / 35) * Math.PI);
          }

          let y = baseY + dy;

          // Hemodynamic Mouse Warp: EKG flexes toward cursor as you hover!
          if (mouse.active && mouse.x > 0) {
            const dxToMouse = x - mouse.x;
            const distYToMouse = baseY - mouse.y;
            const gaussianWeight = Math.exp(-(dxToMouse * dxToMouse) / 24000); // 160px spread
            const pull = (mouse.y - baseY) * gaussianWeight * 0.35;
            const pulseThrum = Math.sin(dxToMouse * 0.04 - time * 0.08) * 6 * gaussianWeight;
            y += pull + pulseThrum;
          }

          // Ripples interaction
          for (let r = 0; r < ripples.length; r++) {
            const rip = ripples[r];
            const dRip = Math.abs(Math.hypot(x - rip.x, baseY - rip.y) - rip.radius);
            if (dRip < 36) {
              const weight = (1 - dRip / 36) * rip.alpha;
              y += Math.sin(dRip * 0.16 - time * 0.1) * 8 * weight;
            }
          }

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });

      ctx.shadowBlur = 0;

      // 5. Floating Vitality Nodes & Medical Crosses (+)
      const nearestToMouse = [];

      vitalityNodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Wrap around borders
        if (node.x < 0) node.x = width;
        if (node.x > width) node.x = 0;
        if (node.y < 0) node.y = height;
        if (node.y > height) node.y = 0;

        const distToMouse = Math.hypot(node.x - mouse.x, node.y - mouse.y);
        if (mouse.active && distToMouse < 220) {
          nearestToMouse.push({ node, dist: distToMouse });
        }

        const pulse = Math.sin(time * 1.5 + node.pulseOffset) * 0.15;
        const alpha = node.baseAlpha + pulse;

        if (node.isCross) {
          // Render subtle medical cross (+)
          ctx.strokeStyle = `rgba(16, 185, 129, ${alpha * 1.3})`;
          ctx.lineWidth = 1.2;
          const len = 4.5;
          ctx.beginPath();
          ctx.moveTo(node.x - len, node.y);
          ctx.lineTo(node.x + len, node.y);
          ctx.moveTo(node.x, node.y - len);
          ctx.lineTo(node.x, node.y + len);
          ctx.stroke();
        } else {
          // Circular vital node
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(20, 184, 166, ${alpha})`;
          ctx.fill();
        }
      });

      // 6. Cardiac Telemetry Lead Connections to Cursor
      if (mouse.active && mouse.x > 0 && mouse.x < width) {
        nearestToMouse.sort((a, b) => a.dist - b.dist);
        const leads = nearestToMouse.slice(0, 4);

        leads.forEach((item) => {
          const n = item.node;
          const leadAlpha = (1 - item.dist / 220) * 0.45;

          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(n.x, n.y);
          ctx.strokeStyle = `rgba(52, 211, 153, ${leadAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Highlight connected node
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.size + 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(52, 211, 153, ${leadAlpha * 1.6})`;
          ctx.fill();

          // If node has a clinical label, render it gently
          if (n.label) {
            ctx.fillStyle = `rgba(167, 243, 208, ${leadAlpha * 1.8})`;
            ctx.font = '10px monospace';
            ctx.fillText(n.label, n.x + 8, n.y + 3);
          }
        });

        // 7. Interactive Clinical Telemetry HUD at Cursor
        const hudX = mouse.x + 18;
        const hudY = mouse.y - 28;

        if (hudX < width - 170 && hudY > 30) {
          // HUD Box
          ctx.fillStyle = 'rgba(7, 11, 19, 0.88)';
          ctx.strokeStyle = 'rgba(16, 185, 129, 0.35)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.roundRect(hudX, hudY, 150, 48, 8);
          ctx.fill();
          ctx.stroke();

          // Heart icon + Status
          ctx.fillStyle = '#34d399';
          ctx.font = 'bold 10px monospace';
          ctx.fillText(`❤️ Sinus Rhythm • ${Math.round(currentBpm)} BPM`, hudX + 10, hudY + 16);

          // Sub-vitals
          ctx.fillStyle = '#94a3b8';
          ctx.font = '9px monospace';
          ctx.fillText(`SpO₂: 99%  •  BP: 118/76`, hudX + 10, hudY + 30);
          ctx.fillStyle = '#10b981';
          ctx.fillText(`Lead: ${leads.length} Vital Nodes Active`, hudX + 10, hudY + 41);
        }
      }

      offset += (currentBpm / 60) * 1.1;
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
