import { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "What kind of leads are included?",
    a: "Each lead is a company and associated decision-maker contact matching your saved preferences. Every entry includes the contact's name, job title, company name, and a verified email address. Growth and Pro plans add LinkedIn URL, company size, and additional data fields.",
  },
  {
    q: "How are emails verified?",
    a: "We use a multi-step verification process: SMTP check, MX record validation, and catch-all detection. Leads that cannot be confirmed valid are excluded from delivery. Our target bounce rate is under 2%.",
  },
  {
    q: "How does delivery work?",
    a: "Each Monday, you receive an email from getconsultingleads@gmail.com containing a secure, signed download link to your lead file. Links are time-limited for security. There are no email attachments — just a clean link to your file.",
  },
  {
    q: "Is there a dashboard or web portal?",
    a: "Not in the current version. GetConsultingLeads is intentionally simple at this stage: set preferences once by email after signup, then receive your leads every Monday. A self-service web portal is planned for a future release.",
  },
  {
    q: "Which regions are supported at launch?",
    a: "Cyprus, European Union, United Kingdom, United States and Canada. Additional regions will be added based on subscriber demand. Contact us if your target region is not listed.",
  },
  {
    q: "Can I update my preferences after signing up?",
    a: "Yes. Email us at any time to update your consulting category, geography filter, or company size target. Changes are applied within one business day and take effect from the next weekly delivery.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.sideHeader}>
            <p className={styles.label}>FAQ</p>
            <h2 className={styles.title}>
              Still not sure?
              <br />
              <em className={styles.accent}>Here's what most people ask.</em>
            </h2>
            <p className={styles.hint}>
              More questions? Email us at{" "}
              <a
                href="mailto:getconsultingleads@gmail.com"
                className={styles.emailLink}
              >
                getconsultingleads@gmail.com
              </a>
            </p>
          </div>

          <div className={styles.list}>
            {faqs.map((item, i) => (
              <div
                key={i}
                className={`${styles.item} ${openIndex === i ? styles.open : ""}`}
              >
                <button className={styles.question} onClick={() => toggle(i)}>
                  <span>{item.q}</span>
                  <span className={styles.icon} aria-hidden="true">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>
                {openIndex === i && <p className={styles.answer}>{item.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
