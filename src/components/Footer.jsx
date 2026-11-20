import React from 'react';
import logo from '../assets/logo.jfif';
import { useLanguage } from '../LanguageContext';

export default function Footer({ setActivePage }) {
  const { t } = useLanguage();

  const navigate = (id) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col brand-col">
          <h3 className="footer-logo">
            <img src={logo} alt={t('SweatBox Gym')} />
          </h3>
          <p>{t('Transforming lives through elite training facilities, expert coaching, and a supportive fitness community.')}</p>
          <div className="social-links">
            <a href="#instagram" aria-label="Instagram">IG</a>
            <a href="#facebook" aria-label="Facebook">FB</a>
            <a href="#twitter" aria-label="Twitter">TW</a>
            <a href="#youtube" aria-label="YouTube">YT</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>{t('Quick Links')}</h4>
          <ul>
            <li><button onClick={() => navigate('home')}>{t('Home')}</button></li>
            <li><button onClick={() => navigate('about')}>{t('About Us')}</button></li>
            <li><button onClick={() => navigate('classes')}>{t('Classes')}</button></li>
            <li><button onClick={() => navigate('trainers')}>{t('Our Trainers')}</button></li>
            <li><button onClick={() => navigate('membership')}>{t('Membership')}</button></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t('Working Hours')}</h4>
          <p><strong>{t('Monday - Friday:')}</strong> 5:00 AM - 11:00 PM</p>
          <p><strong>{t('Saturday:')}</strong> 6:00 AM - 10:00 PM</p>
          <p><strong>{t('Sunday:')}</strong> 7:00 AM - 8:00 PM</p>
          <p className="highlight">{t('24/7 Access for VIP Members')}</p>
        </div>

        <div className="footer-col">
          <h4>{t('Location & Contact')}</h4>
          <p>📍 742 Fitness Blvd, Suite 100</p>
          <p>📞 (555) 019-2834</p>
          <p>✉️ info@apexfitgym.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {t('SweatBox Gym Management. All Rights Reserved.')}</p>
      </div>
    </footer>
  );
}