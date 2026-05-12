import { useState, useEffect } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>
          <em>Lead</em>Inbox
        </a>

        <nav className={styles.nav}>
          <a href="#product">Product</a>
          <a href="#pricing">Pricing</a>
          <a href="#how-it-works">How it works</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a href="#pricing" className={styles.cta}>
          Request Access
        </a>

        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.menuIcon}>{menuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <a href="#product" onClick={() => setMenuOpen(false)}>
            Product
          </a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
            How it works
          </a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>
            Pricing
          </a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>
            FAQ
          </a>
          <a
            href="#pricing"
            className={styles.mobileCta}
            onClick={() => setMenuOpen(false)}
          >
            Request Access
          </a>
        </div>
      )}
    </header>
  );
}
