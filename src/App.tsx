import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;

