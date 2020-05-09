import React from "react";
import styles from "./Main.module.css";
import { Home } from "./Home/Home";
import { Projects } from "./Projects/Projects";
import { Route } from "react-router-dom";
import { About } from "./About/About";
import { CollegeProjects } from "./CollegeProjects/CollegeProjects";

export const Main = () => {
  return (
    <main className={styles.main}>
      <Route path="/" exact component={Home} />
      <Route path="/projects/" component={Projects} />
      <Route path="/about/" component={About} />
      <Route path="/collegeprojects/" component={CollegeProjects} />
    </main>
  );
};
