/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { CLINIC_INFO } from './data';
import { Language } from './types';
import { MessageSquare, PhoneCall } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<Language>('fr');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>(undefined);

  const handleOpenBooking = () => {
    setPreselectedServiceId(undefined);
    setIsBookingOpen(true);
  };

  const handleOpenBookingWithService = (serviceId: string) => {
    setPreselectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-beige-50 flex flex-col selection:bg-turquoise-500 selection:text-white">
      {/* Primary Top Sticky Navigation Bar */}
      <Navbar
        language={language}
        setLanguage={setLanguage}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Single Page Layout Sections */}
      <main className="flex-grow">
        {/* Hero Banner Showcase */}
        <Hero
          language={language}
          onOpenBooking={handleOpenBooking}
        />

        {/* Doctor Presentation Section */}
        <About
          language={language}
        />

        {/* Specialties Grid Section */}
        <Services
          language={language}
          onOpenBookingWithService={handleOpenBookingWithService}
        />

        {/* Interactive Before/After Comparisons */}
        <Gallery
          language={language}
        />

        {/* Google Testimonials Section */}
        <Reviews
          language={language}
        />

        {/* Access Coordinates and Interactive Map */}
        <Contact
          language={language}
          onOpenBooking={handleOpenBooking}
        />
      </main>

      {/* Master Footer with Legal Info & Instagram collage */}
      <Footer
        language={language}
      />

      {/* Appointment Scheduler Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        language={language}
        preselectedServiceId={preselectedServiceId}
      />

      {/* Luxury Floating Contact Controls (WhatsApp Support) */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-3">
        {/* WhatsApp Link button */}
        <a
          href={`https://wa.me/${CLINIC_INFO.phone.replace(/\s/g, '')}`}
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl hover:shadow-emerald-500/30 transition-all hover:scale-105 group relative cursor-pointer"
          title={language === 'fr' ? 'Nous contacter sur WhatsApp' : 'Chat on WhatsApp'}
        >
          {/* Wave effect surrounding icon */}
          <span className="absolute inset-0 rounded-full bg-emerald-500/25 animate-ping -z-10 group-hover:animate-none" />
          <MessageSquare className="w-6 h-6 fill-current" />
        </a>

        {/* Call Link button */}
        <a
          href={`tel:${CLINIC_INFO.phone.replace(/\s/g, '')}`}
          className="w-14 h-14 rounded-full bg-turquoise-500 hover:bg-turquoise-600 text-white flex items-center justify-center shadow-xl hover:shadow-turquoise-500/30 transition-all hover:scale-105 cursor-pointer md:hidden"
          title={language === 'fr' ? 'Appeler le cabinet' : 'Call clinic'}
        >
          <PhoneCall className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
