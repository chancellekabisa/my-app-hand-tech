import React from 'react';

const PageHeader: React.FC = () => {
  return (
    <div className="bg-primary text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Projects</h1>
        <nav className="text-sm">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <a href="/" className="text-white">Home</a>
              <svg className="w-3 h-3 mx-3" fill="currentColor" viewBox="0 0 12 12">
                <path d="M4.5 3l3 3-3 3" />
              </svg>
            </li>
            <li className="flex items-center">
              <a href="#" className="text-white">Pages</a>
              <svg className="w-3 h-3 mx-3" fill="currentColor" viewBox="0 0 12 12">
                <path d="M4.5 3l3 3-3 3" />
              </svg>
            </li>
            <li>Projects</li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default PageHeader;

