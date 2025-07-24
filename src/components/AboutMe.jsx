import styles  from "../styles/About.module.scss";

export default function AboutMe() {
  return (
    <section className={styles.about}>
      <div className={styles.animatedBg} aria-hidden="true">
        <div className={styles.blob1}></div>
        <div className={styles.blob2}></div>
        <div className={styles.blob3}></div>
      </div>
      <div className={styles.card}>
        <img
          src="/file.svg"
          alt="Vivek Prajapati Avatar"
          className={styles.avatar}
        />
        <div className={styles.info}>
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.description}>
            <span className={styles.highlight}>Hi! I'm Vivek Prajapati</span>
            <span className={styles.wave} role="img" aria-label="wave">
              👋
            </span>
            <br />
            <span>
              A passionate <b>Frontend Developer</b> who loves crafting
              beautiful, performant, and accessible web apps.
              <br />I specialize in <b>React</b>, <b>Next.js</b>, and modern{" "}
              <b>CSS</b>.<br />
              My focus: <b>clean code</b>, <b>design systems</b>, and{" "}
              <b>continuous learning</b>.
            </span>
          </p>
          <ul className={styles.list}>
            <li>🌱 Always learning new tech & design trends</li>
            <li>🎨 Enjoy UI/UX, micro-interactions, and accessibility</li>
            <li>🚀 Building side projects & contributing to open source</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
