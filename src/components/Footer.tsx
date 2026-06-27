/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, Phone, MapPin, Instagram, Mail, ArrowUpRight } from 'lucide-react';
import { CLINIC_INFO, TRANSLATIONS } from '../data';
import { Language } from '../types';

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const t = TRANSLATIONS[language];

  // Helper scroll function
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  // Mock Instagram photo feed references (using standard high-quality dental & luxurious wellness photo urls)
  const instaFeed = [
    { id: 'feed-1', url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=250', desc: 'Clinical Excellence' },
    { id: 'feed-2', url: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=250', desc: 'Perfect Smile Artistry' },
    { id: 'feed-3', url: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=250', desc: 'Luxurious Workspace' },
    { id: 'feed-4', url: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=250', desc: 'Happy Patients' },
  ];

  return (
    <footer className="bg-navy-950 text-white pt-20 pb-10 border-t border-navy-900 overflow-hidden relative">
      {/* Background glow effects */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-turquoise-500/10 blur-3xl -z-10" />
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-turquoise-500/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Logo Brand + Mission */}
          <div className="lg:col-span-4 space-y-6">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2 cursor-pointer text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-turquoise-500 to-turquoise-600 flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-serif text-lg md:text-xl font-bold tracking-tight leading-none text-white">
                  {CLINIC_INFO.name}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-turquoise-400 font-semibold font-display">
                  Casablanca
                </span>
              </div>
            </button>

            <p className="text-xs md:text-sm text-white/60 font-sans leading-relaxed max-w-sm">
              {t.footerSlogan}
            </p>

            {/* Quick social click */}
            <div className="flex gap-4 items-center pt-2">
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-turquoise-500 hover:text-white transition-all hover:-translate-y-0.5"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <span className="text-xs font-semibold text-white/80 font-display">
                {CLINIC_INFO.instagram}
              </span>
            </div>
          </div>

          {/* Useful Navigation Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-turquoise-400 font-display">
                {language === 'fr' ? 'Navigation' : 'Navigation'}
              </h4>
              <ul className="space-y-2.5">
                {[
                  { id: 'home', label: t.navHome },
                  { id: 'about', label: t.navAbout },
                  { id: 'services', label: t.navServices },
                  { id: 'gallery', label: t.navGallery },
                  { id: 'reviews', label: t.navReviews },
                  { id: 'contact', label: t.navContact },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-xs md:text-sm text-white/50 hover:text-white transition-colors cursor-pointer font-sans"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-turquoise-400 font-display">
                {language === 'fr' ? 'Spécialités' : 'Specialties'}
              </h4>
              <ul className="space-y-2.5">
                {[
                  { id: 'esthetique', label: language === 'fr' ? 'Esthétique' : 'Aesthetics' },
                  { id: 'implantologie', label: language === 'fr' ? 'Implantologie' : 'Implants' },
                  { id: 'orthodontie', label: 'Orthodontie' },
                  { id: 'blanchiment', label: language === 'fr' ? 'Blanchiment' : 'Whitening' },
                  { id: 'pedodontie', label: language === 'fr' ? 'Pédodontie' : 'Pediatric' },
                  { id: 'soins', label: language === 'fr' ? 'Soins Généraux' : 'General Care' },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection('services')}
                      className="text-xs md:text-sm text-white/50 hover:text-white transition-colors cursor-pointer font-sans"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Instagram feed preview collage */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-turquoise-400 font-display">
                {language === 'fr' ? 'Galerie Instagram' : 'Instagram Gallery'}
              </h4>
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>{CLINIC_INFO.instagram}</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            {/* Visual grid of 4 pictures */}
            <div className="grid grid-cols-4 gap-2.5">
              {instaFeed.map((feed) => (
                <a
                  key={feed.id}
                  href={CLINIC_INFO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="relative aspect-square rounded-xl overflow-hidden group border border-white/5 shadow-inner block"
                >
                  <img
                    src={feed.url}
                    alt={feed.desc}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-turquoise-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Instagram className="w-4 h-4 text-white" />
                  </div>
                </a>
              ))}
            </div>

            {/* Quick contact text */}
            <p className="text-[11px] text-white/40 font-sans italic pt-2">
              {language === 'fr' 
                ? 'Suivez nos conseils d’hygiène et les coulisses de notre cabinet au quotidien.' 
                : 'Follow our daily hygiene guides and look inside our premium clinical workspace.'}
            </p>
          </div>

        </div>

        {/* Legal Notices and Copyrights */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] md:text-xs text-white/40 font-display">
          <p>{t.footerCopyright}</p>
          <div className="flex gap-4">
            <button className="hover:text-white transition-colors cursor-pointer">{t.footerLegal}</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
