'use client';

import React from 'react';
import {
  Star,
  ShoppingCart,
  Heart,
  Eye,
  Zap,
  ShieldCheck,
  Flame,
  Sparkles
} from 'lucide-react';
import { PRODUCTS } from '@/lib/data';
import { useCart } from '@/lib/cart-context';

export default function BestSellingPhones() {
  const {
    addToCart,
    toggleWishlist,
    isInWishlist,
    openQuickView,
    activeBrandFilter,
    selectedCity
  } = useCart();

  // Filter products: either best sellers matching active brand or all best sellers
  const displayedProducts = PRODUCTS.filter((p) => {
    if (activeBrandFilter) {
      return p.brand.toLowerCase() === activeBrandFilter.toLowerCase();
    }
    return p.isBestSeller || p.category === 'smartphones';
  }).slice(0, 4);

  return (
    <section
      className="py-14 sm:py-20 bg-[#111111] text-white relative overflow-hidden border-b border-white/5"
      id="best-sellers-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center space-x-2 text-slate-400 font-bold text-xs uppercase tracking-wider mb-2">
              <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full animate-pulse" />
              <span>Customer Verified Top Rated</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight font-sans">
              Best Selling Phones
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-1 max-w-xl font-normal">
              Most loved smartphones across 250+ Balaji Mobiles stores with unmatched value and speed.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-xs text-slate-400 hidden sm:inline-block">
              {activeBrandFilter ? `Showing ${activeBrandFilter} Models` : 'Showing Top 4 Best Sellers'}
            </span>
          </div>
        </div>

        {/* Product Cards Grid (Dark Theme Luxury Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="best-sellers-grid">
          {displayedProducts.map((product) => {
            const isSaved = isInWishlist(product.id);
            const savings = product.originalPrice - product.discountedPrice;

            return (
              <div
                key={product.id}
                className="bg-white/5 rounded-2xl p-5 border border-white/5 hover:border-white/15 hover:bg-white/[0.08] transition-all duration-300 flex flex-col justify-between group relative"
                id={`bestseller-card-${product.id}`}
              >
                {/* Top Badge & Actions */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#003399] text-white">
                    {product.tag || `${product.discountPercentage}% OFF`}
                  </span>

                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => openQuickView(product)}
                      className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-400 hover:text-white transition-colors"
                      title="Quick Preview"
                      id={`bestseller-quickview-${product.id}`}
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className={`p-1.5 rounded-full transition-colors ${
                        isSaved ? 'text-rose-400 bg-rose-950/50' : 'bg-white/10 text-slate-400 hover:text-rose-400 hover:bg-white/20'
                      }`}
                      title={isSaved ? 'Remove from wishlist' : 'Save to wishlist'}
                      id={`bestseller-wishlist-${product.id}`}
                    >
                      <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-500' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Product Showcase Image */}
                <div
                  onClick={() => openQuickView(product)}
                  className="relative w-full aspect-square mb-4 rounded-xl overflow-hidden bg-black/40 border border-white/5 flex items-center justify-center cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-95 group-hover:opacity-100"
                  />
                  <span className="absolute bottom-2 left-2 bg-black/80 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                    {product.brand}
                  </span>
                </div>

                {/* Content & Specs */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Rating & Stock */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-1 bg-white/10 text-yellow-400 px-2 py-0.5 rounded text-xs font-bold">
                        <span>{product.rating}</span>
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      </div>
                      <div className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        In Stock ({selectedCity.city})
                      </div>
                    </div>

                    {/* Product Name */}
                    <h3
                      onClick={() => openQuickView(product)}
                      className="text-base font-bold text-white hover:text-blue-400 transition-colors line-clamp-2 cursor-pointer leading-snug"
                    >
                      {product.name}
                    </h3>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap gap-1.5 mt-2.5 mb-3.5">
                      {product.specs.slice(0, 3).map((spec, i) => (
                        <span
                          key={i}
                          className="text-[11px] bg-white/5 text-slate-300 px-2 py-0.5 rounded-md border border-white/5 font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing Section */}
                  <div className="pt-3 border-t border-white/5">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-xl font-black text-white">
                        ₹{product.discountedPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-slate-500 line-through">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <div className="text-[11px] text-emerald-400 font-medium mt-0.5">
                      Save ₹{savings.toLocaleString('en-IN')} • EMI from ₹{product.emiStarting}/mo
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      onClick={() => addToCart(product)}
                      className="w-full mt-3.5 py-2.5 px-4 rounded-xl bg-[#003399] hover:bg-[#002673] active:bg-[#001f5c] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center space-x-2 cursor-pointer"
                      id={`bestseller-add-btn-${product.id}`}
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

      </div>
    </section>
  );
}
