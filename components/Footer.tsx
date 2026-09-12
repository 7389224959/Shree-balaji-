'use client';

import React, { useState } from 'react';
import {
  Smartphone,
  ChevronDown,
  ShieldCheck,
  Zap,
  RotateCcw,
  CreditCard,
  Phone,
  Mail,
  MapPin,
  Clock,
  Heart
} from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { TRUST_PROMISES } from '@/lib/data';

export default function Footer() {
  const { setLocationModalOpen, setAuthModalOpen, addToast } = useCart();

  // Accordion state for mobile screens
  const [openSection, setOpenSection] = useState<string | null>('about');

  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const handleLinkClick = (title: string) => {
    addToast(title, 'Navigating to official Balaji Mobiles information portal', 'info');
  };

  return (
    <footer className="bg-[#0A0A0A] text-slate-400 border-t border-white/5" id="main-footer">
      
      {/* 4 Trust & Guarantee Badges */}
      <div className="border-b border-white/5 bg-[#111111] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="flex items-start space-x-3.5 p-3 rounded-2xl bg-white/5 border border-white/5">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">100% Genuine Products</h4>
              <p className="text-xs text-slate-400 mt-0.5">Authorized brand warranty on every device</p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5 p-3 rounded-2xl bg-white/5 border border-white/5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">2-Hour Express Delivery</h4>
              <p className="text-xs text-slate-400 mt-0.5">Dispatched from 250+ nearest retail outlets</p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5 p-3 rounded-2xl bg-white/5 border border-white/5">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">7-Day Easy Replacement</h4>
              <p className="text-xs text-slate-400 mt-0.5">Hassle-free doorstep or in-store replacement</p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5 p-3 rounded-2xl bg-white/5 border border-white/5">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-500/20">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Zero Cost EMI Plans</h4>
              <p className="text-xs text-slate-400 mt-0.5">Available across 20+ leading banks & cards</p>
            </div>
          </div>

        </div>
      </div>

      {/* Main Footer Links & Accordions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#003399] flex items-center justify-center text-white shadow-md">
                <Smartphone className="w-6 h-6 text-amber-300" />
              </div>
              <div className="flex items-baseline space-x-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-amber-500 font-sans">
                  SHRI
                </span>
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-sans">
                  BALAJI
                </span>
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-blue-500 font-sans">
                  MOBILES
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed font-normal">
              South India&apos;s premier multi-brand retail chain with over 250+ authorized stores.
              Committed to bringing you authentic smartphones, smart audio, and home tech at unmatched prices.
            </p>

            {/* Helpline contact info */}
            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center space-x-2 text-slate-300">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Toll-Free Customer Care: <strong>1800 120 2252</strong> (9 AM - 9 PM)</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Email Support: <strong>support@shribalajimobiles.com</strong></span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>HQ: MG Road, Bengaluru, Karnataka - 560001</span>
              </div>
            </div>
          </div>

          {/* Accordion Columns for Mobile / Responsive Grid for Desktop */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Accordion 1: About Shri Balaji */}
            <div className="border-b sm:border-b-0 border-white/5 pb-4 sm:pb-0">
              <button
                onClick={() => toggleSection('about')}
                className="w-full flex items-center justify-between sm:cursor-default text-left font-bold text-white text-base mb-3 group"
                id="footer-accordion-about-btn"
              >
                <span>About Shri Balaji</span>
                <ChevronDown className={`w-4 h-4 sm:hidden transition-transform ${openSection === 'about' ? 'rotate-180 text-blue-400' : ''}`} />
              </button>
              
              <ul className={`space-y-2.5 text-xs sm:text-sm ${openSection === 'about' ? 'block' : 'hidden sm:block'}`}>
                <li>
                  <button onClick={() => handleLinkClick('Our 25-Year Heritage')} className="hover:text-white transition-colors text-left">
                    Our 25-Year Retail Story
                  </button>
                </li>
                <li>
                  <button onClick={() => setLocationModalOpen(true)} className="hover:text-white transition-colors text-left">
                    Find Nearest 250+ Stores
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('Authorized Brand Stores')} className="hover:text-white transition-colors text-left">
                    Authorized Brand Stores
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('Corporate & Bulk Orders')} className="hover:text-white transition-colors text-left">
                    Corporate & Enterprise Orders
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('Careers at Balaji')} className="hover:text-white transition-colors text-left">
                    Careers & Retail Hiring
                  </button>
                </li>
              </ul>
            </div>

            {/* Accordion 2: Shop By */}
            <div className="border-b sm:border-b-0 border-white/5 pb-4 sm:pb-0">
              <button
                onClick={() => toggleSection('shop')}
                className="w-full flex items-center justify-between sm:cursor-default text-left font-bold text-white text-base mb-3 group"
                id="footer-accordion-shop-btn"
              >
                <span>Shop By</span>
                <ChevronDown className={`w-4 h-4 sm:hidden transition-transform ${openSection === 'shop' ? 'rotate-180 text-blue-400' : ''}`} />
              </button>

              <ul className={`space-y-2.5 text-xs sm:text-sm ${openSection === 'shop' ? 'block' : 'hidden sm:block'}`}>
                <li>
                  <button onClick={() => handleLinkClick('Apple iPhone 17 & Watch')} className="hover:text-white transition-colors text-left">
                    Apple Authorized Pavilion
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('Samsung Galaxy Flagships')} className="hover:text-white transition-colors text-left">
                    Samsung Galaxy AI Series
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('OnePlus & Nord Store')} className="hover:text-white transition-colors text-left">
                    OnePlus 13 & Nord Devices
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('Smart Watches & TWS')} className="hover:text-white transition-colors text-left">
                    Smart Watches & Audio Store
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('4K Smart TVs & Home Tech')} className="hover:text-white transition-colors text-left">
                    4K Smart TVs & Appliances
                  </button>
                </li>
              </ul>
            </div>

            {/* Accordion 3: Help & Support */}
            <div className="border-b sm:border-b-0 border-white/5 pb-4 sm:pb-0">
              <button
                onClick={() => toggleSection('help')}
                className="w-full flex items-center justify-between sm:cursor-default text-left font-bold text-white text-base mb-3 group"
                id="footer-accordion-help-btn"
              >
                <span>Help & Support</span>
                <ChevronDown className={`w-4 h-4 sm:hidden transition-transform ${openSection === 'help' ? 'rotate-180 text-blue-400' : ''}`} />
              </button>

              <ul className={`space-y-2.5 text-xs sm:text-sm ${openSection === 'help' ? 'block' : 'hidden sm:block'}`}>
                <li>
                  <button onClick={() => setAuthModalOpen(true)} className="hover:text-white transition-colors text-left">
                    Track Your Order Status
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('Authorized Service Center')} className="hover:text-white transition-colors text-left">
                    Brand Warranty & Service Centers
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('7-Day Replacement Policy')} className="hover:text-white transition-colors text-left">
                    7-Day Replacement Policy
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('Price Match Guarantee')} className="hover:text-white transition-colors text-left">
                    Price Match Guarantee
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('Privacy Policy & Terms')} className="hover:text-white transition-colors text-left">
                    Privacy Policy & Terms of Use
                  </button>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Social Media & Payment Badges Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Socials */}
          <div className="flex items-center space-x-3 text-slate-400">
            <span className="text-xs font-semibold text-slate-300">Connect with us:</span>
            
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#003399] hover:text-white border border-white/10 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* Twitter / X */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Twitter / X"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-red-600 hover:text-white border border-white/10 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-pink-600 hover:text-white border border-white/10 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>

          {/* Payment Accepted Badges */}
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <span className="text-[11px] font-semibold text-slate-400 mr-1">Secured by:</span>
            <span className="px-2 py-1 bg-white/5 border border-white/10 rounded font-semibold text-slate-300 text-[10px]">UPI</span>
            <span className="px-2 py-1 bg-white/5 border border-white/10 rounded font-semibold text-slate-300 text-[10px]">VISA</span>
            <span className="px-2 py-1 bg-white/5 border border-white/10 rounded font-semibold text-slate-300 text-[10px]">Mastercard</span>
            <span className="px-2 py-1 bg-white/5 border border-white/10 rounded font-semibold text-slate-300 text-[10px]">RuPay</span>
            <span className="px-2 py-1 bg-white/5 border border-white/10 rounded font-semibold text-slate-300 text-[10px]">Bajaj Finserv EMI</span>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-slate-500">
          <p>Copyright 2024 © Shri Balaji Mobiles. All Rights Reserved.</p>
          <p className="mt-1 text-[11px] text-slate-600">
            Inspired by top retail standards. All brand names, logos, and trademarks are property of their respective manufacturers.
          </p>
        </div>

      </div>
    </footer>
  );
}
