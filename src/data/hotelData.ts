import { HotelRoom } from '../types';

export const HOTEL_ROOMS: HotelRoom[] = [
  {
    id: 'room-01',
    name: 'Junior Suite Vista Uliveto',
    type: 'Junior Suite',
    description: 'Ampia camera luminosa con letto King Size in lino toscano, balcone panoramico affacciato sulle colline e vasca da bagno freestanding.',
    pricePerNight: 280,
    maxGuests: 2,
    sizeSqm: 42,
    bedType: '1 King Size Premium',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80'
    ],
    amenities: [
      'Colazione Gourmet a Buffet',
      'Wi-Fi Fibra 1Gbps',
      'Minibar Artigianale Incluso',
      'Macchina Nespresso & Selezione Tisane',
      'Set Cortesia Acqua di Parma',
      'Smart TV 55" con Streaming'
    ],
    breakfastIncluded: true,
    cancellationPolicy: 'Cancellazione gratuita fino a 48 ore prima del check-in'
  },
  {
    id: 'room-02',
    name: 'Deluxe Suite con Terrazza Panoramica',
    type: 'Deluxe Suite',
    description: 'Suite esclusiva al piano nobile con salotto separato, caminetto in marmo e solarium privato con lettini prendisole.',
    pricePerNight: 420,
    maxGuests: 3,
    sizeSqm: 65,
    bedType: '1 King Size + Divano Letto',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1000&q=80'
    ],
    amenities: [
      'Accesso Illimitato Spa & Piscina a Sfioro',
      'Bottiglia di Franciacorta di Benvenuto',
      'Room Service H24',
      'Vasca Idromassaggio in Camera',
      'Servizio Concierge Dedicato',
      'Menu Cuscini Personalizzabile'
    ],
    breakfastIncluded: true,
    cancellationPolicy: 'Cancellazione flessibile fino a 5 giorni prima'
  },
  {
    id: 'room-03',
    name: 'Master Garden Pool Villa',
    type: 'Private Villa / Residence',
    description: 'Villa indipendente nel parco secolare con piscina privata riscaldata, giardino recintato di 500 mq, maggiordomo su richiesta.',
    pricePerNight: 890,
    maxGuests: 4,
    sizeSqm: 120,
    bedType: '2 King Size Bedrooms',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80'
    ],
    amenities: [
      'Piscina Privata Esclusiva',
      'Chef Privato per Colazione e Cena su richiesta',
      'Transfer Aeroportuale Gratuito NCC',
      'Trattamento Spa di Coppia Incluso',
      'E-bike a disposizione per il soggiorno',
      'Garage Privato Coperto'
    ],
    breakfastIncluded: true,
    cancellationPolicy: 'Rimborso 100% fino a 7 giorni prima'
  }
];

export const HOTEL_ADDONS = [
  { id: 'spa-couple', name: 'Percorso Spa di Coppia & Massaggio Relax (60 min)', price: 160 },
  { id: 'wine-tasting', name: 'Degustazione 5 Vini Pregiati in Cantina Storica', price: 90 },
  { id: 'transfer-ncc', name: 'Transfer Privato NCC da/per Aeroporto o Stazione', price: 120 },
  { id: 'romantic-setup', name: 'Allestimento Romantico con Fiori & Champagne all’arrivo', price: 85 }
];
