import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language, ContentData } from '../types';
import { Link, NavLink, useLocation } from 'react-router-dom';

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
          ? 'bg-white/95 backdrop-blur-md shadow-md border-gray-100 py-1'
          : 'bg-white border-gray-100 py-3 md:py-6'
          }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Area */}
          <Link to="/" className="flex items-center gap-3 group z-50 relative">
            <div className="relative h-16 md:h-24 w-auto flex items-center justify-center">
              <img
                src="/logo-gardenia.png"
                alt="Gardenia Logo"
                className="h-full w-auto object-contain drop-shadow-sm transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.classList.add('fallback-logo');
                }}
              />
              <div className="hidden fallback-logo:flex items-center justify-center w-10 h-10 bg-brand-green text-white rounded-lg font-bold shadow-md">
                G
              </div>
            </div>

          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center bg-gray-50/50 backdrop-blur-sm rounded-full p-1 border border-gray-100 hover:bg-gray-100/50 transition-all">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                className={({ isActive }) => `px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 ${isActive
                    ? 'bg-brand-green text-white shadow-lg shadow-brand-green/20'
                    : 'text-brand-charcoal/80 hover:text-brand-green hover:bg-white/50'
                  }`}
              >
                {link.label}
              </NavLink>
            ))}

            <button
              onClick={toggleLang}
              className={`ml-2 flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-sm bg-brand-green text-white hover:bg-brand-accent`}
            >
              <Globe size={14} />
              {content.langLabel}
            </button>
          </nav>

          {/* Mobile Right Side Controls */}
          <div className="md:hidden flex items-center gap-3 z-50">
            {/* Direct Language Toggle for Mobile */}
            <button
              onClick={toggleLang}
              className={`p-2.5 rounded-full transition-all flex items-center gap-2 font-bold text-[10px] tracking-tight uppercase bg-brand-green text-white shadow-sm`}
            >
              <Globe size={16} />
              <span>{lang === 'en' ? 'AR' : 'EN'}</span>
            </button>

            {/* Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-brand-emerald bg-gray-100 text-gray-900 shadow-sm`}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
    </>
  );
};