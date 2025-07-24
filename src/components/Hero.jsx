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
        background: "linear-gradient(120deg, #f7f8fa 60%, #e3e6f3 100%)",
        borderRadius: "24px",
        margin: "2rem auto",
        boxShadow: "0 8px 32px 0 rgba(31,38,135,0.18)",
        padding: "3rem 1rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <h1
        style={{
          fontSize: "2.8rem",
          fontWeight: 800,
          color: "#3577ef",
          marginBottom: "1rem",
        }}
      >
        Hi, I'm Vivek Prajapati
      </h1>
      <h2
        style={{
          fontSize: "1.5rem",
          color: "#7f5af0",
          marginBottom: "1.5rem",
          fontWeight: 600,
        }}
      >
        Frontend Developer & UI Enthusiast
      </h2>
      <p
        style={{
          maxWidth: 600,
          color: "#333",
          fontSize: "1.1rem",
          marginBottom: "2rem",
        }}
      >
        I craft beautiful, performant web experiences with React, Next.js, and
        modern CSS. Let's build something amazing together!
      </p>
      <a href="/projects" className="button" style={{ fontSize: "1.1rem" }}>
        View My Work
      </a>
    </section>
  );
}
