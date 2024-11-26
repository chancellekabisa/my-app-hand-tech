import React from 'react';
import PageHeader from './components/PageHeader';
import Projects from './components/Projects';

const Project: React.FC = () => {
  return (
    <>
      <PageHeader title="Projets" />
      <Projects />
    </>
  );
};

export default Project;

