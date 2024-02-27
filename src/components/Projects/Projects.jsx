import Image from "./Item";

//images
import img1 from "../../assets/img1.webp";
import img2 from "../../assets/img2.webp";
import img3 from "../../assets/img3.webp";
import img4 from "../../assets/img4.webp";
import img5 from "../../assets/img5.webp";
import img6 from "../../assets/img6.webp";

import classes from "./Projects.module.css";

export default function Projects() {
  return (
    <>
      <section className="container">
        <div id="projects">
          <div className={classes.projects_Text}>
            <h3>My Works & Projects</h3>
            <p>Brief description and demo of my main projects.</p>
          </div>
        </div>
        <div className={classes.projects_Container}>
          <Image src={img1} alt="demo img" />
          <Image src={img2} alt="demo img" />
          <Image src={img3} alt="demo img" />
          <Image src={img4} alt="demo img" />
          <Image src={img5} alt="demo img" />
          <Image src={img6} alt="demo img" />
        </div>
        <p style={{ textAlign: "center" }}>Section on construction</p>
      </section>
    </>
  );
}
