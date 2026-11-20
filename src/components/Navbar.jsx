import React, { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo.jfif';
import chevronDown from '../assets/chevron-down.svg';
import { useLanguage } from '../LanguageContext';

export default function Navbar({ activePage, setActivePage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const languageSwitcherRef = useRef(null);

  useEffect(() => {
    if (!isLanguageOpen) return undefined;

    const handlePointerDown = (event) => {
      if (languageSwitcherRef.current && !languageSwitcherRef.current.contains(event.target)) {
        setIsLanguageOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsLanguageOpen(false);
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLanguageOpen]);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Classes', id: 'classes' },
    { name: 'Trainers', id: 'trainers' },
    { name: 'Membership', id: 'membership' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => handleNavClick('home')}>
          <img src={logo} alt={t('SweatBox Gym')} />
        </div>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`nav-link ${activePage === link.id ? 'active' : ''}`}
              onClick={() => handleNavClick(link.id)}
            >
              {t(link.name)}
            </button>
          ))}
          <div className="language-switcher" ref={languageSwitcherRef}>
            <button
              type="button"
              className="language-toggle"
              aria-label={t('Select language')}
              aria-haspopup="menu"
              aria-expanded={isLanguageOpen}
              onClick={() => setIsLanguageOpen((open) => !open)}
            >
              {language === 'en' ? 'EN' : 'አማ'}
              <img
                src={chevronDown}
                className={`language-caret ${isLanguageOpen ? 'open' : ''}`}
                alt=""
                aria-hidden="true"
              />
            </button>
            {isLanguageOpen && (
              <div className="language-options" role="menu">
                <button
                  type="button"
                  className={`language-option ${language === 'en' ? 'active' : ''}`}
                  role="menuitemradio"
                  aria-checked={language === 'en'}
                  onClick={() => {
                    setLanguage('en');
                    setIsLanguageOpen(false);
                  }}
                >
                  {t('English')}
                </button>
                <button
                  type="button"
                  className={`language-option ${language === 'am' ? 'active' : ''}`}
                  role="menuitemradio"
                  aria-checked={language === 'am'}
                  onClick={() => {
                    setLanguage('am');
                    setIsLanguageOpen(false);
                  }}
                >
                  {t('Amharic')}
                </button>
              </div>
            )}
          </div>
          <button className="btn btn-primary nav-cta" onClick={() => handleNavClick('membership')}>
            {t('Join Now')}
          </button>
        </div>

        <button className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label={t('Toggle menu')}>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        </button>
      </div>
    </nav>
  );
}