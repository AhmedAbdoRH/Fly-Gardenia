import React, { useEffect } from 'react';
import { ContentData } from '../types';
import { PageHero } from '../components/PageHero';
import { Calendar, MapPin, Target, User, CheckCircle2, FileText, Building2, Globe, Briefcase, Landmark, ArrowUpRight } from 'lucide-react';

interface ProjectsProps {
    content: ContentData;
    lang: string;
}

export const Projects: React.FC<ProjectsProps> = ({ content, lang }) => {
    const t = content;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-slate-50">
            <PageHero
                title={t.nav.projects}
                subtitle={t.projects.description}
                bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop"
            />

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
                        <p className="text-xl text-brand-gray leading-relaxed font-light animate-fade-up opacity-0" style={{ animationDelay: '0.4s' }}>
                            {t.projects.description}
                        </p>
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
                                <div key={idx} className="group relative bg-white rounded-[3rem] shadow-xl shadow-gray-200/50 overflow-hidden border border-white/50 hover:shadow-2xl hover:shadow-brand-green/10 transition-all duration-700">
                                    <div className="flex flex-col lg:flex-row">
                                        {/* Image/Dark Side */}
                                        <div className="lg:w-2/5 bg-brand-charcoal relative overflow-hidden min-h-[400px] lg:min-h-full">
                                            {/* Background Image if available */}
                                            {study.image && (
                                                <div className="absolute inset-0 z-0">
                                                    <img 
                                                        src={study.image} 
                                                        alt={study.title} 
                                                        className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000"
                                                    />
                                                    <div className="absolute inset-0 bg-brand-charcoal/80 mix-blend-multiply"></div>
                                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent"></div>
                                                </div>
                                            )}
                                            
                                            <div className="absolute top-8 left-8 right-8 flex justify-between items-start z-10">
                                                <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                                                    {study.category}
                                                </span>
                                            </div>

                                            <div className="relative z-10 p-10 h-full flex flex-col justify-end">
                                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">{study.title}</h3>
                                                
                                                <div className="space-y-5 border-t border-white/10 pt-8">
                                                    <div className="flex items-center gap-4 text-gray-300 group-hover:text-white transition-colors">
                                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                                            <Calendar className="w-5 h-5 text-brand-green" />
                                                        </div>
                                                        <span className="font-medium text-lg">{study.period}</span>
                                                    </div>
                                                    <div className="flex items-center gap-4 text-gray-300 group-hover:text-white transition-colors">
                                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                                            <MapPin className="w-5 h-5 text-brand-green" />
                                                        </div>
                                                        <span className="font-medium text-lg">{study.location}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content Side */}
                                        <div className="lg:w-3/5 p-10 md:p-14 flex flex-col justify-center">
                                            <div className="mb-10">
                                                <h4 className="text-brand-green font-bold text-lg mb-4 flex items-center gap-3">
                                                    <Target className="w-6 h-6" />
                                                    {lang === 'ar' ? 'الهدف الرئيسي' : 'Main Objective'}
                                                </h4>
                                                <p className="text-brand-charcoal text-xl md:text-2xl font-medium leading-relaxed">
                                                    {study.objective}
                                                </p>
                                            </div>

                                            <div className="mb-10 p-6 bg-brand-light/50 rounded-2xl border border-brand-green/10">
                                                <div className="flex items-start gap-4">
                                                    <User className="w-6 h-6 text-brand-green shrink-0 mt-1" />
                                                    <p className="text-brand-gray italic font-medium">{study.participation}</p>
                                                </div>
                                            </div>
                                            
                                            {study.details && (
                                                <div>
                                                    <h4 className="text-brand-charcoal font-bold text-lg mb-6 flex items-center gap-3">
                                                        <FileText className="w-6 h-6 text-brand-green" />
                                                        {lang === 'ar' ? 'أوجه المشاركة والتفاصيل' : 'Participation & Details'}
                                                    </h4>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        {study.details.map((detail, dIdx) => (
                                                            <div key={dIdx} className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                                                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-green shrink-0 shadow-[0_0_8px_rgba(170,213,70,0.8)]" />
                                                                <span className="text-brand-gray font-medium leading-relaxed">{detail}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
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

                        <div className="space-y-12">
                            {t.projects.projectLists.map((list, lIdx) => (
                                <div key={lIdx} className="relative">
                                    <div className="flex items-center gap-6 mb-10">
                                        <div className="w-14 h-14 rounded-2xl bg-brand-charcoal text-white flex items-center justify-center shadow-lg shadow-brand-charcoal/10 shrink-0">
                                            <Building2 className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-brand-charcoal relative">
                                            {list.categoryTitle}
                                            <span className="absolute -bottom-3 right-0 w-2/3 h-1 bg-brand-green rounded-full opacity-30"></span>
                                        </h3>
                                    </div>

                                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                                        {list.projects.map((project, pIdx) => (
                                            <div key={pIdx} className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-brand-green/5 transition-all duration-500 overflow-hidden flex flex-col md:flex-row h-full hover:-translate-y-1">
                                                {/* Image Area - Thumbnail style */}
                                                <div className="relative w-full md:w-48 lg:w-56 shrink-0 bg-slate-50 overflow-hidden">
                                                    {project.image ? (
                                                        <div className="h-48 md:h-full relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
                                                            <img 
                                                                src={project.image} 
                                                                alt={project.name}
                                                                className="w-full h-full object-cover"
                                                            />
                                                            <div className="absolute inset-0 bg-brand-charcoal/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                                        </div>
                                                    ) : (
                                                        <div className="h-48 md:h-full flex items-center justify-center text-brand-green/20">
                                                            <Building2 className="w-16 h-16" />
                                                        </div>
                                                    )}
                                                    {/* Floating Date Badge */}
                                                    <div className="absolute top-4 left-4 md:top-auto md:bottom-4 md:left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-[10px] font-black text-brand-charcoal shadow-sm uppercase tracking-tighter">
                                                        {project.date}
                                                    </div>
                                                </div>

                                                {/* Content Area */}
                                                <div className="p-6 md:p-8 flex flex-col flex-grow justify-between relative">
                                                    <div>
                                                        <h4 className="font-bold text-lg md:text-xl text-brand-charcoal mb-4 group-hover:text-brand-green transition-colors leading-snug">
                                                            {project.name}
                                                        </h4>
                                                        
                                                        <div className="space-y-3 mb-6">
                                                            <div className="flex items-center gap-3 text-sm text-brand-gray font-medium">
                                                                <div className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                                                                    <User size={14} className="text-brand-green" />
                                                                </div>
                                                                <span className="line-clamp-1">{project.client}</span>
                                                            </div>
                                                            <div className="flex items-center gap-3 text-sm text-brand-gray font-medium">
                                                                <div className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                                                                    <MapPin size={14} className="text-brand-green" />
                                                                </div>
                                                                <span className="line-clamp-1">{project.location}</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                                                        <span className="text-[10px] font-bold text-brand-gray/40 uppercase tracking-widest">
                                                            {lang === 'ar' ? 'تفاصيل المشروع' : 'Project Details'}
                                                        </span>
                                                        <div className="w-8 h-8 rounded-full bg-brand-light group-hover:bg-brand-green group-hover:text-white transition-all duration-500 flex items-center justify-center text-brand-green">
                                                            <ArrowUpRight size={16} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
