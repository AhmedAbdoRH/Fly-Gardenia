import React from 'react';
import { motion } from 'framer-motion';

interface PartnersSectionProps {
    lang?: string;
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({ lang = 'ar' }) => {
    // We create an array of 20 items
    const partners = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        name: `Partner ${i + 1}`,
    }));

    // Duplicate array to create a seamless infinite scroll effect
    const scrollItems = [...partners, ...partners];

    return (
        <section className="py-20 md:py-32 bg-white overflow-hidden relative border-y border-brand-green/10">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none"></div>
            
            <div className="container mx-auto px-4 mb-16 relative z-10 text-center">
                <span className="text-brand-green font-bold tracking-[0.2em] uppercase text-xs md:text-sm block mb-4">
                    {lang === 'ar' ? 'شركاء النجاح' : 'Success Partners'}
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-brand-charcoal mb-6">
                    {lang === 'ar' ? 'شركاؤنا' : 'Our Partners'}
                </h2>
                <div className="w-24 h-1.5 bg-brand-green mx-auto rounded-full"></div>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full max-w-full overflow-hidden flex items-center">
                {/* Gradient Masks for fading effect at the edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10"></div>

                <motion.div
                    className="flex gap-8 md:gap-12 items-center w-max"
                    animate={{
                        x: [0, -100 * partners.length + "%"], // Scroll half the duplicated width
                    }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 40, // Adjust speed (higher is slower)
                    }}
                    style={{
                        // To perfectly loop, we need to translate by exactly 50% of the total duplicated width.
                        // However, with framer-motion x: ["0%", "-50%"] is relative to the element's width.
                        width: 'max-content'
                    }}
                >
                    {/* The trick: Animate to x: "-50%" of the total width */}
                </motion.div>
            </div>
            
            {/* The actual marquee implementation with "-50%" */}
            <div className="relative w-full overflow-hidden">
                <motion.div
                    animate={{ x: lang === 'ar' ? ["0%", "50%"] : ["0%", "-50%"] }} // Adjust direction based on RTL/LTR if needed, but standard is left stream
                    transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
                    className="flex w-max gap-8 md:gap-16 px-4"
                >
                    {scrollItems.map((partner, idx) => (
                        <div 
                            key={`${partner.id}-${idx}`}
                            className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-full bg-brand-light border-2 border-brand-green/20 shadow-lg flex flex-col items-center justify-center p-4 hover:border-brand-green hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent pointer-events-none"></div>
                            {/* Dummy Logo Representation */}
                            <div className="w-12 h-12 md:w-16 md:h-16 mb-2 rounded-full border border-dashed border-brand-green/50 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                                <span className="text-brand-green font-black text-xl md:text-2xl">L{partner.id + 1}</span>
                            </div>
                            <span className="text-brand-gray text-xs md:text-sm font-bold group-hover:text-brand-charcoal transition-colors">
                                {lang === 'ar' ? 'لوجو الشركة' : 'Company Logo'}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
