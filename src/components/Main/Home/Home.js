import React from "react";
import styles from "./Home.module.css";
import { RoundButton } from "./RoundButton";
import { user } from "../../../assets/data/User";

export const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.avatar}>
        <img src={user.data.image} />
      </div>
      <section className={styles.hello}>
        <p>Welcome {user.data.username}</p>
      </section>
      <section className={styles.button_group}>
        <RoundButton text="Works" target="nav_projects" />
        <RoundButton text="About" target="nav_about" />
        <RoundButton
          text="College works"
          target="nav_collegeprojects"
        ></RoundButton>
      </section>
      <p className={styles.intro}>
        The current Job location is {user.data.location}. Some of the skills
        engrossed by {user.data.firstName} are
        {user.data.skill.map((skill) => {
          return " " + skill;
        })}
        .
      </p>
    </section>
  );
};
