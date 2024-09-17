import React from 'react';
import { CakeIcon } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <CakeIcon className="h-10 w-10 text-pink-500 mr-3" />
          <div>
            <h1 className="font-playfair text-3xl font-bold text-pink-600">Cake Gallery</h1>
            <p className="text-sm text-gray-600">Entrepreneur</p>
          </div>
        </div>
        <a
          href="https://wa.me/7510238197"
          className="bg-gradient-to-r from-pink-400 to-pink-600 text-white font-bold py-2 px-4 rounded-full hover:from-pink-500 hover:to-pink-700 transition duration-300"
        >
          Order Now on WhatsApp: 7510238197
        </a>
      </div>
    </header>
  );
};

export default Header;