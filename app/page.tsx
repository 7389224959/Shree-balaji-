'use client';

import React from 'react';
import { CartProvider } from '@/lib/cart-context';
import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';
import MegaSaleSection from '@/components/MegaSaleSection';
import ShopByBrands from '@/components/ShopByBrands';
import BestSellingPhones from '@/components/BestSellingPhones';
import PopularCategories from '@/components/PopularCategories';
import NewlyLaunchedSection from '@/components/NewlyLaunchedSection';
import DealOfTheDay from '@/components/DealOfTheDay';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import QuickViewModal from '@/components/QuickViewModal';
import LocationModal from '@/components/LocationModal';
import AuthModal from '@/components/AuthModal';
import SearchModal from '@/components/SearchModal';
import ToastContainer from '@/components/ToastContainer';
import MobileBottomNav from '@/components/MobileBottomNav';

export default function HomePage() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white flex flex-col antialiased text-slate-900 font-sans selection:bg-blue-600 selection:text-white pb-16 md:pb-0" id="shri-balaji-mobiles-app">
        
        {/* 1. Header & Navigation with Category Row */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-1 w-full" id="main-content">
          
          {/* 2. Hero Section: Auto-playing Carousel Banner */}
          <HeroCarousel />

          {/* 3. 'Mega Sale' Section (Soft Peach/Light Gold Background, 50% Off, Add to Cart, Explore Now) */}
          <MegaSaleSection />

          {/* 4. 'Shop by Brands' Section (Horizontal Scrolling Brand Logos) */}
          <ShopByBrands />

          {/* 5. 'Best Selling Phones' Section (Dark Theme Luxury Contrast) */}
          <BestSellingPhones />

          {/* 6. 'Popular Categories' Section (Dark Theme Circular Icons) */}
          <PopularCategories />

          {/* 7. 'Newly Launched and Trending' Section (White Background, Latest Gadgets) */}
          <NewlyLaunchedSection />

          {/* 8. 'Deal of the Day' Section (Dark Theme, Flagship Carousels, Inclusive Offer Pricing) */}
          <DealOfTheDay />

        </main>

        {/* 9. Footer (Dark Theme with Accordions, Socials & Trust Badges) */}
        <Footer />

        {/* 10. Dedicated Mobile Bottom Navigation Bar (Fixed for quick thumb access) */}
        <MobileBottomNav />

        {/* Interactive Modals & Drawers */}
        <CartDrawer />
        <QuickViewModal />
        <LocationModal />
        <AuthModal />
        <SearchModal />
        <ToastContainer />

      </div>
    </CartProvider>
  );
}
