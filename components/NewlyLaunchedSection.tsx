'use client';

import React, { useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Star,
  ShoppingCart,
  Heart,
  Eye,
  Zap,
  TrendingUp
} from 'lucide-react';
import { PRODUCTS } from '@/lib/data';
import { useCart } from '@/lib/cart-context';

export default function NewlyLaunchedSection() {
  const { addToCart, toggleWishlist, isInWishlist, openQuickView } = useCart();
  const scrollRef = useRef<HTMLDivElement>(null);

  const trendingProducts = PRODUCTS.filter((p) => p.isNewTrending);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-white border-y border-slate-100" id="new-trending-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center space-x-2 text-[#003399] font-bold text-xs uppercase tracking-wider mb-1.5">
              <TrendingUp className="w-4 h-4 text-[#003399]" />
              <span>Fresh Arrivals & Viral Tech</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-sans">
              Newly Launched and Trending
            </h2>
            <p className="text-slate-500 text-sm mt-1 max-w-xl font-normal">
              Explore the hottest wireless audio, wearable smart tags, wearable AI, and summer travel gadgets.
            </p>
          </div>

          {/* Scroll Navigation Arrows */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center transition-all shadow-2xs cursor-pointer active:scale-95"
              id="trending-scroll-left-btn"
              aria-label="Scroll trending left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center transition-all shadow-2xs cursor-pointer active:scale-95"
              id="trending-scroll-right-btn"
              aria-label="Scroll trending right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll of Trending Products */}
        <div
          ref={scrollRef}
          className="flex space-x-4 sm:space-x-5 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory no-scrollbar"
          id="trending-products-container"
        >
          {trendingProducts.map((product) => {
            const isSaved = isInWishlist(product.id);
            const savings = product.originalPrice - product.discountedPrice;

            return (
              <div
                key={product.id}
                className="min-w-[270px] sm:min-w-[300px] max-w-[300px] bg-white rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group snap-start relative"
                id={`trending-card-${product.id}`}
              >
                {/* Badge & Quick Controls */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#003399] text-white">
                    {product.tag || 'NEW'}
                  </span>

                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => openQuickView(product)}
                      className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
                      title="Quick Preview"
                      id={`trending-quickview-${product.id}`}
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className={`p-1.5 rounded-full transition-colors ${
                        isSaved ? 'text-rose-500 bg-rose-50' : 'text-slate-400 hover:text-rose-500 hover:bg-slate-100'
                      }`}
                      title={isSaved ? 'Remove from wishlist' : 'Add to wishlist'}
                      id={`trending-wishlist-${product.id}`}
                    >
                      <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-500' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Product Image */}
                <div
                  onClick={() => openQuickView(product)}
                  className="relative w-full aspect-square mb-3.5 rounded-xl overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute bottom-2 left-2 bg-white/95 text-slate-800 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-2xs">
                    {product.brand}
                  </span>
                </div>

                {/* Info & Specs */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-1.5">
                      <div className="flex items-center space-x-1 bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded text-xs font-bold">
                        <span>{product.rating}</span>
                        <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                      </div>
                      <span className="text-[11px] text-slate-400">({product.reviewsCount.toLocaleString('en-IN')})</span>
                    </div>

                    {/* Name */}
                    <h3
                      onClick={() => openQuickView(product)}
                      className="text-sm font-bold text-slate-900 line-clamp-2 hover:text-[#003399] cursor-pointer transition-colors leading-snug"
                    >
                      {product.name}
                    </h3>

                    {/* Specs chips */}
                    <div className="flex flex-wrap gap-1 mt-2 mb-3">
                      {product.specs.slice(0, 2).map((spec, i) => (
                        <span key={i} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & Add to Cart */}
                  <div className="pt-2 border-t border-slate-100">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-lg font-black text-slate-900">
                        ₹{product.discountedPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-slate-400 line-through">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <div className="text-[10px] font-semibold text-emerald-600 mt-0.5">
                      Save ₹{savings.toLocaleString('en-IN')} ({product.discountPercentage}% OFF)
                    </div>

                    <button
                      onClick={() => addToCart(product)}
                      className="w-full mt-2.5 py-2.5 px-3.5 rounded-xl bg-[#003399] hover:bg-[#002673] active:bg-[#001f5c] text-white font-bold text-xs uppercase tracking-wider shadow-xs transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                      id={`trending-add-btn-${product.id}`}
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
