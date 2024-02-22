import classes from "./AboutMe.module.css"

import cssLogo from "../../assets/csslogo.svg";
import reactLogo from "../../assets/reactlogo.svg";
import jsLogo from "../../assets/jslogo.svg";
import nodejs from "../../assets/nodejs.svg";
import brasil from "../../assets/brasil.jpg";


export default function Skills() {
  return (
    <>
      <div className={classes.skillsContainer}>
        <h3 className={classes.skillsHeading}>Skills</h3>
        <div className={classes.skillsColumn}>
        <div className={classes.skillsContent}>
            <div className={classes.skillsBackground}>
              <div className={classes.icon}>
                <img src={reactLogo} alt="react logo" />
              </div>
              <div className={classes.level}>
                <p>80%</p>
              </div>
            </div>
            <div>
              <p>React</p>
            </div>
          </div>
          <div className={classes.skillsContent}>
            <div className={classes.skillsBackground}>
              <div className={classes.icon}>
                <img src={jsLogo} alt="javascript logo" />
              </div>
              <div className={classes.level}>
                <p>80%</p>
              </div>
            </div>
            <div>
              <p>React</p>
            </div>
          </div>
          <div className={classes.skillsContent}>
            <div className={classes.skillsBackground}>
              <div className={classes.icon}>
                <img src={cssLogo} alt="css logo" />
              </div>
              <div className={classes.level}>
                <p>80%</p>
              </div>
            </div>
            <div>
              <p>React</p>
            </div>
          </div>
          <div className={classes.skillsContent}>
            <div className={classes.skillsBackground}>
              <div className={classes.icon}>
                <img src={nodejs} alt="Nodejs logo" />
              </div>
              <div className={classes.level}>
                <p>80%</p>
              </div>
            </div>
            <div>
              <p>React</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
