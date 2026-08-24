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
  Clock,
  Sparkles,
  X
} from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { TOP_CATEGORIES, PRODUCTS } from '@/lib/data';

const categoryIconMap: Record<string, React.ReactNode> = {
  Smartphone: <Smartphone className="w-6 h-6" />,
  Watch: <Watch className="w-6 h-6" />,
  Tv: <Tv className="w-6 h-6" />,
  Headphones: <Headphones className="w-6 h-6" />,
  Home: <Home className="w-6 h-6" />
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
    openQuickView
  } = useCart();

  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Filtered live search suggestions
  const searchSuggestions = searchQuery.trim().length > 0
    ? PRODUCTS.filter((p) =>
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
    <header className="sticky top-0 z-40 bg-white shadow-xs border-b border-slate-100" id="main-header">
      {/* Top Announcement & Service Bar */}
      <div className="bg-[#0A0A0A] text-slate-300 text-xs py-1.5 px-3 sm:px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="flex items-center space-x-1.5 text-amber-400 font-medium text-[11px] sm:text-xs">
              <Zap className="w-3.5 h-3.5 animate-pulse shrink-0" />
              <span>Shree Balaji Express: 2-Hr Delivery in {selectedCity.city}</span>
            </div>
            <span className="hidden md:inline-block text-slate-700">•</span>
            <div className="hidden md:flex items-center space-x-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Genuine Brand Warranty Guaranteed</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 sm:space-x-5 text-slate-300 text-[11px] sm:text-xs">
            <a
              href="tel:18001202252"
              className="flex items-center space-x-1 hover:text-white transition-colors"
              id="header-helpline-link"
            >
              <Phone className="w-3 h-3 text-blue-400" />
              <span className="hidden sm:inline">Helpline:</span> <span>1800 120 2252</span>
            </a>
            <button
              onClick={() => setAuthModalOpen(true)}
              className="hover:text-white transition-colors cursor-pointer hidden sm:inline-block"
              id="header-track-order-btn"
            >
              Track Order
            </button>
            <button
              onClick={() => setLocationModalOpen(true)}
              className="hover:text-white transition-colors cursor-pointer flex items-center space-x-1"
              id="header-store-locator-btn"
            >
              <MapPin className="w-3 h-3 text-amber-400 sm:hidden" />
              <span>250+ Stores</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Row */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3 border-b border-slate-100">
        <div className="flex items-center justify-between gap-2.5 sm:gap-4 md:gap-8">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center space-x-3 shrink-0">
            <a
              href="#"
              className="flex items-center space-x-2 group"
              id="header-logo-link"
            >
              <div className="flex flex-col">
                <div className="flex items-baseline space-x-1">
                  <span className="text-xs sm:text-sm font-black text-amber-600 tracking-wider uppercase font-sans">
                    SHREE
                  </span>
                  <span className="text-lg sm:text-2xl font-black text-[#003399] tracking-tighter uppercase font-sans">
                    BALAJI MOBILES
                  </span>
                </div>
                <span className="text-[8px] sm:text-[9px] uppercase font-bold tracking-widest text-slate-400 -mt-1 hidden xs:block">
                  South India&apos;s Trusted Retailer
                </span>
              </div>
            </a>

            {/* Location Selector Dropdown */}
            <button
              onClick={() => setLocationModalOpen(true)}
              className="hidden lg:flex items-center gap-2 text-xs text-slate-500 bg-slate-50 hover:bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-100 transition-all cursor-pointer"
              id="header-location-selector-btn"
              title="Change Delivery City and Pincode"
            >
              <MapPin className="w-3.5 h-3.5 text-[#003399]" />
              <span className="font-semibold text-slate-700">{selectedCity.city}, {selectedCity.pincode}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>
          </div>

          {/* Prominent Rounded Search Bar */}
          <div className="flex-1 max-w-xl relative min-w-0" ref={searchRef} id="header-search-container">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                placeholder="Search Smartphones, Brands..."
                className="w-full bg-slate-50 border border-slate-100 hover:border-slate-200 rounded-full py-2 sm:py-2.5 pl-4 sm:pl-5 pr-8 sm:pr-10 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#003399]/20 focus:bg-white transition-all"
                id="header-search-input"
              />
              <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-slate-400">
                {searchQuery.length > 0 ? (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="hover:text-slate-600 p-0.5 rounded-full"
                    id="header-clear-search-btn"
                  >
                    <X className="w-4 h-4" />
                  </button>
                ) : (
                  <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 pointer-events-none" />
                )}
              </div>
            </div>

            {/* Live Search Dropdown Suggestions */}
            {isSearchFocused && searchQuery.trim().length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-slate-100 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-4 pb-2 border-b border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Search results for &ldquo;{searchQuery}&rdquo;</span>
                  <span className="text-[#003399] font-semibold">{searchSuggestions.length} products found</span>
                </div>

                {searchSuggestions.length > 0 ? (
                  <div className="py-1">
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
                            className="w-10 h-10 object-cover rounded-lg border border-slate-200"
                          />
                          <div>
                            <div className="text-sm font-medium text-slate-900 truncate max-w-xs sm:max-w-md">
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
                          <div className="text-[11px] text-emerald-600 font-semibold">
                            {product.discountPercentage}% OFF
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center text-sm text-slate-500">
                    No exact products found. Try searching for &ldquo;iPhone&rdquo;, &ldquo;Samsung&rdquo;, or &ldquo;AirPods&rdquo;.
                  </div>
                )}
                
                <div className="px-4 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-xs text-slate-400">Popular: iPhone 16 Pro, Pixel 10a, OnePlus Nord</div>
                  <button
                    onClick={() => {
                      setSearchOpen(true);
                      setIsSearchFocused(false);
                    }}
                    className="text-xs font-semibold text-[#003399] hover:underline"
                  >
                    View All Results &rarr;
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Action Icons: Location (mobile), Wishlist, Cart & Profile */}
          <div className="flex items-center gap-4 sm:gap-6 shrink-0">
            {/* Mobile Location Button */}
            <button
              onClick={() => setLocationModalOpen(true)}
              className="lg:hidden p-2 rounded-full hover:bg-slate-100 text-slate-700 cursor-pointer"
              id="header-mobile-location-btn"
              title="Select City"
            >
              <MapPin className="w-5 h-5 text-[#003399]" />
            </button>

            {/* Wishlist Button */}
            <button
              onClick={() => setAuthModalOpen(true)}
              className="p-1 rounded-full hover:text-[#003399] text-slate-700 relative transition-colors cursor-pointer"
              id="header-wishlist-btn"
              title="Saved Wishlist"
            >
              <Heart className="w-6 h-6" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#003399] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={openCart}
              className="relative p-1 text-slate-700 hover:text-[#003399] transition-colors cursor-pointer"
              id="header-cart-btn"
              title="Open Shopping Cart"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#003399] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>

            {/* User Profile Button */}
            <button
              onClick={() => setAuthModalOpen(true)}
              className="p-1 text-slate-700 hover:text-[#003399] transition-colors cursor-pointer"
              id="header-user-profile-btn"
              title="Account & Login"
            >
              <User className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Row: Horizontal row of circular icons with labels */}
      <div className="bg-white border-t border-slate-50 px-4 sm:px-6 py-3 overflow-x-auto no-scrollbar" id="header-category-row">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-6 sm:gap-10 min-w-max md:min-w-0">
          
          {/* All Categories / Reset Tag */}
          <div
            onClick={() => setActiveCategoryFilter(null)}
            className="flex flex-col items-center gap-1 cursor-pointer group"
            id="category-pill-all"
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
              activeCategoryFilter === null
                ? 'bg-blue-50 text-[#003399]'
                : 'bg-slate-50 text-slate-600 group-hover:bg-blue-50 group-hover:text-[#003399]'
            }`}>
              <Sparkles className="w-5 h-5" />
            </div>
            <span className={`text-[10px] font-bold uppercase tracking-wider ${
              activeCategoryFilter === null ? 'text-[#003399]' : 'text-slate-600'
            }`}>
              All Deals
            </span>
          </div>

          {TOP_CATEGORIES.map((cat) => {
            const isActive = activeCategoryFilter === cat.id;
            return (
              <div
                key={cat.id}
                onClick={() => setActiveCategoryFilter(isActive ? null : cat.id)}
                className="flex flex-col items-center gap-1 cursor-pointer group"
                id={`category-pill-${cat.id}`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-[#003399]'
                    : 'bg-slate-50 text-slate-600 group-hover:bg-slate-100 group-hover:text-slate-900'
                }`}>
                  {categoryIconMap[cat.iconName] || <Smartphone className="w-5 h-5" />}
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-wider ${
                  isActive ? 'text-[#003399]' : 'text-slate-600'
                }`}>
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
