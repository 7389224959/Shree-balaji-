'use client';

import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Clock,
  Zap,
  ShieldCheck,
  ShoppingCart,
  Heart,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Flame,
  CheckCircle2,
  Gift
} from 'lucide-react';
import { PRODUCTS, Product } from '@/lib/data';
import { useCart } from '@/lib/cart-context';

export default function DealOfTheDay() {
  const { addToCart, toggleWishlist, isInWishlist, openQuickView, addToast } = useCart();
  const [activeDealIndex, setActiveDealIndex] = useState(0);
  
  // Ticking Countdown for Deal of the day
  const [countdown, setCountdown] = useState({ hours: 6, minutes: 42, seconds: 18 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const dealProducts = PRODUCTS.filter((p) => p.isDealOfDay);
  const currentDeal = dealProducts[activeDealIndex] || dealProducts[0];
  const isSaved = isInWishlist(currentDeal.id);

  const nextDeal = () => {
    setActiveDealIndex((prev) => (prev + 1) % dealProducts.length);
  };

  const prevDeal = () => {
    setActiveDealIndex((prev) => (prev - 1 + dealProducts.length) % dealProducts.length);
  };

  return (
    <section
      className="py-14 sm:py-20 bg-[#0A0A0A] text-white relative overflow-hidden border-t border-white/5"
      id="deal-of-the-day-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center space-x-2 text-rose-500 font-bold text-xs uppercase tracking-wider mb-2">
              <Flame className="w-4 h-4 fill-rose-500 text-rose-500 animate-pulse" />
              <span>Flagship Daily Exclusive Drop</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight font-sans">
              Deal of the Day
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-xl font-normal">
              Limited daily inventory allocated directly from brand warehouses at wholesale festive rates.
            </p>
          </div>

          {/* Deal Countdown Clock */}
          <div className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl shadow-xs">
            <Clock className="w-4 h-4 text-rose-400" />
            <span className="text-xs text-slate-300 font-semibold">Deal expires in:</span>
            <div className="font-mono font-bold text-white text-sm flex items-center space-x-1">
              <span className="px-1.5 py-0.5 bg-white/10 text-rose-300 rounded">
                {String(countdown.hours).padStart(2, '0')}h
              </span>
              <span className="text-rose-400">:</span>
              <span className="px-1.5 py-0.5 bg-white/10 text-rose-300 rounded">
                {String(countdown.minutes).padStart(2, '0')}m
              </span>
              <span className="text-rose-400">:</span>
              <span className="px-1.5 py-0.5 bg-white/10 text-rose-300 rounded">
                {String(countdown.seconds).padStart(2, '0')}s
              </span>
            </div>
          </div>
        </div>

        {/* Big Flagship Deal Card Showcase */}
        <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Product Showcase Image & Gallery Selector */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full aspect-square max-w-md rounded-2xl overflow-hidden bg-black/40 border border-white/5 p-4 flex items-center justify-center group">
                
                {/* Visual Image */}
                <img
                  src={currentDeal.image}
                  alt={currentDeal.name}
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                />

                {/* Deal Tag */}
                <div className="absolute top-4 left-4 bg-rose-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-md">
                  {currentDeal.discountPercentage}% OFF TODAY
                </div>

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(currentDeal.id)}
                  className={`absolute top-4 right-4 p-2 rounded-full transition-all ${
                    isSaved
                      ? 'bg-rose-900/80 text-rose-400'
                      : 'bg-black/60 text-slate-400 hover:text-rose-400'
                  }`}
                  id={`deal-wishlist-btn-${currentDeal.id}`}
                >
                  <Heart className={`w-5 h-5 ${isSaved ? 'fill-rose-500' : ''}`} />
                </button>
              </div>

              {/* Deal Carousel Navigation Tabs */}
              <div className="flex items-center space-x-2 mt-4">
                {dealProducts.map((deal, idx) => (
                  <button
                    key={deal.id}
                    onClick={() => setActiveDealIndex(idx)}
                    className={`text-xs px-3 py-1.5 rounded-lg border font-semibold transition-all cursor-pointer ${
                      idx === activeDealIndex
                        ? 'bg-[#003399] text-white border-[#003399] shadow-xs'
                        : 'bg-white/5 text-slate-400 border-white/10 hover:text-white'
                    }`}
                    id={`deal-tab-${deal.id}`}
                  >
                    {deal.brand} {deal.name.split(' ')[1] || 'Deal'}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Feature Highlights, Pricing & Buy Controls */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              
              <div>
                {/* Brand & Stock Status */}
                <div className="flex items-center space-x-3 mb-2">
                  <span className="px-2.5 py-1 rounded-md bg-[#003399]/20 text-blue-400 border border-[#003399]/30 text-xs font-bold uppercase tracking-wider">
                    {currentDeal.brand} Official Store
                  </span>
                  <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5" />
                    Express Dispatch in 2 Hours
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight font-sans">
                  {currentDeal.name}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed font-normal">
                  {currentDeal.description}
                </p>

                {/* Flagship Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-5">
                  {currentDeal.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center space-x-2 text-xs sm:text-sm text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="font-medium truncate">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing & Inclusive Offers Box */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
                <div className="flex flex-wrap items-baseline gap-3">
                  <div className="text-xs text-slate-400 uppercase font-semibold">Starting from</div>
                  <div className="text-3xl sm:text-4xl font-black text-white">
                    ₹{currentDeal.discountedPrice.toLocaleString('en-IN')}
                  </div>
                  <div className="text-sm sm:text-base text-slate-500 line-through">
                    MRP ₹{currentDeal.originalPrice.toLocaleString('en-IN')}
                  </div>
                  <div className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                    Save ₹{(currentDeal.originalPrice - currentDeal.discountedPrice).toLocaleString('en-IN')}
                  </div>
                </div>

                {/* Inclusive of offers text */}
                <div className="mt-2 text-xs sm:text-sm text-amber-300 font-medium flex items-center gap-1.5">
                  <Gift className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>
                    {currentDeal.inclusiveOfferText || 'Inclusive of bank offers & exchange bonus + Free 1-Year Screen Shield'}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => {
                    addToCart(currentDeal);
                  }}
                  className="flex-1 min-w-[200px] py-3 px-6 rounded-xl bg-[#003399] hover:bg-[#002673] active:bg-[#001f5c] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  id={`deal-add-cart-btn-${currentDeal.id}`}
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Claim Deal & Add to Cart</span>
                </button>

                <button
                  onClick={() => openQuickView(currentDeal)}
                  className="py-3 px-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                  id={`deal-quickview-btn-${currentDeal.id}`}
                >
                  View Details & EMI
                </button>

                {/* Prev / Next Deal Arrows */}
                <div className="flex items-center space-x-1.5 ml-auto">
                  <button
                    onClick={prevDeal}
                    className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center cursor-pointer"
                    id="deal-prev-arrow"
                    title="Previous Flagship Deal"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextDeal}
                    className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center cursor-pointer"
                    id="deal-next-arrow"
                    title="Next Flagship Deal"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
