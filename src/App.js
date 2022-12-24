import React from 'react';

import Header from './Components/Header';
import Home from './Components/Home'
import Paragraph from './Components/Paragraph';
import Process from './Components/Process/index';
import Testimonials from './Components/Testimonials/index';
import Services from './Components/Services/index';
import Pricing from './Components/Pricing/index';
import Footer from './Components/Footer';
import Contact from './Components/Contact';

import './App.css';

function App() {
  return (
     <div className='App' id='app'>
        <Header />
        <Home />
        <Paragraph />
        <Process />
        <Testimonials />
        <Services />
        <Pricing />
        <Contact />
        <Footer />
     </div>
  );
}

export default App;
