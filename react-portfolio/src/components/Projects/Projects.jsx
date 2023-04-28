import Project from "../Project/Project";

import styles from "../../styles/Projects.module.scss";
import { useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([
    {
      name: "Project_01",
      descr: "Short description",
      stack: ["React", "Next.js", "CSS"],
      id: 1,
    },
    {
      name: "Project_02",
      descr: "Short description",
      stack: ["React", "Next.js", "CSS"],
      id: 2,
    },
    {
      name: "Project_03",
      descr: "Short description",
      stack: ["React", "Redux", "SCSS"],
      id: 3,
    },
    {
      name: "Project_04",
      descr: "Short description",
      stack: ["React", "Redux", "SCSS"],
      id: 4,
    },
    {
      name: "Project_05",
      descr: "Short description",
      stack: ["React", "Redux", "SCSS"],
      id: 5,
    },
    {
      name: "Project_06",
      descr: "Short description",
      stack: ["React", "Redux", "SCSS"],
      id: 6,
    },
  ]);

  const renderProjects = () => {
    return projects.map((project) => {
      return <Project key={project.id} {...project} />;
    });
  };

  return (
    <section className={styles.projects}>
      <h2 className={styles["projects__title"]}>MY PROJECTS</h2>
      <ul className={styles["projects__list"]}>{renderProjects()}</ul>
    </section>
  );
}
