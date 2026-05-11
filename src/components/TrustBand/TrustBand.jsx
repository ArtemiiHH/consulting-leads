import styles from './TrustBand.module.css'

const verticals = [
  'IT Consulting',
  'HR & Talent',
  'Finance & Accounting',
  'Legal & Compliance',
  'Operations',
  'Strategy',
  'Cybersecurity',
  'ESG & Sustainability',
]

export default function TrustBand() {
  return (
    <div className={styles.band}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.label}>Serving teams across</span>
        <div className={styles.divider} />
        <div className={styles.list}>
          {verticals.map((v, i) => (
            <span key={v} className={styles.item}>
              {v}
              {i < verticals.length - 1 && <span className={styles.dot}>·</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
