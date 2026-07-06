"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [type, setType] = useState("immobilier");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setResult("");

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input, type }),
    });

    const data = await res.json();
    setResult(data.result);
    setLoading(false);
  };

  return (
    <main style={{ padding: 20, maxWidth: 700, margin: "0 auto" }}>
      <h1>AI Decision Assistant</h1>

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="immobilier">Immobilier</option>
        <option value="voiture">Voiture</option>
        <option value="voyage">Voyage</option>
      </select>

      <textarea
        placeholder="Colle ton annonce ou ton idée ici..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "100%", height: 150, marginTop: 10 }}
      />

      <button onClick={handleGenerate} disabled={loading}>
        {loading ? "Analyse..." : "Analyser"}
      </button>

      <pre style={{ whiteSpace: "pre-wrap", marginTop: 20 }}>
        {result}
      </pre>
    </main>
  );
}
