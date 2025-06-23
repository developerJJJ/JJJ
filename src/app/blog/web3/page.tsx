import BlogLayout from "../BlogLayout";

export default function Web3() {
  return (
    <BlogLayout>
      <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        What Is Web 3.0?
      </h1>

      <p>
        Web 3.0, often called the &quot;decentralized web,&quot; represents the
        next evolution of the internet. Unlike the current Web 2.0, which is
        dominated by centralized platforms and companies, Web 3.0 aims to give
        users more control over their data, identity, and digital interactions.
      </p>

      <p>
        At its core, Web 3.0 integrates technologies such as blockchain,
        decentralized networks, and smart contracts to create a more open,
        transparent, and user-centric internet. This shift enables peer-to-peer
        interactions without relying on intermediaries like large corporations
        or centralized servers.
      </p>

      <p>Key features of Web 3.0 include:</p>
      <ul>
        <li>
          <strong>Decentralization:</strong> Data and applications are
          distributed across many nodes, reducing control by any single party.
        </li>
        <li>
          <strong>User Ownership:</strong> Individuals have ownership over their
          digital identity and assets, often managed through cryptographic
          wallets.
        </li>
        <li>
          <strong>Interoperability:</strong> Applications and platforms can
          seamlessly interact and share data without gatekeepers.
        </li>
        <li>
          <strong>Enhanced Privacy:</strong> Users can control what personal
          information they share and with whom.
        </li>
        <li>
          <strong>Smart Contracts:</strong> Automated and trustless agreements
          execute on blockchain networks without intermediaries.
        </li>
      </ul>

      <p>
        Examples of Web 3.0 in action include decentralized finance (DeFi)
        platforms that offer banking without banks, NFT marketplaces where
        digital art is truly owned by collectors, and decentralized social
        networks that resist censorship.
      </p>

      <p>
        While still emerging, Web 3.0 has the potential to fundamentally
        transform how we interact online by shifting power from centralized
        organizations back to individual users.
      </p>
    </BlogLayout>
  );
}
