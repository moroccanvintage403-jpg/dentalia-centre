/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'fr' | 'en';

export interface Service {
  id: string;
  iconName: string;
  title: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  details: {
    fr: string[];
    en: string[];
  };
  duration: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: {
    fr: string;
    en: string;
  };
  source: 'Google';
  initials: string;
}

export interface GalleryItem {
  id: string;
  title: {
    fr: string;
    en: string;
  };
  category: string;
  before: string;
  after: string;
  description: {
    fr: string;
    en: string;
  };
}

export interface Appointment {
  name: string;
  phone: string;
  email: string;
  serviceId: string;
  date: string;
  timeSlot: string;
  notes?: string;
}
