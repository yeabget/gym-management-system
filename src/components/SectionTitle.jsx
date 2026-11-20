import React from 'react';
import { useLanguage } from '../LanguageContext';

export default function SectionTitle({ title, subtitle, centered = false }) {
  const { t } = useLanguage();

  return (
    <div className={`section-title-wrapper ${centered ? 'text-center' : ''}`}>
      {subtitle && <span className="section-subtitle">{t(subtitle)}</span>}
      <h2 className="section-main-title">{t(title)}</h2>
      <div className={`section-underline ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
}