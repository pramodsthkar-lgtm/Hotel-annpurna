/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Facilities from './components/Facilities';
import Menu from './components/Menu';
import PopularDishes from './components/PopularDishes';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import BookingModal from './components/BookingModal';

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-gold/30 selection:text-brand-brown-dark">
      <Navbar />
      <Hero />
      <About />
      <Facilities />
      <Menu />
      <PopularDishes />
      <Reviews />
      <Contact />
      <Footer />
      
      {/* Overlays / Portals */}
      <FloatingActions />
      <BookingModal />
    </div>
  );
}
