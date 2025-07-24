import styles from "../styles/Footer.module.scss";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.copyright}>
          <span>© {new Date().getFullYear()} Built with</span>
          <span className={styles.heart}>
            <FaHeart />
          </span>
          <span>by Vivek Prajapati</span>
        </div>
        <div className={styles.links}>
          <a
            href="https://github.com/Vivek-Prajapatii"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className={styles.icon} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className={styles.icon} />
            LinkedIn
          </a>
          <a href="mailto:your.email@example.com">
            <FaEnvelope className={styles.icon} />
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
