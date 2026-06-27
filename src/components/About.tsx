/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Award, GraduationCap, Star, ShieldCheck, HeartHandshake } from 'lucide-react';
import { CLINIC_INFO, TRANSLATIONS } from '../data';
import { Language } from '../types';

// Import generated portrait image
import doctorImg from '../assets/images/dr_chakri_rim_1782516649729.jpg';

interface AboutProps {
  language: Language;
}

export default function About({ language }: AboutProps) {
  const t = TRANSLATIONS[language];

  const credentials = [
    {
      icon: GraduationCap,
      title: {
        fr: 'Doctorat d’État en Chirurgie Dentaire',
        en: 'Doctor of Dental Surgery (DDS)',
      },
      subtitle: {
        fr: 'Faculté de Médecine Dentaire',
        en: 'Faculty of Dental Medicine',
      }
    },
    {
      icon: Award,
      title: {
        fr: 'Spécialisation en Esthétique Dentaire',
        en: 'Specialization in Dental Aesthetics',
      },
      subtitle: {
        fr: 'Diplômes Universitaires Internationaux (Paris & Dubaï)',
        en: 'International Postgrad Diplomas (Paris & Dubai)',
      }
    },
    {
      icon: Star,
      title: {
        fr: 'Expertise en Implantologie Orale',
        en: 'Oral Implantology Certificate',
      },
      subtitle: {
        fr: 'Certifié de l’Académie Internationale de Chirurgie Guidée',
        en: 'Certified by the International Academy of Guided Surgery',
      }
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-beige-100/50 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Panel: Doctor Image with visual frames */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* The main picture frame */}
            <div className="relative aspect-[3/4] w-full max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl border border-beige-300 group z-10">
              <img
                src={doctorImg}
                alt="Dr. Chakri Rim"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
            </div>

            {/* Overlapping luxury info box */}
            <div className="absolute -bottom-6 -right-4 bg-navy-900 text-white p-5 rounded-2xl shadow-xl z-20 max-w-[200px] border border-white/10">
              <div className="flex gap-1 items-center text-turquoise-400 mb-1">
                <ShieldCheck className="w-4 h-4 fill-current" />
                <span className="text-[10px] font-bold uppercase tracking-widest font-display">Certifié</span>
              </div>
              <p className="font-serif font-bold text-sm">
                {language === 'fr' ? 'Protocoles Indolores' : 'Painless Care protocols'}
              </p>
              <p className="text-[11px] text-white/60 mt-1 font-sans">
                {language === 'fr' ? 'Normes de sécurité européennes' : 'European safety guidelines'}
              </p>
            </div>

            {/* Aesthetic framing decoration */}
            <div className="absolute -top-6 -left-6 w-36 h-36 border-2 border-beige-200 rounded-3xl -z-10" />
          </motion.div>

          {/* Right Panel: Doctor Bio and stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-3">
              <span className="inline-block bg-turquoise-50 text-turquoise-600 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full font-display">
                {language === 'fr' ? 'À Propos du Médecin' : 'Meet Your Dentist'}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-navy-900 tracking-tight">
                {t.aboutTitle}
              </h2>
              <p className="text-sm font-semibold uppercase tracking-wider text-turquoise-600 font-display">
                {t.aboutSub}
              </p>
            </div>

            <div className="space-y-4 text-navy-800/80 font-sans leading-relaxed text-sm md:text-base">
              <p>{t.aboutParagraph1}</p>
              <p>{t.aboutParagraph2}</p>
              <p>{t.aboutCredentials}</p>
            </div>

            {/* Custom Interactive Quote Block */}
            <div className="relative p-6 rounded-2xl bg-beige-100 border-l-4 border-turquoise-500 pl-8">
              <p className="font-serif italic text-navy-900 font-medium text-base leading-relaxed">
                {language === 'fr' 
                  ? "« Chaque patient mérite un sourire d'exception, conçu sur-mesure dans un écrin de calme et de sérénité absolue. »" 
                  : "“Every patient deserves an exceptional smile, custom-designed within a sanctuary of tranquility and clinical excellence.”"}
              </p>
              <span className="block mt-2 text-xs font-bold uppercase tracking-widest text-turquoise-600 font-display">
                — {CLINIC_INFO.doctor}
              </span>
            </div>

            {/* Credentials / Timelines */}
            <div className="space-y-4 pt-4 border-t border-beige-200">
              <h3 className="text-sm font-bold uppercase tracking-widest text-navy-900 font-display">
                {language === 'fr' ? 'Parcours & Distinctions' : 'Credentials & Distinctions'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                {credentials.map((cred, idx) => {
                  const Icon = cred.icon;
                  return (
                    <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-beige-50 transition-all border border-transparent hover:border-beige-200">
                      <div className="p-3 rounded-xl bg-turquoise-50 text-turquoise-600 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-navy-900 text-sm md:text-base font-display">
                          {cred.title[language]}
                        </h4>
                        <p className="text-xs text-navy-800/60 mt-0.5 font-sans">
                          {cred.subtitle[language]}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
