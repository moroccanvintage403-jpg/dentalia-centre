/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Star, ArrowRight, ShieldCheck, Award, Users } from 'lucide-react';
import { CLINIC_INFO, TRANSLATIONS } from '../data';
import { Language } from '../types';

// Import generated premium images directly
import lobbyImg from '../assets/images/dentalia_lobby_1782516634861.jpg';
import smileImg from '../assets/images/perfect_smile_1782516663373.jpg';

interface HeroProps {
  language: Language;
  onOpenBooking: () => void;
}

export default function Hero({ language, onOpenBooking }: HeroProps) {
  const t = TRANSLATIONS[language];

  // Smooth scroll helper
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-gradient-to-b from-beige-100 via-beige-50/30 to-white">
      {/* Absolute Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-turquoise-100/30 blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] rounded-full bg-turquoise-100/20 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
        {/* Left Copy Panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 space-y-8 z-10"
        >
          {/* Trust Score Tag */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-beige-200 px-4 py-2 rounded-full shadow-sm">
            <div className="flex gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-xs font-bold text-navy-900 font-display">
              {CLINIC_INFO.googleRating}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-turquoise-500" />
            <span className="text-xs text-navy-900/60 font-medium font-sans">
              {t.reviewsStat}
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold text-navy-900 tracking-tight leading-[1.1]">
              {t.heroTagline}
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-turquoise-500 to-turquoise-600 font-serif">
                {language === 'fr' ? 'L’Excellence Dentaire' : 'Dental Excellence'}
              </span>
            </h1>
            <p className="text-base md:text-lg text-navy-800/70 font-sans leading-relaxed max-w-2xl">
              {t.heroSubtitle}
            </p>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="group bg-gradient-to-r from-turquoise-500 to-turquoise-600 hover:from-turquoise-600 hover:to-turquoise-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl shadow-turquoise-500/20 hover:shadow-turquoise-500/35 transition-all hover:-translate-y-0.5 duration-300 cursor-pointer font-display text-center flex items-center justify-center gap-2"
            >
              <span>{t.btnBook}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <button
              onClick={scrollToAbout}
              className="border border-beige-300 hover:border-turquoise-500 hover:bg-turquoise-50/20 text-navy-900 font-semibold px-8 py-4 rounded-2xl transition-all cursor-pointer font-display text-center"
            >
              {language === 'fr' ? 'Découvrir le Cabinet' : 'Explore the Clinic'}
            </button>
          </div>

          {/* Key Value Badges */}
          <div className="pt-8 border-t border-beige-200 grid grid-cols-3 gap-4 md:gap-8 max-w-xl">
            <div className="flex items-start gap-2.5">
              <div className="p-2 rounded-xl bg-turquoise-50 text-turquoise-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-bold text-navy-900 text-sm md:text-base font-display">100%</span>
                <span className="text-xs text-navy-900/50 font-sans">{language === 'fr' ? 'Sécurisé' : 'Safe Care'}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="p-2 rounded-xl bg-turquoise-50 text-turquoise-600">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-bold text-navy-900 text-sm md:text-base font-display">Dr. Chakri</span>
                <span className="text-xs text-navy-900/50 font-sans">{language === 'fr' ? 'Expertise' : 'Expert Dentist'}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="p-2 rounded-xl bg-turquoise-50 text-turquoise-600">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-bold text-navy-900 text-sm md:text-base font-display">5K+</span>
                <span className="text-xs text-navy-900/50 font-sans">{language === 'fr' ? 'Sourires' : 'Smiles Saved'}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Collage Visual Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="lg:col-span-5 relative flex justify-center items-center py-8"
        >
          {/* Main Lobby Visual Card */}
          <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-beige-300 group z-10">
            <img
              src={lobbyImg}
              alt="Dentalia Center Luxury Lobby"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
            
            {/* Visual Location Overlay Badge */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel text-navy-900 shadow-lg">
              <p className="text-[10px] uppercase font-bold tracking-widest text-turquoise-600 font-display">
                {language === 'fr' ? 'Plateau Technique d’Élite' : 'Elite Medical Workspace'}
              </p>
              <p className="text-sm font-serif font-bold text-navy-900 mt-1">
                {CLINIC_INFO.addressShort}
              </p>
            </div>
          </div>

          {/* Overlapping Perfect Smile Floating Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="absolute bottom-0 -left-6 md:-left-12 max-w-[200px] md:max-w-[240px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white z-20"
          >
            <img
              src={smileImg}
              alt="Cosmetic Smile Aesthetic Result"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
            <div className="absolute bottom-3 left-3">
              <span className="inline-block bg-turquoise-500 text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-1">
                Esthétique
              </span>
              <p className="text-white font-serif font-bold text-xs">
                {language === 'fr' ? 'Sourire Rêvé' : 'Dream Smile'}
              </p>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-dashed border-turquoise-500/20 rounded-full animate-soft-pulse" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-beige-300 rounded-3xl rotate-12 -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
