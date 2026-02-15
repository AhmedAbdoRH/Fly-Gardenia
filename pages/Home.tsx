import React, { useState, useEffect, useRef } from 'react';
import { Hero } from '../components/Hero';
import { getIcon } from '../components/Icons';
import { Mail, Phone, CheckCircle, Target, Eye, HandHeart, ArrowRight, Quote, Building2, Award } from 'lucide-react';
import { TypeWriter } from '../components/TypeWriter';
import { ContentData } from '../types';
import { Link } from 'react-router-dom';
import { CONTENT } from '../constants';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface HomeProps {
    content: ContentData;
    lang: string;
}

const ProjectCard = ({ project, idx, variants, lang }: { project: any, idx: number, variants: any, lang: string }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            variants={variants}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="group relative overflow-hidden rounded-[2.5rem] h-[350px] md:h-[450px] shadow-2xl bg-white border-4 border-white cursor-pointer"
        >
            {/* Background Image Layer */}
            <motion.div
                style={{
                    transformStyle: "preserve-3d",
                    transform: "translateZ(20px)",
                }}
                className="absolute inset-0 z-0"
            >
                <img
                    src={project.image || `/studies/study-${idx + 1}.png`}
                    alt={project.name}
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                />
                {/* Advanced Gradient Overlay - Darkened with extra depth */}
                <div className="absolute inset-0 bg-black/40 transition-colors duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/90 to-transparent opacity-95 transition-opacity duration-700"></div>
                <div className="absolute inset-0 bg-brand-green/20 mix-blend-multiply opacity-30 transition-opacity duration-700"></div>
            </motion.div>

            {/* Content Layer */}
            <div 
                style={{
                    transform: "translateZ(60px)",
                }}
                className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-30"
            >
                {/* Project Badge */}
                <div className="mb-4 flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-brand-green/90 backdrop-blur-md text-[10px] font-black text-white uppercase tracking-widest">
                        {lang === 'ar' ? 'دراسة حالة' : 'Case Study'}
                    </span>
                    <div className="h-[1px] w-8 bg-white/30"></div>
                </div>

                {/* Project Title */}
                <motion.h3 
                    className="text-white font-black text-2xl md:text-3xl leading-tight mb-4 drop-shadow-lg"
                >
                    {project.name}
                </motion.h3>

                {/* Project Details (Always Visible) */}
                <div className="overflow-visible">
                    <div className="translate-y-0">
                        <p className="text-white/80 text-base md:text-lg font-medium mb-6 line-clamp-2">
                            {project.client}
                        </p>
                        
                        {/* Action Link */}
                        <div className="flex items-center gap-3 text-brand-green font-black text-sm uppercase tracking-tighter">
                            <span>{lang === 'ar' ? 'تفاصيل المشروع' : 'Project Details'}</span>
                            <div className="w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                                <ArrowRight size={18} className={lang === 'ar' ? 'rotate-180' : ''} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Premium Corner Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        </motion.div>
    );
};

export const Home: React.FC<HomeProps> = ({ content: t, lang }) => {
    const [projectIndex, setProjectIndex] = useState(0);
    const allProjects = t.projects.projectLists?.[0]?.projects || [];
    const totalGroups = Math.ceil(allProjects.length / 4);

    useEffect(() => {
        if (totalGroups <= 1) return;
        
        const interval = setInterval(() => {
            setProjectIndex((prev) => (prev + 1) % totalGroups);
        }, 6000); // Change every 6 seconds

        return () => clearInterval(interval);
    }, [totalGroups]);

    const displayedProjects = allProjects.slice(projectIndex * 4, (projectIndex * 4) + 4);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        },
        exit: {
            opacity: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    };

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            y: 30,
            scale: 0.95
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.215, 0.61, 0.355, 1]
            }
        },
        exit: { 
            opacity: 0, 
            y: -20,
            scale: 0.95,
            transition: {
                duration: 0.4
            }
        }
    };

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
                        <p className="text-lg md:text-xl text-brand-gray leading-relaxed mb-10 reveal-trigger stagger-1">
                            {t.about.subText}
                        </p>
                        <Link
                            to="/services"
                            className="inline-flex items-center gap-3 bg-brand-green text-white px-10 py-4 rounded-full font-bold hover:scale-105 hover:shadow-xl hover:shadow-brand-green/20 transition-all reveal-trigger stagger-2"
                        >
                            {lang === 'ar' ? 'تعرف على خدماتنا' : 'Explore Our Services'}
                            <ArrowRight size={22} className={lang === 'ar' ? 'rotate-180' : ''} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Leadership Section - Dr. Asmaa Highlight */}
            <section className="py-24 md:py-32 bg-brand-light relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-green/5 to-transparent"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-green/10 rounded-full blur-[100px]"></div>

                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 max-w-6xl mx-auto">
                        {/* Image Side */}
                        <div className="w-full lg:w-5/12 flex justify-center reveal-trigger">
                            <div className="relative group">
                                {/* Animated background frames */}
                                <div className="absolute inset-0 bg-brand-green/20 rounded-[3rem] rotate-6 group-hover:rotate-3 transition-transform duration-700"></div>
                                <div className="absolute inset-0 bg-brand-dark/5 rounded-[3rem] -rotate-3 group-hover:rotate-0 transition-transform duration-700 delay-75"></div>
                                
                                <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-[450px] md:h-[450px] rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl z-10">
                                    {/* Premium Background for the Photo */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-brand-light via-white to-brand-green/10"></div>
                                    <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-brand-green/10 rounded-full blur-3xl -mr-16 -mt-16 md:-mr-20 md:-mt-20"></div>
                                    <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-brand-emerald/5 rounded-full blur-2xl -ml-8 -mb-8 md:-ml-10 md:-mb-10"></div>
                                    
                                    {/* Abstract Decorative Lines */}
                                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                                        <div className="absolute top-10 left-10 w-full h-full border-2 border-brand-green rounded-full"></div>
                                        <div className="absolute top-20 left-20 w-full h-full border-2 border-brand-green rounded-full"></div>
                                    </div>

                                    <img 
                                        src="/Dr. Asmaa Hammouda.png" 
                                        alt="Dr. Asmaa Hammouda" 
                                        className="w-full h-full object-cover scale-110 translate-y-6 group-hover:scale-115 group-hover:translate-y-4 transition-transform duration-1000 ease-out relative z-10"
                                    />
                                </div>
                            </div>
                        </div>
                        
                        {/* Content Side */}
                        <div className={`w-full lg:w-7/12 reveal-trigger ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                            <div className={`flex items-center gap-3 mb-6 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                                <div className="w-16 h-[2px] bg-brand-green"></div>
                                <span className="text-brand-green font-black tracking-widest uppercase text-xs md:text-sm">
                                    {lang === 'ar' ? 'قيادة علمية خبيرة' : 'Expert Scientific Leadership'}
                                </span>
                            </div>
                            
                            <div className="mb-8">
                                <h2 className="text-4xl md:text-6xl font-black text-brand-dark mb-2 leading-[1.1]">
                                    {lang === 'ar' ? 'أ.د/ أسماء حمودة' : 'Prof. Dr. Asmaa Hammouda'}
                                </h2>
                                <p className="text-xl md:text-2xl text-brand-green font-bold">
                                    {lang === 'ar' ? 'أستاذ الهندسة الكيميائية والبيئية' : 'Professor of Chemical & Environmental Engineering'}
                                </p>
                            </div>
                            
                            <div className="relative mb-12">
                                <Quote className={`absolute -top-8 ${lang === 'ar' ? '-left-8' : '-right-8'} w-16 h-16 text-brand-green/10 ${lang === 'ar' ? '' : '-scale-x-100'}`} />
                                <p className="text-2xl md:text-3xl text-brand-gray leading-relaxed font-medium italic relative z-10">
                                    {lang === 'ar' 
                                        ? 'نعمل على تقديم حلول استشارية تجمع بين الدقة العلمية والخبرة العملية لدعم التنمية الصناعية المستدامة.'
                                        : 'We work to provide consulting solutions that combine scientific accuracy with practical experience to support sustainable industrial development.'}
                                </p>
                            </div>
                            
                            <div className={`flex flex-wrap gap-6 mb-12 ${lang === 'ar' ? 'justify-start flex-row-reverse' : ''}`}>
                                <div className="bg-white px-8 py-5 rounded-[2rem] shadow-sm border border-brand-green/10 flex items-center gap-4 hover:shadow-md transition-shadow relative overflow-hidden group/badge">
                                    <div className="absolute inset-0 bg-brand-green/5 translate-y-full group-hover/badge:translate-y-0 transition-transform duration-300"></div>
                                    <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center relative z-10">
                                        <Award className="w-5 h-5 text-brand-green" />
                                    </div>
                                    <div className={`relative z-10 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                                        <p className="text-[10px] text-brand-green font-black uppercase tracking-widest mb-0.5">
                                            {lang === 'ar' ? 'اعتماد دولي' : 'International Certification'}
                                        </p>
                                        <p className="font-black text-brand-charcoal">{lang === 'ar' ? 'مستشار وزير البيئة الأسبق' : 'Former Advisor to Minister'}</p>
                                    </div>
                                </div>
                                <div className="bg-white px-8 py-5 rounded-[2rem] shadow-sm border border-brand-green/10 flex items-center gap-4 hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center">
                                        <CheckCircle className="w-5 h-5 text-brand-green" />
                                    </div>
                                    <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
                                        <p className="text-xs text-brand-gray font-bold uppercase tracking-wider">{lang === 'ar' ? 'الخبرة العملية' : 'Expertise'}</p>
                                        <p className="font-black text-brand-charcoal">{lang === 'ar' ? '٢٨+ عاماً من الخبرة' : '28+ Years of Experience'}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <Link to="/about" className={`inline-flex items-center gap-4 bg-brand-dark text-white px-10 py-5 rounded-full font-bold hover:bg-brand-green transition-all group ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                                {lang === 'ar' ? 'عرض السيرة الذاتية الكاملة' : 'View Full Profile'}
                                <ArrowRight size={22} className={`transition-transform group-hover:translate-x-2 ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-2' : ''}`} />
                            </Link>
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

                        <div className="lg:w-2/3">
                            <div className="relative min-h-[620px] md:min-h-[850px]" style={{ perspective: "1000px" }}>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={projectIndex}
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full"
                                    >
                                        {displayedProjects.map((project, idx) => (
                                            <ProjectCard 
                                                key={`${projectIndex}-${idx}`}
                                                project={project}
                                                idx={idx}
                                                variants={itemVariants}
                                                lang={lang}
                                            />
                                        ))}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                            
                            {/* Pagination Dots - Enhanced Style */}
                            {totalGroups > 1 && (
                                <div className="flex justify-center items-center gap-4 mt-12">
                                    {Array.from({ length: totalGroups }).map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setProjectIndex(i)}
                                            className="group relative p-2 outline-none"
                                            aria-label={`Go to project group ${i + 1}`}
                                        >
                                            <div className={`h-2 rounded-full transition-all duration-500 ease-out ${
                                                projectIndex === i 
                                                ? 'w-12 bg-brand-green shadow-[0_0_15px_rgba(46,125,50,0.4)]' 
                                                : 'w-2 bg-gray-300 group-hover:bg-gray-400 group-hover:scale-125'
                                            }`} />
                                            {projectIndex === i && (
                                                <motion.div 
                                                    layoutId="activeDot"
                                                    className="absolute inset-0 rounded-full border-2 border-brand-green/20 scale-150"
                                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* View All Button - Clean Prominent Style */}
                            <div className="flex justify-center mt-16">
                                <div className="text-center">
                                    <Link 
                                        to="/projects" 
                                        className="inline-flex items-center gap-4 bg-brand-green text-white px-12 py-5 rounded-full font-black text-lg transition-all duration-300 hover:bg-brand-dark shadow-lg shadow-brand-green/20"
                                    >
                                        <span className="tracking-tight">
                                            {lang === 'ar' ? 'استكشف معرض أعمالنا الكامل' : 'Explore Our Full Portfolio'}
                                        </span>
                                        
                                        <div className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-full">
                                            <ArrowRight size={22} className={`${lang === 'ar' ? 'rotate-180' : ''}`} />
                                        </div>
                                    </Link>
                                    
                                    {/* Sub-text for extra context */}
                                    <p className="mt-4 text-brand-gray/60 font-medium text-sm">
                                        {lang === 'ar' ? 'أكثر من ٢٠ عاماً من الخبرة في الاستشارات البيئية' : 'Over 20 years of expertise in environmental consulting'}
                                    </p>
                                </div>
                            </div>
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
