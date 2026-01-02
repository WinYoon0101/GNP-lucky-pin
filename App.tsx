import React from 'react';
import { Clock, CheckCircle, Phone, ArrowRight, ShieldCheck, Gift, Youtube, Facebook } from 'lucide-react';
import FloatingBackground from './components/FloatingBackground';
import LuckyWheel from './components/LuckyWheel';
import TiltCard from './components/TiltCard';
import PrizesSection from './components/PrizesSection';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-brand-navy relative overflow-x-hidden selection:bg-brand-orange selection:text-white">
      <FloatingBackground />

      {/* HEADER / NAV */}
      <nav class="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-white/5 border-b border-white/10 animate-fade-in-up">

  <div class="flex items-center gap-3 cursor-pointer">
    <span class="text-2xl font-black text-white italic tracking-tighter group">
      GNP<span class="text-brand-navy group-hover:text-white transition-colors"></span>
    </span>
  </div>
</nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-10 px-4 z-10">
        
        {/* 3D Headline */}
        <div className="text-center mb-8 perspective-1000 z-20">
          <h1 className="text-6xl md:text-8xl font-display font-black text-white text-3d transform rotate-x-12 animate-scale-in origin-bottom mb-4 tracking-tight">
            GNP GO 2026!
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-white/90 drop-shadow-lg animate-fade-in-up [animation-delay:200ms] opacity-0">
            KHỞI ĐỘNG SỚM – <span className="text-yellow-300">BỨT PHÁ CẢ NĂM</span>
          </h2>
        </div>

            {/* TIME SECTION */}
      <section className="relative py-12 px-4 z-10">
        <div className="max-w-4xl mx-auto flex justify-center animate-fade-in-up [animation-delay:600ms] opacity-0">
           <TiltCard className="bg-white/20 backdrop-blur-xl border border-white/30 p-2 rounded-[2rem] shadow-2xl w-full md:w-auto hover:bg-white/30 transition-colors">
              <div className="flex flex-col md:flex-row items-center gap-6 px-8 py-6">
                <div className="bg-white p-5 rounded-2xl shadow-lg transform ">
                  <Clock className="w-10 h-10 text-brand-orange animate-pulse-slow" />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-blue-100 font-bold uppercase tracking-widest text-xs mb-1 text-white">Thời gian áp dụng 01/01 - 28/02/2026</p>
                  <p className="text-3xl md:text-5xl font-black text-white drop-shadow-md tracking-tight">VÒNG QUAY MAY MẮN</p>
                </div>
              </div>
           </TiltCard>
        </div>
      </section>

        {/* The Wheel */}
        <div className="w-full max-w-4xl mx-auto mb-12 transform scale-90 md:scale-100 animate-fade-in-up [animation-delay:400ms] opacity-0 z-10">
          <LuckyWheel />
        </div>

      </section>

  

      {/* OFFERS SECTION */}
      <section className="relative py-24 px-4 z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up [animation-delay:200ms] opacity-0">
           <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-4 inline-block backdrop-blur-sm">Chương Trình</span>
           <h3 className="text-4xl md:text-5xl font-display font-black text-white drop-shadow-lg">
            ƯU ĐÃI ĐẶC BIỆT
          </h3>
        </div>
        
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 px-4">
  {/* Offer 1 */}
  <div className="animate-fade-in-up [animation-delay:300ms] opacity-0 h-full">
    <TiltCard className="h-full">
      <div className="bg-gradient-to-br from-white to-orange-50 backdrop-blur-xl border-2 border-white/60 p-8 rounded-[2.5rem] shadow-2xl h-full flex flex-col relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-brand-orange text-white text-xs font-bold px-6 py-3 rounded-bl-3xl z-20 shadow-lg">
          LUYỆN THI
        </div>
        <div className="w-20 h-20 bg-brand-orange/10 rounded-3xl flex items-center justify-center mb-8 text-brand-orange transition-transform duration-500 hover:rotate-12 hover:scale-110">
           <img
          src="/gnp-logo.png"
          alt="gnp"
          className="w-12 h-12 rounded-full object-cover"
        />
        </div>
        <h4 className="text-3xl font-black text-brand-navy mb-3">Luyện Thi Nhân Tâm</h4>
        <p className="text-gray-500 mb-8 leading-relaxed font-medium">
          Toán Lý Hoá KHTN Văn Anh Văn Sinh... LT Tuyển Sinh 10, 12 LT Vào Trường Chuyên Toán Tư Duy LTĐGNL
        </p>
        
        <div className="space-y-4 mb-10 flex-grow">
          <div className="flex items-center gap-4 bg-white/60 p-4 rounded-2xl border border-white/50 shadow-sm transition-transform hover:translate-x-2">
            <div className="bg-green-100 p-2 rounded-full">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <span className="font-bold text-lg text-brand-navy">
              Giảm 20% học phí khi đóng trọn khoá (đến 05/2026)
            </span>
          </div>
          <div className="flex items-center gap-4 bg-white/60 p-4 rounded-2xl border border-white/50 shadow-sm transition-transform hover:translate-x-2">
            <div className="bg-orange-100 p-2 rounded-full">
              <Gift className="w-5 h-5 text-brand-orange" />
            </div>
            <span className="font-medium text-brand-navy">
              Tặng 01 bộ tài liệu ôn tập theo chương trình học đăng ký
            </span>
          </div>
        </div>
        
        {/* <button className="group w-full py-5 rounded-2xl bg-brand-orange text-white font-bold text-lg shadow-lg hover:shadow-orange-500/40 transition-all active:scale-95 flex items-center justify-center gap-3 overflow-hidden relative">
          <span className="relative z-10">Đăng Ký Ngay</span>
          <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button> */}
      </div>
    </TiltCard>
  </div>

  {/* Offer 2 */}
  <div className="animate-fade-in-up [animation-delay:500ms] opacity-0 h-full">
    <TiltCard className="h-full" intensity={18}>
      <div className="bg-gradient-to-br from-brand-navy via-[#16216A] to-blue-900 backdrop-blur-xl border-2 border-blue-400/30 p-8 rounded-[2.5rem] shadow-2xl h-full flex flex-col relative overflow-hidden text-white ring-1 ring-white/10">
        <div className="absolute -right-16 top-8 bg-yellow-400 text-brand-navy text-xs font-black px-16 py-2 rotate-45 shadow-[0_5px_20px_rgba(0,0,0,0.3)] z-20 uppercase tracking-widest">
          Best Value
        </div>
        
        <div className="w-20 h-20 bg-[#F2701C] rounded-3xl flex items-center justify-center mb-8 text-yellow-400 transition-transform duration-500 hover:rotate-[-12deg] hover:scale-110 border border-white/10">
           <img
          src="/english.jpg"
          alt="gnp"
          className="w-15 h-15 rounded-full object-cover"
        />
        </div>

        <h4 className="text-3xl font-black text-white mb-3">GNP English Academy</h4>
        <p className="text-blue-200 mb-8 leading-relaxed font-medium">
          Anh Văn Thiếu Nhi, Anh Văn Giao Tiếp, Anh Văn Du Học, IELTS, TOEIC,.. với lộ trình cá nhân hoá theo mục tiêu học tập.
        </p>
        
        <div className="space-y-4 mb-10 flex-grow">
          <div className="flex items-center gap-4 bg-white/10 p-6 rounded-2xl border border-white/10 shadow-sm transition-transform hover:translate-x-2">
            <div className="bg-yellow-400 p-2 rounded-full text-brand-navy font-bold text-xs">FREE</div>
            <span className="font-bold text-xl text-white">Tặng 01 khóa học miễn phí</span>
          </div>
          <div className="flex items-center gap-4 bg-white/10 p-6 rounded-2xl border border-white/10 shadow-sm transition-transform hover:translate-x-2">
            <div className="bg-blue-500/30 p-2 rounded-full">
              <CheckCircle className="w-5 h-5 text-blue-300" />
            </div>
            <span className="font-medium text-blue-100">
              Khi đăng ký 03 khóa liên tiếp
            </span>
          </div>
        </div>
        
        {/* <button className="group w-full py-5 rounded-2xl bg-white text-brand-navy font-bold text-lg shadow-[0_5px_0_#cbd5e1] hover:translate-y-[-2px] hover:shadow-[0_8px_0_#cbd5e1] transition-all active:translate-y-[2px] active:shadow-none flex items-center justify-center gap-3">
          <span>Tư Vấn Lộ Trình</span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button> */}
      </div>
    </TiltCard>
  </div>
</div>

      </section>

      {/* PRIZES SHOWCASE - REDESIGNED */}
      <PrizesSection />

   

 
     {/* FOOTER */}
<footer className="relative z-10 bg-brand-navy text-white py-20 px-4 rounded-t-[3rem] -mt-12 shadow-[0_-20px_60px_rgba(0,0,0,0.4)] overflow-hidden">
  {/* Background decoration */}
  <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
    <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-orange blur-[100px]"></div>
  </div>

  <div className="max-w-6xl mx-auto relative z-10 text-center md:text-left animate-fade-in-up [animation-delay:800ms] opacity-0">
    
    {/* Call to action */}
    <h2 className="text-4xl md:text-6xl font-display font-black mb-8 leading-tight">
      SẴN SÀNG <span className="text-brand-orange">BỨT PHÁ</span> 2026?
    </h2>
    <button className="group bg-gradient-to-r from-brand-orange to-red-600 text-white text-xl font-bold py-5 px-10 rounded-full shadow-2xl hover:shadow-orange-500/40 transform hover:scale-105 transition-all flex items-center justify-center gap-3 relative overflow-hidden mb-16 mx-auto md:mx-0">
      <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
      <Phone className="w-6 h-6 animate-bounce-slight" />
      <span>ĐĂNG KÝ TƯ VẤN NGAY</span>
    </button>

    {/* Contact & locations */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 text-left">
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-brand-orange">Địa chỉ các cơ sở</h3>
        <p>Cơ sở 1: 46A Trần Bình Trọng, P. Bình Lợi Trung, TP. Hồ Chí Minh</p>
        <p>Cơ sở 2: 145 Nguyễn Văn Thương, P. Thạnh Mỹ Tây, TP. Hồ Chí Minh</p>
        <p>Cơ sở 3: 134 Nơ Trang Long, P. Bình Thạnh, TP. Hồ Chí Minh</p>
      </div>
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-brand-orange">Liên hệ</h3>
        <p>Hotline: <span className="font-bold">0286.286.2934 - 0286.286.2931</span></p>
        <p>Zalo: <span className="font-bold">0968 322 382</span></p>
        <p>Email: <span className="font-bold">info@gnp.edu.vn</span></p>
      </div>
    </div>

    {/* Social Media */}
<div className="pt-6 border-t border-indigo-500">
  <div className="flex flex-col items-center gap-4">
    <p className="font-bold text-lg">THEO DÕI GNP TẠI:</p>

    <div className="flex gap-6 items-center">
      {/* Facebook */}
      <a
        href="https://www.facebook.com/gnpngoaingutinhoc"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="hover:scale-110 transition-transform"
      >
        <img
          src="/social/facebook.png"
          alt="Facebook"
          className="w-12 h-12 rounded-full object-cover"
        />
      </a>

      {/* Zalo */}
      <a
        href="https://zalo.me/0968322382"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Zalo"
        className="hover:scale-110 transition-transform"
      >
        <img
          src="/social/zalo.png"
          alt="Zalo"
          className="w-12 h-12 rounded-full object-cover"
        />
      </a>

      {/* TikTok */}
      <a
        href="https://www.tiktok.com/@nhantamenglishcenter"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TikTok"
        className="hover:scale-110 transition-transform"
      >
        <img
          src="/social/tiktok.png"
          alt="TikTok"
          className="w-12 h-12 rounded-full object-cover"
        />
      </a>

      {/* YouTube */}
      <a
        href="https://www.youtube.com/@gnpnhantam"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className="hover:scale-110 transition-transform"
      >
        <img
          src="/social/youtube.png"
          alt="YouTube"
          className="w-12 h-12 rounded-full object-cover"
        />
      </a>
    </div>
  </div>
</div>



    {/* Copyright */}
    <p className="text-sm text-white/30 font-medium text-center md:text-left mt-6">
      © 2026 GNP Education. All rights reserved.
    </p>
  </div>
</footer>

    </div>
  );
};

export default App;