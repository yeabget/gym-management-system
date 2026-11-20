import React from 'react';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import { useLanguage } from '../LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="page-wrapper pt-nav">
      <div className="page-header">
        <h1>{t('ABOUT SWEATBOX')}</h1>
        <p>{t('Dedicated to helping individuals achieve peak physical condition.')}</p>
      </div>
      <AboutSection />
      <ServicesSection />
    </div>
  );
}