import React, { useEffect } from 'react';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';
import { ContentData } from '../types';
import { PageHero } from '../components/PageHero';

interface ContactProps {
    content: ContentData;
    lang: string;
}

export const Contact: React.FC<ContactProps> = ({ content, lang }) => {
    const t = content;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen">
            <PageHero
                title={t.nav.contact}
                subtitle={t.contact.subtitle}
                bgImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2670&auto=format&fit=crop"
            />

            <section className="py-20 md:py-32 relative bg-brand-dark">
                <div className="absolute top-0 left-0 w-full h-1/2 watercolor-bg md:block hidden"></div>

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
                                            <span className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-widest">{t.contact.emailLabel}</span>
                                            <span className="text-lg md:text-xl font-bold">info@gardenia.eg</span>
                                        </div>
                                    </a>
                                    <a href="tel:+20100000000" className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <span className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-widest">{t.contact.phoneLabel}</span>
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
                                        <label htmlFor="contact-name" className="block text-xs font-bold text-brand-gray uppercase tracking-wider mb-2">{t.contact.formName}</label>
                                        <input id="contact-name" type="text" className="w-full py-3 border-b-2 border-gray-200 bg-transparent focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none font-medium text-lg rounded-none transition-colors" />
                                    </div>
                                    <div>
                                        <label htmlFor="contact-email" className="block text-xs font-bold text-brand-gray uppercase tracking-wider mb-2">{t.contact.formEmail}</label>
                                        <input id="contact-email" type="email" className="w-full py-3 border-b-2 border-gray-200 bg-transparent focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none font-medium text-lg rounded-none transition-colors" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="contact-message" className="block text-xs font-bold text-brand-gray uppercase tracking-wider mb-2">{t.contact.formMessage}</label>
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
        </div>
    );
};
