import { useState } from 'react'
import styles from './Pricing.module.css'

const plans = [
  {
    name: 'Starter',
    monthly: 79,
    annual: 66,
    summary: 'For solo consultants and small teams testing a new outbound channel.',
    features: [
      { text: '25 verified leads per week', included: true },
      { text: '1 consulting category', included: true },
      { text: 'Country-level geography filter', included: true },
      { text: 'CSV export', included: true },
      { text: 'Name, title, company, email', included: true },
      { text: 'LinkedIn URL & company size', included: false },
      { text: 'Phone & tech stack', included: false },
      { text: 'CRM-ready export', included: false },
    ],
  },
  {
    name: 'Growth',
    monthly: 149,
    annual: 124,
    summary: 'For consulting teams running active outbound campaigns across multiple niches.',
    recommended: true,
    features: [
      { text: '75 verified leads per week', included: true },
      { text: '3 consulting categories', included: true },
      { text: 'Country + region filter', included: true },
      { text: 'CSV + Excel export', included: true },
      { text: 'Name, title, company, email', included: true },
      { text: 'LinkedIn URL & company size', included: true },
      { text: 'Phone & tech stack', included: false },
      { text: 'CRM-ready export', included: false },
    ],
  },
  {
    name: 'Pro',
    monthly: 299,
    annual: 249,
    summary: 'For full-service consulting firms that need complete coverage and CRM integration.',
    features: [
      { text: '200 verified leads per week', included: true },
      { text: 'All consulting categories', included: true },
      { text: 'Country + region + city filter', included: true },
      { text: 'CSV + Excel + CRM-ready export', included: true },
      { text: 'Name, title, company, email', included: true },
      { text: 'LinkedIn URL & company size', included: true },
      { text: 'Phone, tech stack & trigger events', included: true },
      { text: 'One on-demand top-up per month', included: true },
    ],
  },
]

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <section id="pricing" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.label}>Pricing</p>
          <div className={styles.titleRow}>
            <h2 className={styles.title}>
              Three plans.<br />
              <em className={styles.accent}>No surprises.</em>
            </h2>
            <p className={styles.subtitle}>
              All plans include weekly delivery, email verification, and
              preference management. Cancel any time.
            </p>
          </div>
        </div>

        <div className={styles.toggleWrap}>
          <div className={styles.toggle}>
            <button
              className={`${styles.toggleOption} ${!isAnnual ? styles.toggleActive : ''}`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`${styles.toggleOption} ${isAnnual ? styles.toggleActive : ''}`}
              onClick={() => setIsAnnual(true)}
            >
              Annually
            </button>
            <span
              className={styles.toggleSlider}
              style={{ transform: isAnnual ? 'translateX(100%)' : 'translateX(0)' }}
            />
          </div>
          <span className={`${styles.saveBadge} ${isAnnual ? styles.saveBadgeVisible : ''}`}>
            2 months free
          </span>
        </div>

        <div className={styles.grid}>
          {plans.map(plan => {
            const price = isAnnual ? plan.annual : plan.monthly
            return (
              <div
                key={plan.name}
                className={`${styles.card} ${plan.recommended ? styles.recommended : ''}`}
              >
                {plan.recommended && (
                  <div className={styles.badge}>Most popular</div>
                )}
                <div className={styles.planHeader}>
                  <h3 className={styles.planName}>{plan.name}</h3>
                  <div className={styles.priceBlock}>
                    <div className={styles.priceRow}>
                      <span className={styles.price}>${price}</span>
                      <span className={styles.period}>/mo</span>
                    </div>
                    <p className={styles.billingNote}>
                      {isAnnual
                        ? `Billed $${price * 12}/year`
                        : 'Billed monthly'}
                    </p>
                  </div>
                  <p className={styles.summary}>{plan.summary}</p>
                </div>

                <a href="#" className={`${styles.cta} ${plan.recommended ? styles.ctaPrimary : styles.ctaSecondary}`}>
                  Request Access
                </a>

                <ul className={styles.featureList}>
                  {plan.features.map(f => (
                    <li key={f.text} className={`${styles.feature} ${!f.included ? styles.excluded : ''}`}>
                      <span className={`${styles.check} ${!f.included ? styles.checkNo : ''}`}>
                        {f.included ? '✓' : '—'}
                      </span>
                      {f.text}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
