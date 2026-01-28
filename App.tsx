import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CONTENT } from './constants';
import { Language } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingLeaves } from './components/FloatingLeaves';
import { ContactButton } from './components/ContactButton';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

// Scroll to top component to handle route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = CONTENT[lang];
  const isRTL = lang === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    // Observer for reveal animations (needs to be called after dynamic page loads)
    const observe = () => {
      if ((window as any).observeReveals) {
        (window as any).observeReveals();
      }
    };
    observe();
    // Also set an interval to catch late renders/nav
    const timer = setInterval(observe, 1000);
    return () => clearInterval(timer);
  }, [lang, isRTL]);

  const fontClass = isRTL ? 'font-cairo' : 'font-sans';

  return (
    <div className={`min-h-screen bg-gray-50 text-brand-dark ${fontClass} selection:bg-brand-green selection:text-white`}>
      <FloatingLeaves />
      <Header lang={lang} toggleLang={toggleLang} content={t.nav} />

      <main id="main-content">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home content={t} lang={lang} />} />
          <Route path="/about" element={<About content={t} lang={lang} />} />
          <Route path="/services" element={<Services content={t} lang={lang} />} />
          <Route path="/projects" element={<Projects content={t} lang={lang} />} />
          <Route path="/contact" element={<Contact content={t} lang={lang} />} />
        </Routes>
      </main>

      <Footer content={t} lang={lang} />
      <ContactButton />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;