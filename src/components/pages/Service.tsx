import React from 'react';
import PageHeader from '../components/PageHeader';

const Service: React.FC = () => {
  return (
    <>
      <PageHeader title="Services" />
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-4">Nos services</h1>
        <p>Liste des services...</p>
      </div>
    </>
  );
};

export default Service;

