import React from 'react';

interface PageHeroProps {
    title: string | React.ReactNode;
    subtitle?: string;
    bgImage?: string;
    titleTop?: boolean;
}

export const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, bgImage, titleTop = false }) => {
    const containerPadding = titleTop ? 'pt-0 md:pt-12' : 'pt-48 md:pt-64';
    const sectionAlign = titleTop ? 'items-center md:items-start' : 'items-center';

    return (
        <section className={`relative h-[40vh] min-h-[300px] flex ${sectionAlign} justify-center overflow-hidden bg-brand-dark pb-0 md:pb-10`}>
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-brand-dark/60 z-10" />
                {bgImage && (
                    <img
                        src={bgImage}
                        alt={typeof title === 'string' ? title : 'hero-bg'}
                        className="w-full h-full object-cover opacity-60"
                    />
                )}
            </div>
            <div className={`container relative z-20 mx-auto px-4 text-center ${containerPadding} pb-0 md:pb-16`}>
                <h1 className={`text-4xl md:text-6xl font-black text-white mb-4 animate-fade-up ${titleTop ? 'mt-0 md:mt-4' : ''}`}>
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-lg md:text-xl text-gray-200 font-medium max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    );
};
