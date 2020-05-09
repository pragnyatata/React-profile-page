import React from "react";
import styles from "./Projects.module.css";
import { ProjectDetail } from "./ProjectDetail";
import { user } from "../../../assets/data/User";

export const Projects = () => {
  return (
    <section className={styles.projects}>
      <h1>PROJECTS</h1>
      {user.data.project.map((project, index) => (
        <ProjectDetail project={project} no={index + 1} />
      ))}
    </section>
  );
};
