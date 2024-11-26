import React from 'react';
import PageHeader from '../components/PageHeader';

const About: React.FC = () => {
  return (
    <>
      <PageHeader title="À propos" />
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-4">À propos de nous</h1>
        <p>Contenu de la page À propos...</p>
      </div>
    </>
  );
};

export default About;

