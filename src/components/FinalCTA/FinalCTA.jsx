import styles from "./FinalCTA.module.css";

export default function FinalCTA({ onCheckout }) {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.eyebrow}>Ready to start?</p>
        <h2 className={styles.headline}>
          Your next client is on{" "}
          <em className={styles.accent}>this week's list.</em>
        </h2>
        <p className={styles.body}>
          Sign up today, set your preferences once, and your first 50 leads
          arrive Monday. Most of our customers send their first outreach email
          the same day they receive the file.
        </p>
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.primaryBtn}
            onClick={() => onCheckout?.()}
          >
            Find My Next Clients
          </button>
          <a
            href="mailto:getconsultingleads@gmail.com"
            className={styles.secondaryBtn}
          >
            Talk to us first
          </a>
        </div>
        {/* <p className={styles.note}>No long-term contracts. Cancel any time.</p> */}
      </div>
    </section>
  );
}
