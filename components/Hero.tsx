import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Phone, MessageCircle, Mail, ChevronDown } from 'lucide-react';
import { ContentData } from '../types';
import { Link } from 'react-router-dom';
import { CONTENT } from '../constants';

interface HeroProps {
  content: ContentData['hero'];
  lang: string;
}

export const Hero: React.FC<HeroProps> = ({ content, lang }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!ref.current) return;
      if (e.target instanceof Node && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);

  const contact = CONTENT[lang].contact as any;
  const phone = contact?.phoneNumbers?.[0] ?? '';
  const phoneDigits = phone.replace(/[^+0-9]/g, '');
  const email = contact?.emails?.[0] ?? '';
  return (
    <section className="relative h-[100dvh] min-h-[600px] flex items-center overflow-hidden bg-brand-dark pt-32 md:pt-48">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Darker overlays for mobile readability */}
        <div className="absolute inset-0 bg-brand-dark/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-transparent to-transparent z-10" />

        <img
          src="/hero-bg.png"
          alt="Sustainable Industry"
          className="w-full h-full object-cover animate-scale-slow opacity-90 md:opacity-100"
        />
      </div>

      <div className="container relative z-20 mx-auto pt-32 md:pt-40 pb-48 md:pb-64">
        <div className="max-w-4xl">
          <div className="overflow-hidden mb-4 md:mb-6">
            <div className="flex items-center gap-3 md:gap-4 animate-fade-up opacity-0" style={{ animationDelay: '0.1s' }}>
              <div className="h-[2px] w-8 md:w-12 bg-brand-emerald"></div>
              <span className="text-brand-emerald font-bold tracking-[0.15em] uppercase text-xs md:text-sm font-sans">Est. 2008</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 md:mb-8 leading-[1.05] md:leading-[0.98] tracking-tight animate-fade-up opacity-0" style={{ animationDelay: '0.3s' }}>
            {content.title}
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-gray-200 mb-8 md:mb-12 font-medium leading-relaxed max-w-xl md:max-w-2xl animate-fade-up opacity-0" style={{ animationDelay: '0.5s' }}>
            {content.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 w-full sm:w-auto" style={{ animationDelay: '0.7s' }}>
            <Link
              to={content.cta === 'اطلب استشارة' ? '/contact' : '/services'}
              className="group relative inline-flex items-center justify-center gap-3 bg-brand-emerald text-white px-8 py-4 rounded-full font-bold text-base md:text-lg overflow-hidden transition-all active:scale-95 touch-manipulation"
            >
              <span className="relative z-10">{content.cta}</span>
              <span className={`relative z-10 transition-transform duration-300 ${lang === 'en' ? 'group-hover:translate-x-1' : 'group-hover:-translate-x-1 rotate-180'}`}>
                <ArrowRight size={18} strokeWidth={2.5} />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </Link>

            <div className="relative z-30" ref={ref}>
              <button
                onClick={() => setOpen(v => !v)}
                aria-expanded={open}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base md:text-lg text-white border-2 border-white/50 bg-white/10 backdrop-blur-xl hover:bg-white/20 hover:border-white/70 active:scale-95 transition-all touch-manipulation shadow-xl hover:shadow-2xl"
              >
                {lang === 'en' ? 'Contact Us' : 'تواصل معنا'}
                <ChevronDown size={20} className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
              </button>

              {open && (
                <div className={`absolute bottom-full ${lang === 'ar' ? 'right-0' : 'left-0'} mb-4 w-80 bg-black/40 backdrop-blur-3xl rounded-3xl shadow-3xl z-50 overflow-hidden border border-white/20 animate-fade-in-down transition-all duration-500 ease-out`} style={{boxShadow:'0 20px 40px 0 rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)'}}>
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-brand-green/30 rounded-full blur-3xl opacity-70 pointer-events-none" style={{filter:'blur(32px)'}}></div>
                  <div className="p-4 divide-y divide-white/15">
                    <a href={`tel:${phoneDigits}`} className="flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-brand-green/20 hover:scale-[1.03] transition-all group/item">
                      <div className="w-12 h-12 rounded-xl bg-brand-green/30 flex items-center justify-center flex-shrink-0 group-hover/item:bg-brand-green/50 transition-colors group-hover/item:scale-110">
                        <Phone size={22} className="text-brand-green" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-extrabold text-white text-base group-hover/item:text-brand-green transition-colors">{lang === 'en' ? 'Direct Call' : 'اتصال مباشر'}</div>
                        <div className="text-xs text-gray-200">{lang === 'en' ? 'Call us directly' : 'اتصل بنا مباشرة'}</div>
                      </div>
                    </a>
                    <a href={`https://wa.me/${phoneDigits.replace(/\+/g, '')}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-green-900/30 hover:scale-[1.03] transition-all group/item">
                      <div className="w-12 h-12 rounded-xl bg-green-800/40 flex items-center justify-center flex-shrink-0 group-hover/item:bg-green-700/60 transition-colors group-hover/item:scale-110">
                        <MessageCircle size={22} className="text-green-300" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-extrabold text-white text-base group-hover/item:text-green-300 transition-colors">{lang === 'en' ? 'WhatsApp' : 'تواصل من خلال واتساب'}</div>
                        <div className="text-xs text-gray-200">{lang === 'en' ? 'Send message' : 'رسالة فورية'}</div>
                      </div>
                    </a>
                    <a href={`mailto:${email}`} className="flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-blue-900/30 hover:scale-[1.03] transition-all group/item">
                      <div className="w-12 h-12 rounded-xl bg-blue-800/40 flex items-center justify-center flex-shrink-0 group-hover/item:bg-blue-700/60 transition-colors group-hover/item:scale-110">
                        <Mail size={22} className="text-blue-300" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-extrabold text-white text-base group-hover/item:text-blue-300 transition-colors">{lang === 'en' ? 'Email' : 'مراسلة من خلال الايميل'}</div>
                        <div className="text-xs text-gray-200">{lang === 'en' ? 'Send us an email' : 'أرسل لنا بريداً إلكترونياً'}</div>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
        <a href="#about" className="flex flex-col items-center text-white/60 hover:text-white transition-colors" aria-label="Scroll down">
          <span className="text-xs font-medium mb-2 uppercase tracking-wider">{lang === 'en' ? 'Scroll' : 'اسحب'}</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};