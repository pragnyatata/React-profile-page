import React from "react";
import styles from "./CollegeProjects.module.css";
import { CollegeProjectDetail } from "./CollegeProjectDetail";
import { user } from "../../../assets/data/User";

export const CollegeProjects = () => {
  return (
    <section className={styles.projects}>
      <h1>College Projects</h1>
      {user.data.collegeproject.map((project, index) => (
        <CollegeProjectDetail project={project} no={index + 1} />
      ))}
    </section>
  );
};
