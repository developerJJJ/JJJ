"use client";

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

  return (
    <nav>
      <ul className={styles.navList}>
        {navLinks.map(({ href, label }) => (
          <li key={href} className={pathname === href ? styles.active : ""}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
