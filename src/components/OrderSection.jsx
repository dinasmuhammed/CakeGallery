import React from 'react';
import { ShoppingBag } from 'lucide-react';

const OrderSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-playfair text-3xl sm:text-4xl font-bold mb-8">Place Your Order Today!</h2>
        <a
          href="https://wa.me/7510238197"
          className="inline-flex items-center bg-gradient-to-r from-pink-400 to-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:from-pink-500 hover:to-pink-700 transition duration-300"
        >
          <ShoppingBag className="mr-2 h-5 w-5" />
          Order Now on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default OrderSection;
