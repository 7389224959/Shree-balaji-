'use client';

import React, { useState } from 'react';
import {
  X,
  User,
  Phone,
  ShieldCheck,
  Package,
  Heart,
  Gift,
  CheckCircle2,
  ArrowRight,
  LogOut,
  MapPin
} from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { PRODUCTS } from '@/lib/data';

export default function AuthModal() {
  const {
    isAuthModalOpen,
    setAuthModalOpen,
    wishlist,
    toggleWishlist,
    addToCart,
    openQuickView,
    addToast,
    selectedCity
  } = useCart();

  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'wishlist'>('profile');
  const [phoneNumber, setPhoneNumber] = useState('98765 43210');
  const [userName, setUserName] = useState('Vishal Sharma');
  const [isOtpSent, setIsOtpSent] = useState(false);

  if (!isAuthModalOpen) return null;

  const wishlistProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" id="auth-modal-overlay">
      <div
        onClick={() => setAuthModalOpen(false)}
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity animate-in fade-in"
      />

      <div className="min-h-full flex items-center justify-center p-4 text-center">
        <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 text-left overflow-hidden animate-in zoom-in-95 duration-200">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-base shadow-xs">
                VS
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">{userName}</h3>
                <p className="text-xs text-slate-500 font-normal">+91 {phoneNumber} • Shri Balaji Elite Member</p>
              </div>
            </div>

            <button
              onClick={() => setAuthModalOpen(false)}
              className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700"
              id="auth-modal-close-btn"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center space-x-1 border-b border-slate-100 mt-3">
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex-1 py-2.5 text-xs font-bold border-b-2 transition-colors cursor-pointer ${
                activeTab === 'profile'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              Profile & Rewards
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`flex-1 py-2.5 text-xs font-bold border-b-2 transition-colors cursor-pointer ${
                activeTab === 'orders'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              My Orders
            </button>
            <button
              onClick={() => setActiveTab('wishlist')}
              className={`flex-1 py-2.5 text-xs font-bold border-b-2 transition-colors cursor-pointer flex items-center justify-center gap-1 ${
                activeTab === 'wishlist'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <span>Saved Wishlist</span>
              {wishlist.length > 0 && (
                <span className="bg-rose-500 text-white rounded-full text-[10px] px-1.5 py-0.2">
                  {wishlist.length}
                </span>
              )}
            </button>
          </div>

          {/* Tab Content */}
          <div className="py-4">
            {activeTab === 'profile' && (
              <div className="space-y-4">
                {/* Reward points card */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-blue-200 uppercase font-semibold">Shri Balaji Reward Coins</div>
                      <div className="text-2xl font-black mt-0.5">1,250 Coins (₹1,250 Value)</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-amber-300">
                      <Gift className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="mt-3 text-[11px] text-blue-100 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Redeemable on all Smartphone & TV purchases at checkout</span>
                  </div>
                </div>

                {/* Account Details */}
                <div className="space-y-2.5 text-xs text-slate-700">
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                    <div>
                      <div className="text-slate-400 font-medium">Default Delivery Address</div>
                      <div className="font-bold text-slate-900 mt-0.5">#42, 2nd Cross, Indiranagar, Bengaluru - 560001</div>
                    </div>
                    <span className="text-[11px] font-bold text-blue-600">Edit</span>
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                    <div>
                      <div className="text-slate-400 font-medium">Linked Mobile & OTP</div>
                      <div className="font-bold text-slate-900 mt-0.5">+91 {phoneNumber} (Verified)</div>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-600">Active</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="space-y-3 max-h-72 overflow-y-auto">
                <div className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50">
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-200">
                    <span className="font-mono font-bold text-slate-900">#BLJ-982144</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                      Delivered
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 mt-2.5">
                    <img
                      src="https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=150&q=80"
                      alt="AirPods Pro"
                      className="w-12 h-12 object-cover rounded-lg border border-slate-200"
                    />
                    <div className="flex-1">
                      <h5 className="font-bold text-slate-900 text-xs">Apple AirPods Pro (2nd Gen USB-C)</h5>
                      <div className="text-[11px] text-slate-500">₹19,990 • Ordered on 18 Aug 2026</div>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50">
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-200">
                    <span className="font-mono font-bold text-slate-900">#BLJ-761209</span>
                    <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold text-[10px]">
                      2-Hour Dispatch
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 mt-2.5">
                    <img
                      src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=150&q=80"
                      alt="Google Pixel"
                      className="w-12 h-12 object-cover rounded-lg border border-slate-200"
                    />
                    <div className="flex-1">
                      <h5 className="font-bold text-slate-900 text-xs">Google Pixel 10a 5G (Obsidian)</h5>
                      <div className="text-[11px] text-slate-500">₹37,999 • Out for Delivery in {selectedCity.city}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div>
                {wishlistProducts.length === 0 ? (
                  <div className="text-center py-8 space-y-3">
                    <Heart className="w-10 h-10 text-slate-300 mx-auto" />
                    <div className="text-sm font-bold text-slate-800">Your Wishlist is Empty</div>
                    <p className="text-xs text-slate-500 max-w-xs mx-auto">
                      Click the heart icon on any phone or gadget to save it here for later.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2.5 max-h-72 overflow-y-auto">
                    {wishlistProducts.map((p) => (
                      <div
                        key={p.id}
                        className="p-3 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between space-x-3"
                      >
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-14 h-14 object-cover rounded-xl border border-slate-200 shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h5 className="font-bold text-slate-900 text-xs truncate">{p.name}</h5>
                          <div className="text-xs font-black text-slate-900 mt-0.5">
                            ₹{p.discountedPrice.toLocaleString('en-IN')}
                          </div>
                        </div>
                        <div className="flex items-center space-x-1.5 shrink-0">
                          <button
                            onClick={() => {
                              addToCart(p);
                              toggleWishlist(p.id);
                            }}
                            className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-bold hover:bg-blue-700"
                          >
                            Move to Cart
                          </button>
                          <button
                            onClick={() => toggleWishlist(p.id)}
                            className="p-1.5 text-slate-400 hover:text-rose-500"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer Action */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <button
              onClick={() => {
                addToast('Session Synced', 'Your profile and orders are up to date.', 'info');
                setAuthModalOpen(false);
              }}
              className="text-blue-600 font-bold hover:underline"
            >
              Done
            </button>
            <button
              onClick={() => {
                addToast('Logged Out', 'You have been safely signed out.', 'info');
                setAuthModalOpen(false);
              }}
              className="text-slate-400 hover:text-slate-600 flex items-center gap-1"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log out</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
