import React from 'react';
import PageHeader from '../PageHeader';
import Projects from '../Project';
import Testimonial from '../Testemonial';
import { Quote } from 'lucide-react';

 



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

