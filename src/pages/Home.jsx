import React from 'react';
import Hero from '../sections/Hero';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import ProgramsSection from '../sections/ProgramsSection';
import TrainersSection from '../sections/TrainersSection';
import PricingSection from '../sections/PricingSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import ContactSection from '../sections/ContactSection';
import { useLanguage } from '../LanguageContext';

export default function Home({ setActivePage }) {
  const { t } = useLanguage();

  return (
    <div className="page-home">
      <Hero setActivePage={setActivePage} />
      <div
        className="home-marquee"
        aria-label={t('Strength, discipline, progress, consistency, power, and endurance')}
      >
        <div className="home-marquee-track" aria-hidden="true">
          {[0, 1].map((group) => (
            <div className="home-marquee-group" key={group}>
              <span>{t('STRENGTH')}</span>
              <span className="marquee-separator">/</span>
              <span>{t('DISCIPLINE')}</span>
              <span className="marquee-separator">/</span>
              <span>{t('PROGRESS')}</span>
              <span className="marquee-separator">/</span>
              <span>{t('CONSISTENCY')}</span>
              <span className="marquee-separator">/</span>
              <span>{t('POWER')}</span>
              <span className="marquee-separator">/</span>
              <span>{t('ENDURANCE')}</span>
              <span className="marquee-separator">/</span>
            </div>
          ))}
        </div>
      </div>
      <AboutSection setActivePage={setActivePage} />
      <ServicesSection />
      <ProgramsSection />
      <TrainersSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}