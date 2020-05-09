import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { user } from "../../assets/data/User";

export const Footer = () => {
  const { exp, projectCount, projectInviteCount } = user.data;
  return (
    <footer className={styles.footer}>
      <section className={styles.container}>
        <section className={styles.item}>
          <FontAwesomeIcon icon={faGlobe} className={styles.icon} />
          <p>Experience</p>
          <p>{exp} years</p>
        </section>

        <section className={styles.item}>
          <FontAwesomeIcon icon={faFile} className={styles.icon} />
          <p>Total Projects worked on</p>
          <p>{projectCount}</p>
        </section>
        <section className={styles.item}>
          <FontAwesomeIcon icon={faFile} className={styles.icon} />
          <p>Project Invites Recieved </p>
          <p>{projectInviteCount}</p>
        </section>
        <section className={styles.item}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          <p>Email</p>
          <p>meganathanpalani26@gmail.com</p>
        </section>
      </section>
    </footer>
  );
};
