'use client';

import React, { useState, useEffect } from 'react';
import {
  X,
  Star,
  ShoppingCart,
  Heart,
  ShieldCheck,
  Zap,
  Truck,
  RotateCcw,
  CheckCircle2,
  Share2
} from 'lucide-react';
import { useCart } from '@/lib/cart-context';

export default function QuickViewModal() {
  const {
    isQuickViewOpen,
    closeQuickView,
    quickViewProduct,
    addToCart,
    toggleWishlist,
    isInWishlist,
    selectedCity,
    addToast
  } = useCart();

  const [selectedColorState, setSelectedColorState] = useState<string | null>(null);
  const [selectedStorageState, setSelectedStorageState] = useState<string | null>(null);

  if (!isQuickViewOpen || !quickViewProduct) return null;

  const selectedColor = selectedColorState || quickViewProduct.colors?.[0]?.name || '';
  const selectedStorage = selectedStorageState || quickViewProduct.storageVariants?.[0] || '';

  const isSaved = isInWishlist(quickViewProduct.id);
  const savings = quickViewProduct.originalPrice - quickViewProduct.discountedPrice;

  const handleAddToCart = () => {
    addToCart(quickViewProduct, 1, selectedColor, selectedStorage);
    setSelectedColorState(null);
    setSelectedStorageState(null);
    closeQuickView();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: quickViewProduct.name,
        text: `Check out ${quickViewProduct.name} at Shree Balaji Mobiles for ₹${quickViewProduct.discountedPrice.toLocaleString('en-IN')}`,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      addToast('Link Copied', 'Product link copied to clipboard!', 'info');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" id="quickview-modal-overlay">
      {/* Backdrop */}
      <div
        onClick={closeQuickView}
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity animate-in fade-in"
      />

      <div className="min-h-full flex items-center justify-center p-4 sm:p-6 text-center">
        <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 text-left overflow-hidden animate-in zoom-in-95 duration-200">
          
          {/* Close button */}
          <button
            onClick={closeQuickView}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors z-20 cursor-pointer"
            id="quickview-close-btn"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* Left: Image Showcase */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 flex items-center justify-center p-2">
                <img
                  src={quickViewProduct.image}
                  alt={quickViewProduct.name}
                  className="w-full h-full object-cover rounded-xl"
                />
                
                <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
                  {quickViewProduct.discountPercentage}% OFF
                </span>
              </div>

              {/* Assurances Under Image */}
              <div className="w-full grid grid-cols-2 gap-2 mt-4 text-[11px] text-slate-600">
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>100% Genuine</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 flex items-center space-x-1.5">
                  <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>2h Express Pin</span>
                </div>
              </div>
            </div>

            {/* Right: Info, Variants & Actions */}
            <div className="md:col-span-7 space-y-4">
              
              <div>
                <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
                  <span>{quickViewProduct.brand}</span>
                  <span>•</span>
                  <span>{quickViewProduct.category}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  {quickViewProduct.name}
                </h3>

                {/* Rating & Stock */}
                <div className="flex items-center space-x-3 mt-2">
                  <div className="flex items-center space-x-1 bg-amber-50 text-amber-700 px-2 py-0.5 rounded-md text-xs font-bold border border-amber-200/60">
                    <span>{quickViewProduct.rating}</span>
                    <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                  </div>
                  <span className="text-xs text-slate-400">
                    ({quickViewProduct.reviewsCount.toLocaleString('en-IN')} verified customer reviews)
                  </span>
                </div>
              </div>

              {/* Pricing Box */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-baseline space-x-3">
                  <span className="text-2xl sm:text-3xl font-black text-slate-900">
                    ₹{quickViewProduct.discountedPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-sm sm:text-base text-slate-400 line-through">
                    ₹{quickViewProduct.originalPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    Save ₹{savings.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="text-xs text-slate-600 mt-1.5 flex items-center justify-between flex-wrap gap-1">
                  <span>Standard EMI starts at <strong>₹{quickViewProduct.emiStarting}/mo</strong></span>
                  <span className="text-[11px] text-amber-900 bg-amber-100/90 font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Zap className="w-3 h-3 text-orange-600 fill-orange-500" />
                    {selectedCity.deliveryTime} to {selectedCity.pincode}
                  </span>
                </div>
              </div>

              {/* Color Swatches if available */}
              {quickViewProduct.colors && quickViewProduct.colors.length > 0 && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Select Color: <span className="text-slate-900 normal-case">{selectedColor}</span>
                  </label>
                  <div className="flex items-center space-x-2">
                    {quickViewProduct.colors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColorState(c.name)}
                        className={`p-1 rounded-full border-2 transition-all cursor-pointer ${
                          selectedColor === c.name ? 'border-blue-600 scale-110' : 'border-transparent hover:border-slate-300'
                        }`}
                        title={c.name}
                      >
                        <div
                          className="w-6 h-6 rounded-full border border-slate-300 shadow-2xs"
                          style={{ backgroundColor: c.hex }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Storage Variants if available */}
              {quickViewProduct.storageVariants && quickViewProduct.storageVariants.length > 0 && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Select Storage Capacity:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {quickViewProduct.storageVariants.map((storage) => (
                      <button
                        key={storage}
                        onClick={() => setSelectedStorageState(storage)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                          selectedStorage === storage
                            ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300'
                        }`}
                      >
                        {storage}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Specs Checklist */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Key Specifications:
                </label>
                <div className="grid grid-cols-2 gap-1.5 text-xs text-slate-600">
                  {quickViewProduct.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="truncate">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3 pt-3 border-t border-slate-100">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm shadow-md shadow-blue-600/20 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  id="quickview-add-cart-btn"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>

                <button
                  onClick={() => toggleWishlist(quickViewProduct.id)}
                  className={`p-3 rounded-xl border transition-colors cursor-pointer ${
                    isSaved
                      ? 'bg-rose-50 border-rose-200 text-rose-600'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-rose-600'
                  }`}
                  title={isSaved ? 'Remove from wishlist' : 'Add to wishlist'}
                  id="quickview-wishlist-toggle"
                >
                  <Heart className={`w-5 h-5 ${isSaved ? 'fill-rose-500' : ''}`} />
                </button>

                <button
                  onClick={handleShare}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                  title="Share Deal"
                  id="quickview-share-btn"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
