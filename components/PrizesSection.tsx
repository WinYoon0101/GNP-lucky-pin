import React, { useState } from 'react';
import { 
  Ticket, 
  Utensils, 
  Panda, 
  CupSoda, 
  PenTool, 
  Mail, 
  Puzzle,
  Sparkles,
  Zap
} from 'lucide-react';

const PrizesSection: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <section className="relative py-32 px-4 z-10 overflow-visible perspective-1000">
      
      {/* 1. ATMOSPHERE & LIGHTING */}
      {/* Central Radial Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-yellow-500/20 blur-[60px] rounded-full pointer-events-none mix-blend-screen" />
      
      {/* Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
           <div key={i} className="absolute bg-yellow-200 rounded-full blur-[1px] animate-float" style={{
               top: `${Math.random() * 100}%`,
               left: `${Math.random() * 100}%`,
               width: `${Math.random() * 4 + 2}px`,
               height: `${Math.random() * 4 + 2}px`,
               opacity: Math.random() * 0.5 + 0.3,
               animationDuration: `${Math.random() * 5 + 5}s`,
               animationDelay: `${Math.random() * 2}s`
           }} />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col items-center">
        
        {/* SECTION TITLE */}
        <div className="text-center mb-24 relative z-20 animate-fade-in-up">
            <h3 className="text-4xl md:text-6xl font-display font-black text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)] tracking-tight">
                KHO QUÀ BỨT PHÁ
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mt-4 rounded-full opacity-80" />
        </div>

        {/* 3. MAIN STAGE (Grid Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full items-center relative min-h-[500px]">
            
            {/* LEFT COLUMN: VOUCHER 1 */}
            <div className="flex flex-col items-center md:items-end order-2 md:order-1 z-20">
                <FloatingItem 
                    icon={<Utensils className="w-8 h-8 text-white" />}
                    title="Voucher 02 buổi ăn"
                    subtitle="Tại Kid’s Shop"
                    color="from-orange-400 to-red-500"
                    position="right"
                />
            </div>

            {/* CENTER COLUMN: GRAND PRIZE (JBL) */}
            <div className="relative flex flex-col items-center justify-center order-1 md:order-2 h-[450px] w-full z-30 perspective-500">
                {/* Rotating Rings */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                     <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] border border-yellow-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
                     <div className="absolute w-[260px] h-[260px] md:w-[350px] md:h-[350px] border border-dashed border-orange-400/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                </div>

                {/* Main Object */}
                <div 
                    className="relative group cursor-pointer transform transition-all duration-700 hover:scale-105"
                    onMouseEnter={() => setHoveredItem('grand')}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    {/* Glow Halo */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl group-hover:bg-yellow-500/30 transition-colors duration-500" />
                    
                    {/* Sparkles */}
                    <div className="absolute -top-10 -right-10 animate-bounce-slight text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity"><Sparkles className="w-8 h-8" /></div>
                    <div className="absolute bottom-0 -left-10 animate-bounce-slight text-orange-300 delay-700 opacity-0 group-hover:opacity-100 transition-opacity"><Zap className="w-6 h-6 fill-current" /></div>

                    {/* Image/Icon Container */}
                    <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float preserve-3d">
                        {/* Shadow */}
                        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-40 h-10 bg-black/30 blur-xl rounded-[100%] transform scale-y-50 group-hover:scale-75 transition-transform duration-500" />
                        
                        {/* CSS 3D Speaker Representation */}
                        <div className="w-full h-full relative z-10 drop-shadow-2xl transition-transform duration-500 group-hover:-translate-y-4 group-hover:rotate-y-6">
                             <div className="absolute inset-4 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#000] rounded-[2.5rem] shadow-2xl border border-white/10 flex items-center justify-center overflow-hidden">
                                 {/* Speaker Grill Texture */}
                                 <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(60,60,60,1)_1px,transparent_1px)] bg-[length:3px_3px] opacity-40"></div>
                                 
                                 {/* Main Driver */}
                                 <div className="relative z-10 w-40 h-40 rounded-full border-[6px] border-[#333] bg-[#111] shadow-[inset_0_4px_20px_rgba(0,0,0,0.8),0_5px_15px_rgba(0,0,0,0.5)] flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                                     {/* Center Cap */}
                                     <div className="w-20 h-20 rounded-full bg-gradient-to-b from-[#333] to-[#111] shadow-[0_2px_5px_rgba(0,0,0,0.5)] flex items-center justify-center relative overflow-hidden">
                                         <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-x-12"></div>
                                         <span className="text-orange-500 font-black text-sm tracking-widest drop-shadow-md">JBL</span>
                                     </div>
                                 </div>

                                 {/* Top/Bottom accents */}
                                 <div className="absolute top-8 w-16 h-1 bg-white/10 rounded-full"></div>
                                 <div className="absolute bottom-8 w-16 h-1 bg-white/10 rounded-full"></div>

                                 {/* Shine */}
                                 <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                             </div>
                             
                             {/* Side buttons hint */}
                             <div className="absolute right-4 top-20 w-1 h-8 bg-gray-600 rounded-l-md opacity-80"></div>
                             <div className="absolute right-4 top-32 w-1 h-8 bg-gray-600 rounded-l-md opacity-80"></div>
                        </div>
                    </div>
                </div>

                {/* Grand Prize Text */}
                <div className={`mt-4 text-center transition-all duration-500 transform ${hoveredItem === 'grand' ? 'translate-y-0 opacity-100 scale-105' : 'translate-y-4 opacity-100'}`}>
                    <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-[10px] md:text-xs font-black px-4 py-1 rounded-full uppercase tracking-widest mb-3 shadow-lg border border-yellow-200/40">
                        02 Giải Đặc Biệt
                    </div>
                    <h4 className="text-3xl md:text-5xl font-black text-white drop-shadow-xl mb-1 tracking-tight">
                        LOA BLUETOOTH JBL
                    </h4>
                    <p className="text-yellow-300 font-bold text-xl md:text-2xl drop-shadow-md">
                        1.500.000đ
                    </p>
                </div>
            </div>

            {/* RIGHT COLUMN: VOUCHER 2 */}
             <div className="flex flex-col items-center md:items-start order-3 z-20">
                  <FloatingItem 
                    icon={<Ticket className="w-8 h-8 text-white" />}
                    title="Voucher Got It"
                    subtitle="Trị giá 50.000đ"
                    color="from-blue-400 to-indigo-500"
                    position="left"
                    delay="1s"
                />
            </div>

        </div>

        {/* 4. BOTTOM: REGULAR GIFTS CLUSTER */}
        <div className="mt-16 md:mt-10 w-full text-center relative z-20">
            <h5 className="text-white/60 font-bold uppercase tracking-widest text-xs md:text-sm mb-8 animate-pulse-slow">Quà tặng thường xuyên</h5>
            
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 perspective-500">
                 <SmallGift icon={<Mail />} label="Bao Lì Xì" color="bg-red-500" delay="0s" />
                 <SmallGift icon={<Panda />} label="Gấu Saola" color="bg-yellow-500" delay="0.2s" />
                 <SmallGift icon={<CupSoda />} label="Bình Nước" color="bg-blue-500" delay="0.4s" />
                 <SmallGift icon={<PenTool />} label="Bút Bi" color="bg-purple-500" delay="0.6s" />
                 <SmallGift icon={<Puzzle />} label="Lego" color="bg-green-500" delay="0.8s" />
            </div>
        </div>

      </div>
    </section>
  );
};

const FloatingItem = ({ icon, title, subtitle, color, position = 'right', delay = '0s' }: any) => {
    return (
        <div 
           className="relative group cursor-pointer animate-float w-full max-w-xs"
           style={{ animationDelay: delay }}
        >
            <div className={`flex items-center gap-5 transition-all duration-300 ${position === 'left' ? 'flex-row' : 'flex-row-reverse md:flex-row'}`}>
                
                {/* Text Content */}
                <div className={`flex-1 text-center md:text-${position === 'right' ? 'right' : 'left'} transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:scale-105`}>
                    <h5 className="text-white font-bold text-xl leading-none drop-shadow-md mb-1">{title}</h5>
                    <p className="text-white/70 text-sm font-medium">{subtitle}</p>
                </div>

                {/* Icon Object */}
                <div className="relative flex-shrink-0">
                    {/* Light Trail */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br ${color} blur-2xl opacity-20 group-hover:opacity-50 transition-opacity duration-300 rounded-full`} />
                    
                    <div className={`
                        w-20 h-20 rounded-[1.2rem] bg-gradient-to-br ${color} 
                        flex items-center justify-center shadow-lg border border-white/20
                        transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]
                        relative z-10 backdrop-blur-md bg-opacity-90
                    `}>
                        <div className="absolute inset-0 bg-white/20 rounded-[1.2rem] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-[1.2rem]" />
                        {React.cloneElement(icon, { className: "w-9 h-9 text-white drop-shadow-md transform group-hover:rotate-12 transition-transform duration-300" })}
                    </div>
                </div>

            </div>
        </div>
    )
}

const SmallGift = ({ icon, label, color, delay }: any) => (
    <div 
        className="group flex flex-col items-center gap-3 cursor-pointer animate-float"
        style={{ animationDelay: delay, animationDuration: '4s' }}
    >
        <div className={`
            w-14 h-14 rounded-2xl ${color} bg-opacity-20 border border-white/10
            flex items-center justify-center backdrop-blur-sm relative overflow-hidden
            transition-all duration-300 group-hover:scale-125 group-hover:bg-opacity-40 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] group-hover:-translate-y-2
        `}>
             <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
             {React.cloneElement(icon, { className: "w-6 h-6 text-white opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" })}
        </div>
        <span className="text-xs font-bold text-white/50 group-hover:text-white transition-colors uppercase tracking-wider">{label}</span>
    </div>
)

export default PrizesSection;