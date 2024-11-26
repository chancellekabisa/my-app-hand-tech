import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        <img src="img/logo.jpg" alt="" />
        <Link to="/" className="text-2xl font-bold text-primary"></Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-700 hover:text-primary">Accueil</Link>
          <Link to="/about" className="text-gray-700 hover:text-primary">À propos</Link>
          <Link to="/service" className="text-gray-700 hover:text-primary">Services</Link>
          <Link to="/project" className="text-gray-700 hover:text-primary">Projets</Link>
          <Link to="/contact" className="text-gray-700 hover:text-primary">Contact</Link>
        </div>
        <Link to="/quote" className="hidden md:block bg-primary text-white px-6 py-2 rounded">Obtenir un devis</Link>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link to="/" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Accueil</Link>
          <Link to="/about" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">À propos</Link>
          <Link to="/service" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Services</Link>
          <Link to="/project" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Projets</Link>
          <Link to="/contact" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

