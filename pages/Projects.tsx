import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ContentData } from '../types';
import { PageHero } from '../components/PageHero';
import { Calendar, MapPin, Target, User, CheckCircle2, FileText, Building2, Globe, Briefcase, Landmark, ArrowUpRight, ArrowRight } from 'lucide-react';

const CaseStudyCard = ({ study, lang, idx }: { study: any, lang: string, idx: number }) => {
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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="group relative bg-white rounded-[1.5rem] md:rounded-[3.5rem] shadow-xl md:shadow-2xl shadow-gray-200/50 overflow-hidden border-2 md:border-4 border-white hover:shadow-brand-green/20 transition-all duration-700"
        >
            <div className="flex flex-col lg:flex-row">
                {/* Image/Dark Side */}
                <div className="lg:w-5/12 bg-brand-charcoal relative overflow-hidden min-h-[300px] md:min-h-[500px] lg:min-h-[650px] flex items-center justify-center p-6 md:p-12">
                    {/* Background decorative elements */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-green/20 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                    
                    <motion.div 
                        style={{ 
                            transformStyle: "preserve-3d", 
                            transform: "translateZ(50px)" 
                        }}
                        className="relative z-10 w-full h-full flex items-center justify-center"
                    >
                        {study.image && (
                            <div className="relative group/book h-full w-full flex items-center justify-center">
                                {/* Book Shadow/Glow */}
                                <div className="absolute inset-0 bg-brand-green/20 blur-[60px] rounded-full scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                
                                <img 
                                    src={study.image} 
                                    alt={study.title} 
                                    className="max-w-full max-h-full object-contain shadow-[20px_20px_60px_rgba(0,0,0,0.5)] rounded-sm transform group-hover:scale-105 group-hover:-rotate-2 transition-all duration-700 relative z-10 border border-white/10"
                                />
                                
                                {/* Reflection effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20"></div>
                            </div>
                        )}
                    </motion.div>
                    
                    <div style={{ transform: "translateZ(80px)" }} className="absolute top-4 md:top-10 left-4 md:left-10 z-20">
                        <span className="bg-brand-green text-brand-charcoal px-3 md:px-5 py-1 md:py-2 rounded-full text-[9px] md:text-xs font-black uppercase tracking-widest shadow-lg">
                            {study.category}
                        </span>
                    </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-7/12 p-6 md:p-16 flex flex-col justify-center bg-gradient-to-br from-white to-slate-50">
                    <div className="mb-6 md:mb-12">
                        <div className="mb-4 md:mb-8 flex items-center gap-3">
                            <span className="text-brand-green font-black text-[9px] md:text-xs uppercase tracking-[0.3em]">
                                {lang === 'ar' ? 'دراسة حالة' : 'CASE STUDY'}
                            </span>
                            <div className="h-[1px] w-6 md:w-12 bg-brand-green/30"></div>
                        </div>
                        <h3 className="text-2xl md:text-6xl font-black text-brand-charcoal mb-6 md:mb-10 leading-tight">{study.title}</h3>
                        
                        <div className="flex flex-wrap gap-4 md:gap-10 mb-8 md:mb-14">
                            <div className="flex items-center gap-3 md:gap-4 text-brand-gray group-hover:text-brand-charcoal transition-colors">
                                <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-2xl bg-brand-green/10 flex items-center justify-center shrink-0 border border-brand-green/20">
                                    <Calendar className="w-4 h-4 md:w-6 md:h-6 text-brand-green" />
                                </div>
                                <span className="font-bold text-base md:text-xl">{study.period}</span>
                            </div>
                            <div className="flex items-center gap-3 md:gap-4 text-brand-gray group-hover:text-brand-charcoal transition-colors">
                                <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-2xl bg-brand-green/10 flex items-center justify-center shrink-0 border border-brand-green/20">
                                    <MapPin className="w-4 h-4 md:w-6 md:h-6 text-brand-green" />
                                </div>
                                <span className="font-bold text-base md:text-xl">{study.location}</span>
                            </div>
                        </div>

                        <div className="inline-flex items-center gap-2 md:gap-3 text-brand-green font-black text-[9px] md:text-sm uppercase tracking-widest mb-3 md:mb-6 px-2.5 md:px-4 py-1 md:py-2 bg-brand-green/5 rounded-lg md:rounded-xl">
                            <Target className="w-3.5 h-3.5 md:w-5 h-5" />
                            {lang === 'ar' ? 'الهدف الرئيسي' : 'Main Objective'}
                        </div>
                        <p className="text-brand-charcoal text-lg md:text-3xl font-bold leading-relaxed">
                            {study.objective}
                        </p>
                    </div>

                    <div className="mb-6 md:mb-12 p-5 md:p-8 bg-white rounded-[1.25rem] md:rounded-[2rem] border-2 border-slate-100 shadow-sm relative overflow-hidden group/quote">
                        <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-brand-green/5 rounded-full -mr-12 md:-mr-16 -mt-12 md:-mt-16 transition-all duration-700 group-hover/quote:scale-150"></div>
                        <div className="flex items-start gap-3 md:gap-6 relative z-10">
                            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0">
                                <User className="w-4 h-4 md:w-6 h-6 text-brand-green" />
                            </div>
                            <p className="text-brand-gray text-base md:text-xl italic font-medium leading-relaxed">"{study.participation}"</p>
                        </div>
                    </div>
                    
                    {study.details && (
                        <div className="relative">
                            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-8">
                                <div className="w-7 h-7 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-brand-charcoal text-white flex items-center justify-center">
                                    <FileText className="w-3.5 h-3.5 md:w-5 h-5" />
                                </div>
                                <h4 className="text-brand-charcoal font-black text-base md:text-xl uppercase tracking-tight">
                                    {lang === 'ar' ? 'أوجه المشاركة والتفاصيل' : 'Participation & Details'}
                                </h4>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                                {study.details.map((detail, dIdx) => (
                                    <motion.div 
                                        key={dIdx} 
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (dIdx * 0.1) }}
                                        className="flex items-start gap-3 md:gap-4 p-3.5 md:p-5 rounded-[0.85rem] md:rounded-[1.5rem] bg-white border border-slate-100 hover:border-brand-green/30 hover:shadow-lg transition-all duration-300 group/item"
                                    >
                                        <div className="mt-2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-green shrink-0 shadow-[0_0_10px_rgba(170,213,70,0.4)] group-hover/item:scale-150 transition-transform" />
                                        <span className="text-brand-gray font-bold text-sm md:text-lg leading-relaxed group-hover:text-brand-charcoal transition-colors">{detail}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="absolute bottom-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-brand-green/5 rounded-full blur-3xl -mb-24 md:-mb-32 -mr-24 md:-mr-32 pointer-events-none"></div>
        </motion.div>
    );
};

const ProjectListItem = ({ project, lang, idx }: { project: any, lang: string, idx: number }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="group bg-white rounded-[1.25rem] md:rounded-[2.5rem] border-2 md:border-4 border-white shadow-lg md:shadow-xl hover:shadow-2xl hover:shadow-brand-green/10 transition-all duration-500 overflow-hidden flex flex-col md:flex-row h-full hover:-translate-y-2"
        >
            {/* Image Area */}
            <div className="relative w-full md:w-64 lg:w-80 shrink-0 bg-brand-charcoal overflow-hidden flex items-center justify-center p-4 md:p-8">
                {/* Decorative background */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-brand-green/10 via-transparent to-transparent"></div>
                
                <motion.div
                    style={{ 
                        transformStyle: "preserve-3d", 
                        transform: "translateZ(30px)" 
                    }}
                    className="h-48 md:h-72 w-full relative z-10 flex items-center justify-center"
                >
                    {project.image ? (
                        <div className="relative group/project-book h-full flex items-center justify-center">
                            {/* Glow */}
                            <div className="absolute inset-0 bg-brand-green/20 blur-[40px] rounded-full scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            
                            <img 
                                src={project.image} 
                                alt={project.name}
                                className="max-h-full max-w-full object-contain shadow-[10px_10px_30px_rgba(0,0,0,0.4)] rounded-sm group-hover:scale-110 group-hover:-rotate-1 transition-all duration-700 border border-white/10"
                            />
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center text-brand-green/20">
                            <Building2 className="w-12 h-12 md:w-20 md:h-20 mb-2" />
                            <span className="text-[8px] font-bold uppercase tracking-widest opacity-50">No Cover</span>
                        </div>
                    )}
                </motion.div>
                
                <div style={{ transform: "translateZ(50px)" }} className="absolute top-3 left-3 z-20 bg-brand-green text-brand-charcoal px-2.5 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest shadow-lg">
                    {project.date}
                </div>
            </div>

            {/* Content Area */}
            <div style={{ transform: "translateZ(40px)" }} className="p-5 md:p-10 flex flex-col flex-grow justify-between relative bg-white">
                <div>
                    <h4 className="font-black text-base md:text-2xl text-brand-charcoal mb-3 md:mb-6 group-hover:text-brand-green transition-colors leading-tight">
                        {project.name}
                    </h4>
                    
                    <div className="space-y-2.5 md:space-y-4 mb-4 md:mb-8">
                        <div className="flex items-center gap-3 md:gap-4 text-brand-gray font-bold">
                            <div className="w-7 h-7 md:w-10 md:h-10 rounded-lg md:rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-brand-green/10 transition-colors">
                                <User size={14} className="text-brand-green" />
                            </div>
                            <span className="text-sm md:text-lg line-clamp-1">{project.client}</span>
                        </div>
                        <div className="flex items-center gap-3 md:gap-4 text-brand-gray font-bold">
                            <div className="w-7 h-7 md:w-10 md:h-10 rounded-lg md:rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-brand-green/10 transition-colors">
                                <MapPin size={14} className="text-brand-green" />
                            </div>
                            <span className="text-sm md:text-lg line-clamp-1">{project.location}</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2 md:gap-3 text-brand-green font-black text-[9px] md:text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                    <span>{lang === 'ar' ? 'عرض التفاصيل' : 'VIEW DETAILS'}</span>
                    <ArrowRight size={12} className={lang === 'ar' ? 'rotate-180' : ''} />
                </div>
            </div>
        </motion.div>
    );
};

export const Projects: React.FC<ProjectsProps> = ({ content, lang }) => {
    const t = content;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 pt-20 md:pt-32">
            {/* Introduction & Approach */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <span className="text-brand-green font-bold tracking-[0.2em] uppercase text-sm mb-4 block animate-fade-up opacity-0" style={{ animationDelay: '0.1s' }}>
                            {t.nav.projects}
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-brand-charcoal mb-8 animate-fade-up opacity-0" style={{ animationDelay: '0.2s' }}>
                            {t.projects.title}
                        </h2>
                        <div className="w-24 h-1.5 bg-brand-green mx-auto rounded-full mb-8 animate-fade-up opacity-0" style={{ animationDelay: '0.3s' }}></div>
                        {t.projects.description && (
                            <p className="text-xl text-brand-gray leading-relaxed font-light animate-fade-up opacity-0" style={{ animationDelay: '0.4s' }}>
                                {t.projects.description}
                            </p>
                        )}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Approach Card */}
                        <div className="lg:col-span-5 bg-brand-charcoal text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group animate-fade-up opacity-0" style={{ animationDelay: '0.5s' }}>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl -mr-32 -mt-32 transition-all duration-700 group-hover:bg-brand-green/20"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-emerald/10 rounded-full blur-3xl -ml-32 -mb-32 transition-all duration-700 group-hover:bg-brand-emerald/20"></div>
                            
                            <h3 className="text-3xl font-bold mb-10 flex items-center gap-4 relative z-10">
                                <div className="w-12 h-12 rounded-2xl bg-brand-green flex items-center justify-center text-brand-charcoal shadow-lg shadow-brand-green/20">
                                    <Target className="w-6 h-6" />
                                </div>
                                {t.projects.approachTitle}
                            </h3>
                            <ul className="space-y-6 relative z-10">
                                {t.projects.approachItems.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4 group/item">
                                        <div className="mt-2 w-2 h-2 rounded-full bg-brand-green group-hover/item:scale-150 group-hover/item:shadow-[0_0_10px_rgba(170,213,70,0.6)] transition-all shrink-0" />
                                        <span className="text-gray-300 text-lg group-hover/item:text-white transition-colors leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Summary Stats Grid */}
                        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {t.projects.items.map((item, idx) => (
                                <div key={idx} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:border-brand-green/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group animate-fade-up opacity-0" style={{ animationDelay: `${0.6 + (idx * 0.1)}s` }}>
                                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-brand-green group-hover:text-white transition-all duration-500">
                                        <CheckCircle2 className="text-brand-green group-hover:text-white transition-colors w-7 h-7" />
                                    </div>
                                    <h4 className="font-bold text-xl text-brand-charcoal leading-snug group-hover:text-brand-green transition-colors">
                                        {item}
                                    </h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies Section */}
            {t.projects.caseStudies && (
                <section className="py-24 bg-slate-50 relative">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                            <div>
                                <span className="text-brand-green font-bold tracking-wider uppercase text-sm mb-2 block">
                                    {lang === 'ar' ? 'قصص نجاح' : 'Success Stories'}
                                </span>
                                <h2 className="text-3xl md:text-5xl font-black text-brand-charcoal">{t.projects.caseStudiesTitle}</h2>
                            </div>
                            <div className="hidden md:block w-1/3 h-px bg-gray-200 mb-4"></div>
                        </div>

                        <div className="space-y-20">
                            {t.projects.caseStudies.map((study, idx) => (
                                <CaseStudyCard key={idx} study={study} lang={lang} idx={idx} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Project Lists Section */}
            {t.projects.projectLists && (
                <section className="py-24 bg-white relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-[0.4]"></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-20">
                            <span className="text-brand-green font-bold tracking-wider uppercase text-sm mb-3 block">
                                {lang === 'ar' ? 'سجل المشاريع' : 'Project Portfolio'}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-brand-charcoal">
                                {lang === 'ar' ? 'قائمة المشاريع المنجزة' : 'Completed Projects'}
                            </h2>
                        </div>

                        <div className="space-y-20">
                            {t.projects.projectLists.map((list, lIdx) => (
                                <div key={lIdx} className="relative">
                                    <div className="flex items-center gap-6 mb-12">
                                        <div className="w-16 h-16 rounded-[1.5rem] bg-brand-charcoal text-white flex items-center justify-center shadow-2xl shadow-brand-charcoal/20 shrink-0 border-2 border-brand-green/20">
                                            <Building2 className="w-8 h-8 text-brand-green" />
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-black text-brand-charcoal relative">
                                            {list.categoryTitle}
                                            <span className="absolute -bottom-4 right-0 w-full h-1.5 bg-brand-green rounded-full opacity-20"></span>
                                        </h3>
                                    </div>

                                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                                        {list.projects.map((project, pIdx) => (
                                            <ProjectListItem key={pIdx} project={project} lang={lang} idx={pIdx} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Summary Table Section */}
            {t.projects.summaryTable && (
                <section className="py-24 bg-brand-light/30">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col items-center mb-16 text-center">
                            <div className="w-16 h-1.5 bg-brand-green rounded-full mb-6"></div>
                            <h2 className="text-2xl md:text-4xl font-black text-brand-charcoal max-w-4xl leading-tight">
                                {t.projects.summaryTableTitle}
                            </h2>
                        </div>
                        
                        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-white/50 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-brand-charcoal text-white">
                                            <th className="p-6 md:p-8 font-bold text-sm md:text-base uppercase tracking-wider">{lang === 'ar' ? 'المشروع' : 'Project'}</th>
                                            <th className="p-6 md:p-8 font-bold text-sm md:text-base uppercase tracking-wider whitespace-nowrap">{lang === 'ar' ? 'السنوات' : 'Years'}</th>
                                            <th className="p-6 md:p-8 font-bold text-sm md:text-base uppercase tracking-wider">{lang === 'ar' ? 'الجهات الممولة' : 'Funding Agency'}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {t.projects.summaryTable.map((row, idx) => (
                                            <tr key={idx} className="hover:bg-brand-light/30 transition-colors group">
                                                <td className="p-6 md:p-8 font-bold text-brand-charcoal text-base md:text-lg group-hover:text-brand-green transition-colors">
                                                    {row.project}
                                                </td>
                                                <td className="p-6 md:p-8 text-brand-green font-black whitespace-nowrap bg-gray-50/50 group-hover:bg-transparent transition-colors">
                                                    {row.years}
                                                </td>
                                                <td className="p-6 md:p-8 text-brand-gray font-medium">
                                                    {row.funding}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Partners Section - Modernized */}
            {t.projects.partners && (
                <section className="py-24 bg-brand-charcoal text-white relative overflow-hidden">
                    {/* Background decorations */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse-slow"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-emerald/5 rounded-full blur-[120px] -ml-64 -mb-64 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
                    
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-5xl font-black mb-6">{t.projects.partnersTitle}</h2>
                            <div className="w-24 h-1 bg-brand-green mx-auto rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {/* Government */}
                            <div className="bg-white/5 backdrop-blur-sm rounded-[2rem] p-8 border border-white/10 hover:bg-white/10 hover:border-brand-green/30 transition-all duration-500 group">
                                <div className="flex items-center gap-5 mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-brand-green flex items-center justify-center text-brand-charcoal shadow-[0_0_20px_rgba(170,213,70,0.3)] group-hover:scale-110 transition-transform duration-500">
                                        <Landmark size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold">{lang === 'ar' ? 'جهات حكومية' : 'Governmental Entities'}</h3>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {t.projects.partners.government.map((item, idx) => (
                                        <span key={idx} className="bg-white/5 hover:bg-brand-green hover:text-brand-charcoal px-5 py-2.5 rounded-xl text-sm font-medium border border-white/10 transition-all duration-300 cursor-default">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* International */}
                            <div className="bg-white/5 backdrop-blur-sm rounded-[2rem] p-8 border border-white/10 hover:bg-white/10 hover:border-brand-green/30 transition-all duration-500 group">
                                <div className="flex items-center gap-5 mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-brand-green flex items-center justify-center text-brand-charcoal shadow-[0_0_20px_rgba(170,213,70,0.3)] group-hover:scale-110 transition-transform duration-500">
                                        <Globe size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold">{lang === 'ar' ? 'منظمات دولية' : 'International Organizations'}</h3>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {t.projects.partners.international.map((item, idx) => (
                                        <span key={idx} className="bg-white/5 hover:bg-brand-green hover:text-brand-charcoal px-5 py-2.5 rounded-xl text-sm font-medium border border-white/10 transition-all duration-300 cursor-default">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Industrial */}
                            <div className="bg-white/5 backdrop-blur-sm rounded-[2rem] p-8 border border-white/10 hover:bg-white/10 hover:border-brand-green/30 transition-all duration-500 group">
                                <div className="flex items-center gap-5 mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-brand-green flex items-center justify-center text-brand-charcoal shadow-[0_0_20px_rgba(170,213,70,0.3)] group-hover:scale-110 transition-transform duration-500">
                                        <Briefcase size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold">{lang === 'ar' ? 'قطاعات صناعية' : 'Industrial Sectors'}</h3>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {t.projects.partners.industrial.map((item, idx) => (
                                        <span key={idx} className="bg-white/5 hover:bg-brand-green hover:text-brand-charcoal px-5 py-2.5 rounded-xl text-sm font-medium border border-white/10 transition-all duration-300 cursor-default">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};
