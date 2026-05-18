import styles from "./Footer.module.css";

const links = {
  Product: ["How it works", "Pricing", "FAQ"],
  Company: ["Contact"],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <a href="#" className={styles.logo}>
            Get
            <em>Consulting</em>
            Leads
          </a>
          <p className={styles.tagline}>
            Weekly verified lead delivery
            <br />
            for consulting firms.
          </p>
          <a href="#pricing" className={styles.footerCta}>
            Request Access
          </a>
        </div>

        {Object.entries(links).map(([group, items]) => (
          <div key={group} className={styles.linkGroup}>
            <p className={styles.groupLabel}>{group}</p>
            <ul className={styles.linkList}>
              {items.map((item) => (
                <li key={item}>
                  <a href="#" className={styles.link}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} GetConsultingLeads. All rights reserved.
        </p>
        <p className={styles.bottomLinks}>
          <a href="#">Privacy</a>
          <span className={styles.sep}>·</span>
          <a href="#">Terms</a>
          <span className={styles.sep}>·</span>
          <a href="mailto:hello@leadinbox.io">hello@leadinbox.io</a>
        </p>
      </div>
    </footer>
  );
}
