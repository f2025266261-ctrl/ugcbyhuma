export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#FFEBF0]/40 px-6 md:px-16 rounded-t-[3rem]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#4A2831] mb-4">Content Offerings</h2>
          <p className="text-[#6B444E] max-w-lg mx-auto">Custom content formats built to match your brand's unique customer acquisition strategy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#FFB6C1]/20">
            <h3 className="text-lg font-bold text-[#4A2831] mb-2">Reels & TikTok Creation</h3>
            <p className="text-sm text-[#6B444E]">Short-form vertical video sequences complete with aesthetic trend editing, custom voiceovers, and targeted calls to action.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#FFB6C1]/20">
            <h3 className="text-lg font-bold text-[#4A2831] mb-2">High-Conversion Stories</h3>
            <p className="text-sm text-[#6B444E]">Interactive stories configured for immediate flash sales, featuring structured text overlays, native polls, and direct links.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#FFB6C1]/20">
            <h3 className="text-lg font-bold text-[#4A2831] mb-2">Premium Product Shoots</h3>
            <p className="text-sm text-[#6B444E]">Stunning, high-end commercial imagery focusing purely on product close-ups, usage textures, and luxury-tier flat lays.</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#FFB6C1]/20">
            <h3 className="text-lg font-bold text-[#4A2831] mb-2">Faceless Lifestyle Aesthetics</h3>
            <p className="text-sm text-[#6B444E]">Cinematic, ambient, voiceover-driven video captures that seamlessly integrate products directly into daily routines.</p>
          </div>
        </div>

        {/* Affiliate Badges Block */}
        <div className="mt-16 bg-white/80 backdrop-blur-sm border border-[#FFB6C1]/30 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 max-w-3xl mx-auto">
          <div>
            <h4 className="text-lg font-bold text-[#4A2831]">Official Network Affiliations</h4>
            <p className="text-sm text-[#6B444E]">Streamlined collaboration setups through established creator networks.</p>
          </div>
          <div className="flex gap-4">
            <span className="px-6 py-2 bg-[#FFE3E8] border border-[#FFB6C1]/40 rounded-full text-xs font-bold uppercase text-[#4A2831] tracking-wider">
              BNB Creator Program
            </span>
            <span className="px-6 py-2 bg-[#FFE3E8] border border-[#FFB6C1]/40 rounded-full text-xs font-bold uppercase text-[#4A2831] tracking-wider">
              Daraz Affiliate
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
