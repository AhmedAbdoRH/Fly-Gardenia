import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CertificatesSectionProps {
    lang?: string;
}

export const CertificatesSection: React.FC<CertificatesSectionProps> = ({ lang = 'ar' }) => {
    // Real certificates from public/cer/ folder
    const allCerts = [
        { id: 0, title: lang === 'ar' ? 'شهادة بيئية 1' : 'Environmental Certificate 1', image: '/cer/لقطة شاشة 2026-03-26 123716.png' },
        { id: 1, title: lang === 'ar' ? 'شهادة بيئية 2' : 'Environmental Certificate 2', image: '/cer/لقطة شاشة 2026-03-26 123731.png' },
        { id: 2, title: lang === 'ar' ? 'شهادة الجودة 1' : 'Quality Certificate 1', image: '/cer/لقطة شاشة 2026-03-26 123754.png' },
        { id: 3, title: lang === 'ar' ? 'شهادة الجودة 2' : 'Quality Certificate 2', image: '/cer/لقطة شاشة 2026-03-26 123804.png' },
        { id: 4, title: lang === 'ar' ? 'شهادة السلامة 1' : 'Safety Certificate 1', image: '/cer/لقطة شاشة 2026-03-26 123810.png' },
        { id: 5, title: lang === 'ar' ? 'شهادة السلامة 2' : 'Safety Certificate 2', image: '/cer/لقطة شاشة 2026-03-26 123819.png' },
        { id: 6, title: lang === 'ar' ? 'شهادة الاعتماد 1' : 'Accreditation Certificate 1', image: '/cer/لقطة شاشة 2026-03-26 123852.png' },
        { id: 7, title: lang === 'ar' ? 'شهادة الاعتماد 2' : 'Accreditation Certificate 2', image: '/cer/لقطة شاشة 2026-03-26 123900.png' },
        { id: 8, title: lang === 'ar' ? 'شهادة دولية 1' : 'International Certificate 1', image: '/cer/لقطة شاشة 2026-03-26 123906.png' },
        { id: 9, title: lang === 'ar' ? 'شهادة دولية 2' : 'International Certificate 2', image: '/cer/لقطة شاشة 2026-03-26 123917.png' },
        { id: 10, title: lang === 'ar' ? 'شهادة معايير' : 'Standards Certificate', image: '/cer/لقطة شاشة 2026-03-26 123924.png' },
        { id: 11, title: lang === 'ar' ? 'شهادة اعتماد محلية' : 'Local Accreditation', image: '/cer/لقطة شاشة 2026-03-26 123935.png' },
        { id: 12, title: lang === 'ar' ? 'شهادة بيئية متقدمة' : 'Advanced Environmental', image: '/cer/لقطة شاشة 2026-03-26 124313.png' },
        { id: 13, title: lang === 'ar' ? 'شهادة التميز' : 'Excellence Award', image: '/cer/لقطة شاشة 2026-03-26 124317.png' },
    ];

    const [page, setPage] = useState(0);
    const ITEMS_PER_PAGE = window.innerWidth < 768 ? 1 : 3; // roughly 1 on mobile, 3 on desktop
    const totalPages = Math.ceil(allCerts.length / ITEMS_PER_PAGE);

    useEffect(() => {
        const timer = setInterval(() => {
            setPage(prev => (prev + 1) % totalPages);
        }, 6000); // changes every 6 seconds
        return () => clearInterval(timer);
    }, [totalPages]);

    const visibleCerts = allCerts.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

    return (
        <section className="py-20 md:py-32 bg-brand-light relative overflow-hidden watercolor-bg">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4ff70]/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#e6ffad]/15 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center mb-16">
                <div className="flex flex-col items-center justify-center reveal-trigger">
                    <span className="text-brand-green font-bold tracking-[0.2em] uppercase text-xs md:text-sm block mb-4">
                        {lang === 'ar' ? 'الاعتمادات والمعايير' : 'Certifications & Standards'}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-brand-charcoal mb-6">
                        {lang === 'ar' ? 'الشهادات والاعتمادات' : 'Our Certificates'}
                    </h2>
                    <div className="w-24 h-1.5 bg-brand-green mx-auto rounded-full mb-6"></div>
                    <p className="text-brand-gray text-lg max-w-2xl mx-auto">
                        {lang === 'ar'
                            ? 'نلتزم بأعلى معايير الجودة والسلامة من خلال الحصول على كبرى الاعتمادات الدولية والمحلية لضمان سلامة منشأتك.'
                            : 'We commit to the highest quality and safety standards by holding major international and local certifications.'}
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                {/* Carousel container */}
                <div className="flex items-center justify-center relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={page}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full"
                        >
                            {visibleCerts.map((cert) => (
                                <div
                                    key={cert.id}
                                    className="group relative rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden p-4 bg-white"
                                >
                                    {/* Real Certificate Image with Lowered Quality & Watermark */}
                                    <div 
                                        className="w-full rounded-lg relative overflow-hidden shadow-lg group-hover:-translate-y-2 transition-all duration-500 flex items-center justify-center bg-brand-light select-none"
                                        onContextMenu={(e) => e.preventDefault()}
                                    >
                                        <img 
                                            src={cert.image} 
                                            alt={cert.title}
                                            className="w-full object-contain filter blur-[1.5px] opacity-90 contrast-75 sepia-[20%] pointer-events-none"
                                            draggable="false"
                                        />
                                        
                                        {/* Repeating Text Watermark Layer for extra protection */}
                                        <div className="absolute inset-0 pointer-events-none opacity-50 flex items-center justify-center overflow-hidden mix-blend-overlay">
                                            <div className="grid grid-cols-2 gap-8 -rotate-45 scale-150 transform-gpu opacity-40">
                                                {Array.from({ length: 12 }).map((_, i) => (
                                                    <span key={i} className="text-3xl font-black text-gray-500 tracking-widest uppercase">GARDENIA</span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Optical Noise/Scanline Overlay to disrupt pictures taken by phone screens */}
                                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none filter contrast-200"></div>
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent background-size-[100%_4px] pointer-events-none opacity-30 mix-blend-overlay"></div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-3 mt-12">
                    {Array.from({ length: totalPages }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setPage(idx)}
                            className={`transition-all duration-300 rounded-full ${
                                page === idx 
                                    ? 'w-10 h-3 bg-brand-green' 
                                    : 'w-3 h-3 bg-brand-green/20 hover:bg-brand-green/50'
                            }`}
                            aria-label={`Go to page ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
