import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import profile1 from '../assets/profile1.png';
import profile2 from '../assets/profile2.jfif';
import profile3 from '../assets/profile3.png';
import profile4 from '../assets/profile4.jfif';
import profile5 from '../assets/profile5.png';
import profile6 from '../assets/profile6.jfif';
import profile7 from '../assets/profile7.jfif';
import { useLanguage } from '../LanguageContext';

const heroImages = [profile1, profile2, profile3, profile4, profile5, profile6, profile7];

export default function Hero({ setActivePage }) {
  const [activeImage, setActiveImage] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveImage((currentImage) => (currentImage + 1) % heroImages.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="hero">
      <div className="hero-slideshow" aria-hidden="true">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`hero-slide ${index === activeImage ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          {t('BUILD YOUR')} <span>{t('ULTIMATE')}</span> {t('BODY')}
        </h1>
        <p className="hero-description">
          {t('From high-intensity CrossFit and combat sports to personalized coaching and recovery—everything you need to hit your goals under one roof.')}
        </p>
        <div className="hero-buttons">
          <Button variant="primary" size="lg" onClick={() => setActivePage('membership')}>
            {t('Get Started')}
          </Button>
          <Button variant="outline" size="lg" onClick={() => setActivePage('classes')}>
            {t('Explore Classes')}
          </Button>
        </div>
      </div>
    </section>
  );
}