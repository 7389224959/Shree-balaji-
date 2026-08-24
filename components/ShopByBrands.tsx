'use client';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { BRANDS_LIST } from '@/lib/data';
import { useCart } from '@/lib/cart-context';

export default function ShopByBrands() {
  const { activeBrandFilter, setActiveBrandFilter, addToast } = useCart();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -280 : 280;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  const handleBrandClick = (brandName: string) => {
    if (activeBrandFilter === brandName) {
      setActiveBrandFilter(null);
      addToast('Brand Filter Cleared', 'Showing all brand smartphones', 'info');
    } else {
      setActiveBrandFilter(brandName);
      addToast(`${brandName} Selected`, `Filtering phones from official ${brandName} catalog`, 'info');
      // Smooth scroll down to best sellers to show the filtered selection
      const bestSellers = document.getElementById('best-sellers-section');
      if (bestSellers) {
        bestSellers.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-100" id="shop-by-brands-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="text-[#003399] font-bold text-xs uppercase tracking-wider mb-1">
              Authorized Retail Partnerships
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-sans">
              Shop Phones by Brands
            </h2>
            <p className="text-slate-500 text-sm mt-1 max-w-xl font-normal">
              Official warranty, zero-cost EMI, and manufacturer exchange bonus on all top brands.
            </p>
          </div>

          {/* Scroll Navigation Arrows */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center transition-all shadow-2xs cursor-pointer active:scale-95"
              id="brands-scroll-left-btn"
              aria-label="Scroll brands left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center transition-all shadow-2xs cursor-pointer active:scale-95"
              id="brands-scroll-right-btn"
              aria-label="Scroll brands right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Brand Cards List */}
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto pb-4 pt-1 snap-x no-scrollbar"
          id="brands-scroll-container"
        >
          {BRANDS_LIST.map((brand) => {
            const isSelected = activeBrandFilter === brand.name;

            return (
              <div
                key={brand.id}
                onClick={() => handleBrandClick(brand.name)}
                className={`min-w-[170px] sm:min-w-[190px] max-w-[190px] p-4 rounded-2xl border transition-all duration-200 cursor-pointer snap-start flex flex-col items-center text-center group ${
                  isSelected
                    ? 'bg-blue-50/70 border-[#003399] shadow-md ring-2 ring-[#003399]/20'
                    : 'bg-white border-slate-100 hover:border-slate-300 hover:shadow-md'
                }`}
                id={`brand-card-${brand.id}`}
              >
                {/* Brand Visual Logo / Avatar */}
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-slate-50 border border-slate-100 overflow-hidden flex items-center justify-center p-2 mb-3 group-hover:scale-105 transition-transform duration-200 shadow-2xs">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                {/* Brand Name */}
                <h3 className="font-bold text-slate-900 text-base group-hover:text-[#003399] transition-colors">
                  {brand.name}
                </h3>

                {/* Tagline / Subtitle */}
                <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5 font-normal">
                  {brand.tagline}
                </p>

                {/* Badge */}
                {brand.badge && (
                  <span className="mt-2.5 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-50 text-slate-700 border border-slate-200">
                    {brand.badge}
                  </span>
                )}

                {/* View Products Indicator */}
                <div className="mt-3 flex items-center text-[11px] font-bold text-[#003399] group-hover:underline">
                  <span>{isSelected ? 'Selected' : 'View Models'}</span>
                  <ArrowUpRight className="w-3 h-3 ml-0.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Filter Clear Bar if applied */}
        {activeBrandFilter && (
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-between text-xs text-[#003399]">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#003399]" />
              <span>
                Currently filtering catalog by: <strong>{activeBrandFilter}</strong>
              </span>
            </div>
            <button
              onClick={() => setActiveBrandFilter(null)}
              className="text-[#003399] font-bold hover:underline"
              id="clear-brand-filter-btn"
            >
              Clear Brand Filter (Show All)
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
