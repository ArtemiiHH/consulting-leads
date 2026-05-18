import { useState } from "react";
import styles from "./FormPage.module.css";

const CATEGORIES = [
  "IT & Technology Consulting",
  "Financial & Accounting Consulting",
  "HR & People Consulting",
  "Legal & Compliance Consulting",
  "Strategy & Management Consulting",
  "Cybersecurity",
];

const REGIONS = ["United States", "Canada", "United Kingdom", "European Union"];

const COMPANY_SIZES = [
  "Startup (1–50 employees)",
  "Small Business (51–200 employees)",
  "Mid-Market (201–1,000 employees)",
  "Enterprise (1,001–5,000 employees)",
  "Large Enterprise (5,000+ employees)",
];

export default function FormPage({ plan, onSubmit, onBack }) {
  const isGrowth = plan?.toLowerCase() === "growth";

  const [form, setForm] = useState({
    category: "",
    categories: [],
    region: "",
    companySize: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  function validate() {
    const e = {};
    if (isGrowth) {
      if (form.categories.length !== 3)
        e.categories = "Please select exactly 3 consulting categories.";
    } else {
      if (!form.category) e.category = "Please select a consulting category.";
    }
    if (!form.region) e.region = "Please select a target region.";
    if (!form.companySize) e.companySize = "Please select a company size.";
    if (!form.email) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email.";
    return e;
  }

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  }

  function handleCheckbox(category) {
    setErrors((prev) => ({ ...prev, categories: undefined }));
    setForm((prev) => {
      const already = prev.categories.includes(category);
      if (already) {
        return {
          ...prev,
          categories: prev.categories.filter((c) => c !== category),
        };
      }
      if (prev.categories.length >= 3) return prev;
      return { ...prev, categories: [...prev.categories, category] };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) {
      setErrors(e2);
      return;
    }
    const payload = isGrowth
      ? {
          plan,
          categories: form.categories.join(", "),
          region: form.region,
          companySize: form.companySize,
          email: form.email,
        }
      : {
          plan,
          category: form.category,
          region: form.region,
          companySize: form.companySize,
          email: form.email,
        };
    await fetch("https://formspree.io/f/mbdwewlb", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    onSubmit(payload);
  }

  const regionOptions = REGIONS;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a href="#" className={styles.logo} onClick={onBack}>
          <em>Lead</em>Inbox
        </a>
      </header>

      <main className={styles.main}>
        <div className={styles.card}>
          {plan && <p className={styles.planBadge}>{plan} plan selected</p>}
          <h1 className={styles.headline}>
            Tell us about your
            <br />
            <em className={styles.accent}>target market.</em>
          </h1>
          <p className={styles.sub}>
            We'll use these preferences to tailor your weekly lead file. You can
            update them at any time.
          </p>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {isGrowth ? (
              <div className={styles.field}>
                <label className={styles.label}>
                  Consulting categories{" "}
                  <span className={styles.labelHint}>
                    — choose exactly 3 ({form.categories.length}/3)
                  </span>
                </label>
                <div
                  className={`${styles.checkboxGroup} ${errors.categories ? styles.checkboxGroupError : ""}`}
                >
                  {CATEGORIES.map((c) => {
                    const checked = form.categories.includes(c);
                    const disabled = !checked && form.categories.length >= 3;
                    return (
                      <label
                        key={c}
                        className={`${styles.checkboxLabel} ${disabled ? styles.checkboxDisabled : ""}`}
                      >
                        <input
                          type="checkbox"
                          className={styles.checkbox}
                          checked={checked}
                          disabled={disabled}
                          onChange={() => handleCheckbox(c)}
                        />
                        {c}
                      </label>
                    );
                  })}
                </div>
                {errors.categories && (
                  <span className={styles.error}>{errors.categories}</span>
                )}
              </div>
            ) : (
              <div className={styles.field}>
                <label htmlFor="category" className={styles.label}>
                  Consulting category
                </label>
                <select
                  id="category"
                  name="category"
                  className={`${styles.select} ${errors.category ? styles.inputError : ""}`}
                  value={form.category}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select a category…
                  </option>
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <span className={styles.error}>{errors.category}</span>
                )}
              </div>
            )}

            <div className={styles.field}>
              <label htmlFor="region" className={styles.label}>
                Target region / country
              </label>
              <select
                id="region"
                name="region"
                className={`${styles.select} ${errors.region ? styles.inputError : ""}`}
                value={form.region}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select a region…
                </option>
                {regionOptions.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              {errors.region && (
                <span className={styles.error}>{errors.region}</span>
              )}
            </div>

            <div className={styles.field}>
              <label htmlFor="companySize" className={styles.label}>
                Target company size
              </label>
              <select
                id="companySize"
                name="companySize"
                className={`${styles.select} ${errors.companySize ? styles.inputError : ""}`}
                value={form.companySize}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select a size…
                </option>
                {COMPANY_SIZES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              {errors.companySize && (
                <span className={styles.error}>{errors.companySize}</span>
              )}
            </div>

            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                placeholder="you@company.com"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className={styles.error}>{errors.email}</span>
              )}
            </div>

            <button type="submit" className={styles.submit}>
              Submit preferences
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
