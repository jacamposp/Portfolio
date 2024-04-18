import { useState } from "react";
//components
import Text from "../UI/Text/Text";
//css
import classes from "./Services.module.css";
//icons
import { UilArrowRight } from "@iconscout/react-unicons";

export default function Card({ title, description, linkText, icon }) {
  // const [expanded, setExpanded] = useState(false);

  // let expandedHandler = (event) => {
  //   console.log(event.target)
  //   setExpanded((previousState) => !previousState);
  // }

  return (
    <>
      <div className={`${classes.card_container}`}>
        <div className={classes.services_icon}>{icon}</div>
        <Text Tag={"a"} className={classes.card_title} href="#">
          {title}
        </Text>
        <Text Tag={"p"} className={classes.card_text}>
          {description}
        </Text>
        {/* <div className={classes.card_link}>
          <a role="button" className={classes.link}>
            {linkText} <UilArrowRight size="25" color="#ed9f31" />
          </a>
        </div> */}
      </div>
    </>
  );
}
