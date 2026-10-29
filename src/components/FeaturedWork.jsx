import { useState, useRef, useEffect, useCallback } from 'react';
import { Play, ChevronLeft, ChevronRight, X, ArrowUpRight, Loader2 } from 'lucide-react';
import { FEATURED_WORK, normalizeReelItem } from '../data/featuredWork';

const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/huma._.arif_';

function InstagramIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect x="4.5" y="4.5" width="15" height="15" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.1" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16.7" cy="7.3" r="1.05" fill="currentColor" />
    </svg>
  );
}

function ReelCarouselRow({ category, onOpenReel }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(maxScrollLeft - el.scrollLeft > 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByOneCard = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const firstCard = el.querySelector('button');
    const cardWidth = firstCard ? firstCard.offsetWidth : 260;
    const gap = 16; // gap-4 = 16px
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  const normalizedReels = category.reels.map(normalizeReelItem);
  const total = normalizedReels.length;

  return (
    <div className="space-y-5">
      {/* Category Header & Carousel Arrow Controls */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-xl md:text-2xl font-bold text-[#4A2831] tracking-tight">
            {category.title}
          </h3>
          <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-[#FFE3E8] text-[#FF6B8B] rounded-full border border-[#FFB6C1]/40">
            {total} {total === 1 ? 'REEL' : 'REELS'}
          </span>
        </div>

        {/* Tablet & Desktop Prev/Next Circular Buttons */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollByOneCard(-1)}
            disabled={!canScrollLeft}
            aria-label={`Previous reels in ${category.title}`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#FFB6C1]/40 bg-white text-[#4A2831] shadow-sm transition-all duration-200 hover:border-[#FF85A2] hover:bg-[#FF85A2] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF85A2] focus-visible:ring-offset-2 disabled:opacity-35 disabled:pointer-events-none cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollByOneCard(1)}
            disabled={!canScrollRight}
            aria-label={`Next reels in ${category.title}`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#FFB6C1]/40 bg-white text-[#4A2831] shadow-sm transition-all duration-200 hover:border-[#FF85A2] hover:bg-[#FF85A2] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF85A2] focus-visible:ring-offset-2 disabled:opacity-35 disabled:pointer-events-none cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll-Snap Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth motion-reduce:scroll-auto pb-2 [-webkit-overflow-scrolling:touch]"
      >
        {normalizedReels.map((reel, idx) => {
          const reelNumber = String(idx + 1).padStart(2, '0');

          return (
            <button
              key={reel.id}
              type="button"
              onClick={(e) =>
                onOpenReel(
                  {
                    ...reel,
                    categoryTitle: category.title,
                    index: idx,
                    total,
                  },
                  e.currentTarget
                )
              }
              aria-label={`Play reel ${idx + 1} of ${total} in ${category.title}`}
              className="group relative shrink-0 snap-start w-[72vw] max-w-[260px] sm:w-[220px] sm:max-w-none md:w-[calc((100%-2rem)/3)] lg:w-[calc((100%-3rem)/4)] aspect-[9/16] rounded-2xl bg-white border border-[#FFB6C1]/30 shadow-sm hover:shadow-md hover:border-[#FF85A2]/50 overflow-hidden transition-all duration-300 motion-safe:hover:-translate-y-1 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF85A2] focus-visible:ring-offset-2"
            >
              {/* Thumbnail or Branded Blush-to-Pink Placeholder */}
              {reel.thumbnail ? (
                <>
                  <img
                    src={reel.thumbnail}
                    alt={`${category.title} reel ${reelNumber}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#4A2831]/65 via-transparent to-[#4A2831]/20"
                    aria-hidden="true"
                  />
                </>
              ) : (
                <div
                  className="absolute inset-0 bg-gradient-to-br from-[#FFF5F5] via-[#FFEBF0] to-[#FFD1DC]/80 flex items-center justify-center"
                  aria-hidden="true"
                >
                  {/* Soft decorative concentric rings */}
                  <div className="h-44 w-44 rounded-full border border-[#FFB6C1]/35 bg-white/30 transition-transform duration-500 motion-safe:group-hover:scale-110" />
                  <div className="absolute h-28 w-28 rounded-full border border-[#FF85A2]/25 bg-white/45" />
                </div>
              )}

              {/* Card Overlay Content */}
              <div className="relative z-10 flex h-full w-full flex-col justify-between p-4">
                {/* Top Row: Reel Number Pill & Instagram Icon */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-[#FFB6C1]/40 text-[11px] font-bold uppercase tracking-wider text-[#4A2831] shadow-xs">
                    Reel {reelNumber}
                  </span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm border border-[#FFB6C1]/40 text-[#FF85A2] shadow-xs transition-colors duration-200 group-hover:bg-[#FF85A2] group-hover:text-white">
                    <InstagramIcon className="h-4 w-4" />
                  </span>
                </div>

                {/* Center Coral-Pink Circular Play Button */}
                <div className="my-auto flex flex-col items-center justify-center">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#FF85A2] text-white shadow-md transition-all duration-300 group-hover:bg-[#FF6B8B] motion-safe:group-hover:scale-110">
                    <Play className="h-6 w-6 fill-current ml-0.5" aria-hidden="true" />
                  </span>
                </div>

                {/* Bottom Row: Category Label & Watch ↗ */}
                <div className="flex items-center justify-between gap-2 rounded-xl bg-white/85 backdrop-blur-sm border border-[#FFB6C1]/30 px-3.5 py-2.5 shadow-xs">
                  <span className="text-xs font-medium text-[#6B444E] truncate">
                    {category.title}
                  </span>
                  <span className="shrink-0 inline-flex items-center gap-0.5 text-xs font-bold text-[#4A2831] group-hover:text-[#FF85A2] transition-colors">
                    Watch <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ReelModal({ activeReel, onClose }) {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button when modal opens
    if (closeBtnRef.current) {
      closeBtnRef.current.focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll(
          'button, [href], iframe, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const reelNumber = String(activeReel.index + 1).padStart(2, '0');

  return (
    <div
      className="fixed inset-0 z-[1200] flex items-end sm:items-center justify-center bg-[#4A2831]/65 backdrop-blur-sm p-0 sm:p-4 transition-opacity duration-200 motion-reduce:transition-none"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`${activeReel.categoryTitle} — Reel ${reelNumber} by Huma Arif`}
    >
      <div
        ref={modalRef}
        className="relative flex flex-col w-full sm:w-[430px] max-w-full h-[90vh] sm:h-[88vh] max-h-[820px] rounded-t-3xl sm:rounded-3xl bg-white border border-[#FFB6C1]/40 shadow-2xl overflow-hidden"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between gap-3 px-5 py-3.5 border-b border-[#FFB6C1]/25 bg-[#FFF5F5]">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFE3E8] text-[#FF6B8B]">
              <InstagramIcon className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-wider text-[#FF85A2] truncate">
                {activeReel.categoryTitle}
              </p>
              <p className="text-sm font-bold text-[#4A2831] truncate">
                Reel {reelNumber} of {String(activeReel.total).padStart(2, '0')}
              </p>
            </div>
          </div>

          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Close video player"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#FFB6C1]/35 bg-white text-[#4A2831] hover:bg-[#FF85A2] hover:text-white hover:border-[#FF85A2] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF85A2]"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Single Iframe Container */}
        <div className="relative flex-1 w-full bg-[#FFF5F5] overflow-hidden">
          {!iframeLoaded && (
            <div
              className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-[#FFF5F5] text-[#6B444E]"
              role="status"
              aria-live="polite"
            >
              <Loader2 className="h-8 w-8 animate-spin text-[#FF85A2]" aria-hidden="true" />
              <span className="text-sm font-medium">Loading reel from Instagram...</span>
            </div>
          )}

          <iframe
            key={activeReel.id}
            src={activeReel.embedUrl}
            title={`Instagram reel by Huma Arif — ${activeReel.categoryTitle} Reel ${reelNumber}`}
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            onLoad={() => setIframeLoaded(true)}
          />
        </div>

        {/* Modal Footer with Always-Visible Permalink Fallback */}
        <div className="px-5 py-3.5 border-t border-[#FFB6C1]/25 bg-white flex items-center justify-between gap-3">
          <span className="text-xs text-[#6B444E]">
            Having trouble viewing?
          </span>
          <a
            href={activeReel.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#FF85A2] hover:bg-[#FF6B8B] text-white text-xs font-semibold px-4 py-2.5 min-h-[44px] shadow-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF85A2] focus-visible:ring-offset-2"
          >
            <span>Open on Instagram</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedWork() {
  const [activeReel, setActiveReel] = useState(null);
  const lastTriggerRef = useRef(null);

  const handleOpenReel = useCallback((reelData, triggerEl) => {
    lastTriggerRef.current = triggerEl || null;
    setActiveReel(reelData);
  }, []);

  const handleCloseReel = useCallback(() => {
    setActiveReel(null);
    if (lastTriggerRef.current && typeof lastTriggerRef.current.focus === 'function') {
      const btn = lastTriggerRef.current;
      setTimeout(() => {
        btn.focus();
      }, 0);
    }
  }, []);

  return (
    <section
      id="featured-work"
      className="scroll-mt-20 md:scroll-mt-24 py-20 md:py-24 bg-[#FFF5F5] px-6 md:px-16 border-t border-[#FFB6C1]/20"
      aria-labelledby="featured-work-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#FF85A2] uppercase mb-3 inline-block">
            FEATURED WORK
          </span>
          <h2
            id="featured-work-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-[#4A2831]"
          >
            Content That Gets Results
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6B444E] leading-relaxed">
            A selection of my best-performing reels. Tap any video to watch it.
          </p>
        </div>

        {/* 4 Category Carousels */}
        <div className="space-y-14 md:space-y-16">
          {FEATURED_WORK.map((category) => (
            <ReelCarouselRow
              key={category.title}
              category={category}
              onOpenReel={handleOpenReel}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 md:mt-16 text-center">
          <a
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF85A2] hover:bg-[#FF6B8B] text-white text-sm font-semibold px-7 py-3.5 min-h-[44px] shadow-md transition-all duration-300 motion-safe:hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF85A2] focus-visible:ring-offset-2"
          >
            <span>See more on Instagram</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Single On-Demand Lightbox Modal */}
      {activeReel && (
        <ReelModal activeReel={activeReel} onClose={handleCloseReel} />
      )}
    </section>
  );
}

