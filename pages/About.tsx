import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Eye, Quote, CheckCircle, Users, Award, BookOpen, Briefcase } from 'lucide-react';
import { ContentData, ServiceItem } from '../types';
import { TypeWriter } from '../components/TypeWriter';
import { getIcon } from '../components/Icons';
import { PartnersSection } from '../components/PartnersSection';
import { CertificatesSection } from '../components/CertificatesSection';

interface AboutProps {
    content: ContentData;
    lang: string;
}

export const About: React.FC<AboutProps> = ({ content, lang }) => {
    const t = content;
    const [showServicesModal, setShowServicesModal] = useState(false);
    const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.substring(1);
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 300);
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <div className="min-h-screen">
            {/* New Hero with Logo */}
            <section className="relative pt-32 pb-8 md:pt-48 md:pb-12 watercolor-bg overflow-hidden">
                {/* Dynamic Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            rotate: [0, 45, 0],
                            opacity: [0.4, 0.6, 0.4]
                        }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#d4ff70]/20 rounded-full blur-[120px]"
                    />
                    <motion.div
                        animate={{
                            scale: [1.3, 1, 1.3],
                            rotate: [0, -45, 0],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 -right-32 w-[700px] h-[700px] bg-[#e6ffad]/15 rounded-full blur-[150px]"
                    />
                    <div className="absolute top-0 right-0 w-full h-full bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-30"></div>
                </div>

                <div className="container mx-auto relative z-10 text-center">
                    <div className="flex flex-col items-center justify-center reveal-trigger">
                        {/* New Logo Gardenia with enhanced effects */}
                        <div className="relative">
                            {/* Rotating Ring Effect - Slower and more prominent */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[-60px] md:inset-[-100px] border-[1.5px] border-[#aad546]/30 rounded-full border-dashed"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[-100px] md:inset-[-160px] border-[1px] border-[#d4ff70]/20 rounded-full border-dashed"
                            />

                            {/* Enhanced Central Glow - Slower pulse */}
                            <motion.div
                                animate={{
                                    scale: [1.5, 1.8, 1.5],
                                    opacity: [0.3, 0.5, 0.3]
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0 bg-[#d4ff70]/30 blur-[100px] rounded-full"
                            />

                            {/* Floating Logo Container - Slower and more dramatic */}
                            <motion.div
                                animate={{
                                    y: [0, -25, 0],
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="relative z-10"
                            >
                                <img
                                    src="/logo-gardenia.png"
                                    alt="Gardenia Logo"
                                    className="h-56 md:h-96 w-auto object-contain drop-shadow-[0_35px_60px_rgba(170,213,70,0.4)]"
                                />
                            </motion.div>

                            {/* Decorative Particles - Slower and larger */}
                            {[...Array(6)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-2.5 h-2.5 bg-[#d4ff70]/60 rounded-full blur-[1px]"
                                    animate={{
                                        x: [0, Math.cos(i * 60) * 220, 0],
                                        y: [0, Math.sin(i * 60) * 220, 0],
                                        opacity: [0, 0.8, 0],
                                        scale: [0, 2, 0]
                                    }}
                                    transition={{
                                        duration: 12 + i * 2,
                                        repeat: Infinity,
                                        delay: i * 1,
                                        ease: "easeInOut"
                                    }}
                                    style={{
                                        top: '50%',
                                        left: '50%',
                                        marginLeft: '-5px',
                                        marginTop: '-5px'
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* About Content */}
            <section className="pt-4 md:pt-6 pb-20 md:pb-32 watercolor-bg">
                <div className="container mx-auto relative z-10">
                    {/* Intro Text Section */}
                    <div className="flex flex-col items-center text-center mb-20 reveal-trigger">
                        <div className="max-w-4xl mx-auto space-y-8">
                            {t.about.mainText && (
                                <h2 className="text-3xl md:text-5xl font-black text-brand-charcoal mb-6 leading-tight">
                                    {t.about.mainText}
                                </h2>
                            )}
                            {t.about.tagline && (
                                <h3 className="text-xl md:text-2xl font-bold text-brand-green mb-4">
                                    {t.about.tagline}
                                </h3>
                            )}
                            <p className="text-xl md:text-2xl text-brand-gray leading-relaxed font-medium text-justify">
                                {t.about.subText}
                            </p>
                            {t.about.introText && (
                                <p className="text-lg md:text-xl text-brand-gray leading-relaxed text-justify">
                                    {t.about.introText}
                                </p>
                            )}
                            <a
                                href="#services"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href = '/#services';
                                }}
                                className="inline-block mt-6 px-8 py-4 bg-brand-green text-white font-bold rounded-full hover:bg-brand-emerald transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                {lang === 'ar' ? 'تعرف على خدماتنا' : 'Explore Our Services'}
                            </a>
                        </div>
                    </div>

                    {/* Vision & Mission Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto reveal-trigger stagger-1">
                        {/* Vision Card */}
                        <div className="group relative bg-white p-8 md:p-10 rounded-[2rem] shadow-2xl shadow-gray-200/60 transition-all duration-500 border border-brand-green/10 flex flex-col lg:flex-row gap-6 items-start h-full">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-brand-light to-transparent rounded-bl-[100%]"></div>
                            <div className="w-16 h-16 rounded-2xl bg-brand-green text-white flex items-center justify-center transition-all duration-500 shrink-0 shadow-lg scale-110 rotate-3 z-10">
                                <Eye className="w-8 h-8" strokeWidth={1.5} />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-4 tracking-tight">
                                    {t.about.visionTitle}
                                </h3>
                                <p className="text-brand-gray leading-relaxed text-lg font-medium text-justify">
                                    {t.about.visionText}
                                </p>
                            </div>
                        </div>

                        {/* Mission Card */}
                        <div className="group relative bg-[#1a1a1a] p-8 md:p-10 rounded-[2rem] shadow-2xl transition-all duration-500 border border-brand-emerald/20 text-white flex flex-col lg:flex-row gap-6 items-start h-full">
                            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-green/20 rounded-full blur-[80px] pointer-events-none"></div>
                            <div className="w-16 h-16 rounded-2xl bg-brand-emerald text-white flex items-center justify-center transition-all duration-500 shrink-0 shadow-2xl scale-110 -rotate-3 backdrop-blur-sm z-10">
                                <Target className="w-8 h-8" strokeWidth={1.5} />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                                    {t.about.missionTitle}
                                </h3>
                                <p className="text-gray-100 leading-relaxed text-lg font-medium text-justify">
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



                    {/* Dr. Asmaa Profile Section */}
                    {t.about.drAsmaaTitle && (
                        <div id="dr-asmaa" className="mt-16 max-w-6xl mx-auto reveal-trigger scroll-mt-24">
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

                                        <div className="mt-10">
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                                {[
                                                    {
                                                        src: "/صورة تذكارية لدكتور اسماء اثناء تواجدها امام احد المصانع.png",
                                                        alt: lang === 'ar' ? 'صورة ميدانية أمام أحد المصانع' : 'On-site photo at a facility'
                                                    },
                                                    {
                                                        src: "/صورة لدكتور اسماء اثناء تنفيذ احد المشاريع.png",
                                                        alt: lang === 'ar' ? 'صورة أثناء تنفيذ أحد المشاريع' : 'During project execution'
                                                    },
                                                    {
                                                        src: "/صورة لدكتور اسماء داخل احد الاجتماعات البيئية.png",
                                                        alt: lang === 'ar' ? 'صورة داخل أحد الاجتماعات البيئية' : 'Environmental meeting'
                                                    }
                                                ].map((img, i) => (
                                                    <div
                                                        key={i}
                                                        className="group relative overflow-hidden rounded-2xl border border-brand-green/15 bg-brand-light shadow-lg hover:shadow-2xl transition-all duration-500"
                                                    >
                                                        <div className="absolute inset-0 bg-gradient-to-br from-brand-green/10 via-transparent to-brand-emerald/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                                        <img
                                                            src={img.src}
                                                            alt={img.alt}
                                                            className={`w-full h-44 md:h-40 object-cover group-hover:scale-[1.04] transition-transform duration-700 ${i === 2 ? 'object-left' : ''}`}
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="mt-8 md:mt-10 rounded-[2rem] border border-brand-green/15 bg-brand-light/60 backdrop-blur-sm p-6 md:p-8 relative overflow-hidden">
                                                <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-green/10 rounded-full blur-[90px] pointer-events-none"></div>
                                                <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-brand-emerald/5 rounded-full blur-[90px] pointer-events-none"></div>

                                                <div className={`relative z-10 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                                                    <div className="mb-6">
                                                        <p className="text-base md:text-xl text-brand-green font-bold">
                                                            {lang === 'ar' ? 'أستاذ الهندسة الكيميائية والبيئية' : 'Professor of Chemical & Environmental Engineering'}
                                                        </p>
                                                    </div>

                                                    <div className="relative mb-6 md:mb-8">
                                                        <Quote className={`absolute -top-6 ${lang === 'ar' ? '-left-6' : '-right-6'} w-12 h-12 text-brand-green/10 ${lang === 'ar' ? '' : '-scale-x-100'}`} />
                                                        <p className="text-lg md:text-2xl text-brand-gray leading-relaxed font-medium italic relative z-10">
                                                            {lang === 'ar'
                                                                ? 'نعمل على تقديم حلول استشارية تجمع بين الدقة العلمية والخبرة العملية لدعم التنمية الصناعية المستدامة.'
                                                                : 'We work to provide consulting solutions that combine scientific accuracy with practical experience to support sustainable industrial development.'}
                                                        </p>
                                                    </div>

                                                    <div className={`flex flex-wrap gap-4 md:gap-6 ${lang === 'ar' ? 'justify-start flex-row-reverse' : ''}`}>
                                                        <div className="bg-white px-6 md:px-8 py-4 md:py-5 rounded-[1.75rem] shadow-sm border border-brand-green/10 flex items-center gap-4 hover:shadow-md transition-shadow relative overflow-hidden group/badge">
                                                            <div className="absolute inset-0 bg-brand-green/5 translate-y-full group-hover/badge:translate-y-0 transition-transform duration-300"></div>
                                                            <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center relative z-10">
                                                                <Award className="w-5 h-5 text-brand-green" />
                                                            </div>
                                                            <div className={`relative z-10 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                                                                <p className="text-[10px] text-brand-green font-black uppercase tracking-widest mb-0.5">
                                                                    {lang === 'ar' ? 'اعتماد دولي' : 'International Certification'}
                                                                </p>
                                                                <p className="font-black text-brand-charcoal">
                                                                    {lang === 'ar' ? 'مستشار وزير البيئة الأسبق' : 'Former Advisor to Minister'}
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div className="bg-white px-6 md:px-8 py-4 md:py-5 rounded-[1.75rem] shadow-sm border border-brand-green/10 flex items-center gap-4 hover:shadow-md transition-shadow">
                                                            <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center">
                                                                <CheckCircle className="w-5 h-5 text-brand-green" />
                                                            </div>
                                                            <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
                                                                <p className="text-xs text-brand-gray font-bold uppercase tracking-wider">
                                                                    {lang === 'ar' ? 'الخبرة العملية' : 'Expertise'}
                                                                </p>
                                                                <p className="font-black text-brand-charcoal">
                                                                    {lang === 'ar' ? '٢٨+ عاماً من الخبرة' : '28+ Years of Experience'}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Integrated Experts Section */}
                                        {t.about.expertsTitle && (
                                            <div className="mt-12 pt-12 border-t border-gray-100">
                                                <h4 className="text-2xl font-bold text-brand-charcoal mb-6 flex items-center gap-3">
                                                    <Users className="w-6 h-6 text-brand-green" />
                                                    {t.about.expertsTitle}
                                                </h4>
                                                <div className="grid grid-cols-1 gap-4">
                                                    {t.about.expertsItems?.map((item, idx) => (
                                                        <div key={idx} className="p-5 rounded-2xl bg-brand-light border border-brand-green/10 hover:border-brand-green transition-all duration-300">
                                                            <p className="text-brand-gray font-medium leading-relaxed">
                                                                {item}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Dr. Khaled Profile Section */}
                    {t.about.drKhaledTitle && (
                        <div id="eng-khaled" className="mt-16 max-w-6xl mx-auto reveal-trigger scroll-mt-24">
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
                                                    src="/eng khaled.png"
                                                    alt="Eng. Khaled Eid"
                                                    className="w-full h-full object-cover scale-110 translate-y-6 group-hover:scale-115 group-hover:translate-y-4 transition-transform duration-1000 ease-out relative z-10"
                                                />
                                            </div>
                                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-brand-green text-white px-6 py-2 rounded-full font-bold shadow-lg whitespace-nowrap z-20">
                                                {lang === 'ar' ? 'م/ خالد عيد' : 'Eng. Khaled Eid'}
                                            </div>
                                        </div>
                                        <div className="mt-12 w-full space-y-4">
                                            <div className="p-4 rounded-xl bg-brand-light border border-brand-green/20 flex items-center gap-4">
                                                <Award className="w-6 h-6 text-brand-green" />
                                                <span className="font-bold text-brand-charcoal text-sm">
                                                    {lang === 'ar' ? 'معتمد من نقابة المهندسين' : 'Syndicate of Engineers Certified'}
                                                </span>
                                            </div>
                                            <div className="p-4 rounded-xl bg-brand-light border border-brand-green/20 flex items-center gap-4">
                                                <Briefcase className="w-6 h-6 text-brand-green" />
                                                <span className="font-bold text-brand-charcoal text-sm">
                                                    {lang === 'ar' ? 'خبرة ٣٣+ سنة' : '33+ Years Experience'}
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
                                            {t.about.drKhaledTitle}
                                        </h3>
                                        <div className="space-y-4">
                                            {t.about.drKhaledBio?.map((item, idx) => (
                                                <div key={idx} className="flex gap-4 items-start group">
                                                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-green shrink-0"></div>
                                                    <p className="text-brand-gray text-lg leading-relaxed group-hover:text-brand-charcoal transition-colors">
                                                        {item}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-10">
                                            <div className="mt-8 md:mt-10 rounded-[2rem] border border-brand-green/15 bg-brand-light/60 backdrop-blur-sm p-6 md:p-8 relative overflow-hidden">
                                                <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-green/10 rounded-full blur-[90px] pointer-events-none"></div>
                                                <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-brand-emerald/5 rounded-full blur-[90px] pointer-events-none"></div>

                                                <div className={`relative z-10 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                                                    <div className="mb-6">
                                                        <p className="text-base md:text-xl text-brand-green font-bold">
                                                            {lang === 'ar' ? 'متخصص حماية من الحريق والأمان الصناعي' : 'Fire Protection & Industrial Safety Consultant'}
                                                        </p>
                                                    </div>

                                                    <div className="relative mb-6 md:mb-8">
                                                        <Quote className={`absolute -top-6 ${lang === 'ar' ? '-left-6' : '-right-6'} w-12 h-12 text-brand-green/10 ${lang === 'ar' ? '' : '-scale-x-100'}`} />
                                                        <p className="text-lg md:text-2xl text-brand-gray leading-relaxed font-medium italic relative z-10">
                                                            {lang === 'ar'
                                                                ? 'الأمان والحماية من الحريق هي أساس أي منشأة آمنة وفعالة. نعمل على تطبيق أعلى معايير السلامة الدولية.'
                                                                : 'Fire protection and safety are the foundation of any safe and effective facility. We implement the highest international safety standards.'}
                                                        </p>
                                                    </div>

                                                    <div className={`flex flex-wrap gap-4 md:gap-6 ${lang === 'ar' ? 'justify-start flex-row-reverse' : ''}`}>
                                                        <div className="bg-white px-6 md:px-8 py-4 md:py-5 rounded-[1.75rem] shadow-sm border border-brand-green/10 flex items-center gap-4 hover:shadow-md transition-shadow relative overflow-hidden group/badge">
                                                            <div className="absolute inset-0 bg-brand-green/5 translate-y-full group-hover/badge:translate-y-0 transition-transform duration-300"></div>
                                                            <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center relative z-10">
                                                                <Award className="w-5 h-5 text-brand-green" />
                                                            </div>
                                                            <div className={`relative z-10 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                                                                <p className="text-[10px] text-brand-green font-black uppercase tracking-widest mb-0.5">
                                                                    {lang === 'ar' ? 'خبرة عملية' : 'Practical Experience'}
                                                                </p>
                                                                <p className="font-black text-brand-charcoal">
                                                                    {lang === 'ar' ? '٣٣+ سنة متخصصة' : '33+ Years Specialized'}
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div className="bg-white px-6 md:px-8 py-4 md:py-5 rounded-[1.75rem] shadow-sm border border-brand-green/10 flex items-center gap-4 hover:shadow-md transition-shadow">
                                                            <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center">
                                                                <CheckCircle className="w-5 h-5 text-brand-green" />
                                                            </div>
                                                            <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
                                                                <p className="text-xs text-brand-gray font-bold uppercase tracking-wider">
                                                                    {lang === 'ar' ? 'الاعتماد' : 'Certification'}
                                                                </p>
                                                                <p className="font-black text-brand-charcoal">
                                                                    {lang === 'ar' ? 'نقابة المهندسين المصريين' : 'Syndicate Certified'}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Specializations & Expertise Grid */}
                                            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {[
                                                    {
                                                        title: lang === 'ar' ? 'أنظمة إنذار وإطفاء الحريق' : 'Fire Alarm & Firefighting Systems',
                                                        description: lang === 'ar' ? 'تصميم وتنفيذ أنظمة الكشف عن الحريق والإطفاء والإنذار' : 'Design & implementation of detection, extinguishing & alarm systems'
                                                    },
                                                    {
                                                        title: lang === 'ar' ? 'إدارة الأمان والسلامة' : 'Safety & Health Management',
                                                        description: lang === 'ar' ? 'وضع سياسات وخطط الأمان الصناعي (OHSAS 18001)' : 'Developing industrial safety policies & plans (OHSAS 18001)'
                                                    },
                                                    {
                                                        title: lang === 'ar' ? 'أنظمة الأمان والحماية' : 'Security Systems',
                                                        description: lang === 'ar' ? 'تصميم أنظمة الأمان المتقدمة والكاميرات المراقبة' : 'Advanced security systems & surveillance design'
                                                    },
                                                    {
                                                        title: lang === 'ar' ? 'التدقيق والامتثال' : 'Auditing & Compliance',
                                                        description: lang === 'ar' ? 'تقييم الامتثال للمعايير الدولية والقوانين المحلية' : 'Assessing compliance with international standards & local laws'
                                                    }
                                                ].map((spec, idx) => (
                                                    <div key={idx} className="p-4 rounded-2xl bg-white border border-brand-green/10 hover:border-brand-green/30 hover:shadow-lg transition-all group">
                                                        <h5 className="font-bold text-brand-green mb-2 text-sm md:text-base group-hover:text-brand-dark transition-colors">{spec.title}</h5>
                                                        <p className="text-xs md:text-sm text-brand-gray leading-relaxed">{spec.description}</p>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Major Projects & Achievements */}
                                            <div className="mt-8">
                                                <h4 className="text-xl font-bold text-brand-charcoal mb-6 flex items-center gap-3">
                                                    <div className="w-1.5 h-6 rounded-full bg-brand-green"></div>
                                                    {lang === 'ar' ? 'المشاريع البارزة والإنجازات' : 'Major Projects & Achievements'}
                                                </h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {[
                                                        {
                                                            name: lang === 'ar' ? 'مترو الأنفاق المصري' : 'Egyptian Metro',
                                                            role: lang === 'ar' ? 'استشاري أمان وحماية من الحريق' : 'Safety & Fire Protection Consultant'
                                                        },
                                                        {
                                                            name: lang === 'ar' ? 'الطرق السريعة والكباري' : 'Highways & Bridges',
                                                            role: lang === 'ar' ? 'تصميم وتقييم أنظمة الأمان' : 'Safety Systems Design & Assessment'
                                                        },
                                                        {
                                                            name: lang === 'ar' ? 'المنشآت الحكومية' : 'Government Facilities',
                                                            role: lang === 'ar' ? 'تطبيق معايير الأمان الدولية' : 'International Safety Standards Implementation'
                                                        },
                                                        {
                                                            name: lang === 'ar' ? 'هيئة النفق - رئيس الأنظمة الأمنية' : 'National Authority for Tunnels',
                                                            role: lang === 'ar' ? 'قيادة فريق الأمان لمدة ١٢ سنة' : 'Led Safety Team for 12 Years'
                                                        }
                                                    ].map((project, idx) => (
                                                        <div key={idx} className="p-4 rounded-2xl bg-brand-light border-l-4 border-brand-green hover:shadow-md transition-all">
                                                            <p className="font-bold text-brand-charcoal mb-1">{project.name}</p>
                                                            <p className="text-sm text-brand-green font-medium">{project.role}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Key Credentials */}
                                            <div className="mt-8">
                                                <h4 className="text-xl font-bold text-brand-charcoal mb-6 flex items-center gap-3">
                                                    <div className="w-1.5 h-6 rounded-full bg-brand-green"></div>
                                                    {lang === 'ar' ? 'الاعتمادات والشهادات' : 'Credentials & Certifications'}
                                                </h4>
                                                <div className="space-y-3">
                                                    {[
                                                        lang === 'ar' ? '✓ معتمد من نقابة المهندسين المصريين في أنظمة الأمان والحماية من الحريق' : '✓ Certified by Egyptian Syndicate of Engineers in Fire Safety & Security Systems',
                                                        lang === 'ar' ? '✓ مدقق معتمد IRCA في الصحة والأمان المهني (OHSAS 18001:2007)' : '✓ IRCA Certified Auditor in Occupational Health & Safety (OHSAS 18001:2007)',
                                                        lang === 'ar' ? '✓ تدريبات دولية متقدمة في لوحات التحكم بالحريق وأنظمة الدخان وأنظمة الإطفاء' : '✓ Advanced International Training: Fire Control Panels, Smoke Systems, Firefighting Equipment',
                                                        lang === 'ar' ? '✓ شراكة استراتيجية مع الدفاع المدني والجهات الحكومية' : '✓ Strategic Partnership with Civil Defense Authority & Government Agencies'
                                                    ].map((cred, idx) => (
                                                        <div key={idx} className="flex gap-3 p-3 rounded-lg bg-white border border-brand-green/10 text-sm md:text-base text-brand-charcoal">
                                                            <span className="text-brand-green font-bold flex-shrink-0">✓</span>
                                                            <span>{cred.replace('✓ ', '')}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Eng. Ayman Profile Section */}
                    {t.about.engAymanTitle && (
                        <div id="eng-ayman" className="mt-16 max-w-6xl mx-auto reveal-trigger scroll-mt-24">
                            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-brand-green/20 shadow-2xl relative overflow-hidden">
                                <div className="flex flex-col lg:flex-row gap-12 items-start">
                                    <div className="w-full lg:w-1/3 flex flex-col items-center">
                                        <div className="relative group">
                                            <div className="absolute inset-0 bg-brand-green/20 rounded-[2.5rem] rotate-6 group-hover:rotate-3 transition-transform duration-700"></div>
                                            <div className="absolute inset-0 bg-brand-dark/5 rounded-[2.5rem] -rotate-3 group-hover:rotate-0 transition-transform duration-700 delay-75"></div>

                                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl z-10">
                                                <div className="absolute inset-0 bg-gradient-to-br from-brand-light via-white to-brand-green/10"></div>
                                                <img
                                                    src="/Ayman Hassan Refaei.png"
                                                    alt="Eng. Ayman Hassan Refaei"
                                                    className="w-full h-full object-cover scale-110 translate-y-6 group-hover:scale-115 group-hover:translate-y-4 transition-transform duration-1000 ease-out relative z-10"
                                                />
                                            </div>
                                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-brand-green text-white px-6 py-2 rounded-full font-bold shadow-lg whitespace-nowrap z-20">
                                                {lang === 'ar' ? 'م/ أيمن حسن رفاعي' : 'Eng. Ayman Hassan Refaei'}
                                            </div>
                                        </div>
                                        <div className="mt-12 w-full space-y-4">
                                            <div className="p-4 rounded-xl bg-brand-light border border-brand-green/20 flex items-center gap-4">
                                                <Award className="w-6 h-6 text-brand-green" />
                                                <span className="font-bold text-brand-charcoal text-sm">
                                                    {lang === 'ar' ? 'خبير مشروعات النقل السككي' : 'Rail & Metro Projects Expert'}
                                                </span>
                                            </div>
                                            <div className="p-4 rounded-xl bg-brand-light border border-brand-green/20 flex items-center gap-4">
                                                <Briefcase className="w-6 h-6 text-brand-green" />
                                                <span className="font-bold text-brand-charcoal text-sm">
                                                    {lang === 'ar' ? 'خبرة ٢٦+ سنة' : '26+ Years Experience'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full lg:w-2/3">
                                        <h3 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-8 flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center">
                                                <BookOpen className="w-7 h-7 text-brand-green" />
                                            </div>
                                            {t.about.engAymanTitle}
                                        </h3>
                                        <div className="space-y-4">
                                            {t.about.engAymanBio?.map((item, idx) => (
                                                <div key={idx} className="flex gap-4 items-start group">
                                                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-green shrink-0"></div>
                                                    <p className="text-brand-gray text-lg leading-relaxed group-hover:text-brand-charcoal transition-colors">
                                                        {item}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-10">
                                            <div className="mt-8 md:mt-10 rounded-[2rem] border border-brand-green/15 bg-brand-light/60 backdrop-blur-sm p-6 md:p-8 relative overflow-hidden">
                                                <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-green/10 rounded-full blur-[90px] pointer-events-none"></div>
                                                <div className="relative z-10">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        {[
                                                            {
                                                                title: lang === 'ar' ? 'مشروعات عالمية' : 'Global Projects',
                                                                desc: lang === 'ar' ? 'مترو دبي، ترام دبي، مترو الدوحة' : 'Dubai Metro, Dubai Tram, Doha Metro'
                                                            },
                                                            {
                                                                title: lang === 'ar' ? 'المشروعات القومية' : 'National Projects',
                                                                desc: lang === 'ar' ? 'مترو القاهرة الخط ٣ و ٤' : 'Greater Cairo Metro Lines 3 & 4'
                                                            }
                                                        ].map((item, i) => (
                                                            <div key={i} className="bg-white p-4 rounded-2xl shadow-sm border border-brand-green/10">
                                                                <h4 className="font-bold text-brand-green text-sm mb-1">{item.title}</h4>
                                                                <p className="text-brand-gray text-xs">{item.desc}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Eng. Ahmed Profile Section */}
                    {t.about.engAhmedTitle && (
                        <div id="eng-ahmed" className="mt-16 max-w-6xl mx-auto reveal-trigger scroll-mt-24">
                            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-brand-green/20 shadow-2xl relative overflow-hidden">
                                <div className="flex flex-col lg:flex-row gap-12 items-start">
                                    <div className="w-full lg:w-1/3 flex flex-col items-center">
                                        <div className="relative group">
                                            <div className="absolute inset-0 bg-brand-green/20 rounded-[2.5rem] rotate-6 group-hover:rotate-3 transition-transform duration-700"></div>
                                            <div className="absolute inset-0 bg-brand-dark/5 rounded-[2.5rem] -rotate-3 group-hover:rotate-0 transition-transform duration-700 delay-75"></div>

                                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl z-10">
                                                <div className="absolute inset-0 bg-gradient-to-br from-brand-light via-white to-brand-green/10"></div>
                                                <img
                                                    src="/Ahmed Mohamed Mehesen.png"
                                                    alt="Eng. Ahmed Mohamed Mehesen"
                                                    className="w-full h-full object-cover scale-110 translate-y-6 group-hover:scale-115 group-hover:translate-y-4 transition-transform duration-1000 ease-out relative z-10"
                                                />
                                            </div>
                                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-brand-green text-white px-6 py-2 rounded-full font-bold shadow-lg whitespace-nowrap z-20">
                                                {lang === 'ar' ? 'م/ أحمد محمد محيسن' : 'Eng. Ahmed Mohamed Mehesen'}
                                            </div>
                                        </div>
                                        <div className="mt-12 w-full space-y-4">
                                            <div className="p-4 rounded-xl bg-brand-light border border-brand-green/20 flex items-center gap-4">
                                                <Award className="w-6 h-6 text-brand-green" />
                                                <span className="font-bold text-brand-charcoal text-sm">
                                                    {lang === 'ar' ? 'أخصائي دعم فني MEP' : 'MEP Technical Specialist'}
                                                </span>
                                            </div>
                                            <div className="p-4 rounded-xl bg-brand-light border border-brand-green/20 flex items-center gap-4">
                                                <Briefcase className="w-6 h-6 text-brand-green" />
                                                <span className="font-bold text-brand-charcoal text-sm">
                                                    {lang === 'ar' ? 'خبرة ٢٠+ سنة' : '20+ Years Experience'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full lg:w-2/3">
                                        <h3 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-8 flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center">
                                                <BookOpen className="w-7 h-7 text-brand-green" />
                                            </div>
                                            {t.about.engAhmedTitle}
                                        </h3>
                                        <div className="space-y-4">
                                            {t.about.engAhmedBio?.map((item, idx) => (
                                                <div key={idx} className="flex gap-4 items-start group">
                                                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-green shrink-0"></div>
                                                    <p className="text-brand-gray text-lg leading-relaxed group-hover:text-brand-charcoal transition-colors">
                                                        {item}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-10">
                                            <div className="mt-8 md:mt-10 rounded-[2rem] border border-brand-green/15 bg-brand-light/60 backdrop-blur-sm p-6 md:p-8 relative overflow-hidden">
                                                <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-brand-emerald/5 rounded-full blur-[90px] pointer-events-none"></div>
                                                <div className="relative z-10">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        {[
                                                            {
                                                                title: lang === 'ar' ? 'البنية التحتية' : 'Infrastructure',
                                                                desc: lang === 'ar' ? 'محطات المعالجة، شبكات المياه، أنظمة RO' : 'Treatment Plants, Water Networks, RO Systems'
                                                            },
                                                            {
                                                                title: lang === 'ar' ? 'دعم المشروعات' : 'Project Support',
                                                                desc: lang === 'ar' ? 'مستودع بدر للقطار الخفيف، جامعة فيصل' : 'LRT Badr Depot, Faisal University'
                                                            }
                                                        ].map((item, i) => (
                                                            <div key={i} className="bg-white p-4 rounded-2xl shadow-sm border border-brand-green/10">
                                                                <h4 className="font-bold text-brand-green text-sm mb-1">{item.title}</h4>
                                                                <p className="text-brand-gray text-xs">{item.desc}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Eng. Bassam Profile Section */}
                    {t.about.engBassamTitle && (
                        <div id="eng-bassam" className="mt-16 max-w-6xl mx-auto reveal-trigger scroll-mt-24">
                            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-brand-green/20 shadow-2xl relative overflow-hidden">
                                <div className="flex flex-col lg:flex-row gap-12 items-start">
                                    <div className="w-full lg:w-1/3 flex flex-col items-center">
                                        <div className="relative group">
                                            <div className="absolute inset-0 bg-brand-green/20 rounded-[2.5rem] rotate-6 group-hover:rotate-3 transition-transform duration-700"></div>
                                            <div className="absolute inset-0 bg-brand-dark/5 rounded-[2.5rem] -rotate-3 group-hover:rotate-0 transition-transform duration-700 delay-75"></div>

                                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl z-10">
                                                <div className="absolute inset-0 bg-gradient-to-br from-brand-light via-white to-brand-green/10"></div>
                                                <img
                                                    src="/eng bassam.png"
                                                    alt="Eng. Bassam Soultan"
                                                    className="w-full h-full object-cover scale-110 translate-y-6 group-hover:scale-115 group-hover:translate-y-4 transition-transform duration-1000 ease-out relative z-10"
                                                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/logo-gardenia.png'; }}
                                                />
                                            </div>
                                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-brand-green text-white px-6 py-2 rounded-full font-bold shadow-lg whitespace-nowrap z-20">
                                                {lang === 'ar' ? 'م/ بسام سلطان فريد' : 'Eng. Bassam Soultan'}
                                            </div>
                                        </div>
                                        <div className="mt-12 w-full space-y-4">
                                            <div className="p-4 rounded-xl bg-brand-light border border-brand-green/20 flex items-center gap-4">
                                                <Award className="w-6 h-6 text-brand-green" />
                                                <span className="font-bold text-brand-charcoal text-sm">
                                                    {lang === 'ar' ? 'استشاري هندسة قوى كهربائية' : 'Electrical Power Consultant'}
                                                </span>
                                            </div>
                                            <div className="p-4 rounded-xl bg-brand-light border border-brand-green/20 flex items-center gap-4">
                                                <Briefcase className="w-6 h-6 text-brand-green" />
                                                <span className="font-bold text-brand-charcoal text-sm">
                                                    {lang === 'ar' ? 'خبرة ١٧+ سنة' : '17+ Years Experience'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full lg:w-2/3">
                                        <h3 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-8 flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center">
                                                <BookOpen className="w-7 h-7 text-brand-green" />
                                            </div>
                                            {t.about.engBassamTitle}
                                        </h3>
                                        <div className="space-y-4">
                                            {t.about.engBassamBio?.map((item, idx) => (
                                                <div key={idx} className="flex gap-4 items-start group">
                                                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-green shrink-0"></div>
                                                    <p className="text-brand-gray text-lg leading-relaxed group-hover:text-brand-charcoal transition-colors">
                                                        {item}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-10">
                                            <div className="mt-8 md:mt-10 rounded-[2rem] border border-brand-green/15 bg-brand-light/60 backdrop-blur-sm p-6 md:p-8 relative overflow-hidden">
                                                <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-brand-emerald/5 rounded-full blur-[90px] pointer-events-none"></div>
                                                <div className="relative z-10">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        {[
                                                            {
                                                                title: lang === 'ar' ? 'مجال التخصص' : 'Area of Expertise',
                                                                desc: lang === 'ar' ? 'محطات المحولات، شبكات الجهد المتوسط، أنظمة الجر' : 'Substations, MV Networks, Traction Systems'
                                                            },
                                                            {
                                                                title: lang === 'ar' ? 'مشروعات قومية' : 'National Projects',
                                                                desc: lang === 'ar' ? 'مترو القاهرة الخط ٣' : 'Greater Cairo Metro Line 3'
                                                            }
                                                        ].map((item, i) => (
                                                            <div key={i} className="bg-white p-4 rounded-2xl shadow-sm border border-brand-green/10">
                                                                <h4 className="font-bold text-brand-green text-sm mb-1">{item.title}</h4>
                                                                <p className="text-brand-gray text-xs">{item.desc}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
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
            )
            }

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

            <PartnersSection lang={lang} />
            <CertificatesSection lang={lang} />
        </div >
    );
};
