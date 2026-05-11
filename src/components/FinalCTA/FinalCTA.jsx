import styles from './FinalCTA.module.css'

export default function FinalCTA() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.eyebrow}>Ready to start?</p>
        <h2 className={styles.headline}>
          Your next client relationship starts with{' '}
          <em className={styles.accent}>the right introduction.</em>
        </h2>
        <p className={styles.body}>
          Request access today. Set your preferences once.
          Receive your first verified lead file by the end of the week.
        </p>
        <div className={styles.actions}>
          <a href="#pricing" className={styles.primaryBtn}>Request Access</a>
          <a href="mailto:hello@curata.io" className={styles.secondaryBtn}>
            Talk to us first
          </a>
        </div>
        <p className={styles.note}>No long-term contracts. Cancel any time.</p>
      </div>
    </section>
  )
}
