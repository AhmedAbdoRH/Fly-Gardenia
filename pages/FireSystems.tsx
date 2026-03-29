import React, { useEffect } from 'react';
import { Mail, Phone } from 'lucide-react';
import { ContentData } from '../types';
import { getIcon } from '../components/Icons';

interface FireSystemsProps {
  content: ContentData;
  lang: string;
}

export const FireSystems: React.FC<FireSystemsProps> = ({ content, lang }) => {
  const t = content.fireSystems;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!t) {
    return null;
  }

  const sectionNav = [
    { id: 'profile', label: lang === 'ar' ? 'نبذة' : 'Profile' },
    { id: 'scope', label: lang === 'ar' ? 'نطاق الخدمات' : 'Scope' },
    { id: 'standards', label: lang === 'ar' ? 'المعايير' : 'Standards' },
    { id: 'leadership', label: lang === 'ar' ? 'القيادة' : 'Leadership' },
    { id: 'sectors', label: lang === 'ar' ? 'القطاعات' : 'Sectors' },
    { id: 'why', label: lang === 'ar' ? 'لماذا جاردينيا' : 'Why Us' },
    { id: 'cv', label: lang === 'ar' ? 'السيرة' : 'CV' }
  ];

  const highlightCards = [
    {
      label: lang === 'ar' ? 'المعايير' : 'Standards',
      value: t.standards.items.join(' • ')
    },
    {
      label: lang === 'ar' ? 'الخدمات' : 'Services',
      value: lang === 'ar' ? `${t.scope.items.length} خدمات متخصصة` : `${t.scope.items.length} Specialized Services`
    },
    {
      label: lang === 'ar' ? 'القيادة' : 'Leadership',
      value: t.leadership.name
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-24 md:pt-48 md:pb-32 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(170,213,70,0.06)_0%,transparent_100%)] pointer-events-none"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-green/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto relative z-10 px-4">
          <div className="text-center max-w-4xl mx-auto mb-10 md:mb-16 reveal-trigger">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-black uppercase tracking-[0.3em] bg-brand-green/20 text-brand-green rounded-full border border-brand-green/30">
              {t.hero.tag}
            </span>
            <h1 className="text-4xl md:text-7xl font-black mb-8 text-white leading-tight">
              {t.hero.title}
            </h1>
            <div className="w-24 h-1.5 bg-brand-green mx-auto rounded-full mb-10 shadow-[0_0_20px_rgba(170,213,70,0.4)]"></div>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-medium text-justify">
              {t.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="-mt-10 md:-mt-14 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlightCards.map((card, idx) => (
              <div key={idx} className="rounded-3xl border border-white/20 bg-white shadow-2xl px-6 py-6 md:px-8 md:py-8">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-brand-green mb-3">{card.label}</p>
                <p className="text-base md:text-lg font-semibold text-brand-charcoal">{card.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Navigator */}
      <section className="sticky top-20 z-20 bg-white/90 backdrop-blur-md border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3 py-4 text-xs md:text-sm font-black uppercase tracking-[0.2em] text-brand-charcoal">
            {sectionNav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-4 py-2 rounded-full border border-gray-200 hover:border-brand-green hover:text-brand-green transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Company Profile + Vision/Mission */}
      <section id="profile" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-5xl font-black text-brand-charcoal mb-6">{t.profile.title}</h2>
              <p className="text-lg md:text-xl text-brand-gray leading-relaxed text-justify">{t.profile.text}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              <div className="rounded-3xl border border-gray-100 bg-white shadow-xl p-8 md:p-10">
                <h3 className="text-2xl font-black text-brand-green mb-4">{t.vision.title}</h3>
                <p className="text-brand-gray leading-relaxed text-justify">{t.vision.text}</p>
              </div>
              <div className="rounded-3xl border border-gray-100 bg-white shadow-xl p-8 md:p-10">
                <h3 className="text-2xl font-black text-brand-green mb-4">{t.mission.title}</h3>
                <p className="text-brand-gray leading-relaxed text-justify">{t.mission.text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scope of Services */}
      <section id="scope" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-brand-charcoal mb-4">{t.scope.title}</h2>
              <div className="w-20 h-1.5 bg-brand-green mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {t.scope.items.map((item, idx) => (
                <div key={idx} className="group rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-brand-light flex items-center justify-center text-brand-green mb-6">
                    {getIcon(item.iconName, "w-7 h-7")}
                  </div>
                  <h3 className="text-xl font-black text-brand-charcoal mb-3">{item.title}</h3>
                  <p className="text-brand-gray leading-relaxed text-justify">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Standards + Leadership */}
      <section id="standards" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="rounded-3xl border border-brand-green/20 bg-brand-green/5 p-8 md:p-10 shadow-xl">
              <h3 className="text-2xl font-black text-brand-charcoal mb-6">{t.standards.title}</h3>
              <ul className="space-y-3">
                {t.standards.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-brand-gray">
                    <span className="mt-2 w-2 h-2 rounded-full bg-brand-green shrink-0"></span>
                    <span className="text-base md:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div id="leadership" className="rounded-3xl border border-gray-100 bg-white p-8 md:p-10 shadow-xl">
              <h3 className="text-2xl font-black text-brand-charcoal mb-4">{t.leadership.title}</h3>
              <p className="text-lg font-black text-brand-green">{t.leadership.name}</p>
              <p className="text-sm uppercase tracking-widest text-brand-gray mt-2 mb-4">{t.leadership.role}</p>
              <p className="text-brand-gray leading-relaxed text-justify">{t.leadership.summary}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors + Why */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div id="sectors" className="rounded-3xl border border-gray-100 bg-white p-8 md:p-10 shadow-xl">
              <h3 className="text-2xl font-black text-brand-charcoal mb-6">{t.sectors.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.sectors.items.map((item, idx) => (
                  <div key={idx} className="rounded-2xl border border-gray-100 bg-gray-50 px-5 py-4 font-semibold text-brand-charcoal text-center">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div id="why" className="rounded-3xl border border-gray-100 bg-white p-8 md:p-10 shadow-xl">
              <h3 className="text-2xl font-black text-brand-charcoal mb-6">{t.why.title}</h3>
              <ul className="space-y-4">
                {t.why.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-brand-gray">
                    <span className="mt-2 w-2 h-2 rounded-full bg-brand-green shrink-0"></span>
                    <span className="text-base md:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CV */}
      <section id="cv" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-brand-charcoal mb-4">{t.cv.title}</h2>
              <div className="w-20 h-1.5 bg-brand-green mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
              <div className="lg:col-span-1">
                <div className="rounded-3xl border border-gray-100 bg-gray-50 p-6 md:p-8 shadow-lg">
                  <h3 className="text-xl font-black text-brand-charcoal mb-6">{t.cv.contactLabel}</h3>
                  <div className="space-y-5">
                    <div>
                      <p className="text-sm uppercase tracking-widest text-brand-gray">{lang === 'ar' ? 'الاسم' : 'Name'}</p>
                      <p className="text-lg font-bold text-brand-charcoal">{t.cv.contact.name}</p>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-widest text-brand-gray">{lang === 'ar' ? 'الموقع' : 'Location'}</p>
                      <p className="text-base text-brand-charcoal">{t.cv.contact.location}</p>
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm uppercase tracking-widest text-brand-gray">{lang === 'ar' ? 'الهاتف' : 'Phone'}</p>
                      <a className="flex items-center gap-3 text-brand-charcoal font-semibold" href={`tel:${t.cv.contact.phone.replace(/ /g, '')}`}>
                        <Phone className="w-4 h-4 text-brand-green" />
                        {t.cv.contact.phone}
                      </a>
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm uppercase tracking-widest text-brand-gray">{lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}</p>
                      {t.cv.contact.emails.map((email, idx) => (
                        <a key={idx} className="flex items-center gap-3 text-brand-charcoal font-semibold break-all" href={`mailto:${email}`}>
                          <Mail className="w-4 h-4 text-brand-green" />
                          {email}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-8">
                {t.cv.sections.map((section, idx) => (
                  <div key={idx} className="rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-lg">
                    <h3 className="text-2xl font-black text-brand-charcoal mb-4">{section.title}</h3>
                    <ul className="space-y-3 list-disc list-inside text-brand-gray text-justify">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 relative bg-brand-dark">
        <div className="absolute top-0 left-0 w-full h-1/2 watercolor-bg md:block hidden"></div>

        <div className="container mx-auto relative z-10 reveal-trigger">
          <div className="bg-white md:rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-2xl">
            <div className="md:w-1/2 bg-brand-dark text-white p-8 md:p-16 flex flex-col justify-between relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/20 rounded-full blur-[80px] pointer-events-none"></div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black mb-6">{content.contact.title}</h2>
                <p className="text-gray-400 text-base md:text-lg mb-10 leading-relaxed">{content.contact.subtitle}</p>

                <div className="space-y-6">
                  {content.contact.emails?.map((em, i) => (
                    <a key={i} href={`mailto:${em}`} className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-widest">{content.contact.emailLabel}</span>
                        <span className="text-sm md:text-xl font-bold break-all">{em}</span>
                      </div>
                    </a>
                  ))}

                  {content.contact.phoneNumbers?.map((p, i) => (
                    <a key={i} href={`tel:${p.replace(/ /g, '')}`} className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-widest">{content.contact.phoneLabel}</span>
                        <span className="text-base md:text-xl font-bold">{p}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:w-1/2 p-8 md:p-16">
              <h3 className="text-2xl md:text-4xl font-black text-brand-charcoal mb-8">
                {lang === 'ar' ? 'تواصل معنا' : 'Get in Touch'}
              </h3>
              <p className="text-brand-gray text-base md:text-lg leading-relaxed mb-10">
                {lang === 'ar'
                  ? 'يسعدنا التواصل معكم للإجابة عن استفساراتكم وتقديم الاستشارات المطلوبة.'
                  : 'We are happy to connect, answer your questions, and provide the consultation you need.'}
              </p>
              <div className="space-y-4">
                {content.contact.emails?.map((em, i) => (
                  <div key={i} className="flex items-center gap-3 text-brand-gray">
                    <Mail className="w-4 h-4 text-brand-green" />
                    <span>{em}</span>
                  </div>
                ))}
                {content.contact.phoneNumbers?.map((p, i) => (
                  <div key={i} className="flex items-center gap-3 text-brand-gray">
                    <Phone className="w-4 h-4 text-brand-green" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
