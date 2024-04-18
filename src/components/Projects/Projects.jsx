//components
import Image from "./Item";
import Text from "../UI/Text/Text";
//css
import classes from "./Projects.module.css";
//images
import img1 from "../../assets/img1.webp";
import img2 from "../../assets/img2.webp";
import img3 from "../../assets/img3.webp";
import img4 from "../../assets/img4.webp";
import img5 from "../../assets/img5.webp";
import img6 from "../../assets/img6.webp";

export default function Projects() {
  return (
    <>
      <section className="container" id="projects">
        <div>
          <div className={classes.projects_Text}>
            <Text Tag={"h2"}>My Works & Projects</Text>
            <Text Tag={"p"}>
              Brief description and demo of my main projects.
            </Text>
          </div>
        </div>
        <div className={classes.projects_Container}>
          <Image src={img1} alt="demo img" />
          <Image src={img2} alt="demo img" />
          <Image src={img3} alt="demo img" />
          <Image src={img4} alt="demo img" />
          <Image src={img5} alt="demo img" />
          <Image src={img6} alt="demo img" />
          <Image src={img1} alt="demo img" />
          <Image src={img2} alt="demo img" />
        </div>
        <p style={{ textAlign: "center" }}>Section on construction</p>
      </section>
    </>
  );
}
