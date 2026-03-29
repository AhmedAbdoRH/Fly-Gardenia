import React, { useState, useEffect, useRef } from 'react';
import { Hero } from '../components/Hero';
import { getIcon } from '../components/Icons';
import { Mail, Phone, CheckCircle, Target, Eye, HandHeart, ArrowRight, Quote, Building2, Award } from 'lucide-react';
import { TypeWriter } from '../components/TypeWriter';
import { ContentData } from '../types';
import { Link, useNavigate } from 'react-router-dom';
import { CONTENT } from '../constants';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface HomeProps {
    content: ContentData;
    lang: string;
}

const ProjectCard: React.FC<{ project: any; idx: number; variants: any; lang: string }> = ({ project, idx, variants, lang }) => {
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
    const navigate = useNavigate();
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
                        className="relative w-full h-[300px] md:h-[70vh] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] overflow-hidden"
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
                        <p className="text-lg md:text-xl text-brand-gray leading-relaxed mb-10 reveal-trigger stagger-1 text-justify">
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

            {/* Leadership Team Section - Compact Cards */}
            <section className="py-24 md:py-32 bg-brand-light relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-green/5 to-transparent"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-green/10 rounded-full blur-[100px]"></div>

                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="text-center mb-16 reveal-trigger">
                        <span className="text-brand-green font-bold tracking-wider uppercase text-xs md:text-sm mb-4 block">{lang === 'ar' ? 'الفريق المتخصص' : 'Our Expert Team'}</span>
                        <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-4 leading-tight">
                            {lang === 'ar' ? 'قيادة علمية خبيرة' : 'Expert Scientific Leadership'}
                        </h2>
                    </div>

                    {/* Team Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
                        {/* Dr. Asmaa Card */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="reveal-trigger group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 border-2 border-white hover:border-brand-green/20 cursor-pointer"
                            onClick={() => navigate('/about#dr-asmaa')}
                        >
                            {/* Card Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            {/* Image Section */}
                            <div className="relative h-64 overflow-hidden bg-brand-dark">
                                <img 
                                    src="/Dr. Asmaa Hammouda.png" 
                                    alt="Dr. Asmaa Hammouda" 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-40"></div>
                                {/* Badge */}
                                <div className="absolute top-4 right-4 bg-brand-green text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                    {lang === 'ar' ? 'المؤسس' : 'Founder'}
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6 relative z-10">
                                <h3 className="text-xl font-black text-brand-dark mb-1">
                                    {lang === 'ar' ? 'أ.د/ أسماء حمودة' : 'Prof. Dr. Asmaa'}
                                </h3>
                                <p className="text-brand-green font-bold text-xs mb-4 leading-tight">
                                    {lang === 'ar' 
                                        ? 'أستاذ الهندسة الكيميائية والبيئية'
                                        : 'Professor of Chemical Engineering'}
                                </p>

                                {/* Experience Highlights */}
                                <div className="space-y-2 mb-6 h-24">
                                    <div className={`flex items-start gap-2 text-xs text-brand-gray ${lang === 'ar' ? 'flex-row-reverse text-right' : ''}`}>
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0 mt-1"></div>
                                        <span>{lang === 'ar' ? '٢٨+ سنة خبرة دولية' : '28+ Years International Experience'}</span>
                                    </div>
                                    <div className={`flex items-start gap-2 text-xs text-brand-gray ${lang === 'ar' ? 'flex-row-reverse text-right' : ''}`}>
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0 mt-1"></div>
                                        <span>{lang === 'ar' ? 'مستشار وزير البيئة الأسبق' : 'Former Advisor to Minister'}</span>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <div 
                                    className={`inline-flex items-center gap-2 text-brand-green font-bold text-xs hover:gap-4 transition-all group/link w-full justify-center py-2.5 px-4 rounded-lg bg-brand-green/5 hover:bg-brand-green hover:text-white ${lang === 'ar' ? 'flex-row-reverse' : ''}`}
                                >
                                    <span>{lang === 'ar' ? 'المزيد' : 'Read More'}</span>
                                    <ArrowRight size={14} className={lang === 'ar' ? 'rotate-180' : ''} />
                                </div>
                            </div>
                        </motion.div>

                        {/* Dr. Khaled Card */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="reveal-trigger group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 border-2 border-white hover:border-brand-green/20 cursor-pointer"
                            onClick={() => navigate('/about#eng-khaled')}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <div className="relative h-64 overflow-hidden bg-brand-dark">
                                <img
                                    src="/eng khaled.png"
                                    alt="Eng. Khaled Eid"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-40"></div>
                                <div className="absolute top-4 right-4 bg-brand-green text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                    {lang === 'ar' ? 'استشاري' : 'Consultant'}
                                </div>
                            </div>

                            <div className="p-6 relative z-10">
                                <h3 className="text-xl font-black text-brand-dark mb-1">
                                    {lang === 'ar' ? 'م/ خالد عيد' : 'Eng. Khaled Eid'}
                                </h3>
                                <p className="text-brand-green font-bold text-xs mb-4 leading-tight">
                                    {lang === 'ar' 
                                        ? 'استشاري حماية من الحريق'
                                        : 'Fire Protection Consultant'}
                                </p>

                                <div className="space-y-2 mb-6 h-24">
                                    <div className={`flex items-start gap-2 text-xs text-brand-gray ${lang === 'ar' ? 'flex-row-reverse text-right' : ''}`}>
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0 mt-1"></div>
                                        <span>{lang === 'ar' ? '٣٣+ سنة خبرة متخصصة' : '33+ Years Specialized Experience'}</span>
                                    </div>
                                    <div className={`flex items-start gap-2 text-xs text-brand-gray ${lang === 'ar' ? 'flex-row-reverse text-right' : ''}`}>
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0 mt-1"></div>
                                        <span>{lang === 'ar' ? 'الهيئة القومية للأنفاق - سابقاً' : 'National Authority for Tunnels'}</span>
                                    </div>
                                </div>

                                <div 
                                    className={`inline-flex items-center gap-2 text-brand-green font-bold text-xs hover:gap-4 transition-all group/link w-full justify-center py-2.5 px-4 rounded-lg bg-brand-green/5 hover:bg-brand-green hover:text-white ${lang === 'ar' ? 'flex-row-reverse' : ''}`}
                                >
                                    <span>{lang === 'ar' ? 'المزيد' : 'Read More'}</span>
                                    <ArrowRight size={14} className={lang === 'ar' ? 'rotate-180' : ''} />
                                </div>
                            </div>
                        </motion.div>

                        {/* Eng. Ayman Card */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="reveal-trigger group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 border-2 border-white hover:border-brand-green/20 cursor-pointer"
                            onClick={() => navigate('/about#eng-ayman')}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <div className="relative h-64 overflow-hidden bg-brand-dark">
                                <img
                                    src="/Ayman Hassan Refaei.png"
                                    alt="Eng. Ayman Hassan"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-40"></div>
                                <div className="absolute top-4 right-4 bg-brand-green text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                    {lang === 'ar' ? 'خبير' : 'Expert'}
                                </div>
                            </div>

                            <div className="p-6 relative z-10">
                                <h3 className="text-xl font-black text-brand-dark mb-1">
                                    {lang === 'ar' ? 'م/ أيمن حسن' : 'Eng. Ayman Hassan'}
                                </h3>
                                <p className="text-brand-green font-bold text-xs mb-4 leading-tight">
                                    {lang === 'ar' 
                                        ? 'خبير مشروعات المترو والسكك الحديدية'
                                        : 'Rail & Metro Systems Expert'}
                                </p>

                                <div className="space-y-2 mb-6 h-24">
                                    <div className={`flex items-start gap-2 text-xs text-brand-gray ${lang === 'ar' ? 'flex-row-reverse text-right' : ''}`}>
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0 mt-1"></div>
                                        <span>{lang === 'ar' ? '٢٦+ سنة خبرة MEP' : '26+ Years MEP Experience'}</span>
                                    </div>
                                    <div className={`flex items-start gap-2 text-xs text-brand-gray ${lang === 'ar' ? 'flex-row-reverse text-right' : ''}`}>
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0 mt-1"></div>
                                        <span>{lang === 'ar' ? 'مترو دبي والدوحة والقاهرة' : 'Dubai, Doha & Cairo Metro'}</span>
                                    </div>
                                </div>

                                <div 
                                    className={`inline-flex items-center gap-2 text-brand-green font-bold text-xs hover:gap-4 transition-all group/link w-full justify-center py-2.5 px-4 rounded-lg bg-brand-green/5 hover:bg-brand-green hover:text-white ${lang === 'ar' ? 'flex-row-reverse' : ''}`}
                                >
                                    <span>{lang === 'ar' ? 'المزيد' : 'Read More'}</span>
                                    <ArrowRight size={14} className={lang === 'ar' ? 'rotate-180' : ''} />
                                </div>
                            </div>
                        </motion.div>

                        {/* Eng. Ahmed Card */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="reveal-trigger group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 border-2 border-white hover:border-brand-green/20 cursor-pointer"
                            onClick={() => navigate('/about#eng-ahmed')}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <div className="relative h-64 overflow-hidden bg-brand-dark">
                                <img
                                    src="/Ahmed Mohamed Mehesen.png"
                                    alt="Eng. Ahmed Mohamed"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-40"></div>
                                <div className="absolute top-4 right-4 bg-brand-green text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                    {lang === 'ar' ? 'خبير ميكانيكا' : 'Mech. Expert'}
                                </div>
                            </div>

                            <div className="p-6 relative z-10">
                                <h3 className="text-xl font-black text-brand-dark mb-1">
                                    {lang === 'ar' ? 'م/ أحمد محيسن' : 'Eng. Ahmed Mehesen'}
                                </h3>
                                <p className="text-brand-green font-bold text-xs mb-4 leading-tight">
                                    {lang === 'ar' 
                                        ? 'استشاري دعم فني ميكانيكي'
                                        : 'Mechanical Tech. Support'}
                                </p>

                                <div className="space-y-2 mb-6 h-24">
                                    <div className={`flex items-start gap-2 text-xs text-brand-gray ${lang === 'ar' ? 'flex-row-reverse text-right' : ''}`}>
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0 mt-1"></div>
                                        <span>{lang === 'ar' ? '٢٠+ سنة خبرة فنية' : '20+ Years Technical Experience'}</span>
                                    </div>
                                    <div className={`flex items-start gap-2 text-xs text-brand-gray ${lang === 'ar' ? 'flex-row-reverse text-right' : ''}`}>
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0 mt-1"></div>
                                        <span>{lang === 'ar' ? 'مشروعات LRT وجامعة الملك فيصل' : 'LRT & King Faisal Univ. Projects'}</span>
                                    </div>
                                </div>

                                <Link 
                                    to="/about" 
                                    className={`inline-flex items-center gap-2 text-brand-green font-bold text-xs hover:gap-4 transition-all group/link w-full justify-center py-2.5 px-4 rounded-lg bg-brand-green/5 hover:bg-brand-green hover:text-white ${lang === 'ar' ? 'flex-row-reverse' : ''}`}
                                >
                                    <span>{lang === 'ar' ? 'المزيد' : 'Read More'}</span>
                                    <ArrowRight size={14} className={lang === 'ar' ? 'rotate-180' : ''} />
                                </Link>
                            </div>
                        </motion.div>

                        {/* Eng. Bassam Card */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="reveal-trigger group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 border-2 border-white hover:border-brand-green/20 cursor-pointer"
                            onClick={() => navigate('/about#eng-bassam')}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <div className="relative h-64 overflow-hidden bg-brand-dark">
                                <img
                                    src="/eng bassam.png"
                                    alt="Eng. Bassam Soultan"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/logo-gardenia.png'; }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-40"></div>
                                <div className="absolute top-4 right-4 bg-brand-green text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                    {lang === 'ar' ? 'خبير قوى كهربائية' : 'Power Expert'}
                                </div>
                            </div>

                            <div className="p-6 relative z-10">
                                <h3 className="text-xl font-black text-brand-dark mb-1">
                                    {lang === 'ar' ? 'م/ بسام سلطان' : 'Eng. Bassam Soultan'}
                                </h3>
                                <p className="text-brand-green font-bold text-xs mb-4 leading-tight">
                                    {lang === 'ar' 
                                        ? 'استشاري قوى كهربائية'
                                        : 'Electrical Power Consultant'}
                                </p>

                                <div className="space-y-2 mb-6 h-24">
                                    <div className={`flex items-start gap-2 text-xs text-brand-gray ${lang === 'ar' ? 'flex-row-reverse text-right' : ''}`}>
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0 mt-1"></div>
                                        <span>{lang === 'ar' ? '١٧+ سنة خبرة فنية' : '17+ Years Technical Experience'}</span>
                                    </div>
                                    <div className={`flex items-start gap-2 text-xs text-brand-gray ${lang === 'ar' ? 'flex-row-reverse text-right' : ''}`}>
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0 mt-1"></div>
                                        <span>{lang === 'ar' ? 'الهيئة القومية للأنفاق (NAT)' : 'National Authority for Tunnels'}</span>
                                    </div>
                                </div>

                                <div 
                                    className={`inline-flex items-center gap-2 text-brand-green font-bold text-xs hover:gap-4 transition-all group/link w-full justify-center py-2.5 px-4 rounded-lg bg-brand-green/5 hover:bg-brand-green hover:text-white ${lang === 'ar' ? 'flex-row-reverse' : ''}`}
                                >
                                    <span>{lang === 'ar' ? 'المزيد' : 'Read More'}</span>
                                    <ArrowRight size={14} className={lang === 'ar' ? 'rotate-180' : ''} />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Highlight */}
            <section className="py-24 md:py-32 bg-brand-dark text-white relative overflow-hidden">
                <div className="container mx-auto relative z-10 px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-black mb-6">{t.nav.services}</h2>
                        <p className="text-gray-300 font-normal">{t.services.description}</p>
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
                                    <p className="text-gray-300 leading-relaxed text-base md:text-lg font-normal uppercase-first">{service.description}</p>
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
                        <div className="md:w-1/2 bg-brand-dark text-white p-8 md:p-16 flex flex-col justify-between relative">
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
                                                <span className="text-lg md:text-xl font-bold break-all">{em}</span>
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
                                                <span className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-widest">{t.contact.addressLabel}</span>
                                                <span className="text-lg md:text-xl font-bold">{t.contact.address}</span>
                                            </div>
                                        </div>
                                    )}
                                </div> 
                            </div>
                        </div>

                        <div className="md:w-1/2 p-6 md:p-16 bg-white">
                            <form className="space-y-6 md:space-y-8" onSubmit={(e) => {
                                e.preventDefault();
                                window.open(`https://wa.me/201067096677?text=${encodeURIComponent('طلب استشارة من الموقع')}`, '_blank');
                            }}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                    <div>
                                        <label htmlFor="contact-name" className="block text-sm font-bold text-brand-gray uppercase tracking-wider mb-2">{t.contact.formName}</label>
                                        <input id="contact-name" type="text" className="w-full py-3 border-b-2 border-gray-200 bg-transparent focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none font-medium text-lg rounded-none transition-colors" />
                                    </div>
                                    <div>
                                        <label htmlFor="contact-email" className="block text-sm font-bold text-brand-gray uppercase tracking-wider mb-2">{t.contact.formEmail}</label>
                                        <input id="contact-email" type="email" className="w-full py-3 border-b-2 border-gray-200 bg-transparent focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none font-medium text-lg rounded-none transition-colors" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="contact-message" className="block text-sm font-bold text-brand-gray uppercase tracking-wider mb-2">{t.contact.formMessage}</label>
                                    <textarea id="contact-message" rows={4} className="w-full py-3 border-b-2 border-gray-200 bg-transparent focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none font-medium text-lg resize-none rounded-none transition-colors"></textarea>
                                </div>

                                <div className="pt-4">
                                    <button type="submit" className="w-full md:w-auto px-10 py-5 bg-brand-green text-white rounded-full font-bold text-xl active:scale-95 transition-all flex items-center justify-center gap-4 hover:bg-brand-dark hover:shadow-xl hover:shadow-brand-green/20">
                                        {t.contact.sendButton}
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
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
