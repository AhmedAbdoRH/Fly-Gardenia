import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CertificatesSectionProps {
    lang?: string;
}

export const CertificatesSection: React.FC<CertificatesSectionProps> = ({ lang = 'ar' }) => {
    // Generate 12 dummy vertical certificates (3 per page = 4 pages)
    const allCerts = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        title: lang === 'ar' ? `شهادة اعتماد افتراضية رقم ${i + 1}` : `Dummy Certificate #${i + 1}`,
        desc: lang === 'ar' ? 'صورة طولية للشهادة حتى يتم إضافة صور الشهادات الحقيقية' : 'Vertical certificate placeholder until real ones are provided',
    }));

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
                <div className="min-h-[500px] flex items-center justify-center relative">
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
                                    className="group relative bg-white rounded-3xl p-6 shadow-xl shadow-brand-green/5 border border-brand-green/10 hover:shadow-2xl hover:border-brand-green transition-all duration-500 overflow-hidden flex flex-col items-center text-center"
                                >
                                    {/* Abstract corner decoration */}
                                    <div className="absolute -top-12 -right-12 w-24 h-24 bg-brand-green/20 rounded-full blur-xl group-hover:bg-brand-green/30 transition-colors"></div>

                                    {/* Dummy Vertical Image Placeholder */}
                                    <div className="w-[85%] aspect-[2/3] bg-brand-light rounded-2xl mb-8 relative flex items-center justify-center overflow-hidden border border-brand-green/20 group-hover:border-brand-green/40 shadow-inner group-hover:-translate-y-2 transition-transform duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal/[0.02] to-brand-green/[0.05]"></div>
                                        
                                        {/* Stylized frame inside certificate */}
                                        <div className="absolute inset-4 border border-dashed border-brand-green/40 rounded-xl flex flex-col items-center justify-center p-4">
                                            <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center mb-4 pb-1">
                                                <span className="text-brand-green text-3xl font-serif font-black">🏅</span>
                                            </div>
                                            <div className="h-1 w-12 bg-brand-green/30 mb-4 rounded-full"></div>
                                            <div className="h-1.5 w-[80%] bg-brand-gray/20 mb-2 rounded-full"></div>
                                            <div className="h-1.5 w-[60%] bg-brand-gray/20 mb-6 rounded-full"></div>
                                            <div className="h-4 w-12 bg-brand-green/20 rounded-full absolute bottom-8 right-8"></div>
                                            <div className="h-4 w-4 bg-brand-green/20 rounded-full absolute bottom-8 left-8"></div>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-brand-charcoal mb-3 line-clamp-2">
                                        {cert.title}
                                    </h3>
                                    <p className="text-brand-gray text-sm leading-relaxed mb-4 flex-grow">
                                        {cert.desc}
                                    </p>
                                    
                                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-brand-green/20 to-transparent mt-auto"></div>
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
