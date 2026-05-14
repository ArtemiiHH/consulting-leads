import styles from "./Categories.module.css";

const categories = [
  {
    num: "01",
    name: "IT & Digital Transformation",
    desc: "For firms advising on technology adoption, infrastructure, and digital strategy.",
  },
  {
    num: "02",
    name: "HR & Talent Consulting",
    desc: "For firms handling workforce planning, recruitment, and organisational development.",
  },
  {
    num: "03",
    name: "Finance & Accounting",
    desc: "For firms supporting CFOs, audits, financial restructuring, and compliance.",
  },
  {
    num: "04",
    name: "Legal & Compliance",
    desc: "For firms specialising in regulatory guidance, contract management, and risk.",
  },
  {
    num: "05",
    name: "Operations & Supply Chain",
    desc: "For firms optimising processes, procurement, and logistics networks.",
  },
  {
    num: "06",
    name: "Strategy & Management",
    desc: "For generalist strategy consultancies and management advisors.",
  },
  {
    num: "07",
    name: "Cybersecurity",
    desc: "For firms focused on security audits, incident response, and risk assessment.",
  },
  {
    num: "08",
    name: "ESG & Sustainability",
    desc: "For firms advising on environmental, social, and governance reporting and strategy.",
  },
];

export default function Categories() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.label}>Who it's for</p>
          <div className={styles.headerRow}>
            <h2 className={styles.title}>
              Built for eight consulting{" "}
              <em className={styles.accent}>specialties.</em>
            </h2>
            <p className={styles.desc}>
              Generic lead lists waste your time. LeadInbox filters by
              consulting vertical, so a Finance & Accounting firm never receives
              IT transformation leads. You choose your specialty — we do the
              rest.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {categories.map((cat) => (
            <div key={cat.name} className={styles.card}>
              <span className={styles.cardNum}>{cat.num}</span>
              <h3 className={styles.cardName}>{cat.name}</h3>
              <p className={styles.cardDesc}>{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
