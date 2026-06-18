export default function WhyMe() {
  return (
    <section className="py-24 bg-[#FFF5F5] px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-[#4A2831] mb-12 text-center">Why Partner With Me?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/60 p-8 rounded-2xl border border-[#FFB6C1]/30 shadow-sm">
            <div className="text-3xl mb-4">📈</div>
            <h3 className="text-xl font-bold text-[#4A2831] mb-2">High-Engagement Frameworks</h3>
            <p className="text-[#6B444E]">I specialize in hyper-engaging hooks designed specifically to hook viewers in the first 3 seconds, drastically improving retention rates.</p>
          </div>

          <div className="bg-white/60 p-8 rounded-2xl border border-[#FFB6C1]/30 shadow-sm">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-[#4A2831] mb-2">Sales-Optimized Stories</h3>
            <p className="text-[#6B444E]">My story frameworks don’t just gain views—they are strategically engineered to drive active clicks, product sign-ups, and immediate conversions.</p>
          </div>

          <div className="bg-white/60 p-8 rounded-2xl border border-[#FFB6C1]/30 shadow-sm">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-[#4A2831] mb-2">Flawless Faceless Production</h3>
            <p className="text-[#6B444E]">Using high-end aesthetics, premium lighting, and dynamic editing, I craft narrative-driven content without requiring an on-camera presence.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
