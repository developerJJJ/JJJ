import React from "react";
import BlogLayout from "../BlogLayout";

export default function SmartContract() {
  return (
    <BlogLayout>
      <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        What Are Smart Contracts?
      </h1>

      <p>
        Smart contracts are self-executing programs stored on a blockchain. They
        automatically run when predefined conditions are met, removing the need
        for intermediaries such as lawyers, banks, or escrow services.
      </p>

      <p>
        These contracts are written in code and deployed to blockchain networks
        like Ethereum, Solana, or Binance Smart Chain. Once deployed, they
        cannot be altered, making them highly secure and transparent.
      </p>

      <p>
        A typical smart contract follows an “if–then” structure. For example, if
        a buyer sends payment, then the seller automatically delivers the
        digital asset. The code ensures fairness and eliminates the risk of
        manipulation or human error.
      </p>

      <p>Key characteristics of smart contracts include:</p>
      <ul>
        <li>
          <strong>Autonomy:</strong> Once deployed, they operate without human
          intervention.
        </li>
        <li>
          <strong>Trustlessness:</strong> Parties don&#39;t need to trust each
          other, only the code.
        </li>
        <li>
          <strong>Transparency:</strong> The contract’s logic and outcomes are
          visible on the blockchain.
        </li>
        <li>
          <strong>Security:</strong> Contracts are immutable and resistant to
          tampering.
        </li>
        <li>
          <strong>Efficiency:</strong> Processes are automated, reducing time
          and costs.
        </li>
      </ul>

      <p>
        Smart contracts are the foundation for decentralized applications
        (dApps), decentralized finance (DeFi), NFT platforms, and decentralized
        autonomous organizations (DAOs). They handle tasks such as token
        transfers, lending, voting, royalties, and digital identity management.
      </p>

      <p>
        While smart contracts bring powerful automation and transparency, they
        also require careful development. Bugs or vulnerabilities in the code
        can lead to financial loss, since deployed contracts are permanent and
        cannot be modified.
      </p>
    </BlogLayout>
  );
}
