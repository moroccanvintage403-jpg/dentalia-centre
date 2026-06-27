/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, CheckCircle2, User, Phone, Mail, FileText } from 'lucide-react';
import { SERVICES, CLINIC_INFO, TRANSLATIONS } from '../data';
import { Language } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  preselectedServiceId?: string;
}

export default function BookingModal({ isOpen, onClose, language, preselectedServiceId }: BookingModalProps) {
  const t = TRANSLATIONS[language];
  const [serviceId, setServiceId] = useState(preselectedServiceId || SERVICES[0].id);
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  React.useEffect(() => {
    if (preselectedServiceId) {
      setServiceId(preselectedServiceId);
    }
  }, [preselectedServiceId]);

  const timeSlots = [
    '09:00 - 10:00',
    '10:00 - 11:00',
    '11:00 - 12:00',
    '14:00 - 15:00',
    '15:00 - 16:00',
    '16:00 - 17:00',
    '17:00 - 18:00',
    '18:00 - 19:00',
  ];

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!name.trim()) {
      tempErrors.name = language === 'fr' ? 'Le nom est obligatoire' : 'Name is required';
    }
    if (!phone.trim()) {
      tempErrors.phone = language === 'fr' ? 'Le numéro est obligatoire' : 'Phone number is required';
    } else if (!/^(05|06|07)[0-9]{8}$/.test(phone.replace(/[\s.-]/g, '')) && !/^\+212[0-9]{9}$/.test(phone.replace(/[\s.-]/g, ''))) {
      tempErrors.phone = language === 'fr' ? 'Numéro invalide (ex: 0665767816)' : 'Invalid Moroccan phone number';
    }
    if (!date) {
      tempErrors.date = language === 'fr' ? 'Sélectionnez une date' : 'Select a date';
    }
    if (!timeSlot) {
      tempErrors.timeSlot = language === 'fr' ? 'Sélectionnez un horaire' : 'Select a time slot';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setEmail('');
    setNotes('');
    setDate('');
    setTimeSlot('');
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy-950/80 backdrop-blur-md"
          />

          {/* Modal content panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            id="booking-modal-panel"
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl border border-beige-200 z-10 max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="px-8 py-6 border-b border-beige-100 flex items-center justify-between bg-beige-50">
              <div>
                <h3 className="text-2xl font-serif text-navy-900 font-bold tracking-tight">
                  {isSubmitted ? t.contactSuccessTitle : t.btnBook}
                </h3>
                <p className="text-sm text-navy-800/60 mt-1 font-sans">
                  {isSubmitted ? CLINIC_INFO.name : `${CLINIC_INFO.name} — ${CLINIC_INFO.doctor}`}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-beige-200 text-navy-900/60 hover:text-navy-900 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-8 overflow-y-auto flex-1">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Select Service */}
                  <div>
                    <label className="block text-sm font-semibold text-navy-900 mb-2 font-display">
                      {t.contactFormService}
                    </label>
                    <select
                      value={serviceId}
                      onChange={(e) => setServiceId(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-beige-300 bg-white text-navy-900 focus:outline-none focus:ring-2 focus:ring-turquoise-500 focus:border-transparent transition-all cursor-pointer font-sans"
                    >
                      {SERVICES.map((srv) => (
                        <option key={srv.id} value={srv.id}>
                          {srv.title[language]}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Grid for Date & Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-navy-900 mb-2 font-display flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-turquoise-500" />
                        {t.contactFormDate}
                      </label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => {
                          setDate(e.target.value);
                          if (errors.date) setErrors({ ...errors, date: '' });
                        }}
                        min={new Date().toISOString().split('T')[0]}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.date ? 'border-red-400 focus:ring-red-300' : 'border-beige-300 focus:ring-turquoise-500'
                        } bg-white text-navy-900 focus:outline-none focus:ring-2 focus:border-transparent transition-all cursor-pointer font-sans`}
                      />
                      {errors.date && <p className="text-xs text-red-500 mt-1">{errors.date}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-navy-900 mb-2 font-display flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-turquoise-500" />
                        {t.contactFormTime}
                      </label>
                      <select
                        value={timeSlot}
                        onChange={(e) => {
                          setTimeSlot(e.target.value);
                          if (errors.timeSlot) setErrors({ ...errors, timeSlot: '' });
                        }}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.timeSlot ? 'border-red-400 focus:ring-red-300' : 'border-beige-300 focus:ring-turquoise-500'
                        } bg-white text-navy-900 focus:outline-none focus:ring-2 focus:border-transparent transition-all cursor-pointer font-sans`}
                      >
                        <option value="">-- {language === 'fr' ? 'Choisir un créneau' : 'Choose a slot'} --</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                      {errors.timeSlot && <p className="text-xs text-red-500 mt-1">{errors.timeSlot}</p>}
                    </div>
                  </div>

                  {/* Personal details */}
                  <div className="space-y-4 pt-2 border-t border-beige-100">
                    <div>
                      <label className="block text-sm font-semibold text-navy-900 mb-1.5 font-display flex items-center gap-1.5">
                        <User className="w-4 h-4 text-turquoise-500" />
                        {t.contactFormName}
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder={language === 'fr' ? 'Ex: Sofia Bennani' : 'e.g. Sofia Bennani'}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.name ? 'border-red-400 focus:ring-red-300' : 'border-beige-300 focus:ring-turquoise-500'
                        } bg-white text-navy-900 focus:outline-none focus:ring-2 focus:border-transparent transition-all font-sans`}
                      />
                      {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-navy-900 mb-1.5 font-display flex items-center gap-1.5">
                          <Phone className="w-4 h-4 text-turquoise-500" />
                          {t.contactFormPhone}
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                            if (errors.phone) setErrors({ ...errors, phone: '' });
                          }}
                          placeholder="Ex: 0665767816"
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.phone ? 'border-red-400 focus:ring-red-300' : 'border-beige-300 focus:ring-turquoise-500'
                          } bg-white text-navy-900 focus:outline-none focus:ring-2 focus:border-transparent transition-all font-sans`}
                        />
                        {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-navy-900 mb-1.5 font-display flex items-center gap-1.5">
                          <Mail className="w-4 h-4 text-turquoise-500" />
                          {t.contactFormEmail}
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Ex: sofia@gmail.com"
                          className="w-full px-4 py-3 rounded-xl border border-beige-300 bg-white text-navy-900 focus:outline-none focus:ring-2 focus:ring-turquoise-500 focus:border-transparent transition-all font-sans"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-navy-900 mb-1.5 font-display flex items-center gap-1.5">
                        <FileText className="w-4 h-4 text-turquoise-500" />
                        {t.contactFormNotes}
                      </label>
                      <textarea
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder={language === 'fr' ? 'Spécifiez toute information médicale ou demande spéciale...' : 'Specify any medical information or special requests...'}
                        className="w-full px-4 py-3 rounded-xl border border-beige-300 bg-white text-navy-900 focus:outline-none focus:ring-2 focus:ring-turquoise-500 focus:border-transparent transition-all font-sans resize-none"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-turquoise-500 to-turquoise-600 hover:from-turquoise-600 hover:to-turquoise-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg shadow-turquoise-500/20 hover:shadow-turquoise-500/30 transition-all hover:-translate-y-0.5 duration-300 cursor-pointer font-display text-center block"
                    >
                      {t.contactFormSubmit}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="py-12 flex flex-col items-center text-center space-y-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 10 }}
                    className="w-20 h-20 rounded-full bg-turquoise-100 flex items-center justify-center text-turquoise-600"
                  >
                    <CheckCircle2 className="w-12 h-12" />
                  </motion.div>

                  <div className="space-y-3 max-w-md">
                    <h4 className="text-2xl font-serif font-bold text-navy-900">
                      {t.contactSuccessTitle}
                    </h4>
                    <p className="text-navy-800/70 font-sans leading-relaxed text-sm">
                      {t.contactSuccessMessage}
                    </p>
                  </div>

                  {/* Summary of reservation */}
                  <div className="w-full max-w-sm bg-beige-100 border border-beige-200 rounded-2xl p-5 text-left text-sm space-y-2.5">
                    <div className="flex justify-between border-b border-beige-200 pb-2">
                      <span className="text-navy-900/60 font-semibold">{language === 'fr' ? 'Patient' : 'Patient'} :</span>
                      <span className="text-navy-900 font-bold">{name}</span>
                    </div>
                    <div className="flex justify-between border-b border-beige-200 pb-2">
                      <span className="text-navy-900/60 font-semibold">{language === 'fr' ? 'Spécialité' : 'Specialty'} :</span>
                      <span className="text-navy-900 font-medium">
                        {SERVICES.find((s) => s.id === serviceId)?.title[language]}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-beige-200 pb-2">
                      <span className="text-navy-900/60 font-semibold">{language === 'fr' ? 'Date' : 'Date'} :</span>
                      <span className="text-navy-900 font-medium">{new Date(date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-navy-900/60 font-semibold">{language === 'fr' ? 'Créneau' : 'Time'} :</span>
                      <span className="text-navy-900 font-semibold text-turquoise-600">{timeSlot}</span>
                    </div>
                  </div>

                  <div className="pt-4 w-full max-w-xs">
                    <button
                      onClick={handleReset}
                      className="w-full bg-navy-900 hover:bg-navy-950 text-white font-semibold py-3 px-6 rounded-xl transition-all cursor-pointer font-display"
                    >
                      {t.contactSuccessClose}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
