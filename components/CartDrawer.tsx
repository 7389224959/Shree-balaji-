'use client';

import React, { useState } from 'react';
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingCart,
  ArrowRight,
  ShieldCheck,
  Zap,
  Tag,
  Gift,
  CheckCircle2,
  ShoppingBag
} from 'lucide-react';
import { useCart } from '@/lib/cart-context';

export default function CartDrawer() {
  const {
    isCartOpen,
    closeCart,
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartCount,
    cartSubtotal,
    cartSavings,
    cartGrandTotal,
    appliedCoupon,
    discountAmount,
    applyCoupon,
    removeCoupon,
    selectedCity,
    addToast
  } = useCart();

  const [couponInput, setCouponInput] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState('BLJ-884920');

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    if (applyCoupon(couponInput)) {
      setCouponInput('');
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    const newId = `BLJ-${Math.floor(100000 + Math.random() * 900000)}`;
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderId(newId);
      setOrderComplete(true);
      clearCart();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" id="cart-drawer-overlay">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity animate-in fade-in"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
          
          {/* Cart Header */}
          <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Your Shopping Cart</h3>
                <p className="text-xs text-slate-500 font-normal">
                  {cartCount} {cartCount === 1 ? 'item' : 'items'} in your bag
                </p>
              </div>
            </div>

            <button
              onClick={closeCart}
              className="p-2 rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
              id="cart-close-btn"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Delivery Promise Bar */}
          <div className="bg-amber-50 px-4 py-2 border-b border-amber-200/60 flex items-center justify-between text-xs text-amber-900">
            <div className="flex items-center space-x-1.5 font-medium">
              <Zap className="w-3.5 h-3.5 text-orange-600 fill-orange-500" />
              <span>Delivering to <strong>{selectedCity.city}</strong></span>
            </div>
            <span className="font-bold text-orange-700 bg-amber-200/80 px-2 py-0.5 rounded text-[11px]">
              {selectedCity.deliveryTime}
            </span>
          </div>

          {/* Order Success State */}
          {orderComplete ? (
            <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-slate-900">Order Placed Successfully!</h4>
              <p className="text-sm text-slate-600 max-w-xs">
                Thank you for shopping at <strong>Shri Balaji Mobiles</strong>. Your express delivery package is being packed at our {selectedCity.city} hub.
              </p>
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 w-full text-left space-y-1">
                <div>Order ID: <strong>#{orderId}</strong></div>
                <div>Estimated Dispatch: <strong>Within 45 Mins</strong></div>
                <div>Status: <strong>Invoice & Warranty Card Generated</strong></div>
              </div>
              <button
                onClick={() => {
                  setOrderComplete(false);
                  closeCart();
                }}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md"
              >
                Continue Shopping
              </button>
            </div>
          ) : cart.length === 0 ? (
            /* Empty Cart State */
            <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center">
                <ShoppingCart className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Your Cart is Empty</h4>
              <p className="text-sm text-slate-500 max-w-xs">
                Explore our festive Mega Sale and Best Selling smartphones to add items to your cart.
              </p>
              <button
                onClick={closeCart}
                className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xs"
              >
                Start Shopping Now
              </button>
            </div>
          ) : (
            /* Cart Items List */
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-3.5 divide-y divide-slate-100">
                {cart.map((item) => (
                  <div key={item.product.id} className="pt-3.5 first:pt-0 flex space-x-3.5">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-xl border border-slate-200 shrink-0 bg-slate-50"
                    />
                    
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-1">
                          <h5 className="font-bold text-slate-900 text-xs sm:text-sm line-clamp-2 leading-tight">
                            {item.product.name}
                          </h5>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-slate-400 hover:text-rose-500 p-1"
                            title="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Variant Chips */}
                        <div className="flex items-center space-x-2 text-[11px] text-slate-500 mt-1">
                          {item.selectedStorage && <span>Storage: {item.selectedStorage}</span>}
                          {item.selectedColor && <span>• {item.selectedColor}</span>}
                        </div>
                      </div>

                      {/* Price & Quantity Stepper */}
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100">
                        <div className="flex items-baseline space-x-1.5">
                          <span className="font-black text-slate-900 text-sm">
                            ₹{(item.product.discountedPrice * item.quantity).toLocaleString('en-IN')}
                          </span>
                          <span className="text-xs text-slate-400 line-through">
                            ₹{(item.product.originalPrice * item.quantity).toLocaleString('en-IN')}
                          </span>
                        </div>

                        {/* Quantity controls */}
                        <div className="flex items-center space-x-1 bg-slate-100 rounded-lg p-0.5 border border-slate-200">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="w-6 h-6 rounded flex items-center justify-center text-slate-600 hover:bg-white hover:text-slate-900 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-bold text-slate-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="w-6 h-6 rounded flex items-center justify-center text-slate-600 hover:bg-white hover:text-slate-900 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Footer: Coupons & Summary */}
              <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 space-y-3.5">
                
                {/* Promo Code Input */}
                <form onSubmit={handleApplyCoupon} className="flex space-x-2">
                  <div className="relative flex-1">
                    <Tag className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      placeholder="Enter SHRI500 or SHRI1000"
                      className="w-full pl-9 pr-3 py-2 text-xs uppercase rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                  >
                    Apply
                  </button>
                </form>

                {/* Applied Coupon Pill */}
                {appliedCoupon && (
                  <div className="p-2 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between text-xs text-emerald-800">
                    <div className="flex items-center space-x-1.5">
                      <Gift className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Code <strong>{appliedCoupon}</strong> (-₹{discountAmount.toLocaleString('en-IN')})</span>
                    </div>
                    <button
                      onClick={removeCoupon}
                      className="text-emerald-700 hover:text-rose-600 font-bold"
                    >
                      Remove
                    </button>
                  </div>
                )}

                {/* Pricing Breakdown */}
                <div className="space-y-1.5 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span>Items Total (MRP)</span>
                    <span className="line-through">₹{(cartSubtotal + cartSavings).toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>Festival Discount & Coupons</span>
                    <span>-₹{cartSavings.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Express Delivery ({selectedCity.city})</span>
                    <span className="text-emerald-600 font-bold">FREE</span>
                  </div>
                  <div className="pt-2 border-t border-slate-200 flex justify-between items-baseline text-slate-900">
                    <span className="text-sm font-bold">Grand Total</span>
                    <span className="text-xl font-black text-slate-900">
                      ₹{cartGrandTotal.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 flex items-center justify-center space-x-2 cursor-pointer transition-all disabled:opacity-75"
                  id="cart-checkout-btn"
                >
                  {isCheckingOut ? (
                    <span>Processing Secure Checkout...</span>
                  ) : (
                    <>
                      <span>Proceed to Buy • ₹{cartGrandTotal.toLocaleString('en-IN')}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                {/* Security Trust Note */}
                <div className="flex items-center justify-center space-x-1.5 text-[11px] text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>256-Bit SSL Encrypted • Official Brand Invoice</span>
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}
