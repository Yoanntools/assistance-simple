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
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>AI Decision Tool</h1>
        <p style={styles.subtitle}>
          Analyse rapidement une annonce, un projet ou une décision
        </p>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={styles.select}
        >
          <option value="immobilier">🏠 Immobilier</option>
          <option value="voiture">🚗 Voiture</option>
          <option value="voyage">✈️ Voyage</option>
        </select>

        <textarea
          placeholder="Colle ton texte ici..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.textarea}
        />

        <button
          onClick={handleGenerate}
          style={styles.button}
          disabled={loading}
        >
          {loading ? "Analyse en cours..." : "Analyser"}
        </button>
      </div>

      {result && (
        <div style={styles.resultCard}>
          <h2>Résultat</h2>
          <pre style={styles.result}>{result}</pre>
        </div>
      )}
    </div>
  );
}

const styles: any = {
  container: {
    fontFamily: "Arial",
    background: "#0f172a",
    minHeight: "100vh",
    padding: 20,
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    width: "100%",
    maxWidth: 700,
    background: "#111827",
    padding: 20,
    borderRadius: 16,
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  },
  title: {
    marginBottom: 5,
  },
  subtitle: {
    color: "#94a3b8",
    marginBottom: 20,
  },
  select: {
    width: "100%",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  textarea: {
    width: "100%",
    height: 140,
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  button: {
    width: "100%",
    padding: 12,
    borderRadius: 8,
    background: "#3b82f6",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  },
  resultCard: {
    width: "100%",
    maxWidth: 700,
    marginTop: 20,
    background: "#1f2937",
    padding: 20,
    borderRadius: 16,
  },
  result: {
    whiteSpace: "pre-wrap",
  },
};
