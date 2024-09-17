import React from 'react';
import { ShoppingBag } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-[400px] sm:h-[600px] bg-cover bg-center flex items-center justify-center" style={{backgroundImage: "url('/hero-background.jpg')"}}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center text-white z-10 px-4">
        <h2 className="font-playfair text-3xl sm:text-5xl font-bold mb-4">Homemade Yummy Custom Cakes and Goodies</h2>
        <p className="text-lg sm:text-xl mb-8">Baked with love in Ulliyeri, Balusseri, and Koyilandy</p>
        <a
          href="https://wa.me/7510238197"
          className="bg-gradient-to-r from-pink-400 to-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:from-pink-500 hover:to-pink-700 transition duration-300 inline-flex items-center"
        >
          <ShoppingBag className="mr-2 h-5 w-5" />
          Order Now
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
