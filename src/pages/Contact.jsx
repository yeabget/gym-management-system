import React from 'react';
import ContactSection from '../sections/ContactSection';
import { useLanguage } from '../LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="page-wrapper pt-nav">
      <div className="page-header">
        <h1>{t('CONTACT US')}</h1>
        <p>{t('Reach out or visit us in person to take your first step.')}</p>
      </div>
      <ContactSection />
    </div>
  );
}