export default function Hero() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        textAlign: "center",
        background: "rgba(24, 26, 32, 0.72)",
        borderRadius: "24px",
        margin: "2rem auto",
        boxShadow: "0 8px 32px 0 rgba(0,0,0,0.28)",
        padding: "3rem 1rem",
        position: "relative",
        overflow: "hidden",
        backdropFilter: "blur(16px)",
        border: "1.5px solid rgba(255,255,255,0.18)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <h1
        style={{
          fontSize: "2.8rem",
          fontWeight: 800,
          color: "#7aa2ff",
          marginBottom: "1rem",
          textShadow: "0 2px 12px rgba(122,162,255,0.18)",
        }}
      >
        Hi, I'm Vivek Prajapati
      </h1>
      <h2
        style={{
          fontSize: "1.5rem",
          color: "#cba6f7",
          marginBottom: "1.5rem",
          fontWeight: 600,
          textShadow: "0 2px 8px rgba(203,166,247,0.12)",
        }}
      >
        Frontend Developer & UI Enthusiast
      </h2>
      <p
        style={{
          maxWidth: 600,
          color: "#e0e6f0",
          fontSize: "1.1rem",
          marginBottom: "2rem",
          textShadow: "0 1px 6px rgba(0,0,0,0.12)",
        }}
      >
        I craft beautiful, performant web experiences with React, Next.js, and
        modern CSS. Let's build something amazing together!
      </p>
      <a
        href="#projects"
        className="button"
        style={{
          fontSize: "1.1rem",
          background: "rgba(122,162,255,0.18)",
          color: "#e0e6f0",
          border: "1px solid #7aa2ff",
          borderRadius: "32px",
          padding: "0.75rem 2.5rem",
          boxShadow: "0 2px 12px rgba(122,162,255,0.10)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          fontWeight: 600,
          letterSpacing: "0.02em",
          transition: "background 0.2s, color 0.2s, border-color 0.2s",
        }}
      >
        View My Work
      </a>
    </section>
  );
}
