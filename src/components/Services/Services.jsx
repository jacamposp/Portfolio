//components
import Card from "./Card";
import Text from "../UI/Text/Text";
//css
import classes from "./Services.module.css";
//Icons
import { UilLaptop, UilBrowser, UilApps } from "@iconscout/react-unicons";

export default function Services() {
  return (
    <>
      <section className={`greybg`} id="services">
        <div className={"container"}>
          <div className={classes.services_title_container}>
            <Text Tag={"h3"} className={classes.services_title}>
              What do i offer?
            </Text>
            <Text Tag={"p"} className={classes.services_description}>
              With over five years of experience in UX/UI design, web design,
              and app design, I offer creative and functional solutions. My
              approach is based on understanding user needs to create intuitive
              and engaging interfaces. With strong skills in visual design and
              user experience, I ensure high-quality results and client
              satisfaction.
            </Text>
          </div>
          <div className={classes.services_container}>
            <Card
              icon={<UilBrowser size="40" color="#ed9f31" />}
              title={"UX / UI Design"}
              description={
                "Develop your project thinking about having the best user experience by designing visually attractive and aesthetic elements."
              }
              linkText={"Read More "}
            />
            <Card
              icon={<UilLaptop size="40" color="#ed9f31" />}
              title={"Web Design"}
              description={
                "Crafting engaging websites with intuitive navigation and stunning visuals to boost your online presence effectively."
              }
              linkText={"Read More "}
            />
            <Card
              icon={<UilApps size="40" color="#ed9f31" />}
              title={"App Design"}
              description={
                "Creating sleek, user-friendly apps with seamless navigation and visually appealing interfaces to enhance user experience."
              }
              linkText={"Read More "}
            />
          </div>
        </div>
      </section>
    </>
  );
}
