import React from 'react';
import ProgramsSection from '../sections/ProgramsSection';
import { useLanguage } from '../LanguageContext';

export default function Classes() {
  const { t } = useLanguage();

  return (
    <div className="page-wrapper pt-nav">
      <div className="page-header">
        <h1>{t('FITNESS CLASSES')}</h1>
        <p>{t('Dynamic group sessions designed for all fitness levels.')}</p>
      </div>
      <ProgramsSection />
    </div>
  );
}