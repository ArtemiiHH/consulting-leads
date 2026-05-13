import { useEffect, useState } from 'react'
import styles from './PaymentPage.module.css'

export default function PaymentPage({ plan, onBack }) {
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ plan, origin: window.location.origin }),
    })
      .then(r => r.json())
      .then(data => {
        if (data.error) throw new Error(data.error)
        window.location.href = data.url
      })
      .catch(err => setError(err.message))
  }, [plan])

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a href="#" className={styles.logo} onClick={onBack}>
          <em>Lead</em>Inbox
        </a>
      </header>

      <main className={styles.main}>
        <div className={styles.card}>
          {error ? (
            <>
              <p className={styles.error}>Failed to load checkout: {error}</p>
              <button type="button" className={styles.backLink} onClick={onBack}>← Back</button>
            </>
          ) : (
            <>
              <div className={styles.spinner} />
              <p className={styles.loadingText}>Redirecting to checkout…</p>
            </>
          )}
        </div>
      </main>
    </div>
  )
}
