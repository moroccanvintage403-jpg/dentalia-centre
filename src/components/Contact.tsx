/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Calendar, MessageSquare, ArrowUpRight } from 'lucide-react';
import { CLINIC_INFO, TRANSLATIONS } from '../data';
import { Language } from '../types';

interface ContactProps {
  language: Language;
  onOpenBooking: () => void;
}

export default function Contact({ language, onOpenBooking }: ContactProps) {
  const t = TRANSLATIONS[language];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background visual spheres */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-beige-100/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header Title section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block bg-turquoise-50 text-turquoise-600 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full font-display">
            {language === 'fr' ? 'Accès & Réservations' : 'Access & Appointments'}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-navy-900 tracking-tight">
            {t.contactTitle}
          </h2>
          <p className="text-sm md:text-base text-navy-800/70 font-sans leading-relaxed">
            {t.contactSubtitle}
          </p>
        </div>

        {/* Contact panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Coordinates & Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Info blocks */}
            <div className="bg-beige-100/60 border border-beige-200 rounded-3xl p-6 md:p-8 space-y-6 shadow-sm">
              <h3 className="font-serif font-bold text-lg md:text-xl text-navy-900 border-b border-beige-200 pb-3">
                {language === 'fr' ? 'Coordonnées de Dentalia' : 'Dentalia Coordinates'}
              </h3>

              <div className="space-y-5">
                {/* Address block */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-turquoise-50 text-turquoise-600 flex items-center justify-center shrink-0 border border-turquoise-100">
                    <MapPin className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold tracking-wider text-navy-900/40 font-display">Adresse</span>
                    <p className="text-xs md:text-sm text-navy-900 font-medium font-sans leading-relaxed mt-0.5">
                      {CLINIC_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Phone block */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-turquoise-50 text-turquoise-600 flex items-center justify-center shrink-0 border border-turquoise-100">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold tracking-wider text-navy-900/40 font-display">Téléphone Direct / WhatsApp</span>
                    <a
                      href={`tel:${CLINIC_INFO.phone.replace(/\s/g, '')}`}
                      className="block text-sm md:text-base font-bold text-navy-900 hover:text-turquoise-600 mt-0.5 transition-colors font-sans"
                    >
                      {CLINIC_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>

                {/* Email block */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-turquoise-50 text-turquoise-600 flex items-center justify-center shrink-0 border border-turquoise-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold tracking-wider text-navy-900/40 font-display">Email</span>
                    <a
                      href={`mailto:${CLINIC_INFO.email}`}
                      className="block text-sm font-semibold text-navy-900 hover:text-turquoise-600 mt-0.5 transition-colors font-sans"
                    >
                      {CLINIC_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours Calendar */}
            <div className="bg-navy-900 text-white rounded-3xl p-6 md:p-8 space-y-5 shadow-lg border border-navy-850">
              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-turquoise-400" />
                <h3 className="font-serif font-bold text-lg text-white">
                  {t.contactHours}
                </h3>
              </div>
              
              <div className="space-y-3 pt-2">
                {CLINIC_INFO.hours[language].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs md:text-sm border-b border-white/5 pb-2 last:border-0 last:pb-0 font-sans">
                    <span className="text-white/60 font-medium">{item.days}</span>
                    <span className="text-white font-bold">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Instant Booking Card */}
            <div className="p-6 rounded-3xl bg-turquoise-50 border border-turquoise-100 flex items-center justify-between shadow-sm">
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-navy-900 text-sm md:text-base">
                  {language === 'fr' ? 'Besoin d’un rendez-vous ?' : 'Ready to schedule?'}
                </h4>
                <p className="text-xs text-navy-800/60 font-sans">
                  {language === 'fr' ? 'Réponse garantie en moins de 15 minutes.' : 'Guaranteed call back within 15 mins.'}
                </p>
              </div>
              <button
                onClick={onOpenBooking}
                className="bg-turquoise-500 hover:bg-turquoise-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md transition-colors cursor-pointer font-display shrink-0"
              >
                {language === 'fr' ? 'Prendre RDV' : 'Book Now'}
              </button>
            </div>

          </div>

          {/* Right Column: Google Maps live iframe */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="relative w-full h-[380px] lg:h-full min-h-[380px] rounded-3xl overflow-hidden shadow-xl border border-beige-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.7547903903173!2d-7.6534567!3d33.585789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2df4cb41873%3A0xe7915594b2da78b6!2sBd%20Oued%20N&#39;fis%2C%20Casablanca%2020250!5e0!3m2!1sen!2sma!4v1719263000000!5m2!1sen!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Direction to Dentalia Center Casablanca"
              />
              
              {/* Maps directional bubble */}
              <div className="absolute top-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur shadow-lg border border-beige-200 max-w-sm flex justify-between items-center gap-3">
                <div>
                  <h4 className="font-serif font-bold text-xs text-navy-900 leading-tight">
                    {CLINIC_INFO.name}
                  </h4>
                  <p className="text-[10px] text-navy-800/60 font-sans mt-0.5">
                    1er Étage, Bd Oued N'fis, Casablanca
                  </p>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-navy-900 hover:bg-navy-950 text-white rounded-lg p-2 flex items-center justify-center text-[10px] font-bold uppercase tracking-wider gap-1 transition-colors"
                >
                  <span>Go</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* FAQs section */}
        <div className="mt-20 pt-16 border-t border-beige-200">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <h3 className="font-serif font-bold text-2xl text-navy-900">
              {t.faqTitle}
            </h3>
            <p className="text-xs text-navy-800/60 font-sans">
              {t.faqSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {TRANSLATIONS[language] === TRANSLATIONS.fr 
              ? [
                  {
                    q: 'Quelles sont les technologies utilisées chez Dentalia Center ?',
                    a: 'Nous utilisons les technologies dentaires les plus avancées : radiographie 3D (Cone Beam), caméra intra-orale pour empreintes numériques sans pâte, laser chirurgical et de blanchiment, chirurgie implantaire guidée par ordinateur, et conception numérique du sourire (Digital Smile Design).'
                  },
                  {
                    q: 'Comment prendre rendez-vous pour une consultation ?',
                    a: 'Vous pouvez prendre rendez-vous directement en ligne en cliquant sur le bouton « Prendre RDV », par téléphone au 06 65 76 78 16, ou via notre compte Instagram @dentalia_center. Notre équipe est extrêmement réactive.'
                  },
                  {
                    q: 'Le cabinet accepte-t-il les assurances et remboursements ?',
                    a: 'Oui, nous fournissons l’ensemble des documents requis, feuilles de soins et devis détaillés pour les remboursements auprès de la CNOPS, CNSS, et les compagnies d’assurances privées nationales et internationales.'
                  },
                  {
                    q: 'Combien de temps faut-il pour poser des facettes dentaires ?',
                    a: 'Généralement, la pose de facettes se déroule en 2 à 3 séances seulement : une première consultation d’analyse bucco-dentaire et de simulation numérique, une séance de préparation et prise d’empreintes numériques, et la séance finale de pose.'
                  }
                ].map((faq, index) => (
                  <div key={index} className="p-6 bg-beige-50 rounded-2xl border border-beige-200">
                    <h4 className="font-serif font-bold text-sm md:text-base text-navy-900 mb-2">
                      {faq.q}
                    </h4>
                    <p className="text-xs md:text-sm text-navy-800/70 font-sans leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))
              : [
                  {
                    q: 'What technologies are used at Dentalia Center?',
                    a: 'We use the most advanced dental technologies: 3D X-ray (Cone Beam), intra-oral scanner for digital impressions (no paste), surgical and bleaching lasers, computer-guided implant surgery, and Digital Smile Design (DSD).'
                  },
                  {
                    q: 'How do I book an appointment for a consultation?',
                    a: 'You can book an appointment directly online by clicking "Book Appointment", by phone at 06 65 76 78 16, or via our Instagram account @dentalia_center. Our team is extremely responsive.'
                  },
                  {
                    q: 'Does the clinic accept insurance and medical reimbursement?',
                    a: 'Yes, we provide all required medical forms, care sheets, and detailed quotes for reimbursement with CNSS, CNOPS, as well as private national and international insurance providers.'
                  },
                  {
                    q: 'How long does it take to get dental veneers?',
                    a: 'Generally, getting dental veneers takes only 2 to 3 sessions: a first consultation for oral analysis and digital smile simulation, a second session for preparation and digital impressions, and the final bonding session.'
                  }
                ].map((faq, index) => (
                  <div key={index} className="p-6 bg-beige-50 rounded-2xl border border-beige-200">
                    <h4 className="font-serif font-bold text-sm md:text-base text-navy-900 mb-2">
                      {faq.q}
                    </h4>
                    <p className="text-xs md:text-sm text-navy-800/70 font-sans leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))
            }
          </div>
        </div>

      </div>
    </section>
  );
}
