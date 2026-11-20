import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { servicesData } from '../data/services';
import { useLanguage } from '../LanguageContext';
import profile1 from '../assets/profile1.png';
import profile2 from '../assets/profile2.jfif';
import profile3 from '../assets/profile3.png';
import profile4 from '../assets/profile4.jfif';
import profile5 from '../assets/profile5.png';
import crossfitIcon from '../assets/icons/crossfit.svg';
import strengthIcon from '../assets/icons/strength.svg';
import hiitIcon from '../assets/icons/hiit.svg';
import boxingIcon from '../assets/icons/boxing.svg';
import yogaIcon from '../assets/icons/yoga.svg';

const serviceImages = [profile1, profile2, profile3, profile4, profile5];
const serviceIcons = {
  crossfit: crossfitIcon,
  strength: strengthIcon,
  hiit: hiitIcon,
  boxing: boxingIcon,
  yoga: yogaIcon
};

export default function ServicesSection() {
  const { t } = useLanguage();
  const [activeService, setActiveService] = useState(0);
  const serviceItems = useRef([]);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (mostVisible) {
          setActiveService(Number(mostVisible.target.dataset.index));
        }
      },
      { rootMargin: '-30% 0px -35% 0px', threshold: [0, 0.25, 0.5, 0.75] }
    );

    serviceItems.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const currentService = servicesData[activeService];
  const serviceNumber = String(activeService + 1).padStart(2, '0');
  const serviceCount = String(servicesData.length).padStart(2, '0');

  return (
    <section className="section services-section bg-dark">
      <div className="container">
        <SectionTitle subtitle="OUR OFFERINGS" title="PREMIUM SERVICES FOR YOUR GOALS" centered />
        <div className="services-scroll-layout">
          <div className="services-visual">
            <div className="services-visual-meta">
              <span>{serviceNumber} / {serviceCount}</span>
              <span>{t('ADDIS ABABA')}</span>
            </div>
            <div className="services-visual-frame">
              <img
                key={activeService}
                src={serviceImages[activeService]}
                alt={t(currentService.title)}
                className="services-visual-image"
              />
            </div>
            <div className="services-visual-footer">
              <span>{t(currentService.title)}</span>
              <span>{t('MORE THAN A WORKOUT')}</span>
            </div>
          </div>

          <div className="services-list">
            {servicesData.map((service, index) => (
              <article
                key={service.id}
                ref={(element) => { serviceItems.current[index] = element; }}
                data-index={index}
                className={`service-item ${activeService === index ? 'active' : ''}`}
              >
                <span className="service-item-number">
                  {String(index + 1).padStart(2, '0')} / {serviceCount}
                </span>
                <img className="service-icon" src={serviceIcons[service.id]} alt="" aria-hidden="true" />
                <h3>{t(service.title)}</h3>
                <p>{t(service.description)}</p>
                <p className="service-item-best-for">
                  <strong>{t('Best for:')}</strong> {t(service.bestFor)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
