import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  Headphones, 
  Ticket, 
  Utensils, 
  PenTool, 
  Mail, 
  Puzzle, 
  Trophy,
  X,
  CupSoda,
  Panda
} from 'lucide-react';
import { Prize } from '../types';

import confetti from 'canvas-confetti';
const fireSchoolPride = () => {
  const duration = 1800;
  const end = Date.now() + duration;

  const colors = ['#FFD700', '#FF4500', '#FFFFFF'];

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors,
    });

    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};

// --- Configuration ---
const SEGMENT_COUNT = 8;
const SEGMENT_ANGLE = 360 / SEGMENT_COUNT;
const SPIN_DURATION = 5000; // ms

// --- Prize Data ---
const PRIZES: Prize[] = [
  { 
    id: '1', 
    label: 'TAI NGHE JBL', 
    subLabel: '1.500.000đ', 
    color: '#991B1B', // Deep Red
    textColor: '#FEF3C7', // Light Gold text
    icon: <Headphones className="w-8 h-8 text-yellow-400 drop-shadow-md" />, 
    isGrandPrize: true 
  },
  { 
    id: '2', 
    label: 'VOUCHER', 
    subLabel: '50.000đ', 
    color: '#FFF8DC', // Cream
    textColor: '#991B1B', // Red text
    icon: <Ticket className="w-8 h-8 text-red-800" /> 
  },
  { 
    id: '3', 
    label: 'GẤU SAOLA', 
    subLabel: 'Quà Xinh', 
    color: '#991B1B', 
    textColor: '#FEF3C7',
    icon: <Panda className="w-8 h-8 text-white" /> 
  },
  { 
    id: '4', 
    label: 'BÌNH NƯỚC', 
    subLabel: 'Tiện Lợi', 
    color: '#FFF8DC', 
    textColor: '#991B1B',
    icon: <CupSoda className="w-8 h-8 text-blue-500" /> 
  },
  { 
    id: '5', 
    label: 'ĂN UỐNG', 
    subLabel: "Kid's Shop", 
    color: '#991B1B', 
    textColor: '#FEF3C7',
    icon: <Utensils className="w-8 h-8 text-white" /> 
  },
  { 
    id: '6', 
    label: 'LEGO', 
    subLabel: 'Sáng Tạo', 
    color: '#FFF8DC', 
    textColor: '#991B1B',
    icon: <Puzzle className="w-8 h-8 text-orange-500" /> 
  },
  { 
    id: '7', 
    label: 'LÌ XÌ', 
    subLabel: 'May Mắn', 
    color: '#991B1B', 
    textColor: '#FEF3C7',
    icon: <Mail className="w-8 h-8 text-yellow-300" /> 
  },
  { 
    id: '8', 
    label: 'BÚT BI', 
    subLabel: 'Học Tập', 
    color: '#FFF8DC', 
    textColor: '#991B1B',
    icon: <PenTool className="w-8 h-8 text-blue-700" /> 
  },
];

const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

const LuckyWheel: React.FC = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [winningPrize, setWinningPrize] = useState<Prize | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  // Animation Refs
  const wheelRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef<HTMLDivElement>(null);
  const currentRotation = useRef(0);
  const pointerAngle = useRef(0);
  const animationFrameId = useRef<number>(0);

  // --- Particle System for Celebration ---
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const runCelebrationEffect = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles: any[] = [];
    const colors = ['#FCD34D', '#F59E0B', '#EF4444', '#FFFFFF', '#60A5FA'];

    const createFirework = (x: number, y: number) => {
      const count = 50;
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 6 + 2;
        particles.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          decay: Math.random() * 0.01 + 0.015,
          color: colors[Math.floor(Math.random() * colors.length)],
          type: 'firework',
          size: Math.random() * 3 + 2
        });
      }
    };

    const createConfetti = () => {
      for (let i = 0; i < 3; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: -10,
          vx: (Math.random() - 0.5) * 3,
          vy: Math.random() * 4 + 3,
          life: 1,
          decay: 0.005,
          color: colors[Math.floor(Math.random() * colors.length)],
          type: 'confetti',
          size: Math.random() * 8 + 5,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 15
        });
      }
    };

    // Initial Burst
    createFirework(canvas.width * 0.2, canvas.height * 0.4);
    createFirework(canvas.width * 0.8, canvas.height * 0.4);
    setTimeout(() => createFirework(canvas.width * 0.5, canvas.height * 0.3), 300);

    let frame = 0;
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (frame % 3 === 0 && frame < 300) createConfetti();
      if (frame % 60 === 0 && frame < 200) {
         createFirework(
            Math.random() * canvas.width,
            canvas.height * 0.2 + Math.random() * canvas.height * 0.3
         );
      }

      particles.forEach((p, index) => {
        p.life -= p.decay;
        if (p.type === 'firework') {
           p.x += p.vx;
           p.y += p.vy;
           p.vy += 0.08;
           p.vx *= 0.95;
           p.vy *= 0.95;
        } else {
           p.x += p.vx;
           p.y += p.vy;
           p.rotation += p.rotationSpeed;
           p.vy += 0.02;
           p.vx += Math.sin(frame * 0.05) * 0.1;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        if (p.type === 'confetti') ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        if (p.type === 'firework') {
           ctx.beginPath();
           ctx.arc(0, 0, p.size, 0, Math.PI * 2);
           ctx.fill();
        } else {
           ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
        }
        ctx.restore();

        if (p.life <= 0) particles.splice(index, 1);
      });

      frame++;
      if (frame < 500 || particles.length > 0) requestAnimationFrame(animate);
    };
    animate();
  }, []);

  // --- Spin Physics Logic ---
  const handleSpin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setWinningPrize(null);
    setShowPopup(false);

    const newWinningIndex = Math.floor(Math.random() * SEGMENT_COUNT);
    // Align the winning segment center to 0deg (Top)
    // 0deg at Top.
    // Segment i is centered at: i * SEGMENT_ANGLE + SEGMENT_ANGLE/2
    // To bring this to 0deg, we need to rotate NEGATIVE amount.
    const segmentCenter = newWinningIndex * SEGMENT_ANGLE + SEGMENT_ANGLE / 2;
    // Current rotation mod 360 should ideally be 0 at start, but we accumulate.
    const currentRot = currentRotation.current;
    
    // Minimum rotations for speed
    const minSpins = 8 * 360; 
    
    // We want finalRotation % 360 = (360 - segmentCenter)
    // So finalRotation = currentRot + minSpins + diff
    const targetRemainder = (360 - segmentCenter) % 360;
    const currentRemainder = currentRot % 360;
    const distance = minSpins + (targetRemainder - currentRemainder + 360) % 360;
    
    const startRot = currentRot;
    const startTime = performance.now();
    let lastSegmentIndex = Math.floor(startRot / SEGMENT_ANGLE);

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / SPIN_DURATION, 1);
      const ease = easeOutQuart(progress);
      
      const newRot = startRot + distance * ease;
      currentRotation.current = newRot;

      // Update Wheel DOM
      if (wheelRef.current) {
        wheelRef.current.style.transform = `rotate(${newRot}deg)`;
      }

      // --- Pointer Physics (Tick Effect) ---
      // Determine if we crossed a segment line
      // The lines are at 0, 45, 90...
      // Since wheel rotates CW, the "tick" happens when a line passes the top pointer.
      // Pointer is at Top (0deg in wheel space, effectively).
      // As wheel rotates, the lines passed are newRot % 45.
      // When newRot passes a multiple of 45.
      
      const currentSegmentIndex = Math.floor(newRot / SEGMENT_ANGLE);
      
      if (currentSegmentIndex > lastSegmentIndex) {
        // A spoke has just passed the pointer!
        // Kick the pointer to the right (positive rotation)
        pointerAngle.current = 25; // 25 degrees kick
        lastSegmentIndex = currentSegmentIndex;
        // Optional: Trigger haptic or sound here
      }

      // Spring physics to return pointer to 0
      pointerAngle.current *= 0.9; // Decay
      
      if (pointerRef.current) {
        pointerRef.current.style.transform = `rotate(${pointerAngle.current}deg)`;
      }

      if (progress < 1) {
        animationFrameId.current = requestAnimationFrame(animate);
      } else {
        setIsSpinning(false);
        setWinningPrize(PRIZES[newWinningIndex]);
        // Trigger celebration
        setTimeout(() => {
            runCelebrationEffect();
            fireSchoolPride(); 
            setShowPopup(true);
        }, 500);
      }
    };

    animationFrameId.current = requestAnimationFrame(animate);
  };

  // Cleanup
  useEffect(() => {
    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <div className="relative w-full flex justify-center items-center py-10 perspective-1000 z-50">
      
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 pointer-events-none z-[100]" 
        style={{ width: '100vw', height: '100vh' }}
      />

      {/* Main Wheel Container */}
      <div className="relative w-[320px] h-[320px] md:w-[550px] md:h-[550px] select-none group">
         
         {/* Background Glow */}
         <div className="absolute inset-[-15%] rounded-full bg-gradient-to-tr from-orange-500/0 via-orange-500/20 to-yellow-500/0 blur-3xl animate-pulse-slow pointer-events-none" />

         {/* 1. STATIC OUTER FRAME */}
         <div className="absolute inset-0 rounded-full shadow-[0_30px_60px_rgba(0,0,0,0.6)] z-10">
            {/* Metallic Ring */}
            <div className="absolute inset-[-20px] rounded-full bg-gradient-to-b from-yellow-300 via-yellow-600 to-yellow-800 border border-yellow-900 shadow-2xl flex items-center justify-center">
                {/* Inner Bevel */}
                <div className="absolute inset-3 rounded-full border-[3px] border-yellow-200/50 mix-blend-overlay"></div>
                
                {/* Lights */}
                {[...Array(SEGMENT_COUNT * 2)].map((_, i) => (
                    <div 
                        key={i}
                        className={`absolute w-3 h-3 md:w-4 md:h-4 rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.8)] transition-all duration-300
                            ${(isSpinning) 
                                ? (i % 2 === 0 ? 'bg-yellow-100 shadow-[0_0_15px_#fef08a]' : 'bg-red-900/50') 
                                : 'bg-gradient-to-br from-yellow-100 to-yellow-300 animate-pulse'
                            }
                        `}
                        style={{
                            top: '50%',
                            left: '50%',
                            transform: `translate(-50%, -50%) rotate(${i * (360 / (SEGMENT_COUNT * 2))}deg) translate(192px) md:translate(288px)`,
                            animationDelay: `${i * 0.05}s`
                        }}
                    />
                ))}
            </div>

            {/* 2. ROTATING DISC */}
            <div 
                ref={wheelRef}
                className="absolute inset-0 rounded-full overflow-hidden border-[8px] border-[#9F1239] shadow-inner bg-[#9F1239]"
                style={{ willChange: 'transform' }}
            >
                {/* SVG Slices */}
                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                   {PRIZES.map((prize, i) => {
                      const startAngle = (i * 360) / SEGMENT_COUNT;
                      const endAngle = ((i + 1) * 360) / SEGMENT_COUNT;
                      const x1 = 50 + 50 * Math.cos(Math.PI * startAngle / 180);
                      const y1 = 50 + 50 * Math.sin(Math.PI * startAngle / 180);
                      const x2 = 50 + 50 * Math.cos(Math.PI * endAngle / 180);
                      const y2 = 50 + 50 * Math.sin(Math.PI * endAngle / 180);

                      return (
                         <g key={prize.id}>
                            <path
                               d={`M50,50 L${x1},${y1} A50,50 0 0,1 ${x2},${y2} Z`}
                               fill={prize.color}
                               stroke="#F59E0B"
                               strokeWidth="0.4"
                            />
                            <circle cx={x1 * 0.88 + 6} cy={y1 * 0.88 + 6} r="0.8" fill="rgba(255,255,255,0.4)" />
                         </g>
                      );
                   })}
                </svg>

                {/* Content Layer */}
                <div className="absolute inset-0">
{PRIZES.map((prize, i) => {
  const angle = i * SEGMENT_ANGLE + SEGMENT_ANGLE / 2;
  const needsRotate = [''].includes(prize.id); // chỉ xoay icon này

  return (
    <div
      key={prize.id}
      className="absolute top-0 left-0 w-full h-full flex justify-center pt-2 md:pt-8"
      style={{ transform: `rotate(${angle}deg)` }}
    >
      <div className="flex flex-col items-center gap-1 md:gap-2 pt-2">
        <div className={`drop-shadow-sm ${needsRotate ? 'rotate-180' : ''}`}>
          {prize.icon}
        </div>
        <div
          className="text-center writing-vertical-rl"
          style={{
            color: prize.textColor,
            textShadow: '0 1px 2px rgba(0,0,0,0.3)',
          }}
        >
          <span className="block font-black text-[10px] md:text-sm uppercase whitespace-nowrap tracking-wide">
            {prize.label}
          </span>
          {prize.subLabel && (
            <span className="block font-bold text-[8px] md:text-[10px] opacity-90 mt-0.5">
              {prize.subLabel}
            </span>
          )}
        </div>
      </div>
    </div>
  );
})}


                </div>
            </div>
         </div>

         {/* 3. WINNING HIGHLIGHT (Top Overlay) */}
         {/* This sits statically on top of the wheel container, perfectly aligned with the top segment */}
         {!isSpinning && winningPrize && (
            <div className="absolute inset-[-4px] z-20 pointer-events-none animate-fade-in-up duration-300">
               {/* BEAM EFFECT - Energy connecting pointer to slice */}
               <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 w-0 h-[200px] shadow-[0_0_50px_20px_rgba(251,191,36,0.6)] bg-yellow-400 opacity-50 blur-xl rounded-full origin-top transform scale-y-100 animate-pulse" />

               <div className="w-full h-full relative">
                   <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                       {/* 1. Golden Stroke Glow */}
                       <path
                           d={`
                               M50,50 
                               L${50 + 50 * Math.cos(Math.PI * (-SEGMENT_ANGLE/2) / 180)},${50 + 50 * Math.sin(Math.PI * (-SEGMENT_ANGLE/2) / 180)} 
                               A50,50 0 0,1 
                               ${50 + 50 * Math.cos(Math.PI * (SEGMENT_ANGLE/2) / 180)},${50 + 50 * Math.sin(Math.PI * (SEGMENT_ANGLE/2) / 180)} 
                               Z
                           `}
                           fill="url(#innerGlow)"
                           stroke="#FCD34D"
                           strokeWidth="2"
                           className="drop-shadow-[0_0_15px_rgba(251,191,36,1)]"
                       />
                       <defs>
                          <radialGradient id="innerGlow" cx="0.5" cy="0.5" r="0.5">
                             <stop offset="0%" stopColor="rgba(255, 251, 235, 0.4)" />
                             <stop offset="100%" stopColor="rgba(255, 251, 235, 0)" />
                          </radialGradient>
                       </defs>
                   </svg>
                   
                   
                   
                   {/* 3. Light Rays */}
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden rounded-full opacity-50 mix-blend-screen">
                       <div className="absolute top-0 left-1/2 w-20 h-[120px] bg-gradient-to-b from-white to-transparent -translate-x-1/2 blur-md rotate-[-15deg] origin-top"></div>
                       <div className="absolute top-0 left-1/2 w-20 h-[120px] bg-gradient-to-b from-white to-transparent -translate-x-1/2 blur-md rotate-[15deg] origin-top"></div>
                   </div>
               </div>
            </div>
         )}


         {/* 4. SPIN BUTTON (Center) */}
         {/* CENTER HUB (START BUTTON) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
             <button
               onClick={handleSpin}
               disabled={isSpinning}
               className={`
                 group relative w-20 h-20 md:w-28 md:h-28 rounded-full 
                 shadow-[0_15px_30px_rgba(0,0,0,0.6)] transition-all duration-200 preserve-3d
                 ${isSpinning ? 'scale-95 cursor-wait brightness-90' : 'hover:scale-105 active:scale-95 active:translate-y-1 cursor-pointer'}
               `}
             >
                {/* 3D Button Sides */}
                <div className="absolute inset-0 rounded-full bg-[#92400E] translate-z-[-5px]" />
                
                {/* Metallic Gold Face */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FCD34D] via-[#F59E0B] to-[#B45309] border-4 border-[#FEF3C7] overflow-hidden">
                   {/* Ripple/Sheen Effect */}
                   <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:animate-shimmer" />
                   
                   <div className="absolute inset-0 flex items-center justify-center">
                      <span className={`
                        font-black text-white text-lg md:text-2xl tracking-widest drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]
                        ${!isSpinning && 'animate-pulse'}
                      `}>
                         START
                      </span>
                   </div>
                </div>
                
                {/* Outer Glow */}
                <div className="absolute -inset-4 bg-yellow-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
             </button>
          </div>

         {/* 5. POINTER (Physics Enabled) */}
         <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-40">
             <div 
                className="relative w-16 h-16 md:w-20 md:h-20 origin-top filter drop-shadow-[0_10px_5px_rgba(0,0,0,0.3)] transition-transform duration-75 ease-out"
                ref={pointerRef}
             >
                 {/* Gold Triangle */}
                 <svg viewBox="0 0 100 100" className="w-full h-full">
                     <defs>
                        <linearGradient id="pointerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#FFFBEB" />
                            <stop offset="100%" stopColor="#F59E0B" />
                        </linearGradient>
                     </defs>
                     <path d="M20,10 L80,10 L50,85 Z" fill="url(#pointerGrad)" stroke="#B45309" strokeWidth="4" />
                     <circle cx="50" cy="30" r="10" fill="#B91C1C" stroke="#78350F" strokeWidth="2" />
                 </svg>
             </div>
             {/* Glow under pointer */}
             <div className="absolute top-10 left-1/2 -translate-x-1/2 w-4 h-4 bg-yellow-400 blur-md rounded-full animate-pulse pointer-events-none"></div>
         </div>

      </div>

      {/* --- POPUP MODAL --- */}
{showPopup && winningPrize && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center">
    

    <div className="relative w-[340px] md:w-[450px] bg-white rounded-3xl p-1 shadow-2xl  z-20">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-orange via-yellow-400 to-red-500 animate-pulse-slow"></div>
      <div className="relative bg-white rounded-[20px] p-8 text-center overflow-hidden">
        <button 
          onClick={() => setShowPopup(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-20"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-4 shadow-inner ring-4 ring-white">
            <Trophy className="w-10 h-10 text-yellow-600 animate-bounce-slight" />
          </div>
          <h3 className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-2">Chúc Mừng Bạn Đã Trúng</h3>
          <h2 className="text-4xl md:text-5xl font-black text-brand-navy mb-2 drop-shadow-sm">
            {winningPrize.label}
          </h2>
          <p className="text-xl text-brand-orange font-bold mb-8">
            {winningPrize.subLabel}
          </p>
          <button 
            onClick={() => setShowPopup(false)}
            className="bg-brand-orange text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-orange-600 hover:shadow-xl transition-all active:scale-95 ring-2 ring-orange-200"
          >
            NHẬN QUÀ NGAY
          </button>
        </div>
      </div>
    </div>
  </div>
)}


    </div>
  );
};

export default LuckyWheel;
