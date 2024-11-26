import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    image: '/img/testimonial-1.jpg',
    content: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.',
    name: 'Client Name',
    profession: 'Profession'
  },
  {
    id: 2,
    image: '/img/testimonial-2.jpg',
    content: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.',
    name: 'Client Name',
    profession:
'Profession'
  },
  {
    id: 3,
    image: '/img/testimonial-3.jpg',
    content: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.',
    name: 'Client Name',
    profession: 'Profession'
  }
];

const Testimonial: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h6 className="text-primary font-bold mb-2">Testimonial</h6>
          <h1 className="text-4xl font-bold mb-4">What Our Clients Say!</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="relative mb-8">
                <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto" />
                <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2 bg-primary rounded-full p-2">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="mb-4">{testimonial.content}</p>
              <h5 className="font-bold">{testimonial.name}</h5>
              <span className="text-gray-600">{testimonial.profession}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

