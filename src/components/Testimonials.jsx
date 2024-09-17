import React from 'react';

const testimonials = [
  { id: 1, name: 'Sarah M.', text: 'The cake was absolutely stunning and tasted even better! Cake Gallery made our wedding day extra special.' },
  { id: 2, name: 'John D.', text: 'I ordered a birthday cake for my daughter, and it exceeded all expectations. The design was perfect, and the taste was heavenly!' },
  { id: 3, name: 'Emily R.', text: 'The attention to detail is amazing. Our anniversary cake was not only beautiful but also delicious. Highly recommended!' },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-5xl text-pink-300 mb-4">"</div>
              <p className="text-lg mb-4">{testimonial.text}</p>
              <p className="font-bold text-right">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;