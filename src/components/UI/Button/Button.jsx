import { Link } from "react-scroll";
import classes from "./Button.module.css";

export default function Button({ children, moveTo, type, ...props }) {
  if (type === "submit") {
    return (
      <input
        style={{ border: "none" }}
        type={type}
        className={classes.btn}
        role="button"
        value={children}
      ></input>
    );
  }
  return (
    <>
      <Link to={moveTo} className={classes.btn} role="button" {...props}>
        <span className={classes.btnText}>{children}</span>
      </Link>
    </>
  );
}
