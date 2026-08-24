'use client';

import React from 'react';
import { CheckCircle2, Info, AlertCircle, X } from 'lucide-react';
import { useCart } from '@/lib/cart-context';

export default function ToastContainer() {
  const { toasts, removeToast } = useCart();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col space-y-2.5 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto bg-slate-900/95 text-white p-3.5 rounded-2xl shadow-2xl border border-slate-700/80 flex items-start space-x-3 backdrop-blur-md animate-in slide-in-from-bottom-5 duration-200"
        >
          {toast.type === 'error' ? (
            <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
          ) : toast.type === 'info' ? (
            <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
          ) : (
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          )}

          <div className="flex-1 min-w-0">
            <h5 className="font-bold text-xs sm:text-sm text-white leading-tight">{toast.title}</h5>
            {toast.description && (
              <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">{toast.description}</p>
            )}
          </div>

          <button
            onClick={() => removeToast(toast.id)}
            className="text-slate-400 hover:text-white p-0.5 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
