import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <img  className="text-2xl font-bold text-blue-600"src="./img/log.jpg" alt="logo"  />
       
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:text-blue-600">Accuiel</a></li>
          <li><a href="/about" className="hover:text-blue-600">A propos</a></li>
          <li><a href="/service" className="hover:text-blue-600">Service</a></li>
          <li><a href="/project" className="hover:text-blue-600">Project</a></li>
          <li><a href="/contact" className="hover:text-blue-600 font-semibold">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

