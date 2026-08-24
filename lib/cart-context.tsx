'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CITIES_LIST } from './data';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedStorage?: string;
}

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type?: 'success' | 'info' | 'error';
}

interface CartContextType {
  cart: CartItem[];
  wishlist: string[];
  selectedCity: (typeof CITIES_LIST)[0];
  isCartOpen: boolean;
  isQuickViewOpen: boolean;
  isLocationModalOpen: boolean;
  isSearchOpen: boolean;
  isAuthModalOpen: boolean;
  quickViewProduct: Product | null;
  searchQuery: string;
  activeBrandFilter: string | null;
  activeCategoryFilter: string | null;
  appliedCoupon: string | null;
  discountAmount: number;
  toasts: ToastMessage[];
  
  // Actions
  addToCart: (product: Product, quantity?: number, color?: string, storage?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  openCart: () => void;
  closeCart: () => void;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
  setLocationModalOpen: (open: boolean) => void;
  setSelectedCity: (city: (typeof CITIES_LIST)[0]) => void;
  setSearchOpen: (open: boolean) => void;
  setSearchQuery: (query: string) => void;
  setAuthModalOpen: (open: boolean) => void;
  setActiveBrandFilter: (brand: string | null) => void;
  setActiveCategoryFilter: (cat: string | null) => void;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  addToast: (title: string, description?: string, type?: 'success' | 'info' | 'error') => void;
  removeToast: (id: string) => void;
  
  // Calculations
  cartCount: number;
  cartSubtotal: number;
  cartSavings: number;
  cartGrandTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('balaji_cart');
        return saved ? JSON.parse(saved) : [];
      } catch {
        return [];
      }
    }
    return [];
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('balaji_wishlist');
        return saved ? JSON.parse(saved) : [];
      } catch {
        return [];
      }
    }
    return [];
  });

  const [selectedCity, setSelectedCityState] = useState<(typeof CITIES_LIST)[0]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('balaji_city');
        return saved ? JSON.parse(saved) : CITIES_LIST[0];
      } catch {
        return CITIES_LIST[0];
      }
    }
    return CITIES_LIST[0];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeBrandFilter, setActiveBrandFilter] = useState<string | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string | null>(null);
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>('SHREE500');
  const [discountAmount, setDiscountAmount] = useState(500);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Save changes
  useEffect(() => {
    try {
      localStorage.setItem('balaji_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('balaji_wishlist', JSON.stringify(wishlist));
    } catch {
      // ignore
    }
  }, [wishlist]);

  const addToast = (title: string, description?: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Date.now().toString() + Math.random().toString().slice(2, 6);
    setToasts((prev) => [...prev, { id, title, description, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const setSelectedCity = (city: (typeof CITIES_LIST)[0]) => {
    setSelectedCityState(city);
    try {
      localStorage.setItem('balaji_city', JSON.stringify(city));
    } catch {
      // ignore
    }
    addToast('Delivery Location Updated', `Delivering to ${city.city} (${city.pincode}) - ${city.deliveryTime}`, 'info');
  };

  const addToCart = (product: Product, quantity = 1, color?: string, storage?: string) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedColor === color && item.selectedStorage === storage
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prev,
          {
            product,
            quantity,
            selectedColor: color || product.colors?.[0]?.name,
            selectedStorage: storage || product.storageVariants?.[0]
          }
        ];
      }
    });

    addToast(
      'Added to Cart! 🛒',
      `${product.name} has been added to your shopping bag.`,
      'success'
    );
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    addToast('Item removed', 'Product removed from your shopping bag', 'info');
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
    addToast('Cart Cleared', 'All items removed', 'info');
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        addToast('Removed from Wishlist', 'Item removed from your saved list', 'info');
        return prev.filter((id) => id !== productId);
      } else {
        addToast('Saved to Wishlist ❤️', 'Item added to your saved favorites', 'success');
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const openQuickView = (product: Product) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  const closeQuickView = () => {
    setIsQuickViewOpen(false);
    setQuickViewProduct(null);
  };

  const applyCoupon = (code: string): boolean => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'SHREE1000' || cleanCode === 'BALAJI1000' || cleanCode === 'SHREEBALAJI1000') {
      setAppliedCoupon(cleanCode);
      setDiscountAmount(1000);
      addToast('Promo Code Applied! 🎉', '₹1,000 instant festival discount applied.', 'success');
      return true;
    } else if (cleanCode === 'SHREE500' || cleanCode === 'BALAJI500' || cleanCode === 'SHREEBALAJI500' || cleanCode === 'FESTIVAL500') {
      setAppliedCoupon(cleanCode);
      setDiscountAmount(500);
      addToast('Promo Code Applied! 🎉', '₹500 instant mobile discount applied.', 'success');
      return true;
    } else if (cleanCode === 'WELCOME10') {
      setAppliedCoupon(cleanCode);
      setDiscountAmount(750);
      addToast('Welcome Coupon Applied!', '₹750 first-order savings applied.', 'success');
      return true;
    } else {
      addToast('Invalid Coupon', 'Please try SHREE500 or SHREE1000 for festival discounts.', 'error');
      return false;
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setDiscountAmount(0);
    addToast('Coupon Removed', 'Standard pricing restored.', 'info');
  };

  // Derived calculations
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartOriginalTotal = cart.reduce((acc, item) => acc + item.product.originalPrice * item.quantity, 0);
  const cartSubtotal = cart.reduce((acc, item) => acc + item.product.discountedPrice * item.quantity, 0);
  const cartSavings = cartOriginalTotal - cartSubtotal + (cart.length > 0 ? discountAmount : 0);
  const cartGrandTotal = Math.max(0, cartSubtotal - (cart.length > 0 ? discountAmount : 0));

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        selectedCity,
        isCartOpen,
        isQuickViewOpen,
        isLocationModalOpen,
        isSearchOpen,
        isAuthModalOpen,
        quickViewProduct,
        searchQuery,
        activeBrandFilter,
        activeCategoryFilter,
        appliedCoupon,
        discountAmount,
        toasts,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        openCart,
        closeCart,
        openQuickView,
        closeQuickView,
        setLocationModalOpen: setIsLocationModalOpen,
        setSelectedCity,
        setSearchOpen: setIsSearchOpen,
        setSearchQuery,
        setAuthModalOpen: setIsAuthModalOpen,
        setActiveBrandFilter,
        setActiveCategoryFilter,
        applyCoupon,
        removeCoupon,
        addToast,
        removeToast,
        cartCount,
        cartSubtotal,
        cartSavings,
        cartGrandTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
