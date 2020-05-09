import React from "react";
import styles from "./ProjectDetail.module.css";

export const ProjectDetail = (props) => {
  const {
    description,
    projectTitle,
    projectStartDate,
    projectEndDate,
    role,
  } = props.project;
  const projectNo = props.no.toString().padStart(2, "0");

  return (
    <section className={styles.item}>
      <section className={styles.detail}>
        <p className={styles.projectNo}>Project {projectNo}</p>
        <p className={styles.projectName}>{projectTitle}</p>
        <p className={styles.projectName}>{role}</p>
        <p className={styles.projectDes}>{description}</p>
        <p className={styles.projectDes}>
          This project has started on {projectStartDate} and ended on{" "}
          {projectEndDate}.
        </p>
      </section>
    </section>
  );
};
