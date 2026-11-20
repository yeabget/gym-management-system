import React from 'react';
import Button from '../components/Button';
import profile1 from '../assets/profile1.png';
import profile2 from '../assets/profile2.jfif';
import profile3 from '../assets/profile3.png';
import profile4 from '../assets/profile4.jfif';
import profile5 from '../assets/profile5.png';
import profile6 from '../assets/profile6.jfif';
import { useLanguage } from '../LanguageContext';

const galleryImages = [profile2, profile3, profile4, profile5, profile6];

export default function AboutSection({ setActivePage }) {
  const { t } = useLanguage();

  return (
    <section className="section about-section">
      <div className="container about-container">
        <div className="about-heading">
          <span className="about-eyebrow">{t('WELCOME TO SWEATBOX')}</span>
          <h2>{t('MORE THAN A GYM.')}<br />{t('BUILT AROUND YOU.')}</h2>
          {setActivePage && (
            <Button variant="primary" onClick={() => setActivePage('about')}>
              {t('Discover Sweatbox')}
            </Button>
          )}
        </div>

        <div className="about-photo-strip" aria-hidden="true">
          {galleryImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt=""
              className={`about-gallery-image about-gallery-image-${index + 1}`}
            />
          ))}
        </div>

        <div className="about-story">
          <div className="about-story-content">
            <span className="about-eyebrow">{t('ABOUT US')}</span>
            <h3>{t('FIND YOUR STRENGTH AT SWEATBOX')}</h3>
            <p>
              {t('SweatBox Addis Performance Gym (APG) started with a simple goal: to bring structured, coach-led performance training to Addis Ababa. Whether you are picking up a barbell for the first time, preparing for a fight, or pushing through a CrossFit WOD, you never train alone here.')}
            </p>
            <p>
              {t('Across our branches in Bole, Sarbet, and Summit, we’ve created spaces where high-energy group workouts meet personalized guidance—helping our members build real strength, resilience, and lifelong habits.')}
            </p>
          </div>
          <img
            src={profile1}
            alt={t('Sweatbox gym floor and training equipment')}
            className="about-story-image"
          />
        </div>
      </div>
    </section>
  );
}
