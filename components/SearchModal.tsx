'use client';

import React, { useState } from 'react';
import { X, Search, Star, ShoppingCart, Eye, Heart, Filter } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { PRODUCTS, BRANDS_LIST } from '@/lib/data';

export default function SearchModal() {
  const {
    isSearchOpen,
    setSearchOpen,
    searchQuery,
    setSearchQuery,
    addToCart,
    openQuickView,
    toggleWishlist,
    isInWishlist
  } = useCart();

  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [selectedMaxPrice, setSelectedMaxPrice] = useState<number>(120000);

  if (!isSearchOpen) return null;

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesQuery =
      searchQuery.trim() === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesBrand = selectedBrand === 'All' || p.brand.toLowerCase() === selectedBrand.toLowerCase();
    const matchesPrice = p.discountedPrice <= selectedMaxPrice;

    return matchesQuery && matchesBrand && matchesPrice;
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" id="search-modal-overlay">
      <div
        onClick={() => setSearchOpen(false)}
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity animate-in fade-in"
      />

      <div className="min-h-full flex items-center justify-center p-4 sm:p-6 text-center">
        <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 text-left overflow-hidden animate-in zoom-in-95 duration-200">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center space-x-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Search className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Search Catalog</h3>
                <p className="text-xs text-slate-500">Find smartphones, headphones, gadgets and TVs with live stock</p>
              </div>
            </div>

            <button
              onClick={() => setSearchOpen(false)}
              className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Input and Filters */}
          <div className="mt-5 space-y-4">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by brand, phone model, RAM, or category..."
                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                autoFocus
              />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-bold text-slate-500 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Brands:
              </span>
              <button
                onClick={() => setSelectedBrand('All')}
                className={`px-3 py-1 rounded-full font-bold border transition-colors ${
                  selectedBrand === 'All'
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                All Brands
              </button>
              {['Apple', 'Samsung', 'OnePlus', 'Google Pixel', 'Vivo', 'Xiaomi', 'Nothing'].map((brand) => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={`px-3 py-1 rounded-full font-bold border transition-colors ${
                    selectedBrand === brand
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          {/* Search Results Grid */}
          <div className="mt-6 max-h-[60vh] overflow-y-auto pr-1">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
              Showing {filteredProducts.length} results
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12 space-y-2">
                <Search className="w-10 h-10 text-slate-300 mx-auto" />
                <div className="text-base font-bold text-slate-800">No matching products found</div>
                <p className="text-xs text-slate-500">Try changing your search terms or clearing the brand filter.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredProducts.map((product) => {
                  const isSaved = isInWishlist(product.id);
                  return (
                    <div
                      key={product.id}
                      className="p-3.5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-50 mb-3 border border-slate-100">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                          <span className="absolute top-2 left-2 bg-orange-500 text-white text-[10px] font-black px-2 py-0.5 rounded-md uppercase">
                            {product.discountPercentage}% OFF
                          </span>
                        </div>

                        <div className="flex items-center space-x-1 mb-1">
                          <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                          <span className="text-xs font-bold text-slate-800">{product.rating}</span>
                          <span className="text-[10px] text-slate-400">({product.brand})</span>
                        </div>

                        <h4 className="text-xs font-bold text-slate-900 line-clamp-2 leading-tight">
                          {product.name}
                        </h4>
                      </div>

                      <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <div className="text-sm font-black text-slate-900">
                            ₹{product.discountedPrice.toLocaleString('en-IN')}
                          </div>
                          <div className="text-[10px] text-slate-400 line-through">
                            ₹{product.originalPrice.toLocaleString('en-IN')}
                          </div>
                        </div>

                        <div className="flex items-center space-x-1">
                          <button
                            onClick={() => {
                              openQuickView(product);
                              setSearchOpen(false);
                            }}
                            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs"
                            title="Quick View"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => addToCart(product)}
                            className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs"
                            title="Add to Cart"
                          >
                            <ShoppingCart className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
