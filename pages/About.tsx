import React, { useEffect, useState } from 'react';
import { Target, Eye, Quote, CheckCircle, Users, Award, BookOpen, Briefcase } from 'lucide-react';
import { ContentData, ServiceItem } from '../types';
import { TypeWriter } from '../components/TypeWriter';
import { PageHero } from '../components/PageHero';
import { getIcon } from '../components/Icons';

interface AboutProps {
    content: ContentData;
    lang: string;
}

export const About: React.FC<AboutProps> = ({ content, lang }) => {
    const t = content;
    const [showServicesModal, setShowServicesModal] = useState(false);
    const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen">
            <PageHero
                title={
                    <img
                        src="/logo-full.png"
                        alt="Gardenia"
                        className="h-32 md:h-48 w-auto mx-auto object-contain drop-shadow-2xl animate-fade-up"
                    />
                }
                bgImage="/about-bg.png"
                titleTop
            />

            {/* About Content */}
            <section className="pt-10 md:pt-16 pb-20 md:pb-32 watercolor-bg">
                <div className="container mx-auto relative z-10">
                    {/* Intro Text Section */}
                    <div className="flex flex-col items-center text-center mb-20 reveal-trigger">
                        <div className="max-w-4xl mx-auto space-y-8">
                            <p className="text-2xl md:text-4xl font-bold text-brand-charcoal leading-tight">
                                {t.about.mainText}
                            </p>
                            <div className="w-24 h-1 bg-brand-green mx-auto rounded-full"></div>
                            <p className="text-xl md:text-2xl text-brand-gray leading-relaxed font-medium">
                                {t.about.subText}
                            </p>

                            <div className="mt-8 flex justify-center">
                                <button onClick={() => setShowServicesModal(true)} className="inline-flex items-center gap-3 bg-brand-green text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all">
                                    {lang === 'ar' ? 'تعرف على خدماتنا' : 'Explore our services'}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Vision & Mission Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto reveal-trigger stagger-1">
                        {/* Vision Card */}
                        <div className="group relative bg-white p-8 md:p-10 rounded-[2rem] shadow-2xl shadow-gray-200/60 transition-all duration-500 border border-brand-green/10 overflow-hidden flex flex-col md:flex-row gap-6 items-start">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-brand-light to-transparent rounded-bl-[100%]"></div>
                            <div className="w-16 h-16 rounded-2xl bg-brand-green text-white flex items-center justify-center transition-all duration-500 shrink-0 shadow-lg scale-110 rotate-3 z-10">
                                <Eye className="w-8 h-8" strokeWidth={1.5} />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-4 tracking-tight">
                                    {t.about.visionTitle}
                                </h3>
                                <p className="text-brand-gray leading-relaxed text-lg font-medium">
                                    {t.about.visionText}
                                </p>
                            </div>
                        </div>

                        {/* Mission Card */}
                        <div className="group relative bg-[#1a1a1a] p-8 md:p-10 rounded-[2rem] shadow-2xl transition-all duration-500 border border-brand-emerald/20 overflow-hidden text-white flex flex-col md:flex-row gap-6 items-start">
                            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-green/20 rounded-full blur-[80px] pointer-events-none"></div>
                            <div className="w-16 h-16 rounded-2xl bg-brand-emerald text-white flex items-center justify-center transition-all duration-500 shrink-0 shadow-2xl scale-110 -rotate-3 backdrop-blur-sm z-10">
                                <Target className="w-8 h-8" strokeWidth={1.5} />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                                    {t.about.missionTitle}
                                </h3>
                                <p className="text-gray-100 leading-relaxed text-lg font-medium">
                                    {t.about.missionText}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Policies & Objectives Section */}
                    {t.about.policiesTitle && (
                        <div className="mt-20 max-w-6xl mx-auto reveal-trigger">
                            <div className="bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-brand-green/20 shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-green to-brand-emerald"></div>
                                <h3 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-8 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center">
                                        <CheckCircle className="w-7 h-7 text-brand-green" />
                                    </div>
                                    {t.about.policiesTitle}
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {t.about.policiesItems?.map((item, idx) => (
                                        <div key={idx} className="flex gap-4 items-start group">
                                            <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-green shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                                            <p className="text-brand-gray text-lg leading-relaxed font-medium group-hover:text-brand-charcoal transition-colors">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                    {/* Specializations Section */}
                    {t.about.specializationsTitle && (
                        <div className="mt-16 max-w-6xl mx-auto reveal-trigger">
                            <div className="bg-brand-charcoal text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full blur-[80px] pointer-events-none"></div>
                                <h3 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-brand-green/20 flex items-center justify-center">
                                        <Target className="w-7 h-7 text-brand-green" />
                                    </div>
                                    {t.about.specializationsTitle}
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                    {t.about.specializationsItems?.map((item, idx) => (
                                        <div key={idx} className="flex gap-4 items-start group">
                                            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-green shrink-0"></div>
                                            <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Added Value Section */}
                    {t.about.addedValueTitle && (
                        <div className="mt-16 max-w-6xl mx-auto reveal-trigger">
                            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl relative overflow-hidden">
                                <h3 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-8 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-brand-emerald/10 flex items-center justify-center">
                                        <Quote className="w-7 h-7 text-brand-emerald" />
                                    </div>
                                    {t.about.addedValueTitle}
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {t.about.addedValueItems?.map((item, idx) => (
                                        <div key={idx} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-emerald/30 hover:shadow-lg transition-all duration-300">
                                            <p className="text-brand-gray text-lg leading-relaxed font-medium">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Experts Section */}
                    {t.about.expertsTitle && (
                        <div className="mt-16 max-w-6xl mx-auto reveal-trigger">
                            <div className="bg-brand-dark text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-green to-brand-emerald"></div>
                                <h3 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-brand-green/20 flex items-center justify-center">
                                        <Users className="w-7 h-7 text-brand-green" />
                                    </div>
                                    {t.about.expertsTitle}
                                </h3>
                                <p className="text-xl text-gray-300 mb-10 leading-relaxed font-medium">
                                    {t.about.expertsIntro}
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {t.about.expertsItems?.map((item, idx) => (
                                        <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-green/40 hover:bg-white/10 transition-all duration-300">
                                            <p className="text-gray-200 leading-relaxed">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Dr. Asmaa Profile Section */}
                    {t.about.drAsmaaTitle && (
                        <div className="mt-16 max-w-6xl mx-auto reveal-trigger">
                            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-brand-green/20 shadow-2xl relative overflow-hidden">
                                <div className="flex flex-col lg:flex-row gap-12 items-start">
                                    {/* Profile Image/Badge */}
                                    <div className="w-full lg:w-1/3 flex flex-col items-center">
                                        <div className="relative group">
                                            {/* Animated background frames */}
                                            <div className="absolute inset-0 bg-brand-green/20 rounded-[2.5rem] rotate-6 group-hover:rotate-3 transition-transform duration-700"></div>
                                            <div className="absolute inset-0 bg-brand-dark/5 rounded-[2.5rem] -rotate-3 group-hover:rotate-0 transition-transform duration-700 delay-75"></div>
                                            
                                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl z-10">
                                                {/* Premium Background for the Photo */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-brand-light via-white to-brand-green/10"></div>
                                                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-green/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                                                
                                                {/* Abstract Decorative Lines */}
                                                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                                                    <div className="absolute top-10 left-10 w-full h-full border-2 border-brand-green rounded-full"></div>
                                                </div>

                                                <img 
                                                    src="/Dr. Asmaa Hammouda.png" 
                                                    alt="Dr. Asmaa Hammouda" 
                                                    className="w-full h-full object-cover scale-110 translate-y-6 group-hover:scale-115 group-hover:translate-y-4 transition-transform duration-1000 ease-out relative z-10"
                                                />
                                            </div>
                                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-brand-green text-white px-6 py-2 rounded-full font-bold shadow-lg whitespace-nowrap z-20">
                                                {lang === 'ar' ? 'أ.د/ أسماء حمودة' : 'Prof. Dr. Asmaa Hammouda'}
                                            </div>
                                        </div>
                                        <div className="mt-12 w-full space-y-4">
                                            <div className="p-4 rounded-xl bg-brand-light border border-brand-green/20 flex items-center gap-4">
                                                <Award className="w-6 h-6 text-brand-green" />
                                                <span className="font-bold text-brand-charcoal text-sm">
                                                    {lang === 'ar' ? 'استشاري معتمد (EEAA)' : 'Certified Consultant (EEAA)'}
                                                </span>
                                            </div>
                                            <div className="p-4 rounded-xl bg-brand-light border border-brand-green/20 flex items-center gap-4">
                                                <Briefcase className="w-6 h-6 text-brand-green" />
                                                <span className="font-bold text-brand-charcoal text-sm">
                                                    {lang === 'ar' ? 'استشاري مهندس (نقابة المهندسين)' : 'Consultant Engineer'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bio Content */}
                                    <div className="w-full lg:w-2/3">
                                        <h3 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-8 flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center">
                                                <BookOpen className="w-7 h-7 text-brand-green" />
                                            </div>
                                            {t.about.drAsmaaTitle}
                                        </h3>
                                        <div className="space-y-4">
                                            {t.about.drAsmaaBio?.map((item, idx) => (
                                                <div key={idx} className="flex gap-4 items-start group">
                                                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-green shrink-0"></div>
                                                    <p className="text-brand-gray text-lg leading-relaxed group-hover:text-brand-charcoal transition-colors">
                                                        {item}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Methodology Section */}
            <section className="py-12 md:py-16 bg-white">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto text-center reveal-trigger">
                        <h3 className="text-2xl md:text-4xl font-bold text-brand-charcoal mb-4">{t.about.methodologyTitle}</h3>
                        <p className="text-lg md:text-xl text-brand-gray leading-relaxed">{t.about.methodologyText}</p>
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {t.values.items.map((val, idx) => (
                            <div key={idx} className={`group relative bg-[#1c1c1c] p-8 md:p-10 rounded-[2rem] border border-brand-emerald/30 shadow-2xl shadow-brand-emerald/15 hover:border-brand-emerald/60 hover:shadow-brand-emerald/30 hover:-translate-y-2 transition-all duration-700 overflow-hidden reveal-trigger stagger-${(idx % 3) + 1}`}>
                                {/* Premium Layered Glows */}
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-emerald/[0.04] via-transparent to-brand-green/[0.06] pointer-events-none"></div>
                                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-emerald/[0.15] rounded-full blur-[80px] pointer-events-none group-hover:bg-brand-emerald/[0.25] transition-all duration-700 animate-pulse-slow"></div>
                                <div className="absolute -top-24 -left-24 w-60 h-60 bg-brand-green/[0.08] rounded-full blur-[70px] pointer-events-none group-hover:bg-brand-green/[0.15] transition-all duration-700"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md text-white flex items-center justify-center border border-white/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20">
                                            {getIcon(val.iconName, "w-7 h-7 text-white")}
                                        </div>
                                        <span className="text-4xl font-black text-white/[0.1] group-hover:text-white/[0.2] transition-colors duration-500">0{idx + 1}</span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-brand-emerald mb-4 tracking-tight group-hover:text-white transition-colors">{val.title}</h3>
                                    <p className="text-gray-200 leading-relaxed text-base group-hover:text-white transition-colors duration-300">{val.description}</p>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-emerald via-brand-green to-transparent transform scale-x-100 group-hover:h-2 transition-all duration-500 origin-left"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Services Modal (triggered from CTA) */}
            {showServicesModal && (
                <div className="fixed inset-0 z-50 flex items-start justify-center p-6 overflow-auto bg-black/60">
                    <div className="bg-white w-full max-w-5xl rounded-2xl p-6 md:p-10">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-2xl font-bold">{lang === 'ar' ? 'خدمات جاردينيا' : 'Gardenia Services'}</h3>
                            <div className="flex items-center gap-2">
                                <button onClick={() => { setShowServicesModal(false); setSelectedService(null); }} className="text-sm text-gray-500">{lang === 'ar' ? 'إغلاق' : 'Close'}</button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {t.services.items.map((svc, i) => (
                                <button key={i} onClick={() => setSelectedService(svc)} className="group relative overflow-hidden rounded-lg border border-gray-200 p-4 text-left hover:shadow-lg transition-all flex gap-4 items-start">
                                    <div className="w-24 h-24 rounded-md bg-gray-100 flex-shrink-0 overflow-hidden">
                                        <img src={`/1/service-${i + 1}.jpg`} alt={svc.title} className="w-full h-full object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/1/service-placeholder.jpg'; }} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-lg mb-1">{svc.title}</h4>
                                        <p className="text-sm text-brand-gray">{svc.description}</p>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {selectedService && (
                            <div className="mt-6 bg-gray-50 rounded-lg p-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="text-xl font-bold">{selectedService.title}</h4>
                                        <p className="mt-3 text-brand-gray">{selectedService.description}</p>
                                    </div>
                                    <button onClick={() => setSelectedService(null)} className="text-sm text-gray-600">{lang === 'ar' ? 'إغلاق' : 'Close'}</button>
                                </div>
                                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <img src={`/1/service-${t.services.items.indexOf(selectedService) + 1}-detail.jpg`} alt="detail" className="w-full h-48 object-cover rounded-md" onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/1/service-placeholder.jpg'; }} />
                                    <div className="p-4">
                                        <p className="text-brand-gray">{selectedService.description}</p>
                                        <ul className="mt-4 list-disc list-inside text-sm text-brand-gray">
                                            <li>{lang === 'ar' ? 'خدمة عملية ومقاسة' : 'Practical, measurable service'}</li>
                                            <li>{lang === 'ar' ? 'تقارير قابلة للاعتماد' : 'Accreditable reports'}</li>
                                            <li>{lang === 'ar' ? 'دعم فني ومتابعة' : 'Technical support and follow-up'}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

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
