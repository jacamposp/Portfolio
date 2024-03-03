import classes from "./Projects.module.css";

export default function Item({ src, alt }) {
  return (
    <>
      <div className={classes.projects}>
        <img src={src} alt={alt} />
        <div className={classes.layout}></div>
      </div>
    </>
  );
}
