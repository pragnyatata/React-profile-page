import React from "react";
import styles from "./Header.module.css";
import { NavItem } from "./NavItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { user } from "../../assets/data/User";

export class Header extends React.Component {
  constructor() {
    super();
    this.state = { isShown: false, currentPage: "home" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const newPage = e.currentTarget.getAttribute("value")
      ? e.currentTarget.getAttribute("value")
      : this.state.currentPage;

    this.setState({
      isShown: !this.state.isShown,
      currentPage: newPage,
    });
  }

  render() {
    return (
      <header className={styles.header}>
        <div>
          <p className={styles.name}>
            {user.data.firstName + " " + user.data.lastName}
          </p>
          <p className={styles.job}>{user.data.jobTitle}</p>
        </div>
        <nav
          className={
            styles.navBar + " " + (this.state.isShown ? styles.show : "")
          }
        >
          <FontAwesomeIcon
            icon={faBars}
            className={styles.icon}
            onClick={this.handleClick}
          />
          <FontAwesomeIcon
            id="close"
            icon={faTimes}
            className={styles.icon + " " + styles.close}
            onClick={this.handleClick}
          />
          <ul>
            <NavItem
              id="nav_home"
              target="/"
              value="home"
              onClick={this.handleClick}
              currentPage={this.state.currentPage}
            />

            <NavItem
              id="nav_projects"
              target="/projects"
              value="projects"
              onClick={this.handleClick}
              currentPage={this.state.currentPage}
            />
            <NavItem
              id="nav_about"
              target="/about"
              value="about"
              onClick={this.handleClick}
              currentPage={this.state.currentPage}
            />
            <NavItem
              id="nav_collegeprojects"
              target="/collegeprojects"
              value="collegeprojects"
              onClick={this.handleClick}
              currentPage={this.state.currentPage}
            />
          </ul>
        </nav>
      </header>
    );
  }
}
