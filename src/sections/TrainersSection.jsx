import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { trainersData } from '../data/trainers';
import { useLanguage } from '../LanguageContext';

export default function TrainersSection() {
  const { t } = useLanguage();

  return (
    <section className="section trainers-section bg-dark">
      <div className="container">
        <SectionTitle subtitle="EXPERT TEAM" title="MEET OUR WORLD-CLASS COACHES" centered />
        <div className="trainers-grid">
          {trainersData.map((trainer) => (
            <div key={trainer.id} className="trainer-card">
              <div className="trainer-image-box">
                <img src={trainer.image} alt={trainer.name} />
              </div>
              <div className="trainer-info">
                <h3>{trainer.name}</h3>
                <span className="trainer-role">{t(trainer.role)}</span>
                <p>{t(trainer.bio)}</p>
                <div className="specialties-tags">
                  {trainer.specialties.map((spec, i) => (
                    <span key={i} className="tag">{t(spec)}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}