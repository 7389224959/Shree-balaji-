'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  MapPin,
  Search,
  ShoppingCart,
  User,
  Heart,
  Smartphone,
  Watch,
  Tv,
  Headphones,
  Home,
  ChevronDown,
  Phone,
  ShieldCheck,
  Zap,
  Sparkles,
  X,
  Flame,
  LocateFixed,
  Loader2
} from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { TOP_CATEGORIES, PRODUCTS } from '@/lib/data';

const categoryIconMap: Record<string, React.ReactNode> = {
  Smartphone: <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />,
  Watch: <Watch className="w-5 h-5 sm:w-6 sm:h-6" />,
  Tv: <Tv className="w-5 h-5 sm:w-6 sm:h-6" />,
  Headphones: <Headphones className="w-5 h-5 sm:w-6 sm:h-6" />,
  Home: <Home className="w-5 h-5 sm:w-6 sm:h-6" />
};

export default function Header() {
  const {
    cartCount,
    wishlist,
    openCart,
    selectedCity,
    setLocationModalOpen,
    setAuthModalOpen,
    searchQuery,
    setSearchQuery,
    setSearchOpen,
    activeCategoryFilter,
    setActiveCategoryFilter,
    openQuickView,
    detectLocation,
    isDetectingLocation
  } = useCart();

  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Filtered live search suggestions
  const searchSuggestions =
    searchQuery.trim().length > 0
      ? PRODUCTS.filter(
          (p) =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.category.toLowerCase().includes(searchQuery.toLowerCase())
        ).slice(0, 4)
      : [];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-[#000000] text-white shadow-xl" id="main-header">
      {/* Top Micro-Bar for Helpline & Trust Badges */}
      <div className="bg-[#0A0A0A] text-slate-400 text-[11px] py-1 px-4 sm:px-6 border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1.5 text-amber-400 font-medium">
              <Zap className="w-3 h-3 animate-pulse text-amber-400" />
              <span suppressHydrationWarning>Shree Balaji Express: Fast Dispatch to {selectedCity.pincode}</span>
            </div>
            <span className="text-white/20">•</span>
            <div className="flex items-center space-x-1 text-slate-300">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span>100% Genuine Brand Warranty Guaranteed</span>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-slate-300">
            <a
              href="tel:18001202252"
              className="flex items-center space-x-1 hover:text-white transition-colors"
              id="header-helpline-link"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>Helpline: 1800 120 2252</span>
            </a>
            <button
              onClick={() => setAuthModalOpen(true)}
              className="hover:text-white transition-colors cursor-pointer"
              id="header-track-order-btn"
            >
              Track Order
            </button>
            <button
              onClick={() => setLocationModalOpen(true)}
              className="hover:text-white transition-colors cursor-pointer flex items-center space-x-1"
              id="header-store-locator-btn"
            >
              <span>250+ Stores</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Brand & Delivery Information Section (Styled per reference screenshot) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-3">
        {/* Row 1: Brand Logo on Left, Action Buttons on Right */}
        <div className="flex items-center justify-between gap-3">
          {/* Logo: Shree Balaji.com */}
          <a href="#" className="flex flex-col group cursor-pointer" id="header-logo-link">
            <div className="flex items-center space-x-1.5">
              <span className="text-xl sm:text-2xl font-black text-amber-500 tracking-tight font-sans">
                Shree
              </span>
              <span className="text-2xl sm:text-3xl font-black text-white tracking-tighter italic font-serif">
                Balaji<span className="text-orange-500 font-sans not-italic text-lg sm:text-xl font-bold">.com</span>
              </span>
              <div className="w-2 h-2 rounded-full bg-orange-500 animate-ping ml-0.5 hidden xs:inline-block" />
            </div>
          </a>

          {/* Right Action Icons: Cart & Profile (Rounded Outline Buttons matching reference) */}
          <div className="flex items-center space-x-2.5 sm:space-x-3">
            {/* Wishlist Button (Desktop only for clean mobile match) */}
            <button
              onClick={() => setAuthModalOpen(true)}
              className="hidden md:flex w-10 h-10 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white items-center justify-center relative transition-all active:scale-95 cursor-pointer"
              id="header-wishlist-btn"
              title="Saved Wishlist"
            >
              <Heart className="w-5 h-5 text-white" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-black">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={openCart}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white flex items-center justify-center relative transition-all active:scale-95 cursor-pointer group"
              id="header-cart-btn"
              title="Open Cart"
            >
              <ShoppingCart className="w-5 h-5 text-white group-hover:scale-105 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-orange-500 text-white text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center border-2 border-black animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* User Account / Profile Button */}
            <button
              onClick={() => setAuthModalOpen(true)}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white flex items-center justify-center transition-all active:scale-95 cursor-pointer group"
              id="header-user-profile-btn"
              title="Account Login"
            >
              <User className="w-5 h-5 text-white group-hover:scale-105 transition-transform" />
            </button>
          </div>
        </div>

        {/* Row 2: Delivery Time & Pincode directly below website name */}
        <div className="mt-2.5 sm:mt-3 flex flex-col items-start" id="header-delivery-pincode-section">
          {/* Big Bold Delivery Time Headline (e.g. 48 Hours) */}
          <div
            suppressHydrationWarning
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-sans leading-none"
          >
            {selectedCity.deliveryTime || '48 Hours'}
          </div>

          {/* Pincode with Dropdown Arrow */}
          <div className="flex items-center space-x-2 mt-1.5">
            <button
              onClick={() => setLocationModalOpen(true)}
              className="flex items-center space-x-1.5 text-white/90 hover:text-orange-400 transition-colors group cursor-pointer"
              id="header-pincode-selector-btn"
              title="Click to change pincode or auto-detect from device"
            >
              <span
                suppressHydrationWarning
                className="text-base sm:text-lg font-bold tracking-wide text-white group-hover:text-orange-400"
              >
                {selectedCity.pincode}
              </span>
              <ChevronDown className="w-4 h-4 text-white/70 group-hover:text-orange-400 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <span className="text-xs text-white/50">•</span>
            <span
              suppressHydrationWarning
              className="text-xs text-slate-300 truncate max-w-[150px] sm:max-w-none"
            >
              {selectedCity.city}
            </span>

            {/* Quick Auto-Detect Trigger Button */}
            <button
              onClick={() => detectLocation(false)}
              disabled={isDetectingLocation}
              className="hidden xs:inline-flex items-center space-x-1 text-[10px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full hover:bg-emerald-900/60 transition-colors ml-1"
              title="Auto-detect pincode from device GPS"
            >
              {isDetectingLocation ? (
                <>
                  <Loader2 className="w-3 h-3 animate-spin text-emerald-400" />
                  <span>Locating...</span>
                </>
              ) : (
                <>
                  <LocateFixed className="w-3 h-3 text-emerald-400" />
                  <span>Auto GPS</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Row 3: Prominent Rounded Full-Width White Search Bar (Search for "Smartphones") */}
        <div className="mt-3.5 sm:mt-4 relative" ref={searchRef} id="header-search-container">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              placeholder='Search for "Smartphones"'
              className="w-full bg-white rounded-2xl sm:rounded-full py-3 sm:py-3.5 pl-11 pr-10 text-sm sm:text-base text-slate-900 placeholder:text-slate-500 font-medium focus:outline-none focus:ring-3 focus:ring-orange-500 shadow-lg transition-all"
              id="header-search-input"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">
              <Search className="w-5 h-5 text-slate-600" />
            </div>

            {searchQuery.length > 0 && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-1 rounded-full cursor-pointer"
                id="header-clear-search-btn"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Live Search Dropdown Suggestions */}
          {isSearchFocused && searchQuery.trim().length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-200 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150 text-slate-900">
              <div className="px-4 pb-2 border-b border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Matching products for &ldquo;{searchQuery}&rdquo;</span>
                <span className="text-orange-600 font-bold">{searchSuggestions.length} items found</span>
              </div>

              {searchSuggestions.length > 0 ? (
                <div className="py-1 max-h-72 overflow-y-auto">
                  {searchSuggestions.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => {
                        openQuickView(product);
                        setIsSearchFocused(false);
                      }}
                      className="px-4 py-2.5 hover:bg-slate-50 flex items-center justify-between cursor-pointer transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-10 h-10 object-cover rounded-lg border border-slate-200 bg-slate-50"
                        />
                        <div>
                          <div className="text-sm font-semibold text-slate-900 truncate max-w-xs sm:max-w-md">
                            {product.name}
                          </div>
                          <div className="text-xs text-slate-500">
                            {product.brand} • {product.category}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-slate-900">
                          ₹{product.discountedPrice.toLocaleString('en-IN')}
                        </div>
                        <div className="text-[11px] text-emerald-600 font-bold">
                          {product.discountPercentage}% OFF
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-center text-sm text-slate-500">
                  No exact match found. Try searching for &ldquo;iPhone&rdquo;, &ldquo;Samsung&rdquo;, &ldquo;OnePlus&rdquo;, or &ldquo;Smart Watches&rdquo;.
                </div>
              )}

              <div className="px-4 pt-2 border-t border-slate-100 flex items-center justify-between">
                <div className="text-xs text-slate-400 hidden sm:block">
                  Popular: iPhone 16 Pro, Pixel 10a, Galaxy S25 Ultra
                </div>
                <button
                  onClick={() => {
                    setSearchOpen(true);
                    setIsSearchFocused(false);
                  }}
                  className="text-xs font-bold text-orange-600 hover:underline ml-auto"
                >
                  View All Search Results &rarr;
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Row 4: Horizontal Category Slider (Clean Light/Dark Transition with Rounded Icons) */}
      <div
        className="bg-white text-slate-900 border-t border-slate-100 px-4 sm:px-6 py-3 overflow-x-auto no-scrollbar shadow-xs"
        id="header-category-row"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-start sm:justify-center gap-6 sm:gap-9 min-w-max">
          {/* All Categories Pill */}
          <div
            onClick={() => setActiveCategoryFilter(null)}
            className="flex flex-col items-center gap-1.5 cursor-pointer group"
            id="category-pill-all"
          >
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${
                activeCategoryFilter === null
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20 scale-105'
                  : 'bg-slate-100 text-slate-700 group-hover:bg-orange-50 group-hover:text-orange-600'
              }`}
            >
              <Sparkles className="w-6 h-6" />
            </div>
            <span
              className={`text-[11px] font-bold tracking-tight text-center ${
                activeCategoryFilter === null ? 'text-orange-600' : 'text-slate-700'
              }`}
            >
              All Store
            </span>
          </div>

          {/* Dynamic Categories */}
          {TOP_CATEGORIES.map((cat) => {
            const isActive = activeCategoryFilter === cat.id;
            return (
              <div
                key={cat.id}
                onClick={() => setActiveCategoryFilter(isActive ? null : cat.id)}
                className="flex flex-col items-center gap-1.5 cursor-pointer group"
                id={`category-pill-${cat.id}`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all overflow-hidden relative ${
                    isActive
                      ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20 scale-105'
                      : 'bg-slate-100 text-slate-700 group-hover:bg-slate-200/80 group-hover:text-slate-900'
                  }`}
                >
                  {categoryIconMap[cat.iconName] || <Smartphone className="w-6 h-6" />}
                </div>
                <span
                  className={`text-[11px] font-bold tracking-tight text-center whitespace-nowrap ${
                    isActive ? 'text-orange-600' : 'text-slate-700'
                  }`}
                >
                  {cat.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
}
