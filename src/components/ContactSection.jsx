import { ArrowUpRight, Mail, MessageCircle, Sparkles } from 'lucide-react';

function EmailIcon() {
  return (
    <Mail className="h-4 w-4" />
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <rect x="4.5" y="4.5" width="15" height="15" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.1" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16.7" cy="7.3" r="1.05" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M13 4.5c.5 2.8 2.3 4.6 5 4.9v3.1c-1.8 0-3.2-.6-4.3-1.4v4.3c0 2.7-2.2 4.8-4.9 4.8S4 18.1 4 15.4c0-2.8 2.2-5 5-5 .3 0 .6 0 .9.1v3.2c-.2-.1-.5-.1-.8-.1-1 0-1.9.8-1.9 1.8 0 1 .8 1.8 1.8 1.8 1.1 0 2-.8 2-1.9V4.5h2Z" fill="currentColor" />
      <path d="M12.9 4.5h2.2c.5 1.8 1.9 3.3 3.8 3.9v2.8c-1.8-.3-3.2-1-4.2-2V15c0 2.7-2.2 4.8-4.9 4.8-.7 0-1.4-.1-2-.4.9.9 2.1 1.4 3.5 1.4 2.7 0 4.9-2.2 4.9-4.8V4.5h-3.3Z" fill="currentColor" opacity="0.2" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M21.3 7.8c-.2-.9-.9-1.6-1.8-1.8C17.9 5.7 12 5.7 12 5.7s-5.9 0-7.5.3c-.9.2-1.6.9-1.8 1.8C2.4 9.4 2.4 12 2.4 12s0 2.6.3 4.2c.2.9.9 1.6 1.8 1.8 1.6.3 7.5.3 7.5.3s5.9 0 7.5-.3c.9-.2 1.6-.9 1.8-1.8.3-1.6.3-4.2.3-4.2s0-2.6-.3-4.2Z" fill="currentColor" />
      <path d="M10.1 15.2V8.8L15.7 12l-5.6 3.2Z" fill="#fff" />
    </svg>
  );
}

const contactLinks = [
  {
    label: 'Email',
    value: 'gsmunlockinginfo@gmail.com',
    href: 'mailto:gsmunlockinginfo@gmail.com',
    icon: <EmailIcon />,
    note: 'Fastest way to start a project brief.',
  },
  {
    label: 'WhatsApp',
    value: '03126721731',
    href: 'https://wa.me/923126721731',
    icon: <MessageCircle className="h-4 w-4" />,
    note: 'Direct message for quick availability checks.',
  },
  {
    label: 'Instagram',
    value: '@ugcbyhuma',
    href: 'https://www.instagram.com/ugcbyhuma?igsh=ZnZhMW1pYzNrNHd2',
    icon: <InstagramIcon />,
    note: 'Portfolio highlights, reels, and recent work.',
  },
  {
    label: 'TikTok',
    value: '@sahumtiktok',
    href: 'https://www.tiktok.com/@sahumtiktok?_r=1&_t=ZS-97IMH4JNm4N',
    icon: <TikTokIcon />,
    note: 'Short-form creative samples and social proof.',
  },
  {
    label: 'YouTube',
    value: '@humaarifugc',
    href: 'https://www.youtube.com/@humaarifugc',
    icon: <YouTubeIcon />,
    note: 'Long-form content and channel presence.',
  },
];

function ContactRow({ label, value, href, icon, note }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start justify-between gap-4 rounded-2xl border border-[#FFB6C1]/25 bg-white/55 px-4 py-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF85A2]/45 hover:bg-white/80 hover:shadow-[0_14px_40px_rgba(74,40,49,0.08)]"
      aria-label={`${label}: ${value}`}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#FFB6C1]/30 bg-[#FFF5F5] text-[#FF85A2] transition-colors duration-300 group-hover:bg-[#FF85A2] group-hover:text-white [&_svg]:h-4 [&_svg]:w-4">
          {icon}
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9A6B75]">{label}</p>
          <p className="mt-1 text-base font-semibold text-[#4A2831] transition-colors duration-300 group-hover:text-[#FF85A2]">
            {value}
          </p>
          <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-[#6B444E]">{note}</p>
        </div>
      </div>

      <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#FFB6C1]/25 text-[#9A6B75] transition-all duration-300 group-hover:border-[#FF85A2]/40 group-hover:bg-[#FF85A2] group-hover:text-white">
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </a>
  );
}

function buildMailtoUrl({ fullName, companyName, emailAddress, projectBrief }) {
  const subject = encodeURIComponent(`Proposal Request from ${fullName || 'Website Visitor'}`);
  const body = encodeURIComponent(
    [
      `Full Name: ${fullName || '-'}`,
      `Brand / Company Name: ${companyName || '-'}`,
      `Email Address: ${emailAddress || '-'}`,
      '',
      'Project Brief / Message:',
      projectBrief || '-',
    ].join('\n')
  );

  return `mailto:gsmunlockinginfo@gmail.com?subject=${subject}&body=${body}`;
}

export default function ContactSection() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const mailtoUrl = buildMailtoUrl({
      fullName: String(formData.get('fullName') || '').trim(),
      companyName: String(formData.get('companyName') || '').trim(),
      emailAddress: String(formData.get('emailAddress') || '').trim(),
      projectBrief: String(formData.get('projectBrief') || '').trim(),
    });

    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="bg-[#FFF5F5] px-6 pb-24 pt-8 md:px-16 md:pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2.25rem] border border-[#FFB6C1]/30 bg-white/70 shadow-[0_24px_80px_rgba(74,40,49,0.08)] backdrop-blur-xl">
          <div className="grid gap-0 lg:grid-cols-12">
            <div className="border-b border-[#FFB6C1]/20 px-6 py-10 sm:px-8 md:px-10 md:py-12 lg:col-span-7 lg:border-b-0 lg:border-r">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#FFB6C1]/30 bg-[#FFD8E0]/50 px-4 py-1.5">
                <Sparkles className="h-4 w-4 text-[#FF85A2]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#4A2831]">Contact Info</span>
              </div>

              <div className="mt-6 max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#FF85A2]">Next steps</p>
                <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#4A2831] md:text-5xl">
                  The next steps—Let&apos;s work together!
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-[#6B444E] md:text-lg">
                  Reach out through your preferred channel and I’ll help turn your brief into high-converting UGC, content strategy, or a premium launch campaign.
                </p>
              </div>

              <div className="mt-8 grid gap-3">
                {contactLinks.map((link) => (
                  <ContactRow key={link.label} {...link} />
                ))}
              </div>
            </div>

            <div className="px-6 py-10 sm:px-8 md:px-10 md:py-12 lg:col-span-5">
              <div className="flex h-full flex-col rounded-[2rem] border border-dashed border-[#FFB6C1]/45 bg-gradient-to-br from-[#FFF3F6] via-white to-[#FFE3E8] p-5 md:p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#9A6B75]">Visual framing</p>
                    <h3 className="mt-2 text-xl font-semibold text-[#4A2831]">Send a Direct Message</h3>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#FFB6C1]/35 bg-white/70 text-[#FF85A2] shadow-sm">
                    <Sparkles className="h-5 w-5" />
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="mt-6 flex flex-1 flex-col gap-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <label className="flex flex-col gap-2 text-sm font-medium text-[#4A2831]">
                      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9A6B75]">Full Name</span>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Your full name"
                        required
                        className="w-full rounded-xl border border-[#F4CAD4] bg-[#FFF9FB] px-4 py-3 text-sm text-[#4A2831] outline-none transition-all duration-300 placeholder:text-[#A37C88] focus:border-[#FF85A2] focus:bg-white focus:ring-4 focus:ring-[#FF85A2]/12"
                      />
                    </label>

                    <label className="flex flex-col gap-2 text-sm font-medium text-[#4A2831]">
                      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9A6B75]">Brand / Company Name</span>
                      <input
                        type="text"
                        name="companyName"
                        placeholder="Your brand or company"
                        className="w-full rounded-xl border border-[#F4CAD4] bg-[#FFF9FB] px-4 py-3 text-sm text-[#4A2831] outline-none transition-all duration-300 placeholder:text-[#A37C88] focus:border-[#FF85A2] focus:bg-white focus:ring-4 focus:ring-[#FF85A2]/12"
                      />
                    </label>
                  </div>

                  <label className="flex flex-col gap-2 text-sm font-medium text-[#4A2831]">
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9A6B75]">Email Address</span>
                    <input
                      type="email"
                      name="emailAddress"
                      placeholder="you@brand.com"
                      required
                      className="w-full rounded-xl border border-[#F4CAD4] bg-[#FFF9FB] px-4 py-3 text-sm text-[#4A2831] outline-none transition-all duration-300 placeholder:text-[#A37C88] focus:border-[#FF85A2] focus:bg-white focus:ring-4 focus:ring-[#FF85A2]/12"
                    />
                  </label>

                  <label className="flex flex-1 flex-col gap-2 text-sm font-medium text-[#4A2831]">
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9A6B75]">Project Brief / Message</span>
                    <textarea
                      name="projectBrief"
                      rows={5}
                      placeholder="Tell me about the campaign, deliverables, timeline, or goals..."
                      required
                      className="min-h-[140px] w-full flex-1 rounded-xl border border-[#F4CAD4] bg-[#FFF9FB] px-4 py-3 text-sm text-[#4A2831] outline-none transition-all duration-300 placeholder:text-[#A37C88] focus:border-[#FF85A2] focus:bg-white focus:ring-4 focus:ring-[#FF85A2]/12"
                    />
                  </label>

                  <button
                    type="submit"
                    className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF85A2] px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-transform duration-300 hover:scale-[1.01] hover:bg-[#FF6B8B]"
                  >
                    Send Proposal ✨
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}