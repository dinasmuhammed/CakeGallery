import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import CakeGallery from '../components/CakeGallery';
import Testimonials from '../components/Testimonials';
import OrderSection from '../components/OrderSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#ffe6f2] bg-floral-pattern font-lato text-gray-800">
      <Header />
      <main>
        <HeroSection />
        <AboutUs />
        <CakeGallery />
        <Testimonials />
        <OrderSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
