import React from 'react';
import PricingSection from '../sections/PricingSection';
import { useLanguage } from '../LanguageContext';

export default function Membership() {
  const { t } = useLanguage();

  return (
    <div className="page-wrapper pt-nav">
      <div className="page-header">
        <h1>{t('MEMBERSHIP PLANS')}</h1>
        <p>{t('Transparent pricing with no hidden fees. Select the plan that matches your goals.')}</p>
      </div>
      <PricingSection />
    </div>
  );
}