import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContentData } from '../types';
import { Link } from 'react-router-dom';

interface FooterProps {
    content: ContentData;
    lang: string;
}

export const Footer: React.FC<FooterProps> = ({ content: t, lang }) => {
    return (
        <footer className="bg-gray-100 text-brand-gray py-12 md:py-20 border-t border-gray-200">
            <div className="container mx-auto text-center px-4">
                <div className="mb-8 md:mb-10 flex justify-center">
                    <img src="/logo-gardenia.png" alt="Gardenia Full Logo" className="h-20 md:h-32 w-auto object-contain" />
                </div>

                <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 mb-8 md:mb-10 text-xs font-bold uppercase tracking-[0.15em] text-brand-charcoal">
                    <Link to="/" className="hover:text-brand-green transition-colors">{t.nav.home}</Link>
                    <Link to="/about" className="hover:text-brand-green transition-colors">{t.nav.about}</Link>
                    <Link to="/services" className="hover:text-brand-green transition-colors">{t.nav.services}</Link>
                    <Link to="/projects" className="hover:text-brand-green transition-colors">{t.nav.projects}</Link>
                    <Link to="/contact" className="hover:text-brand-green transition-colors">{t.nav.contact}</Link>
                </div>

                <div className="flex flex-col items-center gap-6 mb-10">
                    <div className="flex items-center justify-center gap-3 text-brand-gray">
                        <MapPin size={18} className="text-brand-green shrink-0" />
                        <p className="font-medium text-sm md:text-base max-w-md">{t.footer.address}</p>
                    </div>

                    {t.social && (
                        <div className="flex items-center justify-center gap-4">
                            {t.social.facebook && (
                                <a href={t.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center hover:bg-brand-green hover:text-white hover:border-brand-green transition-all" aria-label="Facebook">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                                </a>
                            )}
                            {t.social.linkedin && (
                                <a href={t.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center hover:bg-brand-green hover:text-white hover:border-brand-green transition-all" aria-label="LinkedIn">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" /></svg>
                                </a>
                            )}
                            {t.social.instagram && (
                                <a href={t.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center hover:bg-brand-green hover:text-white hover:border-brand-green transition-all" aria-label="Instagram">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" /></svg>
                                </a>
                            )}
                        </div>
                    )}
                </div>

                <div className="pt-8 border-t border-gray-200/60 max-w-4xl mx-auto">
                    <p className="text-gray-400 text-xs md:text-sm font-medium">{t.footer.rights}</p>
                </div>
            </div>
        </footer>
    );
};
