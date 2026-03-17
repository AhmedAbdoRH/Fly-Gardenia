import React, { useEffect } from 'react';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';
import { ContentData } from '../types';

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
            <section className="pt-32 pb-20 md:pt-48 md:pb-32 relative bg-brand-dark">
                <div className="absolute top-0 left-0 w-full h-1/2 watercolor-bg md:block hidden"></div>

                <div className="container mx-auto relative z-10 reveal-trigger mb-12 md:mb-20 text-center">
                    <h1 className="text-4xl md:text-7xl font-black mb-8 text-brand-dark leading-tight">
                        {t.contact.title}
                    </h1>
                    <div className="w-24 h-1.5 bg-brand-green mx-auto rounded-full shadow-[0_0_20px_rgba(170,213,70,0.4)]"></div>
                </div>

                <div className="container mx-auto relative z-10 reveal-trigger">
                    <div className="bg-white md:rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-2xl">
                        <div className="md:w-5/12 bg-brand-dark text-white p-8 md:p-16 flex flex-col justify-between relative">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/20 rounded-full blur-[80px] pointer-events-none"></div>

                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-black mb-6 text-brand-green">{t.contact.title}</h2>
                                <p className="text-gray-300 text-base md:text-lg mb-10 leading-relaxed">{t.contact.subtitle}</p>

                                <div className="space-y-6">
                                    {t.contact.emails?.map((em, i) => (
                                        <a key={i} href={`mailto:${em}`} className="flex items-center gap-4 group">
                                            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/10 group-hover:border-brand-green transition-colors">
                                                <Mail className="w-5 h-5 text-brand-green" />
                                            </div>
                                            <div>
                                                <span className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-widest">{t.contact.emailLabel}</span>
                                                <span className="text-lg md:text-xl font-bold">{em}</span>
                                            </div>
                                        </a>
                                    ))}

                                    <a href={`https://wa.me/201067096677`} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/10 group-hover:border-brand-green transition-colors">
                                            <svg className="w-6 h-6 text-brand-green" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                        </div>
                                        <div>
                                            <span className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-widest">WhatsApp</span>
                                            <span className="text-lg md:text-xl font-bold">01067096677</span>
                                        </div>
                                    </a>

                                    <a href={`tel:+201096677671`} className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/10 group-hover:border-brand-green transition-colors">
                                            <Phone className="w-5 h-5 text-brand-green" />
                                        </div>
                                        <div>
                                            <span className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-widest">{t.contact.phoneLabel}</span>
                                            <span className="text-lg md:text-xl font-bold">+201096677671</span>
                                        </div>
                                    </a>

                                    {t.contact.address && (
                                        <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t.contact.address)}`} target="_blank" rel="noreferrer" className="flex items-start gap-4 mt-2 group">
                                            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/10 group-hover:border-brand-green transition-colors">
                                                <svg className="w-5 h-5 text-brand-green" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 6.5 11 6.5 11s6.5-5.75 6.5-11c0-3.86-3.14-7-7-7zm0 9.5A2.5 2.5 0 1114.5 9 2.5 2.5 0 0112 11.5z" /></svg>
                                            </div>
                                            <div>
                                                <span className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-widest">{lang === 'ar' ? 'العنوان' : 'Address'}</span>
                                                <span className="text-lg md:text-xl font-bold">{t.contact.address}</span>
                                            </div>
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="mt-12 flex gap-4">
                                {content.social?.facebook && (
                                    <a href={content.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-emerald" aria-label="Facebook">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                                    </a>
                                )}
                                {content.social?.linkedin && (
                                    <a href={content.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-emerald" aria-label="LinkedIn">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" /></svg>
                                    </a>
                                )}
                                {content.social?.instagram && (
                                    <a href={content.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-emerald" aria-label="Instagram">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" /></svg>
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="md:w-7/12 p-6 md:p-16 bg-white">
                            <form className="space-y-6 md:space-y-8" onSubmit={(e) => {
                                e.preventDefault();
                                window.open(`https://wa.me/201067096677?text=${encodeURIComponent('طلب استشارة من الموقع')}`, '_blank');
                            }}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                    <div>
                                        <label htmlFor="contact-name" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{t.contact.formName}</label>
                                        <input id="contact-name" type="text" className="w-full py-3 border-b-2 border-gray-200 bg-transparent focus:border-brand-green focus:ring-0 outline-none font-medium text-lg rounded-none transition-colors" />
                                    </div>
                                    <div>
                                        <label htmlFor="contact-email" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{t.contact.formEmail}</label>
                                        <input id="contact-email" type="email" className="w-full py-3 border-b-2 border-gray-200 bg-transparent focus:border-brand-green focus:ring-0 outline-none font-medium text-lg rounded-none transition-colors" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="contact-message" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{t.contact.formMessage}</label>
                                    <textarea id="contact-message" rows={4} className="w-full py-3 border-b-2 border-gray-200 bg-transparent focus:border-brand-green focus:ring-0 outline-none font-medium text-lg resize-none rounded-none transition-colors"></textarea>
                                </div>

                                <div className="pt-4">
                                    <button type="submit" className="w-full md:w-auto px-10 py-5 bg-brand-green text-white rounded-full font-bold text-xl active:scale-95 transition-all flex items-center justify-center gap-4 hover:bg-brand-dark hover:shadow-xl hover:shadow-brand-green/20">
                                        {t.contact.sendButton}
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
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
