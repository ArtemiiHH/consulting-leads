import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import styles from "./PaymentPage.module.css";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const PLAN_LABELS = {
  Monthly: { label: "Monthly Plan", price: "$199 / month" },
  Annual: { label: "Annual Plan", price: "$1,908 / year" },
};

function CheckoutForm({ plan, onSuccess, onBack }) {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const info = PLAN_LABELS[plan] ?? PLAN_LABELS.Monthly;

  async function handleSubmit(e) {
    e.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);
    setError(null);
    const result = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });
    if (result.error) {
      setError(result.error.message);
      setLoading(false);
    } else {
      onSuccess();
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.summary}>
        <span>{info.label}</span>
        <span className={styles.price}>{info.price}</span>
      </div>
      <div className={styles.paymentElement}>
        <PaymentElement />
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <button
        type="submit"
        className={styles.submitBtn}
        disabled={!stripe || loading}
      >
        {loading ? "Processing…" : "Pay now"}
      </button>
      <button type="button" className={styles.backLink} onClick={onBack}>
        ← Back
      </button>
    </form>
  );
}

export default function PaymentPage({ plan, onSuccess, onBack }) {
  const [clientSecret, setClientSecret] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ plan }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.error) throw new Error(data.error);
        setClientSecret(data.clientSecret);
      })
      .catch((err) => setError(err.message));
  }, [plan]);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a href="#" className={styles.logo} onClick={onBack}>
          <em>Lead</em>Inbox
        </a>
      </header>

      <main className={styles.main}>
        <div className={styles.card}>
          <h2 className={styles.title}>Complete your purchase</h2>
          {error ? (
            <>
              <p className={styles.error}>Failed to load checkout: {error}</p>
              <button
                type="button"
                className={styles.backLink}
                onClick={onBack}
              >
                ← Back
              </button>
            </>
          ) : !clientSecret ? (
            <div className={styles.spinner} />
          ) : (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <CheckoutForm plan={plan} onSuccess={onSuccess} onBack={onBack} />
            </Elements>
          )}
        </div>
      </main>
    </div>
  );
}
