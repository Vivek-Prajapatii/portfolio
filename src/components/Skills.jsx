import React from "react";
import styles from "../styles/Skills.module.scss";
import { FaHtml5, FaReact, FaNodeJs, FaSass } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiNestjs,
  SiMui,
  SiCss3,
  SiAntdesign,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 color="#e34c26" size={40} /> },
  { name: "React", icon: <FaReact color="#61dafb" size={40} /> },
  { name: "JavaScript", icon: <SiJavascript color="#f7df1e" size={40} /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178c6" size={40} /> },
  { name: "Next.js", icon: <SiNextdotjs color="#000" size={40} /> },
  { name: "Node.js", icon: <FaNodeJs color="#339933" size={40} /> },
  { name: "NestJS", icon: <SiNestjs color="#e0234e" size={40} /> },
  { name: "Material UI", icon: <SiMui color="#007fff" size={40} /> },
  { name: "CSS", icon: <SiCss3 color="#2965f1" size={40} /> },
  { name: "SASS", icon: <FaSass color="#cc6699" size={40} /> },
  { name: "Ant Design", icon: <SiAntdesign color="#0170fe" size={40} /> },
  { name: "MongoDB", icon: <SiMongodb color="#47a248" size={40} /> },
  { name: "SQL", icon: <SiMysql color="#00758f" size={40} /> },
];

const Skills = () => (
  <section className={styles.skillsSection}>
    <h2 className={styles.title}>Skills</h2>
    <div className={styles.cardsContainer}>
      {skills.map((skill) => (
        <div key={skill.name} className={styles.skillCard}>
          <span className={styles.skillImg} style={{ marginBottom: "0.5rem" }}>
            {skill.icon}
          </span>
          {skill.name}
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
