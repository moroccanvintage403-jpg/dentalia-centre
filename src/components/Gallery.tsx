/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Eye, Info, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS, TRANSLATIONS } from '../data';
import { Language } from '../types';

interface GalleryProps {
  language: Language;
}

export default function Gallery({ language }: GalleryProps) {
  const t = TRANSLATIONS[language];
  const [activeTab, setActiveTab] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50); // 0 to 100 percentage

  const activeCase = GALLERY_ITEMS[activeTab];

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-beige-100/50 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block bg-turquoise-50 text-turquoise-600 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full font-display">
            {language === 'fr' ? 'Art Dentaire & Métamorphoses' : 'Dental Artistry & Outcomes'}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-navy-900 tracking-tight">
            {t.galleryTitle}
          </h2>
          <p className="text-sm md:text-base text-navy-800/70 font-sans leading-relaxed">
            {t.gallerySubtitle}
          </p>
        </div>

        {/* Interactive Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Panel: Tabs list of cases */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-[11px] font-bold uppercase tracking-widest text-navy-900/50 font-display pl-1">
              {language === 'fr' ? 'Sélectionner un cas clinique :' : 'Select a clinical case :'}
            </p>
            
            <div className="flex flex-col gap-3">
              {GALLERY_ITEMS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(idx);
                    setSliderPosition(50); // reset slider to center
                  }}
                  className={`w-full p-5 rounded-2xl text-left border transition-all duration-300 cursor-pointer ${
                    activeTab === idx
                      ? 'bg-navy-900 text-white shadow-lg border-navy-900'
                      : 'bg-beige-50 hover:bg-beige-100/70 text-navy-900 border-beige-200'
                  }`}
                >
                  <div className="flex gap-2.5 items-center mb-1">
                    <span className={`inline-block text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      activeTab === idx ? 'bg-turquoise-500 text-white' : 'bg-turquoise-50 text-turquoise-600'
                    }`}>
                      {item.category}
                    </span>
                    <span className={`text-[10px] font-medium ${activeTab === idx ? 'text-white/60' : 'text-navy-900/50'}`}>
                      {language === 'fr' ? `Cas 0${idx + 1}` : `Case 0${idx + 1}`}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-sm md:text-base leading-tight">
                    {item.title[language]}
                  </h4>
                </button>
              ))}
            </div>

            {/* Explanatory Info Card */}
            <div className="p-4 rounded-2xl bg-turquoise-50/50 border border-turquoise-100/50 flex gap-3 text-xs text-turquoise-800 font-sans">
              <Info className="w-4 h-4 text-turquoise-600 shrink-0 mt-0.5" />
              <p>
                {language === 'fr' 
                  ? 'Glissez le curseur au centre des photos pour comparer le diagnostic initial et le sourire final restauré.' 
                  : 'Slide the cursor in the center of the image to compare the initial state and the final restored smile.'}
              </p>
            </div>
          </div>

          {/* Right Panel: The Interactive Drag Slider */}
          <div className="lg:col-span-8 flex flex-col items-center">
            
            {/* The Slider Sandbox */}
            <div className="relative w-full max-w-2xl aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-beige-300 select-none bg-beige-100">
              
              {/* After Image (Right / Underneath) */}
              <img
                src={activeCase.after}
                alt="After treatment result"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-5 right-5 z-20 bg-turquoise-500 text-white font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-md font-display">
                {t.galleryAfter}
              </div>

              {/* Before Image (Left / On Top) with clipped width */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none z-10"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={activeCase.before}
                  alt="Before treatment"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ width: '100%', maxWidth: 'none' }} // Keeps image from scaling weirdly when width cuts off
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute bottom-5 left-5 z-20 bg-navy-900 text-white font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-md font-display">
                {t.galleryBefore}
              </div>

              {/* Visual Divider line and drag handle button */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-25 flex items-center justify-center shadow-lg"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-9 h-9 rounded-full bg-white text-navy-900 flex items-center justify-center shadow-2xl border-2 border-turquoise-500 cursor-ew-resize relative">
                  <div className="flex gap-1 items-center justify-center">
                    <span className="block w-1.5 h-1.5 bg-turquoise-500 rounded-full animate-ping absolute" />
                    <Eye className="w-4 h-4 text-turquoise-600" />
                  </div>
                </div>
              </div>

              {/* Invisible range inputs overlay which handles mouse physics beautifully */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 select-none"
                aria-label="Before after image comparison slider"
              />
            </div>

            {/* Case Details Subtext */}
            <motion.div
              key={activeCase.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-6 text-center max-w-xl space-y-2 px-4"
            >
              <div className="flex items-center justify-center gap-1.5 text-turquoise-600">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider font-display">
                  {language === 'fr' ? 'Diagnostic & Résultat :' : 'Diagnosis & Outcome :'}
                </span>
              </div>
              <p className="text-sm text-navy-800/80 font-sans leading-relaxed">
                {activeCase.description[language]}
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
