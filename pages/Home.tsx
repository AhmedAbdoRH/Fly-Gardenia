import React from 'react';
import { Hero } from '../components/Hero';
import { getIcon } from '../components/Icons';
import { Mail, Phone, CheckCircle, Target, Eye, HandHeart, ArrowRight, Quote } from 'lucide-react';
import { TypeWriter } from '../components/TypeWriter';
import { ContentData } from '../types';
import { Link } from 'react-router-dom';
import { CONTENT } from '../constants';

interface HomeProps {
    content: ContentData;
    lang: string;
}

export const Home: React.FC<HomeProps> = ({ content: t, lang }) => {
    return (
        <>
            <Hero content={t.hero} lang={lang} />

            {/* About Section - Full Width Video Integration */}
            <section className="py-24 md:py-32 bg-white overflow-hidden">
                <div className="container mx-auto px-4 mb-12 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-brand-green font-bold tracking-wider mb-4 uppercase reveal-trigger">{t.about.title}</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-brand-dark mb-4 leading-tight reveal-trigger stagger-1">
                            {lang === 'ar' ? 'نحن نبني مستقبلاً مستداماً' : 'Building a Sustainable Future'}
                        </h3>
                    </div>
                </div>

                {/* Full Width Scroll Sequence Container */}
                <div className="w-full relative group/scroll-sequence">
                    <div
                        className="relative w-full h-[50vh] md:h-[70vh] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] overflow-hidden"
                    >
                        <video
                            src="/video.mp4"
                            autoPlay
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                            onLoadedMetadata={(e) => {
                                e.currentTarget.playbackRate = 0.8;
                            }}
                        />
                        <div className="absolute inset-0 bg-brand-dark/5 pointer-events-none z-10 transition-colors duration-1000 group-hover/scroll-sequence:bg-transparent"></div>
                    </div>

                    {/* Floating Decorative Elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-green/5 blur-[120px] -z-10 rounded-full scale-150 animate-pulse-slow"></div>
                </div>

                <div className="container mx-auto px-4 mt-16 text-center">
                    <div className="max-w-3xl mx-auto">
                        <p className="text-xl md:text-2xl text-brand-gray leading-relaxed mb-10 reveal-trigger stagger-1">
                            {lang === 'ar'
                                ? 'حلول استشارية بيئية وعلمية متكاملة لدعم التنمية الصناعية المستدامة منذ عام 2008.'
                                : 'Integrated environmental and scientific consulting solutions to support sustainable industrial development since 2008.'}
                        </p>
                        <Link
                            to="/about"
                            className="inline-flex items-center gap-3 bg-brand-green text-white px-10 py-4 rounded-full font-bold hover:scale-105 hover:shadow-xl hover:shadow-brand-green/20 transition-all reveal-trigger stagger-2"
                        >
                            {lang === 'ar' ? 'اكتشف المزيد عنا' : 'Discover more about us'}
                            <ArrowRight size={22} className={lang === 'ar' ? 'rotate-180' : ''} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Highlight */}
            <section className="py-24 md:py-32 bg-brand-dark text-white relative overflow-hidden">
                <div className="container mx-auto relative z-10 px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-black mb-6">{t.nav.services}</h2>
                        <p className="text-gray-400">{t.services.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {t.services.items.slice(0, 4).map((service, idx) => (
                            <div key={idx} className={`group relative bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-[3rem] border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] -translate-y-2 transition-all duration-700 overflow-hidden reveal-trigger stagger-${idx + 1} hover:-translate-y-3 hover:border-brand-green/50 hover:bg-white/10 hover:shadow-brand-green/20`}>
                                {/* Layered Premium Glows - Strongly visible by default */}
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-green/[0.08] via-transparent to-brand-green/[0.12] pointer-events-none"></div>
                                <div className="absolute -top-32 -left-32 w-80 h-80 bg-brand-green/[0.2] rounded-full blur-[100px] pointer-events-none animate-pulse-slow"></div>
                                <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-brand-emerald/[0.1] rounded-full blur-[100px] pointer-events-none"></div>

                                {/* Background Watermark Icon - Professional Transparent Version */}
                                <div className="absolute -bottom-12 -right-12 w-80 h-80 text-brand-green/[0.04] group-hover:text-brand-green/[0.08] transition-all duration-1000 transform group-hover:scale-110 group-hover:-rotate-12 pointer-events-none z-0">
                                    {getIcon(service.iconName, "w-full h-full stroke-[0.5]")}
                                </div>

                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-10">
                                        <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center border border-white/30 transition-all duration-500 shrink-0 scale-110 group-hover:scale-125 group-hover:bg-white/30">
                                            {getIcon(service.iconName, "w-8 h-8 md:w-10 md:h-10 text-white stroke-current")}
                                        </div>
                                        <span className="text-4xl font-black text-white/20 group-hover:text-white/40 transition-colors duration-500">0{idx + 1}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-brand-green mb-4 tracking-tight drop-shadow-[0_0_8px_rgba(170,213,70,0.3)]">{service.title}</h3>
                                    <p className="text-white leading-relaxed text-base md:text-lg font-medium opacity-90 group-hover:opacity-100 transition-opacity uppercase-first">{service.description}</p>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-brand-green via-brand-emerald to-transparent transform scale-x-100 transition-all duration-500 origin-left"></div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Link to="/services" className="inline-flex items-center gap-2 bg-brand-green text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all">
                            {lang === 'en' ? 'View All Services' : 'عرض كافة الخدمات'}
                            <ArrowRight size={20} className={lang === 'ar' ? 'rotate-180' : ''} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Experience / Projects Highlight */}
            <section className="py-20 md:py-32 watercolor-bg">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-16">
                        <div className="lg:w-1/3 reveal-trigger">
                            <span className="text-brand-green font-bold tracking-[0.2em] uppercase text-xs mb-4 block">{t.nav.projects}</span>
                            <h2 className="text-3xl md:text-6xl font-black text-brand-charcoal mb-6">{t.projects.title}</h2>
                            <p className="text-lg md:text-xl text-brand-gray leading-relaxed mb-8 md:mb-12">{t.projects.description}</p>

                            <div className="bg-white p-6 md:p-10 rounded-2xl md:rounded-[2rem] shadow-xl shadow-gray-200/50 border-t-4 border-brand-green">
                                <h3 className="font-bold text-brand-charcoal text-xl md:text-2xl mb-6">
                                    {t.projects.approachTitle}
                                </h3>
                                <ul className="space-y-4 mb-8">
                                    {t.projects.approachItems.slice(0, 4).map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-brand-gray font-medium text-sm md:text-base">
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0"></div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/projects" className="inline-flex items-center gap-2 text-brand-green font-bold hover:gap-4 transition-all group">
                                    {lang === 'en' ? 'Explore Our Full Experience' : 'استكشف كافة خبراتنا'}
                                    <ArrowRight size={20} className={lang === 'ar' ? 'rotate-180' : ''} />
                                </Link>
                            </div>
                        </div>

                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            {t.projects.items.slice(0, 4).map((project, idx) => (
                                <div key={idx} className={`group relative overflow-hidden rounded-2xl md:rounded-[2.5rem] h-[300px] md:h-[400px] shadow-md reveal-trigger stagger-${(idx % 2) + 1}`}>
                                    <img
                                        src={`/1/${idx === 0 ? CONTENT.ar.projects.items[1] :
                                            idx === 1 ? CONTENT.ar.projects.items[0] :
                                                CONTENT.ar.projects.items[idx]
                                            }.jpg`}
                                        alt={project}
                                        className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
                                    />
                                    {/* Brand Color Overlay - Medium Green #2e7d32 */}
                                    <div className="absolute inset-0 bg-[#2e7d32]/60 transition-all duration-700 group-hover:opacity-0 group-hover:scale-110"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                                    <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
                                        <h3 className="text-white font-bold text-xl md:text-2xl leading-snug z-10">{project}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 md:py-32 relative bg-brand-dark">
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
                                        <div className="flex items-start gap-4 mt-2">
                                            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 6.5 11 6.5 11s6.5-5.75 6.5-11c0-3.86-3.14-7-7-7zm0 9.5A2.5 2.5 0 1114.5 9 2.5 2.5 0 0112 11.5z"/></svg>
                                            </div>
                                            <div>
                                                <span className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-widest">العنوان</span>
                                                <span className="text-lg md:text-xl font-bold">{t.contact.address}</span>
                                            </div>
                                        </div>
                                    )}
                                </div> 
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
                                        {lang === 'en' ? <ArrowRight size={20} className="ml-2" /> : <ArrowRight className="mr-2 rotate-180" size={20} />}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
