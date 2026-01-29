import React from 'react';

interface PageHeroProps {
    title: string;
    subtitle?: string;
    bgImage?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, bgImage }) => {
    return (
        <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-brand-dark pb-12 md:pb-20">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-brand-dark/60 z-10" />
                {bgImage && (
                    <img
                        src={bgImage}
                        alt={title}
                        className="w-full h-full object-cover opacity-60"
                    />
                )}
            </div>
            <div className="container relative z-20 mx-auto px-4 text-center pt-48 md:pt-64 pb-16 md:pb-32">
                <h1 className="text-4xl md:text-6xl font-black text-white mb-4 animate-fade-up">
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
