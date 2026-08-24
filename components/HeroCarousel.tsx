'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Zap, ShieldCheck, ArrowRight, Pause, Play } from 'lucide-react';
import { HERO_BANNERS } from '@/lib/data';
import { useCart } from '@/lib/cart-context';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { openCart, addToast } = useCart();

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_BANNERS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_BANNERS.length) % HERO_BANNERS.length);
  }, []);

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  const slide = HERO_BANNERS[currentSlide];

  const handleCtaClick = () => {
    const targetSection = document.getElementById('mega-sale-section');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    addToast('Offer Activated', `${slide.title} offer applied to your browsing session!`, 'info');
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-[#111111] text-white select-none border-b border-white/5"
      id="hero-carousel-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Banner Slides */}
      <div className="relative min-h-[440px] sm:min-h-[480px] lg:min-h-[500px] flex items-center">
        
        {/* Subtle Background Glows */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 pointer-events-none z-1" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-4 sm:space-y-5 animate-in fade-in slide-in-from-left duration-300">
              
              {/* Badge */}
              <div className="flex items-center space-x-2">
                <span className="bg-[#003399] text-white text-[10px] font-black uppercase tracking-[0.2em] px-3.5 py-1 rounded-full shadow-sm">
                  {slide.badge}
                </span>
                <span className="text-xs text-slate-300 font-semibold flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  Instant Store Pickup in 2h
                </span>
              </div>

              {/* Title & Highlight */}
              <div className="space-y-1 sm:space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white font-sans leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-slate-300">
                  {slide.highlight}
                </p>
              </div>

              {/* Subtitle description */}
              <p className="text-sm sm:text-base text-slate-400 max-w-xl font-normal leading-relaxed">
                {slide.subtitle}
              </p>

              {/* Bank & Finance Offer Box */}
              <div className="w-full max-w-xl p-3 sm:p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs flex items-center justify-between gap-3 text-xs sm:text-sm">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{slide.offerText}</div>
                    <div className="text-slate-400 text-xs">{slide.priceText}</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handleCtaClick}
                  className="bg-white text-black font-bold py-3 px-8 rounded-full text-sm hover:bg-[#003399] hover:text-white transition-all shadow-md flex items-center space-x-2 cursor-pointer group"
                  id={`hero-cta-btn-${slide.id}`}
                >
                  <span>{slide.ctaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => {
                    const dod = document.getElementById('deal-of-the-day-section');
                    if (dod) dod.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold text-sm transition-all cursor-pointer"
                  id="hero-view-deals-btn"
                >
                  View Today&apos;s Deals
                </button>
              </div>
            </div>

            {/* Right Product Visual Column */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <div className="relative w-full max-w-sm sm:max-w-md aspect-4/3 sm:aspect-square flex items-center justify-center">
                
                {/* Hero Showcase Image */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl border border-white/10 transform hover:scale-102 transition-transform duration-500"
                />

                {/* Floating Micro Badge */}
                <div className="absolute -bottom-3 -left-3 sm:bottom-4 sm:left-2 z-20 bg-[#111111]/95 border border-white/10 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <div className="text-left">
                    <div className="text-[11px] font-bold text-white leading-tight">Official Brand Warranty</div>
                    <div className="text-[10px] text-slate-400 leading-tight">1 Year Replacement Support</div>
                  </div>
                </div>

                <div className="absolute -top-3 -right-3 sm:top-4 sm:right-2 z-20 bg-[#003399] text-white px-3.5 py-1.5 rounded-full shadow-lg text-xs font-bold tracking-wider uppercase">
                  Top Rated Deal
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Carousel Navigation Arrow Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black border border-white/10 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105"
          id="hero-prev-btn"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black border border-white/10 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105"
          id="hero-next-btn"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Bottom Carousel Pill Indicators & Play/Pause */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
          {HERO_BANNERS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                index === currentSlide ? 'w-10 bg-white' : 'w-4 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              id={`hero-dot-${index}`}
            />
          ))}

          <div className="h-3 w-px bg-white/20 ml-1" />

          <button
            onClick={() => setIsPaused(!isPaused)}
            className="text-white/60 hover:text-white transition-colors cursor-pointer p-0.5"
            title={isPaused ? 'Resume auto-play' : 'Pause auto-play'}
            id="hero-pause-toggle-btn"
          >
            {isPaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
          </button>
        </div>

      </div>
    </section>
  );
}
