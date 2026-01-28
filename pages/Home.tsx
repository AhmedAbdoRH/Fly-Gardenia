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

            {/* About Summary */}
            <section className="py-20 md:py-32 watercolor-bg">
                <div className="container mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                        <div className="w-full lg:w-1/2">
                            <span className="text-brand-green font-bold tracking-[0.2em] uppercase text-xs mb-4 block">{t.nav.about}</span>
                            <h2 className="text-3xl md:text-5xl font-black text-brand-charcoal mb-6 leading-tight">{t.about.title}</h2>
                            <p className="text-lg text-brand-gray mb-8 leading-relaxed">{t.about.mainText}</p>
                            <Link to="/about" className="inline-flex items-center gap-2 text-brand-green font-bold hover:gap-4 transition-all group">
                                {lang === 'en' ? 'Learn More' : 'اقرأ المزيد'}
                                <ArrowRight size={20} className={lang === 'ar' ? 'rotate-180' : ''} />
                            </Link>
                        </div>
                        <div className="w-full lg:w-1/2 relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2813&auto=format&fit=crop"
                                    alt="Environmental Consulting"
                                    className="w-full h-[400px] object-cover"
                                />
                            </div>
                        </div>
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {t.services.items.slice(0, 4).map((service, idx) => (
                            <div key={idx} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
                                <div className="text-brand-green mb-6">{getIcon(service.iconName)}</div>
                                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                                <p className="text-gray-400 text-sm">{service.description}</p>
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
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                                    <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
                                        <h3 className="text-white font-bold text-xl md:text-2xl leading-snug">{project}</h3>
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
