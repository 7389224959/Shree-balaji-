'use client';

import React, { useState } from 'react';
import { X, MapPin, Search, Check, Zap, Building, Navigation } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { CITIES_LIST } from '@/lib/data';

export default function LocationModal() {
  const { isLocationModalOpen, setLocationModalOpen, selectedCity, setSelectedCity, addToast } = useCart();
  const [customPincode, setCustomPincode] = useState('');
  const [searchFilter, setSearchFilter] = useState('');

  if (!isLocationModalOpen) return null;

  const handlePincodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customPincode.trim().length === 6 && /^\d+$/.test(customPincode.trim())) {
      setSelectedCity({
        city: 'Current Location',
        pincode: customPincode.trim(),
        state: 'India',
        deliveryTime: '2-Hour Delivery Eligible'
      });
      setLocationModalOpen(false);
      setCustomPincode('');
    } else {
      addToast('Invalid Pincode', 'Please enter a valid 6-digit Indian postal pincode (e.g. 560001).', 'error');
    }
  };

  const filteredCities = CITIES_LIST.filter(
    (c) =>
      c.city.toLowerCase().includes(searchFilter.toLowerCase()) ||
      c.pincode.includes(searchFilter) ||
      c.state.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" id="location-modal-overlay">
      <div
        onClick={() => setLocationModalOpen(false)}
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity animate-in fade-in"
      />

      <div className="min-h-full flex items-center justify-center p-4 text-center">
        <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 text-left overflow-hidden animate-in zoom-in-95 duration-200">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center space-x-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Select Delivery Location</h3>
                <p className="text-xs text-slate-500">Check product availability and express delivery options</p>
              </div>
            </div>

            <button
              onClick={() => setLocationModalOpen(false)}
              className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700"
              id="location-modal-close-btn"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Custom Pincode Input Form */}
          <form onSubmit={handlePincodeSubmit} className="mt-5">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Enter 6-Digit Area Pincode
            </label>
            <div className="flex space-x-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  maxLength={6}
                  value={customPincode}
                  onChange={(e) => setCustomPincode(e.target.value.replace(/\D/g, ''))}
                  placeholder="e.g. 560001 or 600001"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  id="location-pincode-input"
                />
              </div>
              <button
                type="submit"
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                id="location-check-pin-btn"
              >
                Apply Pincode
              </button>
            </div>
          </form>

          {/* Quick Popular Cities */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Popular Service Hubs
              </span>
              <span className="text-[11px] text-blue-600 font-semibold flex items-center gap-1">
                <Zap className="w-3 h-3 text-amber-500" />
                2-Hour Hubs
              </span>
            </div>

            {/* City Search */}
            <div className="relative mb-3">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Filter by city name or state..."
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>

            {/* Cities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-56 overflow-y-auto pr-1">
              {filteredCities.map((city) => {
                const isSelected = selectedCity.pincode === city.pincode;

                return (
                  <button
                    key={city.pincode}
                    onClick={() => {
                      setSelectedCity(city);
                      setLocationModalOpen(false);
                    }}
                    className={`p-2.5 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-blue-50 border-blue-500 text-blue-900 ring-1 ring-blue-500/30'
                        : 'bg-slate-50 border-slate-200/80 hover:bg-slate-100 text-slate-800'
                    }`}
                    id={`city-select-${city.pincode}`}
                  >
                    <div>
                      <div className="font-bold text-xs flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-slate-400" />
                        <span>{city.city} ({city.pincode})</span>
                      </div>
                      <div className="text-[10px] text-slate-500 ml-5 font-normal">
                        {city.state} • {city.deliveryTime}
                      </div>
                    </div>

                    {isSelected && (
                      <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center">
                        <Check className="w-3 h-3" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Express Store Locator Callout */}
          <div className="mt-5 p-3 rounded-2xl bg-amber-50 border border-amber-200/70 text-xs text-amber-900 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Navigation className="w-4 h-4 text-orange-600 shrink-0" />
              <span>Prefer in-store pickup? <strong>250+ outlets open today</strong></span>
            </div>
            <button
              onClick={() => {
                addToast('Store Locator', 'Locating closest Balaji Mobiles outlet near you...', 'info');
                setLocationModalOpen(false);
              }}
              className="text-[11px] font-bold text-orange-700 hover:underline shrink-0 ml-2"
            >
              Locate Store
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
