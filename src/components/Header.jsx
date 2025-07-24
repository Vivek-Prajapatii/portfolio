"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/Header.module.scss";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/achievements", label: "Achievements" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          {/* Logo/Brand */}
          <Link href="/" className={styles.brand} onClick={closeMobileMenu}>
            <span className={styles.brandName}>Vivek Prajapati</span>
            <span className={styles.brandTitle}>Frontend Developer</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.href} className={styles.navItem}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${
                    pathname === item.href ? styles.active : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className={styles.ctaSection}>
            <Link href="/contact" className={styles.ctaButton}>
              Let's Connect
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`${styles.mobileMenuButton} ${
              isMobileMenuOpen ? styles.active : ""
            }`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${styles.mobileMenu} ${
            isMobileMenuOpen ? styles.open : ""
          }`}
        >
          <ul className={styles.mobileNavList}>
            {navItems.map((item) => (
              <li key={item.href} className={styles.mobileNavItem}>
                <Link
                  href={item.href}
                  className={`${styles.mobileNavLink} ${
                    pathname === item.href ? styles.active : ""
                  }`}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.mobileCta}>
            <Link
              href="/contact"
              className={styles.mobileCtaButton}
              onClick={closeMobileMenu}
            >
              Let's Connect
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
