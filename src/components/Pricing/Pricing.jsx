import { useState } from "react";
import styles from "./Pricing.module.css";

const monthlyPlans = [
  {
    name: "Starter",
    price: 99,
    billing: "Billed monthly",
    summary: "Get started with targeted leads in one niche. Cancel any time.",
    features: [
      "25 verified leads/week",
      "1 consulting category",
      "Country filter",
      "CSV export",
      "Name, title, company, email",
    ],
  },
  {
    name: "Growth",
    price: 199,
    billing: "Billed monthly",
    summary: "Full access across multiple niches. Most popular for solo consultants.",
    recommended: true,
    features: [
      "50 verified leads/week",
      "3 consulting categories",
      "Country + region filter",
      "CSV + Excel export",
      "Name, title, company, email",
      "LinkedIn URL & company size",
      "Phone & tech stack",
    ],
  },
  {
    name: "Pro",
    price: 349,
    billing: "Billed monthly",
    summary: "Maximum volume for agencies and high-output outbound teams.",
    features: [
      "100 verified leads/week",
      "5 consulting categories",
      "Country + region + city filter",
      "CSV + Excel export",
      "Name, title, company, email",
      "LinkedIn URL & company size",
      "Phone & tech stack",
      "CRM-ready export",
      "Priority support",
    ],
  },
];

const annualPlans = [
  {
    name: "Starter",
    price: 79,
    billing: "Billed $948/year — save $240",
    summary: "Get started with targeted leads in one niche. Cancel any time.",
    features: [
      "25 verified leads/week",
      "1 consulting category",
      "Country filter",
      "CSV export",
      "Name, title, company, email",
    ],
  },
  {
    name: "Growth",
    price: 159,
    billing: "Billed $1,908/year — save $480",
    summary: "Full access across multiple niches. Most popular for solo consultants.",
    recommended: true,
    features: [
      "50 verified leads/week",
      "3 consulting categories",
      "Country + region filter",
      "CSV + Excel export",
      "Name, title, company, email",
      "LinkedIn URL & company size",
      "Phone & tech stack",
    ],
  },
  {
    name: "Pro",
    price: 279,
    billing: "Billed $3,348/year — save $840",
    summary: "Maximum volume for agencies and high-output outbound teams.",
    features: [
      "100 verified leads/week",
      "5 consulting categories",
      "Country + region + city filter",
      "CSV + Excel export",
      "Name, title, company, email",
      "LinkedIn URL & company size",
      "Phone & tech stack",
      "CRM-ready export",
      "Priority support",
    ],
  },
];

export default function Pricing({ onCheckout }) {
  const [billing, setBilling] = useState("annual");
  const plans = billing === "annual" ? annualPlans : monthlyPlans;

  return (
    <section id="pricing" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.label}>Pricing</p>
          <div className={styles.titleRow}>
            <h2 className={styles.title}>
              One lead that converts — pays
              <br />
              <em className={styles.accent}>for a year of LeadInbox.</em>
            </h2>
            <p className={styles.subtitle}>
              All plans include weekly delivery, email verification, and
              preference management. Cancel any time.
            </p>
          </div>
        </div>

        <div className={styles.toggle}>
          <button
            type="button"
            className={`${styles.toggleBtn} ${billing === "monthly" ? styles.toggleActive : ""}`}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </button>
          <button
            type="button"
            className={`${styles.toggleBtn} ${billing === "annual" ? styles.toggleActive : ""}`}
            onClick={() => setBilling("annual")}
          >
            Annual
            <span className={styles.saveBadge}>Save 20%</span>
          </button>
        </div>

        <div className={styles.grid}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`${styles.card} ${plan.recommended ? styles.recommended : ""}`}
            >
              {plan.recommended && (
                <div className={styles.badge}>Most popular</div>
              )}
              <div className={styles.planHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <div className={styles.priceBlock}>
                  <div className={styles.priceRow}>
                    <span className={styles.price}>${plan.price}</span>
                    <span className={styles.period}>/mo</span>
                  </div>
                  <p className={styles.billingNote}>{plan.billing}</p>
                </div>
                <p className={styles.summary}>{plan.summary}</p>
              </div>

              <button
                type="button"
                className={`${styles.cta} ${plan.recommended ? styles.ctaPrimary : styles.ctaSecondary}`}
                onClick={() => onCheckout?.(plan.name)}
              >
                Claim This Week's Leads
              </button>

              <ul className={styles.featureList}>
                {plan.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <span className={styles.check}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className={styles.footnote}>
          At $199/month, that&apos;s $4 per lead.{" "}
          <strong>One signed client covers your subscription for years.</strong>
        </p>
      </div>
    </section>
  );
}
