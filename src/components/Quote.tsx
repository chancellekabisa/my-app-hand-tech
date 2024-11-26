import React from 'react';

const Quote: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <img src="/img/quote.jpg" alt="Quote" className="w-full h-full object-cover" />
        </div>
        <div className="lg:w-1/2 p-8">
          <h6 className="text-primary font-bold mb-2">Free Quote</h6>
          <h1 className="text-4xl font-bold mb-4">Get A Free Quote</h1>
          <p className="mb-6">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-primary" />
              <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-primary" />
              <input type="text" placeholder="Your Mobile" className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-primary" />
              <select className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Select A Service</option>
                <option>Service 1</option>
                <option>Service 2</option>
                <option>Service 3</option>
              </select>
            </div>
            <textarea placeholder="Special Note" className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-primary" rows={4}></textarea>
            <button type="submit" className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition-colors duration-300">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Quote;

