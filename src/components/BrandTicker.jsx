const BRANDS = [
  "Mad dental care", "Skin White", "Revival health care", "Realme Pakistan", "U-veil",
  "Deluxe footwear", "Scents and stories", "Bandb derma", "Rivaaj mahal", "Beautycharms.global",
  "Sadoer pk", "Viceroy", "True clean", "Zamzam natural", "Kenny", "Kleo.inc",
  "Flux (clothing brand)", "Beenish hijabs", "Formul8", "Zenimaherbs", "Luminelle",
  "Aura by zoha", "Oreya Heath care", "Orhni e zehra", "Charmora creates", "Chori wla pk",
  "Purelix herbal", "Healuxe", "Orah fragrance", "Guard rice and pasta", "Christine cosmetic",
  "Get smile", "Glamris skincare", "bio aqua", "Farlin cosmetics", "Cleaner.pk",
  "Gulayn", "Nova skin", "Ruhi pure", "Sheen home decore", "Deciper bookstore",
  "Rkstore", "Ricca professional", "Zylmora jewels", "Lavish glow", "Gooey bubbles",
  "Meclay London", "Root and leaf", "Sintra jewels", "Fruitybites", "Uptown la",
  "Ideal paper product", "Julystar", "Ahmad foods", "Juus", "Olim natural",
  "Safrin skin care"
];

const BRAND_ROWS = [
  BRANDS.slice(0, 14),
  BRANDS.slice(14, 28),
  BRANDS.slice(28, 42),
  BRANDS.slice(42, 56),
];

const ROW_CONFIG = [
  { direction: 'left', duration: '40s' },
  { direction: 'right', duration: '36s' },
  { direction: 'left', duration: '44s' },
  { direction: 'right', duration: '32s' },
];

export default function BrandTicker() {
  const renderMarqueeRow = (brands, direction, duration) => {
    const animationClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';
    return (
      <div className="relative w-full flex overflow-x-hidden">
        {/* Track 1 */}
        <div 
          className={`${animationClass} whitespace-nowrap flex gap-4 items-center py-1 shrink-0 min-w-max`} 
          style={{ animationDuration: duration }}
        >
          {brands.map((brand, idx) => (
            <div 
              key={idx} 
              className="inline-block bg-white/40 backdrop-blur-md border border-white/60 text-[#4A2831] px-6 py-3 rounded-2xl font-medium shadow-sm transition-all duration-300 hover:scale-105"
            >
              ✨ {brand}
            </div>
          ))}
        </div>
        {/* Track 2 (Duplicate for seamless loop) */}
        <div 
          className={`${animationClass} whitespace-nowrap flex gap-4 items-center py-1 shrink-0 min-w-max`} 
          style={{ animationDuration: duration }}
          aria-hidden="true"
        >
          {brands.map((brand, idx) => (
            <div 
              key={`dup-${idx}`} 
              className="inline-block bg-white/40 backdrop-blur-md border border-white/60 text-[#4A2831] px-6 py-3 rounded-2xl font-medium shadow-sm transition-all duration-300 hover:scale-105"
            >
              ✨ {brand}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 bg-[#FFF5F5] overflow-hidden border-y border-[#FFB6C1]/20">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#6B444E]/70">Brands I Have Worked With</h2>
      </div>

      {/* Stack of Rows */}
      <div className="relative w-full flex flex-col gap-6">
        {/* Gradient Fades for Premium Finish */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FFF5F5] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FFF5F5] to-transparent z-10 pointer-events-none" />

        {BRAND_ROWS.map((row, index) => {
          const config = ROW_CONFIG[index];
          return renderMarqueeRow(row, config.direction, config.duration);
        })}
      </div>
    </section>
  );
}
