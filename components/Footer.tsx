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
                    <Link to="/" className="hover:text-brand-green">{t.nav.home}</Link>
                    <Link to="/about" className="hover:text-brand-green">{t.nav.about}</Link>
                    <Link to="/services" className="hover:text-brand-green">{t.nav.services}</Link>
                    <Link to="/projects" className="hover:text-brand-green">{t.nav.projects}</Link>
                    <Link to="/contact" className="hover:text-brand-green">{t.nav.contact}</Link>
                </div>

                <div className="flex items-center justify-center gap-2 mb-2">
                    <MapPin size={18} className="text-brand-green" />
                    <p className="font-medium">{t.footer.address}</p>
                </div>
                <p className="opacity-70 text-sm">{t.footer.rights}</p>
            </div>
        </footer>
    );
};
