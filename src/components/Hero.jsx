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
        background:
          "linear-gradient(120deg, #3a8bfd 0%, #a259f7 60%, #ff6ec4 100%)",
        borderRadius: "32px",
        margin: "2rem auto",
        boxShadow: "0 12px 40px 0 rgba(255,110,127,0.18)",
        padding: "3rem 1rem",
        position: "relative",
        overflow: "hidden",
        backdropFilter: "blur(18px)",
        border: "2.5px solid rgba(255,110,127,0.18)",
        WebkitBackdropFilter: "blur(18px)",
        animation: "glossyGlow 2.5s infinite alternate",
      }}
    >
      <h1
        style={{
          fontSize: "2.8rem",
          fontWeight: 800,
          color: "#fff",
          marginBottom: "1rem",
          textShadow: "0 2px 12px #3a8bfd, 0 4px 24px #a259f7",
        }}
      >
        Hi, I'm Vivek Prajapati
      </h1>
      <h2
        style={{
          fontSize: "1.5rem",
          color: "#3a8bfd",
          marginBottom: "1.5rem",
          fontWeight: 600,
          textShadow: "0 2px 8px #a259f7",
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
          textShadow: "0 1px 6px #3a8bfd",
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
          background: "linear-gradient(90deg, #3a8bfd 0%, #a259f7 100%)",
          color: "#fff",
          border: "1px solid #3a8bfd",
          borderRadius: "32px",
          padding: "0.75rem 2.5rem",
          boxShadow: "0 2px 12px #a259f7",
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
