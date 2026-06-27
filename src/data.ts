/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Review, GalleryItem } from './types';

export const CLINIC_INFO = {
  name: 'Dentalia Center',
  doctor: 'Dr. Chakri Rim',
  phone: '06 65 76 78 16',
  phoneFormatted: '+212 6 65 76 78 16',
  instagram: '@dentalia_center',
  instagramUrl: 'https://instagram.com/dentalia_center',
  address: "1er Étage, Bd Oued N'fis, Angle Boulevard Med, Ave Mohamed Taieb Naciri, Casablanca, Maroc",
  addressShort: "Bd Oued N'fis, Casablanca",
  googleReviewsCount: '5 081',
  googleRating: '5.0',
  email: 'contact@dentaliacenter.ma',
  hours: {
    fr: [
      { days: 'Lundi - Vendredi', hours: '09:00 - 19:30' },
      { days: 'Samedi', hours: '09:00 - 15:00' },
      { days: 'Dimanche', hours: 'Fermé' },
    ],
    en: [
      { days: 'Monday - Friday', hours: '09:00 AM - 07:30 PM' },
      { days: 'Saturday', hours: '09:00 AM - 03:00 PM' },
      { days: 'Sunday', hours: 'Closed' },
    ],
  }
};

export const SERVICES: Service[] = [
  {
    id: 'esthetique',
    iconName: 'Sparkles',
    title: {
      fr: 'Esthétique & Prothèses',
      en: 'Aesthetics & Prostheses',
    },
    description: {
      fr: 'Facettes ultra-fines (Hollywood Smile), couronnes en zircone de haute précision et restaurations dentaires invisibles pour sublimer votre sourire.',
      en: 'Ultra-thin veneers (Hollywood Smile), high-precision zirconia crowns, and invisible dental restorations to enhance your smile.',
    },
    details: {
      fr: [
        'Facettes en céramique E-max faites sur-mesure',
        'Couronnes et ponts en Zircone esthétique',
        'Conception numérique du sourire (Digital Smile Design)',
        'Inlays & Onlays en céramique protectrice',
      ],
      en: [
        'Custom-made E-max ceramic veneers',
        'Aesthetic Zirconia crowns and bridges',
        'Digital Smile Design (DSD) simulation',
        'Protective ceramic Inlays & Onlays',
      ],
    },
    duration: '30 - 60 min',
  },
  {
    id: 'implantologie',
    iconName: 'Shield',
    title: {
      fr: 'Chirurgie & Implantologie',
      en: 'Surgery & Implantology',
    },
    description: {
      fr: "Remplacement durable de vos dents absentes par des implants haut de gamme, greffes osseuses et chirurgies d'une précision millimétrique.",
      en: 'Durable replacement of missing teeth using premium implants, bone grafts, and surgical procedures of millimetric precision.',
    },
    details: {
      fr: [
        'Implants dentaires en titane de grade médical supérieur',
        'Chirurgie guidée par ordinateur (sans douleur)',
        'Greffe osseuse et comblement de sinus (Sinus Lift)',
        'Extraction atraumatique des dents de sagesse',
      ],
      en: [
        'Premium medical-grade titanium dental implants',
        'Computer-guided painless dental surgery',
        'Bone grafting and Sinus Lift surgeries',
        'Atraumatic wisdom teeth extraction',
      ],
    },
    duration: '45 - 90 min',
  },
  {
    id: 'orthodontie',
    iconName: 'Activity',
    title: {
      fr: 'Orthodontie',
      en: 'Orthodontics',
    },
    description: {
      fr: 'Alignement parfait de la denture pour enfants et adultes grâce aux techniques invisibles de pointe (gouttières transparentes et bagues discrètes).',
      en: 'Perfect teeth alignment for children and adults using state-of-the-art invisible techniques (clear aligners and discreet braces).',
    },
    details: {
      fr: [
        'Gouttières d’alignement transparentes (Invisalign)',
        'Orthodontie linguale (totalement invisible)',
        'Appareillages céramiques de haute technologie',
        'Orthodontie interceptive précoce pour enfants',
      ],
      en: [
        'Premium clear aligners (Invisalign)',
        'Lingual orthodontics (completely invisible)',
        'High-tech ceramic self-ligating brackets',
        'Early interceptive orthodontics for children',
      ],
    },
    duration: '30 - 45 min',
  },
  {
    id: 'blanchiment',
    iconName: 'Smile',
    title: {
      fr: 'Blanchiment Dentaire',
      en: 'Teeth Whitening',
    },
    description: {
      fr: 'Éclaircissement spectaculaire et sécurisé en une seule séance grâce à notre technologie laser et gels de blanchiment premium de grade médical.',
      en: 'Spectacular and safe whitening in a single session using our modern laser technology and premium medical-grade bleaching gels.',
    },
    details: {
      fr: [
        'Blanchiment au fauteuil activé par lampe LED/Laser',
        'Gouttières personnalisées pour traitement à domicile',
        'Formules désensibilisantes brevetées',
        'Élimination en profondeur des taches rebelles',
      ],
      en: [
        'In-office whitening activated by medical LED/Laser',
        'Custom home-whitening trays and maintenance',
        'Patented formulas designed to reduce sensitivity',
        'Deep stain removal (coffee, tea, aging)',
      ],
    },
    duration: '45 - 60 min',
  },
  {
    id: 'pedodontie',
    iconName: 'Heart',
    title: {
      fr: 'Pédodontie',
      en: 'Pediatric Dentistry',
    },
    description: {
      fr: 'Soins ludiques, doux et spécialisés pour enfants dans un environnement chaleureux conçu pour dissiper toute anxiété dentaire.',
      en: 'Fun, gentle, and specialized care for children in a warm and friendly environment designed to eliminate dental anxiety.',
    },
    details: {
      fr: [
        'Approche psychologique douce sans aiguille apparente',
        'Prévention par scellement des sillons (protection caries)',
        'Éducation ludique à l’hygiène bucco-dentaire',
        'Suivi rigoureux de la croissance des mâchoires',
      ],
      en: [
        'Gentle psychological approach with no visible needles',
        'Fissure sealants for long-term cavity protection',
        'Fun and engaging oral hygiene education',
        'Rigorous monitoring of jaw growth and teething',
      ],
    },
    duration: '20 - 40 min',
  },
  {
    id: 'soins',
    iconName: 'Stethoscope',
    title: {
      fr: 'Soins Dentaires',
      en: 'General Dental Care',
    },
    description: {
      fr: 'Traitements conservateurs, dévitalisation de précision, soins des gencives (parodontologie) et détartrage ultrasonique haut de gamme.',
      en: 'Conservative treatments, precision root canal therapy, gum treatment (periodontics), and premium ultrasonic scaling.',
    },
    details: {
      fr: [
        'Détartrage et polissage prophylactique guidé',
        'Traitement laser des affections gingivales (saignements)',
        'Traitement des caries avec composites nano-hybrides',
        'Dévitalisation canalaire assistée par microscope',
      ],
      en: [
        'Ultrasonic scaling and guided prophylactic polishing',
        'Laser treatment for bleeding gums and periodontitis',
        'Caries restoration using premium nano-hybrid composite',
        'Microscope-assisted painless root canal therapy',
      ],
    },
    duration: '30 - 60 min',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Youssef El Alami',
    rating: 5,
    date: '10/06/2026',
    text: {
      fr: "Un service d'une qualité exceptionnelle ! Dr. Chakri Rim est d'un professionnalisme rare. Cabinet magnifique, ultra-moderne et hygiène irréprochable. Mes facettes sont d'un naturel incroyable, je revis !",
      en: 'Service of exceptional quality! Dr. Chakri Rim shows a rare level of professionalism. The clinic is beautiful, ultra-modern, and hygiene is flawless. My veneers look incredibly natural, I am thrilled!',
    },
    source: 'Google',
    initials: 'YA',
  },
  {
    id: 'rev-2',
    author: 'Sofia Bennani',
    rating: 5,
    date: '28/05/2026',
    text: {
      fr: "Le meilleur cabinet dentaire à Casablanca sans hésiter. L'accueil est chaleureux et rassurant, idéal pour les personnes anxieuses comme moi. Le blanchiment au laser a donné un résultat spectaculaire et sans douleur.",
      en: 'Hands down the best dental clinic in Casablanca. The welcome is warm and reassuring, ideal for anxious patients like myself. The laser whitening yielded spectacular, pain-free results.',
    },
    source: 'Google',
    initials: 'SB',
  },
  {
    id: 'rev-3',
    author: 'Amine Taghi',
    rating: 5,
    date: '14/05/2026',
    text: {
      fr: 'J’ai fait poser trois implants chez Dr. Chakri Rim. L’intervention s’est déroulée avec une précision et une douceur incroyables, guidée par ordinateur. Zéro douleur après l’opération ! Je recommande les yeux fermés.',
      en: 'I had three implants placed by Dr. Chakri Rim. The procedure went with incredible precision and gentleness, guided by computer simulation. Zero post-op pain! I highly recommend them.',
    },
    source: 'Google',
    initials: 'AT',
  },
  {
    id: 'rev-4',
    author: 'Meryem Kadiri',
    rating: 5,
    date: '02/05/2026',
    text: {
      fr: 'Excellent suivi d’orthodontie par gouttières transparentes Invisalign. Équipe souriante, ponctuelle et aux petits soins. L’emplacement à Casablanca est facile d’accès avec parking.',
      en: 'Excellent orthodontic follow-up using clear Invisalign aligners. Friendly, punctual, and highly attentive staff. Easily accessible location in Casablanca with parking available.',
    },
    source: 'Google',
    initials: 'MK',
  },
  {
    id: 'rev-5',
    author: 'Richard Dubois',
    rating: 5,
    date: '19/04/2026',
    text: {
      fr: "De passage à Casablanca, j'ai été soigné en urgence. Un accueil digne d'une clinique suisse, des technologies de pointe et un médecin très pédagogue. Merci infiniment à toute l'équipe de Dentalia Center.",
      en: 'Visiting Casablanca, I needed emergency dental work. A welcome worthy of a Swiss clinic, state-of-the-art tech, and a highly informative doctor. Thank you so much to the entire team at Dentalia.',
    },
    source: 'Google',
    initials: 'RD',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'case-1',
    title: {
      fr: 'Rénovation Esthétique Complète (Hollywood Smile)',
      en: 'Full Aesthetic Smile Makeover (Hollywood Smile)',
    },
    category: 'Esthétique',
    before: 'https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&q=80&w=600', // standard high quality reference of a slightly imperfect alignment/shade for simulation
    after: '/src/assets/images/perfect_smile_1782516663373.jpg', // Our beautiful generated smile!
    description: {
      fr: 'Pose de 8 facettes en céramique E-max supérieures pour corriger l’alignement, la teinte et la forme des dents.',
      en: 'Placement of 8 upper E-max ceramic veneers to correct alignment, shade, and tooth shape.',
    },
  },
  {
    id: 'case-2',
    title: {
      fr: 'Blanchiment Dentaire Professionnel au Laser',
      en: 'Professional Laser Teeth Whitening',
    },
    category: 'Blanchiment',
    before: 'https://picsum.photos/seed/teethbefore/600/450', // placeholder
    after: 'https://picsum.photos/seed/teethafter/600/450', // placeholder
    description: {
      fr: 'Gain de 4 teintes en une seule séance de 45 minutes sous activation laser, avec traitement désensibilisant.',
      en: 'Brightened by 4 shades in a single 45-minute laser-activated session with anti-sensitivity formulation.',
    },
  },
  {
    id: 'case-3',
    title: {
      fr: 'Restauration sur Implant & Couronne Zircone',
      en: 'Implant Restoration & Zirconia Crown',
    },
    category: 'Implantologie',
    before: 'https://picsum.photos/seed/implantbefore/600/450',
    after: 'https://picsum.photos/seed/implantafter/600/450',
    description: {
      fr: 'Remplacement d’une incisive fracturée par un implant premium et une couronne zircone hautement esthétique.',
      en: 'Replacement of a fractured incisor with a premium titanium implant and a highly aesthetic zirconia crown.',
    },
  },
];

export const FAQS = [
  {
    question: {
      fr: 'Quelles sont les technologies utilisées chez Dentalia Center ?',
      en: 'What technologies are used at Dentalia Center?',
    },
    answer: {
      fr: 'Nous utilisons les technologies dentaires les plus avancées : radiographie 3D (Cone Beam), caméra intra-orale pour empreintes numériques sans pâte, laser chirurgical et de blanchiment, chirurgie implantaire guidée par ordinateur, et conception numérique du sourire (Digital Smile Design).',
      en: 'We use the most advanced dental technologies: 3D X-ray (Cone Beam), intra-oral scanner for digital impressions (no paste), surgical and bleaching lasers, computer-guided implant surgery, and Digital Smile Design (DSD).',
    },
  },
  {
    question: {
      fr: 'Comment prendre rendez-vous pour une consultation ?',
      en: 'How do I book an appointment for a consultation?',
    },
    answer: {
      fr: 'Vous pouvez prendre rendez-vous directement en ligne en cliquant sur le bouton « Prendre RDV », par téléphone au 06 65 76 78 16, ou via notre compte Instagram @dentalia_center. Notre équipe est extrêmement réactive.',
      en: 'You can book an appointment directly online by clicking "Book Appointment", by phone at 06 65 76 78 16, or via our Instagram account @dentalia_center. Our team is extremely responsive.',
    },
  },
  {
    question: {
      fr: 'Le cabinet accepte-t-il les assurances et remboursements ?',
      en: 'Does the clinic accept insurance and medical reimbursement?',
    },
    answer: {
      fr: 'Oui, nous fournissons l’ensemble des documents requis, feuilles de soins et devis détaillés pour les remboursements auprès de la CNOPS, CNSS, et les compagnies d’assurances privées nationales et internationales.',
      en: 'Yes, we provide all required medical forms, care sheets, and detailed quotes for reimbursement with CNSS, CNOPS, as well as private national and international insurance providers.',
    },
  },
  {
    question: {
      fr: 'Combien de temps faut-il pour poser des facettes dentaires ?',
      en: 'How long does it take to get dental veneers?',
    },
    answer: {
      fr: 'Généralement, la pose de facettes se déroule en 2 à 3 séances seulement : une première consultation d’analyse bucco-dentaire et de simulation numérique, une séance de préparation et prise d’empreintes numériques, et la séance finale de pose.',
      en: 'Generally, getting dental veneers takes only 2 to 3 sessions: a first consultation for oral analysis and digital smile simulation, a second session for preparation and digital impressions, and the final bonding session.',
    },
  },
];

export const TRANSLATIONS = {
  fr: {
    navHome: 'Accueil',
    navAbout: 'À Propos',
    navServices: 'Spécialités',
    navGallery: 'Cas Cliniques',
    navReviews: 'Avis Patients',
    navContact: 'Contact',
    btnBook: 'Prendre RDV',
    btnCall: 'Appeler Directement',
    heroTagline: 'Votre Sourire, Notre Passion',
    heroSubtitle: 'Découvrez l’excellence dentaire au cœur de Casablanca. Un accompagnement d’élite, des technologies de pointe et un confort absolu pour révéler votre plus beau sourire.',
    reviewsStat: '5 081 Avis Google (Note 5.0/5.0)',
    trustedBy: 'Reconnu pour l’excellence de ses soins et son accueil d’exception.',
    aboutTitle: 'Dr. Chakri Rim',
    aboutSub: 'Directrice Médicale & Fondatrice',
    aboutParagraph1: 'Diplômée des plus prestigieuses facultés et forte d’une riche expérience internationale, le Dr. Chakri Rim a fondé Dentalia Center avec une vision : allier la rigueur médicale de pointe au raffinement et au confort d’un hôtel de luxe.',
    aboutParagraph2: 'Spécialiste de renom en esthétique dentaire et réhabilitation globale, elle s’entoure d’équipements chirurgicaux et d’imagerie de dernière génération pour offrir des diagnostics infaillibles et des soins totalement indolores.',
    aboutCredentials: 'Membre actif de sociétés internationales d’esthétique et d’implantologie orale, le Dr. Chakri Rim participe régulièrement aux avancées de la profession pour faire bénéficier ses patients des meilleurs protocoles mondiaux.',
    serviceTitle: 'Nos Spécialités d’Élite',
    serviceSubtitle: 'Un plateau technique de pointe et des spécialisations de haut niveau pour répondre à l’ensemble de vos besoins bucco-dentaires.',
    galleryTitle: 'Résultats d’Exception',
    gallerySubtitle: 'Découvrez les métamorphoses spectaculaires réalisées au cabinet. Des sourires naturels, sains, et éclatants de confiance.',
    galleryBefore: 'Avant',
    galleryAfter: 'Après',
    reviewsTitle: 'Ce que nos Patients Disent',
    reviewsSubtitle: 'Plus de 5 000 patients nous accordent leur confiance absolue et témoignent de l’accueil et du professionnalisme de notre équipe.',
    contactTitle: 'Planifiez Votre Visite',
    contactSubtitle: 'Notre équipe est à votre entière disposition pour concevoir votre plan de traitement sur-mesure dans une ambiance chaleureuse.',
    contactFormName: 'Nom et Prénom',
    contactFormPhone: 'Numéro de Téléphone',
    contactFormEmail: 'Adresse Email (optionnel)',
    contactFormService: 'Spécialité Souhaitée',
    contactFormDate: 'Date Souhaitée',
    contactFormTime: 'Tranche Horaire',
    contactFormNotes: 'Message ou informations complémentaires',
    contactFormSubmit: 'Confirmer la Demande de RDV',
    contactHours: 'Horaires d’Ouverture',
    contactAddress: 'Notre Adresse',
    contactSuccessTitle: 'Demande de Rendez-vous Envoyée !',
    contactSuccessMessage: 'Merci pour votre confiance. Un conseiller de Dentalia Center va vous contacter par téléphone ou WhatsApp dans les plus brefs délais pour confirmer l’heure exacte de votre rendez-vous.',
    contactSuccessClose: 'Fermer',
    faqTitle: 'Questions Fréquentes',
    faqSubtitle: 'Trouvez rapidement les réponses à vos interrogations sur nos soins et notre cabinet.',
    footerSlogan: 'L’art du sourire de luxe à Casablanca. Technologies d’avant-garde et confort absolu.',
    footerCopyright: '© 2026 Dentalia Center. Tous droits réservés. Conçu pour l’excellence.',
    footerLegal: 'Mentions Légales | Politique de Confidentialité',
  },
  en: {
    navHome: 'Home',
    navAbout: 'About',
    navServices: 'Specialties',
    navGallery: 'Clinical Cases',
    navReviews: 'Patient Reviews',
    navContact: 'Contact',
    btnBook: 'Book Appointment',
    btnCall: 'Call Clinic Now',
    heroTagline: 'Your Smile, Our Passion',
    heroSubtitle: 'Discover dental excellence in the heart of Casablanca. Elite care, cutting-edge technologies, and absolute comfort to reveal your most beautiful smile.',
    reviewsStat: '5,081 Google Reviews (5.0/5.0 Rating)',
    trustedBy: 'Recognized for outstanding care, clinical excellence, and high-end patient hospitality.',
    aboutTitle: 'Dr. Chakri Rim',
    aboutSub: 'Medical Director & Founder',
    aboutParagraph1: 'Graduated from prestigious institutions with extensive international experience, Dr. Chakri Rim founded Dentalia Center with a single vision: combining cutting-edge medical rigor with the refinement and comfort of a luxury hotel.',
    aboutParagraph2: 'A renowned specialist in dental aesthetics and comprehensive smile makeovers, she implements state-of-the-art computer-guided systems and 3D imaging to deliver highly accurate diagnoses and painless treatments.',
    aboutCredentials: 'As an active member of international cosmetic dentistry and oral implantology societies, Dr. Chakri Rim regularly integrates global advancements into her clinical practices for her patients’ comfort.',
    serviceTitle: 'Our Elite Specialties',
    serviceSubtitle: 'A high-tech clinical workspace paired with supreme specializations to fulfill all of your oral health and aesthetic goals.',
    galleryTitle: 'Exceptional Outcomes',
    gallerySubtitle: 'Explore the spectacular transformations achieved at our clinic. Natural, healthy, and highly confident smiles.',
    galleryBefore: 'Before',
    galleryAfter: 'After',
    reviewsTitle: 'What Our Patients Say',
    reviewsSubtitle: 'More than 5,000 patients have placed their absolute trust in us and share their experiences of our warm hospitality and dental care.',
    contactTitle: 'Schedule Your Visit',
    contactSubtitle: 'Our dedicated team is at your full disposal to craft your bespoke treatment plan in a relaxing, elegant setting.',
    contactFormName: 'Full Name',
    contactFormPhone: 'Phone Number',
    contactFormEmail: 'Email Address (optional)',
    contactFormService: 'Desired Specialty',
    contactFormDate: 'Preferred Date',
    contactFormTime: 'Preferred Time Slot',
    contactFormNotes: 'Additional messages or clinical context',
    contactFormSubmit: 'Confirm Appointment Request',
    contactHours: 'Opening Hours',
    contactAddress: 'Our Address',
    contactSuccessTitle: 'Appointment Request Sent!',
    contactSuccessMessage: 'Thank you for your trust. A Dentalia Center coordinator will contact you by phone or WhatsApp shortly to confirm the exact time of your appointment.',
    contactSuccessClose: 'Close',
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Quick answers to common questions about our dental services and clinical processes.',
    footerSlogan: 'The art of luxury smiles in Casablanca. Vanguard technology and absolute comfort.',
    footerCopyright: '© 2026 Dentalia Center. All rights reserved. Crafted for excellence.',
    footerLegal: 'Legal Notices | Privacy Policy',
  },
};
