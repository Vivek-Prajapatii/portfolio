import AboutMe from "@/components/AboutMe";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import styles from "./page.module.scss";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <section className={styles.section} id="hero"></section>
      <section className={styles.section} id="about">
        <AboutMe />
      </section>
      <section className={styles.section} id="skills">
        <Skills />
      </section>
      <section className={styles.section} id="contact">
        <Contact />
      </section>
    </main>
  );
}
