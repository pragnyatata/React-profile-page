import React from "react";
import styles from "./About.css";
import { user } from "../../../assets/data/User";

export const About = () => {
  return (
    <section className={styles.about}>
      <p className={styles.intro}>{user.data.about}</p>
    </section>
  );
};
