"use client";

import { useState } from "react";
import { useAccount, useConnect, useDisconnect, useReadContract } from "wagmi";
import { injected } from "wagmi/connectors";
import { metaLogAbi } from "@/lib/metalogAbi";
import { base } from "wagmi/chains";

const META_LOG_ADDRESS = process.env.NEXT_PUBLIC_META_LOG_ADDRESS as `0x${string}`;

export default function HomePage() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({ connector: injected() });
  const { disconnect } = useDisconnect();

  const [prob, setProb] = useState("0.5"); // human readable
  const [result, setResult] = useState<string | null>(null);

  const intProb = BigInt(Math.floor(parseFloat(prob || "0") * 1e18));

  const { refetch, isFetching } = useReadContract({
    address: META_LOG_ADDRESS,
    chainId: base.id,
    abi: metaLogAbi,
    functionName: "getQuantile",
    args: [
      intProb,
      // example coeff array
      [BigInt(1e18), BigInt(0), BigInt(0), BigInt(0), BigInt(0)],
      "un",
      BigInt(0),
      BigInt(0),
    ],
    query: {
      enabled: false,
      onSuccess(data) {
        const v = data as bigint;
        const floatVal = Number(v) / 1e18;
        setResult(`${v.toString()} (≈ ${floatVal})`);
      },
    },
  });

  return (
    <main style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        {isConnected ? (
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <span>Connected: {address}</span>
            <button onClick={() => disconnect()}>Disconnect</button>
          </div>
        ) : (
          <button onClick={() => connect()}>Connect Wallet</button>
        )}
      </div>

      <div>
        <label>
          Probability (0 to 1):
          <input
            type="number"
            step="0.01"
            min="0"
            max="1"
            value={prob}
            onChange={(e) => setProb(e.target.value)}
            style={{ marginLeft: "0.5rem" }}
          />
        </label>
      </div>

      <button onClick={() => refetch()} disabled={isFetching || !isConnected}>
        {isFetching ? "Calling getQuantile..." : "Call getQuantile"}
      </button>

      {result && (
        <div>
          <strong>Result:</strong> {result}
        </div>
      )}
    </main>
  );
}
