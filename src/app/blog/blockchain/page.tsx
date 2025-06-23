import BlogLayout from "../BlogLayout";

export default function Blockchain() {
  return (
    <BlogLayout>
      <h1>Understanding Blockchain</h1>
      <p>
        Blockchain is a decentralized digital ledger that records transactions
        across many computers in a secure, transparent, and tamper-resistant
        way. Each record, called a block, is linked to the previous one, forming
        a chain—hence the name &quot;blockchain&quot;.
      </p>
      <p>
        Unlike traditional centralized databases, blockchains do not rely on a
        single authority. Instead, they use consensus mechanisms, such as proof
        of work or proof of stake, to validate transactions and maintain trust
        across the network.
      </p>
      <p>
        Blockchain technology underpins cryptocurrencies like Bitcoin and
        Ethereum, but its applications extend beyond finance. It enables
        decentralized apps (dApps), smart contracts, supply chain tracking,
        digital identity, and more.
      </p>
      <p>
        By removing intermediaries and enhancing transparency, blockchain has
        the potential to revolutionize industries by increasing efficiency,
        reducing fraud, and giving users greater control over their data.
      </p>
    </BlogLayout>
  );
}
