import React from "react";
import styles from "./CollegeProjectDetail.module.css";

export const CollegeProjectDetail = (props) => {
  const {
    description,
    projectName,
    projectStart,
    projectEnd,
    location,
    role,
    responsibility,
  } = props.project;
  const projectNo = props.no.toString().padStart(2, "0");

  return (
    <section className={styles.item}>
      <section className={styles.detail}>
        <p className={styles.projectNo}>Project {projectNo}</p>
        <p className={styles.projectName}>{projectName}</p>
        <p className={styles.projectName}>{role}</p>
        <p className={styles.projectDes}>{description}</p>
        <p className={styles.projectDes}>
          This project has started on {projectStart} and ended on {projectEnd}{" "}
          in {location}.
        </p>
        <p className={styles.projectDes}>
          {" "}
          Responsibilites that were to be fulfilled were
          {responsibility.map((res) => {
            return " " + res + ",";
          })}
          .
        </p>
      </section>
    </section>
  );
};
