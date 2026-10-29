import { useState, useRef, useTransition } from 'react';
import { Copy, Check, Search, X, Tag } from 'lucide-react';
import { DISCOUNT_CODES } from '../data/discountCodes';

export default function DiscountCodes() {
  const [copiedCard, setCopiedCard] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [, startTransition] = useTransition();

  const resetTimerRef = useRef(null);
  const toastTimerRef = useRef(null);

  const handleSearchChange = (e) => {
    const val = e.target.value;
    startTransition(() => {
      setSearchQuery(val);
    });
  };

  const handleCopy = async (code, handle) => {
    let success = false;

    // Primary: Modern Clipboard API
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(code);
        success = true;
      } catch (err) {
        console.warn('Clipboard API failed, trying fallback...', err);
      }
    }

    // Fallback: document.execCommand for restricted or legacy environments
    if (!success) {
      try {
        const textarea = document.createElement('textarea');
        textarea.value = code;
        textarea.style.position = 'fixed';
        textarea.style.top = '0';
        textarea.style.left = '0';
        textarea.style.width = '2em';
        textarea.style.height = '2em';
        textarea.style.padding = '0';
        textarea.style.border = 'none';
        textarea.style.outline = 'none';
        textarea.style.boxShadow = 'none';
        textarea.style.background = 'transparent';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);
        success = document.execCommand('copy');
        document.body.removeChild(textarea);
      } catch (err) {
        console.error('Fallback clipboard copy failed:', err);
      }
    }

    if (success) {
      setCopiedCard(handle);
      setShowToast(true);

      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);

      resetTimerRef.current = setTimeout(() => {
        setCopiedCard(null);
      }, 2000);

      toastTimerRef.current = setTimeout(() => {
        setShowToast(false);
      }, 2200);
    }
  };

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredCodes = DISCOUNT_CODES.filter((item) => {
    if (!normalizedQuery) return true;
    return (
      item.brand.toLowerCase().includes(normalizedQuery) ||
      item.handle.toLowerCase().includes(normalizedQuery) ||
      item.code.toLowerCase().includes(normalizedQuery)
    );
  });

  return (
    <section
      id="discount-codes"
      className="scroll-mt-20 md:scroll-mt-24 py-20 md:py-24 bg-[#FFF5F5] px-6 md:px-16"
      aria-labelledby="discount-codes-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#FF85A2] uppercase mb-3 inline-block">
            EXCLUSIVE OFFERS
          </span>
          <h2
            id="discount-codes-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-[#4A2831]"
          >
            Discount Codes
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6B444E] leading-relaxed">
            Use my codes at checkout to save on your favourite skincare and beauty brands. Tap a code to copy it.
          </p>

          {/* Search / Filter Input */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="relative flex items-center">
              <Search
                className="absolute left-4 w-4 h-4 text-[#9A6B75] pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search brand or code..."
                aria-label="Search brand or discount code"
                className="w-full h-11 sm:h-12 pl-11 pr-10 text-base rounded-full border border-[#FFB6C1]/35 bg-white/80 shadow-sm placeholder:text-[#A37C88] text-[#4A2831] outline-none transition-all duration-300 focus:border-[#FF85A2] focus:bg-white focus:ring-4 focus:ring-[#FF85A2]/15"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 p-1 text-[#9A6B75] hover:text-[#4A2831] rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF85A2]"
                  aria-label="Clear search query"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {searchQuery && (
              <p className="text-xs text-[#6B444E] mt-2.5">
                Showing {filteredCodes.length} {filteredCodes.length === 1 ? 'code' : 'codes'} for &ldquo;{searchQuery}&rdquo;
              </p>
            )}
          </div>
        </div>

        {/* Empty Search State */}
        {filteredCodes.length === 0 && (
          <div className="text-center py-12 px-6 bg-white/70 rounded-2xl border border-[#FFB6C1]/25 max-w-md mx-auto shadow-sm">
            <Tag className="w-8 h-8 text-[#FF85A2] mx-auto mb-3 opacity-80" aria-hidden="true" />
            <h3 className="text-base font-bold text-[#4A2831]">No codes found</h3>
            <p className="text-sm text-[#6B444E] mt-1">
              We couldn&apos;t find any discount codes matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-semibold bg-[#FFE3E8] text-[#FF6B8B] hover:bg-[#FFD1DC] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF85A2]"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCodes.map((item) => {
            const isCopied = copiedCard === item.handle;

            return (
              <div
                key={item.handle}
                className="bg-white p-6 rounded-2xl shadow-sm border border-[#FFB6C1]/20 flex flex-col justify-between gap-5 transition-all duration-300 hover:shadow-md hover:border-[#FF85A2]/35 motion-safe:hover:-translate-y-0.5"
              >
                {/* Header: Brand Handle & CODE pill */}
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-[#4A2831] truncate">
                      {item.handle}
                    </h3>
                    <p className="text-xs text-[#6B444E] mt-0.5 capitalize truncate">
                      {item.brand.replace(/\.pk$|_/g, ' ').trim()}
                    </p>
                  </div>
                  <span className="shrink-0 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#FFE3E8] text-[#FF6B8B] rounded-full border border-[#FFB6C1]/40">
                    CODE
                  </span>
                </div>

                {/* Dashed Coupon Box (Clickable to copy) */}
                <button
                  type="button"
                  onClick={() => handleCopy(item.code, item.handle)}
                  className="w-full text-left rounded-xl border-2 border-dashed border-[#FFB6C1]/60 bg-[#FFF5F5] hover:bg-[#FFEBF0]/60 hover:border-[#FF85A2] p-3.5 flex items-center justify-between gap-3 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF85A2] group"
                  aria-label={`Copy code ${item.code} for ${item.handle}`}
                  title="Tap to copy code"
                >
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9A6B75]">
                      Tap to copy
                    </span>
                    <span className="font-mono text-base sm:text-lg font-bold tracking-wider text-[#4A2831] select-all truncate">
                      {item.code}
                    </span>
                  </div>

                  <div className="shrink-0 flex items-center gap-1.5 text-xs font-semibold">
                    {isCopied ? (
                      <span className="inline-flex items-center gap-1 text-emerald-600 font-bold">
                        <Check className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                        <span className="hidden sm:inline">Copied</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[#9A6B75] group-hover:text-[#FF85A2] transition-colors">
                        <Copy className="w-4 h-4" aria-hidden="true" />
                      </span>
                    )}
                  </div>
                </button>

                {/* Coral-Pink Copy Button */}
                <button
                  type="button"
                  onClick={() => handleCopy(item.code, item.handle)}
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold shadow-sm transition-all duration-300 min-h-[44px] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF85A2] focus-visible:ring-offset-2 active:scale-[0.98] ${
                    isCopied
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                      : 'bg-[#FF85A2] text-white hover:bg-[#FF6B8B] hover:shadow-md'
                  }`}
                  aria-label={isCopied ? `Copied ${item.code}` : `Copy code ${item.code}`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4" aria-hidden="true" />
                      <span>Copied ✓</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Centered Toast Notification */}
      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[1100] pointer-events-none transition-all duration-300 ease-out ${
          showToast ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-95'
        }`}
      >
        <div className="bg-[#4A2831] text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-xl border border-[#FFB6C1]/30 flex items-center gap-2.5">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white text-xs font-bold">
            ✓
          </span>
          <span>Code copied!</span>
        </div>
      </div>
    </section>
  );
}
