import styles from "./ThankYouPage.module.css";

export default function ThankYouPage({ data, onBack }) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a href="#" className={styles.logo} onClick={onBack}>
          <em>Lead</em>Inbox
        </a>
      </header>

      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.iconWrap}>
            <svg
              className={styles.icon}
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="24" r="24" fill="rgba(170,111,26,0.1)" />
              <path
                d="M14 25l7 7 13-14"
                stroke="#aa6f1a"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <p className={styles.eyebrow}>You're all set</p>
          <h1 className={styles.headline}>
            Thank you — your leads
            <br />
            <em className={styles.accent}>are on their way.</em>
          </h1>
          <p className={styles.body}>
            We've received your preferences and will send your first verified
            lead file to <strong>{data.email}</strong> by the start of the week.
          </p>

          <div className={styles.summary}>
            <p className={styles.summaryTitle}>Your preferences</p>
            <ul className={styles.summaryList}>
              {data.plan && (
                <li className={styles.summaryItem}>
                  <span className={styles.summaryLabel}>Plan</span>
                  <span className={styles.summaryValue}>{data.plan}</span>
                </li>
              )}
              <li className={styles.summaryItem}>
                <span className={styles.summaryLabel}>Consulting category</span>
                <span className={styles.summaryValue}>{data.category}</span>
              </li>
              <li className={styles.summaryItem}>
                <span className={styles.summaryLabel}>Target region</span>
                <span className={styles.summaryValue}>{data.region}</span>
              </li>
              <li className={styles.summaryItem}>
                <span className={styles.summaryLabel}>Company size</span>
                <span className={styles.summaryValue}>{data.companySize}</span>
              </li>
            </ul>
          </div>

          <button className={styles.backBtn} onClick={onBack}>
            Back to homepage
          </button>
        </div>
      </main>
    </div>
  );
}
