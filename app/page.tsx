"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [type, setType] = useState("immobilier");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!input) return;

    setLoading(true);

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input, type }),
    });

    const data = await res.json();

    setResult(data.result);
    setLoading(false);
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>AI Decision Tool</h1>

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="immobilier">Immobilier</option>
        <option value="voiture">Voiture</option>
        <option value="voyage">Voyage</option>
      </select>

      <textarea
        style={{ width: "100%", height: 150, marginTop: 10 }}
        placeholder="Colle ton texte ici"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleGenerate} disabled={loading}>
        {loading ? "Analyse..." : "Analyser"}
      </button>

      <pre style={{ whiteSpace: "pre-wrap", marginTop: 20 }}>
        {result}
      </pre>
    </div>
  );
}
