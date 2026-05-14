import styles from "./Pricing.module.css";

const features = [
  "50 verified leads per week",
  "3 consulting categories",
  "Country + region filter",
  "CSV + Excel export",
  "Name, title, company, email",
  "LinkedIn URL & company size",
  "Phone & tech stack",
  "CRM-ready export",
];

const plans = [
  {
    name: "Monthly",
    price: 199,
    billing: "Billed monthly",
    summary: "Full access, billed month to month. Cancel any time.",
  },
  {
    name: "Annual",
    price: 159,
    billing: "Billed $1,908/year — save $480",
    summary:
      "Same full access at a lower rate. Best value for ongoing outbound.",
    recommended: true,
  },
];

export default function Pricing({ onCheckout }) {
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

        <div className={styles.grid}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`${styles.card} ${plan.recommended ? styles.recommended : ""}`}
            >
              {plan.recommended && (
                <div className={styles.badge}>Best value</div>
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
                {features.map((f) => (
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
