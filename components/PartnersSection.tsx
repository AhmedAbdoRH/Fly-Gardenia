import React from 'react';
import { motion } from 'framer-motion';

interface PartnersSectionProps {
    lang?: string;
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({ lang = 'ar' }) => {
    const logos = [
        '/logos/image1.png',
        '/logos/image2.png',
        '/logos/image3.png',
        '/logos/image4.jpeg',
        '/logos/image5.jpeg',
        '/logos/image6.jpeg',
        '/logos/image7.png',
        '/logos/image8.png',
        '/logos/image9.png',
        '/logos/image10.png',
        '/logos/image11.png',
        '/logos/image12.png',
        '/logos/image13.png',
        '/logos/image14.png',
        '/logos/image15.png',
        '/logos/image16.jpeg',
        '/logos/image17.jpeg',
        '/logos/image18.jpeg',
    ];

    // Filter out any empty or invalid paths
    const validLogos = logos.filter(logo => logo && logo.trim() !== '');

    // Duplicate array to create a seamless infinite scroll effect
    const scrollItems = [...validLogos, ...validLogos];

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
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                {/* The actual marquee implementation with "-50%" */}
                <div className="relative w-full overflow-hidden">
                    <motion.div
                        animate={{ x: lang === 'ar' ? ["0%", "50%"] : ["0%", "-50%"] }} // Adjust direction based on RTL/LTR if needed, but standard is left stream
                        transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
                        className="flex w-max gap-8 md:gap-16 px-4"
                    >
                        {scrollItems.map((logo, idx) => (
                            <div 
                                key={`logo-${idx}`}
                                className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-full bg-white border-2 border-brand-green/30 shadow-lg flex items-center justify-center p-4 hover:border-brand-green hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group relative overflow-hidden"
                            >
                                {/* Subtle gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                                
                                <img 
                                    src={logo} 
                                    alt={`Partner Logo ${idx}`} 
                                    className="w-full h-full object-contain transition-all duration-500 relative z-10" 
                                    style={{
                                        filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
                                    }}
                                    onError={(e) => {
                                        const target = e.currentTarget;
                                        target.style.opacity = '0.3';
                                        target.style.filter = 'grayscale(100%)';
                                    }}
                                />
                                
                                {/* Subtle shine effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-full"></div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
