"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./layout.module.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/login", label: "Login" },
  { href: "/register", label: "Register" },
  { href: "/profile", label: "Profile" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className={styles.navList}>
        {navLinks.map(({ href, label }) => (
          <li
            key={href}
            className={pathname === href ? styles.active : ""}
          >
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}