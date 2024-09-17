import React from 'react';
import { PhoneIcon, MapPinIcon, InstagramIcon, FacebookIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-pink-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="font-playfair text-2xl font-bold mb-4">Cake Gallery</h3>
            <p className="flex items-center mb-2">
              <MapPinIcon className="h-5 w-5 mr-2" />
              ULLIYERI 19, BALUSSERI, KOYILANDY
            </p>
            <p className="flex items-center">
              <PhoneIcon className="h-5 w-5 mr-2" />
              7510238197
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center">
            <h4 className="font-playfair text-xl font-bold mb-4">Follow Us</h4>
            <div className="flex justify-center space-x-4">
              <a href="#" className="hover:text-pink-200 transition duration-300">
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-pink-200 transition duration-300">
                <FacebookIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 text-right">
            <p>&copy; 2024 Cake Gallery. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;