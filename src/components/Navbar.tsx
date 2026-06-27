/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Languages, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CLINIC_INFO, TRANSLATIONS } from '../data';
import { Language } from '../types';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onOpenBooking: () => void;
}

export default function Navbar({ language, setLanguage, onOpenBooking }: NavbarProps) {
  const t = TRANSLATIONS[language];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['home', 'about', 'services', 'gallery', 'reviews', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t.navHome },
    { id: 'about', label: t.navAbout },
    { id: 'services', label: t.navServices },
    { id: 'gallery', label: t.navGallery },
    { id: 'reviews', label: t.navReviews },
    { id: 'contact', label: t.navContact },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'py-4 bg-white/80 backdrop-blur-md shadow-md border-b border-beige-200'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 cursor-pointer group text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-turquoise-500 to-navy-900 flex items-center justify-center text-white shadow-md shadow-turquoise-500/20 group-hover:scale-105 transition-all">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className="block font-serif text-lg md:text-xl font-bold text-navy-900 tracking-tight leading-none">
                {CLINIC_INFO.name}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-turquoise-600 font-semibold font-display">
                Casablanca
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative py-2 text-sm font-medium font-display transition-colors cursor-pointer ${
                  activeSection === item.id
                    ? 'text-turquoise-600'
                    : 'text-navy-900/75 hover:text-navy-900'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-turquoise-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop Right Panel Actions */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-beige-300 hover:border-turquoise-500 hover:bg-turquoise-50/50 text-xs font-semibold text-navy-900 transition-all cursor-pointer font-display"
              title={language === 'fr' ? 'Switch to English' : 'Passer au Français'}
            >
              <Languages className="w-3.5 h-3.5 text-turquoise-600" />
              <span>{language === 'fr' ? 'EN' : 'FR'}</span>
            </button>

            {/* Phone Number Click */}
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-1.5 text-sm font-semibold text-navy-900 hover:text-turquoise-600 transition-colors"
            >
              <Phone className="w-4 h-4 text-turquoise-500 animate-bounce" />
              <span className="font-sans">{CLINIC_INFO.phoneFormatted}</span>
            </a>

            {/* Appointment Button */}
            <button
              onClick={onOpenBooking}
              className="bg-gradient-to-r from-turquoise-500 to-turquoise-600 hover:from-turquoise-600 hover:to-turquoise-700 text-white font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-turquoise-500/10 hover:shadow-turquoise-500/25 transition-all hover:-translate-y-0.5 cursor-pointer font-display text-sm"
            >
              {t.btnBook}
            </button>
          </div>

          {/* Mobile Right Controls (Hamburger + Language) */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center w-9 h-9 rounded-xl border border-beige-300 text-navy-900 bg-white transition-all cursor-pointer font-semibold text-xs font-display"
            >
              {language === 'fr' ? 'EN' : 'FR'}
            </button>

            {/* Phone Icon Link */}
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s/g, '')}`}
              className="flex items-center justify-center w-9 h-9 rounded-xl bg-turquoise-50 text-turquoise-600 border border-turquoise-100"
              aria-label="Call clinic"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl border border-beige-300 text-navy-900 hover:bg-beige-100 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-35 lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm"
            />

            {/* Drawer Body */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl p-8 pt-24 flex flex-col justify-between border-l border-beige-200"
            >
              <div className="space-y-6">
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`py-3 text-lg font-medium font-display text-left border-b border-beige-100 transition-colors cursor-pointer ${
                        activeSection === item.id
                          ? 'text-turquoise-600 pl-2 border-l-2 border-l-turquoise-500'
                          : 'text-navy-900/80 hover:text-navy-900'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Bottom Actions of Drawer */}
              <div className="space-y-4">
                <a
                  href={`tel:${CLINIC_INFO.phone.replace(/\s/g, '')}`}
                  className="flex items-center justify-center gap-2 w-full border border-beige-300 py-3 rounded-xl text-navy-900 font-semibold font-display text-sm hover:bg-beige-100 transition-colors"
                >
                  <Phone className="w-4 h-4 text-turquoise-500" />
                  <span>{CLINIC_INFO.phoneFormatted}</span>
                </a>

                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full bg-gradient-to-r from-turquoise-500 to-turquoise-600 text-white font-semibold py-3 px-4 rounded-xl shadow-lg shadow-turquoise-500/20 text-center font-display text-sm cursor-pointer block"
                >
                  {t.btnBook}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
