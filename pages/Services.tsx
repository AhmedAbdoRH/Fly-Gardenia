import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { ContentData } from '../types';
import { getIcon } from '../components/Icons';
import { PageHero } from '../components/PageHero';

interface ServicesProps {
    content: ContentData;
    lang: string;
}

export const Services: React.FC<ServicesProps> = ({ content, lang }) => {
    const t = content;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen">
            <PageHero
                title={t.nav.services}
                subtitle={t.services.description}
                bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop"
            />

            {/* Services Section */}
            <section className="py-24 md:py-32 watercolor-bg">
                {/* Background Accents */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(170,213,70,0.05)_0%,transparent_100%)] pointer-events-none"></div>
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-green/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto relative z-10 px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28 reveal-trigger">
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-dark mb-8 leading-[1.05]">
                            {t.services.title.split(' ').map((word, i) => (
                                <span key={i} className={i === t.services.title.split(' ').length - 1 ? "text-brand-green" : ""}>
                                    {word}{' '}
                                </span>
                            ))}
                        </h2>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {t.services.items.map((service, idx) => (
                            <div
                                key={idx}
                                className={`group relative h-full perspective-2000 reveal-trigger stagger-${idx + 1}`}
                                onMouseMove={(e) => {
                                    const card = e.currentTarget;
                                    const rect = card.getBoundingClientRect();
                                    const x = e.clientX - rect.left;
                                    const y = e.clientY - rect.top;
                                    const centerX = rect.width / 2;
                                    const centerY = rect.height / 2;
                                    const rotateX = ((y - centerY) / centerY) * -10;
                                    const rotateY = ((x - centerX) / centerX) * 10;

                                    card.style.setProperty('--mouse-x', `${x}px`);
                                    card.style.setProperty('--mouse-y', `${y}px`);

                                    const wrap = card.querySelector('.card-3d-wrap') as HTMLElement;
                                    if (wrap) wrap.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                                }}
                                onMouseLeave={(e) => {
                                    const wrap = e.currentTarget.querySelector('.card-3d-wrap') as HTMLElement;
                                    if (wrap) wrap.style.transform = `rotateX(0deg) rotateY(0deg)`;
                                }}
                            >
                                <div className="card-3d-wrap h-full relative transition-transform duration-500 ease-out">
                                    <div className="relative h-full bg-[#1c1c1c] rounded-[2rem] p-8 md:p-10 -translate-y-2 border border-brand-green/50 shadow-[0_20px_50px_rgba(170,213,70,0.15)] overflow-hidden flex flex-col z-10 hover:-translate-y-3 hover:border-brand-green/80 transition-all duration-700">

                                        {/* Layered Premium Glows - Strongly visible by default */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-brand-green/[0.1] via-transparent to-brand-green/[0.15] pointer-events-none"></div>
                                        <div className="absolute -top-32 -left-32 w-80 h-80 bg-brand-green/[0.25] rounded-full blur-[100px] pointer-events-none animate-pulse-slow"></div>
                                        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-brand-emerald/[0.15] rounded-full blur-[100px] pointer-events-none"></div>

                                        {/* Mouse Glow Follower */}
                                        <div className="mouse-glow opacity-30"></div>

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
                                            <h3 className="text-xl md:text-2xl font-bold text-brand-green tracking-tight drop-shadow-[0_0_8px_rgba(170,213,70,0.3)]">
                                                {service.title}
                                            </h3>
                                            <p className="text-white leading-relaxed text-sm md:text-base font-medium opacity-90 group-hover:opacity-100 transition-opacity uppercase-first">
                                                {service.description}
                                            </p>
                                        </div>

                                        {/* Bottom Progress Bar */}
                                        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-brand-green via-brand-emerald to-transparent transform scale-x-100 transition-all duration-700 origin-left"></div>
                                    </div>
                                </div>

                                {/* Floating Shadow Overlay */}
                                <div className="absolute inset-x-8 bottom-0 h-4 bg-brand-green/30 blur-2xl opacity-60 transition-opacity duration-700 rounded-full"></div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Industries */}
            <section className="py-20 md:py-32 bg-white">
                <div className="container mx-auto">
                    <div className="w-full bg-brand-light px-6 py-16 md:p-24 relative flex flex-col justify-center rounded-[3rem] overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 rounded-full blur-[80px] pointer-events-none"></div>

                        <div className="relative z-10 reveal-trigger max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-charcoal mb-12 relative inline-block">
                                {t.industries.title}
                                <div className="absolute -bottom-4 left-0 w-24 h-2 bg-brand-green rounded-full"></div>
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {t.industries.items.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-100 hover:border-brand-green/30 hover:shadow-lg hover:shadow-brand-green/5 transition-all duration-300 group text-left ltr:text-left rtl:text-right">
                                        <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand-green shadow-sm shrink-0 group-hover:scale-110 group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                                            <CheckCircle size={18} />
                                        </div>
                                        <span className="font-bold text-brand-charcoal text-sm md:text-base group-hover:text-brand-green transition-colors">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
