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
        <header className={styles.header}>
          <h1>My Next.js Application</h1>
          <NavBar />
        </header>

        {children}

        <footer className={styles.footer}>
          <p>&copy; 2025 JJJ</p>
        </footer>
      </body>
    </html>
  );
}
