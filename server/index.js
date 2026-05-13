import "dotenv/config";
import express from "express";
import Stripe from "stripe";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const PLAN_AMOUNTS = {
  Monthly: 19900, // $199.00
  Annual: 190800, // $1,908.00
};

app.use(express.json());

app.post("/api/create-payment-intent", async (req, res) => {
  const { plan } = req.body;
  const amount = PLAN_AMOUNTS[plan] ?? PLAN_AMOUNTS.Monthly;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      description: `LeadInbox ${plan} Plan`,
      automatic_payment_methods: { enabled: true },
    });
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.use(express.static(join(__dirname, "../dist")));

app.get("*", (_req, res) => {
  res.sendFile(join(__dirname, "../dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
