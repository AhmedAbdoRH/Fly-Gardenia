import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ContentData } from '../types';
import { Link } from 'react-router-dom';

interface HeroProps {
  content: ContentData['hero'];
  lang: string;
}

export const Hero: React.FC<HeroProps> = ({ content, lang }) => {
  return (
    <section className="relative h-[100dvh] min-h-[600px] flex items-center overflow-hidden bg-brand-dark">
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

      <div className="container relative z-20 mx-auto pt-56 md:pt-64 pb-48 md:pb-64">
        <div className="max-w-4xl">
          <div className="overflow-hidden mb-4 md:mb-6">
            <div className="flex items-center gap-3 md:gap-4 animate-fade-up opacity-0" style={{ animationDelay: '0.1s' }}>
              <div className="h-[2px] w-8 md:w-12 bg-brand-emerald"></div>
              <span className="text-brand-emerald font-bold tracking-[0.15em] uppercase text-xs md:text-sm font-sans">Est. 2008</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 md:mb-8 leading-[1.1] md:leading-[0.95] tracking-tight animate-fade-up opacity-0" style={{ animationDelay: '0.3s' }}>
            {content.title}
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-gray-200 mb-8 md:mb-12 font-medium leading-relaxed max-w-xl md:max-w-2xl animate-fade-up opacity-0" style={{ animationDelay: '0.5s' }}>
            {content.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 w-full sm:w-auto" style={{ animationDelay: '0.7s' }}>
            <Link
              to="/services"
              className="group relative inline-flex items-center justify-center gap-3 bg-brand-emerald text-white px-8 py-4 rounded-full font-bold text-base md:text-lg overflow-hidden transition-all active:scale-95 touch-manipulation"
            >
              <span className="relative z-10">{content.cta}</span>
              <span className={`relative z-10 transition-transform duration-300 ${lang === 'en' ? 'group-hover:translate-x-1' : 'group-hover:-translate-x-1 rotate-180'}`}>
                <ArrowRight size={18} strokeWidth={2.5} />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-base md:text-lg text-white border-2 border-white/20 hover:bg-white/10 active:bg-white/20 backdrop-blur-sm transition-colors touch-manipulation"
            >
              {lang === 'en' ? 'Contact Us' : 'تواصل معنا'}
            </Link>
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