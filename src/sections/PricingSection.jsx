import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { plansData } from '../data/plans';
import { useLanguage } from '../LanguageContext';

export default function PricingSection() {
  const { t } = useLanguage();

  return (
    <section className="section pricing-section">
      <div className="container">
        <SectionTitle subtitle="PRICING PLANS" title="CHOOSE YOUR MEMBERSHIP" centered />
        <div className="pricing-grid">
          {plansData.map((plan) => (
            <div key={plan.id} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <span className="badge-popular">{t('MOST POPULAR')}</span>}
              <h3>{t(plan.name)}</h3>
              <div className="price-box">
                <span className="currency">$</span>
                <span className="price">{plan.price}</span>
                <span className="billing">/{t(plan.billing)}</span>
              </div>
              <ul className="features-list">
                {plan.features.map((feat, idx) => (
                  <li key={idx}>✓ {t(feat)}</li>
                ))}
              </ul>
              <Button variant={plan.popular ? 'primary' : 'outline'} className="w-full">
                {t('Select Plan')}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}