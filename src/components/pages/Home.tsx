import React from 'react';
import PageHeader from '../components/PageHeader';
import Projects from '../components/Projects';
import Quote from '../components/Quote';
import Testimonial from '../components/Testimonial';

const Home: React.FC = () => {
  return (
    <>
      <PageHeader title="Accueil" />
      <Projects />
      <Quote />
      <Testimonial />
    </>
  );
};

export default Home;

