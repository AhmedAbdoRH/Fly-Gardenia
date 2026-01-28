import React, { useEffect } from 'react';
import { Target, Eye, HandHeart, Quote, CheckCircle } from 'lucide-react';
import { ContentData } from '../types';
import { TypeWriter } from '../components/TypeWriter';
import { PageHero } from '../components/PageHero';

interface AboutProps {
    content: ContentData;
    lang: string;
}

export const About: React.FC<AboutProps> = ({ content, lang }) => {
    const t = content;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen">
            <PageHero
                title={t.nav.about}
                subtitle={t.about.mainText}
                bgImage="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2813&auto=format&fit=crop"
            />

            {/* About Content */}
            <section className="py-20 md:py-32 watercolor-bg">
                <div className="container mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                        {/* Text Column */}
                        <div className="w-full lg:w-5/12">
                            <h2 className="reveal-trigger text-3xl md:text-5xl lg:text-6xl font-black text-brand-charcoal mb-6 md:mb-10 leading-[1.1]">{t.about.title}</h2>

                            <div className="reveal-trigger prose prose-lg text-brand-gray leading-relaxed mb-8 md:mb-12">
                                <p className="font-semibold text-brand-charcoal text-lg md:text-xl mb-4">{t.about.mainText}</p>
                                <p className="text-base md:text-lg">{t.about.subText}</p>
                            </div>

                            <div className="flex flex-col gap-4 md:gap-6">
                                {/* Vision Card */}
                                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="p-2 bg-brand-light rounded-lg text-brand-green">
                                            <Eye className="w-6 h-6" />
                                        </div>
                                        <h3 className="font-bold text-lg text-brand-charcoal">{t.about.visionTitle}</h3>
                                    </div>
                                    <TypeWriter
                                        key={`vision-${lang}`}
                                        text={t.about.visionText}
                                        speed={25}
                                        className="text-sm text-brand-gray leading-relaxed"
                                    />
                                </div>

                                {/* Mission Card */}
                                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="p-2 bg-brand-light rounded-lg text-brand-accent">
                                            <Target className="w-6 h-6" />
                                        </div>
                                        <h3 className="font-bold text-lg text-brand-charcoal">{t.about.missionTitle}</h3>
                                    </div>
                                    <TypeWriter
                                        key={`mission-${lang}`}
                                        text={t.about.missionText}
                                        speed={25}
                                        className="text-sm text-brand-gray leading-relaxed"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="w-full lg:w-7/12 relative lg:pt-24 reveal-trigger stagger-2">
                            <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2813&auto=format&fit=crop"
                                    alt="Environmental Consulting"
                                    className="w-full h-[400px] md:h-[600px] object-cover"
                                />

                                <div className="md:absolute md:bottom-8 md:-left-8 z-20 bg-white p-6 md:p-8 rounded-none md:rounded-2xl shadow-none md:shadow-xl border-t md:border-t-0 md:border-l-8 border-brand-green w-full md:max-w-xs">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Quote className="text-brand-green fill-brand-green/20" size={24} />
                                    </div>
                                    <p className="text-brand-charcoal font-medium italic leading-relaxed text-sm md:text-base">
                                        "We believe that sustainability goes beyond regulatory compliance."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 md:py-32 bg-brand-dark text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>

                <div className="container mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6 reveal-trigger">
                        <div className="max-w-2xl">
                            <span className="text-brand-emerald font-bold tracking-[0.2em] uppercase text-xs md:text-sm block mb-4">{t.nav.about}</span>
                            <h2 className="text-3xl md:text-6xl font-black mb-4 md:mb-6">{t.values.title}</h2>
                            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">{t.values.description}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                        {t.values.items.map((val, idx) => (
                            <div key={idx} className={`glass-dark p-6 md:p-10 rounded-2xl md:rounded-3xl hover:bg-white/5 transition-all duration-300 reveal-trigger stagger-${(idx % 3) + 1}`}>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="p-3 bg-white/5 rounded-xl text-brand-emerald">
                                        <HandHeart className="w-6 h-6 md:w-8 md:h-8" />
                                    </div>
                                    <span className="text-3xl md:text-4xl font-black text-white/10">0{idx + 1}</span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold mb-3">{val.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm md:text-base">{val.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section className="py-20 md:py-32 bg-gray-50/50">
                <div className="container mx-auto">
                    <div className="w-full bg-gradient-to-br from-brand-charcoal via-brand-dark to-brand-charcoal text-white px-6 py-16 md:p-24 relative overflow-hidden flex flex-col justify-center rounded-[2.5rem]">
                        {/* Decorative Pattern Overlay */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

                        {/* Organic Background Blobs */}
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-green/20 rounded-full blur-[100px] pointer-events-none"></div>
                        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-brand-accent/20 rounded-full blur-[80px] pointer-events-none"></div>

                        <div className="relative z-10 reveal-trigger max-w-xl mx-auto lg:mx-0">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-12 relative inline-block">
                                {t.whyUs.title}
                                <div className="absolute -bottom-4 left-0 w-24 h-2 bg-brand-green rounded-full"></div>
                            </h2>
                            <ul className="grid grid-cols-1 gap-6">
                                {t.whyUs.items.map((item, idx) => (
                                    <li key={idx} className="group flex items-center gap-5 p-4 rounded-xl transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-white/10">
                                        <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0 group-hover:bg-brand-green group-hover:scale-110 transition-all duration-300">
                                            <CheckCircle className="w-6 h-6 text-brand-green group-hover:text-white transition-colors" />
                                        </div>
                                        <span className="text-lg md:text-xl font-medium text-gray-200 group-hover:text-white transition-colors">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
