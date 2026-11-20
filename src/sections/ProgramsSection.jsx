import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { useLanguage } from '../LanguageContext';

export default function ProgramsSection() {
  const { t } = useLanguage();

  const programs = [
    { title: 'Cross Training', duration: '60 Min', intensity: 'High', img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80' },
    { title: 'Powerlifting Base', duration: '75 Min', intensity: 'Extreme', img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80' },
    { title: 'HIIT & Conditioning', duration: '45 Min', intensity: 'High', img: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <section className="section programs-section">
      <div className="container">
        <SectionTitle subtitle="FEATURED PROGRAMS" title="BUILT FOR EVERY FITNESS LEVEL" centered />
        <div className="programs-grid">
          {programs.map((prog, idx) => (
            <div key={idx} className="program-card">
              <img src={prog.img} alt={t(prog.title)} />
              <div className="program-content">
                <div className="program-meta">
                  <span>⏱️ {t(prog.duration)}</span>
                  <span>🔥 {t(prog.intensity)}</span>
                </div>
                <h3>{t(prog.title)}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}