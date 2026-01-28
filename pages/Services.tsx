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
                bgImage="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2670&auto=format&fit=crop"
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
                                className="group relative h-full perspective-2000"
                                onMouseMove={(e) => {
                                    const card = e.currentTarget;
                                    const rect = card.getBoundingClientRect();
                                    const x = e.clientX - rect.left;
                                    const y = e.clientY - rect.top;
                                    const centerX = rect.width / 2;
                                    const centerY = rect.height / 2;
                                    const rotateX = ((y - centerY) / centerY) * -8;
                                    const rotateY = ((x - centerX) / centerX) * 8;

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
                                <div className="card-3d-wrap h-full relative">
                                    <div className="relative h-full bg-gray-50/50 rounded-[3rem] p-8 md:p-10 transition-colors duration-500 hover:bg-white border border-gray-100/50 hover:border-brand-green/30 overflow-hidden flex flex-col z-10">

                                        {/* Mouse Glow Follower */}
                                        <div className="mouse-glow"></div>

                                        {/* Subtle Background Icon Watermark */}
                                        <div className="absolute -bottom-10 -right-10 w-48 h-48 text-brand-green/[0.03] transform rotate-12 transition-all duration-700 group-hover:text-brand-green/[0.08] group-hover:scale-125 group-hover:rotate-0 pointer-events-none">
                                            {React.cloneElement(getIcon(service.iconName), { className: "w-full h-full", strokeWidth: 1 })}
                                        </div>

                                        {/* Header: Icon & Number */}
                                        <div className="flex justify-between items-start mb-10 relative z-20 card-content-3d">
                                            <div className="w-20 h-20 rounded-2xl bg-white shadow-xl shadow-brand-green/10 flex items-center justify-center text-brand-green transition-all duration-500 group-hover:bg-brand-green group-hover:text-white group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-brand-green/40 icon-glow shimmer-effect">
                                                <div className="transform transition-transform duration-500 group-hover:rotate-[360deg]">
                                                    {getIcon(service.iconName)}
                                                </div>
                                            </div>
                                            <span className="text-6xl font-black text-gray-100 group-hover:text-brand-green/10 transition-colors duration-500 pointer-events-none select-none">
                                                0{idx + 1}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-grow space-y-4 relative z-20 card-content-3d">
                                            <h3 className="text-2xl font-bold text-brand-dark transition-colors duration-300 group-hover:text-brand-green">
                                                {service.title}
                                            </h3>
                                            <p className="text-brand-gray/80 text-base leading-relaxed font-medium group-hover:text-brand-gray transition-colors duration-300">
                                                {service.description}
                                            </p>
                                        </div>


                                        {/* Hover Accent Line */}
                                        <div className="absolute top-0 left-0 w-0 h-1 bg-brand-green transition-all duration-500 group-hover:w-full"></div>
                                    </div>
                                </div>

                                {/* Decorative Shadow Overlay */}
                                <div className="absolute inset-x-8 bottom-0 h-4 bg-brand-green/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
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
