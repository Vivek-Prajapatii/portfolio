import styles from "../../styles/About.module.scss";

export default function AchievementsPage() {
  return (
    <section className={styles.about}>
      <h2>Achievements</h2>
      <ul>
        <li>
          <strong>Google Code-In Finalist</strong> (2023)
        </li>
        <li>
          <strong>Top 10% in Frontend Mentor Challenges</strong>
        </li>
        <li>
          <strong>Speaker at React Summit India</strong> (2024)
        </li>
      </ul>
    </section>
  );
}
