import React from 'react';
import { Link } from 'react-router-dom';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <div className="bg-primary text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <nav className="text-sm">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link to="/" className="text-white">Accueil</Link>
              <svg className="w-3 h-3 mx-3" fill="currentColor" viewBox="0 0 12 12">
                <path d="M4.5 3l3 3-3 3" />
              </svg>
            </li>
            <li>{title}</li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default PageHeader;

