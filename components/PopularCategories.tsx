'use client';

import React, { useRef } from 'react';
import {
  Sparkles,
  Camera,
  Waves,
  Wind,
  Volume2,
  Activity,
  Cpu,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';
import { NON_PHONE_CATEGORIES } from '@/lib/data';
import { useCart } from '@/lib/cart-context';

const categoryIconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-6 h-6" />,
  Camera: <Camera className="w-6 h-6" />,
  Waves: <Waves className="w-6 h-6" />,
  Wind: <Wind className="w-6 h-6" />,
  Volume2: <Volume2 className="w-6 h-6" />,
  Activity: <Activity className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />
};

export default function PopularCategories() {
  const { addToast } = useCart();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -260 : 260;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  const handleCategoryClick = (name: string) => {
    addToast(`${name} Category`, `Opening ${name} store collection. Up to 45% off on home electronics!`, 'info');
  };

  return (
    <section
      className="py-12 sm:py-16 bg-[#0A0A0A] text-white border-t border-white/5"
      id="popular-categories-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="text-[#003399] font-bold text-xs uppercase tracking-wider mb-1">
              Explore Beyond Smartphones
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-sans">
              Popular Categories
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-xl font-normal">
              Smart home living, car dashcams, intelligent cooling, and pro sound systems.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 flex items-center justify-center transition-all cursor-pointer"
              id="popular-cat-scroll-left-btn"
              aria-label="Scroll categories left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 flex items-center justify-center transition-all cursor-pointer"
              id="popular-cat-scroll-right-btn"
              aria-label="Scroll categories right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Circular Category Items Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="flex space-x-6 sm:space-x-8 overflow-x-auto pb-4 pt-2 snap-x no-scrollbar"
          id="popular-categories-container"
        >
          {NON_PHONE_CATEGORIES.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCategoryClick(item.name)}
              className="flex flex-col items-center min-w-[130px] sm:min-w-[150px] group cursor-pointer snap-start text-center"
              id={`popular-cat-card-${item.id}`}
            >
              {/* Circular Icon Container with Subtle Ring */}
              <div className="relative w-22 h-22 sm:w-26 sm:h-26 rounded-full p-1 bg-white/5 border border-white/10 group-hover:border-[#003399] transition-all duration-300 shadow-md group-hover:scale-105">
                <div className="w-full h-full rounded-full bg-[#111111] overflow-hidden flex items-center justify-center relative border border-white/5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-110 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-2xs flex items-center justify-center text-white group-hover:text-blue-400 transition-colors">
                    {categoryIconMap[item.iconName]}
                  </div>
                </div>
              </div>

              {/* Title & Badge */}
              <h3 className="mt-3 font-bold text-white text-sm sm:text-base group-hover:text-blue-400 transition-colors">
                {item.name}
              </h3>
              
              <span className="text-[10px] text-slate-400 mt-0.5 line-clamp-1 uppercase tracking-wider">
                {item.badge}
              </span>

              <span className="mt-2 text-[10px] font-bold text-[#003399] flex items-center group-hover:underline uppercase tracking-wider">
                Shop Range <ArrowUpRight className="w-3 h-3 ml-0.5" />
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
