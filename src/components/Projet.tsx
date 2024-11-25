import React, { useState } from 'react';
import { Eye, Link } from 'lucide-react';

const projects = [
  { id: 1, category: 'solar', image: '/img/img-600x400-6.jpg', title: 'Solar Panels' },
  { id: 2, category: 'wind', image: '/img/img-600x400-5.jpg', title: 'Wind Turbines' },
  { id: 3, category: 'hydro', image: '/img/img-600x400-4.jpg', title: 'Hydropower Plants' },
  { id: 4, category: 'solar', image: '/img/img-600x400-3.jpg', title: 'Solar Panels' },
  { id: 5, category: 'wind', image: '/img/img-600x400-2.jpg', title: 'Wind Turbines' },
  { id: 6, category: 'hydro', image: '/img/img-600x400-1.jpg', title: 'Hydropower Plants' },
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

  return (
    <div className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h6 className="text-primary font-bold mb-2">Nos projets</h6>
          <h1 className="text-4xl font-bold mb-4">Visitez nos derniers projets d'énergie solaire et renouvelable
        <div className="flex justify-center mb-8">
          <button onClick={() => setFilter('all')} className={`mx-2 ${filter === 'all' ? 'text-primary' : 'text-gray-700'}`}>All</button>
          <button onClick={() => setFilter('solar')} className={`mx-2 ${filter === 'solar' ? 'text-primary' : 'text-gray-700'}`}>Solar Panels</button>
          <button onClick={() => setFilter('wind')} className={`mx-2 ${filter === 'wind' ? 'text-primary' : 'text-gray-700'}`}>Wind Turbines</button>
          <button onClick={() => setFilter('hydro')} className={`mx-2 ${filter === 'hydro' ? 'text-primary' : 'text-gray-700'}`}>Hydropower Plants</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative">
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a href="#" className="text-white mx-2"><Eye className="w-6 h-6" /></a>
                  <a href="#" className="text-white mx-2"><Link className="w-6 h-6" /></a>
                </div>
              </div>
              <div className="p-4">
                <p className="text-primary mb-2">{project.title}</p>
                <hr className="border-primary w-1/4 mb-2" />
                <h5 className="text-lg font-semibold">Nous sommes des pionniers de l'industrie de l'énergie solaire et renouvelable</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

