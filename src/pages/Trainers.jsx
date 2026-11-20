import React from 'react';
import TrainersSection from '../sections/TrainersSection';
import { useLanguage } from '../LanguageContext';

export default function Trainers() {
  const { t } = useLanguage();

  return (
    <div className="page-wrapper pt-nav">
      <div className="page-header">
        <h1>{t('OUR COACHES')}</h1>
        <p>{t('Certified experts dedicated to your physical growth and safety.')}</p>
      </div>
      <TrainersSection />
    </div>
  );
}