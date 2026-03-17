import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language, ContentData } from '../types';
import { Link, NavLink, useLocation } from 'react-router-dom';
import RamadanLanterns from './RamadanLanterns';

interface HeaderProps {
  lang: Language;
  toggleLang: () => void;
  content: ContentData['nav'];
}

export const Header: React.FC<HeaderProps> = ({ lang, toggleLang, content }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: content.home, href: '/' },
    { label: content.about, href: '/about' },
    { label: content.services, href: '/services' },
    { label: content.projects, href: '/projects' },
    ...(content.partners ? [{ label: content.partners, href: '/partners' }] : []),
    { label: content.contact, href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${isScrolled || location.pathname !== '/'
          ? 'bg-white/95 backdrop-blur-md shadow-md border-gray-100 py-2'
          : 'bg-white border-gray-100 py-4 md:py-8'
          }`}
      >
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
          {/* Logo Area */}
          <Link to="/" className="flex items-center gap-4 group z-50 relative">
            <div className={`relative h-20 md:h-36 w-auto flex items-center justify-center transition-all duration-300 ${isScrolled ? 'scale-125' : ''}`}>
              <img
                src="/logo-gardenia.png"
                alt="Gardenia Logo"
                className="h-full w-auto object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.classList.add('fallback-logo');
                }}
              />
              <div className={`hidden fallback-logo:flex items-center justify-center transition-all duration-300 ${isScrolled ? 'w-16 h-16' : 'w-14 h-14'} bg-brand-green text-white rounded-lg font-bold shadow-md`}>
                G
              </div>
            </div>

          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center bg-gray-50/50 backdrop-blur-md rounded-full p-2 border border-gray-100 hover:bg-gray-100/50 transition-all shadow-sm">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                className={({ isActive }) => `px-7 py-3 text-sm md:text-base font-black uppercase tracking-widest rounded-full transition-all duration-300 ${isActive
                  ? 'bg-brand-green text-white shadow-xl shadow-brand-green/30'
                  : 'text-brand-charcoal/90 hover:text-brand-green hover:bg-white/80'
                  }`}
              >
                {link.label}
              </NavLink>
            ))}

            <button
              onClick={toggleLang}
              className={`ml-4 flex items-center gap-3 px-6 py-3 rounded-full text-sm font-black uppercase tracking-widest transition-all shadow-md bg-brand-green text-white hover:bg-brand-dark hover:scale-105 active:scale-95`}
            >
              <Globe size={18} />
              {content.langLabel}
            </button>
          </nav>

          {/* Mobile Right Side Controls */}
          <div className="md:hidden flex items-center gap-4 z-50">
            {/* Direct Language Toggle for Mobile */}
            <button
              onClick={toggleLang}
              className={`p-3.5 rounded-full transition-all flex items-center gap-3 font-black text-xs tracking-tight uppercase bg-brand-green text-white shadow-lg active:scale-95`}
            >
              <Globe size={20} />
              <span>{lang === 'en' ? 'AR' : 'EN'}</span>
            </button>

            {/* Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-3.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-brand-emerald bg-gray-100 text-gray-900 shadow-md active:scale-95`}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-brand-dark z-40 flex flex-col pt-24 px-6 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
          }`}
      >
        <nav className="flex flex-col items-start gap-6 w-full">
          {navLinks.map((link, idx) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-3xl font-black text-white hover:text-brand-emerald transition-colors w-full border-b border-white/10 pb-4 active:scale-95 origin-left"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Ramadan Lanterns Decoration */}
      <RamadanLanterns hideOnScroll={isScrolled || location.pathname !== '/'} />
    </>
  );
};
