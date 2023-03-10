import React from 'react';

import Header from './Components/Header/Index';
import Home from './Components/Home/index';
import Paragraph from './Components/Paragraph2/index';
import Projects from './Components/Projects/index';
import Process from './Components/Process/index';
import Testimonials from './Components/Testimonials/index';
import Services from './Components/Services/index';
import Contact from './Components/Contact/index';
import Footer from './Components/Footer/index';

import './App.css';

function App() {
  return (
     <div className='App' id='app'>
        <Header />
        <Home />
        <Paragraph />
        <Projects />
        <Process />
        <Testimonials />
        <Services />
        <Contact />
        <Footer />
     </div>
  );
}

export default App;
