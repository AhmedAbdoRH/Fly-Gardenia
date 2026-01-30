import React, { useEffect } from 'react';
import { ContentData } from '../types';
import { PageHero } from '../components/PageHero';

interface PartnersProps {
  content: ContentData;
  lang: string;
}

export const Partners: React.FC<PartnersProps> = ({ content: t, lang }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <PageHero
        title={t.partners?.title ?? (lang === 'ar' ? 'شركاء' : 'Partners')}
        subtitle={lang === 'ar' ? 'جهات حكومية ومنظمات دولية وقطاعات صناعية تعاونت مع جاردينيا' : 'Governmental, international and industry partners we have worked with.'}
        bgImage="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=2672&auto=format&fit=crop"
      />

      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h4 className="font-bold mb-3">{lang === 'ar' ? 'جهات حكومية' : 'Government'}</h4>
              <ul className="space-y-2 text-sm text-brand-gray">
                {(t.partners?.government ?? []).map((it, k) => (
                  <li key={k}>{it}</li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h4 className="font-bold mb-3">{lang === 'ar' ? 'منظمات دولية' : 'International'}</h4>
              <ul className="space-y-2 text-sm text-brand-gray">
                {(t.partners?.international ?? []).map((it, k) => (
                  <li key={k}>{it}</li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h4 className="font-bold mb-3">{lang === 'ar' ? 'قطاعات صناعية' : 'Sectors'}</h4>
              <ul className="space-y-2 text-sm text-brand-gray">
                {(t.partners?.industries ?? []).map((it, k) => (
                  <li key={k}>{it}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
