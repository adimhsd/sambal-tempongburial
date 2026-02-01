import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Testimonials from './components/Testimonials';
import ContactMap from './components/ContactMap';
import FloatingWA from './components/FloatingWA';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Menu />
      <About />
      <Testimonials />
      <ContactMap />
      <Footer />
      <FloatingWA />
    </div>
  );
}

export default App;
