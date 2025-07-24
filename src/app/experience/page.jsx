import styles from "../../styles/About.module.scss";

export default function ExperiencePage() {
  return (
    <section className={styles.about}>
      <h2>Experience</h2>
      <ul>
        <li>
          <strong>Frontend Developer</strong> at TechCorp (2022 - Present)
          <br />
          Building scalable React/Next.js applications, collaborating with
          designers, and optimizing performance.
        </li>
        <li>
          <strong>Web Developer</strong> at Webify (2021 - 2022)
          <br />
          Developed responsive websites and interactive dashboards for clients
          in e-commerce and education.
        </li>
      </ul>
    </section>
  );
}
