import styles from "./ProductOverview.module.css";

const leads = [
  {
    name: "Sarah Klein",
    title: "Managing Director",
    company: "Northlane Ltd",
    region: "United Kingdom",
    verified: "May 9, 2026",
    email: "✓ verified",
  },
  {
    name: "Matteo Rossi",
    title: "CEO",
    company: "Ventaro Group",
    region: "Italy",
    verified: "May 9, 2026",
    email: "✓ verified",
  },
  {
    name: "Elena Papacosta",
    title: "COO",
    company: "Rivet Works",
    region: "Cyprus",
    verified: "May 9, 2026",
    email: "✓ verified",
  },
  {
    name: "James Porter",
    title: "Operations Manager",
    company: "Crestfield Advisory",
    region: "United Kingdom",
    verified: "May 9, 2026",
    email: "✓ verified",
  },
  {
    name: "Nora Lindqvist",
    title: "Managing Director",
    company: "Nordvik Partners",
    region: "Sweden",
    verified: "May 9, 2026",
    email: "✓ verified",
  },
];

export default function ProductOverview() {
  return (
    <section id="product" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.label}>Product</p>
          <div className={styles.headerRow}>
            <div className={styles.headerLeft}>
              <h2 className={styles.title}>
                Every Monday,
                <br />
                <em className={styles.accent}>your leads are waiting.</em>
              </h2>
            </div>
            <p className={styles.desc}>
              You get a spreadsheet with 50 companies that match your consulting
              specialty, region, and company size.
            </p>
          </div>
        </div>

        <div className={styles.mockup}>
          <div className={styles.mockupHeader}>
            <span className={styles.mockupTitle}>Finance &amp; Accounting · United Kingdom · Week 19, 2026</span>
            <span className={styles.mockupCount}>47 leads</span>
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Title</th>
                  <th>Company</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((l) => (
                  <tr key={l.name}>
                    <td className={styles.nameCell}>{l.name}</td>
                    <td>{l.title}</td>
                    <td>{l.company}</td>
                    <td className={styles.emailCell}>{l.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.mockupFooter}>
            <span className={styles.footerCount}>Showing 5 of 47</span>
            <a href="#pricing" className={styles.downloadLink}>
              Download file
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M6 1v7M3 5l3 3 3-3M2 11h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.deliveryCard}>
          <div className={styles.deliveryIcon}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="2"
                y="4"
                width="16"
                height="13"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M2 7l8 5 8-5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className={styles.deliveryBody}>
            <p className={styles.deliveryTitle}>Weekly lead file ready</p>
            <p className={styles.deliveryMeta}>
              47 verified contacts · Finance &amp; Accounting · UK
            </p>
          </div>
          <div className={styles.deliveryBadges}>
            <span className={styles.deliveryBadge}>CSV + Excel export</span>
            <span className={styles.deliveryVerified}>
              Verified May 9, 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
