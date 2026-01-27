import React, { useState, useEffect } from 'react';
import { CONTENT } from './constants';
import { Language } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { getIcon } from './components/Icons';
import { FloatingLeaves } from './components/FloatingLeaves';
import { ContactButton } from './components/ContactButton';
import { TypeWriter } from './components/TypeWriter';
import { Mail, Phone, CheckCircle, ArrowUpRight, Target, Eye, HandHeart, ArrowRight, Quote } from 'lucide-react';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar'); // Default to Arabic

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = CONTENT[lang];
  const isRTL = lang === 'ar';

  // Set document direction
  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    // Initialize observers
    if ((window as any).observeReveals) {
      (window as any).observeReveals();
    }
  }, [lang, isRTL]);



  const fontClass = isRTL ? 'font-cairo' : 'font-sans';

  return (
    <div className={`min-h-screen bg-gray-50 text-brand-dark ${fontClass} selection:bg-brand-green selection:text-white`}>
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand-green focus:text-white focus:rounded-lg focus:font-bold">
        {lang === 'en' ? 'Skip to main content' : 'انتقل إلى المحتوى الرئيسي'}
      </a>
      <FloatingLeaves />
      <Header lang={lang} toggleLang={toggleLang} content={t.nav} />

      <Hero content={t.hero} lang={lang} />

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 relative overflow-hidden">
        <div id="main-content"></div>
        {/* Background Decorative Pattern */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-brand-green/5 rounded-full blur-[60px] md:blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            {/* Text Column */}
            <div className="w-full lg:w-5/12">
              <div className="reveal-trigger mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-[2px] w-8 md:w-12 bg-brand-green"></div>
                  <span className="text-brand-green font-bold text-xs tracking-[0.15em] uppercase">{t.nav.about}</span>
                </div>
              </div>

              <h2 className="reveal-trigger text-3xl md:text-5xl lg:text-6xl font-black text-brand-charcoal mb-6 md:mb-10 leading-[1.1]">{t.about.title}</h2>

              <div className="reveal-trigger prose prose-lg text-brand-gray leading-relaxed mb-8 md:mb-12">
                <p className="font-semibold text-brand-charcoal text-lg md:text-xl mb-4">{t.about.mainText}</p>
                <p className="text-base md:text-lg">{t.about.subText}</p>
              </div>

              <div className="flex flex-col gap-4 md:gap-6">
                {/* Vision Card - No reveal-trigger because typewriter is the animation */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2 bg-brand-light rounded-lg text-brand-green">
                      <Eye className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-brand-charcoal">{t.about.visionTitle}</h3>
                  </div>
                  <TypeWriter
                    key={`vision-${lang}`}
                    text={t.about.visionText}
                    speed={25}
                    className="text-sm text-brand-gray leading-relaxed"
                  />
                </div>

                {/* Mission Card */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2 bg-blue-50 rounded-lg text-brand-accent">
                      <Target className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-brand-charcoal">{t.about.missionTitle}</h3>
                  </div>
                  <TypeWriter
                    key={`mission-${lang}`}
                    text={t.about.missionText}
                    speed={25}
                    className="text-sm text-brand-gray leading-relaxed"
                  />
                </div>
              </div>
            </div>

            {/* Image Column */}
            <div className="w-full lg:w-7/12 relative lg:pt-24 reveal-trigger stagger-2">
              <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2813&auto=format&fit=crop"
                  alt="Environmental Consulting"
                  className="w-full h-[400px] md:h-[600px] object-cover"
                />

                {/* Floating Stats Card - Stacked on Mobile */}
                <div className="md:absolute md:bottom-8 md:-left-8 z-20 bg-white p-6 md:p-8 rounded-none md:rounded-2xl shadow-none md:shadow-xl border-t md:border-t-0 md:border-l-8 border-brand-green w-full md:max-w-xs">
                  <div className="flex items-center gap-3 mb-3">
                    <Quote className="text-brand-green fill-brand-green/20" size={24} />
                  </div>
                  <p className="text-brand-charcoal font-medium italic leading-relaxed text-sm md:text-base">
                    "We believe that sustainability goes beyond regulatory compliance."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6 reveal-trigger">
            <div className="max-w-2xl">
              <span className="text-brand-emerald font-bold tracking-[0.2em] uppercase text-xs md:text-sm block mb-4">{t.nav.about}</span>
              <h2 className="text-3xl md:text-6xl font-black mb-4 md:mb-6">{t.values.title}</h2>
              <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">{t.values.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {t.values.items.map((val, idx) => (
              <div key={idx} className={`glass-dark p-6 md:p-10 rounded-2xl md:rounded-3xl hover:bg-white/5 transition-all duration-300 reveal-trigger stagger-${(idx % 3) + 1}`}>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-white/5 rounded-xl text-brand-emerald">
                    <HandHeart className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <span className="text-3xl md:text-4xl font-black text-white/10">0{idx + 1}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">{val.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 relative overflow-hidden bg-white">
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(170,213,70,0.05)_0%,transparent_100%)] pointer-events-none"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-green/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto relative z-10 px-4">
          <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28 reveal-trigger">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 text-brand-green font-bold text-xs md:text-sm mb-6 border border-brand-green/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
              </span>
              {t.nav.services}
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-dark mb-8 leading-[1.05]">
              {t.services.title.split(' ').map((word, i) => (
                <span key={i} className={i === t.services.title.split(' ').length - 1 ? "text-brand-green" : ""}>
                  {word}{' '}
                </span>
              ))}
            </h2>
            <p className="text-xl text-brand-gray leading-relaxed font-medium opacity-80">
              {t.services.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {t.services.items.map((service, idx) => (
              <div
                key={idx}
                className="group relative h-full perspective-2000"
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = ((y - centerY) / centerY) * -8;
                  const rotateY = ((x - centerX) / centerX) * 8;

                  card.style.setProperty('--mouse-x', `${x}px`);
                  card.style.setProperty('--mouse-y', `${y}px`);

                  const wrap = card.querySelector('.card-3d-wrap') as HTMLElement;
                  if (wrap) wrap.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                }}
                onMouseLeave={(e) => {
                  const wrap = e.currentTarget.querySelector('.card-3d-wrap') as HTMLElement;
                  if (wrap) wrap.style.transform = `rotateX(0deg) rotateY(0deg)`;
                }}
              >
                <div className="card-3d-wrap h-full relative">
                  <div className="relative h-full bg-gray-50/50 rounded-[3rem] p-8 md:p-10 transition-colors duration-500 hover:bg-white border border-gray-100/50 hover:border-brand-green/30 overflow-hidden flex flex-col z-10">

                    {/* Mouse Glow Follower */}
                    <div className="mouse-glow"></div>

                    {/* Subtle Background Icon Watermark */}
                    <div className="absolute -bottom-10 -right-10 w-48 h-48 text-brand-green/[0.03] transform rotate-12 transition-all duration-700 group-hover:text-brand-green/[0.08] group-hover:scale-125 group-hover:rotate-0 pointer-events-none">
                      {React.cloneElement(getIcon(service.iconName), { className: "w-full h-full", strokeWidth: 1 })}
                    </div>

                    {/* Header: Icon & Number */}
                    <div className="flex justify-between items-start mb-10 relative z-20 card-content-3d">
                      <div className="w-20 h-20 rounded-2xl bg-white shadow-xl shadow-brand-green/10 flex items-center justify-center text-brand-green transition-all duration-500 group-hover:bg-brand-green group-hover:text-white group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-brand-green/40 icon-glow shimmer-effect">
                        <div className="transform transition-transform duration-500 group-hover:rotate-[360deg]">
                          {getIcon(service.iconName)}
                        </div>
                      </div>
                      <span className="text-6xl font-black text-gray-100 group-hover:text-brand-green/10 transition-colors duration-500 pointer-events-none select-none">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-grow space-y-4 relative z-20 card-content-3d">
                      <h3 className="text-2xl font-bold text-brand-dark transition-colors duration-300 group-hover:text-brand-green">
                        {service.title}
                      </h3>
                      <p className="text-brand-gray/80 text-base leading-relaxed font-medium group-hover:text-brand-gray transition-colors duration-300">
                        {service.description}
                      </p>
                    </div>


                    {/* Hover Accent Line */}
                    <div className="absolute top-0 left-0 w-0 h-1 bg-brand-green transition-all duration-500 group-hover:w-full"></div>
                  </div>
                </div>

                {/* Decorative Shadow Overlay */}
                <div className="absolute inset-x-8 bottom-0 h-4 bg-brand-green/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* Why Us & Industries */}
      <section className="flex flex-col lg:flex-row">
        {/* Why Us */}
        {/* Why Us */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-brand-charcoal via-brand-dark to-brand-charcoal text-white px-6 py-16 md:p-24 relative overflow-hidden flex flex-col justify-center">
          {/* Decorative Pattern Overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

          {/* Organic Background Blobs */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-green/20 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute top-1/2 -left-24 w-72 h-72 bg-brand-accent/20 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="relative z-10 reveal-trigger max-w-xl mx-auto lg:mx-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-12 relative inline-block">
              {t.whyUs.title}
              <div className="absolute -bottom-4 left-0 w-24 h-2 bg-brand-green rounded-full"></div>
            </h2>
            <ul className="grid grid-cols-1 gap-6">
              {t.whyUs.items.map((item, idx) => (
                <li key={idx} className="group flex items-center gap-5 p-4 rounded-xl transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-white/10">
                  <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0 group-hover:bg-brand-green group-hover:scale-110 transition-all duration-300">
                    <CheckCircle className="w-6 h-6 text-brand-green group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-lg md:text-xl font-medium text-gray-200 group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Industries */}
        {/* Industries */}
        <div className="w-full lg:w-1/2 bg-white px-6 py-16 md:p-24 relative flex flex-col justify-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="relative z-10 reveal-trigger max-w-xl mx-auto lg:mx-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-charcoal mb-12 relative inline-block">
              {t.industries.title}
              <div className="absolute -bottom-4 left-0 w-24 h-2 bg-brand-green rounded-full"></div>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.industries.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-gray-50/80 p-5 rounded-2xl border border-gray-100 hover:border-brand-green/30 hover:bg-white hover:shadow-lg hover:shadow-brand-green/5 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-green shadow-sm shrink-0 group-hover:scale-110 group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                    <CheckCircle size={18} />
                  </div>
                  <span className="font-bold text-brand-charcoal text-sm md:text-base group-hover:text-brand-green transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* Projects */}
      <section id="projects" className="py-20 md:py-32 bg-gray-50 overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            <div className="lg:w-1/3 reveal-trigger">
              <h2 className="text-3xl md:text-6xl font-black text-brand-charcoal mb-6">{t.projects.title}</h2>
              <p className="text-lg md:text-xl text-brand-gray leading-relaxed mb-8 md:mb-12">{t.projects.description}</p>

              <div className="bg-white p-6 md:p-10 rounded-2xl md:rounded-[2rem] shadow-xl shadow-gray-200/50 border-t-4 border-brand-green">
                <h3 className="font-bold text-brand-charcoal text-xl md:text-2xl mb-6">
                  {t.projects.approachTitle}
                </h3>
                <ul className="space-y-4">
                  {t.projects.approachItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-brand-gray font-medium text-sm md:text-base">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {t.projects.items.map((project, idx) => (
                <div key={idx} className={`group relative overflow-hidden rounded-2xl md:rounded-[2.5rem] h-[300px] md:h-[400px] shadow-md reveal-trigger stagger-${(idx % 2) + 1}`}>
                  <img
                    src={`/1/${idx === 0 ? CONTENT.ar.projects.items[1] :
                      idx === 1 ? CONTENT.ar.projects.items[0] :
                        CONTENT.ar.projects.items[idx]
                      }.jpg`}
                    alt={project}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                  <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
                    <h3 className="text-white font-bold text-xl md:text-2xl leading-snug">{project}</h3>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 relative bg-brand-dark">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-50 md:block hidden"></div>

        <div className="container mx-auto relative z-10 reveal-trigger">
          <div className="bg-white md:rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-2xl">
            <div className="md:w-5/12 bg-brand-dark text-white p-8 md:p-16 flex flex-col justify-between relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/20 rounded-full blur-[80px] pointer-events-none"></div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black mb-6">{t.contact.title}</h2>
                <p className="text-gray-400 text-base md:text-lg mb-10 leading-relaxed">{t.contact.subtitle}</p>

                <div className="space-y-8">
                  <a href="mailto:info@gardenia.eg" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-widest">{t.contact.emailLabel}</span>
                      <span className="text-lg md:text-xl font-bold">info@gardenia.eg</span>
                    </div>
                  </a>
                  <a href="tel:+20100000000" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-widest">{t.contact.phoneLabel}</span>
                      <span className="text-lg md:text-xl font-bold">+20 100 000 000</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-emerald" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-emerald" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" /></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-emerald" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" /></svg>
                </a>
              </div>
            </div>

            <div className="md:w-7/12 p-6 md:p-16 bg-white">
              <form className="space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">{t.contact.formName}</label>
                    <input id="contact-name" type="text" className="w-full py-3 border-b-2 border-gray-200 bg-transparent focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none font-medium text-lg rounded-none transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">{t.contact.formEmail}</label>
                    <input id="contact-email" type="email" className="w-full py-3 border-b-2 border-gray-200 bg-transparent focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none font-medium text-lg rounded-none transition-colors" />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">{t.contact.formMessage}</label>
                  <textarea id="contact-message" rows={4} className="w-full py-3 border-b-2 border-gray-200 bg-transparent focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none font-medium text-lg resize-none rounded-none transition-colors"></textarea>
                </div>

                <div className="pt-4">
                  <button type="submit" className="w-full md:w-auto px-10 py-4 bg-brand-dark text-white rounded-full font-bold text-lg active:scale-95 transition-transform flex items-center justify-center gap-3 focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2">
                    {t.contact.sendButton}
                    {lang === 'en' ? <ArrowUpRight size={20} /> : <ArrowUpRight className="rotate-[270deg]" size={20} />}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-brand-gray py-12 md:py-20 border-t border-gray-200">
        <div className="container mx-auto text-center px-4">
          <div className="mb-8 md:mb-10 flex justify-center">
            <img src="/logo-full.png" alt="Gardenia Full Logo" className="h-16 md:h-24 w-auto object-contain" />
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 mb-8 md:mb-10 text-xs font-bold uppercase tracking-[0.15em] text-brand-charcoal">
            <a href="#" className="hover:text-brand-green">{t.nav.home}</a>
            <a href="#about" className="hover:text-brand-green">{t.nav.about}</a>
            <a href="#services" className="hover:text-brand-green">{t.nav.services}</a>
            <a href="#projects" className="hover:text-brand-green">{t.nav.projects}</a>
            <a href="#contact" className="hover:text-brand-green">{t.nav.contact}</a>
          </div>

          <p className="mb-2 font-medium">{t.footer.address}</p>
          <p className="opacity-70 text-sm">{t.footer.rights}</p>
        </div>
      </footer>

      {/* Fixed Contact Button */}
      <ContactButton />
    </div>
  );
};

export default App;