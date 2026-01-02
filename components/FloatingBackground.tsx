import React from 'react';

const FloatingBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Deep Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00] via-[#FFB347] to-[#FFD18B] opacity-100" />
      
      {/* Floating Orbs/Lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-gold/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

      {/* Floating 3D Elements (Simulated with simple shapes) */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className={`absolute opacity-30 rounded-full border-2 border-white/40 blur-[1px] animate-float`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 60 + 20}px`,
            height: `${Math.random() * 60 + 20}px`,
            animationDuration: `${Math.random() * 5 + 5}s`,
            animationDelay: `${Math.random() * 5}s`,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        />
      ))}
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
    </div>
  );
};

export default FloatingBackground;