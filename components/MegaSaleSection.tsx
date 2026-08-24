'use client';

import React, { useRef, useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Clock,
  Star,
  ShoppingCart,
  Heart,
  Eye,
  CheckCircle2,
  ArrowRight,
  Flame
} from 'lucide-react';
import { PRODUCTS, Product } from '@/lib/data';
import { useCart } from '@/lib/cart-context';

export default function MegaSaleSection() {
  const { addToCart, toggleWishlist, isInWishlist, openQuickView, addToast } = useCart();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Flash Sale Countdown Clock
  const [timeLeft, setTimeLeft] = useState({ hours: 7, minutes: 48, seconds: 35 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 8, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const megaSaleProducts = PRODUCTS.filter((p) => p.isMegaSale);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      className="py-12 sm:py-16 bg-[#FFF1E6] border-y border-orange-100 relative overflow-hidden"
      id="mega-sale-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Live Countdown Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center space-x-2 text-orange-700 font-bold text-xs uppercase tracking-wider mb-1.5">
              <Flame className="w-4 h-4 text-orange-600 fill-orange-500 animate-bounce" />
              <span>Limited Period Festive Bonanza</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-orange-950 tracking-tight font-sans">
              Hurry Up! Get Up to 50% Off
            </h2>
            <p className="text-orange-800/80 text-sm sm:text-base mt-1 max-w-xl font-normal">
              Exclusive seasonal price drops on premium flagship smartphones with instant bank cashback & exchange bonus.
            </p>
          </div>

          {/* Flash Timer & Navigation Controls */}
          <div className="flex items-center justify-between md:justify-end gap-3 sm:gap-4">
            
            {/* Live Countdown Clock */}
            <div className="flex items-center space-x-2 bg-white px-3.5 py-1.5 rounded-full shadow-sm text-xs font-bold text-orange-600 border border-orange-200/60">
              <Clock className="w-3.5 h-3.5 text-orange-600" />
              <span className="text-xs font-semibold text-slate-600 mr-1">Ends in:</span>
              <div className="flex items-center space-x-1 font-mono font-bold text-slate-900 text-xs">
                <span className="px-1.5 py-0.5 bg-orange-50 text-orange-700 rounded-md">
                  {String(timeLeft.hours).padStart(2, '0')}h
                </span>
                <span className="text-orange-400">:</span>
                <span className="px-1.5 py-0.5 bg-orange-50 text-orange-700 rounded-md">
                  {String(timeLeft.minutes).padStart(2, '0')}m
                </span>
                <span className="text-orange-400">:</span>
                <span className="px-1.5 py-0.5 bg-orange-50 text-orange-700 rounded-md">
                  {String(timeLeft.seconds).padStart(2, '0')}s
                </span>
              </div>
            </div>

            {/* Scroll Navigation Buttons */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => scroll('left')}
                className="w-9 h-9 rounded-full bg-white hover:bg-orange-50 border border-orange-200/80 text-slate-700 hover:text-orange-600 flex items-center justify-center transition-all shadow-2xs cursor-pointer active:scale-95"
                id="mega-sale-scroll-left-btn"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-9 h-9 rounded-full bg-white hover:bg-orange-50 border border-orange-200/80 text-slate-700 hover:text-orange-600 flex items-center justify-center transition-all shadow-2xs cursor-pointer active:scale-95"
                id="mega-sale-scroll-right-btn"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll of Product Cards */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-4 sm:space-x-5 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory no-scrollbar"
          id="mega-sale-products-carousel"
        >
          {megaSaleProducts.map((product) => {
            const isSaved = isInWishlist(product.id);
            const savings = product.originalPrice - product.discountedPrice;

            return (
              <div
                key={product.id}
                className="min-w-[280px] sm:min-w-[310px] max-w-[310px] bg-white rounded-2xl p-4 sm:p-5 border border-orange-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group snap-start relative"
                id={`mega-sale-card-${product.id}`}
              >
                {/* Top Pill Discount Badge & Wishlist Button */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-orange-600 text-white text-[11px] font-bold uppercase tracking-wider">
                    {product.discountPercentage}% OFF
                  </span>
                  
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => openQuickView(product)}
                      className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
                      title="Quick Preview"
                      id={`mega-sale-quickview-${product.id}`}
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className={`p-1.5 rounded-full transition-colors ${
                        isSaved ? 'text-rose-500 bg-rose-50' : 'text-slate-400 hover:text-rose-500 hover:bg-slate-100'
                      }`}
                      title={isSaved ? 'Remove from wishlist' : 'Add to wishlist'}
                      id={`mega-sale-wishlist-${product.id}`}
                    >
                      <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-500' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Product Image with Hover Zoom */}
                <div
                  onClick={() => openQuickView(product)}
                  className="relative w-full aspect-square mb-4 rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Subtle Brand Tag */}
                  <span className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-xs text-[#003399] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md shadow-2xs">
                    {product.brand}
                  </span>
                </div>

                {/* Product Info & Specs */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Rating & Reviews */}
                    <div className="flex items-center space-x-1.5 mb-1.5">
                      <div className="flex items-center space-x-1 bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded text-xs font-bold">
                        <span>{product.rating}</span>
                        <Star className="w-3 h-3 fill-emerald-600 text-emerald-600" />
                      </div>
                      <span className="text-xs text-slate-400">({product.reviewsCount.toLocaleString('en-IN')} reviews)</span>
                    </div>

                    {/* Name */}
                    <h3
                      onClick={() => openQuickView(product)}
                      className="text-sm sm:text-base font-bold text-slate-900 line-clamp-2 hover:text-[#003399] cursor-pointer transition-colors leading-snug"
                    >
                      {product.name}
                    </h3>

                    {/* Highlight Spec Chips */}
                    <div className="flex flex-wrap gap-1 mt-2.5 mb-3">
                      {product.specs.slice(0, 2).map((spec, i) => (
                        <span key={i} className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing Section */}
                  <div className="pt-2 border-t border-slate-100">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-lg sm:text-xl font-black text-slate-900">
                        ₹{product.discountedPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs sm:text-sm text-slate-400 line-through">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <div className="text-[11px] font-semibold text-emerald-600 mt-0.5">
                      Save ₹{savings.toLocaleString('en-IN')} • EMI from ₹{product.emiStarting}/mo
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      onClick={() => addToCart(product)}
                      className="w-full mt-3 py-2.5 px-4 rounded-xl bg-[#003399] hover:bg-[#002673] active:bg-[#001f5c] text-white font-bold text-xs uppercase tracking-wider shadow-xs hover:shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer"
                      id={`mega-sale-add-btn-${product.id}`}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Large Explore Now CTA Button at bottom of this section */}
        <div className="mt-8 sm:mt-10 text-center">
          <button
            onClick={() => {
              const bestSellers = document.getElementById('best-sellers-section');
              if (bestSellers) bestSellers.scrollIntoView({ behavior: 'smooth' });
              addToast('Browsing Catalog', 'Showing all verified smartphones with warranty.', 'info');
            }}
            className="inline-flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3.5 px-8 rounded-full text-xs uppercase tracking-widest shadow-md shadow-orange-600/20 hover:shadow-lg transition-all cursor-pointer group"
            id="mega-sale-explore-now-btn"
          >
            <span>Explore All Mega Sale Offers</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
