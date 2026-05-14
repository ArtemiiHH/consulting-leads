import styles from "./Categories.module.css";

const stops = [
  "Spending hours manually searching LinkedIn for prospects",
  "Paying for bloated databases full of irrelevant contacts",
  "Chasing leads outside your consulting niche",
  "Wasting budget on generic, unverified lead lists",
  "Letting cold outreach eat into billable hours",
];

const helps = [
  "Delivers 25–75 verified leads to your inbox every week",
  "Filters by your consulting vertical — every lead fits your niche",
  "Includes name, title, company, LinkedIn, phone & tech stack",
  "Exports directly to your CRM in one click",
  "Saves 5+ hours a week on prospecting",
];

export default function Categories() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.col}>
            <p className={styles.colLabel}>Stop…</p>
            <ul className={styles.list}>
              {stops.map((s) => (
                <li key={s} className={`${styles.item} ${styles.itemStop}`}>
                  <span className={styles.iconStop}>✕</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <p className={`${styles.colLabel} ${styles.colLabelGreen}`}>LeadInbox helps…</p>
            <ul className={styles.list}>
              {helps.map((h) => (
                <li key={h} className={`${styles.item} ${styles.itemHelp}`}>
                  <span className={styles.iconHelp}>✓</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
