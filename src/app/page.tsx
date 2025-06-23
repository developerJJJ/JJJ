import Link from "next/link";
import styles from "./layout.module.css";

export default function Home() {
  return (
    <main style={{ maxWidth: 700, margin: "2rem auto", padding: "1rem" }}>
      <h1>Welcome to My Web3 Blog</h1>
      <p>
        Dive into the world of Web3, blockchain, smart contracts, dApps, and
        more. This blog is dedicated to sharing insights in decentralized
        technology.
      </p>
      <Link href="/blog/web3" className={styles.ctaButton}>
        Explore Articles
      </Link>
    </main>
  );
}
