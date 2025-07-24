import styles from "../styles/About.module.scss";

export default function AboutMe() {
  return (
    <section className={styles.about}>
      <div className={styles.animatedBg} aria-hidden="true">
        <div className={styles.blob1}></div>
        <div className={styles.blob2}></div>
        <div className={styles.blob3}></div>
      </div>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        <img
          src="/file.svg"
          alt="Vivek Prajapati Avatar"
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            boxShadow: "0 4px 16px rgba(122,162,255,0.18)",
            border: "3px solid #7aa2ff",
            background: "#181a20",
          }}
        />
        <div>
          <h2 style={{ marginBottom: 8, fontWeight: 700, letterSpacing: 1 }}>
            About Me
          </h2>
          <p
            style={{
              fontSize: "1.18rem",
              marginBottom: 8,
              background: "rgba(24,26,32,0.7)",
              borderRadius: 8,
              padding: 8,
            }}
          >
            <span
              style={{ color: "#7aa2ff", fontWeight: 600, fontSize: "1.22rem" }}
            >
              Hi! I'm Vivek Prajapati
            </span>
            <span
              className={styles.wave}
              style={{ marginLeft: 8, fontSize: "1.3rem" }}
              role="img"
              aria-label="wave"
            >
              👋
            </span>
            <br />
            <span style={{ color: "#e0e6f0" }}>
              A passionate <b>Frontend Developer</b> who loves crafting
              beautiful, performant, and accessible web apps.
              <br />I specialize in <b>React</b>, <b>Next.js</b>, and modern{" "}
              <b>CSS</b>.<br />
              My focus: <b>clean code</b>, <b>design systems</b>, and{" "}
              <b>continuous learning</b>.
            </span>
          </p>
          <ul
            style={{
              color: "#b4c0e0",
              fontSize: "1.05rem",
              margin: 0,
              paddingLeft: 18,
              background: "rgba(24,26,32,0.6)",
              borderRadius: 8,
              padding: 8,
            }}
          >
            <li>🌱 Always learning new tech & design trends</li>
            <li>🎨 Enjoy UI/UX, micro-interactions, and accessibility</li>
            <li>🚀 Building side projects & contributing to open source</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
