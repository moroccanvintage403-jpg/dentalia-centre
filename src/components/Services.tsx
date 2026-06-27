/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Shield, Activity, Smile, Heart, Stethoscope, ChevronRight, Check, ArrowUpRight } from 'lucide-react';
import { SERVICES, TRANSLATIONS } from '../data';
import { Language } from '../types';

const iconMap: Record<string, React.ComponentType<any>> = {
  Sparkles,
  Shield,
  Activity,
  Smile,
  Heart,
  Stethoscope,
};

interface ServicesProps {
  language: Language;
  onOpenBookingWithService: (serviceId: string) => void;
}

export default function Services({ language, onOpenBookingWithService }: ServicesProps) {
  const t = TRANSLATIONS[language];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setActiveCardId(activeCardId === id ? null : id);
  };

  return (
    <section id="services" className="py-24 bg-beige-100 relative overflow-hidden">
      {/* Absolute Decorative Circles */}
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-turquoise-100/40 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-turquoise-100/30 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header Title section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block bg-white/80 border border-beige-200 text-turquoise-600 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full font-display shadow-sm">
            {language === 'fr' ? 'Prestations Premium' : 'Premium Offerings'}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-navy-900 tracking-tight">
            {t.serviceTitle}
          </h2>
          <p className="text-sm md:text-base text-navy-800/70 font-sans leading-relaxed">
            {t.serviceSubtitle}
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((srv, idx) => {
            const IconComponent = iconMap[srv.iconName] || Sparkles;
            const isExpanded = activeCardId === srv.id;
            
            return (
              <motion.div
                key={srv.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative rounded-3xl p-6 lg:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isExpanded 
                    ? 'bg-navy-900 text-white shadow-2xl col-span-1 border border-navy-800'
                    : hoveredIndex === idx
                    ? 'bg-white shadow-xl border border-turquoise-500/30 -translate-y-1'
                    : 'bg-white shadow-sm border border-beige-200'
                }`}
              >
                <div>
                  {/* Card Header (Icon & Action badge) */}
                  <div className="flex justify-between items-center mb-6">
                    <div className={`p-4 rounded-2xl ${
                      isExpanded ? 'bg-turquoise-500 text-white' : 'bg-turquoise-50 text-turquoise-600'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    
                    {/* Tiny responsive Duration Badge */}
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      isExpanded ? 'bg-white/15 text-turquoise-400' : 'bg-beige-100 text-navy-800/50'
                    }`}>
                      {srv.duration}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className={`text-xl md:text-2xl font-serif font-bold tracking-tight mb-3 ${
                    isExpanded ? 'text-white' : 'text-navy-900'
                  }`}>
                    {srv.title[language]}
                  </h3>

                  {/* Service Brief Description */}
                  <p className={`text-sm leading-relaxed mb-6 ${
                    isExpanded ? 'text-white/80' : 'text-navy-800/70'
                  }`}>
                    {srv.description[language]}
                  </p>

                  {/* Expandable Treatments Checklist */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mb-6"
                      >
                        <div className="pt-4 border-t border-white/10 space-y-3">
                          <p className="text-[11px] font-bold uppercase tracking-widest text-turquoise-400 font-display">
                            {language === 'fr' ? 'Traitements inclus :' : 'Treatments included :'}
                          </p>
                          <ul className="space-y-2">
                            {srv.details[language].map((detail, dIdx) => (
                              <li key={dIdx} className="flex items-start gap-2.5 text-xs text-white/90 font-sans">
                                <Check className="w-4 h-4 text-turquoise-500 shrink-0 mt-0.5" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Card CTA Footer bar */}
                <div className="pt-4 mt-auto border-t border-dashed flex gap-3 items-center justify-between overflow-hidden">
                  {/* Detailed toggler */}
                  <button
                    onClick={() => toggleCard(srv.id)}
                    className={`flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider font-display transition-colors cursor-pointer ${
                      isExpanded 
                        ? 'text-turquoise-400 hover:text-turquoise-300' 
                        : 'text-navy-900/60 hover:text-turquoise-600'
                    }`}
                  >
                    <span>{isExpanded ? (language === 'fr' ? 'Fermer' : 'Hide details') : (language === 'fr' ? 'Voir détails' : 'View details')}</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
                  </button>

                  {/* Book appointment with this service */}
                  <button
                    onClick={() => onOpenBookingWithService(srv.id)}
                    className={`flex items-center gap-1 p-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isExpanded
                        ? 'bg-turquoise-500 text-white hover:bg-turquoise-600'
                        : 'bg-beige-200 text-navy-900 hover:bg-turquoise-500 hover:text-white'
                    }`}
                    title={t.btnBook}
                  >
                    <span className="sr-only">{t.btnBook}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
