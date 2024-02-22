import { Link } from "react-scroll";
import classes from "./Button.module.css";

export default function Button({ children, moveTo, ...props }) {
  return (
    <>
      <Link to={moveTo} className={classes.btn} role="button" {...props}><span className={classes.btnText}>{children}</span></Link>
    </>
  );
}
