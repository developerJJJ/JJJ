import "./globals.css";
import React from "react";
import NavBar from "./NavBar";
import styles from "./layout.module.css";

export const metadata = {
  title: "My Next.js Application",
  description: "A sample Next.js app with navigation and layout.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className={styles.wrapper}>
          <header className={styles.header}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>🌐</span>
              Web3 Blog
            </div>
            <NavBar />
          </header>

          <main className={styles.mainContent}>{children}</main>

          <footer className={styles.footer}>
            <div className={styles.footerContent}>
              <div className={styles.footerLogo}>🌐 Web3 Blog</div>
              <div className={styles.footerLinks}>
                <a
                  href="https://github.com/developerJJJ/JJJ"
                  className={styles.footerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a href="/about" className={styles.footerLink}>
                  About
                </a>
              </div>
              <div>&copy; 2025 JJJ. All rights reserved.</div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
