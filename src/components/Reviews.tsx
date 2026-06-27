/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Star, ArrowUpRight, Search, ThumbsUp, Quote } from 'lucide-react';
import { REVIEWS, CLINIC_INFO, TRANSLATIONS } from '../data';
import { Language } from '../types';

interface ReviewsProps {
  language: Language;
}

export default function Reviews({ language }: ReviewsProps) {
  const t = TRANSLATIONS[language];
  const [searchTerm, setSearchTerm] = useState('');

  const filteredReviews = REVIEWS.filter((rev) =>
    rev.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    rev.text[language].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="reviews" className="py-24 bg-beige-100 relative overflow-hidden">
      {/* Absolute background decoration */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-turquoise-100/30 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header Title section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block bg-white border border-beige-200 text-turquoise-600 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full font-display shadow-sm">
            {language === 'fr' ? 'La Voix de Nos Patients' : 'Patient Testimonials'}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-navy-900 tracking-tight">
            {t.reviewsTitle}
          </h2>
          <p className="text-sm md:text-base text-navy-800/70 font-sans leading-relaxed">
            {t.reviewsSubtitle}
          </p>
        </div>

        {/* Google Ratings Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Main Dashboard Card */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-8 border border-beige-200 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-navy-900/40 font-display">
                  {language === 'fr' ? 'Profil Google Vérifié' : 'Verified Google Profile'}
                </span>
              </div>
              
              <div className="space-y-1">
                <span className="block text-6xl md:text-7xl font-display font-extrabold text-navy-900">
                  {CLINIC_INFO.googleRating}
                </span>
                <div className="flex gap-1.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-sm text-navy-800/60 font-sans leading-relaxed">
                {language === 'fr' 
                  ? `Basé sur un total historique de ${CLINIC_INFO.googleReviewsCount} avis de patients authentiques à Casablanca.` 
                  : `Based on a historical total of ${CLINIC_INFO.googleReviewsCount} genuine patient reviews in Casablanca.`}
              </p>
            </div>

            {/* Google Redirect Link */}
            <div className="pt-6 mt-6 border-t border-beige-100 flex items-center justify-between">
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-navy-900/30 font-display">Source</span>
                <span className="font-serif font-bold text-navy-900 text-sm">Google Maps</span>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold text-turquoise-600 hover:text-turquoise-700 transition-colors"
              >
                <span>{language === 'fr' ? 'Consulter' : 'View Reviews'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Interactive filter & search box */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-8 border border-beige-200 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif font-bold text-lg md:text-xl text-navy-900">
                    {language === 'fr' ? 'Explorez les Retours d’Expériences' : 'Explore Patient Feedback'}
                  </h3>
                  <p className="text-xs text-navy-800/50 font-sans mt-0.5">
                    {language === 'fr' ? 'Recherchez par nom ou mots clés dentaires' : 'Search by name or dental terms'}
                  </p>
                </div>

                {/* Search Bar */}
                <div className="relative max-w-xs w-full">
                  <Search className="w-4 h-4 text-navy-900/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder={language === 'fr' ? 'Rechercher...' : 'Search reviews...'}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-beige-300 text-sm focus:outline-none focus:ring-2 focus:ring-turquoise-500 focus:border-transparent transition-all font-sans"
                  />
                </div>
              </div>

              {/* Grid of reviews */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[320px] overflow-y-auto pr-2">
                {filteredReviews.length > 0 ? (
                  filteredReviews.map((rev) => (
                    <div key={rev.id} className="p-5 rounded-2xl bg-beige-50 border border-beige-200 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        {/* Review Header */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full bg-turquoise-100 text-turquoise-600 font-bold text-xs flex items-center justify-center font-display">
                              {rev.initials}
                            </div>
                            <div>
                              <span className="block font-bold text-xs text-navy-900 font-display">
                                {rev.author}
                              </span>
                              <span className="text-[9px] text-navy-900/40 font-sans">
                                {rev.date}
                              </span>
                            </div>
                          </div>
                          
                          <div className="flex gap-0.5 text-amber-400 shrink-0">
                            {[...Array(rev.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-current" />
                            ))}
                          </div>
                        </div>

                        {/* Review Paragraph */}
                        <p className="text-xs text-navy-800/80 font-sans leading-relaxed line-clamp-3">
                          "{rev.text[language]}"
                        </p>
                      </div>

                      {/* Review footer badge */}
                      <div className="flex items-center justify-between text-[9px] text-navy-900/30 border-t border-beige-200/50 pt-2 font-display">
                        <span className="flex items-center gap-1">
                          <ThumbsUp className="w-3 h-3 text-turquoise-500" />
                          {language === 'fr' ? 'Recommandé' : 'Recommended'}
                        </span>
                        <span className="font-bold">Google Maps</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 text-center py-12 text-navy-800/50 text-sm font-sans">
                    {language === 'fr' ? 'Aucun avis trouvé pour votre recherche.' : 'No reviews matched your search.'}
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* Featured Patient Highlight Quote Grid */}
        <div className="mt-12 p-8 md:p-12 rounded-3xl bg-navy-900 text-white relative overflow-hidden">
          {/* Decorative ambient glowing backdrops */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-turquoise-500/10 blur-3xl" />
          <div className="absolute -bottom-12 -left-12 text-white/5 opacity-10">
            <Quote className="w-48 h-48" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
            <div className="lg:col-span-2 space-y-4">
              <span className="inline-block bg-white/10 text-turquoise-400 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full font-display">
                {language === 'fr' ? 'Témoignage Vedette' : 'Featured Success Story'}
              </span>
              <p className="font-serif italic text-lg md:text-xl text-white/90 leading-relaxed font-medium">
                {language === 'fr'
                  ? "« L’accueil est digne d’un hôtel 5 étoiles. Dr. Chakri Rim prend vraiment le temps d’écouter et d’expliquer, avec des techniques révolutionnaires et sans aucune douleur. Je n’ai plus peur du dentiste ! »"
                  : "“The hospitality is worthy of a 5-star hotel. Dr. Chakri Rim genuinely takes the time to listen and educate. Painless care with modern tools. I am no longer afraid of dental treatment!”"}
              </p>
              <div>
                <span className="block font-bold text-sm text-white font-display">Mouna Cherkaoui</span>
                <span className="text-xs text-turquoise-400 font-sans">Patient de Casablanca</span>
              </div>
            </div>
            
            <div className="flex lg:justify-end">
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-turquoise-500 to-turquoise-600 hover:from-turquoise-600 hover:to-turquoise-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-turquoise-500/20 transition-all hover:-translate-y-0.5 cursor-pointer font-display text-sm"
              >
                <span>{language === 'fr' ? 'Suivre sur Instagram' : 'Follow on Instagram'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
