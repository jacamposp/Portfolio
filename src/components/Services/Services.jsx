import classes from "./Services.module.css";

//Icons
import { UilLaptop, UilArrowRight, UilBrowser, UilApps } from "@iconscout/react-unicons";

export default function Services() {
  return (
    <>
      <section className={`greybg`} style={{height:"100vh"}}>
        <div className={"container"}>
          <div className={classes.services_title_container}>
            <h3 className={classes.services_title}>What do i offer?</h3>
            <p className={classes.services_description}>
              With over 5 years of experience in various technologies, I can
              make your project a reality.
            </p>
          </div>
          <div className={classes.services_container}>
            <div>
              <div className={classes.card_container}>
                <div className={classes.services_icon}><UilBrowser size="40" color="#ed9f31" /></div>
                <a className={classes.card_title} href="#">UX / UI Design</a>
                <p className={classes.card_text}>
                  The phrasal sequence of the is now so that many campaign and
                  benefit
                </p>
                <div className={classes.card_link}>
                  <a href="#" className={classes.link}>Read more <UilArrowRight size="25" color="#ed9f31"/></a>
                </div>
              </div>
            </div>
            <div>
            <div className={classes.card_container}>
                <div className={classes.services_icon}><UilLaptop size="40" color="#ed9f31" /></div>
                <a className={classes.card_title} href="#">Web Design</a>
                <p className={classes.card_text}>
                  The phrasal sequence of the is now so that many campaign and
                  benefit
                </p>
                <div className={classes.card_link}>
                  <a href="#" className={classes.link}>Read more <UilArrowRight size="25" color="#ed9f31"/></a>
                </div>
              </div>
            </div>
            <div>
            <div className={classes.card_container}>
                <div className={classes.services_icon}><UilApps size="40" color="#ed9f31" /></div>
                <a className={classes.card_title} href="#">App Design</a>
                <p className={classes.card_text}>
                  The phrasal sequence of the is now so that many campaign and
                  benefit
                </p>
                <div className={classes.card_link}>
                  <a href="#" className={classes.link}>Read more <UilArrowRight size="25" color="#ed9f31"/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
