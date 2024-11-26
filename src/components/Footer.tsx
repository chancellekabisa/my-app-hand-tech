import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h5 className="text-white text-lg font-semibold mb-4">Address</h5>
          <p className="flex items-center mb-2"><MapPin className="w-4 h-4 mr-2" /> 123 Street, New York, USA</p>
          <p className="flex items-center mb-2"><Phone className="w-4 h-4 mr-2" /> +012 345 67890</p>
          <p className="flex items-center mb-4"><Mail className="w-4 h-4 mr-2" /> info@example.com</p>
          <div className="flex space-x-2">
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors duration-300"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors duration-300"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors duration-300"><Youtube className="w-4 h-4" /></a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors duration-300"><Linkedin className="w-4 h-4" /></a>
          </div>
        </div>
        <div>
          <h5 className="text-white text-lg font-semibold mb-4">Quick Links</h5>
          <a href="#" className="block mb-2 hover:text-primary">About Us</a>
          <a href="#" className="block mb-2 hover:text-primary">Contact Us</a>
          <a href="#" className="block mb-2 hover:text-primary">Our Services</a>
          <a href="#" className="block mb-2 hover:text-primary">Terms & Condition</a>
          <a href="#" className="block mb-2 hover:text-primary">Support</a>
        </div>
        <div>
          <h5 className="text-white text-lg font-semibold mb-4">Project Gallery</h5>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <img key={i} src={`/img/gallery-${i}.jpg`} alt={`Gallery ${i}`} className="rounded" />
            ))}
          </div>
        </div>
        <div>
          <h5 className="text-white text-lg font-semibold mb-4">Newsletter</h5>
          <p className="mb-4">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <div className="relative">
            <input type="email" placeholder="Your email" className="w-full py-2 px-4 bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-primary" />
            <button className="absolute right-0 top-0 bg-primary text-white py-2 px-4 rounded-full">SignUp</button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center">
        <p>&copy; <a href="#" className="text-primary">Your Site Name</a>, All Right Reserved.</p>
        <p className="mt-2">
          Designed By <a href="https://htmlcodex.com" className="text-primary">HTML Codex</a>
          <br />Distributed By: <a href="https://themewagon.com" target="_blank" rel="noopener noreferrer" className="text-primary">ThemeWagon</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

