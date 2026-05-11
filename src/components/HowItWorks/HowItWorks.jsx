import styles from "./HowItWorks.module.css";

const steps = [
  {
    number: "01",
    title: "Select your consulting niche",
    body: "Choose from eight consulting categories: IT, HR, Finance, Legal, Operations, Strategy, Cybersecurity, or ESG. You can cover up to three categories on Growth plans.",
    visual: (
      <div className={styles.visualPills}>
        <span className={styles.pillActive}>Finance &amp; Accounting</span>
        <span className={styles.pill}>HR &amp; Talent</span>
        <span className={styles.pill}>Strategy</span>
        <span className={styles.pill}>IT &amp; Technology</span>
      </div>
    ),
  },
  {
    number: "02",
    title: "Set geography and company size",
    body: "Filter by country, region, or city depending on your plan. Set a company size range to focus on SMBs, mid-market, or enterprise accounts.",
    visual: (
      <div className={styles.visualFilters}>
        <div className={styles.filterRow}>
          <span className={styles.filterLabel}>Region</span>
          <span className={styles.filterValue}>United Kingdom</span>
        </div>
        <div className={styles.filterRow}>
          <span className={styles.filterLabel}>Company size</span>
          <span className={styles.filterValue}>50–500 employees</span>
        </div>
        <div className={styles.filterRow}>
          <span className={styles.filterLabel}>Delivery</span>
          <span className={styles.filterValue}>Every Friday</span>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Receive your weekly lead file",
    body: "Every Friday, a secure download link arrives in your inbox. No attachments, no dashboard login required — just click and download.",
    visual: (
      <div className={styles.visualEmail}>
        <div className={styles.emailHeader}>
          <span className={styles.emailFrom}>From: delivery@leadinbox.io</span>
          <span className={styles.emailBadge}>New</span>
        </div>
        <p className={styles.emailSubject}>
          Your weekly leads are ready · Finance &amp; Accounting · UK
        </p>
        <p className={styles.emailBody}>
          47 verified contacts for Week 19, 2026. Download your file using the
          secure link below.
        </p>
        <span className={styles.emailCta}>Download Lead File →</span>
      </div>
    ),
  },
  {
    number: "04",
    title: "Start outreach with clean data",
    body: "Each lead includes name, title, company, and a verified email at minimum. Higher tiers include LinkedIn URL, phone, company size, and recent trigger events.",
    visual: (
      <div className={styles.visualFormats}>
        <div className={styles.formatCard}>
          <span className={styles.formatIcon}>📄</span>
          <span className={styles.formatLabel}>CSV</span>
          <span className={styles.formatTier}>All plans</span>
        </div>
        <div className={styles.formatCard}>
          <span className={styles.formatIcon}>📊</span>
          <span className={styles.formatLabel}>Excel</span>
          <span className={styles.formatTier}>Growth+</span>
        </div>
        <div className={styles.formatCard}>
          <span className={styles.formatIcon}>🔗</span>
          <span className={styles.formatLabel}>CRM-ready</span>
          <span className={styles.formatTier}>Pro only</span>
        </div>
      </div>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.label}>How it works</p>
          <h2 className={styles.title}>Simple by design.</h2>
          <p className={styles.subtitle}>
            Four steps from signup to receiving verified outbound-ready leads.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepLeft}>
                <span className={styles.stepNum}>{step.number}</span>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepBody}>{step.body}</p>
                </div>
              </div>
              <div className={styles.stepRight}>{step.visual}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
