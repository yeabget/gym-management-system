import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { LanguageProvider } from './LanguageProvider';

import Home from './pages/Home';
import About from './pages/About';
import Membership from './pages/Membership';
import Trainers from './pages/Trainers';
import Classes from './pages/Classes';
import Contact from './pages/Contact';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'about':
        return <About />;
      case 'membership':
        return <Membership />;
      case 'trainers':
        return <Trainers />;
      case 'classes':
        return <Classes />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="app">
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        <main className="main-content">{renderPage()}</main>
        <Footer setActivePage={setActivePage} />
      </div>
    </LanguageProvider>
  );
}