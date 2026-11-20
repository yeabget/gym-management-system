import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { useLanguage } from '../LanguageContext';

export default function TestimonialsSection() {
  const { t } = useLanguage();

  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "Member since 2023",
      text: "Sweatbox transformed my approach to fitness. The coaches actually listen and tailor workouts to your body goals.",
      stars: 5
    },
    {
      name: "Michael Chang",
      role: "Member since 2022",
      text: "Cleanest facility in town with powerlifting gear you can’t find in regular commercial gyms. Highly recommended!",
      stars: 5
    }
  ];

  return (
    <section className="section testimonials-section bg-dark">
      <div className="container">
        <SectionTitle subtitle="SUCCESS STORIES" title="WHAT OUR MEMBERS SAY" centered />
        <div className="testimonials-grid">
          {reviews.map((rev, i) => (
            <div key={i} className="testimonial-card">
              <div className="stars">{'★'.repeat(rev.stars)}</div>
              <p className="quote">"{t(rev.text)}"</p>
              <h4>{rev.name}</h4>
              <span className="role">{t(rev.role)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}