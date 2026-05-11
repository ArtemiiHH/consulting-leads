import styles from './ProofSection.module.css'

const switchReasons = [
  {
    heading: 'Manual prospecting is expensive',
    body: "A typical BD analyst spends 8–12 hours per week building and cleaning prospect lists. At $60k+ salaries, that's real money spent on a repeatable, automatable task.",
  },
  {
    heading: 'Data quality is the bottleneck',
    body: 'Bounced emails and stale titles kill outreach campaigns before they start. Curata targets a sub-2% bounce rate through multi-step email verification before every delivery.',
  },
  {
    heading: 'Setup once, receive weekly',
    body: 'Set your consulting category, region, and company size preferences one time. After that, a verified lead file arrives in your inbox every Friday — no logins, no maintenance.',
  },
]

export default function ProofSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.quoteBlock}>
          <span className={styles.quoteMarks}>&ldquo;</span>
          <blockquote className={styles.quote}>
            Before Curata, our team spent the first two days of every week
            building prospect lists from scratch — LinkedIn, company databases,
            manual verification. Now we receive a clean, formatted file every
            Friday morning and start calls by Monday. The quality is
            consistently better than what we were producing ourselves.
          </blockquote>
          <cite className={styles.attribution}>
            <span className={styles.name}>Marcus Webb</span>
            <span className={styles.role}>Founding Partner, Webb Advisory Group</span>
          </cite>
        </div>

        <div className={styles.switchGrid}>
          <div className={styles.switchHeader}>
            <p className={styles.label}>Why teams switch</p>
            <h3 className={styles.switchTitle}>
              Why teams move away from<br />
              <em className={styles.accent}>manual prospecting</em>
            </h3>
          </div>
          <div className={styles.switchCards}>
            {switchReasons.map(r => (
              <div key={r.heading} className={styles.switchCard}>
                <h4 className={styles.cardHeading}>{r.heading}</h4>
                <p className={styles.cardBody}>{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
