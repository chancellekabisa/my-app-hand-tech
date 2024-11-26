import React from 'react';
import { MapPin, Clock, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Topbar: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white py-2 hidden lg:block">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 text-primary mr-2" />
            <small>Kinshasa</small>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 text-primary mr-2" />
            <small>Lund - Vend : 09.00 AM - 09.00 </small>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Phone className="w-4 h-4 text-primary mr-2" />
            <small>+243823131596</small>
          </div>
          <div className="flex items-center space-x-2">
            <a href="#" className="text-white hover:text-primary"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="text-white hover:text-primary"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="text-white hover:text-primary"><Linkedin className="w-4 h-4" /></a>
            <a href="#" className="text-white hover:text-primary"><Instagram className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

