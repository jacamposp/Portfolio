import classes from "./Button.module.css";

export default function Button({children}) {
  return (
    <button className={classes.btn}>
      <p className={classes.btnText}>{children}</p>
    </button>
  );
}
