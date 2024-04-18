//components
import Text from "../UI/Text/Text";
//css
import classes from "./AboutMe.module.css";
//logos
import cssLogo from "../../assets/csslogo.svg";
import reactLogo from "../../assets/reactlogo.svg";
import jsLogo from "../../assets/jslogo.svg";
import nodejs from "../../assets/nodejs.svg";

export default function Skills() {
  return (
    <>
      <div className={classes.skillsContainer}>
        <Text Tag={"h3"} className={classes.skillsHeading}>
          Skills
        </Text>
        <div className={classes.skillsColumn}>
          <div className={classes.skillsContent}>
            <div className={classes.skillsBackground}>
              <div className={classes.icon}>
                <img src={reactLogo} alt="react logo" />
              </div>
              <div className={classes.skillName}>
                <Text Tag={"p"}>React</Text>
              </div>
            </div>
          </div>
          <div className={classes.skillsContent}>
            <div className={classes.skillsBackground}>
              <div className={classes.icon}>
                <img src={jsLogo} alt="javascript logo" />
              </div>
              <div className={classes.skillName}>
                <Text Tag={"p"}>JS</Text>
              </div>
            </div>
          </div>
          <div className={classes.skillsContent}>
            <div className={classes.skillsBackground}>
              <div className={classes.icon}>
                <img src={cssLogo} alt="css logo" />
              </div>
              <div className={classes.skillName}>
                <Text Tag={"p"}>CSS</Text>
              </div>
            </div>
          </div>
          <div className={classes.skillsContent}>
            <div className={classes.skillsBackground}>
              <div className={classes.icon}>
                <img src={nodejs} alt="Nodejs logo" />
              </div>
              <div className={classes.skillName}>
                <Text Tag={"p"}>NodeJS</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
