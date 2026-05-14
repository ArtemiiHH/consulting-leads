import { useEffect, useState } from "react";
import styles from "./PaymentPage.module.css";

const PAYMENT_LINKS = {
  Starter: import.meta.env.VITE_PAYMENT_LINK_ONE,
  Growth: import.meta.env.VITE_PAYMENT_LINK_TWO,
};

export default function PaymentPage({ plan, onBack }) {
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = PAYMENT_LINKS[plan] ?? PAYMENT_LINKS.Starter;
    if (url) {
      window.location.href = url;
    } else {
      setError("Payment link not configured.");
    }
  }, [plan]);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a href="#" className={styles.logo} onClick={onBack}>
          <em>Lead</em>Inbox
        </a>
      </header>

      <main className={styles.main}>
        <button type="button" className={styles.backBtn} onClick={onBack}>
          ← Back
        </button>
        <div className={styles.card}>
          {error ? (
            <p className={styles.error}>{error}</p>
          ) : (
            <>
              <div className={styles.spinner} />
              <p className={styles.loadingText}>Redirecting to checkout…</p>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
