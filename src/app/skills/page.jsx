import styles from "../../styles/Skills.module.scss";

export default function SkillsPage() {
  return (
    <section className={styles.skills}>
      <h2>Skills</h2>
      <ul>
        <li>React.js, Next.js, Redux</li>
        <li>TypeScript, JavaScript (ES6+)</li>
        <li>HTML5, CSS3, SCSS, Tailwind</li>
        <li>Framer Motion, GSAP</li>
        <li>REST APIs, GraphQL</li>
        <li>Jest, React Testing Library</li>
        <li>Git, GitHub, CI/CD</li>
        <li>Figma, Adobe XD</li>
      </ul>
    </section>
  );
}
