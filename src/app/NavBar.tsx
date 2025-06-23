"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./layout.module.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog/web3", label: "Web 3.0" },
  { href: "/blog/blockchain", label: "Blockchain" },
  { href: "/blog/smart-contract", label: "Smart Contract" },
  { href: "/blog/dapps", label: "dApps" },
  { href: "/blog/stablecoin", label: "Stablecoin" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Prevent scroll when menu is open
  React.useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [open]);

  // Close menu on navigation
  const handleNavClick = () => setOpen(false);

  return (
    <>
      {/* Desktop Nav */}
      <ul
        className={styles.navList}
        style={{ display: open ? "none" : undefined }}
      >
        {navLinks.map(({ href, label }) => (
          <li key={href} className={styles.navItem}>
            <Link
              href={href}
              className={
                pathname === href
                  ? `${styles.navLink} ${styles.active}`
                  : styles.navLink
              }
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      {/* Hamburger Icon */}
      <button
        className={styles.hamburger}
        aria-label="Open navigation menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
      {/* Mobile Nav Overlay */}
      <nav className={open ? styles.mobileNavOpen : styles.mobileNav}>
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={
              pathname === href
                ? `${styles.navLink} ${styles.active}`
                : styles.navLink
            }
            style={{
              fontSize: "1.5rem",
              margin: "1rem 0",
              textAlign: "center",
              width: "100%",
              display: "block",
            }}
            onClick={handleNavClick}
          >
            {label}
          </Link>
        ))}
      </nav>
    </>
  );
}
