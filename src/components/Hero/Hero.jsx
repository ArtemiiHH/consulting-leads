import styles from "./Hero.module.css";

const trustTags = [
  "IT & Technology",
  "HR & Talent",
  "Finance & Accounting",
  "Legal & Compliance",
  "Strategy",
  "Cybersecurity",
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <h1 className={styles.headline}>
          Weekly <em className={styles.accent}>list of leads</em>
          <br />
          for consulting firms.
        </h1>

        <p className={styles.subtext}>
          Every Monday, get 50 verified companies actively seeking consulting
          services — filtered for your company's niche.
        </p>

        <div className={styles.actions}>
          <a href="#pricing" className={styles.primaryBtn}>
            Get This Week's Leads
          </a>
        </div>

        <div className={styles.trustStrip}>
          <span className={styles.trustLabel}>
            Leads for every consulting specialty
          </span>
          <div className={styles.tags}>
            {trustTags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
