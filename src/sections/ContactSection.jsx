import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { useLanguage } from '../LanguageContext';

export default function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="section contact-section">
      <div className="container grid grid-2">
        <div className="contact-info">
          <SectionTitle subtitle="GET IN TOUCH" title="START YOUR JOURNEY TODAY" />
          <p>{t('Have questions about membership, training programs, or scheduling a tour? Drop us a message!')}</p>
          <div className="info-item">
            <strong>{t('Location')}:</strong> 742 Fitness Blvd, Suite 100
          </div>
          <div className="info-item">
            <strong>{t('Phone')}:</strong> (555) 019-2834
          </div>
          <div className="info-item">
            <strong>{t('Email')}:</strong> support@apexfitgym.com
          </div>
        </div>

        <div className="contact-form-wrapper">
          {submitted ? (
            <div className="success-msg">
              <h3>{t('Thank You!')}</h3>
              <p>{t('Your message has been received. Our team will contact you within 24 hours.')}</p>
              <Button onClick={() => setSubmitted(false)}>{t('Send Another Message')}</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  placeholder={t('Your Full Name')}
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder={t('Email Address')}
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  placeholder={t('Phone Number')}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="form-group">
                <textarea
                  rows="4"
                  placeholder={t('How can we help you?')}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              <Button type="submit" variant="primary" className="w-full">
                {t('Submit Request')}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}