import React, { useState } from 'react';
import { 
  Hotel, 
  Sparkles, 
  Calendar, 
  Users, 
  Bed, 
  Maximize, 
  CheckCircle2, 
  ShieldCheck, 
  Wifi, 
  Coffee, 
  Tv, 
  Phone, 
  ArrowRight, 
  Plus, 
  Check, 
  Clock, 
  Star,
  Waves,
  Compass,
  Palmtree
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { HOTEL_ROOMS, HOTEL_ADDONS } from '../../data/hotelData';
import { HotelRoom, HotelBookingQuote } from '../../types';

export const HotelDemo: React.FC = () => {
  // Booking Parameters
  const [checkIn, setCheckIn] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 3);
    return d.toISOString().split('T')[0];
  });
  const [checkOut, setCheckOut] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 6);
    return d.toISOString().split('T')[0];
  });
  const [guestsCount, setGuestsCount] = useState(2);
  const [selectedRoom, setSelectedRoom] = useState<HotelRoom>(HOTEL_ROOMS[0]);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['spa-couple']);

  // Guest Contact Form
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [isBooking, setIsBooking] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState<HotelBookingQuote | null>(null);

  // Compute number of nights
  const nights = Math.max(
    1,
    Math.round(
      (new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24)
    )
  );

  // Calculate pricing
  const roomCost = selectedRoom.pricePerNight * nights;
  const addonsCost = selectedAddons.reduce((acc, addonId) => {
    const found = HOTEL_ADDONS.find((a) => a.id === addonId);
    return acc + (found ? found.price : 0);
  }, 0);
  const cityTax = 4.5 * guestsCount * nights; // Italian city stay tax
  const grandTotal = roomCost + addonsCost + cityTax;

  const handleToggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestEmail || !guestPhone) return;

    setIsBooking(true);
    setTimeout(() => {
      setIsBooking(false);
      setBookingConfirmed({
        roomId: selectedRoom.id,
        checkIn,
        checkOut,
        nights,
        guests: guestsCount,
        selectedAddons,
        totalPrice: grandTotal
      });

      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      
      {/* Top Header */}
      <header className="border-b border-sky-900/40 bg-slate-950/90 backdrop-blur-md sticky top-0 z-30 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-sky-500/20">
              <Waves className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif-luxury text-lg sm:text-xl font-bold tracking-widest text-sky-100 block">
                VILLA SERAPHINA
              </span>
              <span className="text-[10px] text-sky-400 tracking-widest uppercase block font-semibold">
                Riviera Resort & Luxury SPA Retreat
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-xs text-slate-300 font-medium">
            <a href="#suites" className="hover:text-sky-400 transition-colors">Suites & Vista Mare</a>
            <a href="#esperienze" className="hover:text-sky-400 transition-colors">Percorsi SPA</a>
            <a href="#prenota" className="hover:text-sky-400 transition-colors">Booking Online</a>
          </div>

          <button
            onClick={() => document.getElementById('prenota')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition-all shadow-md shadow-sky-500/25 hover:scale-[1.02] cursor-pointer"
          >
            Verifica Tariffe
          </button>
        </div>
      </header>

      {/* Hero with Panorama */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=80"
            alt="Villa Seraphina Hotel"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-900/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-sky-500/15 border border-sky-400/40 text-sky-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" /> 5-Star Luxury Riviera Resort & Spa
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Il Lusso della Riviera Italiana Tra Mare & Benessere
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Solo 8 suite private con terrazza panoramica a picco sul mare, infinity pool riscaldata, percorso talassoterapia e concierge 24/7.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => document.getElementById('prenota')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs transition-all shadow-lg shadow-sky-500/25 cursor-pointer"
            >
              Prenota il Tuo Soggiorno
            </button>
            <a
              href="#esperienze"
              className="bg-slate-900/80 hover:bg-slate-800 border border-sky-900/60 text-slate-200 px-6 py-3 rounded-xl text-xs font-semibold transition-all"
            >
              Esplora i Trattamenti SPA
            </a>
          </div>
        </div>
      </section>

      {/* Main Booking Engine & Rooms Section */}
      <main id="prenota" className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-10">
        
        {/* Date & Guest Picker Bar */}
        <div className="bg-slate-900/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-sky-900/50 shadow-xl grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-sky-400" /> Check-in
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-sky-400"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-sky-400" /> Check-out
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-sky-400"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-sky-400" /> Ospiti & Notti
            </label>
            <div className="flex gap-2">
              <select
                value={guestsCount}
                onChange={(e) => setGuestsCount(Number(e.target.value))}
                className="w-1/2 px-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-sky-400"
              >
                <option value={1}>1 Ospite</option>
                <option value={2}>2 Ospiti</option>
                <option value={3}>3 Ospiti</option>
                <option value={4}>4 Ospiti</option>
              </select>
              <div className="w-1/2 px-3 py-2 text-xs bg-sky-950/80 border border-sky-800/60 text-sky-300 font-bold rounded-xl flex items-center justify-center font-mono">
                {nights} {nights === 1 ? 'Notte' : 'Notti'}
              </div>
            </div>
          </div>
        </div>

        {/* Room Selection & Live Quotation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Rooms Catalog (7 cols) */}
          <div className="lg:col-span-7 space-y-6" id="suites">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sky-400 font-bold text-xs uppercase tracking-wider block">Collezione Esclusiva</span>
                <h2 className="font-serif-luxury text-2xl font-bold text-white">
                  Seleziona la Tua Suite Preferita
                </h2>
              </div>
              <span className="text-xs text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full">
                8 Suite Disponibili
              </span>
            </div>

            <div className="space-y-4">
              {HOTEL_ROOMS.map((room) => {
                const isSelected = selectedRoom.id === room.id;
                return (
                  <div
                    key={room.id}
                    onClick={() => setSelectedRoom(room)}
                    className={`bg-slate-900/80 rounded-2xl p-4 sm:p-5 border transition-all cursor-pointer flex flex-col sm:flex-row gap-4 ${
                      isSelected
                        ? 'border-sky-400 ring-2 ring-sky-500/30 shadow-xl shadow-sky-500/10 bg-slate-900'
                        : 'border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full sm:w-44 h-36 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-serif-luxury font-bold text-lg text-white">
                            {room.name}
                          </h3>
                          <div className="text-right">
                            <span className="text-base font-extrabold text-sky-400 font-mono">
                              €{room.pricePerNight}
                            </span>
                            <span className="text-[10px] text-slate-400 block">/ notte</span>
                          </div>
                        </div>

                        <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                          {room.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300 mt-3 pt-2 border-t border-slate-800">
                        <span>• {room.sizeSqm} m² • {room.bedType}</span>
                        <span className="text-emerald-400 font-semibold">✓ Colazione & SPA Inclusi</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Add-on Experiences Selection */}
            <div className="pt-4 space-y-3" id="esperienze">
              <h3 className="font-bold text-base text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-400" /> Esperienze & Pacchetti Esclusivi
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {HOTEL_ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => handleToggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-start justify-between gap-2 ${
                        isChecked
                          ? 'bg-sky-500/15 border-sky-400 text-white font-medium shadow-sm'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800/80'
                      }`}
                    >
                      <div className="text-xs">
                        <div className="font-bold text-slate-200">{addon.name}</div>
                        <div className="text-sky-400 font-mono mt-0.5">+€{addon.price} una tantum</div>
                      </div>
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 ${
                        isChecked ? 'bg-sky-500 text-slate-950' : 'border border-slate-700'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Live Price Breakdown & Booking Form (5 cols) */}
          <div className="lg:col-span-5 bg-slate-900/90 backdrop-blur-md p-6 rounded-3xl border border-sky-900/50 space-y-6 shadow-2xl sticky top-24">
            <div>
              <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
                Preventivo Trasparente
              </span>
              <h3 className="font-serif-luxury text-xl font-bold text-white mt-0.5">
                Riepilogo Soggiorno
              </h3>
            </div>

            {/* Breakdown lines */}
            <div className="space-y-2.5 text-xs text-slate-300 border-b border-slate-800 pb-4">
              <div className="flex justify-between">
                <span>{selectedRoom.name} ({nights} {nights === 1 ? 'notte' : 'notti'}):</span>
                <strong className="text-white font-mono">€{roomCost.toLocaleString('it-IT')}</strong>
              </div>

              {selectedAddons.length > 0 && (
                <div className="flex justify-between">
                  <span>Esperienze & Extra selezionati:</span>
                  <strong className="text-sky-300 font-mono">€{addonsCost.toLocaleString('it-IT')}</strong>
                </div>
              )}

              <div className="flex justify-between text-slate-400">
                <span>Imposta di soggiorno (€4.50/notte per ospite):</span>
                <span className="font-mono">€{cityTax.toFixed(2)}</span>
              </div>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400">Totale Complessivo</span>
                <div className="text-3xl font-extrabold text-sky-400 font-display">
                  €{grandTotal.toLocaleString('it-IT')}
                </div>
              </div>
              <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800 px-2.5 py-1 rounded-full font-bold">
                Miglior Tariffa Garantita
              </span>
            </div>

            {/* Booking Form or Confirmation */}
            {bookingConfirmed ? (
              <div className="bg-slate-950 p-5 rounded-2xl border border-emerald-500/40 text-center space-y-3 animate-fadeIn">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="font-bold text-white text-base font-display">
                  Richiesta di Prenotazione Inviata!
                </h4>
                <p className="text-xs text-slate-300">
                  Grazie <strong>{guestName}</strong>. Il nostro concierge verificherà la disponibilità per la <strong>{selectedRoom.name}</strong> dal <strong>{checkIn}</strong> al <strong>{checkOut}</strong> e ti contatterà al <strong>{guestPhone}</strong>.
                </p>
                <button
                  onClick={() => setBookingConfirmed(null)}
                  className="bg-sky-500 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs hover:bg-sky-400 transition-colors cursor-pointer"
                >
                  Nuova Prenotazione
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-3 pt-2">
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 mb-1">
                    Nome e Cognome Ospite Principale *
                  </label>
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="es. Marco Cerilli"
                    className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-sky-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      Telefono *
                    </label>
                    <input
                      type="tel"
                      required
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      placeholder="+39 340 1234567"
                      className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-sky-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      placeholder="email@dominio.it"
                      className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-sky-400"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isBooking}
                  className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-slate-950 font-bold py-3 rounded-xl text-xs transition-all shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  {isBooking ? <span>Elaborazione richiesta...</span> : <span>Invia Richiesta di Prenotazione</span>}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-500 bg-slate-950">
        Villa Seraphina Luxury Riviera Resort & SPA • Lungomare delle Sirene 42, Portofino (GE) • info@villaseraphina.it
      </footer>
    </div>
  );
};
