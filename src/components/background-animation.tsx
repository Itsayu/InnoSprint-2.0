"use client";

import React, { useRef, useEffect } from 'react';
import { useTheme } from '@/components/theme-provider';

export function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles: Particle[] = [];
    const particleCount = 150;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.6 - 0.3;
        this.speedY = Math.random() * 1 + 0.5;
        this.opacity = Math.random() * 0.7 + 0.3;

        if (theme === 'dark') {
          const colors = ['rgba(255, 87, 34,', 'rgba(255, 193, 7,', 'rgba(211, 47, 47,'];
          this.color = colors[Math.floor(Math.random() * colors.length)];
        } else {
          const grays = ['rgba(50, 50, 50,', 'rgba(100, 100, 100,', 'rgba(150, 150, 150,'];
          this.color = grays[Math.floor(Math.random() * grays.length)];
        }
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.y > canvas.height) {
          this.y = -this.size;
          this.x = Math.random() * canvas.width;
        }
        if (Math.random() > 0.95) {
          this.opacity = Math.random() * 0.7 + 0.3;
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.globalCompositeOperation = theme === 'dark' ? 'lighter' : 'source-over';
        context.fillStyle = this.color + this.opacity + ')';
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
      }
    }

    function init() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    let animationFrameId: number;
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const bgColor = theme === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.1)';
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.update();
        p.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(animate);
    }

    init();
    animate();

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return <canvas ref={canvasRef} id="background-canvas" className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none" />;
}
