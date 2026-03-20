import React, { useEffect, useRef } from 'react';

export const BackgroundSquares: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const squareSize = 1.5;
    const spacing = 40;
    
    let time = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      const cols = Math.floor(width / spacing) + 2;
      const rows = Math.floor(height / spacing) + 2;
      
      time += 0.003;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing;
          const y = j * spacing;
          
          // Create an elegant wave pattern using sine functions
          const wave1 = Math.sin(x * 0.01 + time);
          const wave2 = Math.cos(y * 0.01 + time * 0.8);
          const wave3 = Math.sin((x + y) * 0.005 - time * 1.2);
          
          // Combine waves and map to a subtle alpha value (0 to 0.08)
          const combined = (wave1 + wave2 + wave3) / 3;
          const alpha = Math.max(0, (combined + 1) / 2 * 0.08);
          
          if (alpha > 0.005) {
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.fillRect(x, y, squareSize, squareSize);
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};
