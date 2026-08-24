'use client';

import React from 'react';
import { Home, Grid, Flame, Heart, ShoppingBag, Search } from 'lucide-react';
import { useCart } from '@/lib/cart-context';

export default function MobileBottomNav() {
  const { cartCount, wishlist, openCart, setAuthModalOpen, setSearchOpen } = useCart();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/80 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.06)]"
      id="mobile-bottom-nav"
      aria-label="Mobile Navigation Bar"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="grid grid-cols-5 items-center h-16 px-1">
        
        {/* 1. Home */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex flex-col items-center justify-center h-full min-h-[48px] text-[#003399] transition-transform active:scale-95 cursor-pointer group"
          id="mobile-nav-home"
        >
          <div className="relative p-1">
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </div>
          <span className="text-[10px] font-bold tracking-tight">Home</span>
        </button>

        {/* 2. Categories */}
        <button
          onClick={() => scrollToSection('header-category-row')}
          className="flex flex-col items-center justify-center h-full min-h-[48px] text-slate-600 hover:text-[#003399] transition-transform active:scale-95 cursor-pointer group"
          id="mobile-nav-categories"
        >
          <div className="relative p-1">
            <Grid className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </div>
          <span className="text-[10px] font-medium text-slate-600 group-hover:text-[#003399] tracking-tight">Categories</span>
        </button>

        {/* 3. Mega Deals (Hot Flame) */}
        <button
          onClick={() => scrollToSection('mega-sale-section')}
          className="flex flex-col items-center justify-center h-full min-h-[48px] text-orange-600 transition-transform active:scale-95 cursor-pointer group"
          id="mobile-nav-deals"
        >
          <div className="relative p-1">
            <Flame className="w-5 h-5 text-orange-500 fill-orange-500 animate-pulse" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
          </div>
          <span className="text-[10px] font-bold text-orange-600 tracking-tight">50% Deals</span>
        </button>

        {/* 4. Wishlist */}
        <button
          onClick={() => setAuthModalOpen(true)}
          className="flex flex-col items-center justify-center h-full min-h-[48px] text-slate-600 hover:text-[#003399] transition-transform active:scale-95 cursor-pointer group relative"
          id="mobile-nav-wishlist"
        >
          <div className="relative p-1">
            <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
            {wishlist.length > 0 && (
              <span className="absolute -top-0.5 -right-1 bg-rose-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                {wishlist.length}
              </span>
            )}
          </div>
          <span className="text-[10px] font-medium text-slate-600 group-hover:text-[#003399] tracking-tight">Wishlist</span>
        </button>

        {/* 5. Cart */}
        <button
          onClick={openCart}
          className="flex flex-col items-center justify-center h-full min-h-[48px] text-slate-600 hover:text-[#003399] transition-transform active:scale-95 cursor-pointer group relative"
          id="mobile-nav-cart"
        >
          <div className="relative p-1">
            <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform text-[#003399]" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-1 bg-[#003399] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white animate-bounce">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-bold text-[#003399] tracking-tight">Cart</span>
        </button>

      </div>
    </nav>
  );
}
