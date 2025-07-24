
import AboutMe from "@/components/AboutMe";
import Contact from "../components/Contact";
import Skills from "../components/Skills";


export default function HomePage() {
  return (
    <main
      style={{
        scrollSnapType: "y mandatory",
        overflowY: "auto",
      }}
    >
      <section style={{ scrollSnapAlign: "start" }} id="hero">
      </section>
      <section style={{ scrollSnapAlign: "start" }} id="about">
        <AboutMe />
      </section>
      <section style={{ scrollSnapAlign: "start" }} id="skills">
        <Skills />
      </section>
      <section style={{ scrollSnapAlign: "start" }} id="contact">
        <Contact />
      </section>
    </main>
  );
}
