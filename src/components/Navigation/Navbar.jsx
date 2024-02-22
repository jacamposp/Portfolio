import { useState } from "react";
import { NavLink } from "react-router-dom";

import Icon from "./Icon";
import Button from "../UI/Button";

import classes from "./NavBar.module.css";

export default function NavBar() {
  const [isSticky, setIsSticky] = useState(false);
  window.addEventListener("scroll", windowScroll);
  function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (
      document.body.scrollTop >= 30 ||
      document.documentElement.scrollTop >= 30
    ) {
      if (navbar !== null) {
        navbar?.classList.add("is-sticky");
        setIsSticky(true);
      }
    } else {
      if (navbar !== null) {
        navbar?.classList.remove("is-sticky");
        setIsSticky(false);
      }
    }
  }
  return (
    <header className={classes.header}>
      <nav
        id="navbar"
        className={`${isSticky ? classes.is_sticky : classes.isNot_sticky}`}
      >
        <div className={`container ${classes.navContainer}`}>
          <Icon className={`${classes.icon} ${classes.logo}`} />
          <ul className={classes.navList}>
            <li>
              <NavLink className={classes.active}>Home</NavLink>
            </li>
            <li>
              <NavLink>About Me</NavLink>
            </li>
            <li>
              <NavLink>Services</NavLink>
            </li>
            <li>
              <NavLink>Projects</NavLink>
            </li>
            <li>
              <NavLink>Contact me</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
