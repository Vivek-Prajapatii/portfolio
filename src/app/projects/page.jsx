import styles from "../../styles/Projects.module.scss";
import ProjectCard from "../../components/ProjectCard";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Modern, glassmorphism portfolio built with Next.js, SCSS, and Framer Motion. Fully responsive and blazing fast.",
    link: "https://github.com/vivek/portfolio",
  },
  {
    title: "UI Component Library",
    description:
      "Reusable React component library with Storybook and custom theming. Used in multiple production projects.",
    link: "https://github.com/vivek/ui-library",
  },
  {
    title: "Real-time Chat App",
    description:
      "Full-stack chat app using Next.js, Socket.io, and MongoDB. Features authentication, dark mode, and emoji support.",
    link: "https://github.com/vivek/chat-app",
  },
];

export default function ProjectsPage() {
  return (
    <section className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
