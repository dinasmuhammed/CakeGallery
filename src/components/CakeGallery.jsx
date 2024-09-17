import React from 'react';

const cakes = [
  { id: 1, name: 'Chocolate Delight', description: 'Rich chocolate layers with ganache', image: '/cake1.jpg' },
  { id: 2, name: 'Strawberry Dream', description: 'Fresh strawberries with cream', image: '/cake2.jpg' },
  { id: 3, name: 'Vanilla Elegance', description: 'Classic vanilla with buttercream', image: '/cake3.jpg' },
  { id: 4, name: 'Fruit Fusion', description: 'Assorted fruits on light sponge', image: '/cake4.jpg' },
  { id: 5, name: 'Red Velvet Romance', description: 'Velvety texture with cream cheese', image: '/cake5.jpg' },
  { id: 6, name: 'Lemon Zest', description: 'Tangy lemon cake with meringue', image: '/cake6.jpg' },
];

const CakeGallery = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl font-bold text-center mb-12">Our Cake Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cakes.map((cake) => (
            <div key={cake.id} className="relative overflow-hidden rounded-lg shadow-lg group">
              <img src={cake.image} alt={cake.name} className="w-full h-64 object-cover transition duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <h3 className="font-playfair text-2xl font-bold mb-2">{cake.name}</h3>
                  <p>{cake.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CakeGallery;