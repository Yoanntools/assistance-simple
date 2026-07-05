"use client"
import { useState } from "react"

export default function Home() {
  const [started, setStarted] = useState(false)

  return (
    <main
      style={{
        padding: "20px",
        fontFamily: "Arial",
        textAlign: "center",
      }}
    >
      <h1>Mon assistant IA 🚀</h1>

      {!started ? (
        <>
          <p>Appuie sur le bouton pour commencer</p>
          <button
            onClick={() => setStarted(true)}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Commencer
          </button>
        </>
      ) : (
        <div>
          <h2>Bienvenue 👋</h2>
          <p>L'application est lancée</p>
        </div>
      )}
    </main>
  )
}
