import styles from "./ProductOverview.module.css";

const kpis = [
  { value: "47", label: "Leads this week" },
  { value: "46", label: "Verified emails", badge: "✓" },
  { value: "3", label: "Active filters" },
  { value: "May 9", label: "Last delivery" },
];

const leads = [
  {
    name: "Sarah Klein",
    title: "HR Director",
    company: "Northlane Ltd",
    region: "United Kingdom",
    verified: "May 9, 2026",
    email: "✓ verified",
  },
  {
    name: "Matteo Rossi",
    title: "CFO",
    company: "Ventaro Group",
    region: "Italy",
    verified: "May 9, 2026",
    email: "✓ verified",
  },
  {
    name: "Elena Costa",
    title: "COO",
    company: "Rivet Works",
    region: "Spain",
    verified: "May 9, 2026",
    email: "✓ verified",
  },
  {
    name: "James Porter",
    title: "VP Finance",
    company: "Crestfield Advisory",
    region: "United Kingdom",
    verified: "May 9, 2026",
    email: "✓ verified",
  },
  {
    name: "Nora Lindqvist",
    title: "Strategy Director",
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
                Your weekly lead delivery,
                <br />
                <em className={styles.accent}>ready for outreach.</em>
              </h2>
            </div>
            <p className={styles.desc}>
              Every Friday, you receive a clean file of verified companies and
              decision-makers matching your exact preferences — no manual
              searching, no unverified contacts.
            </p>
          </div>
        </div>

        <div className={styles.mockup}>
          <div className={styles.mockupChrome}>
            <div className={styles.chromeDots}>
              <span />
              <span />
              <span />
            </div>
            <span className={styles.chromeTitle}>
              LeadInbox · Finance &amp; Accounting · United Kingdom · Week 19,
              2026
            </span>
          </div>

          <div className={styles.kpiStrip}>
            {kpis.map((k) => (
              <div key={k.label} className={styles.kpiCard}>
                <span className={styles.kpiValue}>
                  {k.badge && (
                    <span className={styles.kpiBadge}>{k.badge}</span>
                  )}
                  {k.value}
                </span>
                <span className={styles.kpiLabel}>{k.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Title</th>
                  <th>Company</th>
                  <th>Region</th>
                  <th>Verified</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((l) => (
                  <tr key={l.name}>
                    <td className={styles.nameCell}>{l.name}</td>
                    <td>{l.title}</td>
                    <td>{l.company}</td>
                    <td>{l.region}</td>
                    <td className={styles.dateCell}>{l.verified}</td>
                    <td className={styles.emailCell}>{l.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.mockupFooter}>
            <span className={styles.footerCount}>Showing 5 of 47 leads</span>
            <div className={styles.footerRight}>
              <span className={styles.exportBadge}>CSV</span>
              <span className={styles.exportBadge}>Excel</span>
              <a href="#pricing" className={styles.downloadLink}>
                Download file
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 1v7M3 5l3 3 3-3M2 11h8"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
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
