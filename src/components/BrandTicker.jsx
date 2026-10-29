const BRAND_ROWS = [
  // Row 1 (26 brands: 14 existing + 12 new, interleaved)
  [
    "Mad dental care", "Astore.pk", "Skin White", "Aurel derma Pakistan",
    "Revival health care", "Pyoor body essential", "Realme Pakistan", "U-veil",
    "Hair beauty skin care", "Deluxe footwear", "Accufix cosmetics", "Scents and stories",
    "Glow natural pk", "Bandb derma", "Dermasation", "Rivaaj mahal",
    "Nirvana botanics", "Beautycharms.global", "Ray by rafya", "Sadoer pk",
    "Viceroy", "Aish cosmetics", "True clean", "Nomi.booksy",
    "Zamzam natural", "Mexa.pk"
  ],

  // Row 2 (25 brands: 14 existing + 11 new, interleaved)
  [
    "Kenny", "Frakininsta", "Kleo.inc", "Sunsilk",
    "Flux (clothing brand)", "Beenish hijabs", "Golden pearl cosmetics", "Formul8",
    "Timaz.pk", "Zenimaherbs", "Drglow.pk", "Luminelle",
    "Uraan", "Aura by zoha", "Oreya Heath care", "Olivia hair Care official",
    "Orhni e zehra", "MyCompact.pk", "Charmora creates", "Tapal danedar organic slim.pk",
    "Chori wla pk", "Purelix herbal", "Abeehasglam", "Healuxe",
    "Natural and organic"
  ],

  // Row 3 (25 brands: 14 existing + 11 new, interleaved)
  [
    "Orah fragrance", "Mehak clothing store", "Guard rice and pasta", "Fiza Minahil official",
    "Christine cosmetic", "Get smile", "Rivion", "Glamris skincare",
    "Safa by Qurat", "bio aqua", "Chic charms", "Farlin cosmetics",
    "Zarif ornaments", "Cleaner.pk", "Gulayn", "Children publications",
    "Nova skin", "Furelle beauty", "Ruhi pure", "Horiza Sohail",
    "Sheen home decore", "Deciper bookstore", "Printale.pk", "Rkstore",
    "Taleem ul Quran"
  ],

  // Row 4 (26 brands: 15 existing + 11 new, interleaved)
  [
    "Ricca professional", "Olaskincarecanada", "Zylmora jewels", "Lavish glow",
    "Chamak Dubai waly", "Gooey bubbles", "Danzure.pk", "Meclay London",
    "Eloriagermany", "Root and leaf", "Sintra jewels", "Yh archives",
    "Fruitybites", "Global Mart by usba", "Uptown la", "Maneessentia",
    "Ideal paper product", "Julystar", "Essencelumora", "Ahmad foods",
    "Farmaish bazaar", "Juus", "Jackie cosmetics", "Olim natural",
    "Safrin skin care", "Ezioncom"
  ]
];

const ROW_CONFIG = [
  { direction: 'left', duration: '74s' },
  { direction: 'right', duration: '64s' },
  { direction: 'left', duration: '78s' },
  { direction: 'right', duration: '60s' },
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
              className="inline-block bg-white/40 backdrop-blur-md border border-white/60 text-[#4A2831] px-6 py-3 rounded-2xl font-medium shadow-sm transition-all duration-300 hover:scale-105 whitespace-nowrap"
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
              className="inline-block bg-white/40 backdrop-blur-md border border-white/60 text-[#4A2831] px-6 py-3 rounded-2xl font-medium shadow-sm transition-all duration-300 hover:scale-105 whitespace-nowrap"
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
