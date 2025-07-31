import { useEffect, useRef, useState } from "react";

export const HeroOrb = () => {
  const orbRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x: x * 20, y: y * 20 });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  useEffect(() => {
    if (orbRef.current) {
      orbRef.current.style.transform = `
        perspective(1000px) 
        rotateX(${mousePosition.y}deg) 
        rotateY(${mousePosition.x}deg) 
        translateZ(50px)
      `;
    }
  }, [mousePosition]);

  return (
    <div 
      ref={containerRef}
      className="w-full h-[500px] relative flex items-center justify-center perspective-1000"
    >
      {/* Main holographic orb */}
      <div 
        ref={orbRef}
        className="relative w-64 h-64 transition-transform duration-300 ease-out transform-3d"
      >
        {/* Core orb with multiple layers for depth */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-primary/20 to-transparent backdrop-blur-sm border border-primary/30 animate-float">
          <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-primary/40 to-transparent animate-glow-pulse" />
          <div className="absolute inset-4 rounded-full bg-gradient-to-bl from-primary-glow/50 to-transparent animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute inset-8 rounded-full bg-primary/60 shadow-[0_0_50px_rgba(0,102,255,0.5)] animate-holographic" />
        </div>

        {/* Floating code fragments */}
        <div className="absolute inset-0">
          {[
            { text: "React", pos: "top-4 left-4", delay: "0s" },
            { text: "Node.js", pos: "top-8 right-2", delay: "0.5s" },
            { text: "Three.js", pos: "bottom-6 left-2", delay: "1s" },
            { text: "AWS", pos: "bottom-4 right-6", delay: "1.5s" },
            { text: "API", pos: "top-1/2 left-0", delay: "2s" },
            { text: "UI/UX", pos: "top-1/2 right-0", delay: "2.5s" }
          ].map((item, i) => (
            <div
              key={i}
              className={`absolute ${item.pos} glass-card px-2 py-1 text-xs font-mono text-primary animate-float opacity-80`}
              style={{ animationDelay: item.delay }}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>

      {/* Orbiting elements */}
      <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
        {[...Array(6)].map((_, i) => {
          const angle = (i * 60) * (Math.PI / 180);
          const radius = 150;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          return (
            <div
              key={i}
              className="absolute w-8 h-8 bg-gradient-to-r from-primary to-primary-glow rounded-lg shadow-lg animate-float"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)',
                animationDelay: `${i * 0.3}s`
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-primary/60 to-transparent rounded-lg border border-primary/40" />
            </div>
          );
        })}
      </div>

      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-glow/20 rounded-full blur-2xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Particle effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};