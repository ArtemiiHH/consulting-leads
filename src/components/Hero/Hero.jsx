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
        <p className={styles.eyebrow}>Get consulting leads every week</p>

        <h1 className={styles.headline}>
          Weekly <em className={styles.accent}>lead delivery</em>
          <br />
          for consulting firms.
        </h1>

        <p className={styles.subtext}>
          Set your targeting once and receive verified consulting leads every
          week.
        </p>

        <div className={styles.actions}>
          <a href="#pricing" className={styles.primaryBtn}>
            Request Access
          </a>
          <a href="#how-it-works" className={styles.secondaryBtn}>
            See how it works
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 7h12M8 3l5 4-5 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className={styles.trustStrip}>
          <span className={styles.trustLabel}>Built for</span>
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
