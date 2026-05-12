import { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import styles from './PaymentPage.module.css'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

const PLAN_LABELS = {
  Monthly: { display: '$149', period: '/month', billing: 'Billed monthly' },
  Annual:  { display: '$124', period: '/mo',    billing: 'Billed $1,488/year — save $300' },
}

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: '14px',
      fontFamily: 'inherit',
      color: '#1a1208',
      '::placeholder': { color: '#a89a87' },
    },
    invalid: { color: '#c0392b' },
  },
}

function CheckoutForm({ plan, clientSecret, onSuccess, onBack }) {
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const info = PLAN_LABELS[plan] ?? PLAN_LABELS.Monthly

  async function handleSubmit(e) {
    e.preventDefault()
    if (!stripe || !elements) return
    setLoading(true)
    setError(null)

    const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      { payment_method: { card: elements.getElement(CardElement) } }
    )

    if (stripeError) {
      setError(stripeError.message)
      setLoading(false)
    } else if (paymentIntent.status === 'succeeded') {
      onSuccess()
    }
  }

  return (
    <div className={styles.card}>
      <p className={styles.planBadge}>{plan} plan</p>
      <h1 className={styles.headline}>
        Complete your<br />
        <em className={styles.accent}>payment.</em>
      </h1>

      <div className={styles.priceRow}>
        <span className={styles.price}>{info.display}</span>
        <span className={styles.period}>{info.period}</span>
      </div>
      <p className={styles.billingNote}>{info.billing}</p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label className={styles.label}>Card details</label>
          <div className={styles.cardWrap}>
            <CardElement options={CARD_ELEMENT_OPTIONS} />
          </div>
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <button
          type="submit"
          className={styles.submit}
          disabled={!stripe || loading}
        >
          {loading ? 'Processing…' : 'Pay now'}
        </button>
      </form>

      <button type="button" className={styles.backLink} onClick={onBack}>
        ← Back
      </button>
    </div>
  )
}

export default function PaymentPage({ plan, onSuccess, onBack }) {
  const [clientSecret, setClientSecret] = useState(null)
  const [fetchError, setFetchError] = useState(null)

  useEffect(() => {
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ plan }),
    })
      .then(r => r.json())
      .then(data => {
        if (data.error) throw new Error(data.error)
        setClientSecret(data.clientSecret)
      })
      .catch(err => setFetchError(err.message))
  }, [plan])

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a href="#" className={styles.logo} onClick={onBack}>
          <em>Lead</em>Inbox
        </a>
      </header>

      <main className={styles.main}>
        {fetchError ? (
          <div className={styles.card}>
            <p className={styles.error}>Failed to load payment: {fetchError}</p>
            <button type="button" className={styles.backLink} onClick={onBack}>← Back</button>
          </div>
        ) : !clientSecret ? (
          <div className={styles.card}>
            <div className={styles.spinner} />
          </div>
        ) : (
          <Elements stripe={stripePromise}>
            <CheckoutForm
              plan={plan}
              clientSecret={clientSecret}
              onSuccess={onSuccess}
              onBack={onBack}
            />
          </Elements>
        )}
      </main>
    </div>
  )
}
