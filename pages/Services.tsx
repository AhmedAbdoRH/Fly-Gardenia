import React, { useEffect } from 'react';
import { FlaskConical, Utensils, Pill, BrickWall, Package, Zap, Factory, Landmark, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { ContentData, ServiceItem } from '../types';
import { getIcon } from '../components/Icons';

interface ServicesProps {
    content: ContentData;
    lang: string;
}

export const Services: React.FC<ServicesProps> = ({ content, lang }) => {
    const t = content;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [flippedIndex, setFlippedIndex] = React.useState<number | null>(null);

    const industryIcons = [
        FlaskConical, // Chemical
        Utensils,     // Food
        Pill,         // Pharma
        BrickWall,    // Cement/Building
        Package,      // Plastic/Packaging
        Zap,          // Energy
        Factory,      // New Projects
        Landmark      // Government
    ];

    return (
        <div className="min-h-screen">
            {/* Services Section */}
            <section className="pt-32 pb-24 md:pt-48 md:pb-32 bg-brand-dark text-white relative overflow-hidden">
                {/* Background Accents */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(170,213,70,0.05)_0%,transparent_100%)] pointer-events-none"></div>
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-green/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto relative z-10 px-4">
                    <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24 reveal-trigger">
                        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-black uppercase tracking-[0.3em] bg-brand-green/20 text-brand-green rounded-full border border-brand-green/30">
                            {t.nav.services}
                        </span>
                        <h1 className="text-4xl md:text-7xl font-black mb-8 text-white leading-tight">
                            {t.services.title}
                        </h1>
                        <div className="w-24 h-1.5 bg-brand-green mx-auto rounded-full mb-10 shadow-[0_0_20px_rgba(170,213,70,0.4)]"></div>
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-medium">
                            {t.services.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
                        {t.services.items.map((service, idx) => (
                            <div
                                key={idx}
                                className={`group relative h-[450px] md:h-[500px] flip-card reveal-trigger stagger-${idx + 1} ${flippedIndex === idx ? 'is-flipped' : ''}`}
                                onClick={() => setFlippedIndex(flippedIndex === idx ? null : idx)}
                            >
                                <div className="flip-card-inner">
                                    {/* Front Side */}
                                    <div className="flip-card-front h-full bg-white/5 backdrop-blur-xl p-8 md:p-10 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex flex-col cursor-pointer hover:bg-white/10 transition-all duration-700">
                                        {/* Layered Premium Glows */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-brand-green/[0.1] via-transparent to-brand-green/[0.15] pointer-events-none"></div>
                                        <div className="absolute -top-32 -left-32 w-80 h-80 bg-brand-green/[0.25] rounded-full blur-[100px] pointer-events-none"></div>

                                        {/* Background Watermark Icon */}
                                        <div className="absolute -bottom-16 -right-16 w-96 h-96 text-brand-green/[0.03] group-hover:text-brand-green/[0.06] transition-all duration-1000 transform group-hover:scale-110 group-hover:-rotate-12 pointer-events-none z-0">
                                            {getIcon(service.iconName, "w-full h-full stroke-[0.3]")}
                                        </div>

                                        {/* Header: Glass Icon & Number */}
                                        <div className="flex justify-between items-start mb-10 relative z-20">
                                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 transition-all duration-700 scale-110 group-hover:scale-125 group-hover:bg-white/30">
                                                <div className="relative z-10 transform transition-transform duration-1000 group-hover:rotate-[360deg]">
                                                    {getIcon(service.iconName, "w-8 h-8 md:w-10 md:h-10")}
                                                </div>
                                            </div>
                                            <span className="text-5xl md:text-6xl font-black text-white/10 group-hover:text-white/30 transition-colors duration-700 pointer-events-none select-none">
                                                {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-grow space-y-4 relative z-20">
                                            <h3 className="text-xl md:text-3xl font-bold text-brand-green tracking-tight drop-shadow-[0_0_8px_rgba(170,213,70,0.3)] leading-tight">
                                                {service.title}
                                            </h3>
                                            <p className="text-white leading-relaxed text-sm md:text-lg font-medium opacity-90 group-hover:opacity-100 transition-opacity uppercase-first">
                                                {service.description}
                                            </p>
                                            
                                            <div className="pt-6 flex items-center gap-3 text-brand-green text-sm md:text-base font-bold group-hover:translate-x-2 transition-transform">
                                                <span>{lang === 'ar' ? 'عرض التفاصيل' : 'View Details'}</span>
                                                <div className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center">
                                                    <span className={`text-xs transition-transform duration-500 ${lang === 'ar' ? 'rotate-180' : ''}`}>→</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-brand-green via-brand-emerald to-transparent transform scale-x-100 transition-all duration-700 origin-left"></div>
                                    </div>

                                    {/* Back Side */}
                                    <div className="flip-card-back h-full bg-white p-8 md:p-12 border-2 border-brand-green/30 shadow-2xl flex flex-col cursor-pointer overflow-hidden">
                                        {/* Background pattern */}
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(170,213,70,0.05)_0%,transparent_100%)] pointer-events-none"></div>
                                        
                                        <div className="relative z-10 h-full flex flex-col">
                                            <div className="flex items-center gap-4 mb-8">
                                                <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center border border-brand-green/20">
                                                    {getIcon(service.iconName, "w-6 h-6 text-brand-green")}
                                                </div>
                                                <h3 className="text-xl md:text-2xl font-bold text-brand-charcoal leading-tight">{service.title}</h3>
                                            </div>

                                            <div className="flex-grow overflow-y-auto custom-scrollbar pr-2">
                                                <div className="space-y-4">
                                                    <h4 className="text-brand-green font-black tracking-widest uppercase text-xs md:text-sm">
                                                        {lang === 'ar' ? 'نطاق الخدمة' : 'Service Scope'}
                                                    </h4>
                                                    <div className="space-y-3">
                                                        {(lang === 'ar' ? service.details?.ar : service.details?.en)?.split('\n').map((line, i) => (
                                                            <div key={i} className="flex gap-3 items-start group/line">
                                                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-green shrink-0 group-hover/line:scale-150 transition-transform"></div>
                                                                <p className="text-brand-gray text-sm md:text-base leading-relaxed font-medium group-hover/line:text-brand-charcoal transition-colors">
                                                                    {line.replace('• ', '')}
                                                                </p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                                                <span className="text-xs font-black text-brand-green/40 uppercase tracking-widest">
                                                    Gardenia {new Date().getFullYear()}
                                                </span>
                                                <button className="text-brand-green text-sm font-bold flex items-center gap-2 hover:translate-x-[-4px] transition-transform">
                                                    <span className={`text-xs transition-transform ${lang === 'ar' ? '' : 'rotate-180'}`}>←</span>
                                                    <span>{lang === 'ar' ? 'رجوع' : 'Back'}</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Industries */}
            <section className="pt-4 pb-20 md:pt-8 md:pb-32 bg-white">
                <div className="container mx-auto px-4">
                    <div className="relative max-w-6xl mx-auto rounded-[3rem] border border-gray-100 bg-white/80 backdrop-blur-xl px-6 py-10 md:px-12 md:py-14 shadow-[0_24px_80px_rgba(15,23,42,0.08)] overflow-hidden">
                        <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-green/5 rounded-full blur-[100px] pointer-events-none"></div>
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-emerald/5 rounded-full blur-[100px] pointer-events-none"></div>

                        <div className="relative z-10 mb-10 md:mb-12 text-center">
                            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full border border-brand-green/20 bg-brand-green/5 text-xs font-semibold tracking-[0.25em] uppercase text-brand-green">
                                {lang === 'ar' ? 'القطاعات' : 'INDUSTRIES'}
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-brand-charcoal mb-4 relative inline-block">
                                {t.industries.title}
                                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-brand-green rounded-full"></span>
                            </h2>
                            <p className="mt-4 text-sm md:text-base text-brand-gray font-medium">
                                {lang === 'ar'
                                    ? `نخدم منشآت صناعية وخدمية عبر ${t.industries.items.length} قطاعات رئيسية.`
                                    : `Serving industrial and governmental clients across ${t.industries.items.length} key sectors.`}
                            </p>
                        </div>

                        <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {t.industries.items.map((item, idx) => {
                                const Icon = industryIcons[idx % industryIcons.length];
                                return (
                                    <div
                                        key={idx}
                                        className="group relative rounded-[2rem] border border-gray-100/70 bg-white/90 px-4 py-5 md:px-5 md:py-7 shadow-sm hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] hover:border-brand-green/40 transition-all duration-500"
                                    >
                                        <div className="flex flex-col items-center text-center gap-3">
                                            <div className="relative">
                                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-green/30 to-brand-emerald/20 opacity-0 group-hover:opacity-100 blur-md transition-all duration-500"></div>
                                                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brand-light flex items-center justify-center text-brand-green shadow-sm">
                                                    <Icon size={26} strokeWidth={1.5} />
                                                </div>
                                            </div>
                                            <h3 className="font-bold text-brand-charcoal text-xs sm:text-sm md:text-base leading-snug group-hover:text-brand-green transition-colors duration-300">
                                                {item}
                                            </h3>
                                            <span className="text-[10px] md:text-xs font-semibold tracking-[0.25em] text-brand-green/70 uppercase">
                                                {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 md:py-32 relative bg-brand-dark">
                <div className="absolute top-0 left-0 w-full h-1/2 watercolor-bg md:block hidden"></div>

                <div className="container mx-auto relative z-10 reveal-trigger">
                    <div className="bg-white md:rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-2xl">
                        <div className="md:w-5/12 bg-brand-dark text-white p-8 md:p-16 flex flex-col justify-between relative">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/20 rounded-full blur-[80px] pointer-events-none"></div>

                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-black mb-6">{t.contact.title}</h2>
                                <p className="text-gray-400 text-base md:text-lg mb-10 leading-relaxed">{t.contact.subtitle}</p>

                                <div className="space-y-6">
                                    {t.contact.emails?.map((em, i) => (
                                        <a key={i} href={`mailto:${em}`} className="flex items-center gap-4 group">
                                            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                                                <Mail className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <span className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-widest">{t.contact.emailLabel}</span>
                                                <span className="text-lg md:text-xl font-bold">{em}</span>
                                            </div>
                                        </a>
                                    ))}

                                    {t.contact.phoneNumbers?.map((p, i) => (
                                        <a key={i} href={`tel:${p.replace(/ /g, '')}`} className="flex items-center gap-4 group">
                                            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                                                <Phone className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <span className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-widest">{t.contact.phoneLabel}</span>
                                                <span className="text-lg md:text-xl font-bold">{p}</span>
                                            </div>
                                        </a>
                                    ))}

                                    {t.contact.address && (
                                        <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t.contact.address)}`} target="_blank" rel="noreferrer" className="flex items-start gap-4 mt-2">
                                            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 6.5 11 6.5 11s6.5-5.75 6.5-11c0-3.86-3.14-7-7-7zm0 9.5A2.5 2.5 0 1114.5 9 2.5 2.5 0 0112 11.5z"/></svg>
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
