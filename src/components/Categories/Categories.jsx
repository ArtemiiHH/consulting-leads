import styles from './Categories.module.css'

const categories = [
  {
    name: 'IT & Digital Transformation',
    desc: 'For firms advising on technology adoption, infrastructure, and digital strategy.',
  },
  {
    name: 'HR & Talent Consulting',
    desc: 'For firms handling workforce planning, recruitment, and organisational development.',
  },
  {
    name: 'Finance & Accounting',
    desc: 'For firms supporting CFOs, audits, financial restructuring, and compliance.',
  },
  {
    name: 'Legal & Compliance',
    desc: 'For firms specialising in regulatory guidance, contract management, and risk.',
  },
  {
    name: 'Operations & Supply Chain',
    desc: 'For firms optimising processes, procurement, and logistics networks.',
  },
  {
    name: 'Strategy & Management',
    desc: 'For generalist strategy consultancies and management advisors.',
  },
  {
    name: 'Cybersecurity',
    desc: 'For firms focused on security audits, incident response, and risk assessment.',
  },
  {
    name: 'ESG & Sustainability',
    desc: 'For firms advising on environmental, social, and governance reporting and strategy.',
  },
]

export default function Categories() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.label}>Who it's for</p>
          <div className={styles.headerRow}>
            <h2 className={styles.title}>
              Built for eight consulting<br />
              <em className={styles.accent}>specialties.</em>
            </h2>
            <p className={styles.desc}>
              Leads are categorised by consulting vertical so the prospects
              you receive actually match your practice area — not just any
              company with an open budget.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {categories.map((cat, i) => (
            <div key={cat.name} className={styles.card}>
              <span className={styles.cardNum}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className={styles.cardName}>{cat.name}</h3>
              <p className={styles.cardDesc}>{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
