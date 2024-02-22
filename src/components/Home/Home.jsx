import { TypeAnimation } from "react-type-animation";

import Button from "../UI/Button";
import classes from "./Home.module.css";

import avatar from "../../assets/Avatar3.png";

//icons
import cssLogo from "../../assets/csslogo.svg";
import reactLogo from "../../assets/reactlogo.svg";
import jsLogo from "../../assets/jslogo.svg";

export default function Home() {
  return (
    <>
      <div className={classes.overlay} id="home">
        <div className="container">
          <div className={classes.home_Container}>
            <div className={classes.name}>
              <h1>Joel Campos Porras</h1>
            </div>
            <div className={classes.job}>
              <p>
                I'm{" "}
                <TypeAnimation
                  sequence={[
                    "Joe",
                    1000,
                    "Web Developer",
                    1000,
                    "App Developer",
                    1000,
                    "UI/UX Designer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="typewrite text-amber-500"
                  repeat={Infinity}
                />
              </p>
            </div>
            <div className={classes.logos}>
              <div>
                <img src={jsLogo} alt="Javascript Logo" />
              </div>
              <div>
                <img
                  className={classes.react}
                  src={reactLogo}
                  alt="React Logo"
                />
              </div>
              <div>
                <img src={cssLogo} alt="CSS Logo" />
              </div>
            </div>
            <div className={classes.description}>
              <p>
                I’m a Web developer & I’m very passionate and dedicated to my
                work. I have acquired the skills and knowledge necessary to make
                your project a success.
              </p>
            </div>
            <div className={classes.contact}>
              <Button moveTo={'contact'} smooth={true} duration={500}>Contact Me</Button>
            </div>
            <div className={classes.avatar}>
              <div>
                <img src={avatar} alt="Joel Campos memoji" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
