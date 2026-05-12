import { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ProductOverview from "./components/ProductOverview/ProductOverview";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Categories from "./components/Categories/Categories";
import Pricing from "./components/Pricing/Pricing";
import FAQ from "./components/FAQ/FAQ";
import FinalCTA from "./components/FinalCTA/FinalCTA";
import Footer from "./components/Footer/Footer";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import FormPage from "./pages/FormPage/FormPage";
import ThankYouPage from "./pages/ThankYouPage/ThankYouPage";

export default function App() {
  const [page, setPage] = useState("home");
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);

  function handleCheckout(planName) {
    setSelectedPlan(planName);
    setPage("payment");
    window.scrollTo(0, 0);
  }

  function handlePaymentSuccess() {
    setPage("form");
    window.scrollTo(0, 0);
  }

  function handleFormSubmit(data) {
    setSubmittedData(data);
    setPage("thankyou");
    window.scrollTo(0, 0);
  }

  function handleBack() {
    setPage("home");
    window.scrollTo(0, 0);
  }

  if (page === "payment") {
    return (
      <PaymentPage
        plan={selectedPlan}
        onSuccess={handlePaymentSuccess}
        onBack={handleBack}
      />
    );
  }

  if (page === "form") {
    return (
      <FormPage
        plan={selectedPlan}
        onSubmit={handleFormSubmit}
        onBack={handleBack}
      />
    );
  }

  if (page === "thankyou") {
    return <ThankYouPage data={submittedData} onBack={handleBack} />;
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductOverview />
        <Pricing onCheckout={handleCheckout} />
        <HowItWorks />
        <Categories />
        <FAQ />
        <FinalCTA onCheckout={handleCheckout} />
      </main>
      <Footer />
    </>
  );
}
