'use client';

import { useEffect, useRef } from 'react';

interface AnimatedGradientProps {
  className?: string;
}

export function AnimatedGradient({ className }: AnimatedGradientProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let hue = 260; // Start with violet hue

    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    const createGradient = (x: number, y: number) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, Math.max(canvas.width, canvas.height) * 0.5);

      // Use hues in the violet/indigo range (260-290)
      gradient.addColorStop(0, `hsla(${hue}, 100%, 60%, 0.4)`);
      gradient.addColorStop(0.5, `hsla(${(hue + 15) % 360}, 100%, 50%, 0.2)`);
      gradient.addColorStop(1, 'hsla(260, 80%, 10%, 0)');

      return gradient;
    };

    const render = () => {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create multiple gradient points that move
      const time = Date.now() * 0.001;
      const points = [
        {
          x: canvas.width * (0.5 + 0.3 * Math.sin(time * 0.3)),
          y: canvas.height * (0.5 + 0.2 * Math.cos(time * 0.2)),
        },
        {
          x: canvas.width * (0.5 + 0.25 * Math.sin(time * 0.4 + 2)),
          y: canvas.height * (0.5 + 0.3 * Math.cos(time * 0.3 + 1)),
        },
        {
          x: canvas.width * (0.5 + 0.2 * Math.sin(time * 0.5 + 4)),
          y: canvas.height * (0.5 + 0.25 * Math.cos(time * 0.4 + 3)),
        },
      ];

      // Draw each gradient point
      points.forEach((point) => {
        ctx.globalCompositeOperation = 'screen';
        ctx.fillStyle = createGradient(point.x, point.y);
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // Slowly shift the hue
      hue = (hue + 0.1) % 360;

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full ${className || ''}`} style={{ opacity: 0.8 }} />
  );
}
