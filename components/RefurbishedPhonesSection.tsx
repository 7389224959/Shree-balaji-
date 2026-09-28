'use client';

import React, { useState, useMemo } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Zap,
  RotateCcw,
  BatteryCharging,
  Eye,
  ShoppingCart,
  Filter,
  Info,
  ChevronRight,
  ArrowUpRight,
  Star,
  Check,
  X,
  Smartphone,
  Flame,
  Award,
  CircleDot
} from 'lucide-react';
import {
  POPULAR_REFURBISHED_BRANDS,
  REFURBISHED_PRODUCTS,
  REFURBISHED_INSPECTION_POINTS,
  Product,
  PopularRefurbishedBrand
} from '@/lib/data';
import { useCart } from '@/lib/cart-context';

export default function RefurbishedPhonesSection() {
  const { addToCart, openQuickView, addToast } = useCart();

  // State filters
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'popular' | 'budget' | 'flagship' | 'grade-a-plus'>('all');
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [isGradingModalOpen, setIsGradingModalOpen] = useState(false);
  const [isTradeInModalOpen, setIsTradeInModalOpen] = useState(false);
  const [tradeInBrand, setTradeInBrand] = useState('Apple');
  const [tradeInModel, setTradeInModel] = useState('');
  const [tradeInCondition, setTradeInCondition] = useState('Flawless');

  // Filter products logic
  const filteredProducts = useMemo(() => {
    return REFURBISHED_PRODUCTS.filter((product) => {
      // If a specific brand is selected from logos
      if (selectedBrand) {
        return (
          product.brand.toLowerCase() === selectedBrand.toLowerCase() ||
          product.brand.toLowerCase().includes(selectedBrand.toLowerCase()) ||
          selectedBrand.toLowerCase().includes(product.brand.toLowerCase())
        );
      }

      if (selectedFilter === 'popular') {
        const topBrandNames = ['apple', 'samsung', 'motorola', 'vivo', 'nothing', 'oppo', 'realme', 'oneplus', 'xiaomi', 'google pixel', 'iqoo', 'poco'];
        return topBrandNames.includes(product.brand.toLowerCase());
      }
      if (selectedFilter === 'budget') {
        return product.discountedPrice <= 15000;
      }
      if (selectedFilter === 'flagship') {
        return product.discountedPrice >= 20000 || product.brand === 'Apple' || product.brand === 'Samsung' || product.brand === 'Google Pixel';
      }
      if (selectedFilter === 'grade-a-plus') {
        return product.conditionGrade?.includes('Grade A+');
      }
      return true;
    });
  }, [selectedFilter, selectedBrand]);

  const handleBrandLogoClick = (brandName: string) => {
    if (selectedBrand?.toLowerCase() === brandName.toLowerCase()) {
      setSelectedBrand(null);
      addToast('Filter Reset', 'Showing all refurbished smartphones', 'info');
    } else {
      setSelectedBrand(brandName);
      setSelectedFilter('all');
      addToast(`${brandName} Selected`, `Showing certified refurbished models from ${brandName}`, 'info');
    }
  };

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    addToCart(product, 1, product.colors?.[0]?.name, product.storageVariants?.[0]);
  };

  const handleCalculateTradeIn = (e: React.FormEvent) => {
    e.preventDefault();
    const baseValue = tradeInBrand === 'Apple' ? 24000 : tradeInBrand === 'Samsung' ? 18000 : 10000;
    const estimatedValue = tradeInCondition === 'Flawless' ? baseValue : tradeInCondition === 'Good' ? Math.round(baseValue * 0.75) : Math.round(baseValue * 0.5);
    addToast(
      'Trade-In Appraisal',
      `Estimated Buyback Value: ₹${estimatedValue.toLocaleString('en-IN')}! Visit any Shri Balaji store for instant spot cash.`,
      'success'
    );
    setIsTradeInModalOpen(false);
  };

  return (
    <section
      className="relative py-12 sm:py-16 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white border-b border-emerald-500/20"
      id="refurbished-phones-section"
    >
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header & Primary Business Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div className="space-y-3 max-w-3xl">
            {/* Business Focus Label */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Core Business Specialty • Shri Balaji Certified Pre-Owned</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-sans">
              Certified 2nd Hand & Refurbished Phones
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Why pay full price? Get like-new smartphones thoroughly inspected through our{' '}
              <strong className="text-emerald-400 font-semibold">52-point quality check</strong>, backed by up to{' '}
              <strong className="text-white font-semibold">12-Month Store Warranty</strong> and 7-day instant replacement.
            </p>
          </div>

          {/* Quick Action Badges / Grading Guide CTA */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => setIsGradingModalOpen(true)}
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer active:scale-95"
              id="view-grading-guide-btn"
            >
              <Info className="w-4 h-4 text-emerald-400" />
              <span>52-Point Checklist & Grading</span>
            </button>

            <button
              onClick={() => setIsTradeInModalOpen(true)}
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs sm:text-sm font-black transition-all shadow-md cursor-pointer active:scale-95"
              id="sell-old-phone-btn"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Sell / Exchange Old Phone</span>
            </button>
          </div>
        </div>

        {/* 6 Key Refurbished Assurances Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 py-6 my-2 text-xs">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center space-x-2.5">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <div className="font-bold text-white leading-tight">52-Point Tested</div>
              <div className="text-[10px] text-slate-400">Certified Hardware</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center space-x-2.5">
            <Award className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <div className="font-bold text-white leading-tight">Up to 12M Warranty</div>
              <div className="text-[10px] text-slate-400">Free In-Store Repair</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center space-x-2.5">
            <RotateCcw className="w-5 h-5 text-blue-400 shrink-0" />
            <div>
              <div className="font-bold text-white leading-tight">7-Day Replacement</div>
              <div className="text-[10px] text-slate-400">Hassle-Free Exchange</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center space-x-2.5">
            <BatteryCharging className="w-5 h-5 text-green-400 shrink-0" />
            <div>
              <div className="font-bold text-white leading-tight">90%+ Battery Health</div>
              <div className="text-[10px] text-slate-400">Original Cell Tested</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center space-x-2.5">
            <Zap className="w-5 h-5 text-yellow-400 shrink-0" />
            <div>
              <div className="font-bold text-white leading-tight">Free Fast Charger</div>
              <div className="text-[10px] text-slate-400">Cable & Box Included</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center space-x-2.5">
            <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
            <div>
              <div className="font-bold text-white leading-tight">Clean IMEI CEIR</div>
              <div className="text-[10px] text-slate-400">100% Legal Tax Bill</div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ⭐ USER MANDATE: POPULAR BRANDS RUNNING IN INDIA (Apple, Samsung, Motorola, Vivo, Nothing, Oppo, Realme, etc.) ⭐ */}
        {/* ========================================================================= */}
        <div className="mt-6 mb-10 p-5 sm:p-7 rounded-3xl bg-slate-900/90 border border-emerald-500/30 backdrop-blur-md shadow-2xl relative overflow-hidden" id="popular-mobile-brands-subpanel">
          {/* Header for Popular Brands Showcase */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
            <div className="flex items-center space-x-3">
              {/* Premium Tech Sparkle Emblem */}
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 shadow-sm">
                <Smartphone className="w-4 h-4 text-emerald-400" />
              </div>

              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                    Popular Brands in India
                  </h3>
                  <span className="text-[10px] uppercase font-bold tracking-widest bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full">
                    Top Verified Brands
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Certified pre-owned phones from India&apos;s most loved brands — Apple, Samsung, Motorola, Vivo, Nothing, Oppo, Realme & more. Click any brand logo to filter models.
                </p>
              </div>
            </div>

            {selectedBrand ? (
              <button
                onClick={() => setSelectedBrand(null)}
                className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold hover:bg-emerald-500/30 transition-colors cursor-pointer self-start sm:self-auto"
                id="clear-popular-brand-filter-btn"
              >
                <span>Selected: {selectedBrand}</span>
                <X className="w-3.5 h-3.5 ml-1" />
              </button>
            ) : (
              <span className="text-xs text-slate-400 hidden sm:inline-block">
                12 Top Brands Listed
              </span>
            )}
          </div>

          {/* ALL 12 POPULAR MOBILE BRANDS LOGOS GRID */}
          <div
            className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-3.5"
            id="popular-brands-logo-grid"
          >
            {POPULAR_REFURBISHED_BRANDS.map((brand: PopularRefurbishedBrand) => {
              const isSelected = selectedBrand?.toLowerCase() === brand.name.toLowerCase();

              return (
                <button
                  key={brand.id}
                  onClick={() => handleBrandLogoClick(brand.name)}
                  className={`group relative p-3 sm:p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-emerald-950/70 border-emerald-400 ring-2 ring-emerald-400/30 shadow-lg scale-[1.02]'
                      : 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-emerald-500/50 hover:shadow-md'
                  }`}
                  id={`brand-card-${brand.id}`}
                  title={`${brand.name} - ${brand.tagline}`}
                >
                  {/* Brand Visual Logo Representation */}
                  <div className="flex items-center justify-between w-full mb-2">
                    {/* Custom Vector Brand Logo Badge */}
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-black tracking-tighter text-sm shadow-inner transition-transform group-hover:scale-105"
                      style={{
                        backgroundColor: brand.primaryColor,
                        color: brand.id === 'realme' ? '#000000' : '#FFFFFF'
                      }}
                    >
                      {brand.id === 'apple' && (
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 170 170">
                          <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.69-7.79-11.97-14.24-5.99-9.02-10.77-19.34-14.34-30.98-3.56-11.64-5.34-22.75-5.34-33.34 0-15.01 3.81-27.46 11.43-37.34 7.62-9.88 17.38-14.93 29.28-15.15 4.8 0 10.14 1.25 16.03 3.75 5.88 2.5 9.77 3.81 11.66 3.93 1.9-.12 6.02-1.49 12.37-4.11 6.35-2.61 11.64-3.75 15.86-3.41 12.08.65 21.84 5.38 29.28 14.18-10.67 6.53-15.89 15.6-15.66 27.23.23 9.36 3.93 17.2 11.1 23.53 7.18 6.31 15.7 9.87 25.57 10.67-2.18 6.64-4.8 13.06-7.85 19.26zM119.22 31.84c0-7.29 2.65-14.15 7.95-20.57 5.3-6.42 11.75-10.45 19.34-12.09.43 1.41.65 2.83.65 4.25 0 7.4-2.83 14.48-8.49 21.23-5.66 6.75-12.2 10.78-19.63 12.09-.11-1.63-.16-3.26-.16-4.91z" />
                        </svg>
                      )}
                      {brand.id === 'samsung' && (
                        <span className="font-black tracking-widest text-[8px] text-white">SAMSUNG</span>
                      )}
                      {brand.id === 'motorola' && (
                        <div className="flex flex-col items-center leading-none">
                          <span className="text-sm font-black font-mono">M</span>
                          <span className="text-[6px] font-bold tracking-widest text-cyan-300">MOTO</span>
                        </div>
                      )}
                      {brand.id === 'vivo' && (
                        <span className="font-bold tracking-wider text-xs lowercase">vivo</span>
                      )}
                      {brand.id === 'nothing' && (
                        <span className="font-mono font-bold tracking-widest text-[8px] text-white">NOTHING</span>
                      )}
                      {brand.id === 'oppo' && (
                        <span className="font-extrabold tracking-wider text-xs lowercase text-white">oppo</span>
                      )}
                      {brand.id === 'realme' && (
                        <span className="font-black tracking-tight text-[11px] lowercase text-black">realme</span>
                      )}
                      {brand.id === 'oneplus' && (
                        <div className="flex items-center font-black text-xs text-white">
                          <span>1</span>
                          <span className="text-[10px] text-red-200">+</span>
                        </div>
                      )}
                      {brand.id === 'xiaomi' && (
                        <span className="font-black text-xs lowercase text-white">mi</span>
                      )}
                      {brand.id === 'google-pixel' && (
                        <span className="font-black text-[10px] tracking-tight text-white">G Pixel</span>
                      )}
                      {brand.id === 'iqoo' && (
                        <span className="font-black italic text-[11px] text-amber-950">iQOO</span>
                      )}
                      {brand.id === 'poco' && (
                        <span className="font-black tracking-wider text-[10px] text-slate-950">POCO</span>
                      )}
                    </div>

                    {/* Available count indicator */}
                    <span className="text-[10px] font-semibold text-slate-400 group-hover:text-emerald-300">
                      {brand.refurbishedCount}+ units
                    </span>
                  </div>

                  {/* Brand Typography & Tagline */}
                  <div>
                    <div className="flex items-center space-x-1">
                      <span className="font-black text-white text-sm tracking-tight group-hover:text-emerald-300 transition-colors">
                        {brand.name}
                      </span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                    </div>

                    <div className="text-[10px] text-slate-400 font-medium truncate mt-0.5">
                      {brand.tagline}
                    </div>

                    <div className="text-[9px] text-emerald-400/90 font-semibold truncate mt-1">
                      {brand.badge}
                    </div>
                  </div>

                  {/* Subtle Selection Indicator Bar */}
                  <div
                    className={`mt-2.5 h-1 w-full rounded-full transition-all duration-200 ${
                      isSelected ? 'bg-emerald-400' : 'bg-white/10 group-hover:bg-emerald-500/50'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          {/* Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar" id="refurbished-filter-tabs">
            <button
              onClick={() => {
                setSelectedFilter('all');
                setSelectedBrand(null);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedFilter === 'all' && !selectedBrand
                  ? 'bg-emerald-500 text-slate-950 shadow-sm'
                  : 'bg-white/10 text-slate-300 hover:bg-white/15'
              }`}
            >
              All Refurbished ({REFURBISHED_PRODUCTS.length})
            </button>

            <button
              onClick={() => {
                setSelectedFilter('popular');
                setSelectedBrand(null);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center space-x-1.5 ${
                selectedFilter === 'popular'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm'
                  : 'bg-white/10 text-slate-300 hover:bg-white/15'
              }`}
            >
              <span>🔥 Top Brands in India</span>
            </button>

            <button
              onClick={() => {
                setSelectedFilter('budget');
                setSelectedBrand(null);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedFilter === 'budget'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm'
                  : 'bg-white/10 text-slate-300 hover:bg-white/15'
              }`}
            >
              Under ₹15,000 Budget
            </button>

            <button
              onClick={() => {
                setSelectedFilter('flagship');
                setSelectedBrand(null);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedFilter === 'flagship'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm'
                  : 'bg-white/10 text-slate-300 hover:bg-white/15'
              }`}
            >
              Pre-Owned Flagships
            </button>

            <button
              onClick={() => {
                setSelectedFilter('grade-a-plus');
                setSelectedBrand(null);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedFilter === 'grade-a-plus'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm'
                  : 'bg-white/10 text-slate-300 hover:bg-white/15'
              }`}
            >
              Grade A+ Pristine
            </button>
          </div>

          <div className="text-xs text-slate-400 font-medium">
            Showing <span className="text-white font-bold">{filteredProducts.length}</span> verified phones
          </div>
        </div>

        {/* Refurbished Products Cards Grid */}
        <div
          className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
          id="refurbished-phones-grid"
        >
          {filteredProducts.map((product) => {
            const savings = product.originalPrice - product.discountedPrice;

            return (
              <div
                key={product.id}
                onClick={() => openQuickView(product)}
                className="group relative rounded-2xl bg-slate-900 border border-white/10 hover:border-emerald-500/60 transition-all duration-200 overflow-hidden flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-emerald-900/20 cursor-pointer"
                id={`refurb-card-${product.id}`}
              >
                {/* Top Badges & Image Showcase */}
                <div className="relative aspect-4/3 w-full bg-slate-950 flex items-center justify-center overflow-hidden p-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Condition Grade Tag */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                    <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 uppercase tracking-wider shadow-sm">
                      {product.conditionGrade || 'Certified Grade A+'}
                    </span>
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-slate-800/90 text-slate-200 border border-white/10 shadow-xs backdrop-blur-xs">
                      {product.brand}
                    </span>
                  </div>

                  {/* Battery Health Badge */}
                  {product.batteryHealth && (
                    <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-xs text-emerald-400 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 z-10">
                      <BatteryCharging className="w-3 h-3 text-emerald-400" />
                      <span>{product.batteryHealth.replace(' Battery Health', '')}</span>
                    </div>
                  )}

                  {/* Quality Check Verification Tag */}
                  <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded-md border border-white/10 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>52-Point Checked</span>
                  </div>

                  {/* Warranty Tag */}
                  <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-xs text-amber-300 text-[10px] font-semibold px-2 py-0.5 rounded-md border border-white/10">
                    {product.warrantyMonths}M Warranty
                  </div>
                </div>

                {/* Card Content & Pricing Details */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Brand & Category */}
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span className="font-bold text-emerald-400 uppercase tracking-wider">
                        {product.brand}
                      </span>
                      <div className="flex items-center space-x-1 text-amber-400 font-bold text-[11px]">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span>{product.rating}</span>
                      </div>
                    </div>

                    {/* Phone Title */}
                    <h3 className="font-bold text-white text-sm sm:text-base line-clamp-1 group-hover:text-emerald-300 transition-colors">
                      {product.name}
                    </h3>

                    {/* Refurbished Highlights / Specs Pills */}
                    <div className="mt-2.5 flex flex-wrap gap-1">
                      {product.specs.slice(0, 2).map((spec, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5 truncate max-w-full"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    {/* Inclusions info */}
                    <div className="mt-2.5 text-[11px] text-slate-400 flex items-center space-x-1">
                      <Zap className="w-3 h-3 text-emerald-400" />
                      <span>Charger + Eco Box included</span>
                    </div>
                  </div>

                  {/* Price & Add to Cart Action */}
                  <div className="mt-4 pt-3 border-t border-white/10">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-xl sm:text-2xl font-black text-white">
                        ₹{product.discountedPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-slate-400 line-through">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] font-black text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-1.5 py-0.5 rounded">
                        {product.discountPercentage}% OFF
                      </span>
                    </div>

                    <div className="text-[11px] font-bold text-emerald-400 mt-1">
                      Save ₹{savings.toLocaleString('en-IN')} vs New
                    </div>

                    {/* Buttons */}
                    <div className="grid grid-cols-2 gap-2 mt-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openQuickView(product);
                        }}
                        className="py-2 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-colors text-center cursor-pointer flex items-center justify-center space-x-1"
                        id={`quickview-btn-${product.id}`}
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect</span>
                      </button>

                      <button
                        onClick={(e) => handleAddToCart(e, product)}
                        className="py-2 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black transition-all text-center cursor-pointer flex items-center justify-center space-x-1 shadow-md active:scale-95"
                        id={`add-to-cart-refurb-${product.id}`}
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Sell / Trade-in Banner Inside Section */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950 via-slate-900 to-blue-950 border border-emerald-500/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6" id="tradein-cta-banner">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/15 px-3 py-1 rounded-full border border-emerald-500/30">
              Shri Balaji Instant Buyback
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Upgrade to Refurbished • Trade-in Your Current Phone
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl">
              Get an instant doorstep or in-store evaluation. We accept all models from Apple, Samsung, Lava, Micromax, OnePlus, and more with instant bank transfer or spot cash.
            </p>
          </div>

          <button
            onClick={() => setIsTradeInModalOpen(true)}
            className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-black transition-all shadow-lg cursor-pointer whitespace-nowrap active:scale-95 shrink-0"
            id="calculate-buyback-value-btn"
          >
            Calculate Phone Buyback Value
          </button>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 52-POINT CHECKLIST & GRADING EXPLANATION MODAL */}
      {/* ========================================================================= */}
      {isGradingModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto" id="refurbished-grading-modal">
          <div
            onClick={() => setIsGradingModalOpen(false)}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs transition-opacity"
          />

          <div className="min-h-full flex items-center justify-center p-4 sm:p-6 text-center">
            <div className="relative w-full max-w-3xl bg-slate-900 border border-emerald-500/30 text-white rounded-3xl shadow-2xl p-6 sm:p-8 text-left overflow-hidden">
              <button
                onClick={() => setIsGradingModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-400 hover:text-white transition-colors cursor-pointer"
                id="close-grading-modal-btn"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-2 text-emerald-400 text-xs font-black uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>The Shri Balaji Quality Standard</span>
              </div>

              <h3 className="text-2xl font-black text-white mb-2">
                How We Inspect & Grade Refurbished Phones
              </h3>

              <p className="text-slate-300 text-sm mb-6">
                Every pre-owned phone passing through Shri Balaji Mobiles undergoes an intensive 52-point mechanical and software diagnostic before being certified.
              </p>

              {/* Condition Grades Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="p-4 rounded-2xl bg-white/5 border border-emerald-500/40">
                  <div className="text-emerald-400 text-xs font-black uppercase tracking-wider">
                    Grade A+ (Pristine)
                  </div>
                  <div className="font-bold text-white text-base mt-1">Like New Condition</div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Zero scratches or marks. 95%+ battery health. Flawless display and 100% genuine parts.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-blue-500/40">
                  <div className="text-blue-400 text-xs font-black uppercase tracking-wider">
                    Grade A (Superb)
                  </div>
                  <div className="font-bold text-white text-base mt-1">Gently Loved</div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Microscopic signs of handling visible only under close inspection. 90%+ battery health.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-amber-500/40">
                  <div className="text-amber-400 text-xs font-black uppercase tracking-wider">
                    Grade B+ (Very Good)
                  </div>
                  <div className="font-bold text-white text-base mt-1">Maximum Savings</div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Minor cosmetic scuffs, 100% tested functionality, perfect screen clarity. Biggest discounts.
                  </p>
                </div>
              </div>

              {/* 52-Point Diagnostic Categories */}
              <h4 className="text-sm font-black text-white uppercase tracking-wider mb-3">
                Key Diagnostic Testing Checkpoints:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-60 overflow-y-auto pr-1">
                {REFURBISHED_INSPECTION_POINTS.map((point) => (
                  <div
                    key={point.id}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start space-x-3 text-xs"
                  >
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-white">{point.title}</div>
                      <div className="text-slate-400 text-[11px] mt-0.5">{point.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setIsGradingModalOpen(false)}
                  className="px-5 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-colors cursor-pointer"
                >
                  Got It, Browse Phones
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TRADE-IN & OLD PHONE BUYBACK CALCULATOR MODAL */}
      {/* ========================================================================= */}
      {isTradeInModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto" id="tradein-calculator-modal">
          <div
            onClick={() => setIsTradeInModalOpen(false)}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs transition-opacity"
          />

          <div className="min-h-full flex items-center justify-center p-4 sm:p-6 text-center">
            <div className="relative w-full max-w-lg bg-slate-900 border border-emerald-500/40 text-white rounded-3xl shadow-2xl p-6 sm:p-8 text-left overflow-hidden">
              <button
                onClick={() => setIsTradeInModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-400 hover:text-white transition-colors cursor-pointer"
                id="close-tradein-modal-btn"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-2 text-emerald-400 text-xs font-black uppercase tracking-wider mb-2">
                <RotateCcw className="w-4 h-4" />
                <span>Instant Cash or Trade-in Credit</span>
              </div>

              <h3 className="text-2xl font-black text-white mb-2">
                Sell or Exchange Your Old Phone
              </h3>

              <p className="text-slate-300 text-xs mb-5">
                Select your old phone’s details to receive an instant price quote from Shri Balaji’s certified trade-in network.
              </p>

              <form onSubmit={handleCalculateTradeIn} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Select Brand
                  </label>
                  <select
                    value={tradeInBrand}
                    onChange={(e) => setTradeInBrand(e.target.value)}
                    className="w-full bg-slate-800 border border-white/20 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Apple">Apple iPhone</option>
                    <option value="Samsung">Samsung Galaxy</option>
                    <option value="Motorola">Motorola</option>
                    <option value="Vivo">Vivo</option>
                    <option value="Nothing">Nothing Phone</option>
                    <option value="Oppo">Oppo</option>
                    <option value="Realme">Realme</option>
                    <option value="OnePlus">OnePlus</option>
                    <option value="Xiaomi">Xiaomi / Redmi</option>
                    <option value="Google Pixel">Google Pixel</option>
                    <option value="iQOO">iQOO</option>
                    <option value="POCO">POCO</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Model Name / Storage (e.g. iPhone 13 128GB or Lava Agni 2)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter model name..."
                    value={tradeInModel}
                    onChange={(e) => setTradeInModel(e.target.value)}
                    className="w-full bg-slate-800 border border-white/20 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Current Device Condition
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Flawless', 'Good', 'Average'].map((cond) => (
                      <button
                        type="button"
                        key={cond}
                        onClick={() => setTradeInCondition(cond)}
                        className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                          tradeInCondition === cond
                            ? 'bg-emerald-500 text-slate-950 border-emerald-500'
                            : 'bg-slate-800 text-slate-300 border-white/10 hover:border-emerald-500/50'
                        }`}
                      >
                        {cond}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-black transition-all shadow-lg cursor-pointer active:scale-98"
                    id="submit-tradein-estimate-btn"
                  >
                    Get Instant Valuation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
