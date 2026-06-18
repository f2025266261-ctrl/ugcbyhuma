const WHATSAPP_CHAT_URL = 'https://wa.me/923126721731?text=Hi%20Huma%2C%20I%27d%20like%20to%20collaborate.';

export default function Hero() {
  return (
    <section className="bg-[#FFF5F5] px-6 py-8 sm:py-10 md:px-16 md:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 items-stretch">
        <div className="relative min-w-0 overflow-hidden rounded-2xl border border-[#FFB6C1]/30 bg-white shadow-sm aspect-[4/5] md:aspect-auto md:h-[500px] order-1">
          <img
            src="/hero-huma.jpg"
            alt="Huma portfolio portrait"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        <div className="min-w-0 flex flex-col justify-center gap-4 sm:gap-5 md:gap-6 self-center py-1 sm:py-2 md:py-0 order-2">
          <div className="hidden md:inline-flex w-fit items-center gap-2 rounded-full border border-[#FFB6C1]/40 bg-[#FFD1DC]/60 px-3 py-1.5 sm:px-4">
            <span className="h-2 w-2 rounded-full bg-[#FF85A2] animate-pulse"></span>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-[#4A2831]">Trusted by 100+ Brands</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-[#4A2831]">
            ugcbyhuma
          </h1>

          <p className="max-w-xl text-sm leading-relaxed text-[#6B444E] sm:text-base md:text-lg">
            Crafting high-converting, organic, and faceless aesthetic content that stops the scroll. Turning casual viewers into loyal buyers through authentic digital storytelling.
          </p>

          <div className="hidden md:block pt-1 sm:pt-2 md:pt-4">
            <a
              href={WHATSAPP_CHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#FF85A2] px-5 py-3 text-sm font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FF6B8B] sm:px-8 sm:py-3.5"
            >
              Let's Collaborate
            </a>
          </div>

          <div className="md:hidden mt-2 flex flex-col gap-4">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#FFB6C1]/40 bg-[#FFD1DC]/60 px-3 py-1.5 sm:px-4">
              <span className="h-2 w-2 rounded-full bg-[#FF85A2] animate-pulse"></span>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-[#4A2831]">Worked with 100+ brands</span>
            </div>

            <a
              href={WHATSAPP_CHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#FF85A2] px-5 py-3 text-sm font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FF6B8B]"
            >
              Let's Collaborate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
