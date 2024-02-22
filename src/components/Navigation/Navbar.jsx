import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link as Link1 } from "react-scroll";

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
              <Link1 to="home" activeClass={classes.active} spy={true} smooth={true} duration={500}>Home</Link1>
            </li>
            <li>
              <Link1 to="about" activeClass={classes.active} spy={true} smooth={true} duration={500}>About Me</Link1>
            </li>
            <li>
              <Link1 to="services" activeClass={classes.active} spy={true} smooth={true} duration={500}>Services</Link1>
            </li>
            <li>
              <Link1 to="projects" activeClass={classes.active} spy={true} smooth={true} duration={500}>Projects</Link1>
            </li>
            <li>
              <Link1 to="contact" activeClass={classes.active} spy={true} smooth={true} duration={500}>Contact me</Link1>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
