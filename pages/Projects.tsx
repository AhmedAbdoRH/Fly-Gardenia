import React, { useEffect } from 'react';
import { ContentData } from '../types';
import { CONTENT } from '../constants';
import { PageHero } from '../components/PageHero';

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
        <div className="min-h-screen">
            <PageHero
                title={t.nav.projects}
                subtitle={t.projects.description}
                bgImage="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop"
            />

            {/* Projects Section */}
            <section className="py-20 md:py-32 watercolor-bg">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-16">
                        <div className="lg:w-1/3 reveal-trigger">
                            <h2 className="text-3xl md:text-6xl font-black text-brand-charcoal mb-6">{t.projects.title}</h2>
                            <p className="text-lg md:text-xl text-brand-gray leading-relaxed mb-8 md:mb-12">{t.projects.description}</p>

                            <div className="bg-white p-6 md:p-10 rounded-2xl md:rounded-[2rem] shadow-xl shadow-gray-200/50 border-t-4 border-brand-green">
                                <h3 className="font-bold text-brand-charcoal text-xl md:text-2xl mb-6">
                                    {t.projects.approachTitle}
                                </h3>
                                <ul className="space-y-4">
                                    {t.projects.approachItems.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-brand-gray font-medium text-sm md:text-base">
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0"></div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            {t.projects.items.map((project, idx) => (
                                <div key={idx} className={`group relative overflow-hidden rounded-2xl md:rounded-[2.5rem] h-[300px] md:h-[400px] shadow-md reveal-trigger stagger-${(idx % 2) + 1}`}>
                                    <img
                                        src={`/1/${idx === 0 ? CONTENT.ar.projects.items[1] :
                                            idx === 1 ? CONTENT.ar.projects.items[0] :
                                                CONTENT.ar.projects.items[idx]
                                            }.jpg`}
                                        alt={project}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                                    <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
                                        <h3 className="text-white font-bold text-xl md:text-2xl leading-snug">{project}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
