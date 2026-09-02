'use client';

import React, { useState } from 'react';
import { X, MapPin, Search, Check, Zap, Building, Navigation, LocateFixed, Loader2 } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { CITIES_LIST } from '@/lib/data';

export default function LocationModal() {
  const {
    isLocationModalOpen,
    setLocationModalOpen,
    selectedCity,
    setSelectedCity,
    detectLocation,
    isDetectingLocation,
    addToast
  } = useCart();
  const [customPincode, setCustomPincode] = useState('');
  const [searchFilter, setSearchFilter] = useState('');

  if (!isLocationModalOpen) return null;

  const handlePincodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const pin = customPincode.trim();
    if (pin.length === 6 && /^\d+$/.test(pin)) {
      // Check if it's a known metro or standard Indian pincode
      const matchingCity = CITIES_LIST.find((c) => c.pincode === pin);
      if (matchingCity) {
        setSelectedCity(matchingCity);
      } else {
        // Calculate delivery SLA based on pincode zone
        const isMetro = ['560', '600', '500', '400', '110', '411'].some((prefix) => pin.startsWith(prefix));
        const deliveryTime = isMetro ? '2-Hour Delivery' : '48 Hours';
        
        setSelectedCity({
          city: `Pincode ${pin}`,
          pincode: pin,
          state: 'India',
          deliveryTime,
          isAutoDetected: false
        });
      }
      setLocationModalOpen(false);
      setCustomPincode('');
    } else {
      addToast('Invalid Pincode', 'Please enter a valid 6-digit Indian postal pincode (e.g. 490022 or 560001).', 'error');
    }
  };

  const handleDetectGPS = async () => {
    await detectLocation(false);
    setLocationModalOpen(false);
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
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-xs transition-opacity animate-in fade-in"
      />

      <div className="min-h-full flex items-center justify-center p-4 text-center">
        <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 text-left overflow-hidden animate-in zoom-in-95 duration-200">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center space-x-2.5">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Select Delivery Pincode</h3>
                <p className="text-xs text-slate-500">Auto-detect from your device or enter 6-digit PIN</p>
              </div>
            </div>

            <button
              onClick={() => setLocationModalOpen(false)}
              className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 cursor-pointer"
              id="location-modal-close-btn"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Current Active Location Display */}
          <div className="mt-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Currently Selected</div>
              <div className="text-sm font-black text-slate-900 flex items-center gap-1.5 mt-0.5">
                <span>{selectedCity.pincode}</span>
                <span className="text-slate-400">•</span>
                <span className="font-semibold text-slate-700">{selectedCity.city}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[11px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full inline-flex items-center gap-1">
                <Zap className="w-3 h-3 text-amber-500" />
                {selectedCity.deliveryTime}
              </div>
            </div>
          </div>

          {/* Detect Device GPS Button */}
          <button
            onClick={handleDetectGPS}
            disabled={isDetectingLocation}
            className="mt-4 w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.99] disabled:opacity-75"
            id="location-detect-gps-btn"
          >
            {isDetectingLocation ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Extracting Device Pincode...</span>
              </>
            ) : (
              <>
                <LocateFixed className="w-4 h-4" />
                <span>Use Current Device Location (Auto Pincode)</span>
              </>
            )}
          </button>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-slate-400 font-bold tracking-wider">OR ENTER MANUALLY</span>
            </div>
          </div>

          {/* Custom Pincode Input Form */}
          <form onSubmit={handlePincodeSubmit}>
            <div className="flex space-x-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  maxLength={6}
                  value={customPincode}
                  onChange={(e) => setCustomPincode(e.target.value.replace(/\D/g, ''))}
                  placeholder="Enter 6-digit Pincode (e.g. 490022)"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  id="location-pincode-input"
                />
              </div>
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#003399] hover:bg-[#002266] text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                id="location-check-pin-btn"
              >
                Apply PIN
              </button>
            </div>
          </form>

          {/* Quick Popular Cities */}
          <div className="mt-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Popular Cities & Pincodes
              </span>
              <span className="text-[11px] text-slate-500">Fast Dispatch</span>
            </div>

            {/* City Search Filter */}
            <div className="relative mb-2.5">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Filter city or pincode..."
                className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 text-slate-800 focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
            </div>

            {/* Cities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1">
              {filteredCities.map((city) => {
                const isSelected = selectedCity.pincode === city.pincode;

                return (
                  <button
                    key={city.pincode}
                    onClick={() => {
                      setSelectedCity({
                        ...city,
                        isAutoDetected: false
                      });
                      setLocationModalOpen(false);
                    }}
                    className={`p-2 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-orange-50 border-orange-500 text-orange-950 ring-1 ring-orange-500/30'
                        : 'bg-slate-50 border-slate-200/80 hover:bg-slate-100 text-slate-800'
                    }`}
                    id={`city-select-${city.pincode}`}
                  >
                    <div>
                      <div className="font-bold text-xs flex items-center gap-1">
                        <Building className="w-3.5 h-3.5 text-slate-400" />
                        <span>{city.city} ({city.pincode})</span>
                      </div>
                      <div className="text-[10px] text-slate-500 ml-4 font-normal">
                        {city.state} • {city.deliveryTime}
                      </div>
                    </div>

                    {isSelected && (
                      <div className="w-4 h-4 rounded-full bg-orange-600 text-white flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Express Store Locator Callout */}
          <div className="mt-4 p-3 rounded-2xl bg-amber-50 border border-amber-200/70 text-xs text-amber-900 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Navigation className="w-4 h-4 text-orange-600 shrink-0" />
              <span>Need it today? <strong>250+ Shree Balaji stores open now</strong></span>
            </div>
            <button
              onClick={() => {
                addToast('Store Locator', 'Locating closest Shree Balaji Mobiles outlet near you...', 'info');
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
