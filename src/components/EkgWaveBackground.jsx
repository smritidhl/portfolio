import React, { useEffect, useRef } from 'react';

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
    };
    window.addEventListener('resize', handleResize);

    let offset = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle medical grid dots
      ctx.fillStyle = 'rgba(16, 185, 129, 0.04)';
      const spacing = 36;
      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Animated EKG Rhythmic Pulse Wave
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.16)';
      ctx.lineWidth = 1.5;

      const yMid = height * 0.42;
      for (let x = 0; x < width; x++) {
        const cycle = ((x + offset) % 450);
        let dy = 0;
        if (cycle > 120 && cycle < 135) dy = -18;
        else if (cycle >= 135 && cycle < 150) dy = 45;
        else if (cycle >= 150 && cycle < 165) dy = -70; // R-wave spike
        else if (cycle >= 165 && cycle < 180) dy = 30;
        else if (cycle >= 200 && cycle < 230) dy = -12; // T-wave
        
        const y = yMid + dy + Math.sin((x + offset * 0.5) * 0.005) * 8;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      offset += 1.2;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
    />
  );
}
