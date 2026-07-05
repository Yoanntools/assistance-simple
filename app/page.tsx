export default function Home() {
  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      fontFamily: "Arial",
      background: "#f5f5f5"
    }}>
      <h1 style={{ fontSize: "40px" }}>
        Assistant Simple
      </h1>

      <p style={{ marginTop: "10px", color: "#666" }}>
        Ton application est en ligne 🚀
      </p>

      <button style={{
        marginTop: "20px",
        padding: "12px 24px",
        border: "none",
        borderRadius: "8px",
        background: "black",
        color: "white",
        cursor: "pointer"
      }}>
        Commencer
      </button>
    </main>
  );
}
