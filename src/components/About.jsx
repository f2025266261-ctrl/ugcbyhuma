import { Eye, TrendingUp, RefreshCw, Film } from 'lucide-react';

export default function About() {
  const stats = [
    {
      id: 1,
      icon: <Eye className="w-5 h-5 text-[#FF85A2]" />,
      value: "10M+",
      label: "Video Views Generated",
      desc: "Capturing interest within the first 3 seconds."
    },
    {
      id: 2,
      icon: <TrendingUp className="w-5 h-5 text-[#FF85A2]" />,
      value: "4.8%",
      label: "Avg. Engagement Rate",
      desc: "Industry average for TikTok/Reels is only 1.5%."
    },
    {
      id: 3,
      icon: <Film className="w-5 h-5 text-[#FF85A2]" />,
      value: "250+",
      label: "Deliverables Completed",
      desc: "High-resolution organic vertical videos."
    },
    {
      id: 4,
      icon: <RefreshCw className="w-5 h-5 text-[#FF85A2]" />,
      value: "92%",
      label: "Client Retention Rate",
      desc: "Brands returning for monthly retainers."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#FFF5F5] px-6 md:px-16 max-w-7xl mx-auto">
      {/* Title Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-sm font-bold tracking-widest text-[#FF85A2] uppercase mb-3">Why Work With Me</h2>
        <p className="text-3xl md:text-5xl font-bold font-serif text-[#4A2831]">
          Aesthetic Storytelling That Sells
        </p>
        <p className="mt-4 text-base text-[#6B444E] leading-relaxed">
          I don't just record video; I analyze target demographics, study trending hook formats, and design custom scripts that feel organic while driving conversions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Big Glassmorphic Intro */}
        <div className="lg:col-span-5 glass-panel p-8 md:p-10 rounded-2xl flex flex-col justify-between border border-[#FFB6C1]/30">
          <div>
            <h3 className="text-2xl font-bold font-serif text-[#4A2831] mb-4">
              My Philosophy
            </h3>
            <p className="text-[#6B444E] leading-relaxed mb-6 text-sm md:text-base">
              The modern consumer scroll past traditional, high-production advertisements. They seek recommendation from a trusted friend. 
            </p>
            <p className="text-[#6B444E] leading-relaxed mb-6 text-sm md:text-base">
              By focusing on <strong>faceless aesthetic video production</strong>, product closeups, satisfying ASMR, and textured overlays, I craft videos that integrate seamlessly into a user's organic social feed.
            </p>
          </div>
          
          <div className="border-t border-[#FFB6C1]/20 pt-6 mt-6">
            <h4 className="text-sm font-semibold text-[#4A2831] uppercase tracking-wider mb-3">Niche Focus Areas</h4>
            <div className="flex flex-wrap gap-2">
              {['Beauty & Skincare', 'Minimalist Fashion', 'Lifestyle Aesthetics', 'ASMR Unboxings', 'SaaS & Apps'].map((niche) => (
                <span 
                  key={niche} 
                  className="text-xs bg-[#FFD1DC]/40 text-[#4A2831] font-medium px-3.5 py-1.5 rounded-full border border-[#FFB6C1]/20"
                >
                  {niche}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Stats Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="glass-panel glass-panel-hover p-6 md:p-8 rounded-2xl flex flex-col justify-between border border-[#FFB6C1]/30"
            >
              <div className="bg-white/60 p-2.5 rounded-xl w-fit border border-[#FFB6C1]/20 shadow-sm mb-4">
                {stat.icon}
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-extrabold text-[#4A2831] tracking-tight">{stat.value}</p>
                <p className="text-base font-bold text-[#4A2831] mt-1.5">{stat.label}</p>
                <p className="text-xs text-[#6B444E] mt-1 leading-relaxed">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
